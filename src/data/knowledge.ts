import type { KnowledgeNode, KnowledgeRelation, Localized } from '../domain/types'
import { events } from './events'

const L = (ru: string, en: string, uk: string): Localized => ({ ru, en, uk })

const documentIds = new Set([
  'un-charter',
  'budapest',
  'nato-russia-act',
  'bucharest',
  'astana',
  'minsk',
  'language-law',
])

const eventNodes: KnowledgeNode[] = events.map((event) => ({
  id: event.id,
  type: documentIds.has(event.id) ? 'document' : 'event',
  title: event.title,
  eyebrow: documentIds.has(event.id)
    ? L('Документ', 'Document', 'Документ')
    : L('Событие', 'Event', 'Подія'),
  summary: event.short,
  date: event.date,
  eventId: event.id,
  tags: event.tags,
  sourceUrls: event.sources.map((source) => source.url),
}))

const conceptNodes: KnowledgeNode[] = [
  {
    id: 'concept-sovereignty', type: 'concept',
    title: L('Суверенитет государства', 'State sovereignty', 'Суверенітет держави'),
    eyebrow: L('Принцип', 'Principle', 'Принцип'),
    summary: L('Право государства самостоятельно принимать решения в пределах международного права.', 'A state’s authority to make its own decisions within international law.', 'Право держави самостійно ухвалювати рішення в межах міжнародного права.'),
    tags: ['право', 'суверенитет'],
  },
  {
    id: 'concept-territorial-integrity', type: 'concept',
    title: L('Территориальная целостность', 'Territorial integrity', 'Територіальна цілісність'),
    eyebrow: L('Принцип', 'Principle', 'Принцип'),
    summary: L('Запрет менять границы государства силой; центральный критерий оценки Крыма и аннексий 2022 года.', 'The rule against changing state borders by force; central to Crimea and the 2022 annexation claims.', 'Заборона змінювати кордони держави силою; ключовий критерій для Криму та анексій 2022 року.'),
    tags: ['право', 'границы'],
  },
  {
    id: 'concept-use-of-force', type: 'concept',
    title: L('Запрет применения силы', 'Prohibition on the use of force', 'Заборона застосування сили'),
    eyebrow: L('Принцип', 'Principle', 'Принцип'),
    summary: L('Базовое правило Устава ООН с ограниченными исключениями, включая самооборону.', 'A foundational UN Charter rule with limited exceptions, including self-defence.', 'Базове правило Статуту ООН з обмеженими винятками, зокрема самообороною.'),
    tags: ['ООН', 'право', 'война'],
  },
  {
    id: 'concept-self-defence', type: 'concept',
    title: L('Самооборона', 'Self-defence', 'Самооборона'),
    eyebrow: L('Правовое исключение', 'Legal exception', 'Правовий виняток'),
    summary: L('Аргумент требует отдельно доказать вооружённое нападение, необходимость и соразмерность.', 'The claim requires showing an armed attack, necessity and proportionality.', 'Аргумент потребує окремо довести збройний напад, необхідність і пропорційність.'),
    tags: ['ООН', 'право'],
  },
  {
    id: 'concept-security-assurances', type: 'concept',
    title: L('Заверения безопасности', 'Security assurances', 'Запевнення безпеки'),
    eyebrow: L('Тип обязательства', 'Type of commitment', 'Тип зобов’язання'),
    summary: L('Политико-правовые заверения следует отличать от автоматической коллективной обороны.', 'Political and legal assurances should be distinguished from automatic collective defence.', 'Політико-правові запевнення слід відрізняти від автоматичної колективної оборони.'),
    tags: ['Будапешт', 'безопасность'],
  },
  {
    id: 'concept-alliance-choice', type: 'concept',
    title: L('Свобода выбора союзов', 'Freedom to choose alliances', 'Свобода вибору союзів'),
    eyebrow: L('Принцип безопасности', 'Security principle', 'Принцип безпеки'),
    summary: L('Государства вправе выбирать механизмы собственной безопасности.', 'States may choose their own security arrangements.', 'Держави мають право обирати механізми власної безпеки.'),
    tags: ['НАТО', 'ОБСЕ', 'суверенитет'],
  },
  {
    id: 'concept-indivisible-security', type: 'concept',
    title: L('Неделимая безопасность', 'Indivisible security', 'Неподільна безпека'),
    eyebrow: L('Принцип безопасности', 'Security principle', 'Принцип безпеки'),
    summary: L('Безопасность одного государства не должна укрепляться за счёт безопасности другого.', 'One state should not strengthen its security at another state’s expense.', 'Безпека однієї держави не має зміцнюватися коштом безпеки іншої.'),
    tags: ['ОБСЕ', 'безопасность'],
  },
  {
    id: 'concept-security-dilemma', type: 'concept',
    title: L('Дилемма безопасности', 'Security dilemma', 'Дилема безпеки'),
    eyebrow: L('Аналитическая рамка', 'Analytical frame', 'Аналітична рамка'),
    summary: L('Шаги одной стороны, считающиеся оборонительными, другой стороной могут восприниматься как наступательные.', 'Measures seen as defensive by one side may be perceived as offensive by another.', 'Кроки, які одна сторона вважає оборонними, інша може сприймати як наступальні.'),
    tags: ['НАТО', 'Россия', 'причинность'],
  },
  {
    id: 'concept-constitutional-procedure', type: 'concept',
    title: L('Конституционная процедура', 'Constitutional procedure', 'Конституційна процедура'),
    eyebrow: L('Критерий легитимности', 'Legitimacy test', 'Критерій легітимності'),
    summary: L('Формальная процедура смены власти и фактическая непрерывность институтов — разные вопросы.', 'Formal transfer procedure and factual continuity of institutions are distinct questions.', 'Формальна процедура зміни влади та фактична безперервність інституцій — різні питання.'),
    tags: ['2014', 'легитимность'],
  },
  {
    id: 'concept-military-oath', type: 'concept',
    title: L('Военная присяга', 'Military oath', 'Військова присяга'),
    eyebrow: L('Обязательство', 'Obligation', 'Зобов\'язання'),
    summary: L('Клятва военнослужащего включает верность народу Украины, добросовестное исполнение обязанностей и обязательное соблюдение Конституции и законов.', 'A servicemember’s oath includes loyalty to the people of Ukraine, good-faith duty performance, and strict compliance with the Constitution and laws.', 'Присяга військовослужбовця включає вірність народові України, сумлінне виконання обов’язків і обов’язкове дотримання Конституції та законів.'),
    tags: ['присяга', 'военная служба', 'лояльность'],
  },
  {
    id: 'concept-army-rights-limits', type: 'concept',
    title: L('Ограничения для армии', 'Limits for armed forces', 'Обмеження для армії'),
    eyebrow: L('Конституционное правило', 'Constitutional rule', 'Конституційне правило'),
    summary: L('Конституция запрещает использование вооруженных формирований для ограничения прав и свобод граждан и подчеркивает приоритет законности.', 'The Constitution prohibits using armed formations to restrict citizens’ rights and freedoms and emphasizes legality as a priority.', 'Конституція забороняє використання збройних формувань для обмеження прав і свобод громадян та підкреслює пріоритет законності.'),
    tags: ['конституция', 'права граждан', 'вооружённые силы'],
  },
  {
    id: 'concept-self-determination', type: 'concept',
    title: L('Самоопределение', 'Self-determination', 'Самовизначення'),
    eyebrow: L('Спорный принцип', 'Contested principle', 'Спірний принцип'),
    summary: L('Не каждое волеизъявление автоматически создаёт право на отделение; важны процедура, контекст и международное право.', 'Not every expression of preference automatically creates a right to secede; procedure, context and international law matter.', 'Не кожне волевиявлення автоматично створює право на відокремлення; важливі процедура, контекст і міжнародне право.'),
    tags: ['Крым', 'референдум'],
  },
  {
    id: 'concept-ceasefire-sequencing', type: 'concept',
    title: L('Последовательность Минска', 'Minsk sequencing', 'Послідовність Мінська'),
    eyebrow: L('Узел исполнения', 'Implementation knot', 'Вузол виконання'),
    summary: L('Спор о том, что должно идти первым: безопасность, политические шаги, выборы или контроль границы.', 'The dispute over what had to come first: security, political steps, elections or border control.', 'Суперечка про те, що мало бути першим: безпека, політичні кроки, вибори чи контроль кордону.'),
    tags: ['Минск', 'Донбасс'],
  },
  {
    id: 'concept-identity-policy', type: 'concept',
    title: L('Политика идентичности', 'Identity policy', 'Політика ідентичності'),
    eyebrow: L('Социальная рамка', 'Social frame', 'Соціальна рамка'),
    summary: L('Язык, историческая память и символы используются в споре о том, как формируется политическая нация.', 'Language, historical memory and symbols shape disputes over political nation-building.', 'Мова, історична пам’ять і символи формують суперечки про політичну націю.'),
    tags: ['язык', 'идентичность'],
  },
  {
    id: 'concept-cause-vs-justification', type: 'concept',
    title: L('Причина ≠ оправдание', 'Cause ≠ justification', 'Причина ≠ виправдання'),
    eyebrow: L('Правило анализа', 'Analytical rule', 'Правило аналізу'),
    summary: L('Предыстория может объяснять мотивацию, но не превращает действие автоматически в законное или морально оправданное.', 'Background may explain motivation without automatically making an act lawful or morally justified.', 'Передісторія може пояснювати мотивацію, але не робить дію автоматично законною чи морально виправданою.'),
    tags: ['причинность', 'логика'],
  },
]

export const knowledgeNodes = [...eventNodes, ...conceptNodes] satisfies KnowledgeNode[]
export const knowledgeNodesById = new Map(knowledgeNodes.map((node) => [node.id, node]))

export const knowledgeRelations: KnowledgeRelation[] = [
  { id:'r-un-force', source:'un-charter', target:'concept-use-of-force', kind:'reaffirms', label:L('закрепляет', 'establishes', 'закріплює'), note:L('Статья 2(4) задаёт общий запрет угрозы силой или её применения.', 'Article 2(4) sets the general prohibition on the threat or use of force.', 'Стаття 2(4) встановлює загальну заборону погрози силою або її застосування.'), confidence:'direct' },
  { id:'r-un-self-defence', source:'un-charter', target:'concept-self-defence', kind:'legal-context', label:L('допускает исключение', 'permits an exception', 'допускає виняток'), note:L('Статья 51 закрепляет право на индивидуальную и коллективную самооборону.', 'Article 51 recognises individual and collective self-defence.', 'Стаття 51 закріплює право на індивідуальну та колективну самооборону.'), confidence:'direct' },
  { id:'r-un-territory', source:'un-charter', target:'concept-territorial-integrity', kind:'legal-context', label:L('задаёт рамку', 'frames', 'задає рамку'), note:L('Принцип территориальной целостности читается вместе с запретом силы.', 'Territorial integrity is read together with the prohibition on force.', 'Принцип територіальної цілісності читається разом із забороною сили.'), confidence:'documented' },
  { id:'r-sovereignty-budapest', source:'concept-sovereignty', target:'budapest', kind:'legal-context', label:L('лежит в основе', 'underpins', 'лежить в основі'), note:L('Меморандум подтверждает уважение независимости и суверенитета Украины.', 'The memorandum reaffirms respect for Ukraine’s independence and sovereignty.', 'Меморандум підтверджує повагу до незалежності та суверенітету України.'), confidence:'direct' },
  { id:'r-un-budapest', source:'un-charter', target:'budapest', kind:'legal-context', label:L('правовая основа', 'legal baseline', 'правова основа'), note:L('Меморандум прямо ссылается на обязательства по Уставу ООН.', 'The memorandum expressly refers to obligations under the UN Charter.', 'Меморандум прямо посилається на зобов’язання за Статутом ООН.'), confidence:'direct' },
  { id:'r-budapest-assurance', source:'budapest', target:'concept-security-assurances', kind:'reaffirms', label:L('содержит', 'contains', 'містить'), note:L('Текст содержит конкретные заверения, но не автоматический механизм коллективной обороны.', 'The text contains specific assurances but no automatic collective-defence mechanism.', 'Текст містить конкретні запевнення, але не автоматичний механізм колективної оборони.'), confidence:'direct' },
  { id:'r-budapest-territory', source:'budapest', target:'concept-territorial-integrity', kind:'reaffirms', label:L('подтверждает', 'reaffirms', 'підтверджує'), note:L('Стороны подтвердили уважение существующих границ Украины.', 'The parties reaffirmed respect for Ukraine’s existing borders.', 'Сторони підтвердили повагу до наявних кордонів України.'), confidence:'direct' },
  { id:'r-budapest-crimea', source:'budapest', target:'crimea', kind:'raises-question', label:L('становится мерилом', 'becomes a benchmark', 'стає мірилом'), note:L('После событий в Крыму меморандум стал центральным документом спора о нарушенных заверениях.', 'After Crimea, the memorandum became central to disputes over breached assurances.', 'Після подій у Криму меморандум став центральним документом суперечки про порушені запевнення.'), confidence:'documented' },
  { id:'r-budapest-invasion', source:'budapest', target:'full-invasion', kind:'raises-question', label:L('снова применяется', 'is invoked again', 'знову застосовується'), note:L('В 2022 году его положения вновь стали частью правовой и политической оценки.', 'Its provisions again became part of legal and political assessments in 2022.', 'У 2022 році його положення знову стали частиною правової та політичної оцінки.'), confidence:'documented' },
  { id:'r-nato-act-indivisible', source:'nato-russia-act', target:'concept-indivisible-security', kind:'reaffirms', label:L('формулирует рамку', 'frames', 'формулює рамку'), note:L('Акт описывал отношения России и НАТО через сотрудничество и общую безопасность.', 'The Act framed NATO–Russia relations around cooperation and common security.', 'Акт описував відносини Росії й НАТО через співпрацю та спільну безпеку.'), confidence:'direct' },
  { id:'r-nato-act-bucharest', source:'nato-russia-act', target:'bucharest', kind:'precedes', label:L('предшествует', 'precedes', 'передує'), note:L('Бухарестская формула появилась внутри уже существовавшей, но ухудшавшейся рамки Россия—НАТО.', 'The Bucharest formula emerged within an existing but deteriorating NATO–Russia framework.', 'Бухарестська формула з’явилася в межах уже наявної, але такої, що погіршувалася, рамки Росія—НАТО.'), confidence:'documented' },
  { id:'r-bucharest-alliance', source:'bucharest', target:'concept-alliance-choice', kind:'reaffirms', label:L('фиксирует траекторию', 'sets a trajectory', 'фіксує траєкторію'), note:L('Декларация заявила о будущем членстве Украины и Грузии без даты вступления.', 'The declaration stated that Ukraine and Georgia would become members without setting a date.', 'Декларація заявила про майбутнє членство України та Грузії без дати вступу.'), confidence:'direct' },
  { id:'r-astana-alliance', source:'astana', target:'concept-alliance-choice', kind:'reaffirms', label:L('подтверждает', 'reaffirms', 'підтверджує'), note:L('Документ подтверждает право государств выбирать союзы и механизмы безопасности.', 'The document reaffirms states’ right to choose alliances and security arrangements.', 'Документ підтверджує право держав обирати союзи та механізми безпеки.'), confidence:'direct' },
  { id:'r-astana-indivisible', source:'astana', target:'concept-indivisible-security', kind:'reaffirms', label:L('одновременно подтверждает', 'also reaffirms', 'водночас підтверджує'), note:L('В том же тексте закреплена формула о неукреплении безопасности за счёт других.', 'The same text includes the formula against strengthening security at others’ expense.', 'У тому самому тексті закріплено формулу про незміцнення безпеки коштом інших.'), confidence:'direct' },
  { id:'r-alliance-dilemma', source:'concept-alliance-choice', target:'concept-security-dilemma', kind:'contested-link', label:L('входит в конфликт восприятий', 'feeds a perception conflict', 'входить у конфлікт сприйняття'), note:L('Юридическое право выбирать союз и восприятие угрозы могут существовать одновременно.', 'The legal right to choose an alliance and a perceived threat may coexist.', 'Юридичне право обирати союз і сприйняття загрози можуть існувати одночасно.'), confidence:'interpretive' },
  { id:'r-indivisible-dilemma', source:'concept-indivisible-security', target:'concept-security-dilemma', kind:'contested-link', label:L('объясняет возражение', 'explains the objection', 'пояснює заперечення'), note:L('Стороны спорят о том, чья безопасность ухудшалась и какие меры были пропорциональны.', 'The parties dispute whose security worsened and which measures were proportionate.', 'Сторони сперечаються, чия безпека погіршувалася та які заходи були пропорційними.'), confidence:'interpretive' },
  { id:'r-bucharest-dilemma', source:'bucharest', target:'concept-security-dilemma', kind:'political-context', label:L('усиливает спор', 'intensifies the dispute', 'посилює суперечку'), note:L('Будущее членство стало частью российской угрозовой рамки; причинная сила этой связи остаётся предметом спора.', 'Future membership became part of Russia’s threat framing; the causal weight remains contested.', 'Майбутнє членство стало частиною російської рамки загрози; причинна вага зв’язку лишається спірною.'), confidence:'interpretive' },
  { id:'r-power-procedure', source:'power-2014', target:'concept-constitutional-procedure', kind:'raises-question', label:L('ставит вопрос', 'raises the question', 'ставить питання'), note:L('Спор касается буквального соблюдения процедуры и последующей институциональной непрерывности.', 'The dispute concerns literal procedural compliance and later institutional continuity.', 'Суперечка стосується буквального дотримання процедури й подальшої інституційної безперервності.'), confidence:'documented' },
  { id:'r-oath-limits', source:'concept-military-oath', target:'concept-army-rights-limits', kind:'reaffirms', label:L('сопоставляется', 'is matched with', 'співставляється'), note:L('Требование верности и соблюдения закона в присяге сопоставляется с конституционным запретом использовать силу для ограничения прав.', 'The oath demand of loyalty and legality is matched with the constitutional ban on using force to restrict rights.', 'Вимога вірності та законності в присязі співставляється з конституційною забороною використовувати силу для обмеження прав.'), confidence:'direct' },
  { id:'r-limits-force', source:'concept-army-rights-limits', target:'concept-use-of-force', kind:'raises-question', label:L('ограничивает применение', 'constrains use of force', 'обмежує застосування сили'), note:L('Внутренние действия армии подпадают под более строгие конституционные рамки при защите прав граждан.', 'The internal use of armed forces is subject to stricter constitutional limits when protecting citizens’ rights.', 'Внутрішнє застосування збройних сил підпадає під жорсткіші конституційні рамки заради захисту прав громадян.'), confidence:'interpretive' },
  { id:'r-power-crimea', source:'power-2014', target:'crimea', kind:'precedes', label:L('непосредственно предшествует', 'immediately precedes', 'безпосередньо передує'), note:L('Смена власти входит в непосредственную хронологию российской операции и крымского референдума.', 'The transfer of power is part of the immediate chronology of the Russian operation and Crimean referendum.', 'Зміна влади входить до безпосередньої хронології російської операції та кримського референдуму.'), confidence:'documented' },
  { id:'r-power-ato', source:'power-2014', target:'ato', kind:'precedes', label:L('предшествует кризису', 'precedes the crisis', 'передує кризі'), note:L('После смены власти последовали захваты зданий, вооружённое противостояние и начало АТО.', 'The transfer was followed by seizures of buildings, armed confrontation and the launch of the ATO.', 'Після зміни влади відбулися захоплення будівель, збройне протистояння та початок АТО.'), confidence:'documented' },
  { id:'r-crimea-selfdetermination', source:'crimea', target:'concept-self-determination', kind:'contested-link', label:L('апеллирует к', 'invokes', 'апелює до'), note:L('Сторонники референдума ссылаются на волеизъявление; оппоненты — на неконституционность и условия военного контроля.', 'Supporters invoke popular choice; opponents point to constitutional defects and military control.', 'Прихильники посилаються на волевиявлення; опоненти — на неконституційність і умови військового контролю.'), confidence:'interpretive' },
  { id:'r-crimea-territory', source:'crimea', target:'concept-territorial-integrity', kind:'contradiction', label:L('вступает в конфликт', 'conflicts with', 'вступає в конфлікт'), note:L('Большинство государств и Генеральная Ассамблея ООН не признали изменение статуса Крыма.', 'Most states and the UN General Assembly did not recognise Crimea’s change of status.', 'Більшість держав і Генеральна Асамблея ООН не визнали зміну статусу Криму.'), confidence:'documented' },
  { id:'r-crimea-ato', source:'crimea', target:'ato', kind:'political-context', label:L('часть общего кризиса', 'part of the wider crisis', 'частина ширшої кризи'), note:L('Крым и начало конфликта в Донбассе разворачивались в одной быстро меняющейся обстановке, но требуют раздельной проверки.', 'Crimea and the Donbas conflict unfolded in the same fast-moving crisis but require separate analysis.', 'Крим і початок конфлікту на Донбасі розгорталися в одній швидкій кризі, але потребують окремого аналізу.'), confidence:'documented' },
  { id:'r-ato-minsk', source:'ato', target:'minsk', kind:'response', label:L('приводит к переговорной рамке', 'leads to a negotiating framework', 'веде до переговорної рамки'), note:L('Боевые действия создали необходимость прекращения огня и политического урегулирования.', 'Fighting created the need for a ceasefire and political settlement framework.', 'Бойові дії створили потребу в припиненні вогню та політичному врегулюванні.'), confidence:'documented' },
  { id:'r-minsk-sequence', source:'minsk', target:'concept-ceasefire-sequencing', kind:'implementation', label:L('создаёт спор о порядке', 'creates a sequencing dispute', 'створює суперечку про порядок'), note:L('Текст соединяет безопасность, выборы, особый порядок, границу и вывод формирований без бесспорного механизма последовательности.', 'The text joins security, elections, special status, the border and withdrawal without an uncontested sequencing mechanism.', 'Текст поєднує безпеку, вибори, особливий порядок, кордон і виведення формувань без безспірного механізму послідовності.'), confidence:'direct' },
  { id:'r-minsk-invasion', source:'minsk', target:'full-invasion', kind:'contested-link', label:L('провал предшествует эскалации', 'failed before escalation', 'провал передує ескалації'), note:L('Невыполнение Минска входит в предысторию 2022 года, но спор о распределении ответственности остаётся открытым.', 'Minsk’s non-implementation is part of the pre-2022 history, while responsibility remains disputed.', 'Невиконання Мінська входить до передісторії 2022 року, тоді як відповідальність лишається спірною.'), confidence:'interpretive' },
  { id:'r-language-identity', source:'language-law', target:'concept-identity-policy', kind:'political-context', label:L('формирует', 'shapes', 'формує'), note:L('Языковая политика стала частью более широкого проекта национальной идентичности и источником политических споров.', 'Language policy became part of a wider nation-building project and a source of political dispute.', 'Мовна політика стала частиною ширшого проєкту національної ідентичності та джерелом політичних суперечок.'), confidence:'documented' },
  { id:'r-dilemma-cause', source:'concept-security-dilemma', target:'concept-cause-vs-justification', kind:'raises-question', label:L('объясняет, но не оправдывает', 'may explain, not justify', 'може пояснювати, не виправдовувати'), note:L('Аналитическое объяснение угрозового восприятия не является само по себе правовым основанием войны.', 'Explaining threat perception is not itself a legal basis for war.', 'Пояснення сприйняття загрози саме по собі не є правовою підставою війни.'), confidence:'interpretive' },
  { id:'r-minsk-cause', source:'minsk', target:'concept-cause-vs-justification', kind:'raises-question', label:L('часть причинной цепочки', 'part of the causal chain', 'частина причинного ланцюга'), note:L('Провал дипломатии может быть причиной эскалации, но не снимает необходимость отдельно оценивать законность решений.', 'Diplomatic failure may contribute to escalation without replacing a separate legal assessment.', 'Провал дипломатії може сприяти ескалації, але не замінює окремої правової оцінки.'), confidence:'interpretive' },
  { id:'r-cause-invasion', source:'concept-cause-vs-justification', target:'full-invasion', kind:'legal-context', label:L('разделяет два вопроса', 'separates two questions', 'розділяє два питання'), note:L('Нужно отдельно обсуждать, почему решение было принято, и было ли оно законным или оправданным.', 'Why the decision was made and whether it was lawful or justified are separate questions.', 'Чому рішення ухвалили та чи було воно законним або виправданим — різні питання.'), confidence:'interpretive' },
  { id:'r-invasion-force', source:'full-invasion', target:'concept-use-of-force', kind:'raises-question', label:L('оценивается по', 'is assessed under', 'оцінюється за'), note:L('Правовая оценка начинается с запрета силы и проверки заявленных исключений.', 'Legal assessment begins with the prohibition on force and examination of claimed exceptions.', 'Правова оцінка починається із заборони сили та перевірки заявлених винятків.'), confidence:'documented' },
  { id:'r-invasion-martial', source:'full-invasion', target:'martial-law', kind:'response', label:L('вызывает', 'triggers', 'спричиняє'), note:L('Полномасштабное вторжение стало основанием для введения и продления военного положения в Украине.', 'The full-scale invasion prompted the introduction and extension of martial law in Ukraine.', 'Повномасштабне вторгнення стало підставою для запровадження та продовження воєнного стану в Україні.'), confidence:'direct' },
  { id:'r-invasion-annex', source:'full-invasion', target:'annexation-2022', kind:'precedes', label:L('создаёт условия', 'creates the conditions', 'створює умови'), note:L('Оккупация территорий предшествовала организованным голосованиям и заявленной аннексии.', 'Occupation preceded the organised votes and claimed annexations.', 'Окупація територій передувала організованим голосуванням і заявленій анексії.'), confidence:'documented' },
  { id:'r-annex-territory', source:'annexation-2022', target:'concept-territorial-integrity', kind:'contradiction', label:L('противоречит признанным границам', 'conflicts with recognised borders', 'суперечить визнаним кордонам'), note:L('Генеральная Ассамблея ООН осудила попытку незаконной аннексии.', 'The UN General Assembly condemned the attempted illegal annexation.', 'Генеральна Асамблея ООН засудила спробу незаконної анексії.'), confidence:'documented' },
]

export const relationsByNodeId = new Map<string, KnowledgeRelation[]>()
for (const relation of knowledgeRelations) {
  for (const nodeId of [relation.source, relation.target]) {
    const list = relationsByNodeId.get(nodeId) ?? []
    list.push(relation)
    relationsByNodeId.set(nodeId, list)
  }
}
