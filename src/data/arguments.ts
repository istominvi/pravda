import type { ArgumentCitation, ArgumentRecord, Localized } from '../domain/types'

const L = (ru: string, en: string, uk: string): Localized => ({ ru, en, uk })
const LA = (ru: string[], en: string[], uk: string[]): Localized<string[]> => ({ ru, en, uk })

const citation = (
  videoId: string,
  start: string,
  end: string,
  note: Localized,
): ArgumentCitation => ({ videoId, start, end, note })

export const argumentVideoIds = [
  '4x8stl4ZzdE',
  'LkHavUQ4nwc',
  'Ol0ue_sDD48',
  'wsqPJMI6noM',
  'g0wrgfZqVm4',
] as const

export const argumentsData: ArgumentRecord[] = [
  {
    id: 'tactical-effect-vs-strategic-outcome',
    title: L('Тактический эффект не равен стратегическому перелому', 'A tactical effect is not a strategic reversal', 'Тактичний ефект не дорівнює стратегічному перелому'),
    topic: L('Операция «Паутина» и критерии военного результата', 'Operation Spiderweb and measures of military effect', 'Операція «Павутина» та критерії військового результату'),
    thesis: L('Александр предлагает оценивать громкую операцию не по медийному резонансу, а по тому, изменила ли она положение на фронте, ресурсы сторон и переговорные возможности.', 'Alexander argues that a spectacular operation should be judged by whether it changed the front, the parties’ resources, or bargaining power—not by media resonance alone.', 'Олександр пропонує оцінювати гучну операцію не за медійним резонансом, а за тим, чи змінила вона фронт, ресурси сторін або переговорні можливості.'),
    premises: LA(
      ['Удар по стратегической авиации может дать заметный локальный результат.', 'Информационный успех помогает поддерживать ожидания аудитории, когда положение на земле ухудшается.', 'Стратегический результат требует устойчивого изменения ресурсов, темпа боевых действий или политических условий.'],
      ['A strike on strategic aviation can produce a visible local result.', 'An information success can sustain audience expectations when the ground situation worsens.', 'Strategic effect requires a durable change in resources, operational tempo, or political conditions.'],
      ['Удар по стратегічній авіації може дати помітний локальний результат.', 'Інформаційний успіх може підтримувати очікування аудиторії, коли ситуація на землі погіршується.', 'Стратегічний ефект потребує тривалої зміни ресурсів, темпу бойових дій або політичних умов.'],
    ),
    reasoning: L('Если операция производит сильный символический эффект, но не меняет перечисленные показатели, её нельзя автоматически считать переломом. Из этого Александр выводит и отдельную гипотезу о внешнем интересе в срыве переговоров.', 'If an operation has a strong symbolic impact but does not change those indicators, it should not automatically be called a turning point. Alexander then adds a separate hypothesis about an outside interest in disrupting negotiations.', 'Якщо операція має сильний символічний ефект, але не змінює ці показники, її не слід автоматично називати переломом. Далі Олександр додає окрему гіпотезу про зовнішній інтерес у зриві переговорів.'),
    conclusion: L('Медийный и тактический успех нужно отделять от стратегического результата.', 'Media and tactical success should be separated from strategic effect.', 'Медійний і тактичний успіх слід відокремлювати від стратегічного результату.'),
    objection: L('Собеседник считает саму способность наносить дальние удары позитивным свидетельством военной эффективности Украины.', 'The interlocutor treats the ability to conduct long-range strikes as positive evidence of Ukrainian military effectiveness.', 'Співрозмовник вважає саму здатність завдавати далеких ударів позитивним свідченням військової ефективності України.'),
    response: L('Александр не отрицает факт локального результата, но требует показать его влияние на общую траекторию войны.', 'Alexander does not deny a local result; he asks for evidence that it changes the war’s overall trajectory.', 'Олександр не заперечує локального результату, але вимагає показати його вплив на загальну траєкторію війни.'),
    limitations: LA(
      ['Оценка стратегического эффекта в транскрипте не подкреплена сопоставимыми военными метриками.', 'Предположение о британском управлении операцией дано по «почерку» и не подтверждено источником; оно не используется как установленный факт.', 'Юридическая квалификация удара как «террористического» в транскрипте не доказана.'],
      ['The transcript supplies no comparable military metrics for the strategic-effect assessment.', 'The allegation of British control rests on perceived “handwriting” and no cited evidence; it is not treated as fact.', 'The transcript does not establish the legal classification of the strike as terrorism.'],
      ['У транскрипті немає зіставних військових метрик для оцінки стратегічного ефекту.', 'Твердження про британське керування спирається на «почерк» без джерела й не подається як факт.', 'Юридична кваліфікація удару як тероризму в транскрипті не доведена.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['spiderweb-2025', 'concept-strategic-effect', 'concept-evidence-trust'],
    relatedEventIds: ['spiderweb-2025', 'full-invasion'],
    relatedArgumentIds: ['war-as-political-instrument'],
    citations: [
      citation('LkHavUQ4nwc', '00:08:14', '00:09:53', L('Информационный эффект, поле боя и гипотеза о внешнем интересе.', 'Information effect, battlefield impact, and the outside-interest hypothesis.', 'Інформаційний ефект, поле бою та гіпотеза про зовнішній інтерес.')),
    ],
    references: [
      { title: 'Volodymyr Zelenskyy thanks SSU warriors for Operation Spiderweb', institution: 'President of Ukraine', url: 'https://www.president.gov.ua/en/news/volodimir-zelenskij-podyakuvav-voyinam-sbu-za-provedennya-op-98253' },
      { title: 'Operation Spiderweb and tactical solutions', institution: 'President of Ukraine', url: 'https://www.president.gov.ua/en/news/dlya-zakinchennya-vijni-potribna-podalsha-oboronna-pidtrimka-98201' },
    ],
    tags: ['Паутина', 'стратегия', 'медиаэффект'],
  },
  {
    id: 'urban-objectives-and-civilian-risk',
    title: L('Военные объекты в городе повышают риск, но не снимают обязанностей', 'Urban military objectives raise risk but do not remove duties', 'Військові об’єкти в місті підвищують ризик, але не скасовують обов’язків'),
    topic: L('Гражданские потери и размещение военных объектов', 'Civilian harm and the location of military objectives', 'Шкода цивільним і розміщення військових об’єктів'),
    thesis: L('Александр связывает риск для гражданских с близостью стратегических объектов к населению и работой ПВО; редакционная рамка дополняет это обязанностями обеих сторон по международному гуманитарному праву.', 'Alexander links civilian risk to strategic sites near populated areas and air-defence activity; the editorial frame adds the duties of both sides under international humanitarian law.', 'Олександр пов’язує ризик для цивільних із близькістю стратегічних об’єктів до населення та роботою ППО; редакційна рамка додає обов’язки обох сторін за міжнародним гуманітарним правом.'),
    premises: LA(
      ['Военный объект в плотной застройке остаётся потенциальной целью.', 'Перехват и падение обломков добавляют риск для окружающих.', 'Гражданские последствия нужно учитывать при размещении объектов и при планировании атаки.'],
      ['A military objective in a dense urban area remains a potential target.', 'Interception and falling debris add risks to surrounding civilians.', 'Civilian consequences matter both when locating objectives and when planning an attack.'],
      ['Військовий об’єкт у щільній забудові залишається потенційною ціллю.', 'Перехоплення й падіння уламків додають ризик для цивільних.', 'Наслідки для цивільних треба враховувати і під час розміщення об’єктів, і під час планування атаки.'],
    ),
    reasoning: L('Близость военной цели к гражданским объектам объясняет один из механизмов риска. Но из этого не следует, что атакующая сторона освобождается от проверки цели, соразмерности и мер предосторожности.', 'Proximity explains one mechanism of civilian risk. It does not release the attacker from target verification, proportionality, or feasible precautions.', 'Близькість пояснює один із механізмів ризику. Вона не звільняє сторону, що атакує, від перевірки цілі, пропорційності та можливих запобіжних заходів.'),
    conclusion: L('Оценка конкретного удара должна одновременно проверять выбор места военного объекта и законность действий атакующей стороны.', 'A specific strike must be assessed through both the defender’s siting choices and the attacker’s legal duties.', 'Конкретний удар треба оцінювати і за вибором місця військового об’єкта, і за правовими обов’язками сторони, що атакує.'),
    objection: L('В отрывке нет развёрнутого встречного возражения; контекстом служит спор о прилёте рядом с гражданским объектом.', 'The excerpt contains no developed counterargument; the context is a dispute about an impact near civilians.', 'В уривку немає розгорнутого заперечення; контекстом є суперечка про влучання поруч із цивільними.'),
    response: L('Александр указывает на размещение цели и работу ПВО, затем прямо говорит, что гражданские не должны страдать.', 'Alexander points to target location and air defence, then explicitly says civilians should not suffer.', 'Олександр вказує на розміщення цілі та роботу ППО, а потім прямо каже, що цивільні не мають страждати.'),
    limitations: LA(
      ['Из транскрипта нельзя надёжно установить конкретный объект, боеприпас и причинную цепочку ущерба.', 'Размещение военного объекта рядом с населением не делает любой удар законным.', 'Без данных о цели, ожидаемом преимуществе и гражданском вреде нельзя вынести правовую оценку конкретного эпизода.'],
      ['The transcript cannot reliably identify the site, munition, or causal chain of harm.', 'Locating a military objective near civilians does not make every strike lawful.', 'A legal assessment needs target, anticipated advantage, and expected civilian-harm evidence.'],
      ['З транскрипту не можна надійно визначити конкретний об’єкт, боєприпас і причинний ланцюг шкоди.', 'Розміщення військового об’єкта біля населення не робить будь-який удар законним.', 'Для правової оцінки потрібні дані про ціль, очікувану перевагу й можливу шкоду цивільним.'],
    ),
    interpretationConfidence: 'medium',
    relatedNodeIds: ['concept-civilian-protection', 'concept-use-of-force', 'full-invasion'],
    relatedEventIds: ['full-invasion'],
    relatedArgumentIds: ['tactical-effect-vs-strategic-outcome'],
    citations: [
      citation('LkHavUQ4nwc', '00:10:18', '00:11:29', L('Размещение стратегических объектов, работа ПВО и сожаление о гражданских потерях.', 'Strategic-object siting, air defence, and regret over civilian harm.', 'Розміщення стратегічних об’єктів, робота ППО та жаль через шкоду цивільним.')),
    ],
    references: [
      { title: 'Additional Protocol I, Articles 52, 57 and 58', institution: 'ICRC treaty database', url: 'https://ihl-databases.icrc.org/assets/treaties/470-AP-I-EN.pdf' },
      { title: 'Rules of war: precautions and civilian protection', institution: 'International Committee of the Red Cross', url: 'https://www.icrc.org/en/document/FAQ-rules-of-war-ihl?language=en' },
    ],
    tags: ['МГП', 'гражданские', 'военные объекты'],
  },
  {
    id: 'transfer-2014-and-ato-authority',
    title: L('Процедура 2014 года и полномочие начать АТО', 'The 2014 transfer and authority to launch the ATO', 'Процедура 2014 року та повноваження розпочати АТО'),
    topic: L('Конституционная преемственность власти', 'Constitutional continuity of authority', 'Конституційна тяглість влади'),
    thesis: L('Александр связывает оценку АТО с предшествующим вопросом: соответствовало ли назначение исполняющего обязанности президента закрытому перечню оснований статей 108–112 Конституции Украины.', 'Alexander ties the ATO’s legitimacy to a prior question: whether appointing the acting president fit the closed constitutional sequence in Articles 108–112.', 'Олександр пов’язує оцінку АТО з попереднім питанням: чи відповідало призначення виконувача обов’язків президента вичерпній процедурі статей 108–112 Конституції України.'),
    premises: LA(
      ['Статья 108 перечисляет основания досрочного прекращения полномочий президента.', 'Постановление № 757-VII зафиксировало «самоустранение», которого в этом перечне нет.', 'Указ № 405/2014 был подписан Турчиновым как исполняющим обязанности президента со ссылкой на статьи 107 и 112.'],
      ['Article 108 lists the grounds for early termination of presidential authority.', 'Resolution No. 757-VII recorded “withdrawal from duties,” a category not listed there.', 'Decree No. 405/2014 was signed by Turchynov as acting president under Articles 107 and 112.'],
      ['Стаття 108 перелічує підстави дострокового припинення повноважень президента.', 'Постанова № 757-VII зафіксувала «самоусунення», якого в цьому переліку немає.', 'Указ № 405/2014 Турчинов підписав як виконувач обов’язків президента з посиланням на статті 107 і 112.'],
    ),
    reasoning: L('Если исходное прекращение полномочий не совпадает с процедурой Конституции, то Александр считает спорным и производное полномочие исполняющего обязанности президента вводить решение СНБО в действие.', 'If the initial termination did not match the Constitution’s procedure, Alexander treats the acting president’s derivative authority to enact the NSDC decision as disputed.', 'Якщо первинне припинення повноважень не відповідало процедурі Конституції, Олександр вважає спірним і похідне повноваження виконувача обов’язків вводити рішення РНБО в дію.'),
    conclusion: L('Юридическую оценку начала АТО нельзя отделять от точной процедуры перехода президентских полномочий в феврале 2014 года.', 'The legal assessment of the ATO’s launch cannot be separated from the exact February 2014 transfer procedure.', 'Правову оцінку початку АТО не можна відокремлювати від точної процедури переходу президентських повноважень у лютому 2014 року.'),
    objection: L('Собеседник апеллирует к Революции достоинства и фактической смене власти, но не формулирует правовой ответ по статьям 108–112.', 'The interlocutor invokes the Revolution of Dignity and the factual transfer of power but gives no legal answer on Articles 108–112.', 'Співрозмовник апелює до Революції гідності та фактичної зміни влади, але не дає правової відповіді щодо статей 108–112.'),
    response: L('Александр предлагает читать статью 108 и сопоставлять её основания с формулой постановления о «самоустранении».', 'Alexander asks the interlocutor to read Article 108 and compare its grounds with the resolution’s “withdrawal” formula.', 'Олександр пропонує прочитати статтю 108 і зіставити її підстави з формулою постанови про «самоусунення».'),
    limitations: LA(
      ['Документы подтверждают текст и даты решений, но не превращают термин «госпереворот» в установленный юридический факт.', 'Формальный дефект, фактическая непрерывность институтов и последующая электоральная легитимация — разные уровни оценки.', 'Указ об АТО и предшествующие захваты зданий нужно рассматривать в полной хронологии, а не изолированно.'],
      ['The documents establish wording and dates, not “coup” as a settled legal classification.', 'Formal defect, institutional continuity, and later electoral legitimation are separate levels.', 'The ATO decree and preceding seizures of buildings require a full chronology.'],
      ['Документи підтверджують текст і дати, але не роблять термін «держпереворот» установленою правовою кваліфікацією.', 'Формальний дефект, фактична тяглість інституцій і подальша виборча легітимація — різні рівні.', 'Указ про АТО та попередні захоплення будівель треба розглядати в повній хронології.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['power-2014', 'ato', 'concept-constitutional-procedure', 'concept-constitutional-interpretation'],
    relatedEventIds: ['power-2014', 'ato'],
    relatedArgumentIds: ['security-dilemma-and-escalation-chain'],
    citations: [
      citation('Ol0ue_sDD48', '00:09:14', '00:11:44', L('Дата и автор решения об АТО; связь с оценкой перехода власти.', 'Date and author of the ATO decision; link to the transfer-of-power assessment.', 'Дата й автор рішення про АТО; зв’язок з оцінкою переходу влади.')),
      citation('Ol0ue_sDD48', '00:15:12', '00:16:19', L('Ссылка Александра на статью 108 и основания прекращения полномочий.', 'Alexander’s reference to Article 108 and the grounds for terminating authority.', 'Посилання Олександра на статтю 108 і підстави припинення повноважень.')),
    ],
    references: [
      { title: 'Constitution of Ukraine, Articles 108–112', institution: 'Verkhovna Rada of Ukraine', url: 'https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80?lang=en' },
      { title: 'Resolution No. 757-VII of 22 February 2014', institution: 'Verkhovna Rada of Ukraine', url: 'https://zakon.rada.gov.ua/laws/show/757-18?lang=en' },
      { title: 'Decree No. 405/2014 of 14 April 2014', institution: 'Verkhovna Rada of Ukraine', url: 'https://zakon.rada.gov.ua/laws/show/405/2014?lang=en' },
    ],
    tags: ['2014', 'Конституция', 'АТО'],
  },
  {
    id: 'shared-history-vs-statehood',
    title: L('Общая история как рамка, а не отмена государственности', 'Shared history as a frame, not an erasure of statehood', 'Спільна історія як рамка, а не скасування державності'),
    topic: L('Россия, Украина и формула «один народ»', 'Russia, Ukraine, and the “one people” frame', 'Росія, Україна та формула «один народ»'),
    thesis: L('Александр рассматривает длительную совместную историю как основание не принимать сегодняшнее разделение на «разные стороны» за единственно возможную историческую норму.', 'Alexander treats a long shared history as a reason not to view today’s “different sides” as the only possible historical norm.', 'Олександр розглядає тривалу спільну історію як підставу не вважати сьогоднішній поділ на «різні сторони» єдино можливою історичною нормою.'),
    premises: LA(
      ['Россия и Украина долго находились в общих политических пространствах.', 'Внутри этих пространств были войны и конфликты.', 'Современная политическая граница не исчерпывает историческую и культурную связь.'],
      ['Russia and Ukraine spent long periods in common political spaces.', 'Those spaces also contained wars and internal conflicts.', 'A modern political border does not exhaust historical and cultural links.'],
      ['Росія й Україна тривалий час перебували у спільних політичних просторах.', 'Усередині цих просторів також були війни та конфлікти.', 'Сучасний політичний кордон не вичерпує історичних і культурних зв’язків.'],
    ),
    reasoning: L('Из повторяемости общей истории Александр выводит устойчивость представления о едином народе в российской политике.', 'From the recurrence of shared history, Alexander infers the durability of a “one people” idea in Russian politics.', 'Із повторюваності спільної історії Олександр виводить стійкість уявлення про «єдиний народ» у російській політиці.'),
    conclusion: L('Текущий конфликт он описывает как разрыв внутри исторически связанного пространства, а не как столкновение полностью чужих обществ.', 'He frames the current conflict as a rupture inside a historically connected space, not a clash of wholly unrelated societies.', 'Він описує нинішній конфлікт як розрив усередині історично пов’язаного простору, а не зіткнення цілком чужих суспільств.'),
    objection: L('Собеседник отвечает через независимую государственность Украины, разоружение и международные заверения безопасности.', 'The interlocutor answers through Ukraine’s independent statehood, disarmament, and international security assurances.', 'Співрозмовник відповідає через незалежну державність України, роззброєння та міжнародні запевнення безпеки.'),
    response: L('Александр возвращается к тому, что формула «один народ» описывает восприятие Кремля, но не развивает отдельного правового ответа на суверенитет.', 'Alexander returns to the point that “one people” describes the Kremlin’s perception, without developing a separate legal answer on sovereignty.', 'Олександр повертається до того, що формула «один народ» описує сприйняття Кремля, але не розгортає окремої правової відповіді щодо суверенітету.'),
    limitations: LA(
      ['Выражение «всегда были вместе» слишком широкое и исторически неточное без периодизации.', 'Общая история не отменяет современный суверенитет и международно признанные границы.', 'Фрагмент частично повреждён ASR, поэтому уверенность в полном ходе рассуждения ниже.'],
      ['“Always together” is overbroad and historically imprecise without periodisation.', 'Shared history does not cancel modern sovereignty or internationally recognised borders.', 'The ASR is damaged in parts, lowering confidence in the full reasoning chain.'],
      ['Формула «завжди були разом» надто широка й історично неточна без періодизації.', 'Спільна історія не скасовує сучасний суверенітет і міжнародно визнані кордони.', 'Частина ASR пошкоджена, тому впевненість у повному ході міркування нижча.'],
    ),
    interpretationConfidence: 'medium',
    relatedNodeIds: ['concept-shared-history', 'concept-sovereignty', 'concept-russia-ukraine-relationship'],
    relatedEventIds: ['ukraine-sovereignty-1990', 'ussr-dissolution-1991'],
    relatedArgumentIds: ['budapest-assurances-and-disarmament', 'ussr-dissolution-and-present-consent'],
    citations: [
      citation('wsqPJMI6noM', '00:00:45', '00:02:20', L('Почему стороны названы разными и как Александр вводит общую историческую рамку.', 'Why the sides are called different and how Alexander introduces the shared-history frame.', 'Чому сторони названі різними й як Олександр вводить спільну історичну рамку.')),
    ],
    references: [
      { title: 'Act of Declaration of Independence of Ukraine', institution: 'Verkhovna Rada of Ukraine', url: 'https://zakon.rada.gov.ua/laws/show/en/1427-12?lang=en' },
      { title: 'UN member-state record: Russian Federation', institution: 'United Nations', url: 'https://www.un.org/en/about-us/member-states/russian-federation' },
    ],
    tags: ['идентичность', 'история', 'суверенитет'],
  },
  {
    id: 'war-as-political-instrument',
    title: L('Война расходует ресурсы ради политической цели', 'War spends resources for a political objective', 'Війна витрачає ресурси заради політичної мети'),
    topic: L('Цели войны и проверка объяснений', 'War aims and testing explanations', 'Цілі війни та перевірка пояснень'),
    thesis: L('Александр отвергает объяснение войны как простого «испытания оружия»: крупное применение силы требует политической цели, доступных ресурсов и способа превратить военный эффект в политический результат.', 'Alexander rejects “weapons testing” as a sufficient explanation for war: large-scale force requires a political objective, resources, and a way to convert military effect into political outcome.', 'Олександр відкидає «випробування зброї» як достатнє пояснення війни: масштабна сила потребує політичної мети, ресурсів і способу перетворити військовий ефект на політичний результат.'),
    premises: LA(
      ['Война уничтожает дефицитные людские, материальные и политические ресурсы.', 'Рациональный актор не несёт такие издержки только ради технической проверки.', 'Военная сила обычно обслуживает цель, которую не удалось или не захотели достигать дипломатией.'],
      ['War consumes scarce human, material, and political resources.', 'A rational actor does not bear such costs for a technical test alone.', 'Force usually serves an objective not achieved—or not pursued—through diplomacy.'],
      ['Війна споживає дефіцитні людські, матеріальні й політичні ресурси.', 'Раціональний актор не несе таких витрат лише заради технічної перевірки.', 'Сила зазвичай обслуговує мету, якої не досягли або не прагнули досягти дипломатією.'],
    ),
    reasoning: L('Объяснение должно назвать цель, ресурсы и ожидаемый политический эффект; иначе оно не объясняет масштаб затрат.', 'An explanation must identify the objective, resources, and expected political effect; otherwise it cannot account for the scale of expenditure.', 'Пояснення має назвати мету, ресурси й очікуваний політичний ефект; інакше воно не пояснює масштаб витрат.'),
    conclusion: L('Формулу «просто проверяли оружие» следует заменить проверяемой гипотезой о политических целях.', '“They were merely testing weapons” should be replaced with a testable hypothesis about political aims.', 'Формулу «просто випробовували зброю» слід замінити перевірюваною гіпотезою про політичні цілі.'),
    objection: L('Собеседник сравнивает действия России с испытанием вооружений и с атомными бомбардировками Японии.', 'The interlocutor compares Russia’s conduct to weapons testing and the atomic bombings of Japan.', 'Співрозмовник порівнює дії Росії з випробуванням озброєнь та атомними бомбардуваннями Японії.'),
    response: L('Александр отвечает, что даже демонстрация оружия является политическим сигналом, а не целью, отделённой от политики.', 'Alexander replies that even a weapons demonstration is a political signal, not a goal detached from politics.', 'Олександр відповідає, що навіть демонстрація зброї є політичним сигналом, а не метою, відокремленою від політики.'),
    limitations: LA(
      ['Рациональность актора нельзя предполагать без проверки ошибок, внутренних стимулов и неполной информации.', 'Историческая трактовка мотивов Хиросимы и Нагасаки спорна и не используется как доказанный факт.', 'Наличие политической цели ничего не говорит о законности или моральной допустимости войны.'],
      ['Actor rationality cannot be assumed without testing errors, domestic incentives, and incomplete information.', 'The Hiroshima/Nagasaki motive claim is contested and is not treated as established fact.', 'Having a political objective says nothing by itself about legality or moral legitimacy.'],
      ['Раціональність актора не можна припускати без перевірки помилок, внутрішніх стимулів і неповної інформації.', 'Трактування мотивів Хіросіми й Нагасакі спірне й не використовується як доведений факт.', 'Наявність політичної мети сама по собі нічого не каже про законність чи моральну допустимість війни.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['concept-war-aims', 'concept-state-capacity', 'concept-cause-vs-justification'],
    relatedEventIds: ['full-invasion'],
    relatedArgumentIds: ['security-dilemma-and-escalation-chain', 'tactical-effect-vs-strategic-outcome'],
    citations: [
      citation('wsqPJMI6noM', '00:05:54', '00:08:06', L('Спор об «испытании» вооружений и политической цели применения силы.', 'Dispute over weapons “testing” and the political purpose of force.', 'Суперечка про «випробування» озброєнь і політичну мету застосування сили.')),
      citation('wsqPJMI6noM', '00:14:43', '00:15:24', L('Цель, ресурсы и эффективность их использования.', 'Objective, resources, and their effective use.', 'Мета, ресурси й ефективність їх використання.')),
    ],
    references: [
      { title: 'Charter of the United Nations', institution: 'United Nations', url: 'https://www.un.org/en/about-us/un-charter/full-text' },
    ],
    tags: ['цели войны', 'ресурсы', 'причинность'],
  },
  {
    id: 'budapest-assurances-and-disarmament',
    title: L('Будапешт: заверения, не автоматическая оборона', 'Budapest: assurances, not automatic defence', 'Будапешт: запевнення, а не автоматична оборона'),
    topic: L('Ядерное разоружение Украины', 'Ukraine’s nuclear disarmament', 'Ядерне роззброєння України'),
    thesis: L('Александр различает неядерный курс Украины, советское происхождение размещённого арсенала и содержание Будапештского меморандума, в котором нет механизма автоматической коллективной обороны.', 'Alexander distinguishes Ukraine’s non-nuclear policy, the Soviet origin of the deployed arsenal, and the Budapest Memorandum, which contains no automatic collective-defence mechanism.', 'Олександр розрізняє без’ядерний курс України, радянське походження розміщеного арсеналу та зміст Будапештського меморандуму, де немає механізму автоматичної колективної оборони.'),
    premises: LA(
      ['Декларация о государственном суверенитете 1990 года заявляла будущую нейтральность и три неядерных принципа.', 'Ядерные силы на территории Украины были частью советского стратегического комплекса.', 'Будапештский меморандум записывает конкретные заверения и консультации, но не аналог статьи 5 НАТО.'],
      ['The 1990 Declaration of State Sovereignty stated future neutrality and three non-nuclear principles.', 'Nuclear forces in Ukraine formed part of the Soviet strategic complex.', 'The Budapest Memorandum records specific assurances and consultations, not a NATO Article 5 mechanism.'],
      ['Декларація про державний суверенітет 1990 року заявляла майбутній нейтралітет і три без’ядерні принципи.', 'Ядерні сили на території України були частиною радянського стратегічного комплексу.', 'Будапештський меморандум фіксує конкретні запевнення й консультації, а не аналог статті 5 НАТО.'],
    ),
    reasoning: L('Из отсутствия автоматического военного механизма Александр выводит, что разговор о «гарантиях» должен начинаться с точного текста документа, а не с бытового значения слова.', 'From the absence of an automatic military mechanism, Alexander argues that “guarantees” must be discussed through the document’s exact text, not everyday usage.', 'З відсутності автоматичного військового механізму Олександр робить висновок, що про «гарантії» треба говорити через точний текст документа, а не побутове значення слова.'),
    conclusion: L('Нарушение записанных заверений и отсутствие обязанности немедленно вступить в войну — два разных вопроса.', 'A breach of recorded assurances and the absence of a duty to enter the war immediately are different questions.', 'Порушення записаних запевнень і відсутність обов’язку негайно вступити у війну — різні питання.'),
    objection: L('Собеседник говорит, что Украина отдала ядерное оружие в обмен на гарантии безопасности.', 'The interlocutor says Ukraine surrendered nuclear weapons in exchange for security guarantees.', 'Співрозмовник каже, що Україна віддала ядерну зброю в обмін на гарантії безпеки.'),
    response: L('Александр призывает прочитать шесть пунктов меморандума и отдельно квалифицировать характер записанных обязательств.', 'Alexander asks that the six paragraphs be read and the recorded commitments classified precisely.', 'Олександр закликає прочитати шість пунктів меморандуму й точно визначити характер записаних зобов’язань.'),
    limitations: LA(
      ['Фраза, что независимость Украины «признали на основе» нейтральности и неядерности, сильнее текста Акта независимости и не подтверждена этим источником.', 'Советское происхождение арсенала не делает вопрос контроля, собственности и разоружения простым или бесспорным.', 'Отсутствие автоматической военной помощи не отменяет обязательств уважать суверенитет, границы и запрет силы.'],
      ['The claim that recognition of independence was “based on” neutrality and non-nuclear status goes beyond the Independence Act.', 'Soviet origin does not make control, ownership, and disarmament simple or uncontested.', 'The absence of automatic military aid does not erase commitments on sovereignty, borders, and force.'],
      ['Теза, що незалежність України «визнали на основі» нейтралітету й без’ядерності, виходить за текст Акта незалежності.', 'Радянське походження арсеналу не робить питання контролю, власності й роззброєння простим.', 'Відсутність автоматичної військової допомоги не скасовує зобов’язань щодо суверенітету, кордонів і сили.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['ukraine-sovereignty-1990', 'budapest', 'concept-security-assurances', 'concept-sovereignty'],
    relatedEventIds: ['ukraine-sovereignty-1990', 'budapest'],
    relatedArgumentIds: ['security-dilemma-and-escalation-chain', 'shared-history-vs-statehood'],
    citations: [
      citation('wsqPJMI6noM', '00:09:40', '00:10:44', L('Неядерный курс, происхождение арсенала и предложение читать меморандум.', 'Non-nuclear policy, origin of the arsenal, and the request to read the memorandum.', 'Без’ядерний курс, походження арсеналу й пропозиція читати меморандум.')),
    ],
    references: [
      { title: 'Declaration of State Sovereignty of Ukraine', institution: 'Verkhovna Rada of Ukraine', url: 'https://zakon.rada.gov.ua/laws/show/en/55-12' },
      { title: 'Act of Declaration of Independence of Ukraine', institution: 'Verkhovna Rada of Ukraine', url: 'https://zakon.rada.gov.ua/laws/show/en/1427-12?lang=en' },
      { title: 'Budapest Memorandum, UNTS Volume 3007', institution: 'United Nations Treaty Collection', url: 'https://treaties.un.org/doc/Publication/UNTS/Volume%203007/Part/volume-3007-I-52241.pdf' },
    ],
    tags: ['Будапешт', 'ядерное разоружение', 'заверения'],
  },
  {
    id: 'security-dilemma-and-escalation-chain',
    title: L('Угрозовое восприятие объясняет эскалацию, но не оправдывает её', 'Threat perception may explain escalation, not justify it', 'Сприйняття загрози може пояснювати ескалацію, але не виправдовувати її'),
    topic: L('Минск, предложения 2021 года и вторжение', 'Minsk, the 2021 proposals, and the invasion', 'Мінськ, пропозиції 2021 року та вторгнення'),
    thesis: L('Александр строит причинную цепочку: невыполнение Минска, рост военной угрозы и провал переговоров сформировали в Москве вывод, что политические средства исчерпаны.', 'Alexander builds a causal chain in which failed Minsk implementation, growing military threat, and failed talks led Moscow to conclude that political means were exhausted.', 'Олександр будує причинний ланцюг: невиконання Мінська, зростання військової загрози та провал переговорів сформували в Москві висновок, що політичні засоби вичерпано.'),
    premises: LA(
      ['Минские меры не были полностью выполнены, а стороны спорили о последовательности и ответственности.', 'Россия направила США и НАТО проекты соглашений о безопасности в декабре 2021 года.', 'Киев и западные государства продолжали военное сотрудничество; в российской рамке это усиливало угрозу.'],
      ['The Minsk measures were not fully implemented and responsibility and sequencing remained disputed.', 'Russia sent security-agreement drafts to the United States and NATO in December 2021.', 'Kyiv and Western states continued military cooperation, which intensified threat perception in the Russian frame.'],
      ['Мінські заходи не були повністю виконані, а відповідальність і послідовність лишалися спірними.', 'Росія надіслала США й НАТО проєкти безпекових угод у грудні 2021 року.', 'Київ і західні держави продовжували військову співпрацю, що посилювало сприйняття загрози в російській рамці.'],
    ),
    reasoning: L('Если дипломатические механизмы не снижают воспринимаемую угрозу, государство может перейти к силе как к инструменту политики. Это причинное объяснение позиции Александра, а не редакционное признание необходимости или законности вторжения.', 'If diplomacy does not reduce a perceived threat, a state may shift to force as an instrument of policy. This describes Alexander’s causal account; it is not an editorial finding of necessity or legality.', 'Якщо дипломатія не знижує сприйману загрозу, держава може перейти до сили як інструменту політики. Це опис причинної версії Олександра, а не редакційний висновок про необхідність чи законність вторгнення.'),
    conclusion: L('Для понимания его позиции вторжение нужно читать как итог угрозовой модели и провала переговоров; юридическую оценку применения силы проводить отдельно.', 'To understand his position, the invasion is read as the result of a threat model and failed talks; legality must be assessed separately.', 'Щоб зрозуміти його позицію, вторгнення слід читати як наслідок моделі загрози й провалу переговорів; законність треба оцінювати окремо.'),
    objection: L('Собеседник говорит, что инфраструктура ещё не строилась, а Украина нуждалась в безопасности после российских ударов.', 'The interlocutor says the infrastructure did not yet exist and Ukraine sought security after Russian attacks.', 'Співрозмовник каже, що інфраструктури ще не було, а Україна потребувала безпеки після російських ударів.'),
    response: L('Александр предлагает посмотреть на украинское ядерное и военное сближение глазами Кремля и связывает его с Минском и декабрьскими предложениями.', 'Alexander asks that Ukrainian nuclear and military alignment be viewed from the Kremlin’s perspective and connects it to Minsk and the December proposals.', 'Олександр пропонує подивитися на українське ядерне й військове зближення очима Кремля та пов’язує його з Мінськом і грудневими пропозиціями.'),
    limitations: LA(
      ['Восприятие угрозы не создаёт исключения из запрета применения силы по Уставу ООН.', 'Мюнхенская речь Зеленского ставила под сомнение пакет 1994 года при провале консультаций, но прямо не объявляла решение создать ядерное оружие.', 'Закон США о ленд-лизе внесли 19 января 2022 года, а законом он стал 9 мая — после начала вторжения; фраза о принятом до войны решении хронологически неточна.', 'Ответственность за невыполнение Минска нельзя приписать одной стороне без разбора каждого пункта.'],
      ['Threat perception creates no UN Charter exception to the prohibition on force.', 'Zelenskyy’s Munich speech questioned the 1994 package if consultations failed but did not explicitly announce a decision to build nuclear weapons.', 'The US Lend-Lease bill was introduced on 19 January 2022 and became law on 9 May—after the invasion; the transcript’s chronology is inaccurate.', 'Responsibility for Minsk cannot be assigned to one side without paragraph-by-paragraph analysis.'],
      ['Сприйняття загрози не створює винятку із заборони сили за Статутом ООН.', 'Мюнхенська промова Зеленського ставила під сумнів пакет 1994 року за провалу консультацій, але прямо не оголошувала рішення створити ядерну зброю.', 'Законопроєкт США про ленд-ліз внесли 19 січня 2022 року, а законом він став 9 травня — після вторгнення; хронологія в транскрипті неточна.', 'Відповідальність за Мінськ не можна покласти на одну сторону без аналізу кожного пункту.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['minsk', 'munich-security-2022', 'full-invasion', 'concept-security-dilemma', 'concept-cause-vs-justification'],
    relatedEventIds: ['minsk', 'munich-security-2022', 'full-invasion'],
    relatedArgumentIds: ['war-as-political-instrument', 'budapest-assurances-and-disarmament', 'transfer-2014-and-ato-authority'],
    citations: [
      citation('wsqPJMI6noM', '00:11:37', '00:12:12', L('Модель угрозы при возможном восстановлении ядерного статуса.', 'Threat model around possible restoration of nuclear status.', 'Модель загрози за можливого відновлення ядерного статусу.')),
      citation('wsqPJMI6noM', '00:15:53', '00:18:42', L('Минск, предложения декабря 2021 года и сила как продолжение политики.', 'Minsk, the December 2021 proposals, and force as a continuation of policy.', 'Мінськ, пропозиції грудня 2021 року й сила як продовження політики.')),
      citation('LkHavUQ4nwc', '00:11:02', '00:11:29', L('Повтор тезиса о выборе между переговорами и ухудшением условий.', 'Repeated claim about negotiation choices and worsening terms.', 'Повтор тези про вибір між переговорами й погіршенням умов.')),
    ],
    references: [
      { title: 'Package of Measures for the Implementation of the Minsk Agreements', institution: 'OSCE', url: 'https://www.osce.org/sites/default/files/f/documents/5/b/140221.pdf' },
      { title: 'North Atlantic Council statement of 16 December 2021', institution: 'NATO', url: 'https://www.nato.int/en/about-us/official-texts-and-resources/official-texts/2021/12/16/statement-by-the-north-atlantic-council-on-the-situation-in-and-around-ukraine' },
      { title: 'Speech at the Munich Security Conference, 19 February 2022', institution: 'President of Ukraine', url: 'https://www.president.gov.ua/en/news/vistup-prezidenta-ukrayini-na-58-j-myunhenskij-konferenciyi-72997' },
      { title: 'Ukraine Democracy Defense Lend-Lease Act of 2022', institution: 'United States Congress', url: 'https://www.congress.gov/bill/117th-congress/senate-bill/3522/all-info' },
      { title: 'Charter of the United Nations', institution: 'United Nations', url: 'https://www.un.org/en/about-us/un-charter/full-text' },
    ],
    tags: ['Минск', 'НАТО', 'причина и оправдание'],
  },
  {
    id: 'ussr-dissolution-and-present-consent',
    title: L('Сожаление о распаде СССР не означает проект восстановления', 'Regret over the USSR’s dissolution is not a restoration project', 'Жаль через розпад СРСР не означає проєкт відновлення'),
    topic: L('Распад СССР, процедура и современное согласие', 'USSR dissolution, procedure, and present consent', 'Розпад СРСР, процедура та сучасна згода'),
    thesis: L('Александр одновременно считает процедуру распада СССР юридически дефектной, сожалеет о результате и отвергает буквальное восстановление спустя десятилетия без согласия обществ.', 'Alexander simultaneously views the USSR’s dissolution procedure as legally defective, regrets the result, and rejects literal restoration decades later without social consent.', 'Олександр одночасно вважає процедуру розпаду СРСР юридично дефектною, шкодує про результат і відкидає буквальне відновлення через десятиліття без згоди суспільств.'),
    premises: LA(
      ['Российская декларация суверенитета 1990 года сохраняла ориентацию на обновлённый Союз.', 'В декабре 1991 года Верховный Совет РСФСР ратифицировал соглашение о СНГ и денонсировал союзный договор.', 'В 1996 году Государственная Дума отменила постановление о денонсации и подтвердила силу результатов референдума 1991 года для России.', 'За прошедшее время возникли отдельные государства и изменились предпочтения населения.'],
      ['Russia’s 1990 sovereignty declaration still envisaged a renewed Union.', 'In December 1991 the RSFSR Supreme Soviet ratified the CIS agreement and denounced the Union Treaty.', 'In 1996 the State Duma annulled the denunciation resolution and reaffirmed the 1991 referendum result for Russia.', 'Separate states and changed public preferences emerged over the following decades.'],
      ['Російська декларація суверенітету 1990 року ще передбачала оновлений Союз.', 'У грудні 1991 року Верховна Рада РРФСР ратифікувала угоду про СНД і денонсувала союзний договір.', 'У 1996 році Державна Дума скасувала постанову про денонсацію та підтвердила результат референдуму 1991 року для Росії.', 'За наступні десятиліття виникли окремі держави й змінилися суспільні уподобання.'],
    ),
    reasoning: L('Юридическая критика исторического решения не даёт практического мандата отменить сложившуюся реальность; современная интеграция требует нового добровольного согласия.', 'A legal critique of a historical decision does not grant a practical mandate to undo the resulting order; present integration would require new voluntary consent.', 'Правова критика історичного рішення не дає практичного мандата скасувати сформований порядок; сучасна інтеграція потребує нової добровільної згоди.'),
    conclusion: L('Можно считать распад ошибкой и одновременно считать восстановление прежнего государства неразумным.', 'One can regard the dissolution as a mistake while considering restoration of the former state unwise.', 'Можна вважати розпад помилкою й водночас вважати відновлення колишньої держави нерозумним.'),
    objection: L('Собеседник приравнивает денонсацию союзного договора к выходу России и спрашивает, является ли это предательством.', 'The interlocutor equates denunciation of the Union Treaty with Russia’s exit and asks whether it was betrayal.', 'Співрозмовник прирівнює денонсацію союзного договору до виходу Росії та питає, чи було це зрадою.'),
    response: L('Александр принимает моральную оценку решения как предательства, но отдельно ограничивает практический вывод требованием учитывать время и волю людей.', 'Alexander accepts the moral label of betrayal but limits the practical conclusion by insisting on elapsed time and people’s present will.', 'Олександр приймає моральну оцінку рішення як зради, але обмежує практичний висновок вимогою враховувати час і нинішню волю людей.'),
    limitations: LA(
      ['В транскрипте перепутана дата денонсации: решения Верховного Совета РСФСР приняты 12, а не 20 декабря 1991 года.', 'Отмена постановления состоялась в 1996, а не в 2003 году; Александр сам оговаривает, что дату нужно проверить.', 'Постановления Думы 1996 года создали политико-правовую коллизию, но не восстановили СССР.'],
      ['The transcript misdates the denunciation: the RSFSR Supreme Soviet acted on 12, not 20, December 1991.', 'The annulment resolution was adopted in 1996, not 2003; Alexander himself says the date needs checking.', 'The 1996 Duma resolutions created a legal-political controversy but did not restore the USSR.'],
      ['У транскрипті переплутано дату денонсації: Верховна Рада РРФСР ухвалила рішення 12, а не 20 грудня 1991 року.', 'Скасування постанови відбулося 1996 року, а не 2003-го; Олександр сам каже, що дату треба перевірити.', 'Постанови Думи 1996 року створили правово-політичну колізію, але не відновили СРСР.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['ussr-dissolution-1991', 'concept-state-continuity', 'concept-population-consent'],
    relatedEventIds: ['ussr-dissolution-1991'],
    relatedArgumentIds: ['state-continuity-vs-ideology', 'shared-history-vs-statehood'],
    citations: [
      citation('g0wrgfZqVm4', '00:01:12', '00:03:48', L('Суверенитет РСФСР, денонсация, сожаление и отказ от реставрации.', 'RSFSR sovereignty, denunciation, regret, and rejection of restoration.', 'Суверенітет РРФСР, денонсація, жаль і відмова від реставрації.')),
    ],
    references: [
      { title: 'Official State Duma transcript on the 1996 resolutions', institution: 'State Duma of the Russian Federation', url: 'https://api.duma.gov.ru/api/transcriptFull/1999-05-14' },
      { title: 'Russian Federation membership continuity', institution: 'United Nations', url: 'https://www.un.org/en/about-us/member-states/russian-federation' },
    ],
    tags: ['СССР', 'распад', 'согласие'],
  },
  {
    id: 'state-continuity-vs-ideology',
    title: L('Правопродолжение не требует прежней идеологии', 'State continuity does not require ideological continuity', 'Правопродовження не потребує колишньої ідеології'),
    topic: L('Российская Федерация и обязательства СССР', 'The Russian Federation and USSR obligations', 'Російська Федерація та зобов’язання СРСР'),
    thesis: L('Александр разводит юридическое продолжение государства и сохранение его идеологии: смена строя не обнуляет международные договоры и обязательства перед людьми.', 'Alexander separates legal state continuation from ideological continuity: regime change does not erase international treaties or obligations to people.', 'Олександр розділяє юридичне продовження держави та збереження її ідеології: зміна ладу не обнуляє міжнародні договори й зобов’язання перед людьми.'),
    premises: LA(
      ['Российская Федерация продолжила членство СССР в ООН и ответственность по соответствующим правам и обязательствам.', 'Договорные и имущественные обязательства существуют независимо от государственной идеологии.', 'Смена плановой экономики на рыночную описывает строй, а не автоматически прекращение правосубъектности.'],
      ['The Russian Federation continued the USSR’s UN membership and responsibility for associated rights and obligations.', 'Treaty and property obligations exist independently of state ideology.', 'A change from planned to market economy describes the system, not automatic termination of legal personality.'],
      ['Російська Федерація продовжила членство СРСР в ООН і відповідальність за відповідні права та зобов’язання.', 'Договірні та майнові зобов’язання існують незалежно від державної ідеології.', 'Перехід від планової до ринкової економіки описує лад, а не автоматичне припинення правосуб’єктності.'],
    ),
    reasoning: L('Критерий правопродолжения — продолжение прав и обязательств, а не сохранение партийной доктрины, экономической модели или отношения к советским приговорам.', 'The criterion is continuation of rights and obligations, not preservation of party doctrine, economic model, or attitudes to Soviet convictions.', 'Критерій правопродовження — продовження прав і зобов’язань, а не збереження партійної доктрини, економічної моделі чи ставлення до радянських вироків.'),
    conclusion: L('Идеологический разрыв совместим с юридической преемственностью и продолжением отдельных обязательств.', 'Ideological rupture is compatible with legal succession and continuation of particular obligations.', 'Ідеологічний розрив сумісний із правонаступництвом і продовженням окремих зобов’язань.'),
    objection: L('Собеседник считает отказ от коммунизма, плановой экономики и реабилитацию осуждённых доказательством отсутствия преемственности.', 'The interlocutor treats rejection of communism, the planned economy, and rehabilitation of convicts as proof that continuity ended.', 'Співрозмовник вважає відмову від комунізму, планової економіки та реабілітацію засуджених доказом відсутності тяглості.'),
    response: L('Александр приводит международные договоры, пенсии и сбережения как разные классы обязательств, которые переживают смену идеологии.', 'Alexander cites international treaties, pensions, and savings as different classes of obligations that survive ideology change.', 'Олександр наводить міжнародні договори, пенсії та заощадження як різні класи зобов’язань, що переживають зміну ідеології.'),
    limitations: LA(
      ['Термины «правопреемник» и «государство-продолжатель» не тождественны во всех областях права.', 'Продолжение членства РФ в ООН было принято без возражений, но отдельные активы и долги регулировались дополнительными соглашениями.', 'Примеры с частными сбережениями в транскрипте иллюстративны и требуют отдельной правовой проверки.'],
      ['“Successor state” and “continuing state” are not identical across every field of law.', 'Russia’s continued UN membership went unchallenged, while assets and debts also required separate arrangements.', 'The private-savings examples are illustrative and need their own legal verification.'],
      ['«Держава-правонаступник» і «держава-продовжувач» не тотожні в усіх галузях права.', 'Продовження членства РФ в ООН не оскаржили, але активи й борги також регулювали окремі угоди.', 'Приклади з приватними заощадженнями є ілюстративними й потребують окремої правової перевірки.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['ussr-dissolution-1991', 'concept-state-continuity', 'un-charter'],
    relatedEventIds: ['ussr-dissolution-1991', 'un-charter'],
    relatedArgumentIds: ['ussr-dissolution-and-present-consent'],
    citations: [
      citation('g0wrgfZqVm4', '00:04:07', '00:06:19', L('Спор о правопродолжении, договорах, пенсиях и идеологии.', 'Dispute about state continuity, treaties, pensions, and ideology.', 'Суперечка про правопродовження, договори, пенсії та ідеологію.')),
    ],
    references: [
      { title: 'Russian Federation: continuation of USSR membership', institution: 'United Nations', url: 'https://www.un.org/en/about-us/member-states/russian-federation' },
      { title: 'UN Disarmament Yearbook 1991, note on treaty commitments', institution: 'United Nations Office for Disarmament Affairs', url: 'https://digitallibrary.un.org/record/151375/files/EN-YB-VOL-16-1991.pdf' },
    ],
    tags: ['правопродолжение', 'обязательства', 'идеология'],
  },
  {
    id: 'ideological-examples-and-social-prevalence',
    title: L('Отдельный мыслитель не доказывает идеологию общества', 'A single thinker does not prove a society’s ideology', 'Окремий мислитель не доводить ідеологію суспільства'),
    topic: L('Ильин, Бандера и тест на ложную эквивалентность', 'Ilyin, Bandera, and testing false equivalence', 'Ільїн, Бандера й тест на хибну еквівалентність'),
    thesis: L('Александр предлагает оценивать идеологию по распространённости, институциональному закреплению и последствиям, а не по одному цитируемому автору, памятной доске или реабилитации.', 'Alexander proposes judging ideology by prevalence, institutional adoption, and effects—not by one cited author, plaque, or rehabilitation.', 'Олександр пропонує оцінювати ідеологію за поширеністю, інституційним закріпленням і наслідками, а не за одним цитованим автором, дошкою чи реабілітацією.'),
    premises: LA(
      ['Частичное оправдание человека по одному обвинению не одобряет все его взгляды.', 'Цитирование отдельных работ не означает принятия всего наследия автора.', 'Для вывода об идеологии государства нужны показатели распространённости, институтов и политики.'],
      ['Acquittal on one charge does not endorse every view a person held.', 'Citing selected works does not adopt an author’s entire legacy.', 'A claim about state ideology requires evidence of prevalence, institutions, and policy.'],
      ['Виправдання за одним обвинуваченням не схвалює всіх поглядів людини.', 'Цитування окремих праць не означає прийняття всієї спадщини автора.', 'Висновок про державну ідеологію потребує даних про поширеність, інституції та політику.'],
    ),
    reasoning: L('Переход от частного примера к характеристике всего общества является ошибкой масштаба. Сопоставлять следует одинаковые показатели по обе стороны.', 'Moving from a private example to a whole-society label is a scale error. Comparisons should use equivalent indicators on both sides.', 'Перехід від окремого прикладу до характеристики всього суспільства є помилкою масштабу. Порівнювати треба однакові показники для обох сторін.'),
    conclusion: L('Исторические фигуры могут быть релевантны, но сами по себе не доказывают массовую или государственную идеологию.', 'Historical figures may be relevant, but they do not by themselves establish mass or state ideology.', 'Історичні постаті можуть бути релевантними, але самі по собі не доводять масову чи державну ідеологію.'),
    objection: L('Собеседник приводит Ильина и Шульгина как российский эквивалент украинских споров о Бандере и Шухевиче и обвиняет оппонента в двойном стандарте.', 'The interlocutor offers Ilyin and Shulgin as Russian equivalents to Ukrainian disputes over Bandera and Shukhevych and alleges a double standard.', 'Співрозмовник наводить Ільїна й Шульгіна як російський еквівалент українських суперечок про Бандеру й Шухевича та звинувачує опонента в подвійному стандарті.'),
    response: L('Александр разделяет оценку конкретных взглядов, всего корпуса работ и реальную роль фигуры в массовой политике.', 'Alexander separates assessment of particular views, an entire body of work, and the figure’s actual role in mass politics.', 'Олександр розділяє оцінку конкретних поглядів, усього корпусу праць і реальну роль постаті в масовій політиці.'),
    limitations: LA(
      ['Сам Александр затем делает широкие эмпирические выводы о России и Украине без измеримых данных.', 'Фрагменты после 19:26 содержат цитирование Ильина и исследователей; эти слова нельзя целиком приписывать Александру как его собственную позицию.', 'Исторические оценки Ильина, Шульгина, Бандеры и Шухевича требуют отдельного источниковедческого разбора.'],
      ['Alexander later makes broad empirical claims about Russia and Ukraine without measurable evidence.', 'Segments after 19:26 quote Ilyin and scholars; those words cannot all be attributed to Alexander as his own position.', 'The historical records of Ilyin, Shulgin, Bandera, and Shukhevych need a separate source review.'],
      ['Сам Олександр далі робить широкі емпіричні висновки про Росію й Україну без вимірюваних даних.', 'Після 19:26 звучать цитати Ільїна та дослідників; їх не можна повністю приписувати Олександру як власну позицію.', 'Історичні оцінки Ільїна, Шульгіна, Бандери й Шухевича потребують окремого аналізу джерел.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['concept-ideology-prevalence', 'concept-evidence-trust', 'concept-identity-policy'],
    relatedEventIds: ['language-law'],
    relatedArgumentIds: ['state-capacity-before-symbolic-power'],
    citations: [
      citation('g0wrgfZqVm4', '00:08:29', '00:09:45', L('Аналогия с оправданием по одному обвинению и отдельными взглядами.', 'Analogy between acquittal on one charge and endorsement of all views.', 'Аналогія між виправданням за одним обвинуваченням і схваленням усіх поглядів.')),
      citation('g0wrgfZqVm4', '00:15:01', '00:15:06', L('Позитивная оценка работы не равна одобрению всех взглядов.', 'Praise for a work is not approval of every view.', 'Позитивна оцінка праці не дорівнює схваленню всіх поглядів.')),
      citation('g0wrgfZqVm4', '00:26:24', '00:27:57', L('Переход от единичных примеров к оценке общества и его результатов.', 'Moving from isolated examples to assessment of a society and its outcomes.', 'Перехід від поодиноких прикладів до оцінки суспільства та його результатів.')),
    ],
    references: [],
    tags: ['идеология', 'аналогия', 'доказательность'],
  },
  {
    id: 'state-capacity-before-symbolic-power',
    title: L('Армия опирается на экономику и институты', 'Armed power depends on economy and institutions', 'Військова сила спирається на економіку та інституції'),
    topic: L('Государственная способность и политика идентичности', 'State capacity and identity policy', 'Державна спроможність і політика ідентичності'),
    thesis: L('Александр утверждает, что армия, суверенная политика и долгосрочная устойчивость невозможны без экономики, образования, здоровья и инфраструктуры; символическая политика не заменяет эту базу.', 'Alexander argues that armed forces, sovereign policy, and long-term resilience require an economy, education, health, and infrastructure; symbolic policy cannot substitute for that base.', 'Олександр стверджує, що армія, суверенна політика й довгострокова стійкість неможливі без економіки, освіти, здоров’я та інфраструктури; символічна політика не замінює цієї основи.'),
    premises: LA(
      ['Современная армия требует устойчивого финансирования, производства, кадров и управления.', 'Экономика и публичные институты воспроизводят эти ресурсы.', 'Язык, вера и символы могут формировать идентичность, но сами не создают материальную способность.'],
      ['Modern armed forces require sustained finance, production, skills, and administration.', 'The economy and public institutions reproduce those resources.', 'Language, faith, and symbols may shape identity but do not themselves create material capacity.'],
      ['Сучасна армія потребує сталого фінансування, виробництва, кадрів і управління.', 'Економіка та публічні інституції відтворюють ці ресурси.', 'Мова, віра й символи можуть формувати ідентичність, але самі не створюють матеріальної спроможності.'],
    ),
    reasoning: L('Если государство не поддерживает ресурсную основу, военная организация становится зависимой от внешних ресурсов или частных структур и теряет автономность.', 'Without a maintained resource base, military organisation becomes dependent on outside resources or private structures and loses autonomy.', 'Без підтриманої ресурсної основи військова організація стає залежною від зовнішніх ресурсів або приватних структур і втрачає автономність.'),
    conclusion: L('Стратегическая сила оценивается по способности институтов воспроизводить ресурсы, а не по одной мобилизующей риторике.', 'Strategic power is measured by institutions’ ability to reproduce resources, not by mobilising rhetoric alone.', 'Стратегічну силу вимірюють здатністю інституцій відтворювати ресурси, а не лише мобілізаційною риторикою.'),
    objection: L('В этом монологе развёрнутого возражения нет; ранее собеседник противопоставляет российским примерам украинский национализм.', 'The monologue contains no developed objection; earlier the interlocutor counters Russian examples with Ukrainian nationalism.', 'У цьому монолозі немає розгорнутого заперечення; раніше співрозмовник протиставляє російським прикладам український націоналізм.'),
    response: L('Александр переводит сравнение с символов на проверяемые результаты: экономику, образование, здоровье, инфраструктуру и способность содержать армию.', 'Alexander shifts the comparison from symbols to testable outcomes: economy, education, health, infrastructure, and the ability to sustain armed forces.', 'Олександр переводить порівняння із символів на перевірювані результати: економіку, освіту, здоров’я, інфраструктуру та здатність утримувати армію.'),
    limitations: LA(
      ['Общие зависимости между ресурсами и армией правдоподобны, но сравнительная оценка России и Украины в транскрипте не подтверждена метриками.', 'Символическая политика и государственная способность могут сосуществовать; это не обязательно взаимоисключающие расходы.', 'Фраза о превращении армии в «частную военную компанию» является риторическим выводом, а не установленным фактом.'],
      ['The general resource logic is plausible, but the Russia–Ukraine comparison is unsupported by metrics in the transcript.', 'Symbolic policy and state capacity can coexist; they are not necessarily mutually exclusive.', 'The “private military company” conclusion is rhetorical, not an established fact.'],
      ['Загальна ресурсна логіка правдоподібна, але порівняння Росії й України не підтверджене метриками в транскрипті.', 'Символічна політика й державна спроможність можуть співіснувати; вони не обов’язково взаємовиключні.', 'Фраза про «приватну військову компанію» є риторичним висновком, а не встановленим фактом.'],
    ),
    interpretationConfidence: 'high',
    relatedNodeIds: ['concept-state-capacity', 'concept-identity-policy', 'concept-war-aims'],
    relatedEventIds: ['language-law', 'full-invasion'],
    relatedArgumentIds: ['war-as-political-instrument', 'ideological-examples-and-social-prevalence'],
    citations: [
      citation('g0wrgfZqVm4', '00:26:53', '00:28:32', L('Экономика, инфраструктура и армия против приоритета символической политики.', 'Economy, infrastructure, and armed forces versus symbolic-policy priorities.', 'Економіка, інфраструктура й армія проти пріоритету символічної політики.')),
    ],
    references: [],
    tags: ['государственная способность', 'экономика', 'армия'],
  },
]

export const argumentsById = new Map(argumentsData.map((argument) => [argument.id, argument]))

export function transcriptUrl(videoId: string): string {
  return `https://github.com/istominvi/pravda/blob/main/transcripts/vzglyad-iz-chetvertogo-izmereniya/${videoId}.md`
}

export function youtubeTimestampUrl(videoId: string, timestamp: string): string {
  const [hours = 0, minutes = 0, seconds = 0] = timestamp.split(':').map(Number)
  const totalSeconds = hours * 3600 + minutes * 60 + seconds
  return `https://youtu.be/${videoId}?t=${totalSeconds}`
}
