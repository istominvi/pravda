// Node-side editorial builder. Browser views must import ./articles instead.
import type {
  ArgumentRecord,
  ArticleLink,
  ArticleRecord,
  ArticleRelation,
  ArticleSection,
  EventRecord,
  KnowledgeNode,
  Language,
  Localized,
  SourceLink,
} from '../domain/types'
import { argumentsById } from './arguments'
import { editorialArticlesA } from './articleEditorialA'
import { editorialArgumentArticles } from './articleEditorialArguments'
import { editorialArticlesB } from './articleEditorialB'
import { editorialEventArticlesA } from './articleEditorialEventsA'
import { editorialEventArticlesB } from './articleEditorialEventsB'
import { editorialSourcePlans } from './articleSourcePlans'
import { eventsById } from './events'
import { knowledgeNodes, knowledgeNodesById, knowledgeRelations } from './knowledge'

const sectionTitles = {
  eventFacts: {
    ru: 'Что произошло',
    en: 'What happened',
    uk: 'Що відбулося',
  },
  eventMeaning: {
    ru: 'Почему это важно для общей хронологии',
    en: 'Why it matters to the wider chronology',
    uk: 'Чому це важливо для загальної хронології',
  },
  eventReading: {
    ru: 'Как проверять документы и выводы',
    en: 'How to test the documents and conclusions',
    uk: 'Як перевіряти документи та висновки',
  },
  articleQuestion: {
    ru: 'Какие трактовки нужно сопоставить',
    en: 'Interpretations that need comparison',
    uk: 'Які тлумачення слід зіставити',
  },
  articleBasis: {
    ru: 'Фактическая и правовая основа',
    en: 'Factual and legal basis',
    uk: 'Фактична та правова основа',
  },
  articleAnalysis: {
    ru: 'Разбор причинной связи',
    en: 'Analysis of the causal link',
    uk: 'Аналіз причинного зв’язку',
  },
  articleLimits: {
    ru: 'Границы обоснованного вывода',
    en: 'Limits of a supported conclusion',
    uk: 'Межі обґрунтованого висновку',
  },
  conceptMeaning: {
    ru: 'Содержание вопроса',
    en: 'Meaning of the issue',
    uk: 'Зміст питання',
  },
  conceptContext: {
    ru: 'Место в истории конфликта',
    en: 'Place in the history of the conflict',
    uk: 'Місце в історії конфлікту',
  },
  conceptDocuments: {
    ru: 'Как применять к первичным документам',
    en: 'How to apply it to primary documents',
    uk: 'Як застосовувати до первинних документів',
  },
} satisfies Record<string, Localized>

function mapLocalized<T>(mapper: (language: Language) => T): Localized<T> {
  return {
    ru: mapper('ru'),
    en: mapper('en'),
    uk: mapper('uk'),
  }
}

function neutralizeText(value: string, language: Language): string {
  const common = value
    .replace(/VIDEO_ID/gi, 'source reference')
    .replace(/https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be|github\.com)\S*/gi, '')

  if (language === 'ru') {
    return common
      .replace(/Спор Александра/gi, 'Рассматриваемый спор')
      .replace(/для Александра/gi, 'в рассматриваемой логике')
      .replace(/Александр предлагает/gi, 'Статья предлагает')
      .replace(/Александр связывает/gi, 'Статья связывает')
      .replace(/Александр утверждает,?\s*что/gi, 'В статье рассматривается тезис о том, что')
      .replace(/Александр утверждает/gi, 'В статье рассматривается следующий тезис:')
      .replace(/Александр рассматривает/gi, 'Статья рассматривает')
      .replace(/Александр отвергает/gi, 'Статья отвергает')
      .replace(/Александр различает/gi, 'Статья различает')
      .replace(/Александр разводит/gi, 'Статья разделяет')
      .replace(/Александр оспаривает/gi, 'Статья оспаривает')
      .replace(/Александр строит/gi, 'Статья выстраивает')
      .replace(/Александр ставит/gi, 'Статья ставит')
      .replace(/Александр описывает/gi, 'Распространённая версия описывает')
      .replace(/Александр предполагает,?\s*что/gi, 'В статье рассматривается предположение, что')
      .replace(/Александр предполагает/gi, 'Статья предполагает')
      .replace(/Александр одновременно считает/gi, 'Статья одновременно рассматривает')
      .replace(/Александр выводит/gi, 'Рассматриваемый тезис выводит')
      .replace(/Александр[а-яё]*/gi, 'рассматриваемый тезис')
      .replace(/он считает,?\s*что/gi, 'тезис состоит в том, что')
      .replace(/собеседник[а-яё]*/gi, 'альтернативная позиция')
      .replace(/транскрипт[а-яё]*/gi, 'доступный материал')
      .replace(/Фрагмент частично повреждён ASR, поэтому уверенность в полном ходе рассуждения ниже\.?/gi, 'Общая историческая связанность сама по себе не устанавливает ни единство государственности, ни общую политическую волю современных обществ.')
      .replace(/Из доступный материал/gi, 'Из приведённых источников')
      .replace(/В доступный материал/gi, 'В приведённых источниках')
      .replace(/внутри доступный материал/gi, 'в приведённых источниках')
      .replace(/в доступный материал/gi, 'в приведённых источниках')
      .replace(/доступный материал не/gi, 'Приведённые источники не')
      .replace(/Расшифровка не содержит/gi, 'Приведённые источники не содержат')
      .replace(/Фрагменты после 19:26 содержат цитирование Ильина и исследователей; эти слова нельзя целиком приписывать рассматриваемый тезис как его собственную позицию\.?/gi, 'Цитаты Ильина и исследователей являются самостоятельными историческими высказываниями: их нельзя превращать в позицию всей статьи или в доказательство распространённости этих взглядов.')
      .replace(/позиции рассматриваемый тезис/gi, 'рассматриваемой позиции')
      .replace(/Названное Рассматриваемая позиция число/gi, 'Названное число')
      .replace(/Рассматриваемая позиция сам оговаривает/gi, 'В исходной формулировке также оговорено')
      .replace(/^рассматриваемый тезис/, 'Рассматриваемый тезис')
      .replace(/\s{2,}/g, ' ')
      .trim()
  }

  if (language === 'uk') {
    return common
      .replace(/Олександр пропонує/gi, 'Стаття пропонує')
      .replace(/Олександр пов’язує/gi, 'Стаття пов’язує')
      .replace(/Олександр вважає,?\s*що/gi, 'У статті розглядається теза про те, що')
      .replace(/Олександр вважає/gi, 'У статті розглядається така теза:')
      .replace(/Олександр розглядає/gi, 'Стаття розглядає')
      .replace(/Олександр відкидає/gi, 'Стаття відкидає')
      .replace(/Олександр розрізняє/gi, 'Стаття розрізняє')
      .replace(/Олександр ставить під сумнів/gi, 'Стаття ставить під сумнів')
      .replace(/Олександр припускає,?\s*що/gi, 'У статті розглядається припущення, що')
      .replace(/Олександр припускає/gi, 'Стаття припускає')
      .replace(/Олександр[а-яіїєґ]*/gi, 'розглянутий підхід')
      .replace(/масштаб конфлікту він пов’язує/gi, 'масштаб конфлікту пов’язується')
      .replace(/співрозмовник[а-яіїєґ]*/gi, 'альтернативна позиція')
      .replace(/транскрипт[а-яіїєґ]*/gi, 'наявний матеріал')
      .replace(/Частина ASR пошкоджена, тому впевненість у повному ході міркування нижча\.?/gi, 'Спільна історична пов’язаність сама собою не встановлює ані єдності державності, ані спільної політичної волі сучасних суспільств.')
      .replace(/З наявний матеріал/gi, 'З наведених джерел')
      .replace(/У наявний матеріал/gi, 'У наведених джерелах')
      .replace(/у наявний матеріал/gi, 'у наведених джерелах')
      .replace(/в наявний матеріал/gi, 'у наведених джерелах')
      .replace(/наявний матеріал не/gi, 'Наведені джерела не')
      .replace(/Після 19:26 звучать цитати Ільїна та дослідників; їх не можна повністю приписувати розглянутий підхід як власну позицію\.?/gi, 'Цитати Ільїна та дослідників є самостійними історичними висловлюваннями: їх не можна перетворювати на позицію всієї статті або на доказ поширеності цих поглядів.')
      .replace(/Назване Розглянута позиція число/gi, 'Назване число')
      .replace(/Розглянута позиція сам каже/gi, 'У вихідному формулюванні також зазначено')
      .replace(/^розглянутий підхід/, 'Розглянутий підхід')
      .replace(/\s{2,}/g, ' ')
      .trim()
  }

  return common
    .replace(/Alexander argues that/gi, 'The article examines the claim that')
    .replace(/Alexander argues/gi, 'The article examines the claim:')
    .replace(/Alexander links/gi, 'The article links')
    .replace(/Alexander treats/gi, 'The article treats')
    .replace(/Alexander distinguishes/gi, 'The article distinguishes')
    .replace(/Alexander rejects/gi, 'The article rejects')
    .replace(/Alexander challenges/gi, 'The article challenges')
    .replace(/Alexander proposes/gi, 'The article proposes')
    .replace(/Alexander separates/gi, 'The article separates')
    .replace(/Alexander views/gi, 'The article views')
    .replace(/Alexander ties/gi, 'The article ties')
    .replace(/Alexander infers/gi, 'The examined claim infers')
    .replace(/Alexander builds/gi, 'The article builds')
    .replace(/Alexander questions/gi, 'The article questions')
    .replace(/Alexander describes/gi, 'A common account describes')
    .replace(/Alexander expects/gi, 'Some accounts expect')
    .replace(/Alexander's/gi, 'the interpretation under review’s')
    .replace(/Alexander/gi, 'the interpretation under review')
    .replace(/; he attributes/gi, '; the analysis attributes')
    .replace(/interlocutor|interviewer/gi, 'alternative view')
    .replace(/transcript/gi, 'source material')
    .replace(/The ASR is damaged in parts, lowering confidence in the full reasoning chain\.?/gi, 'Shared history alone establishes neither a single statehood nor a common political will among present-day societies.')
    .replace(/inside the source material/gi, 'in the cited evidence')
    .replace(/The source material/gi, 'The cited evidence')
    .replace(/the source material/gi, 'the cited evidence')
    .replace(/Segments after 19:26 quote Ilyin and scholars; those words cannot all be attributed to the interpretation under review as his own position\.?/gi, 'Quotations from Ilyin and other scholars are independent historical statements; they cannot be turned into the position of the article as a whole or evidence that those views were socially prevalent.')
    .replace(/The examined position himself says/gi, 'The original formulation itself notes')
    .replace(/The examined position’s figure/gi, 'The stated figure')
    .replace(/^the interpretation under review/, 'The interpretation under review')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function neutralizeLocalized(value: Localized): Localized {
  return mapLocalized((language) => neutralizeText(value[language], language))
}

function neutralizeParagraphs(value: Localized<string[]>): Localized<string[]> {
  return mapLocalized((language) => value[language]
    .map((paragraph) => neutralizeText(paragraph, language))
    .filter(Boolean))
}

function cleanUnlocalizedText(value: string): string {
  return value
    .replace(/Alexander(?:'s)?/gi, 'the examined position')
    .replace(/Александр[а-яё]*/gi, 'рассматриваемая позиция')
    .replace(/Олександр[а-яіїєґ]*/gi, 'розглянута позиція')
    .replace(/interlocutor|interviewer/gi, 'alternative view')
    .replace(/собеседник[а-яё]*/gi, 'альтернативная позиция')
    .replace(/співрозмовник[а-яіїєґ]*/gi, 'альтернативна позиція')
    .replace(/transcript/gi, 'record')
    .replace(/транскрипт[а-яё]*/gi, 'материал')
    .replace(/VIDEO_ID/gi, 'source reference')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function allowedSourceUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    if (parsed.protocol !== 'https:') return false
    const hostname = parsed.hostname.replace(/^www\./, '')
    if (hostname === 'youtube.com' || hostname === 'youtu.be' || hostname === 'github.com') return false
    return !parsed.href.toLowerCase().includes('transcript')
  } catch {
    return false
  }
}

function cleanSource(source: SourceLink): SourceLink | undefined {
  if (!allowedSourceUrl(source.url)) return undefined
  return {
    title: cleanUnlocalizedText(source.title),
    institution: cleanUnlocalizedText(source.institution),
    url: source.url,
  }
}

function directSources(nodeId: string): SourceLink[] {
  const event = eventsById.get(nodeId)
  if (event) return event.sources.map(cleanSource).filter((source): source is SourceLink => Boolean(source))
  const argument = argumentsById.get(nodeId)
  if (argument) return argument.references.map(cleanSource).filter((source): source is SourceLink => Boolean(source))
  return []
}

const sourceOwnerHints: Record<string, string[]> = {
  ato: ['power-2014'],
  'munich-security-2022': ['budapest'],
  'istanbul-talks-2022': ['full-invasion'],
  'annexation-2022': ['un-charter', 'crimea', 'full-invasion'],
  'spiderweb-2025': ['full-invasion'],
  'concept-sovereignty': ['un-charter', 'ukraine-sovereignty-1990', 'budapest'],
  'concept-territorial-integrity': ['un-charter', 'crimea', 'annexation-2022', 'budapest'],
  'concept-use-of-force': [
    'un-charter',
    'foreign-troop-consent-needs-authority-and-timing',
    'crimea',
    'annexation-2022',
    'full-invasion',
  ],
  'concept-self-defence': ['un-charter', 'full-invasion'],
  'concept-security-assurances': ['budapest', 'budapest-assurances-and-disarmament', 'full-invasion'],
  'concept-alliance-choice': ['bucharest', 'astana'],
  'concept-indivisible-security': ['nato-russia-act', 'astana'],
  'concept-security-dilemma': ['bucharest', 'astana', 'security-dilemma-and-escalation-chain'],
  'concept-constitutional-procedure': ['power-2014', 'transfer-2014-and-ato-authority'],
  'concept-military-oath': ['martial-law'],
  'concept-army-rights-limits': ['power-2014', 'ato', 'martial-law'],
  'concept-self-determination': [
    'ukraine-sovereignty-1990',
    'crimea',
    'annexation-2022',
    'self-determination-needs-consistent-criteria',
  ],
  'concept-ceasefire-sequencing': ['minsk', 'istanbul-talks-2022'],
  'concept-identity-policy': ['ukraine-sovereignty-1990', 'power-2014', 'language-law', 'full-invasion'],
  'concept-cause-vs-justification': [
    'un-charter',
    'minsk',
    'munich-security-2022',
    'full-invasion',
    'istanbul-talks-2022',
  ],
  'concept-election-integrity': ['power-2014', 'electoral-mandate-vs-moral-judgment'],
  'concept-democratic-accountability': ['power-2014', 'wartime-elections-and-continuity'],
  'concept-constitutional-interpretation': ['crimea-transfer-1954', 'power-2014', 'martial-law'],
  'concept-right-to-protest': ['power-2014', 'crimea', 'ato'],
  'concept-public-speech': ['power-2014', 'ato', 'munich-security-2022'],
  'concept-alliance-signals': ['budapest', 'nato-russia-act', 'bucharest', 'full-invasion'],
  'concept-evidence-trust': ['ato', 'minsk', 'full-invasion'],
  'concept-state-capacity': ['ukraine-sovereignty-1990', 'power-2014', 'martial-law', 'spiderweb-2025'],
  'concept-alliance-volatility': ['nato-russia-act', 'bucharest', 'munich-security-2022'],
  'concept-captive-verification': ['ato', 'full-invasion', 'annexation-2022'],
  'concept-population-consent': ['ukraine-sovereignty-1990', 'ussr-dissolution-1991', 'crimea', 'annexation-2022'],
  'concept-elite-continuity': ['power-2014', 'ato', 'minsk'],
  'concept-war-endgame': ['minsk', 'full-invasion', 'istanbul-talks-2022'],
  'concept-russian-language-rights': ['language-law'],
  'concept-population-emigration': ['full-invasion', 'martial-law', 'istanbul-talks-2022', 'annexation-2022'],
  'concept-russia-ukraine-relationship': ['ukraine-sovereignty-1990', 'budapest', 'full-invasion'],
  'concept-strategic-effect': ['spiderweb-2025', 'full-invasion', 'istanbul-talks-2022'],
  'concept-civilian-protection': ['urban-objectives-and-civilian-risk', 'spiderweb-2025', 'full-invasion'],
  'concept-shared-history': ['ukraine-sovereignty-1990', 'ussr-dissolution-1991'],
  'concept-war-aims': [
    'war-as-political-instrument',
    'munich-security-2022',
    'full-invasion',
    'istanbul-talks-2022',
    'spiderweb-2025',
  ],
  'concept-state-continuity': ['ussr-dissolution-1991', 'state-continuity-vs-ideology'],
  'concept-ideology-prevalence': ['power-2014', 'language-law', 'munich-security-2022', 'full-invasion'],
  'concept-valid-consent': ['un-charter', 'foreign-troop-consent-needs-authority-and-timing', 'crimea'],
  'concept-amnesty-vs-verdict': ['power-2014', 'amnesty-law-is-not-adjudication'],
  'concept-threat-rhetoric': ['bucharest', 'full-invasion', 'threat-rhetoric-and-political-cohesion'],
  'concept-wartime-electoral-continuity': [
    'power-2014',
    'full-invasion',
    'martial-law',
    'wartime-elections-and-continuity',
  ],
  'concept-negotiation-status': ['minsk', 'full-invasion', 'istanbul-talks-2022', 'istanbul-draft-not-concluded-peace'],
  'concept-de-facto-vs-de-jure': [
    'ussr-dissolution-1991',
    'crimea',
    'annexation-2022',
    'control-does-not-equal-recognition',
  ],
  'concept-durable-peace': ['minsk', 'istanbul-talks-2022'],
  'war-as-political-instrument': [
    'un-charter',
    'minsk',
    'security-dilemma-and-escalation-chain',
    'munich-security-2022',
    'full-invasion',
  ],
  'ussr-dissolution-and-present-consent': [
    'ukraine-sovereignty-1990',
    'shared-history-vs-statehood',
  ],
  'ideological-examples-and-social-prevalence': ['language-law'],
  'state-capacity-before-symbolic-power': ['full-invasion', 'martial-law'],
  'wartime-elections-and-continuity': ['power-2014', 'full-invasion', 'martial-law'],
}

const ussrDissolutionSupplementalSources: SourceLink[] = [
  {
    title: 'Declaration and Agreement establishing the Commonwealth of Independent States, 8 December 1991 (A/46/771)',
    institution: 'United Nations',
    url: 'https://digitallibrary.un.org/record/134322/files/A_46_771-EN.pdf',
  },
  {
    title: 'Alma-Ata Declaration, 21 December 1991 (A/47/60–S/23329)',
    institution: 'United Nations',
    url: 'https://digitallibrary.un.org/record/197253/files/A_47_60--S_23329-EN.pdf',
  },
]

const supplementalSources: Record<string, SourceLink[]> = {
  'ussr-dissolution-1991': ussrDissolutionSupplementalSources,
  'ussr-dissolution-and-present-consent': ussrDissolutionSupplementalSources,
  'urban-objectives-and-civilian-risk': [{
    title: 'Situation of human rights in Ukraine in the context of the armed attack by the Russian Federation, 24 February–15 May 2022',
    institution: 'Office of the United Nations High Commissioner for Human Rights',
    url: 'https://www.ohchr.org/sites/default/files/documents/countries/ua/2022-06-29/2022-06-UkraineArmedAttack-EN.pdf',
  }],
  'language-law': [{
    title: 'Opinion on the Law on Supporting the Functioning of the Ukrainian Language as the State Language',
    institution: 'Venice Commission',
    url: 'https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD%282019%29032-e',
  }],
  'concept-right-to-protest': [{
    title: 'International Covenant on Civil and Political Rights, Article 21',
    institution: 'Office of the United Nations High Commissioner for Human Rights',
    url: 'https://2covenants.ohchr.org/About-ICCPR.html',
  }],
  'concept-public-speech': [{
    title: 'International Covenant on Civil and Political Rights, Article 19',
    institution: 'Office of the United Nations High Commissioner for Human Rights',
    url: 'https://2covenants.ohchr.org/About-ICCPR.html',
  }],
  'concept-self-defence': [{
    title: 'Military and Paramilitary Activities in and against Nicaragua, Merits, Judgment',
    institution: 'International Court of Justice',
    url: 'https://www.icj-cij.org/node/103143',
  }],
  'concept-population-emigration': [{
    title: 'Ukraine Refugee Situation',
    institution: 'UNHCR',
    url: 'https://data.unhcr.org/en/situations/ukraine',
  }],
  'concept-self-determination': [{
    title: 'Chronology of elections in independent Ukraine: all-Ukrainian referendum, 1 December 1991',
    institution: 'Central Election Commission of Ukraine',
    url: 'https://www.cvk.gov.ua/wp-content/uploads/2020/06/2012_3_Visnik_Cvk.pdf',
  }],
  'concept-captive-verification': [
    {
      title: 'Geneva Convention III relative to the Treatment of Prisoners of War',
      institution: 'International Committee of the Red Cross',
      url: 'https://ihl-databases.icrc.org/en/ihl-treaties/gciii-1949',
    },
    {
      title: 'Berkeley Protocol on Digital Open Source Investigations',
      institution: 'Office of the United Nations High Commissioner for Human Rights',
      url: 'https://www.ohchr.org/sites/default/files/2024-01/OHCHR_BerkeleyProtocol.pdf',
    },
    {
      title: 'Treatment of prisoners of war and persons hors de combat in Ukraine, 24 February 2022–23 February 2023',
      institution: 'Office of the United Nations High Commissioner for Human Rights',
      url: 'https://www.ohchr.org/sites/default/files/2023-10/23-03-24-ukraine-thematic-report-pows-en.pdf',
    },
    {
      title: 'Armed conflict in Ukraine: Families of all prisoners of war need answers on their loved ones',
      institution: 'International Committee of the Red Cross',
      url: 'https://www.icrc.org/en/document/ukraine-conflict-families-all-pows-need-answers-their-loved-ones',
    },
  ],
  'concept-military-oath': [{
    title: 'Law of Ukraine on Military Duty and Military Service',
    institution: 'Verkhovna Rada of Ukraine',
    url: 'https://zakon.rada.gov.ua/go/2232-12',
  }],
  'concept-identity-policy': [{
    title: 'Opinion on the Law on Supporting the Functioning of the Ukrainian Language as the State Language',
    institution: 'Venice Commission',
    url: 'https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD%282019%29032-e',
  }],
  'concept-ideology-prevalence': [{
    title: 'Opinion on the Law on Supporting the Functioning of the Ukrainian Language as the State Language',
    institution: 'Venice Commission',
    url: 'https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD%282019%29032-e',
  }],
  'ideological-examples-and-social-prevalence': [{
    title: 'Opinion on the Law on Supporting the Functioning of the Ukrainian Language as the State Language',
    institution: 'Venice Commission',
    url: 'https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD%282019%29032-e',
  }],
  'wartime-elections-and-continuity': [
    {
      title: 'Results of the 2019 repeat presidential vote',
      institution: 'Central Election Commission of Ukraine',
      url: 'https://www.cvk.gov.ua/pls/vp2019/wp313pt001f01%3D720.html',
    },
    {
      title: 'Volodymyr Zelenskyy took the oath of office of the President of Ukraine, 20 May 2019',
      institution: 'President of Ukraine',
      url: 'https://www.president.gov.ua/en/news/volodimir-zelenskij-sklav-prisyagu-prezidenta-ukrayini-55477',
    },
  ],
  'electoral-mandate-vs-moral-judgment': [{
    title: 'Ukraine, Early Presidential Elections 25 May 2014: Final Report',
    institution: 'OSCE Office for Democratic Institutions and Human Rights',
    url: 'https://odihr.osce.org/odihr/elections/ukraine/120549',
  }],
  'istanbul-draft-not-concluded-peace': [
    {
      title: 'Prime Minister pledges UK support to Ukraine on visit to Kyiv, 9 April 2022',
      institution: 'Government of the United Kingdom',
      url: 'https://www.gov.uk/government/news/prime-minister-pledges-uks-unwavering-support-to-ukraine-on-visit-to-kyiv-9-april-2022',
    },
    {
      title: 'Killings of civilians: summary executions and attacks on individual civilians in Kyiv, Chernihiv, and Sumy regions',
      institution: 'Office of the United Nations High Commissioner for Human Rights',
      url: 'https://www.ohchr.org/sites/default/files/documents/countries/ukraine/2022/2022-12-07-OHCHR-Thematic-Report-Killings-EN.pdf',
    },
  ],
  'ceasefire-is-not-durable-peace': [{
    title: 'Protocol on the results of consultations of the Trilateral Contact Group, 5 September 2014',
    institution: 'Organization for Security and Co-operation in Europe',
    url: 'https://www.osce.org/home/123257',
  }],
  'concept-russian-language-rights': [{
    title: 'Opinion on the Law on Supporting the Functioning of the Ukrainian Language as the State Language',
    institution: 'Venice Commission',
    url: 'https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD%282019%29032-e',
  }],
}

function deduplicateSources(sources: SourceLink[]): SourceLink[] {
  const unique = new Map<string, SourceLink>()
  for (const source of sources) {
    const cleaned = cleanSource(source)
    if (cleaned && !unique.has(cleaned.url)) unique.set(cleaned.url, cleaned)
  }
  return [...unique.values()]
}

function selectSourcesByOwner(groups: SourceLink[][], limit: number): SourceLink[] {
  const selected: SourceLink[] = []
  const seen = new Set<string>()
  const add = (source: SourceLink) => {
    const cleaned = cleanSource(source)
    if (!cleaned || seen.has(cleaned.url) || selected.length >= limit) return
    seen.add(cleaned.url)
    selected.push(cleaned)
  }

  for (const group of groups) {
    const first = group.find((source) => !seen.has(source.url))
    if (first) add(first)
  }
  for (const group of groups) {
    for (const source of group) add(source)
  }
  return selected
}

function sourcesForNode(nodeId: string): SourceLink[] {
  const own = directSources(nodeId)
  const supplemental = supplementalSources[nodeId] ?? []
  const node = knowledgeNodesById.get(nodeId)
  const explicitOwnerIds = sourceOwnerHints[nodeId] ?? []
  if (own.length > 0 && node?.eventId && supplemental.length === 0 && explicitOwnerIds.length === 0) {
    return deduplicateSources(own).slice(0, 8)
  }

  const argumentEventIds = node?.argumentId
    ? (argumentsById.get(node.argumentId)?.relatedEventIds ?? [])
    : []
  const ownerIds = [...new Set([...explicitOwnerIds, ...argumentEventIds])]
  const hintedGroups = ownerIds.map(directSources)
  const plannedSources = deduplicateSources(
    (editorialSourcePlans[nodeId] ?? [])
      .flat()
      .flatMap((selector) => sourcesForEditorialSelector(nodeId, selector)),
  )
  if (hintedGroups.some((group) => group.length > 0) || supplemental.length > 0) {
    const contextual = selectSourcesByOwner([supplemental, own, ...hintedGroups], 12)
    return deduplicateSources([...plannedSources, ...contextual]).slice(0, 12)
  }

  const collected = [...own]
  const visited = new Set([nodeId])
  let frontier = [nodeId]
  for (let depth = 0; depth < 4 && collected.length < 8; depth += 1) {
    const next: string[] = []
    for (const currentId of frontier) {
      for (const relation of knowledgeRelations) {
        const otherId = relation.source === currentId
          ? relation.target
          : relation.target === currentId
            ? relation.source
            : undefined
        if (!otherId || visited.has(otherId)) continue
        visited.add(otherId)
        next.push(otherId)
        collected.push(...directSources(otherId))
      }
    }
    frontier = next
  }

  const fallback = eventsById.get('un-charter')?.sources ?? []
  return deduplicateSources(collected.length > 0 ? collected : fallback).slice(0, 8)
}

function sectionSourceUrls(sources: SourceLink[], offset = 0): string[] | undefined {
  if (sources.length === 0) return undefined
  const selected = [...sources.slice(offset, offset + 3), ...sources.slice(0, 3)]
  return [...new Set(selected.map((source) => source.url))].slice(0, 3)
}

interface ChronologyAnchor {
  date?: string
}

const nodeOrder = new Map(knowledgeNodes.map((node, index) => [node.id, index]))

function chronologyAnchor(nodeId: string): ChronologyAnchor {
  const node = knowledgeNodesById.get(nodeId)
  if (!node) return {}
  if (node.date) return { date: node.date }

  const visited = new Set([nodeId])
  let frontier = [nodeId]
  while (frontier.length > 0) {
    const next: string[] = []
    for (const currentId of frontier) {
      for (const relation of knowledgeRelations) {
        const otherId = relation.source === currentId
          ? relation.target
          : relation.target === currentId
            ? relation.source
            : undefined
        if (otherId && !visited.has(otherId)) {
          visited.add(otherId)
          next.push(otherId)
        }
      }
    }

    const dated = next
      .map((candidateId) => knowledgeNodesById.get(candidateId))
      .filter((candidate): candidate is KnowledgeNode & { date: string } => Boolean(candidate?.date))
      .sort((left, right) => {
        const byDate = left.date.localeCompare(right.date)
        return byDate || (nodeOrder.get(left.id) ?? 0) - (nodeOrder.get(right.id) ?? 0)
      })
    if (dated[0]) return { date: dated[0].date }
    frontier = next
  }

  return {}
}

const relationSeeds = (() => {
  const unique = new Map<string, ArticleRelation>()
  for (const relation of knowledgeRelations) {
    if (!knowledgeNodesById.has(relation.source) || !knowledgeNodesById.has(relation.target)) continue
    // A pair appears only once in the public graph. Legacy inputs sometimes
    // describe the same relationship in both directions; keeping both would
    // place one article on two sides of the focused graph and duplicate it in
    // the article inspector. The first editorial direction remains canonical.
    const key = [relation.source, relation.target].sort().join('\u0000')
    if (unique.has(key)) continue
    unique.set(key, {
      id: `article-${relation.source}-${relation.target}`,
      source: relation.source,
      target: relation.target,
      label: neutralizeLocalized(relation.label),
      note: neutralizeLocalized(relation.note),
    })
  }
  return [...unique.values()]
})()

function linksForNode(nodeId: string): ArticleLink[] {
  return relationSeeds
    .filter((relation) => relation.source === nodeId)
    .map((relation) => ({
      articleId: relation.target,
      label: relation.label,
      note: relation.note,
    }))
}

function eventSections(event: EventRecord, sources: SourceLink[]): ArticleSection[] {
  return [
    {
      title: sectionTitles.eventFacts,
      paragraphs: neutralizeParagraphs(event.context),
      sourceUrls: sectionSourceUrls(sources),
    },
    {
      title: sectionTitles.eventMeaning,
      paragraphs: neutralizeParagraphs(event.dispute),
      sourceUrls: sectionSourceUrls(sources, 2),
    },
    {
      title: sectionTitles.eventReading,
      paragraphs: neutralizeParagraphs(event.checks),
      sourceUrls: sectionSourceUrls(sources, 4),
    },
  ]
}

function eventLead(event: EventRecord): Localized {
  const lead = neutralizeLocalized(event.lead)
  return mapLocalized((language) => {
    const continuation = language === 'ru'
      ? `Статья помещает «${event.title.ru}» в общую хронологию и сопоставляет буквальный текст официальных материалов с позднейшими политическими трактовками. Отдельно показано, какие выводы подтверждаются документами, а какие требуют дополнительного исторического обоснования.`
      : language === 'uk'
        ? `Стаття розміщує «${event.title.uk}» у загальній хронології та зіставляє буквальний текст офіційних матеріалів із пізнішими політичними тлумаченнями. Окремо показано, які висновки підтверджують документи, а які потребують додаткового історичного обґрунтування.`
        : `The article places “${event.title.en}” in the wider chronology and compares the literal record of official materials with later political interpretations. It distinguishes conclusions supported by the documents from those requiring further historical evidence.`
    return `${lead[language]} ${continuation}`
  })
}

function argumentLead(argument: ArgumentRecord): Localized {
  const thesis = neutralizeLocalized(argument.thesis)
  return mapLocalized((language) => {
    const topic = neutralizeText(argument.topic[language], language)
    const introduction = language === 'ru'
      ? `В центре статьи следующий вопрос: ${topic}.`
      : language === 'uk'
        ? `У центрі статті таке питання: ${topic}.`
        : `The article centres on the following question: ${topic}.`
    return `${introduction} ${thesis[language]}`
  })
}

function argumentReading(value: Localized, role: 'first' | 'second'): Localized {
  return mapLocalized((language) => {
    const text = neutralizeText(value[language], language)
    if (language === 'ru') {
      const label = role === 'first' ? 'Одна трактовка' : 'Другая трактовка'
      return text
        .replace(/^В отрывке нет развёрнутого встречного возражения; контекстом служит спор о прилёте рядом с гражданским объектом\.$/i, 'Одна трактовка сосредоточена на сообщении о попадании рядом с гражданским объектом и требует отдельно проверить наличие военной цели, работу ПВО и принятые меры предосторожности.')
        .replace(/^В этом монологе развёрнутого возражения нет; ранее альтернативная позиция противопоставляет российским примерам украинский национализм\.$/i, 'Одна трактовка сопоставляет российские исторические примеры с украинским национализмом и переносит спор в область символов и политики идентичности.')
        .replace(/^альтернативная позиция/i, label)
        .replace(/^Статья/i, label)
        .replace(/^Рассматриваемый тезис/i, label)
        .replace(/^В статье рассматривается тезис о том, что/i, `${label} состоит в том, что`)
    }
    if (language === 'uk') {
      const label = role === 'first' ? 'Одне тлумачення' : 'Інше тлумачення'
      return text
        .replace(/^В уривку немає розгорнутого заперечення; контекстом є суперечка про влучання поруч із цивільними\.$/i, 'Одне тлумачення зосереджується на повідомленні про влучання поруч із цивільним об’єктом і вимагає окремо перевірити наявність військової цілі, роботу ППО та вжиті запобіжні заходи.')
        .replace(/^У цьому монолозі немає розгорнутого заперечення; раніше альтернативна позиція протиставляє російським прикладам український націоналізм\.$/i, 'Одне тлумачення зіставляє російські історичні приклади з українським націоналізмом і переносить суперечку у сферу символів та політики ідентичності.')
        .replace(/^альтернативна позиція/i, label)
        .replace(/^Стаття/i, label)
        .replace(/^Розглянутий підхід/i, label)
        .replace(/^У статті розглядається теза про те, що/i, `${label} полягає в тому, що`)
    }
    const label = role === 'first' ? 'One reading' : 'Another reading'
    return text
      .replace(/^The excerpt contains no developed counterargument; the context is a dispute about an impact near civilians\.$/i, 'One reading focuses on a reported impact near civilians and requires separate verification of the military objective, air-defence activity, and precautions taken.')
      .replace(/^The monologue contains no developed objection; earlier the alternative view counters Russian examples with Ukrainian nationalism\.$/i, 'One reading compares Russian historical examples with Ukrainian nationalism and moves the dispute into the field of symbols and identity policy.')
      .replace(/^The alternative views?/i, label)
      .replace(/^The article/i, label)
      .replace(/^The interpretation under review/i, label)
      .replace(/^The article examines the claim that/i, `${label} holds that`)
  })
}

function argumentSections(argument: ArgumentRecord, sources: SourceLink[]): ArticleSection[] {
  const thesis = neutralizeLocalized(argument.thesis)
  const premises = neutralizeParagraphs(argument.premises)
  const reasoning = neutralizeLocalized(argument.reasoning)
  const conclusion = neutralizeLocalized(argument.conclusion)
  const limitations = neutralizeParagraphs(argument.limitations)
  const firstReading = argumentReading(argument.objection, 'first')
  const secondReading = argumentReading(argument.response, 'second')

  return [
    {
      title: sectionTitles.articleQuestion,
      paragraphs: mapLocalized((language) => [firstReading[language], secondReading[language]]),
      sourceUrls: sectionSourceUrls(sources),
    },
    {
      title: sectionTitles.articleBasis,
      paragraphs: mapLocalized((language) => premises[language].length > 0
        ? premises[language]
        : [thesis[language]]),
      sourceUrls: sectionSourceUrls(sources),
    },
    {
      title: sectionTitles.articleAnalysis,
      paragraphs: mapLocalized((language) => [reasoning[language], conclusion[language]]),
      sourceUrls: sectionSourceUrls(sources),
    },
    {
      title: sectionTitles.articleLimits,
      paragraphs: mapLocalized((language) => limitations[language].length > 0
        ? limitations[language]
        : [language === 'ru'
          ? 'Вывод ограничен содержанием приведённых документов и не подменяет отдельную проверку фактов.'
          : language === 'uk'
            ? 'Висновок обмежений змістом наведених документів і не замінює окремої перевірки фактів.'
            : 'The conclusion is limited by the cited documents and does not replace a separate factual inquiry.']),
      sourceUrls: sectionSourceUrls(sources),
    },
  ]
}

function connectedNotes(nodeId: string): Localized<string[]> {
  const touching = relationSeeds.filter((relation) => relation.source === nodeId || relation.target === nodeId)
  return mapLocalized((language) => touching
    .slice(0, 5)
    .map((relation) => {
      const otherId = relation.source === nodeId ? relation.target : relation.source
      const other = knowledgeNodesById.get(otherId)
      const otherTitle = other ? neutralizeText(other.title[language], language) : otherId
      return `${otherTitle}: ${relation.note[language]}`
    }))
}

function conceptLead(node: KnowledgeNode): Localized {
  const summary = neutralizeLocalized(node.summary)
  const relatedIds = relationSeeds
    .filter((relation) => relation.source === node.id || relation.target === node.id)
    .map((relation) => relation.source === node.id ? relation.target : relation.source)
  return mapLocalized((language) => {
    const linkedTitles = relatedIds
      .slice(0, 2)
      .map((articleId) => knowledgeNodesById.get(articleId)?.title[language])
      .filter((title): title is string => Boolean(title))
      .join(language === 'en' ? ' and ' : ' и ')
    const ending = linkedTitles
      ? language === 'ru'
        ? `В общей хронологии вопрос раскрывается через материалы «${linkedTitles}».`
        : language === 'uk'
          ? `У загальній хронології питання розкривається через матеріали «${linkedTitles}».`
          : `In the wider chronology, the issue is developed through ${linkedTitles}.`
      : language === 'ru'
        ? 'Понятие используется как рабочий инструмент для чтения первичных документов и связанных событий.'
        : language === 'uk'
          ? 'Поняття використовується як робочий інструмент для читання первинних документів і пов’язаних подій.'
          : 'The concept is used as a working tool for reading primary documents and related events.'
    const purpose = language === 'ru'
      ? 'Цель статьи — показать, какие вопросы нужно задать до переноса общего принципа на конкретный эпизод войны.'
      : language === 'uk'
        ? 'Мета статті — показати, які питання слід поставити до перенесення загального принципу на конкретний епізод війни.'
        : 'The article shows which questions must be answered before applying a general principle to a particular episode of the war.'
    return `${summary[language]} ${ending} ${purpose}`
  })
}

function conceptSections(node: KnowledgeNode, sources: SourceLink[]): ArticleSection[] {
  const summary = neutralizeLocalized(node.summary)
  const notes = connectedNotes(node.id)
  const sourceDescription = mapLocalized((language) => {
    const institutions = [...new Set(sources.map((source) => source.institution))].slice(0, 4).join(', ')
    if (language === 'ru') {
      return `Применение этого вопроса к украинской хронологии требует читать нормы и заявления в полном контексте. В подборке представлены документы следующих институций: ${institutions}.`
    }
    if (language === 'uk') {
      return `Застосування цього питання до української хронології потребує читати норми й заяви в повному контексті. У добірці представлені документи таких інституцій: ${institutions}.`
    }
    return `Applying this issue to the Ukrainian chronology requires reading rules and statements in full context. The source set includes documents from: ${institutions}.`
  })

  return [
    {
      title: sectionTitles.conceptMeaning,
      paragraphs: mapLocalized((language) => [
        summary[language],
        language === 'ru'
          ? `Для статьи «${node.title.ru}» важно отделять юридическое правило, установленный факт и политическую интерпретацию.`
          : language === 'uk'
            ? `Для статті «${node.title.uk}» важливо відокремлювати юридичне правило, встановлений факт і політичне тлумачення.`
            : `For “${node.title.en}”, it is important to separate a legal rule, an established fact, and a political interpretation.`,
      ]),
      sourceUrls: sectionSourceUrls(sources),
    },
    {
      title: sectionTitles.conceptContext,
      paragraphs: mapLocalized((language) => notes[language].length > 0
        ? notes[language]
        : [summary[language]]),
      sourceUrls: sectionSourceUrls(sources, 2),
    },
    {
      title: sectionTitles.conceptDocuments,
      paragraphs: mapLocalized((language) => [
        sourceDescription[language],
        language === 'ru'
          ? 'Ссылка на документ показывает, что именно было принято или заявлено; причинные и моральные выводы должны обосновываться отдельно.'
          : language === 'uk'
            ? 'Посилання на документ показує, що саме було ухвалено або заявлено; причинні та моральні висновки треба обґрунтовувати окремо.'
            : 'A document establishes what was adopted or stated; causal and moral conclusions require separate support.',
      ]),
      sourceUrls: sectionSourceUrls(sources, 4),
    },
  ]
}

type ArticleDraft = Omit<ArticleRecord, 'number'>

const editorialArticles = {
  ...editorialArticlesA,
  ...editorialArticlesB,
  ...editorialEventArticlesA,
  ...editorialEventArticlesB,
  ...editorialArgumentArticles,
}

function sourcesForEditorialSelector(articleId: string, selector: string): SourceLink[] {
  if (selector === '@supplemental') return supplementalSources[articleId] ?? []
  const indexed = selector.match(/^(.*)#(\d+)$/)
  if (!indexed) return directSources(selector)
  const ownerSources = indexed[1] === '@supplemental'
    ? (supplementalSources[articleId] ?? [])
    : directSources(indexed[1]!)
  const source = ownerSources[Number(indexed[2])]
  return source ? [source] : []
}

function editorialSourceUrls(articleId: string, sources: SourceLink[], sectionIndex: number): string[] | undefined {
  const selectors = editorialSourcePlans[articleId]?.[sectionIndex] ?? []
  const candidateGroups = selectors.map((selector) => sourcesForEditorialSelector(articleId, selector))
  const articleUrls = new Set(sources.map((source) => source.url))
  const selected: string[] = []
  const maxInlineSources = 4

  // Preserve the editorial plan: first give every named source owner one slot,
  // then use any remaining slots for additional documents from those owners.
  for (const group of candidateGroups) {
    const first = group.find((source) => articleUrls.has(source.url) && !selected.includes(source.url))
    if (first) selected.push(first.url)
    if (selected.length === maxInlineSources) break
  }
  if (selected.length < maxInlineSources) {
    for (const group of candidateGroups) {
      for (const source of group) {
        if (articleUrls.has(source.url) && !selected.includes(source.url)) selected.push(source.url)
        if (selected.length === maxInlineSources) break
      }
      if (selected.length === maxInlineSources) break
    }
  }
  return selected.length > 0 ? selected : undefined
}

function applyEditorialArticle(article: ArticleDraft): ArticleDraft {
  const editorial = editorialArticles[article.id]
  if (!editorial) {
    throw new Error(`Missing editorial override for article "${article.id}". Add it to an articleEditorial*.ts registry before generating public data.`)
  }
  return {
    ...article,
    lead: editorial.lead,
    sections: editorial.sections.map((section, sectionIndex) => ({
      title: section.title,
      paragraphs: section.paragraphs,
      sourceUrls: editorialSourceUrls(article.id, article.sources, sectionIndex),
    })),
  }
}

const chronologyDateOverrides: Record<string, string> = {
  'concept-military-oath': '1992-03-25',
  'budapest-assurances-and-disarmament': '1994-12-05',
  'foreign-troop-consent-needs-authority-and-timing': '2014-03-01',
  'concept-valid-consent': '2014-03-01',
  'self-determination-needs-consistent-criteria': '2014-03-16',
  'concept-army-rights-limits': '2014-04-14',
  'concept-civilian-protection': '2014-04-14',
  'state-continuity-vs-ideology': '1991-12-26',
  'concept-alliance-volatility': '2022-02-19',
  'concept-self-defence': '2022-02-24',
  'concept-cause-vs-justification': '2022-02-24',
  'concept-war-aims': '2022-02-24',
  'state-capacity-before-symbolic-power': '2022-02-24',
  'control-does-not-equal-recognition': '2022-09-30',
  'istanbul-draft-not-concluded-peace': '2022-03-29',
  'tactical-effect-vs-strategic-outcome': '2025-06-01',
}

function articleDraft(node: KnowledgeNode): ArticleDraft {
  const anchor = chronologyAnchor(node.id)
  const chronologyDateOverride = chronologyDateOverrides[node.id]
  const chronologyDate = chronologyDateOverride ?? anchor.date ?? '1945-06-26'
  const sources = sourcesForNode(node.id)
  const links = linksForNode(node.id)
  const event = node.eventId ? eventsById.get(node.eventId) : undefined
  const argument = node.argumentId ? argumentsById.get(node.argumentId) : undefined

  if (event) {
    return {
      id: node.id,
      title: neutralizeLocalized(event.title),
      summary: neutralizeLocalized(event.short),
      lead: eventLead(event),
      chronologyDate,
      sections: eventSections(event, sources),
      sources,
      links,
    }
  }

  if (argument) {
    return {
      id: node.id,
      title: neutralizeLocalized(argument.title),
      summary: neutralizeLocalized(argument.thesis),
      lead: argumentLead(argument),
      chronologyDate,
      sections: argumentSections(argument, sources),
      sources,
      links,
    }
  }

  return {
    id: node.id,
    title: neutralizeLocalized(node.title),
    summary: neutralizeLocalized(node.summary),
    lead: conceptLead(node),
    chronologyDate,
    sections: conceptSections(node, sources),
    sources,
    links,
  }
}

const drafts = knowledgeNodes.map(articleDraft).map(applyEditorialArticle)

export const articlesData: ArticleRecord[] = drafts
  .sort((left, right) => {
    const byDate = left.chronologyDate.localeCompare(right.chronologyDate)
    if (byDate) return byDate
    return left.id.localeCompare(right.id)
  })
  .map((article, index) => ({
    id: article.id,
    number: index + 1,
    title: article.title,
    summary: article.summary,
    lead: article.lead,
    chronologyDate: article.chronologyDate,
    sections: article.sections,
    sources: article.sources,
    links: article.links,
  }))

export const articlesById = new Map(articlesData.map((article) => [article.id, article]))

export const articleNumberById = new Map(articlesData.map((article) => [article.id, article.number]))

export function articlePath(articleId: string): string {
  return `/articles/${articleId}`
}

export const articleRelations: ArticleRelation[] = articlesData.flatMap((article) => article.links.map((link) => ({
  id: `article-${article.id}-${link.articleId}`,
  source: article.id,
  target: link.articleId,
  label: link.label,
  note: link.note,
})))
