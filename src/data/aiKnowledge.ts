import type { AITopic, Localized } from '../domain/types'

const L = (ru: string, en: string, uk: string): Localized => ({ ru, en, uk })

export const aiTopics: AITopic[] = [
  {
    id: 'budapest',
    title: L('Будапештский меморандум', 'Budapest Memorandum', 'Будапештський меморандум'),
    keywords: {
      ru: ['будапешт', 'меморандум', 'гарантии безопасности', 'ядерное оружие'],
      en: ['budapest', 'memorandum', 'security guarantees', 'nuclear weapons'],
      uk: ['будапешт', 'меморандум', 'гарантії безпеки', 'ядерна зброя'],
    },
    summary: L('Отделите конкретные заверения документа от отсутствующего механизма автоматической коллективной обороны.', 'Separate the document’s concrete assurances from an absent automatic collective-defence mechanism.', 'Відокремте конкретні запевнення документа від відсутнього механізму автоматичної колективної оборони.'),
    nodeIds: ['un-charter', 'budapest', 'concept-security-assurances', 'concept-territorial-integrity'],
    sourceEventIds: ['budapest'],
    suggestions: {
      ru: [
        { kind:'clarify', title:'Уточнить термин', text:'Какой именно пункт меморандума вы называете гарантией автоматического военного вмешательства?' },
        { kind:'evidence', title:'Ответить по тексту', text:'В документе есть заверения уважать независимость, суверенитет и существующие границы Украины, воздерживаться от силы и проводить консультации; механизма коллективной обороны в нём нет.' },
        { kind:'boundary', title:'Не перегнуть', text:'Отсутствие автоматического военного механизма не делает меморандум пустым: нарушение закреплённых заверений остаётся существенным.' },
      ],
      en: [
        { kind:'clarify', title:'Clarify the term', text:'Which exact clause do you read as a guarantee of automatic military intervention?' },
        { kind:'evidence', title:'Use the text', text:'The memorandum contains assurances to respect independence, sovereignty and existing borders, refrain from force and consult; it contains no collective-defence mechanism.' },
        { kind:'boundary', title:'Keep the limit', text:'The absence of automatic military enforcement does not make the memorandum meaningless; breaching its assurances remains significant.' },
      ],
      uk: [
        { kind:'clarify', title:'Уточнити термін', text:'Який саме пункт меморандуму ви вважаєте гарантією автоматичного військового втручання?' },
        { kind:'evidence', title:'Відповісти за текстом', text:'Документ містить запевнення поважати незалежність, суверенітет і наявні кордони України, утримуватися від сили та проводити консультації; механізму колективної оборони в ньому немає.' },
        { kind:'boundary', title:'Не перебільшувати', text:'Відсутність автоматичного військового механізму не робить меморандум порожнім: порушення закріплених запевнень лишається суттєвим.' },
      ],
    },
  },
  {
    id: 'nato',
    title: L('НАТО и безопасность', 'NATO and security', 'НАТО та безпека'),
    keywords: {
      ru: ['нато', 'расширение', 'бухарест', 'неделимая безопасность', 'военная инфраструктура', 'официальные источники', 'официальная позиция', 'официальная риторика', 'кремль', 'враг', 'диалог', 'риск', 'безопасность', 'цена решения', 'уверенные оценки'],
      en: ['nato', 'enlargement', 'bucharest', 'indivisible security', 'military infrastructure', 'official sources', 'official position', 'official rhetoric', 'kremlin', 'enemy', 'dialogue', 'risk', 'security', 'policy trade-off', 'position costs'],
      uk: ['нато', 'розширення', 'бухарест', 'неподільна безпека', 'військова інфраструктура', 'офіційні джерела', 'офіційна позиція', 'кремль', 'ворог', 'діалог', 'ризик', 'безпека', 'офіційна риторика'],
    },
    summary: L('Анализировать НАТО нужно в двух измерениях: легитимность выбора и управляемый политический риск; официальная позиция важна как сигнал, но решение принимается через цену риска и последствия для безопасности.', 'NATO should be analyzed in two dimensions: legitimacy of the choice and manageable political risk; official position is a signal, while policy choice depends on risk appetite and security consequences.', 'Аналіз НАТО має бути в двох вимірах: легітимність вибору та контрольований політичний ризик; офіційна позиція важлива як сигнал, але рішення залежить від ціни ризику й безпекових наслідків.'),
    nodeIds: ['nato-russia-act', 'bucharest', 'astana', 'concept-alliance-choice', 'concept-indivisible-security', 'concept-security-dilemma'],
    sourceEventIds: ['nato-russia-act', 'bucharest', 'astana'],
    suggestions: {
      ru: [
        { kind:'clarify', title:'Разделить уровень', text:'Зафиксируйте, где идёт юридический вопрос (есть ли право на выбор), а где политическая оценка риска (насколько этот выбор оптимален сегодня).' },
        { kind:'evidence', title:'Разделить факт и риторику', text:'Из ролика: «если это официальная позиция, от неё отталкиваются» — её учитывают как политический сигнал, а факты и ответственность всё равно проверяются по действиям и последствиям.' },
        { kind:'evidence', title:'Сценарный выбор', text:'Александр предлагает: если через диалог можно снизить озабоченности, это стоит делать; если нет — это уже политика риска «движение в НАТО с рисками» или «остановка/замедление движения».' },
        { kind:'boundary', title:'Не абсолютный запрет', text:'Опасения противника не превращаются в автоматический запрет: они становятся ограничением только после оценки конкретной угрозы и её цены для общества.' },
      ],
      en: [
        { kind:'clarify', title:'Separate the levels', text:'Separate the legal question (whether the alliance choice is lawful) from the political question (whether it is strategically optimal under current risks).' },
        { kind:'evidence', title:'Separate fact from rhetoric', text:'The video frames official statements as official position/signaling; however, factual claims still need cross-checking against actions, sources, and outcomes.' },
        { kind:'evidence', title:'Scenario framing', text:'He argues for first trying to reduce concerns through diplomacy, and if that fails, explicitly weighing NATO progress with risks versus stopping or slowing that course.' },
        { kind:'boundary', title:'No absolute trigger', text:'Threat perceptions are not automatic vetoes; they become constraints only after assessing concrete dangers and the cost of accepting those risks.' },
      ],
      uk: [
        { kind:'clarify', title:'Розділити рівні', text:'Зафіксуйте, де йде правовий вимір (чи є право на вибір), а де політична оцінка ризику (наскільки цей вибір доцільний зараз).' },
        { kind:'evidence', title:'Відокремити факт і риторику', text:'З відео: офіційна позиція — політичний сигнал; її враховують, але факти й відповідальність перевіряються через дії, джерела й наслідки.' },
        { kind:'evidence', title:'Сценарний підхід', text:'Спершу варто зменшувати напругу шляхом діалогу щодо озабоченостей; якщо це неможливо — політично вибирати між продовженням руху в НАТО і паузою з урахуванням ризиків.' },
        { kind:'boundary', title:'Немає жорсткої заборони', text:'Озабоченості опонента не є автоматичною забороною: вони стають обмеженням тільки після оцінки конкретних загроз і ціни цих ризиків.' },
      ],
    },
  },
  {
    id: 'power-2014',
    title: L('Смена власти в 2014 году', 'Transfer of power in 2014', 'Зміна влади у 2014 році'),
    keywords: {
      ru: ['майдан', 'переворот', 'янукович', 'смена власти', '2014'],
      en: ['maidan', 'coup', 'yanukovych', 'transfer of power', '2014'],
      uk: ['майдан', 'переворот', 'янукович', 'зміна влади', '2014'],
    },
    summary: L('Не смешивайте вопрос о буквальной конституционной процедуре с вопросом о последующей непрерывности институтов и выборах.', 'Do not conflate literal constitutional procedure with later institutional continuity and elections.', 'Не змішуйте буквальну конституційну процедуру з подальшою безперервністю інституцій та виборами.'),
    nodeIds: ['power-2014', 'concept-constitutional-procedure', 'crimea', 'ato'],
    sourceEventIds: ['power-2014'],
    suggestions: {
      ru: [
        { kind:'clarify', title:'Попросить критерий', text:'Какую конкретно конституционную процедуру вы считаете соблюдённой или нарушенной и на каком этапе?' },
        { kind:'evidence', title:'Развести уровни', text:'Можно одновременно признать спорность отдельных процедур февраля 2014 года и отдельно оценивать фактическую непрерывность парламента, правительства и последующих выборов.' },
        { kind:'boundary', title:'Избежать скачка', text:'Процедурное нарушение само по себе не доказывает автоматически ни полное исчезновение государства, ни законность последующих внешних действий.' },
      ],
      en: [
        { kind:'clarify', title:'Ask for the test', text:'Which exact constitutional procedure do you believe was followed or breached, and at what stage?' },
        { kind:'evidence', title:'Separate levels', text:'One can acknowledge disputes over parts of the February 2014 procedure while separately assessing continuity of parliament, government and later elections.' },
        { kind:'boundary', title:'Avoid the leap', text:'A procedural defect does not automatically prove either the disappearance of the state or the legality of subsequent external actions.' },
      ],
      uk: [
        { kind:'clarify', title:'Попросити критерій', text:'Яку саме конституційну процедуру ви вважаєте дотриманою чи порушеною і на якому етапі?' },
        { kind:'evidence', title:'Розвести рівні', text:'Можна одночасно визнати спірність окремих процедур лютого 2014 року й окремо оцінювати безперервність парламенту, уряду та наступних виборів.' },
        { kind:'boundary', title:'Уникнути стрибка', text:'Процедурне порушення саме по собі не доводить автоматично ані зникнення держави, ані законність наступних зовнішніх дій.' },
      ],
    },
  },
  {
    id: 'crimea',
    title: L('Крым и референдум', 'Crimea and the referendum', 'Крим і референдум'),
    keywords: {
      ru: ['крым', 'референдум', 'самоопределение', 'севастополь', 'аннексия'],
      en: ['crimea', 'referendum', 'self-determination', 'sevastopol', 'annexation'],
      uk: ['крим', 'референдум', 'самовизначення', 'севастополь', 'анексія'],
    },
    summary: L('Разделите мнение населения, внутреннюю процедуру, условия проведения и международно-правовой статус.', 'Separate popular preference, domestic procedure, conditions of the vote and international legal status.', 'Розділіть думку населення, внутрішню процедуру, умови проведення та міжнародно-правовий статус.'),
    nodeIds: ['crimea', 'concept-self-determination', 'concept-territorial-integrity', 'budapest'],
    sourceEventIds: ['crimea', 'budapest'],
    suggestions: {
      ru: [
        { kind:'clarify', title:'Разложить тезис', text:'Вы сейчас говорите о предпочтениях жителей, о законности процедуры или о международном признании результата?' },
        { kind:'evidence', title:'Дать структуру', text:'Для проверки нужны отдельно: украинская конституционная процедура, условия присутствия вооружённых сил, формулировка бюллетеня и реакция Генеральной Ассамблеи ООН.' },
        { kind:'boundary', title:'Не подменять', text:'Даже реальное большинство за определённый вариант не снимает автоматически вопросы о процедуре, принуждении и международном статусе.' },
      ],
      en: [
        { kind:'clarify', title:'Split the claim', text:'Are you talking about residents’ preferences, the legality of the procedure, or international recognition of the result?' },
        { kind:'evidence', title:'Structure the check', text:'Examine separately the Ukrainian constitutional procedure, military presence, ballot wording and the UN General Assembly response.' },
        { kind:'boundary', title:'Avoid substitution', text:'Even a genuine majority preference would not automatically settle questions of procedure, coercion and international status.' },
      ],
      uk: [
        { kind:'clarify', title:'Розкласти тезу', text:'Ви зараз говорите про уподобання мешканців, законність процедури чи міжнародне визнання результату?' },
        { kind:'evidence', title:'Дати структуру', text:'Окремо перевіряйте українську конституційну процедуру, присутність військ, формулювання бюлетеня та реакцію Генеральної Асамблеї ООН.' },
        { kind:'boundary', title:'Не підміняти', text:'Навіть реальна більшість за певний варіант не знімає автоматично питань процедури, примусу та міжнародного статусу.' },
      ],
    },
  },
  {
    id: 'military-oath',
    title: L('Военная присяга, конституция и «враги народа»', 'Military oath, constitution and who counts as an enemy', 'Військова присяга, конституція та «вороги народу»'),
    keywords: {
      ru: [
        'военная присяга',
        'клятва народу украины',
        'враги народа',
        'конституция',
        'статья семнадцатая',
        'днр',
        'лнр',
        'право на жизнь',
        'тцк',
      ],
      en: [
        'military oath',
        'loyalty to the Ukrainian people',
        'enemies of the people',
        'constitution',
        'article 17',
        'dnr',
        'lnr',
        'right to life',
        'tc',
        'national guard',
      ],
      uk: [
        'військова присяга',
        'вірність народові України',
        'вороги народу',
        'конституція',
        'стаття сімнадцята',
        'днр',
        'лнр',
        'право на життя',
        'тцк',
      ],
    },
    summary: L('Александр настаивает, что присяга солдата опирается на верность народу и соблюдение Конституции, поэтому статус противника нельзя подменять политическим ярлыком.', 'Alexander argues that a soldier’s oath is based on loyalty to the people and constitutional compliance, so enemy designation cannot be reduced to a political label.', 'Олександр наполягає, що присяга військового базується на вірності народові та дотриманні Конституції, тож статус супротивника не можна зводити до політичної мітки.'),
    nodeIds: ['concept-military-oath', 'concept-army-rights-limits', 'full-invasion'],
    sourceEventIds: ['ato', 'martial-law', 'full-invasion'],
    suggestions: {
      ru: [
        { kind: 'clarify', title: 'Определить норму', text: 'Сначала назовите конкретную норму: статья о клятве, статья 17 Конституции, или правила применения силовых структур в правовом порядке?' },
        { kind: 'evidence', title: 'Сверить с текстом', text: 'В военной присяге перечислены верность народу Украины, добросовестное исполнение обязанностей, неукоснительное соблюдение Конституции и законов; в ней нет формулы «когда оппонент становится сепаратистом, присяга перестаёт действовать».' },
        { kind: 'boundary', title: 'Развести уровни', text: 'Наличие внутриполитических нарушений и разногласий не отменяет требования отдельного правового определения статуса противника и законности применения силы.' },
      ],
      en: [
        { kind: 'clarify', title: 'Pin the rule', text: 'Name the exact rule first: the oath text, Article 17 of the Constitution, or the law governing use of armed units.' },
        { kind: 'evidence', title: 'Cross-check the text', text: 'The oath includes loyalty to the Ukrainian people, faithful performance of duties, and strict observance of the Constitution and laws; it does not contain an exception that ends the oath when someone becomes a separatist.' },
        { kind: 'boundary', title: 'Separate levels', text: 'Internal political disagreements do not replace the need for a legal basis to classify an enemy and justify use of force.' },
      ],
      uk: [
        { kind: 'clarify', title: 'Уточнити норму', text: 'Спочатку назвіть конкретну норму: текст присяги, статтю 17 Конституції чи правила застосування силових підрозділів.' },
        { kind: 'evidence', title: 'Перевірити текст', text: 'У військовій присязі йдеться про вірність народові України, сумлінне виконання обов’язків і неухильне дотримання Конституції та законів; там немає пункту про скасування присяги, якщо хтось став сепаратистом.' },
        { kind: 'boundary', title: 'Розвести рівні', text: 'Внутрішні політичні протиріччя не замінюють необхідності окремо юридично обґрунтовувати статус противника й легітимність застосування сили.' },
      ],
    },
  },
  {
    id: 'minsk',
    title: L('Минские соглашения', 'Minsk agreements', 'Мінські угоди'),
    keywords: {
      ru: ['минск', 'минские соглашения', 'донбасс', 'особый статус', 'контроль границы'],
      en: ['minsk', 'minsk agreements', 'donbas', 'special status', 'border control'],
      uk: ['мінськ', 'мінські угоди', 'донбас', 'особливий статус', 'контроль кордону'],
    },
    summary: L('Проверяйте пункт, ответственного актора и спорную последовательность безопасности и политических шагов.', 'Check the clause, responsible actor and contested sequencing of security and political steps.', 'Перевіряйте пункт, відповідального актора та спірну послідовність безпеки й політичних кроків.'),
    nodeIds: ['ato', 'minsk', 'concept-ceasefire-sequencing', 'full-invasion'],
    sourceEventIds: ['minsk'],
    suggestions: {
      ru: [
        { kind:'clarify', title:'Назвать пункт', text:'Какой именно из пунктов Минска вы имеете в виду, кто был указан ответственным и что по тексту должно было произойти до него?' },
        { kind:'evidence', title:'Показать матрицу', text:'Комплекс мер связывал прекращение огня, отвод вооружений, выборы, особый порядок, амнистию, границу и вывод формирований; спор возник вокруг порядка и взаимной обусловленности.' },
        { kind:'boundary', title:'Не свести к одному', text:'Фраза «Минск не выполнила сторона X» слишком груба без разбора каждого пункта, сроков, контроля и действий нескольких участников.' },
      ],
      en: [
        { kind:'clarify', title:'Name the clause', text:'Which Minsk clause do you mean, who was responsible, and what did the text require before it?' },
        { kind:'evidence', title:'Use a matrix', text:'The package linked ceasefire, weapons withdrawal, elections, special status, amnesty, the border and withdrawal of formations; sequencing became a core dispute.' },
        { kind:'boundary', title:'Do not reduce it', text:'“Side X failed Minsk” is too coarse without examining each clause, deadlines, monitoring and the conduct of multiple actors.' },
      ],
      uk: [
        { kind:'clarify', title:'Назвати пункт', text:'Який саме пункт Мінська ви маєте на увазі, хто був відповідальним і що за текстом мало статися перед ним?' },
        { kind:'evidence', title:'Показати матрицю', text:'Комплекс заходів поєднував припинення вогню, відведення озброєнь, вибори, особливий порядок, амністію, кордон і виведення формувань; порядок став ядром суперечки.' },
        { kind:'boundary', title:'Не зводити до одного', text:'Фраза «Мінськ не виконала сторона X» надто груба без розбору кожного пункту, строків, контролю та дій кількох учасників.' },
      ],
    },
  },
  {
    id: 'full-invasion',
    title: L('Причины и оценка войны 2022 года', 'Causes and assessment of the 2022 war', 'Причини та оцінка війни 2022 року'),
    keywords: {
      ru: ['2022', 'война', 'вторжение', 'специальная военная операция', 'причины конфликта', 'почему россия'],
      en: ['2022', 'war', 'invasion', 'special military operation', 'causes of the conflict', 'why russia'],
      uk: ['2022', 'війна', 'вторгнення', 'спеціальна військова операція', 'причини конфлікту', 'чому росія'],
    },
    summary: L('Стройте причинную цепочку, но отдельно проверяйте правовое основание, заявленные цели и фактические последствия.', 'Build a causal chain, while separately testing legal basis, stated aims and actual consequences.', 'Будуйте причинний ланцюг, але окремо перевіряйте правову підставу, заявлені цілі та фактичні наслідки.'),
    nodeIds: ['concept-security-dilemma', 'minsk', 'concept-cause-vs-justification', 'full-invasion', 'concept-use-of-force'],
    sourceEventIds: ['full-invasion', 'un-charter'],
    suggestions: {
      ru: [
        { kind:'clarify', title:'Уточнить уровень', text:'Мы сейчас выясняем причины решения, заявленное правовое обоснование или моральную оценку последствий? Это три разных вопроса.' },
        { kind:'evidence', title:'Построить цепочку', text:'Для причинного анализа можно рассмотреть расширение НАТО, 2014 год, Донбасс, провал Минска и решения 2021–2022 годов; затем отдельно проверить, создаёт ли это правовое исключение из запрета силы.' },
        { kind:'boundary', title:'Разделить выводы', text:'Предыстория важна для объяснения мотивации, но объяснение не равно оправданию и не отменяет проверки фактов и международного права.' },
      ],
      en: [
        { kind:'clarify', title:'Clarify the level', text:'Are we examining causes of the decision, its claimed legal basis, or the moral assessment of consequences? Those are separate questions.' },
        { kind:'evidence', title:'Build the chain', text:'A causal analysis can examine NATO enlargement, 2014, Donbas, Minsk’s failure and 2021–2022 decisions, then separately test whether any of this creates an exception to the prohibition on force.' },
        { kind:'boundary', title:'Separate conclusions', text:'Background matters for explaining motivation, but explanation is not justification and does not replace factual and legal review.' },
      ],
      uk: [
        { kind:'clarify', title:'Уточнити рівень', text:'Ми з’ясовуємо причини рішення, заявлену правову підставу чи моральну оцінку наслідків? Це різні питання.' },
        { kind:'evidence', title:'Побудувати ланцюг', text:'Для причинного аналізу можна розглянути розширення НАТО, 2014 рік, Донбас, провал Мінська та рішення 2021–2022 років; потім окремо перевірити, чи створює це виняток із заборони сили.' },
        { kind:'boundary', title:'Розділити висновки', text:'Передісторія важлива для пояснення мотивації, але пояснення не дорівнює виправданню й не скасовує перевірки фактів і міжнародного права.' },
      ],
    },
  },
]
