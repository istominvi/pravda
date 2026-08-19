import type { Localized } from '../domain/types'

const L = (ru: string, en: string, uk: string): Localized => ({ ru, en, uk })
const P = (ru: string[], en: string[], uk: string[]): Localized<string[]> => ({ ru, en, uk })

type EditorialArticle = {
  lead: Localized
  sections: Array<{
    title: Localized
    paragraphs: Localized<string[]>
  }>
}

export const editorialArticlesA: Record<string, EditorialArticle> = {
  'concept-territorial-integrity': {
    lead: L(
      'Территориальная целостность — не абстрактный призыв сохранять карту неизменной, а правило, защищающее государство от изменения его границ внешней силой. В российско-украинском конфликте оно связывает в одну правовую линию признанные после 1991 года границы, события в Крыму в 2014 году и заявления об аннексии четырёх украинских регионов в 2022 году. Чтобы применить этот принцип корректно, нужно отделять фактический контроль над территорией, внутреннее волеизъявление населения и международно признанный суверенный титул.',
      'Territorial integrity is not an abstract appeal to keep every map unchanged. It is a rule protecting a state against alteration of its borders through external force. In the Russia–Ukraine conflict it connects the borders recognised after 1991, the events in Crimea in 2014, and the announced annexation of four Ukrainian regions in 2022. Applying the principle correctly requires separating effective territorial control, expressions of local preference, and internationally recognised sovereign title.',
      'Територіальна цілісність — не абстрактний заклик назавжди зберегти будь-яку карту, а правило, що захищає державу від зміни її кордонів зовнішньою силою. У російсько-українському конфлікті воно поєднує в одну правову лінію визнані після 1991 року кордони, події в Криму 2014 року та заяви про анексію чотирьох українських регіонів 2022 року. Для коректного застосування принципу слід розділяти фактичний контроль, місцеве волевиявлення та міжнародно визнаний суверенний титул.',
    ),
    sections: [
      {
        title: L('Что именно защищает принцип', 'What the principle protects', 'Що саме захищає принцип'),
        paragraphs: P(
          [
            'Порог применения возникает, когда обсуждается не обычное внутреннее административное изменение, а территориальная целостность государства в его международных отношениях. Ключевой вопрос — сопровождалось ли изменение статуса угрозой силой, применением силы или иным внешним принуждением. Поэтому само наличие исторического спора, культурной связи или нового фактического управления ещё не переносит суверенитет автоматически.',
            'Принцип следует читать вместе с суверенным равенством, запретом силы и правом народов на самоопределение. Эти нормы не уничтожают друг друга. Они требуют проверить процедуру, свободу выражения воли, присутствие иностранных сил и реакцию международных органов. Такое чтение предотвращает две ошибки: объявлять границы абсолютно недоступными для любого согласованного изменения или считать любое голосование достаточным для одностороннего отделения.',
          ],
          [
            'The threshold is crossed when the issue is not an ordinary internal administrative adjustment but a state’s territorial integrity in international relations. The central question is whether the change of status was accompanied by the threat or use of force or another form of external coercion. A historical dispute, cultural link, or new effective administration therefore does not transfer sovereignty automatically.',
            'The principle must be read with sovereign equality, the prohibition on force, and the right of peoples to self-determination. These rules do not erase one another. They require examination of procedure, freedom of expression, the presence of foreign forces, and the response of international bodies. This avoids treating borders as immune from every consensual change or treating any vote as sufficient for unilateral secession.',
          ],
          [
            'Поріг застосування виникає, коли йдеться не про звичайну внутрішню адміністративну зміну, а про територіальну цілісність держави в її міжнародних відносинах. Головне питання — чи супроводжувалася зміна статусу погрозою силою, застосуванням сили або іншим зовнішнім примусом. Тому історична суперечка, культурний зв’язок чи нове фактичне управління самі собою не переносять суверенітет.',
            'Принцип треба читати разом із суверенною рівністю, забороною сили та правом народів на самовизначення. Ці норми не скасовують одна одну. Вони вимагають перевірити процедуру, свободу волевиявлення, присутність іноземних сил і реакцію міжнародних органів. Такий підхід не дозволяє вважати кордони недоступними для будь-якої погодженої зміни або будь-яке голосування достатнім для одностороннього відокремлення.',
          ],
        ),
      },
      {
        title: L('От признанных границ к Крыму и аннексиям', 'From recognised borders to Crimea and the annexations', 'Від визнаних кордонів до Криму й анексій'),
        paragraphs: P(
          [
            'Статья «Распад СССР и продолжение обязательств Россией» от 26 декабря 1991 года показывает момент, после которого Украина и Россия действуют как отдельные международно признанные государства. «Будапештский меморандум» от 5 декабря 1994 года отдельно фиксирует уважение независимости, суверенитета и существующих границ Украины. Эти материалы важнее общей исторической риторики, когда устанавливается исходный правовой статус территории.',
            'Статьи «Крымский референдум и аннексия» от 16 марта 2014 года и «Заявленная аннексия четырёх регионов» от 30 сентября 2022 года описывают два последующих вызова этой рамке. В обоих случаях оценка Генеральной Ассамблеи ООН строилась вокруг непризнания изменения статуса. Различия в военной и политической обстановке необходимо изучать, но они не устраняют общий вопрос о попытке изменить границы во время применения силы.',
          ],
          [
            'The article “USSR dissolution and Russia’s continuity,” dated 26 December 1991, marks the setting in which Ukraine and Russia operate as separately recognised states. The “Budapest Memorandum” of 5 December 1994 additionally records respect for Ukraine’s independence, sovereignty, and existing borders. When identifying the starting legal status, these materials carry more weight than broad historical rhetoric.',
            'The articles “Crimean referendum and annexation” of 16 March 2014 and “Claimed annexation of four regions” of 30 September 2022 describe two later challenges to that framework. In both cases the UN General Assembly’s assessment centred on non-recognition of a changed status. Differences in military and political circumstances matter, but they do not remove the common question of altering borders amid the use of force.',
          ],
          [
            'Стаття «Розпад СРСР і продовження зобов’язань Росією» від 26 грудня 1991 року показує умови, у яких Україна й Росія діють як окремо визнані держави. «Будапештський меморандум» від 5 грудня 1994 року додатково фіксує повагу до незалежності, суверенітету та чинних кордонів України. Для визначення початкового правового статусу ці матеріали важливіші за широку історичну риторику.',
            'Статті «Кримський референдум і анексія» від 16 березня 2014 року та «Заявлена анексія чотирьох регіонів» від 30 вересня 2022 року описують два наступні виклики цій рамці. В обох випадках оцінка Генеральної Асамблеї ООН зосереджувалася на невизнанні зміни статусу. Відмінності воєнної та політичної ситуації важливі, але не усувають спільного питання про зміну кордонів під час застосування сили.',
          ],
        ),
      },
      {
        title: L('Как читать Устав, меморандум и резолюции', 'How to read the Charter, memorandum, and resolutions', 'Як читати Статут, меморандум і резолюції'),
        paragraphs: P(
          [
            'Устав ООН нужно открывать не ради одной удобной фразы. Его положение о запрете угрозы силой или её применения задаёт общий стандарт, а ссылки на территориальную целостность показывают защищаемый объект. Устав не перечисляет заранее правовой ответ на каждую возможную территориальную ситуацию и не превращает историческую административную границу в самостоятельное доказательство современного титула.',
            'Будапештский меморандум буквально подтверждает уважение существующих границ Украины, но сам по себе не создаёт автоматического механизма коллективной обороны. Резолюции Генеральной Ассамблеи по Крыму и попытке аннексии 2022 года фиксируют позицию широкого состава государств и призыв к непризнанию. Они не заменяют судебное решение по каждому факту, однако ясно показывают международную оценку заявленного изменения статуса.',
          ],
          [
            'The UN Charter should not be opened for one convenient phrase. Its prohibition on the threat or use of force supplies the general standard, while references to territorial integrity identify the protected interest. The Charter does not pre-write a legal answer to every territorial situation, nor does it make a historic administrative boundary conclusive proof of a present title.',
            'The Budapest Memorandum expressly reaffirms respect for Ukraine’s existing borders, but it does not create an automatic collective-defence mechanism. General Assembly resolutions on Crimea and the 2022 attempted annexation record the position of a broad membership and call for non-recognition. They do not replace judicial findings on every fact, yet they clearly show the international assessment of the claimed status changes.',
          ],
          [
            'Статут ООН варто відкривати не заради однієї зручної фрази. Заборона погрози силою або її застосування задає загальний стандарт, а згадки про територіальну цілісність визначають захищений інтерес. Статут не містить наперед готової відповіді на кожну територіальну ситуацію і не робить історичний адміністративний кордон остаточним доказом сучасного титулу.',
            'Будапештський меморандум буквально підтверджує повагу до чинних кордонів України, але не створює автоматичного механізму колективної оборони. Резолюції Генеральної Асамблеї щодо Криму та спроби анексії 2022 року фіксують позицію широкого складу держав і заклик до невизнання. Вони не замінюють судового встановлення кожного факту, проте чітко показують міжнародну оцінку заявленої зміни статусу.',
          ],
        ),
      },
      {
        title: L('Где расходятся трактовки', 'Where interpretations diverge', 'Де розходяться тлумачення'),
        paragraphs: P(
          [
            'Одна трактовка ставит в центр неприкосновенность признанных границ и считает присутствие российских сил решающим препятствием для свободного изменения статуса. Другая акцентирует самоопределение, историческую принадлежность и результаты организованных голосований. Сравнивать эти позиции следует не по эмоциональной убедительности, а по одинаковому набору вопросов: кто контролировал процесс, какие органы действовали, существовала ли реальная свобода выбора и какова правовая роль силы.',
            'Вывод этой статьи ограничен: принцип территориальной целостности даёт сильную рамку оценки, но не описывает каждое событие на земле и не отвечает сам на вопросы индивидуальной ответственности. Он также не доказывает, что всякая прежняя граница справедлива. Он устанавливает более узкое требование: спор о границе нельзя решать внешней силой и затем считать один факт контроля достаточным международным основанием нового статуса.',
          ],
          [
            'One interpretation centres recognised borders and treats the presence of Russian forces as a decisive obstacle to a free status change. Another stresses self-determination, historical affiliation, and the results of organised votes. The positions should be compared through the same questions rather than emotional appeal: who controlled the process, which institutions acted, whether choice was genuinely free, and what legal role force played.',
            'The conclusion has limits. Territorial integrity provides a strong evaluative framework but does not narrate every event on the ground or determine individual responsibility by itself. Nor does it prove that every inherited border is fair. It establishes a narrower requirement: a border dispute cannot be resolved by external force and then treated as legally settled merely because control has changed.',
          ],
          [
            'Одне тлумачення ставить у центр визнані кордони й вважає присутність російських сил вирішальною перешкодою для вільної зміни статусу. Інше наголошує на самовизначенні, історичній належності та результатах організованих голосувань. Порівнювати ці позиції слід за однаковими питаннями: хто контролював процес, які органи діяли, чи був вибір справді вільним і яку правову роль відіграла сила.',
            'Висновок має межі. Територіальна цілісність дає сильну рамку оцінки, але не описує кожну подію на місці й сама не встановлює індивідуальної відповідальності. Вона також не доводить справедливість кожного успадкованого кордону. Її вужча вимога полягає в тому, що спір про кордон не можна вирішити зовнішньою силою, а потім вважати сам факт контролю достатньою міжнародною підставою нового статусу.',
          ],
        ),
      },
    ],
  },

  'concept-use-of-force': {
    lead: L(
      'Запрет применения силы задаёт начальную точку правовой оценки войны: сначала устанавливается факт межгосударственной угрозы или вооружённого действия, а уже затем проверяется, существует ли признанное исключение. Такой порядок особенно важен для полномасштабного российского вторжения 24 февраля 2022 года. Политические объяснения о расширении союзов, защите населения, истории или переговорах могут раскрывать мотивы, но ни одно из них не становится правовым разрешением на войну без самостоятельного основания и подтверждённых условий его применения.',
      'The prohibition on the use of force is the starting point for legal assessment of war: first identify an interstate threat or armed action, then test whether a recognised exception exists. That sequence is especially important for Russia’s full-scale invasion on 24 February 2022. Political explanations involving alliance enlargement, protection of populations, history, or negotiations may illuminate motives, but none becomes legal permission for war without an independent ground whose conditions are established.',
      'Заборона застосування сили є початковою точкою правової оцінки війни: спершу встановлюють факт міждержавної погрози або збройної дії, а потім перевіряють наявність визнаного винятку. Така послідовність особливо важлива для повномасштабного російського вторгнення 24 лютого 2022 року. Політичні пояснення про розширення союзів, захист населення, історію чи переговори можуть розкривати мотиви, але не стають правовим дозволом на війну без самостійної підстави та доведених умов її застосування.',
    ),
    sections: [
      {
        title: L('Общий запрет и узкие исключения', 'A general prohibition and narrow exceptions', 'Загальна заборона й вузькі винятки'),
        paragraphs: P(
          [
            'Правило охватывает угрозу силой и её применение против территориальной целостности или политической независимости другого государства, а также иные случаи, несовместимые с целями ООН. Для запуска анализа не требуется заранее решить все вопросы о масштабе операции. Пересечение границы регулярными войсками, ракетные удары и захват территории относятся к самому ядру ситуаций, ради которых существует запрет.',
            'Уставная система допускает самооборону после вооружённого нападения и действия, санкционированные Советом Безопасности. В отдельных спорах рассматривается действительное согласие государства на присутствие иностранных сил, но оно требует компетентного автора, свободы и соблюдения оговорённых пределов. Сочувствие группе, геополитическое раздражение или ссылка на отдалённую опасность не образуют дополнительного ненаписанного исключения.',
          ],
          [
            'The rule covers the threat or use of force against another state’s territorial integrity or political independence, and other conduct inconsistent with UN purposes. The inquiry does not require every issue of operational scale to be settled first. Regular troops crossing a border, missile strikes, and seizure of territory belong to the core situations for which the prohibition was designed.',
            'The Charter system permits self-defence following an armed attack and action authorised by the Security Council. Some disputes also examine valid state consent to foreign forces, but consent requires a competent author, freedom, and respect for its scope. Sympathy for a group, geopolitical grievance, or reference to a remote danger does not create an additional unwritten exception.',
          ],
          [
            'Правило охоплює погрозу силою та її застосування проти територіальної цілісності або політичної незалежності іншої держави, а також інші дії, несумісні з цілями ООН. Для початку аналізу не треба спершу вирішити всі питання масштабу операції. Перетин кордону регулярними військами, ракетні удари й захоплення території належать до ядра ситуацій, заради яких існує заборона.',
            'Система Статуту допускає самооборону після збройного нападу та дії, санкціоновані Радою Безпеки. В окремих спорах також оцінюють дійсну згоду держави на іноземні сили, але вона потребує компетентного автора, свободи й дотримання визначених меж. Симпатія до групи, геополітичне невдоволення або посилання на віддалену небезпеку не створюють додаткового неписаного винятку.',
          ],
        ),
      },
      {
        title: L('Три даты для проверки применения силы', 'Three dates for assessing force', 'Три дати для перевірки застосування сили'),
        paragraphs: P(
          [
            '«Устав ООН» от 26 июня 1945 года даёт норму, а статья «Крымский референдум и аннексия» от 16 марта 2014 года показывает первый центральный эпизод её применения к российско-украинскому конфликту. При оценке Крыма важно выяснять не только формальное объявление итогов голосования, но и военное присутствие, контроль над органами власти и последовательность решений до изменения статуса.',
            '«Полномасштабное вторжение России» от 24 февраля 2022 года переносит спор из области скрытого или ограниченного участия к открытому крупномасштабному применению вооружённой силы. «Заявленная аннексия четырёх регионов» от 30 сентября 2022 года добавляет территориальный результат, которого пытались достичь во время войны. Вместе эти статьи позволяют не подменять юридический вопрос общей хроникой разногласий.',
          ],
          [
            'The “UN Charter” of 26 June 1945 supplies the rule, while “Crimean referendum and annexation” of 16 March 2014 presents its first central application in the Russia–Ukraine conflict. Assessing Crimea requires more than the formal announcement of a vote: military presence, control of public institutions, and the sequence of decisions before the status change all matter.',
            '“Russia’s full-scale invasion” of 24 February 2022 moves the dispute from covert or limited involvement to open, large-scale armed force. “Claimed annexation of four regions” of 30 September 2022 adds the territorial outcome pursued during the war. Together the articles prevent a legal question from dissolving into a general chronology of grievances.',
          ],
          [
            '«Статут ООН» від 26 червня 1945 року дає норму, а стаття «Кримський референдум і анексія» від 16 березня 2014 року показує перший центральний епізод її застосування до російсько-українського конфлікту. Для оцінки Криму важливі не лише формально оголошені результати голосування, а й військова присутність, контроль над органами влади та послідовність рішень до зміни статусу.',
            '«Повномасштабне вторгнення Росії» від 24 лютого 2022 року переводить спір від прихованої або обмеженої участі до відкритого масштабного застосування збройної сили. «Заявлена анексія чотирьох регіонів» від 30 вересня 2022 року додає територіальний результат, якого намагалися досягти під час війни. Разом ці статті не дозволяють розчинити правове питання в загальній хронології претензій.',
          ],
        ),
      },
      {
        title: L('Что устанавливают официальные тексты', 'What the official texts establish', 'Що встановлюють офіційні тексти'),
        paragraphs: P(
          [
            'Статью 2(4) Устава ООН следует читать как общий запрет, а статью 51 — как отдельно сформулированное право самообороны. Устав не говорит, что любое опасение за будущую безопасность разрешает превентивное вторжение. Он также не превращает политическую историю отношений в юридическое исключение. Если заявлена самооборона, нужны факты о вооружённом нападении, необходимости реакции и её соразмерности.',
            'Резолюции Генеральной Ассамблеи о территориальной целостности Украины и агрессии документируют международную оценку действий и заявленных изменений границ. Они не являются оперативным приказом и не доказывают автоматически каждый отдельный эпизод боевых действий. Их буквальное значение уже: они показывают, что большинство государств не приняло предложенную правовую квалификацию и не признало территориальные последствия силы.',
          ],
          [
            'Article 2(4) of the UN Charter should be read as the general prohibition and Article 51 as a separately stated right of self-defence. The Charter does not say that every concern about future security permits preventive invasion, nor does it turn a political history of relations into a legal exception. A self-defence claim requires facts concerning an armed attack, necessity, and proportionality.',
            'General Assembly resolutions on Ukraine’s territorial integrity and aggression document the international assessment of the conduct and claimed border changes. They are not operational orders and do not prove every battlefield incident automatically. Their literal significance is narrower: most states rejected the proposed legal characterisation and did not recognise the territorial consequences of force.',
          ],
          [
            'Статтю 2(4) Статуту ООН слід читати як загальну заборону, а статтю 51 — як окремо сформульоване право на самооборону. Статут не каже, що будь-яке побоювання щодо майбутньої безпеки дозволяє превентивне вторгнення, і не перетворює політичну історію відносин на правовий виняток. Посилання на самооборону потребує фактів про збройний напад, необхідність і пропорційність реакції.',
            'Резолюції Генеральної Асамблеї про територіальну цілісність України й агресію документують міжнародну оцінку дій і заявлених змін кордонів. Вони не є оперативними наказами й автоматично не доводять кожен бойовий епізод. Їхнє буквальне значення вужче: більшість держав відкинула запропоновану правову кваліфікацію та не визнала територіальних наслідків сили.',
          ],
        ),
      },
      {
        title: L('Объяснение причин не равно разрешению', 'Explaining causes is not legal permission', 'Пояснення причин не є дозволом'),
        paragraphs: P(
          [
            'Конкурирующая трактовка описывает действия России как реакцию на расширение НАТО, кризис европейской безопасности, события 2014 года или угрозы населению Донбасса. Такие обстоятельства можно изучать как элементы причинной цепочки и восприятия риска. Но правовая проверка требует отдельного шага: какое именно исключение заявлено, кто вправе на него ссылаться и подтверждены ли необходимые факты на момент начала операции.',
            'Запрет силы не отвечает сам по себе на вопросы о правилах ведения боевых действий после начала войны, ответственности конкретных лиц или политическом устройстве будущего мира. Для этого нужны международное гуманитарное право, доказательства и переговорные документы. Однако граница вывода не ослабляет исходную норму: сложная предыстория может объяснять решение, не превращая его автоматически в законное применение вооружённой силы.',
          ],
          [
            'A competing account describes Russia’s actions as a reaction to NATO enlargement, a crisis in European security, the events of 2014, or threats to people in Donbas. These matters may be studied as parts of a causal chain and perceptions of risk. Legal analysis nonetheless asks a distinct question: which exception is invoked, who may invoke it, and whether its required facts existed when the operation began.',
            'The prohibition on force does not by itself answer how hostilities must be conducted, who bears individual responsibility, or how a future peace should be organised. Those questions require humanitarian law, evidence, and negotiating documents. This limit does not weaken the starting rule: a complex background may explain a decision without automatically making the use of armed force lawful.',
          ],
          [
            'Конкурентне пояснення описує дії Росії як реакцію на розширення НАТО, кризу європейської безпеки, події 2014 року або загрози населенню Донбасу. Ці обставини можна досліджувати як частини причинного ланцюга та сприйняття ризику. Проте правова перевірка ставить окреме питання: який саме виняток заявлено, хто може на нього посилатися і чи існували потрібні факти на момент початку операції.',
            'Заборона сили сама не відповідає на питання про ведення бойових дій після початку війни, відповідальність конкретних осіб або політичний устрій майбутнього миру. Для цього потрібні гуманітарне право, докази й переговорні документи. Ця межа не послаблює вихідну норму: складна передісторія може пояснювати рішення, але не робить застосування збройної сили автоматично законним.',
          ],
        ),
      },
    ],
  },

  'concept-self-defence': {
    lead: L(
      'Самооборона — строгое правовое исключение из общего запрета межгосударственной силы, а не универсальное название любой защитной цели. Ссылка на неё требует показать вооружённое нападение, связь ответных действий с прекращением или отражением этого нападения, а также необходимость и соразмерность реакции. В российско-украинской войне этот тест важен одновременно для оценки заявленных Россией оснований вторжения и для понимания права Украины отражать начавшееся нападение при поддержке других государств.',
      'Self-defence is a disciplined legal exception to the general prohibition on interstate force, not a universal label for any protective aim. Invoking it requires an armed attack, a connection between the response and stopping or repelling that attack, and the necessity and proportionality of the response. In the Russia–Ukraine war this test matters both to Russia’s stated grounds for invasion and to Ukraine’s right to repel the attack with support from other states.',
      'Самооборона — це чітко окреслений правовий виняток із загальної заборони міждержавної сили, а не універсальна назва будь-якої захисної мети. Посилання на неї вимагає довести збройний напад, зв’язок відповіді з його припиненням або відбиттям, а також необхідність і пропорційність реакції. У російсько-українській війні цей тест важливий і для оцінки заявлених Росією підстав вторгнення, і для розуміння права України відбивати напад за підтримки інших держав.',
    ),
    sections: [
      {
        title: L('Из каких элементов состоит самооборона', 'The elements of self-defence', 'З яких елементів складається самооборона'),
        paragraphs: P(
          [
            'Первый порог — вооружённое нападение. Политическое давление, недружественная риторика, гипотетическая возможность будущего вступления в союз или общее ухудшение отношений сами по себе не равны такому нападению. Затем проверяется необходимость: существовал ли реальный защитный ответ, а не иной способ достичь политической или территориальной цели. Соразмерность оценивает масштаб реакции относительно задачи отражения нападения.',
            'Коллективная самооборона позволяет другим государствам помогать атакованному государству, но сохраняет те же базовые требования. Она не означает, что поддерживающее государство приобретает неограниченное право вести войну по собственным целям. Анализ должен называть, чьё право реализуется, какое нападение отражается и каким образом конкретная мера — поставка, разведывательная помощь или применение силы — связана с защитой.',
          ],
          [
            'The first threshold is an armed attack. Political pressure, hostile rhetoric, a hypothetical possibility of future alliance membership, or deteriorating relations do not by themselves equal such an attack. Necessity then asks whether the action was genuinely defensive rather than a means to another political or territorial end. Proportionality examines the scale of the response in relation to repelling the attack.',
            'Collective self-defence permits other states to assist the attacked state while retaining the same basic requirements. It does not give an assisting state an unlimited right to wage war for its own objectives. Analysis should identify whose right is exercised, which attack is being repelled, and how a particular measure—supplies, intelligence assistance, or force—serves that defensive purpose.',
          ],
          [
            'Перший поріг — збройний напад. Політичний тиск, ворожа риторика, гіпотетична можливість майбутнього вступу до союзу або загальне погіршення відносин самі собою не дорівнюють такому нападу. Далі перевіряють необхідність: чи була дія справді захисною, а не способом досягти іншої політичної або територіальної мети. Пропорційність співвідносить масштаб реакції із завданням відбиття нападу.',
            'Колективна самооборона дозволяє іншим державам допомагати атакованій державі, зберігаючи ті самі основні вимоги. Вона не дає державі-помічнику необмеженого права вести війну заради власних цілей. Аналіз має назвати, чиє право реалізується, який напад відбивається і як конкретний захід — постачання, розвідувальна допомога чи сила — служить захисній меті.',
          ],
        ),
      },
      {
        title: L('Самооборона в хронологии войны', 'Self-defence in the chronology of the war', 'Самооборона в хронології війни'),
        paragraphs: P(
          [
            '«Устав ООН» от 26 июня 1945 года формулирует право на индивидуальную и коллективную самооборону. «Крымский референдум и аннексия» от 16 марта 2014 года требует отдельно проверить, могло ли какое-либо заявленное приглашение или защитная цель оправдать действия иностранных сил на украинской территории. Необходимо учитывать автора, время, контролируемую обстановку и реальные пределы предполагаемого разрешения.',
            'После «Полномасштабного вторжения России» 24 февраля 2022 года исходная ситуация становится яснее: Украина столкнулась с открытым вооружённым нападением и заявила право на защиту. Поддержка партнёров оценивается в рамке коллективной самообороны, а не как автоматическое стирание всех ограничений. Дальнейшие украинские операции всё равно должны быть связаны с оборонительной целью и рассматриваться вместе с нормами ведения войны.',
          ],
          [
            'The “UN Charter” of 26 June 1945 states the right of individual and collective self-defence. “Crimean referendum and annexation” of 16 March 2014 requires a separate inquiry into whether any claimed invitation or protective aim could justify foreign forces on Ukrainian territory. The author, timing, controlled environment, and actual scope of any alleged permission all matter.',
            'After “Russia’s full-scale invasion” on 24 February 2022 the starting situation is clearer: Ukraine faced an open armed attack and invoked its right to defend itself. Partner support is assessed through collective self-defence, not as an automatic removal of every constraint. Later Ukrainian operations must still serve the defensive purpose and remain subject to the law governing hostilities.',
          ],
          [
            '«Статут ООН» від 26 червня 1945 року формулює право на індивідуальну та колективну самооборону. «Кримський референдум і анексія» від 16 березня 2014 року потребує окремої перевірки, чи могло заявлене запрошення або захисна мета виправдати дії іноземних сил на українській території. Важливі автор, час, контрольоване середовище та реальні межі передбачуваного дозволу.',
            'Після «Повномасштабного вторгнення Росії» 24 лютого 2022 року вихідна ситуація ясніша: Україна зазнала відкритого збройного нападу й заявила право захищатися. Підтримку партнерів оцінюють у межах колективної самооборони, а не як автоматичне усунення всіх обмежень. Подальші українські операції однаково мають служити оборонній меті та підпорядковуватися правилам ведення війни.',
          ],
        ),
      },
      {
        title: L('Как не вырывать статью 51 из Устава', 'How to read Article 51 within the Charter', 'Як читати статтю 51 у системі Статуту'),
        paragraphs: P(
          [
            'Статья 51 сохраняет неотъемлемое право на самооборону при вооружённом нападении и связывает его с системой коллективной безопасности ООН. Её нельзя читать отдельно от общего запрета силы. Текст не содержит разрешения начинать войну только потому, что другая страна воспринимается как потенциально опасная, и не называет культурную близость к населению соседнего государства самостоятельным основанием для военной защиты.',
            'Официальные уведомления и заявления помогают установить, какое основание государство выдвигало в момент действия, но одно название «самооборона» не завершает проверку. Документы следует сопоставлять с датами, фактическими событиями и масштабом операции. Устав устанавливает рамку права государств; он не решает без доказательств, произошло ли конкретное нападение и была ли каждая последующая цель действительно необходимой для его отражения.',
          ],
          [
            'Article 51 preserves the inherent right of self-defence if an armed attack occurs and places that right within the UN collective-security system. It cannot be read apart from the general prohibition on force. The text does not permit war merely because another country is perceived as potentially dangerous, nor does cultural affinity with a neighbouring population independently authorise military protection.',
            'Official notifications and statements help identify the ground advanced when action was taken, but using the label “self-defence” does not complete the inquiry. Documents must be matched to dates, facts, and operational scale. The Charter sets a framework for state rights; without evidence it does not decide whether a particular attack occurred or whether every later objective was necessary to repel it.',
          ],
          [
            'Стаття 51 зберігає невід’ємне право на самооборону в разі збройного нападу й пов’язує його із системою колективної безпеки ООН. Її не можна читати окремо від загальної заборони сили. Текст не дозволяє починати війну лише тому, що іншу країну сприймають як потенційно небезпечну, і не називає культурну близькість до населення сусідньої держави самостійною підставою воєнного захисту.',
            'Офіційні повідомлення та заяви допомагають встановити, яку підставу держава висувала під час дії, але саме слово «самооборона» не завершує перевірку. Документи треба зіставляти з датами, фактами й масштабом операції. Статут задає рамку прав держав; без доказів він не вирішує, чи стався конкретний напад і чи була кожна наступна мета необхідною для його відбиття.',
          ],
        ),
      },
      {
        title: L('Спорные зоны и предел результата', 'Contested areas and limits of the conclusion', 'Спірні зони та межі висновку'),
        paragraphs: P(
          [
            'Главный спор касается того, насколько далеко право допускает реакцию на ещё не реализованную угрозу и как квалифицировать длительную цепь вооружённых действий через границу. Даже широкие подходы требуют конкретной, непосредственной опасности и не дают общего разрешения менять политический строй или территорию соседа. Ссылки на защиту Донбасса также требуют сначала установить международно-правовой статус территории и автора возможного запроса.',
            'Признание права Украины на самооборону не означает, что любой способ ведения войны допустим или что фактическое утверждение становится истинным без проверки. Различение целей, соразмерность атак и защита гражданских регулируются дополнительными нормами. Поэтому итог статьи ограничен двумя утверждениями: открытое вторжение запускает право атакованного государства на защиту, а сторона, заявляющая исключение, должна доказать его условия, а не только произнести защитную формулу.',
          ],
          [
            'A central dispute concerns how far the law permits response to a threat not yet realised and how to classify a prolonged chain of cross-border violence. Even broader approaches require a concrete and immediate danger and do not confer a general licence to change a neighbour’s political order or territory. Claims to protect Donbas also require prior analysis of the territory’s international status and the authority behind any request.',
            'Recognising Ukraine’s right of self-defence does not make every method of warfare permissible or every factual assertion true without examination. Distinction, proportionality in attack, and civilian protection are governed by additional rules. The conclusion is therefore limited: an open invasion activates the attacked state’s defensive right, while a party invoking an exception must establish its conditions rather than merely use protective language.',
          ],
          [
            'Головна суперечка стосується того, наскільки далеко право дозволяє реагувати на ще не реалізовану загрозу та як кваліфікувати тривалий ланцюг транскордонного насильства. Навіть ширші підходи вимагають конкретної й безпосередньої небезпеки та не дають загального дозволу змінювати політичний лад або територію сусіда. Посилання на захист Донбасу також потребує попереднього визначення міжнародного статусу території й повноважень автора запиту.',
            'Визнання права України на самооборону не робить кожний спосіб ведення війни дозволеним або кожне фактичне твердження істинним без перевірки. Розрізнення цілей, пропорційність атак і захист цивільних регулюються додатковими нормами. Отже, висновок обмежений: відкрите вторгнення активує право атакованої держави захищатися, а сторона, що заявляє виняток, повинна довести його умови, а не лише вжити захисну формулу.',
          ],
        ),
      },
    ],
  },

  'concept-military-oath': {
    lead: L(
      'Военная присяга превращает общую лояльность военнослужащего в личное публичное обязательство служить народу Украины, добросовестно выполнять обязанности и соблюдать Конституцию и законы. Её смысл не сводится к повиновению начальнику или верности конкретному правительству. В кризисе 2014 года и в войне после 2022 года присяга помогает поставить точные вопросы о законной цепочке командования, переходе на сторону иностранной силы, защите государства и границах исполнения приказа.',
      'The military oath turns a servicemember’s general loyalty into a personal public commitment to serve the people of Ukraine, perform duties in good faith, and comply with the Constitution and laws. It is not merely obedience to a commander or loyalty to a particular government. In the 2014 crisis and the war after 2022, the oath helps frame precise questions about lawful command, defection to a foreign force, defence of the state, and the limits of following orders.',
      'Військова присяга перетворює загальну лояльність військовослужбовця на особисте публічне зобов’язання служити народові України, сумлінно виконувати обов’язки та дотримуватися Конституції й законів. Її зміст не зводиться до покори командирові чи вірності конкретному урядові. Під час кризи 2014 року та війни після 2022 року присяга допомагає точно ставити питання про законне командування, перехід до іноземної сили, захист держави й межі виконання наказу.',
    ),
    sections: [
      {
        title: L('Личная клятва внутри правового порядка', 'A personal pledge within the legal order', 'Особиста обітниця в межах правового порядку'),
        paragraphs: P(
          [
            'Присяга применяется к статусу конкретного военнослужащего и его служебному поведению. Она соединяет верность народу, защиту Украины и обязанность действовать по праву. Поэтому нарушение нельзя выводить лишь из политической позиции человека: нужно установить действующий статус службы, совершённое действие, применимую обязанность и обстоятельства, при которых происходила смена командования или места службы.',
            'Обязательство соблюдать закон означает, что присяга не требует слепого исполнения любого распоряжения. Законность приказа, компетенция командира и правила обращения с гражданскими сохраняют значение даже в чрезвычайной ситуации. Одновременно личное несогласие с политикой власти не позволяет военнослужащему самостоятельно отменить служебные обязанности или передать оружие и функции другой стороне без предусмотренного правом основания.',
          ],
          [
            'The oath applies to an individual servicemember’s status and conduct. It joins loyalty to the people, defence of Ukraine, and a duty to act lawfully. Breach cannot be inferred from a political opinion alone: one must identify the person’s service status, the act performed, the applicable duty, and the circumstances surrounding any change of command or posting.',
            'The commitment to law means the oath does not demand blind execution of every instruction. The legality of an order, a commander’s competence, and protections for civilians continue to matter in an emergency. At the same time, personal disagreement with government policy does not allow a servicemember to cancel duties unilaterally or transfer arms and functions to another side without a lawful basis.',
          ],
          [
            'Присяга застосовується до статусу й поведінки конкретного військовослужбовця. Вона поєднує вірність народові, захист України та обов’язок діяти законно. Порушення не можна виводити лише з політичної позиції: треба встановити статус служби, вчинену дію, застосовний обов’язок і обставини зміни командування або місця служби.',
            'Зобов’язання дотримуватися закону означає, що присяга не вимагає сліпо виконувати кожне розпорядження. Законність наказу, компетенція командира й правила захисту цивільних важливі навіть у надзвичайній ситуації. Водночас особиста незгода з політикою влади не дає військовослужбовцю права самостійно скасувати обов’язки або передати зброю й функції іншій стороні без правової підстави.',
          ],
        ),
      },
      {
        title: L('Присяга в переломах 2014 и 2022 годов', 'The oath at the turning points of 2014 and 2022', 'Присяга на переломах 2014 і 2022 років'),
        paragraphs: P(
          [
            'Статья «Смена власти в Украине» от 22 февраля 2014 года важна, потому что политический кризис породил спор о законной верховной власти и цепочке командования. Однако даже резкий переход власти не прекращает автоматически существование государства, его вооружённых сил и всех индивидуальных обязательств. Для каждого решения нужно различать оценку процедуры в Киеве и конкретное служебное действие на месте.',
            '«Крымский референдум и аннексия» от 16 марта 2014 года ставит вопрос о военнослужащих, оказавшихся под контролем российских сил и новых фактических органов. «Полномасштабное вторжение России» от 24 февраля 2022 года возвращает присяге прямой оборонительный смысл. Эти даты нельзя объединять в одну простую историю предательства или героизма: правовая оценка зависит от роли, выбора, принуждения и доказанного поведения человека.',
          ],
          [
            '“Transfer of power in Ukraine” of 22 February 2014 matters because the political crisis produced disputes over lawful supreme authority and the chain of command. Yet an abrupt governmental transition does not automatically dissolve the state, its armed forces, or every individual obligation. Each decision requires separating an assessment of procedure in Kyiv from a particular service act on the ground.',
            '“Crimean referendum and annexation” of 16 March 2014 raises the position of servicemembers confronted by Russian forces and new de facto authorities. “Russia’s full-scale invasion” of 24 February 2022 restores the oath’s direct defensive significance. These dates cannot be collapsed into a simple story of betrayal or heroism: legal assessment depends on role, choice, coercion, and proven conduct.',
          ],
          [
            'Стаття «Зміна влади в Україні» від 22 лютого 2014 року важлива, бо політична криза породила спір про законну верховну владу та ланцюг командування. Проте різкий перехід влади не припиняє автоматично існування держави, її збройних сил і всіх особистих зобов’язань. Для кожного рішення треба відокремлювати оцінку процедури в Києві від конкретної службової дії на місці.',
            '«Кримський референдум і анексія» від 16 березня 2014 року ставить питання про військовослужбовців під контролем російських сил і нових фактичних органів. «Повномасштабне вторгнення Росії» від 24 лютого 2022 року повертає присязі пряме оборонне значення. Ці дати не можна зводити до простої історії зради або героїзму: правова оцінка залежить від ролі, вибору, примусу й доведеної поведінки особи.',
          ],
        ),
      },
      {
        title: L('Как читать текст присяги и Конституцию', 'Reading the oath and the Constitution', 'Як читати текст присяги й Конституцію'),
        paragraphs: P(
          [
            'Официальный текст присяги следует разбирать по всем обязательствам, а не цитировать только слово «верность». Адресатом верности назван народ Украины; рядом стоят добросовестное исполнение воинских обязанностей и соблюдение Конституции и законов. Текст тем самым устанавливает нормативную ориентацию службы, но не содержит готового приговора для любого поведения в условиях распада фактического командования.',
            'Конституционные положения о защите суверенитета, территориальной целостности и правах граждан задают среду, в которой действует присяга. Они не предоставляют каждому военнослужащему полномочие самостоятельно решать конституционный спор, но и не превращают приказ начальника в норму высшей силы. Для вывода о нарушении необходимы также служебные законы, приказы, доказательства фактических действий и применимые процедуры ответственности.',
          ],
          [
            'The official oath should be read through all its commitments rather than by quoting “loyalty” alone. Loyalty is owed to the people of Ukraine and is placed beside conscientious military duty and compliance with the Constitution and laws. The text establishes the normative direction of service, but it does not provide an automatic verdict for every act when effective command is breaking down.',
            'Constitutional provisions on sovereignty, territorial integrity, and citizens’ rights supply the setting in which the oath operates. They do not authorise each servicemember to decide a constitutional dispute personally, but neither do they turn a superior’s order into the highest law. A finding of breach also requires service legislation, orders, evidence of actual conduct, and applicable accountability procedures.',
          ],
          [
            'Офіційний текст присяги треба читати через усі її зобов’язання, а не цитувати лише слово «вірність». Вірність адресована народові України; поруч стоять сумлінне виконання військового обов’язку та дотримання Конституції й законів. Текст визначає нормативний напрям служби, але не містить готового вироку щодо кожної дії за умов руйнування фактичного командування.',
            'Конституційні положення про суверенітет, територіальну цілісність і права громадян задають середовище дії присяги. Вони не уповноважують кожного військовослужбовця самостійно вирішувати конституційну суперечку, але й не роблять наказ начальника нормою найвищої сили. Висновок про порушення потребує також службового законодавства, наказів, доказів фактичних дій і належної процедури відповідальності.',
          ],
        ),
      },
      {
        title: L('Лояльность, законность и индивидуальная оценка', 'Loyalty, legality, and individual assessment', 'Лояльність, законність та індивідуальна оцінка'),
        paragraphs: P(
          [
            'Одна трактовка считает всякий отказ подчиниться новому командованию нарушением присяги; другая исходит из того, что спорность перехода власти освобождала от прежних обязательств. Обе позиции слишком широки. Первая может игнорировать незаконный приказ или реальное принуждение, вторая ошибочно превращает политический спор в автоматическое прекращение институциональной и личной правовой связи с государством.',
            'Присяга помогает организовать анализ, но не заменяет доказательство конкретного правонарушения и не определяет сама по себе международный статус территории. Она также не позволяет приписывать одинаковую ответственность всем военным одной части. Обоснованный вывод должен оставаться индивидуальным: что человек был обязан делать, какие законные возможности имел, чему фактически содействовал и могла ли угроза его жизни или свободе изменить оценку выбора.',
          ],
          [
            'One interpretation treats every refusal to follow new command as a breach; another assumes that a disputed transfer of power released all prior obligations. Both are too broad. The first can ignore an unlawful order or genuine coercion, while the second wrongly turns a political dispute into automatic termination of institutional and personal legal ties to the state.',
            'The oath organises analysis but does not replace proof of a specific offence or determine a territory’s international status. Nor does it assign identical responsibility to every member of a unit. A sound conclusion remains individual: what the person had to do, which lawful options existed, what conduct was actually assisted, and whether threats to life or liberty affected the character of the choice.',
          ],
          [
            'Одне тлумачення вважає кожну відмову підкоритися новому командуванню порушенням присяги; інше припускає, що спірність переходу влади звільнила від усіх попередніх обов’язків. Обидва підходи надто широкі. Перший може ігнорувати незаконний наказ або реальний примус, другий помилково перетворює політичний спір на автоматичне припинення інституційного та особистого правового зв’язку з державою.',
            'Присяга впорядковує аналіз, але не замінює доказ конкретного правопорушення й сама не визначає міжнародний статус території. Вона також не встановлює однакової відповідальності для всіх військових частини. Обґрунтований висновок має бути індивідуальним: що особа була зобов’язана робити, які законні можливості мала, чому фактично сприяла і чи впливала загроза життю або свободі на характер вибору.',
          ],
        ),
      },
    ],
  },

  'concept-army-rights-limits': {
    lead: L(
      'Вооружённые силы создаются для защиты государства, но их сила не выводится за пределы Конституции. Украинская конституционная рамка одновременно поручает армии оборону суверенитета и территориальной целостности и запрещает использовать военные формирования для ограничения прав и свобод граждан или свержения конституционного строя. Это двойное правило особенно важно при чтении событий 2014 года: спор о законности власти, протестах и начале силовой операции нельзя разрешить одной фразой «армия должна защищать» или «армия не может действовать внутри страны».',
      'Armed forces defend the state, but their power is not placed outside the Constitution. Ukraine’s constitutional framework both assigns defence of sovereignty and territorial integrity and bars military formations from restricting citizens’ rights and freedoms or overthrowing the constitutional order. This dual rule is crucial when reading 2014: disputes about lawful authority, protests, and the start of security operations cannot be resolved by saying simply that the army must defend or that it can never act inside the country.',
      'Збройні сили захищають державу, але їхня сила не виводиться за межі Конституції. Українська конституційна рамка одночасно покладає на армію оборону суверенітету й територіальної цілісності та забороняє використовувати військові формування для обмеження прав і свобод громадян або повалення конституційного ладу. Це подвійне правило особливо важливе для подій 2014 року: спір про законність влади, протести й початок силової операції не вирішується фразою «армія має захищати» чи «армія ніколи не може діяти всередині країни».',
    ),
    sections: [
      {
        title: L('Оборонная функция и внутренний предел', 'Defensive function and internal limit', 'Оборонна функція та внутрішня межа'),
        paragraphs: P(
          [
            'Порог анализа возникает, когда военные подразделения применяются не только против внешнего нападения, но и в обстановке внутреннего кризиса, массовых беспорядков или вооружённого мятежа. Нужно установить правовой режим, компетентный орган, поставленную задачу и фактическое воздействие на граждан. Наличие внутреннего компонента не делает каждое применение сил незаконным, однако повышает значение полномочий, необходимости и защиты основных прав.',
            'Запрет ограничивать права военными формированиями нельзя читать как отмену всех конституционно предусмотренных чрезвычайных и оборонительных мер. Его задача — не позволить вооружённой силе стать самостоятельным политическим арбитром. Даже когда применение армии имеет законную цель, конкретные действия должны оставаться в пределах приказа и закона, различать вооружённых участников и гражданских и допускать последующий институциональный контроль.',
          ],
          [
            'The inquiry is triggered when military units are used not only against external attack but amid internal crisis, disorder, or armed rebellion. One must identify the legal regime, competent authority, assigned task, and actual impact on civilians. An internal dimension does not make every deployment unlawful, but it increases the importance of authority, necessity, and protection of fundamental rights.',
            'The prohibition on using military formations to restrict rights should not be read as cancelling all constitutionally provided emergency and defensive measures. Its purpose is to prevent armed force from becoming an autonomous political arbiter. Even a deployment with a lawful aim must stay within orders and law, distinguish armed participants from civilians, and remain subject to institutional review.',
          ],
          [
            'Аналіз потрібен, коли військові підрозділи застосовують не лише проти зовнішнього нападу, а й під час внутрішньої кризи, заворушень або збройного заколоту. Треба встановити правовий режим, компетентний орган, поставлене завдання та фактичний вплив на цивільних. Внутрішній компонент не робить кожне застосування незаконним, але підвищує значення повноважень, необхідності й захисту основних прав.',
            'Заборону обмежувати права військовими формуваннями не слід читати як скасування всіх конституційно передбачених надзвичайних та оборонних заходів. Її мета — не дозволити збройній силі стати самостійним політичним арбітром. Навіть законне за метою застосування має залишатися в межах наказу й права, розрізняти озброєних учасників і цивільних та допускати інституційний контроль.',
          ],
        ),
      },
      {
        title: L('От смены власти к началу АТО', 'From the transfer of power to the ATO', 'Від зміни влади до початку АТО'),
        paragraphs: P(
          [
            '«Смена власти в Украине» от 22 февраля 2014 года ставит вопрос о непрерывности президентских и парламентских полномочий. «Начало Антитеррористической операции» от 14 апреля 2014 года фиксирует отдельный последующий правовой акт. Между этими датами необходимо проверять не только политическую оценку новой власти, но и то, какой орган принял конкретное решение, на каком основании и в отношении какой угрозы.',
            '«Полномасштабное вторжение России» от 24 февраля 2022 года создаёт иную исходную ситуацию: защита государства от внешнего вооружённого нападения относится к прямой функции армии. Но даже тогда внутренние ограничения не исчезают. Мобилизация, военное положение, задержания и использование объектов должны опираться на действующий режим, а защита гражданских остаётся отдельной обязанностью, не поглощённой общей целью победы.',
          ],
          [
            '“Transfer of power in Ukraine” of 22 February 2014 raises continuity of presidential and parliamentary authority. “Start of the Anti-Terrorist Operation” of 14 April 2014 records a separate later legal act. Between those dates analysis must consider not only the political assessment of the new authorities, but which body made a particular decision, on what basis, and in response to what threat.',
            '“Russia’s full-scale invasion” of 24 February 2022 creates a different starting point: defence against an external armed attack is a direct military function. Yet internal limits do not disappear. Mobilisation, martial law, detention, and use of facilities require a valid legal regime, while civilian protection remains a distinct duty not absorbed by the general aim of victory.',
          ],
          [
            '«Зміна влади в Україні» від 22 лютого 2014 року ставить питання про безперервність президентських і парламентських повноважень. «Початок Антитерористичної операції» від 14 квітня 2014 року фіксує окремий наступний правовий акт. Між цими датами треба перевіряти не лише політичну оцінку нової влади, а й те, який орган ухвалив конкретне рішення, на якій підставі та щодо якої загрози.',
            '«Повномасштабне вторгнення Росії» від 24 лютого 2022 року створює іншу вихідну ситуацію: захист держави від зовнішнього збройного нападу є прямою функцією армії. Проте внутрішні межі не зникають. Мобілізація, воєнний стан, затримання й використання об’єктів потребують чинного режиму, а захист цивільних залишається окремим обов’язком, не поглинутим загальною метою перемоги.',
          ],
        ),
      },
      {
        title: L('Текст статьи 17 и цепочка полномочий', 'Article 17 and the chain of authority', 'Стаття 17 і ланцюг повноважень'),
        paragraphs: P(
          [
            'Статью 17 Конституции Украины важно читать целиком: она описывает защитные задачи государства, место вооружённых формирований и запрет использовать их для ограничения прав или свержения строя. Отдельная фраза не устанавливает, что всякое внутреннее развертывание армии незаконно, и не подтверждает автоматически законность любой операции, названной оборонительной. Применение зависит от других норм о полномочиях президента, парламента и специальных органов.',
            'Указ от 14 апреля 2014 года вводит в действие решение Совета национальной безопасности и обороны; именно документальная цепочка позволяет отличить политическое заявление от юридического решения. Текст устанавливает факт принятия и дату, но не доказывает сам по себе правомерность каждого последующего действия подразделения. Для этого нужны оперативные приказы, фактические обстоятельства, применимое внутреннее право и нормы защиты человека.',
          ],
          [
            'Article 17 of Ukraine’s Constitution should be read as a whole: it describes defensive tasks, the place of military formations, and the ban on using them to restrict rights or overthrow the constitutional order. A single phrase neither makes every internal deployment unlawful nor validates every operation described as defensive. Application depends on other rules allocating authority among the president, parliament, and specialised bodies.',
            'The decree of 14 April 2014 puts a National Security and Defence Council decision into effect; this documentary chain distinguishes a political statement from a legal decision. It establishes adoption and date, but does not itself prove the legality of every later unit action. Operational orders, facts, applicable domestic law, and human-protection rules are still required.',
          ],
          [
            'Статтю 17 Конституції України важливо читати повністю: вона описує оборонні завдання, місце військових формувань і заборону використовувати їх для обмеження прав або повалення ладу. Одна фраза не робить кожне внутрішнє розгортання незаконним і не підтверджує автоматично законність кожної операції, названої оборонною. Застосування залежить від інших норм про повноваження президента, парламенту та спеціальних органів.',
            'Указ від 14 квітня 2014 року вводить у дію рішення Ради національної безпеки і оборони; цей документальний ланцюг відрізняє політичну заяву від юридичного рішення. Текст встановлює факт ухвалення й дату, але сам не доводить правомірність кожної наступної дії підрозділу. Потрібні оперативні накази, факти, застосовне внутрішнє право та норми захисту людини.',
          ],
        ),
      },
      {
        title: L('Между бездействием и военным произволом', 'Between inaction and military arbitrariness', 'Між бездіяльністю та військовим свавіллям'),
        paragraphs: P(
          [
            'Одна крайняя трактовка считает конституционный запрет основанием для полного неучастия армии во внутреннем вооружённом кризисе. Она может оставить государство без средства защиты при захвате органов и тяжёлом насилии. Другая трактовка предоставляет власти практически неограниченный выбор средств после объявления угрозы. Она стирает различие между защитой конституционного порядка и подавлением политического несогласия.',
            'Статья не выносит итоговую оценку всей АТО и не определяет ответственность по отдельным эпизодам. Её вывод процедурен: оборонная задача, компетентное решение и уважение прав должны быть доказаны одновременно. Законность высшего акта также не переносится автоматически на каждый приказ, а нарушение отдельным подразделением не доказывает незаконность всей государственной оборонной функции. Такой раздельный анализ сохраняет и способность государства защищаться, и пределы вооружённой власти.',
          ],
          [
            'One extreme reading turns the constitutional prohibition into complete military non-involvement in an internal armed crisis, potentially leaving the state unable to respond to seizures of institutions and serious violence. The opposite reading gives government almost unlimited means once a threat is declared, erasing the difference between defending constitutional order and suppressing political disagreement.',
            'This article does not judge the entire ATO or assign responsibility for individual incidents. Its conclusion is procedural: a defensive task, competent decision, and respect for rights must be shown together. A lawful high-level act does not validate every order, while a unit’s violation does not invalidate the whole defensive function. This separation preserves both state protection and limits on armed power.',
          ],
          [
            'Одне крайнє тлумачення перетворює конституційну заборону на повне невтручання армії у внутрішню збройну кризу, залишаючи державу без засобів реагування на захоплення установ і тяжке насильство. Протилежне тлумачення дає владі майже необмежений вибір засобів після оголошення загрози та стирає різницю між захистом конституційного ладу й придушенням політичної незгоди.',
            'Стаття не оцінює всю АТО й не встановлює відповідальність за окремі епізоди. Її висновок процедурний: оборонне завдання, компетентне рішення й повага до прав мають бути доведені разом. Законний акт найвищого рівня не узаконює кожний наказ, а порушення підрозділу не скасовує всю оборонну функцію. Таке розділення зберігає і здатність держави захищатися, і межі збройної влади.',
          ],
        ),
      },
    ],
  },

  'concept-civilian-protection': {
    lead: L(
      'Защита гражданских — самостоятельная система обязанностей сторон вооружённого конфликта, а не пожелание, действующее только при удобных условиях. Она требует различать гражданских и военные цели, сопоставлять ожидаемый военный результат с риском сопутствующего вреда и принимать практически возможные меры предосторожности. Обязанности возникают как у стороны, планирующей атаку, так и у стороны, размещающей военные объекты среди населения; нарушение одной стороны не освобождает другую от её собственного стандарта.',
      'Civilian protection is an independent set of duties for parties to armed conflict, not an aspiration applicable only when convenient. It requires distinction between civilians and military objectives, assessment of expected military advantage against incidental harm, and feasible precautions. Duties attach both to the party planning an attack and to the party locating military objectives near populations; one side’s violation does not release the other from its own standard.',
      'Захист цивільних — самостійна система обов’язків сторін збройного конфлікту, а не побажання, чинне лише за зручних умов. Вона вимагає розрізняти цивільних і військові цілі, співвідносити очікувану військову перевагу з ризиком супутньої шкоди та вживати практично можливих запобіжних заходів. Обов’язки має і сторона, що планує атаку, і сторона, що розміщує військові об’єкти поруч із населенням; порушення однієї не звільняє іншу від власного стандарту.',
    ),
    sections: [
      {
        title: L('Различение, соразмерность и предосторожности', 'Distinction, proportionality, and precautions', 'Розрізнення, пропорційність і запобіжні заходи'),
        paragraphs: P(
          [
            'Первый порог — существование вооружённого конфликта и конкретной военной операции. Затем объект проверяется по его характеру, назначению, использованию и вкладу в военные действия. Гражданский объект не становится законной целью из-за общего расположения в воюющей стране. Если объект приобрёл военное значение, это всё равно не отменяет оценки ожидаемого вреда гражданским и выбора доступных способов его уменьшить.',
            'Практически возможные меры зависят от информации и средств, разумно доступных в момент решения: проверка цели, выбор времени и оружия, предупреждение, отмена или приостановка атаки при изменении обстоятельств. Обороняющаяся сторона должна по возможности удалять гражданских и военные объекты друг от друга. Но опасное размещение не превращает жителей в цели и не делает несоразмерный удар допустимым.',
          ],
          [
            'The first threshold is an armed conflict and a particular military operation. An object is then assessed by its nature, purpose, use, and contribution to military action. A civilian object does not become targetable merely because it lies in a belligerent state. Even if it gains military significance, expected civilian harm and available means of reducing that harm must still be assessed.',
            'Feasible precautions depend on information and means reasonably available when the decision is made: verification, choice of timing and weapons, warning, and cancellation or suspension if circumstances change. A defending party should, where feasible, separate civilians from military objectives. Dangerous placement does not turn residents into targets or make a disproportionate strike lawful.',
          ],
          [
            'Перший поріг — наявність збройного конфлікту та конкретної військової операції. Далі об’єкт оцінюють за характером, призначенням, використанням і внеском у воєнні дії. Цивільний об’єкт не стає законною ціллю лише через розташування у воюючій державі. Навіть набувши військового значення, він потребує оцінки очікуваної шкоди цивільним і доступних способів її зменшення.',
            'Практично можливі запобіжні заходи залежать від інформації та засобів, розумно доступних під час рішення: перевірки цілі, вибору часу й зброї, попередження, скасування або зупинення атаки за зміни обставин. Сторона, що обороняється, має за можливості розділяти цивільних і військові об’єкти. Небезпечне розміщення не перетворює мешканців на цілі й не дозволяє непропорційний удар.',
          ],
        ),
      },
      {
        title: L('Города в войне после 2014 года', 'Cities in the war after 2014', 'Міста у війні після 2014 року'),
        paragraphs: P(
          [
            '«Начало Антитеррористической операции» от 14 апреля 2014 года обозначает переход к длительным боевым действиям в населённых районах Донбасса. Уже здесь правовая оценка не может ограничиваться вопросом, кто первым занял объект: нужно изучать характер цели, присутствие жителей, предупреждения и средства атаки. Политический спор о легитимности операции не заменяет анализ защиты конкретных людей.',
            '«Полномасштабное вторжение России» от 24 февраля 2022 года резко расширило географию и интенсивность риска, включая осады, ракетные удары и боевые действия в городах. «Операция “Паутина”» от 1 июня 2025 года показывает иной случай атаки на заявленные военные объекты вдали от фронта. Сравнение подчёркивает: законность цели и защита гражданских проверяются для каждой операции, а не выводятся из общей правоты стороны.',
          ],
          [
            '“Start of the Anti-Terrorist Operation” of 14 April 2014 marks the move into prolonged hostilities in populated parts of Donbas. Even there, legal assessment cannot stop at who first occupied a facility: the character of the target, civilian presence, warnings, and means of attack matter. Political dispute about the operation’s legitimacy does not replace protection analysis for particular people.',
            '“Russia’s full-scale invasion” of 24 February 2022 greatly expanded the geography and intensity of risk through sieges, missile strikes, and urban combat. “Operation Spiderweb” of 1 June 2025 presents a different attack on stated military objectives far from the front. The comparison shows that target legality and civilian protection are tested operation by operation, not inferred from a side’s general cause.',
          ],
          [
            '«Початок Антитерористичної операції» від 14 квітня 2014 року позначає перехід до тривалих бойових дій у населених районах Донбасу. Уже тут оцінка не може зводитися до питання, хто першим зайняв об’єкт: важливі характер цілі, присутність мешканців, попередження й засоби атаки. Політичний спір про легітимність операції не замінює аналіз захисту конкретних людей.',
            '«Повномасштабне вторгнення Росії» від 24 лютого 2022 року різко розширило географію та інтенсивність ризику через облоги, ракетні удари й міські бої. «Операція “Павутина”» від 1 червня 2025 року показує інший напад на заявлені військові об’єкти далеко від фронту. Порівняння підкреслює: законність цілі й захист цивільних перевіряють для кожної операції, а не виводять із загальної правоти сторони.',
          ],
        ),
      },
      {
        title: L('Что искать в гуманитарно-правовых документах', 'What to look for in humanitarian-law texts', 'Що шукати в гуманітарно-правових документах'),
        paragraphs: P(
          [
            'Официальные тексты нужно читать по отдельным обязанностям: запрет прямых атак на гражданских, определение военной цели, правило соразмерности и меры предосторожности. Они устанавливают стандарт поведения, а не гарантируют отсутствие любого гражданского вреда. Сам факт жертв ещё не завершает юридическую квалификацию; необходимо выяснить цель, ожидаемое преимущество, доступную информацию и решения, принятые до удара.',
            'Отчёты международных организаций помогают восстановить последствия и повторяющиеся модели, но их выводы следует соотносить с методологией и объёмом проверенных данных. Заявление воюющей стороны о военной цели не является окончательным доказательством, как и фотография разрушения без контекста не определяет замысел атаки. Документы не устанавливают коллективную вину населения и не отменяют презумпцию гражданского статуса при сомнении.',
          ],
          [
            'Official texts should be read duty by duty: the ban on direct attacks against civilians, the definition of a military objective, proportionality, and precautions. They establish a conduct standard, not a guarantee of zero civilian harm. Casualties alone do not complete the legal classification; the target, expected advantage, available information, and pre-strike decisions must be examined.',
            'Reports by international organisations can reconstruct consequences and recurring patterns, but their findings should be matched to methodology and verified data. A belligerent’s assertion that a target was military is not conclusive, while an image of destruction without context does not determine attack intent. The documents neither impose collective guilt on a population nor remove the presumption of civilian status in doubt.',
          ],
          [
            'Офіційні тексти треба читати за окремими обов’язками: забороною прямих атак на цивільних, визначенням військової цілі, правилом пропорційності та запобіжними заходами. Вони встановлюють стандарт поведінки, а не гарантію повної відсутності цивільної шкоди. Сам факт жертв не завершує кваліфікацію; треба з’ясувати ціль, очікувану перевагу, доступну інформацію й рішення до удару.',
            'Звіти міжнародних організацій допомагають відновити наслідки й повторювані моделі, але їхні висновки слід співвідносити з методологією та перевіреними даними. Заява воюючої сторони про військову ціль не є остаточним доказом, а фото руйнування без контексту не визначає задум атаки. Документи не встановлюють колективної вини населення й не скасовують презумпцію цивільного статусу за сумніву.',
          ],
        ),
      },
      {
        title: L('Взаимные обвинения и пределы вывода', 'Reciprocal accusations and limits of inference', 'Взаємні звинувачення та межі висновку'),
        paragraphs: P(
          [
            'Стороны часто строят зеркальные позиции: одна указывает на военные объекты в жилой застройке, другая — на неизбирательные или чрезмерные удары. Эти утверждения могут быть одновременно предметом проверки. Неправомерное размещение обороняющейся стороны не предоставляет атакующей стороне свободу игнорировать гражданских; неправомерный удар не доказывает, что рядом никогда не существовало военной цели.',
            'Статья не определяет законность всех ударов и не заменяет расследование с доступом к боевым данным. Она предлагает строгий предел обобщению: оценка должна быть привязана к конкретной операции и информации на момент решения. Гражданская защита не может зависеть от национальности, политической лояльности или места проживания. Именно симметричное применение правил позволяет обсуждать ответственность без превращения страдания людей в риторический ресурс.',
          ],
          [
            'The parties often make mirrored claims: one points to military objectives in residential areas, the other to indiscriminate or excessive strikes. Both claims can require investigation. Unlawful placement by the defender does not free the attacker to ignore civilians; an unlawful strike does not prove that no military objective was ever nearby.',
            'This article does not classify every strike and cannot replace an investigation with access to operational data. It sets a limit on generalisation: assessment must attach to a particular operation and the information available when the decision was made. Civilian protection cannot depend on nationality, political loyalty, or residence. Symmetrical application keeps accountability analysis from turning suffering into rhetorical material.',
          ],
          [
            'Сторони часто висувають дзеркальні твердження: одна вказує на військові об’єкти серед житлової забудови, інша — на невибіркові або надмірні удари. Обидва твердження можуть потребувати перевірки. Неправомірне розміщення сторони, що обороняється, не звільняє нападника від захисту цивільних; неправомірний удар не доводить, що поруч ніколи не було військової цілі.',
            'Стаття не кваліфікує всі удари й не замінює розслідування з доступом до бойових даних. Вона встановлює межу узагальнення: оцінку слід прив’язувати до конкретної операції та інформації під час рішення. Захист цивільних не може залежати від національності, політичної лояльності чи місця проживання. Симетричне застосування правил не дозволяє перетворити людське страждання на риторичний ресурс.',
          ],
        ),
      },
    ],
  },

  'concept-valid-consent': {
    lead: L(
      'Согласие государства может сделать присутствие иностранных сил правомерным только тогда, когда оно действительно выражено компетентной властью, дано свободно, существовало в нужный момент и охватывало конкретные действия. Формула «нас пригласили» поэтому является началом, а не концом проверки. Для Крыма 2014 года особенно важны личность и полномочия предполагаемого автора приглашения, последовательность потери фактического контроля и пределы любого ранее действовавшего соглашения о размещении российских сил.',
      'State consent can make foreign military presence lawful only if it was genuinely expressed by competent authority, freely given, in force at the relevant time, and broad enough to cover the conduct. “We were invited” therefore begins rather than ends the inquiry. For Crimea in 2014, the identity and authority of any alleged inviter, the sequence in which effective control was lost, and the limits of prior agreements on Russian forces are especially important.',
      'Згода держави може зробити присутність іноземних сил правомірною лише тоді, коли її справді висловила компетентна влада, вона була вільною, діяла в потрібний момент і охоплювала конкретні дії. Формула «нас запросили» тому починає, а не завершує перевірку. Для Криму 2014 року особливо важливі особа й повноваження ймовірного автора запрошення, послідовність втрати фактичного контролю та межі попередніх домовленостей про розміщення російських сил.',
    ),
    sections: [
      {
        title: L('Четыре проверки действительного согласия', 'Four tests for valid consent', 'Чотири перевірки дійсної згоди'),
        paragraphs: P(
          [
            'Сначала устанавливается автор: представлял ли он государство в вопросах иностранного военного присутствия по действующей конституционной системе. Затем проверяется свобода — не было ли согласие получено под принуждением или уже после утраты возможности действовать независимо. Время имеет решающее значение: позднее заявление не обязательно узаконивает ранее начатую операцию. Наконец, действия должны оставаться в предметных и территориальных пределах разрешения.',
            'Согласие не равно признанию новой территории, отказу от суверенитета или разрешению на любую военную цель. Договор о базировании допускает оговорённое присутствие, но не обязательно захват органов, блокирование частей или содействие изменению статуса. Отзыв согласия также меняет правовую ситуацию на будущее. Поэтому документ, должность автора и фактическая хронология важнее общего заявления о дружественных отношениях.',
          ],
          [
            'First identify the author: did that person represent the state on foreign military presence under the operative constitutional system? Next test freedom—was consent coerced or given after the author had lost the capacity to act independently? Timing is decisive: a later statement does not necessarily legalise an earlier operation. Finally, conduct must remain within the substantive and territorial scope of the permission.',
            'Consent is not recognition of a new territory, surrender of sovereignty, or permission for every military purpose. A basing agreement authorises specified presence but not necessarily seizure of institutions, blockade of units, or assistance in changing status. Withdrawal also changes the situation prospectively. The document, the author’s office, and the factual chronology matter more than general language about friendly relations.',
          ],
          [
            'Спершу встановлюють автора: чи представляла ця особа державу в питаннях іноземної військової присутності за чинною конституційною системою. Далі перевіряють свободу — чи не була згода примусовою або наданою після втрати здатності діяти незалежно. Час вирішальний: пізніша заява не обов’язково узаконює попередню операцію. Нарешті, дії мають залишатися в предметних і територіальних межах дозволу.',
            'Згода не дорівнює визнанню нової території, відмові від суверенітету чи дозволу на будь-яку військову мету. Угода про базування дозволяє визначену присутність, але не обов’язково захоплення органів, блокування частин або сприяння зміні статусу. Відкликання згоди також змінює майбутню ситуацію. Документ, посада автора й фактична хронологія важливіші за загальні слова про дружні відносини.',
          ],
        ),
      },
      {
        title: L('Приглашение и Крымская последовательность', 'Invitation and the Crimean sequence', 'Запрошення та кримська послідовність'),
        paragraphs: P(
          [
            'Письмо Виктора Януковича с просьбой использовать российские вооружённые силы было датировано 1 марта 2014 года и представлено на заседании Совета Безопасности ООН 3 марта. «Смена власти в Украине» от 22 февраля необходима для оценки того, кто в следующий период обладал полномочиями говорить от имени государства. «Крымский референдум и аннексия» от 16 марта показывает итог быстро развивавшейся последовательности с иностранным военным присутствием и сменой фактического контроля. Между этими датами нельзя перескакивать, не установив содержание и момент предполагаемого приглашения.',
            '«Передача Крымской области в УССР» от 19 февраля 1954 года описывает историческое происхождение административной границы, но не отвечает на вопрос согласия на иностранные силы шестьдесят лет спустя. «Будапештский меморандум» от 5 декабря 1994 года, напротив, подтверждает уважение существующих границ независимой Украины. Согласие нужно искать в относящемся к 2014 году волеизъявлении компетентного украинского органа, а не выводить из истории полуострова.',
          ],
          [
            'Viktor Yanukovych’s letter requesting the use of Russian armed forces was dated 1 March 2014 and presented at the UN Security Council meeting on 3 March. “Transfer of power in Ukraine” of 22 February is necessary to assess who could speak for the state in the following period. “Crimean referendum and annexation” of 16 March shows the outcome of a rapid sequence involving foreign military presence and altered effective control. One cannot jump between those dates without identifying the content and timing of the alleged invitation.',
            '“Transfer of Crimea to the Ukrainian SSR” of 19 February 1954 describes the historic origin of an administrative boundary, not consent to foreign forces sixty years later. The “Budapest Memorandum” of 5 December 1994 instead reaffirms the existing borders of independent Ukraine. Relevant consent must be found in a competent Ukrainian authority’s expression in 2014, not inferred from the peninsula’s history.',
          ],
          [
            'Лист Віктора Януковича з проханням використати російські збройні сили був датований 1 березня 2014 року й представлений на засіданні Ради Безпеки ООН 3 березня. «Зміна влади в Україні» від 22 лютого потрібна для оцінки того, хто міг говорити від імені держави в наступний період. «Кримський референдум і анексія» від 16 березня показує результат швидкої послідовності з іноземною військовою присутністю та зміною фактичного контролю. Між цими датами не можна перескакувати без встановлення змісту й часу ймовірного запрошення.',
            '«Передача Кримської області до УРСР» від 19 лютого 1954 року описує історичне походження адміністративного кордону, але не згоду на іноземні сили через шістдесят років. «Будапештський меморандум» від 5 грудня 1994 року натомість підтверджує чинні кордони незалежної України. Згоду слід шукати у волевиявленні компетентного українського органу 2014 року, а не виводити з історії півострова.',
          ],
        ),
      },
      {
        title: L('Как читать приглашение и соглашение о базировании', 'How to read an invitation and a basing agreement', 'Як читати запрошення та угоду про базування'),
        paragraphs: P(
          [
            'Официальное письмо или заявление нужно проверять по подлинности, адресату, дате и конституционной компетенции автора. Само существование подписи не решает, сохранял ли автор полномочия, представлял ли центральное государство и действовал ли свободно. Если текст просит содействия, необходимо установить, какие именно действия он охватывает; расплывчатая просьба о восстановлении порядка не равна согласию на присоединение территории.',
            'Соглашения о размещении Черноморского флота следует читать по разрешённым объектам, численности, передвижению и процедурам взаимодействия. Они буквально регулируют согласованное базирование и не должны автоматически расширяться на любые операции вне этих условий. Устав ООН задаёт общий запрет силы; доктрина согласия объясняет, почему строго разрешённое присутствие может не нарушать его, но только пока сохраняются действительность и пределы разрешения.',
          ],
          [
            'An official letter or statement should be tested for authenticity, recipient, date, and the author’s constitutional competence. A signature alone does not decide whether the author retained authority, represented the central state, or acted freely. If the text asks for assistance, its covered conduct must be identified; a broad request to restore order is not consent to territorial incorporation.',
            'Black Sea Fleet basing agreements should be read for authorised facilities, numbers, movement, and coordination procedures. They literally regulate agreed basing and should not be expanded automatically to operations outside those terms. The UN Charter sets the general prohibition on force; consent explains why strictly permitted presence may avoid breach, but only while permission remains valid and within scope.',
          ],
          [
            'Офіційний лист або заяву треба перевіряти за справжністю, адресатом, датою та конституційною компетенцією автора. Сам підпис не вирішує, чи зберіг автор повноваження, чи представляв центральну державу і чи діяв вільно. Якщо текст просить допомоги, треба визначити охоплені дії; загальне прохання відновити порядок не дорівнює згоді на приєднання території.',
            'Угоди про розміщення Чорноморського флоту слід читати за дозволеними об’єктами, чисельністю, переміщенням і процедурами взаємодії. Вони буквально регулюють погоджене базування й не мають автоматично поширюватися на операції поза цими умовами. Статут ООН задає загальну заборону сили; згода пояснює правомірність суворо дозволеної присутності лише доти, доки зберігаються її дійсність і межі.',
          ],
        ),
      },
      {
        title: L('Спор о представителе государства', 'The dispute over who represented the state', 'Спір про представника держави'),
        paragraphs: P(
          [
            'Одна трактовка исходит из формального сохранения президентского титула у прежнего главы государства и считает его обращение достаточным. Другая указывает на его отсутствие, решения парламента и фактическую утрату управления. Юридическая оценка требует соединить, а не выбрать один из этих факторов: конституционные нормы о прекращении полномочий, международное признание действующих органов, фактическую способность представлять государство и отсутствие принуждения.',
            'Даже если признать определённую силу приглашения, остаются отдельные вопросы о масштабе и цели действий, событиях в Крыму и последующем изменении статуса. Поэтому статья не решает весь спор одним ответом о должности. Её предел точен: действительное согласие способно оправдать лишь те иностранные действия, на которые компетентная и свободная государственная воля действительно распространялась в соответствующий момент.',
          ],
          [
            'One reading relies on the former president’s formally retained title and treats his appeal as sufficient. Another points to his absence, parliamentary decisions, and loss of effective governance. Legal analysis must combine rather than select among these factors: constitutional termination rules, international dealings with operative authorities, actual capacity to represent the state, and freedom from coercion.',
            'Even if some effect is given to an invitation, separate questions remain about the scale and purpose of conduct, events in Crimea, and the later status change. The dispute is not resolved by an answer about office alone. The limit is precise: valid consent can justify only foreign conduct actually covered by a competent and freely expressed state will at the relevant time.',
          ],
          [
            'Одне тлумачення спирається на формально збережений президентський титул колишнього глави держави й вважає його звернення достатнім. Інше вказує на відсутність, рішення парламенту та втрату фактичного управління. Правова оцінка має поєднати ці чинники: конституційні правила припинення повноважень, міжнародні відносини з діючими органами, реальну здатність представляти державу й свободу від примусу.',
            'Навіть якщо надати запрошенню певної сили, окремими лишаються питання масштабу та мети дій, подій у Криму й наступної зміни статусу. Спір не вирішується лише відповіддю про посаду. Межа точна: дійсна згода може виправдати тільки ті іноземні дії, які справді охоплювала компетентна й вільно висловлена державна воля у відповідний момент.',
          ],
        ),
      },
    ],
  },

  'concept-constitutional-interpretation': {
    lead: L(
      'Толкование Конституции — это последовательное чтение текста, полномочий органов, процедуры и последующих актов, а не выбор одной фразы, которая поддерживает желаемый политический итог. Российско-украинская история даёт два особенно наглядных примера: советская цепочка решений о передаче Крымской области в 1954 году и украинская смена власти в феврале 2014 года. В обоих случаях буквальная норма важна, но её значение раскрывается только рядом с вопросами компетенции, даты, формы решения и правовых последствий.',
      'Constitutional interpretation is a sequence of reading text, institutional competence, procedure, and later acts, not selecting one sentence that supports a preferred political result. Russia–Ukraine history offers two clear examples: the Soviet chain transferring the Crimean region in 1954 and Ukraine’s transfer of power in February 2014. In both, literal wording matters, but its effect appears only alongside authority, timing, form of decision, and legal consequences.',
      'Тлумачення Конституції — це послідовне читання тексту, компетенції органів, процедури та наступних актів, а не вибір однієї фрази на користь бажаного політичного результату. Російсько-українська історія дає два виразні приклади: радянський ланцюг рішень про передачу Кримської області 1954 року та українську зміну влади в лютому 2014 року. В обох випадках буквальна норма важлива, але її значення розкривається лише поруч із повноваженнями, датою, формою рішення та правовими наслідками.',
    ),
    sections: [
      {
        title: L('Текст, компетенция и правовой эффект', 'Text, competence, and legal effect', 'Текст, компетенція та правовий ефект'),
        paragraphs: P(
          [
            'Порог толкования возникает, когда несколько норм относятся к одному решению или когда текст устанавливает требование, но не называет единственный способ его исполнения. Сначала определяется редакция Конституции на нужную дату, затем полномочия каждого органа и форма принятого акта. После этого проверяется, устранили ли возможный дефект последующий закон, конституционная поправка, судебное решение или устойчивое признание нового положения.',
            'Толкование должно различать незаконность, недействительность и политическую спорность. Нарушение процедуры не всегда имеет одинаковое последствие: оно может вести к отмене акта, требовать исправления или остаться предметом последующей оценки. Обратная ошибка — считать любой состоявшийся политический результат законным только из-за его эффективности. Факт и норма взаимодействуют, но ни один не заменяет другой.',
          ],
          [
            'Interpretation is required when several provisions govern one decision or when a text states a requirement without prescribing its only permissible form. First identify the constitutional version in force on the relevant date, then each institution’s competence and the legal form used. Next ask whether a possible defect was addressed by later legislation, constitutional amendment, adjudication, or sustained recognition of the new position.',
            'Interpretation must distinguish unlawfulness, invalidity, and political controversy. A procedural breach does not always carry the same consequence: it may invalidate an act, require correction, or remain subject to later assessment. The reverse error treats every effective political outcome as lawful merely because it endured. Fact and norm interact, but neither substitutes for the other.',
          ],
          [
            'Тлумачення потрібне, коли кілька норм регулюють одне рішення або текст містить вимогу без єдиного визначеного способу її виконання. Спершу встановлюють редакцію Конституції на потрібну дату, далі — компетенцію кожного органу та форму акта. Потім перевіряють, чи усунули можливий дефект наступний закон, конституційна зміна, судове рішення або стале визнання нового становища.',
            'Тлумачення має розрізняти незаконність, недійсність і політичну спірність. Процедурне порушення не завжди має однаковий наслідок: воно може скасувати акт, вимагати виправлення або залишитися предметом подальшої оцінки. Зворотна помилка — вважати кожний ефективний політичний результат законним лише через його тривалість. Факт і норма взаємодіють, але не замінюють одне одного.',
          ],
        ),
      },
      {
        title: L('Две цепочки спорных решений', 'Two chains of contested decisions', 'Два ланцюги спірних рішень'),
        paragraphs: P(
          [
            '«Передача Крымской области в УССР» от 19 февраля 1954 года требует читать февральский указ, согласия республиканских органов, союзный закон 26 апреля и последующие конституционные изменения. Формула о согласии республики не содержала прямого требования всенародного референдума. Поэтому вывод о процедуре нельзя строить только на оценке компетенции одного президиума и игнорировать всю последующую цепочку закрепления.',
            '«Смена власти в Украине» от 22 февраля 2014 года требует сопоставить конституционные основания прекращения президентских полномочий, постановление парламента и фактическую утрату прежним президентом возможности исполнять функции. «Начало Антитеррористической операции» от 14 апреля 2014 года является уже отдельным актом следующей власти. Возможный дефект перехода и полномочие принять конкретное апрельское решение связаны, но не тождественны.',
          ],
          [
            '“Transfer of Crimea to the Ukrainian SSR” of 19 February 1954 requires reading the February decree, republican consents, the Union law of 26 April, and later constitutional amendments. The formula requiring republican consent did not expressly require a popular referendum. Procedure cannot therefore be judged solely through one presidium’s competence while ignoring the full later chain of consolidation.',
            '“Transfer of power in Ukraine” of 22 February 2014 requires comparing constitutional grounds for ending presidential authority, the parliamentary resolution, and the former president’s effective inability to perform his functions. “Start of the Anti-Terrorist Operation” of 14 April 2014 is a distinct act of the succeeding authorities. A possible defect in transition and authority for the April decision are related but not identical.',
          ],
          [
            '«Передача Кримської області до УРСР» від 19 лютого 1954 року вимагає читати лютневий указ, згоди республіканських органів, союзний закон 26 квітня та наступні конституційні зміни. Формула про згоду республіки прямо не вимагала всенародного референдуму. Тому процедуру не можна оцінювати лише через компетенцію однієї президії, ігноруючи весь подальший ланцюг закріплення.',
            '«Зміна влади в Україні» від 22 лютого 2014 року потребує зіставити конституційні підстави припинення президентських повноважень, постанову парламенту та фактичну нездатність колишнього президента виконувати функції. «Початок Антитерористичної операції» від 14 квітня 2014 року є окремим актом наступної влади. Можливий дефект переходу й повноваження ухвалити квітневе рішення пов’язані, але не тотожні.',
          ],
        ),
      },
      {
        title: L('Как работать с первичным правовым текстом', 'Working with the primary legal text', 'Як працювати з первинним правовим текстом'),
        paragraphs: P(
          [
            'Официальный документ следует открывать в редакции, действовавшей в момент события. Нужно различать номер статьи, её буквальный текст и более поздний комментарий. Если норма требует согласия, но не уточняет форму, нельзя незаметно добавить обязательный референдум. Если норма перечисляет основания прекращения полномочий, нельзя автоматически приравнять политическую невозможность работать к любому одному основанию без анализа принятого решения.',
            'Затем первичный текст сопоставляется с актом его применения. Постановление 1992 года о передаче Крыма нужно читать вместе с содержащейся в нём оговоркой о последующем законодательном закреплении, а постановление украинского парламента 2014 года — в его собственных формулировках о самоустранении и досрочных выборах. Официальный текст устанавливает, что орган действительно заявил; он не гарантирует бесспорность юридической квалификации.',
          ],
          [
            'An official instrument should be opened in the version operative at the event date. The article number, its literal wording, and later commentary must be kept distinct. If a provision requires consent without prescribing form, a mandatory referendum cannot be silently added. If a provision lists grounds for ending authority, political inability to act cannot automatically be equated with one listed ground without examining the decision used.',
            'The primary text is then compared with the applying act. Russia’s 1992 resolution on Crimea must be read with its acknowledgement of later legislative consolidation, while the Ukrainian parliament’s 2014 resolution must be read through its own wording on withdrawal from duties and early elections. An official text establishes what an institution said; it does not guarantee that the legal characterisation is uncontested.',
          ],
          [
            'Офіційний документ треба відкривати в редакції, чинній на момент події. Номер статті, її буквальний текст і пізніший коментар слід розділяти. Якщо норма вимагає згоди, але не визначає форму, не можна непомітно додати обов’язковий референдум. Якщо норма перелічує підстави припинення повноважень, політичну неможливість працювати не можна автоматично прирівняти до однієї підстави без аналізу рішення.',
            'Потім первинний текст зіставляють з актом застосування. Постанову Росії 1992 року про Крим слід читати разом із застереженням про подальше законодавче закріплення, а постанову українського парламенту 2014 року — у її власних формулюваннях про самоусунення й дострокові вибори. Офіційний текст встановлює, що заявив орган; він не гарантує безспірність юридичної кваліфікації.',
          ],
        ),
      },
      {
        title: L('Буквализм, последствия и пределы', 'Literalism, consequences, and limits', 'Буквалізм, наслідки та межі'),
        paragraphs: P(
          [
            'Строго буквальная трактовка полезна как защита от политического произвола, но может стать избирательной, если берёт одну норму и отбрасывает другие акты той же системы. Трактовка через фактическую эффективность объясняет устойчивость результата, но рискует узаконить любое успешное нарушение. Обоснованный подход показывает обе стороны: где процедура отклонилась от текста и какие правовые действия затем закрепляли или оспаривали результат.',
            'Конституционное толкование не решает международный спор о границах одной ссылкой на внутреннее право и не устанавливает факты без источников. Оно также не превращает отсутствие идеальной процедуры в исчезновение государства и всех его институтов. Итог должен быть пропорционален материалу: можно установить слабость конкретного процедурного шага, не делая без дополнительного основания вывод о недействительности всех последующих решений или о праве иностранной силы изменить положение.',
          ],
          [
            'Strict textualism guards against political arbitrariness but becomes selective if it isolates one provision and discards other acts in the same system. An effectiveness-based reading explains why an outcome endured but risks validating every successful breach. A sound approach shows both: where procedure departed from text and which later legal actions consolidated or challenged the result.',
            'Constitutional interpretation cannot settle an international border dispute through domestic law alone or establish facts without evidence. Nor does an imperfect procedure dissolve a state and all its institutions. Conclusions must match the material: one may identify weakness in a procedural step without declaring every later decision invalid or giving a foreign power a right to alter the situation.',
          ],
          [
            'Суворий буквалізм захищає від політичного свавілля, але стає вибірковим, коли ізолює одну норму й відкидає інші акти тієї самої системи. Тлумачення через фактичну ефективність пояснює тривалість результату, але ризикує узаконити кожне успішне порушення. Обґрунтований підхід показує обидва боки: де процедура відійшла від тексту й які подальші правові дії закріплювали або оскаржували результат.',
            'Конституційне тлумачення не вирішує міжнародний спір про кордони одним посиланням на внутрішнє право й не встановлює фактів без доказів. Неідеальна процедура також не розчиняє державу та всі її інституції. Висновок має відповідати матеріалу: можна вказати на слабкість окремого кроку, не оголошуючи всі наступні рішення недійсними й не надаючи іноземній силі права змінити становище.',
          ],
        ),
      },
    ],
  },

  'concept-russia-ukraine-relationship': {
    lead: L(
      'Российско-украинские отношения нельзя описать одной шкалой от «братства» к «вражде». В них одновременно действуют признанная государственная отдельность, плотные исторические и человеческие связи, экономические зависимости, конкурирующие проекты безопасности и последствия вооружённого конфликта. Диалог в такой системе остаётся инструментом управления риском, но не доказывает совпадение интересов и не отменяет правовых границ. Для анализа важны не заявления о вечной близости или вечном противостоянии, а изменения договоров, институтов и поведения в конкретные даты.',
      'Russia–Ukraine relations cannot be placed on a single scale from “brotherhood” to “hostility.” They combine recognised state separateness, dense historical and human links, economic dependencies, competing security projects, and the effects of armed conflict. Dialogue remains an instrument for managing risk, but it neither proves common interests nor erases legal borders. Analysis should follow changes in treaties, institutions, and conduct on specific dates rather than claims of eternal closeness or permanent confrontation.',
      'Російсько-українські відносини не можна розмістити на одній шкалі від «братерства» до «ворожнечі». У них одночасно діють визнана державна окремішність, щільні історичні й людські зв’язки, економічні залежності, конкуруючі проєкти безпеки та наслідки збройного конфлікту. Діалог залишається інструментом управління ризиком, але не доводить збігу інтересів і не скасовує правових кордонів. Аналіз має простежувати зміни договорів, інституцій і поведінки в конкретні дати, а не заяви про вічну близькість чи протистояння.',
    ),
    sections: [
      {
        title: L('Отношения как система, а не настроение', 'A relationship as a system, not a mood', 'Відносини як система, а не настрій'),
        paragraphs: P(
          [
            'Предмет статьи — межгосударственная связь после появления независимой Украины, а не вся многовековая история населения региона. Порог содержательного вывода требует назвать уровень: правовой статус, безопасность, торговлю, общественные контакты или политическую риторику. Улучшение на одном уровне не гарантирует сближения на другом. Дипломатический контакт может сохраняться при глубоком конфликте, а культурная близость — сосуществовать с несовместимыми государственными целями.',
            'Диалог имеет измеримый смысл, когда помогает обмениваться позициями, снижать риск ошибки, договариваться о конкретном режиме или проверять возможность соглашения. Он не является моральным одобрением партнёра и не заменяет исполнение обязательств. Отказ от разговора и вера в разговор как самоцель одинаково упрощают ситуацию: результат зависит от повестки, полномочий участников, механизмов исполнения и происходящего на земле.',
          ],
          [
            'The subject is the interstate relationship after independent Ukraine emerged, not the entire history of populations in the region. A meaningful conclusion must identify its level: legal status, security, trade, social contact, or political rhetoric. Improvement at one level does not guarantee convergence at another. Diplomatic contact can persist amid deep conflict, while cultural closeness can coexist with incompatible state objectives.',
            'Dialogue has measurable value when it exchanges positions, reduces miscalculation, creates a concrete regime, or tests whether agreement is possible. It is not moral approval and does not substitute for performance. Rejecting all communication and treating communication as an end are equally reductive: outcomes depend on agenda, authority, enforcement, and events on the ground.',
          ],
          [
            'Предмет статті — міждержавні відносини після появи незалежної України, а не вся багатовікова історія населення регіону. Змістовний висновок має називати рівень: правовий статус, безпеку, торгівлю, суспільні контакти або політичну риторику. Поліпшення на одному рівні не гарантує зближення на іншому. Дипломатичний контакт може тривати під час глибокого конфлікту, а культурна близькість — співіснувати з несумісними державними цілями.',
            'Діалог має вимірюваний сенс, коли допомагає обмінятися позиціями, зменшити ризик помилки, погодити конкретний режим або перевірити можливість угоди. Він не є моральним схваленням і не замінює виконання зобов’язань. Відмова від розмови й віра в розмову як самоціль однаково спрощують ситуацію: результат залежить від порядку денного, повноважень, механізмів виконання та подій на місці.',
          ],
        ),
      },
      {
        title: L('Как менялась рамка отношений', 'How the relationship framework changed', 'Як змінювалася рамка відносин'),
        paragraphs: P(
          [
            '«Декларация о суверенитете Украины» от 16 июля 1990 года и «Распад СССР» от 26 декабря 1991 года задают переход от общей союзной системы к отдельным государствам. «Будапештский меморандум» от 5 декабря 1994 года фиксирует конкретные заверения относительно независимости, суверенитета и границ. Эти даты показывают, что историческая связанность продолжалась уже внутри новой международно-правовой конструкции.',
            '«Крымский референдум и аннексия» от 16 марта 2014 года переводит отношения в фазу территориального конфликта, а «Полномасштабное вторжение России» от 24 февраля 2022 года — в открытую крупную войну. После таких изменений прежние форматы сотрудничества нельзя считать просто временно приостановленными. Любое будущее взаимодействие будет зависеть от безопасности, статуса территорий, ответственности, обменов и проверяемого исполнения договорённостей.',
          ],
          [
            'The “Declaration of State Sovereignty of Ukraine” of 16 July 1990 and “USSR dissolution” of 26 December 1991 mark the shift from a common Union system to separate states. The “Budapest Memorandum” of 5 December 1994 records specific assurances concerning independence, sovereignty, and borders. Historical connectedness continued, but within a new international legal structure.',
            '“Crimean referendum and annexation” of 16 March 2014 moves the relationship into territorial conflict, and “Russia’s full-scale invasion” of 24 February 2022 into open large-scale war. Earlier cooperation cannot now be treated as merely paused. Any future interaction will depend on security, territorial status, accountability, exchanges, and verifiable implementation of agreements.',
          ],
          [
            '«Декларація про державний суверенітет України» від 16 липня 1990 року та «Розпад СРСР» від 26 грудня 1991 року позначають перехід від спільної союзної системи до окремих держав. «Будапештський меморандум» від 5 грудня 1994 року фіксує конкретні запевнення щодо незалежності, суверенітету й кордонів. Історична пов’язаність тривала вже в новій міжнародно-правовій конструкції.',
            '«Кримський референдум і анексія» від 16 березня 2014 року переводить відносини у фазу територіального конфлікту, а «Повномасштабне вторгнення Росії» від 24 лютого 2022 року — у відкриту велику війну. Попередні формати співпраці вже не можна вважати просто призупиненими. Майбутня взаємодія залежатиме від безпеки, статусу територій, відповідальності, обмінів і перевірюваного виконання домовленостей.',
          ],
        ),
      },
      {
        title: L('Что документы говорят об отношениях', 'What the documents say about the relationship', 'Що документи кажуть про відносини'),
        paragraphs: P(
          [
            'Декларация 1990 года буквально провозглашает суверенитет и содержит намерение будущей нейтральности и три неядерных принципа. Она не устанавливает вечную внешнеполитическую зависимость от России и не является двусторонним договором о разделении сфер влияния. Акты 1991 года и международное признание закрепляют отдельную государственность, не отменяя семейные, языковые и экономические связи между обществами.',
            'Будапештский меморандум и последующие документы по безопасности следует читать по конкретным обязательствам и процедурам. Они показывают, что отношения регулировались не только неформальной близостью, но и международными нормами. Официальные переговорные сообщения, включая Стамбул 29 марта 2022 года, устанавливают факт предложений и контакта, но не позволяют называть мир заключённым без согласованного, подписанного и исполнимого документа.',
          ],
          [
            'The 1990 Declaration literally proclaims sovereignty and states an intention of future neutrality and three non-nuclear principles. It does not establish permanent foreign-policy dependence on Russia or a bilateral division of spheres. The 1991 acts and international recognition consolidate separate statehood without erasing family, linguistic, and economic links between societies.',
            'The Budapest Memorandum and later security instruments should be read through their particular commitments and procedures. They show a relationship governed not only by informal affinity but by international rules. Official reports on negotiations, including Istanbul on 29 March 2022, establish proposals and contact but do not permit a peace to be called concluded without an agreed, signed, and implementable instrument.',
          ],
          [
            'Декларація 1990 року буквально проголошує суверенітет і містить намір майбутнього нейтралітету та три без’ядерні принципи. Вона не встановлює постійну зовнішньополітичну залежність від Росії й не є двостороннім договором про сфери впливу. Акти 1991 року та міжнародне визнання закріплюють окрему державність, не стираючи родинних, мовних і економічних зв’язків між суспільствами.',
            'Будапештський меморандум і наступні документи безпеки слід читати за конкретними зобов’язаннями та процедурами. Вони показують, що відносини регулювалися не лише неформальною близькістю, а й міжнародними нормами. Офіційні повідомлення про переговори, зокрема у Стамбулі 29 березня 2022 року, встановлюють факт пропозицій і контакту, але не дозволяють називати мир укладеним без погодженого, підписаного й здійсненного документа.',
          ],
        ),
      },
      {
        title: L('Между неизбежной враждой и естественным единством', 'Between inevitable hostility and natural unity', 'Між неминучою ворожнечею та природною єдністю'),
        paragraphs: P(
          [
            'Одна интерпретация видит войну как доказательство неизменной несовместимости двух государств. Другая считает конфликт искусственным разрывом пространства, которое по истории должно оставаться единым. Первая недооценивает периоды сотрудничества и возможность политического изменения; вторая лишает современное население права на отдельный государственный выбор и превращает культурное сходство в право внешнего контроля.',
            'Статья не предсказывает будущую форму отношений и не предлагает примирение независимо от условий. Её ограниченный вывод состоит в необходимости держать раздельно три уровня: человеческую связанность обществ, суверенные права государств и конкретную политику властей. Диалог может быть рациональным даже между противниками, но устойчивость появляется лишь тогда, когда договорённости совместимы с правом, принимаются компетентными институтами и имеют работающий механизм проверки.',
          ],
          [
            'One interpretation treats war as proof of permanent incompatibility between the states. Another calls it an artificial rupture of a historically unified space. The first underestimates periods of cooperation and political change; the second deprives present populations of a separate state choice and turns cultural similarity into a right of external control.',
            'This article predicts no future relationship and does not advocate reconciliation regardless of conditions. Its limited conclusion separates three levels: human connectedness between societies, sovereign rights of states, and particular government policy. Dialogue may be rational between adversaries, but stability requires lawful arrangements accepted by competent institutions and backed by workable verification.',
          ],
          [
            'Одне тлумачення бачить у війні доказ постійної несумісності двох держав. Інше називає конфлікт штучним розривом історично єдиного простору. Перше недооцінює періоди співпраці та політичні зміни; друге позбавляє сучасне населення права на окремий державний вибір і перетворює культурну схожість на право зовнішнього контролю.',
            'Стаття не прогнозує майбутню форму відносин і не пропонує примирення за будь-яких умов. Її обмежений висновок розділяє три рівні: людську пов’язаність суспільств, суверенні права держав і конкретну політику влади. Діалог може бути раціональним між противниками, але сталість потребує законних домовленостей, прийнятих компетентними інституціями та забезпечених механізмом перевірки.',
          ],
        ),
      },
    ],
  },

  'concept-shared-history': {
    lead: L(
      'Общая история России и Украины описывает реальные переплетения государств, империй, советских институтов, культур, семей и языков, но сама по себе не определяет современный политический статус. Историческая близость может объяснять взаимное восприятие и силу символических конфликтов; она не отменяет решений о суверенитете, признанных границ и права общества формировать собственные институты. Корректная статья должна избегать как мифа о непрерывном единстве, так и представления о двух обществах без общего прошлого.',
      'The shared history of Russia and Ukraine includes real entanglements of states, empires, Soviet institutions, cultures, families, and languages, but it does not itself determine present political status. Historical closeness can explain perceptions and the intensity of symbolic conflict; it does not erase sovereignty decisions, recognised borders, or a society’s right to form its own institutions. A sound account avoids both a myth of uninterrupted unity and a picture of societies with no common past.',
      'Спільна історія Росії та України охоплює реальні переплетення держав, імперій, радянських інституцій, культур, родин і мов, але сама не визначає сучасного політичного статусу. Історична близькість пояснює взаємне сприйняття та силу символічних конфліктів; вона не скасовує рішень про суверенітет, визнаних кордонів і права суспільства формувати власні інституції. Коректна розповідь уникає і міфу про безперервну єдність, і картини суспільств без спільного минулого.',
    ),
    sections: [
      {
        title: L('Что может и чего не может доказать история', 'What history can and cannot prove', 'Що історія може і чого не може довести'),
        paragraphs: P(
          [
            'Историческая рамка становится содержательной, когда названы период, территория, институт и тип связи. Нахождение земель в одной империи, одной союзной республике или общей экономике — разные факты с разными последствиями. Формулы «всегда вместе» и «всегда отдельно» стирают смену границ, неоднородность регионов и изменение политической идентичности. Они создают ощущение объяснения, но не выдерживают точной периодизации.',
            'Современные права государства не выводятся из подсчёта веков общего прошлого. Иначе большинство границ мира можно было бы постоянно оспаривать конкурирующими историческими картами. История помогает понять претензии, память и политическую риторику; правовой статус устанавливается действующими актами, признанием и правилами изменения границ. Культурное родство также не означает единой политической воли у миллионов людей.',
          ],
          [
            'A historical frame becomes meaningful when it identifies the period, territory, institution, and type of link. Inclusion within one empire, Union republic system, or economy are different facts with different implications. “Always together” and “always separate” erase shifting borders, regional diversity, and changing political identity. They sound explanatory but fail under precise periodisation.',
            'Present state rights do not follow from counting centuries of common history. Otherwise most global borders could be permanently challenged by competing historical maps. History explains claims, memory, and rhetoric; legal status comes from operative acts, recognition, and rules for changing borders. Cultural kinship also does not create one political will among millions of people.',
          ],
          [
            'Історична рамка стає змістовною, коли названі період, територія, інституція й тип зв’язку. Перебування земель в одній імперії, союзній системі чи економіці — різні факти з різними наслідками. Формули «завжди разом» і «завжди окремо» стирають зміну кордонів, неоднорідність регіонів та еволюцію політичної ідентичності. Вони створюють відчуття пояснення, але не витримують точної періодизації.',
            'Сучасні права держави не випливають із підрахунку століть спільного минулого. Інакше більшість кордонів світу можна було б постійно оскаржувати конкуруючими історичними картами. Історія пояснює претензії, пам’ять і риторику; правовий статус визначають чинні акти, визнання й правила зміни кордонів. Культурна спорідненість також не створює єдиної політичної волі мільйонів людей.',
          ],
        ),
      },
      {
        title: L('От советского пространства к отдельным государствам', 'From Soviet space to separate states', 'Від радянського простору до окремих держав'),
        paragraphs: P(
          [
            '«Передача Крымской области в УССР» от 19 февраля 1954 года показывает, как территориальные решения принимались внутри единой советской системы. «Декларация о суверенитете Украины» от 16 июля 1990 года фиксирует уже иной политико-правовой курс. Эти статьи связаны исторически, но поздний документ нельзя свести к исправлению или продолжению раннего административного акта.',
            '«Распад СССР» от 26 декабря 1991 года обозначает прекращение общего союзного государства и отдельное международное существование бывших республик. «Крымский референдум и аннексия» от 16 марта 2014 года показывает, как советская история вновь стала политическим обоснованием территориальной претензии. Контекст объясняет язык спора, но не заменяет проверку силы, процедуры и признания после 1991 года.',
          ],
          [
            '“Transfer of Crimea to the Ukrainian SSR” of 19 February 1954 shows territorial decisions inside a common Soviet system. The “Declaration of State Sovereignty of Ukraine” of 16 July 1990 records a different legal and political course. The articles are historically connected, but the later document cannot be reduced to a correction or continuation of the earlier administrative act.',
            '“USSR dissolution” of 26 December 1991 marks the end of the Union state and separate international existence of former republics. “Crimean referendum and annexation” of 16 March 2014 shows Soviet history returning as political support for a territorial claim. Context explains the dispute’s language but cannot replace analysis of force, procedure, and recognition after 1991.',
          ],
          [
            '«Передача Кримської області до УРСР» від 19 лютого 1954 року показує, як територіальні рішення ухвалювалися в спільній радянській системі. «Декларація про державний суверенітет України» від 16 липня 1990 року фіксує вже інший політико-правовий курс. Статті історично пов’язані, але пізніший документ не можна звести до виправлення чи продовження раннього адміністративного акта.',
            '«Розпад СРСР» від 26 грудня 1991 року позначає припинення спільної союзної держави та окреме міжнародне існування колишніх республік. «Кримський референдум і анексія» від 16 березня 2014 року показує повернення радянської історії як політичного обґрунтування територіальної претензії. Контекст пояснює мову спору, але не замінює перевірки сили, процедури та визнання після 1991 року.',
          ],
        ),
      },
      {
        title: L('Как читать акты, а не исторические лозунги', 'Reading acts rather than historical slogans', 'Як читати акти, а не історичні гасла'),
        paragraphs: P(
          [
            'Акт независимости Украины и решение о всеукраинском референдуме устанавливают конкретный юридический процесс 1991 года. Запись ООН о государствах-членах показывает последующее международное положение. Эти документы не утверждают, что вся прежняя общая история исчезла; они устанавливают современную форму государственности. Точно так же российское продолжение членства СССР в ООН не восстанавливает союзную власть над другими республиками.',
            'Исторические документы нужно читать в их времени и компетенции. Указ 1954 года отвечает на вопрос о советской административной передаче, а не о законности применения силы в 2014 году. Будапештский меморандум 1994 года отвечает на вопрос о записанных заверениях независимой Украине, а не о культурной дистанции между обществами. Нельзя заставлять один источник доказывать то, чего он не регулирует.',
          ],
          [
            'Ukraine’s Independence Act and the resolution on the nationwide referendum establish a concrete legal process in 1991. UN member-state records show the resulting international position. The documents do not say that common history disappeared; they establish modern state form. Likewise, Russia’s continuation of the USSR’s UN membership does not restore Union authority over other republics.',
            'Historical documents must be read within their time and competence. The 1954 decree addresses a Soviet administrative transfer, not the legality of force in 2014. The 1994 Budapest Memorandum addresses recorded assurances to independent Ukraine, not cultural distance between societies. A source should not be made to prove a proposition it does not regulate.',
          ],
          [
            'Акт незалежності України та постанова про всеукраїнський референдум встановлюють конкретний правовий процес 1991 року. Записи ООН про держави-члени показують наступне міжнародне становище. Документи не кажуть, що спільна історія зникла; вони визначають сучасну форму державності. Так само продовження Росією членства СРСР в ООН не відновлює союзної влади над іншими республіками.',
            'Історичні документи треба читати в їхньому часі й компетенції. Указ 1954 року відповідає на питання про радянську адміністративну передачу, а не про законність сили 2014 року. Будапештський меморандум 1994 року стосується записаних запевнень незалежній Україні, а не культурної відстані між суспільствами. Не можна змушувати джерело доводити те, чого воно не регулює.',
          ],
        ),
      },
      {
        title: L('Связанность без права на поглощение', 'Connectedness without a right of absorption', 'Пов’язаність без права на поглинання'),
        paragraphs: P(
          [
            'Сторонники единой исторической рамки справедливо напоминают о переплетении обществ и искусственности слишком чистых национальных историй. Но из этого не следует право одного государства определять внешнюю и внутреннюю политику другого. Сторонники полного разрыва справедливо подчёркивают отдельную государственность, но рискуют игнорировать реальные смешанные биографии, региональные различия и многослойную память.',
            'Предел статьи состоит в отказе использовать историю как готовый судебный акт. Она не решает, какая идентичность «настоящая», и не распределяет коллективную вину между народами. Историческое знание полезно, когда делает политические формулы точнее и показывает происхождение взаимных страхов. Современное решение о границах, безопасности и сотрудничестве всё равно должно опираться на свободную волю, действующее право и проверяемые соглашения.',
          ],
          [
            'Advocates of a common historical frame rightly recall intertwined societies and the artificial neatness of some national narratives. That does not grant one state authority over another’s domestic or foreign policy. Advocates of complete separation rightly stress distinct statehood but risk ignoring mixed biographies, regional variation, and layered memory.',
            'This article refuses to use history as a ready-made judgment. It does not decide which identity is “authentic” or distribute collective guilt between peoples. Historical knowledge is useful when it makes political formulas more precise and explains fears. Present decisions on borders, security, and cooperation must still rest on free will, operative law, and verifiable agreements.',
          ],
          [
            'Прихильники спільної історичної рамки слушно нагадують про переплетення суспільств і штучну чистоту деяких національних наративів. Але це не дає одній державі влади над внутрішньою чи зовнішньою політикою іншої. Прихильники повного розриву слушно підкреслюють окрему державність, але ризикують ігнорувати змішані біографії, регіональні відмінності та багатошарову пам’ять.',
            'Стаття відмовляється використовувати історію як готовий вирок. Вона не визначає «справжню» ідентичність і не розподіляє колективну вину між народами. Історичне знання корисне, коли уточнює політичні формули й пояснює походження страхів. Сучасні рішення про кордони, безпеку та співпрацю однаково мають спиратися на вільну волю, чинне право й перевірювані угоди.',
          ],
        ),
      },
    ],
  },

  'concept-population-consent': {
    lead: L(
      'Воля населения имеет политическое и правовое значение, но её нельзя измерить одним символическим эпизодом или автоматически превратить в право изменить границу. Необходимо установить, кто образует соответствующее сообщество, какой вопрос был поставлен, могла ли позиция выражаться свободно, какие правила действовали и как результат соотносится с правами остальных граждан и территориальной целостностью государства. В российско-украинском контексте особенно важно не смешивать общенациональное решение 1991 года с голосованиями на территориях под внешним военным контролем.',
      'Popular will has political and legal significance, but one symbolic episode cannot measure it or automatically create a right to alter a border. Analysis must identify the relevant community, the question asked, freedom of expression, applicable rules, and how the result relates to other citizens’ rights and state territorial integrity. In the Russia–Ukraine context it is especially important not to equate the nationwide decision of 1991 with votes held in territories under external military control.',
      'Воля населення має політичне й правове значення, але її не можна виміряти одним символічним епізодом або автоматично перетворити на право змінити кордон. Треба встановити відповідну спільноту, поставлене питання, свободу висловлення, чинні правила та співвідношення результату з правами інших громадян і територіальною цілісністю держави. У російсько-українському контексті особливо важливо не прирівнювати загальнонаціональне рішення 1991 року до голосувань на територіях під зовнішнім військовим контролем.',
    ),
    sections: [
      {
        title: L('Чья воля и в какой процедуре', 'Whose will, expressed through which procedure', 'Чия воля й у якій процедурі'),
        paragraphs: P(
          [
            'Порог убедительного волеизъявления включает определённый состав участников, ясный вопрос, равный доступ к кампании, тайну и безопасность голосования, независимое администрирование и возможность оспаривания. Даже большой заявленный процент не отвечает на эти вопросы. Свободу процедуры нельзя свести к поиску видеозаписи, где конкретного избирателя непосредственно заставляют голосовать: военный контроль, устройство кампании, состав вариантов и независимость организаторов воздействуют на процесс и без такого кадра. Самоидентификация может меняться со временем и быть множественной; язык, происхождение или место проживания не позволяют заранее приписать человеку одну политическую позицию.',
            'Общенациональный выбор и региональное предпочтение имеют разный предмет. Решение о создании независимого государства принималось всем населением соответствующей республики, тогда как отделение части территории затрагивает права более широкого гражданского сообщества и международную границу. Это не делает местный голос несущественным, но требует согласовать его с конституционной процедурой, отсутствием силы и общими правилами самоопределения.',
          ],
          [
            'A persuasive expression of will requires a defined electorate, clear question, equal campaign access, secrecy and safety, independent administration, and avenues for challenge. A large announced percentage answers none of these questions. Procedural freedom cannot be reduced to finding footage of a particular voter being forced at gunpoint: military control, campaign conditions, available options, and organisers’ independence can shape a process without such an image. Self-identification can change and be multiple; language, origin, or residence does not predetermine one political preference.',
            'A nationwide choice and a regional preference have different objects. Creating an independent state was decided by the population of the republic as a whole, while detaching a territory affects the rights of a broader citizenry and an international border. Local opinion remains relevant, but it must be reconciled with constitutional procedure, absence of force, and the general framework of self-determination.',
          ],
          [
            'Переконливе волевиявлення потребує визначеного складу учасників, ясного питання, рівного доступу до кампанії, таємниці й безпеки голосування, незалежного адміністрування та оскарження. Великий оголошений відсоток сам не відповідає на ці питання. Свободу процедури не можна зводити до пошуку відео, де конкретного виборця безпосередньо змушують голосувати під дулом: військовий контроль, умови кампанії, набір варіантів і незалежність організаторів впливають на процес і без такого кадру. Самоідентифікація може змінюватися й бути множинною; мова, походження чи місце проживання не визначають наперед одну політичну позицію.',
            'Загальнонаціональний вибір і регіональна перевага мають різний предмет. Створення незалежної держави вирішувало все населення республіки, тоді як відокремлення території зачіпає права ширшої спільноти громадян і міжнародний кордон. Місцева думка важлива, але її треба узгоджувати з конституційною процедурою, відсутністю сили й загальною рамкою самовизначення.',
          ],
        ),
      },
      {
        title: L('1991, Крым и аннексии 2022 года', '1991, Crimea, and the 2022 annexations', '1991 рік, Крим та анексії 2022 року'),
        paragraphs: P(
          [
            '«Распад СССР» от 26 декабря 1991 года нужно читать рядом с актом независимости и всеукраинским референдумом: они показывают общереспубликанскую процедуру, на которой строилась отдельная государственность. «Крымский референдум и аннексия» от 16 марта 2014 года возник в иной правовой и фактической обстановке, после появления российских сил и вне согласованной украинской конституционной процедуры.',
            '«Заявленная аннексия четырёх регионов» от 30 сентября 2022 года последовала после голосований во время полномасштабной войны и контроля территорий российскими силами. Сравнение не сводится к разнице в процентах. Нужно учитывать масштаб сообщества, военную среду, перемещение населения, доступ к альтернативной позиции, компетенцию организаторов и международную реакцию на изменение статуса.',
          ],
          [
            '“USSR dissolution” of 26 December 1991 should be read with the Independence Act and nationwide referendum: they show the republic-wide procedure underlying separate statehood. “Crimean referendum and annexation” of 16 March 2014 took place in a different legal and factual setting, after Russian forces appeared and outside the agreed Ukrainian constitutional process.',
            '“Claimed annexation of four regions” of 30 September 2022 followed votes during full-scale war and Russian military control. The comparison is not about percentages alone. It requires the scale of the community, military environment, population displacement, access to alternatives, organisers’ authority, and international response to the status claim.',
          ],
          [
            '«Розпад СРСР» від 26 грудня 1991 року слід читати поруч з Актом незалежності та всеукраїнським референдумом: вони показують загальнореспубліканську процедуру, на якій постала окрема державність. «Кримський референдум і анексія» від 16 березня 2014 року відбулися в іншому правовому й фактичному середовищі, після появи російських сил і поза погодженою українською конституційною процедурою.',
            '«Заявлена анексія чотирьох регіонів» від 30 вересня 2022 року настала після голосувань під час повномасштабної війни та російського військового контролю. Порівняння не зводиться до відсотків. Важливі масштаб спільноти, воєнне середовище, переміщення населення, доступ до альтернатив, повноваження організаторів і міжнародна реакція на зміну статусу.',
          ],
        ),
      },
      {
        title: L('Что устанавливают акты о референдумах', 'What referendum instruments establish', 'Що встановлюють акти про референдуми'),
        paragraphs: P(
          [
            'Официальное постановление о всеукраинском референдуме устанавливает вопрос, территорию проведения и связь голосования с Актом независимости. Оно не доказывает, что каждый гражданин имел одинаковую мотивацию, но фиксирует институциональный способ принятия общего решения. Результат следует читать как политико-правовой мандат на независимость, а не как опрос о каждой будущей внешнеполитической мере.',
            'Резолюции Генеральной Ассамблеи по Крыму и территориям, заявленным аннексированными в 2022 году, не утверждают, что местная идентичность не существует. Они оценивают организованные голосования в условиях, которые не позволяют считать их действительным основанием изменения международного статуса, и призывают к непризнанию результата. Документы устанавливают международную реакцию; они не заменяют социологическое изучение взглядов жителей.',
          ],
          [
            'The official resolution on Ukraine’s nationwide referendum establishes the question, geographic scope, and relationship to the Independence Act. It cannot show that every voter shared one motive, but it records an institutional method for a common decision. The result is a legal-political mandate for independence, not a poll on every future foreign-policy choice.',
            'General Assembly resolutions on Crimea and the territories claimed as annexed in 2022 do not deny local identities. They assess votes organised under conditions that could not validly change international status and call for non-recognition. The instruments establish the international response; they do not replace sociological study of residents’ views.',
          ],
          [
            'Офіційна постанова про всеукраїнський референдум встановлює питання, територію проведення та зв’язок голосування з Актом незалежності. Вона не доводить однакової мотивації кожного громадянина, але фіксує інституційний спосіб спільного рішення. Результат слід читати як політико-правовий мандат на незалежність, а не як опитування щодо кожного майбутнього зовнішньополітичного кроку.',
            'Резолюції Генеральної Асамблеї щодо Криму й територій, заявлених анексованими 2022 року, не заперечують місцевих ідентичностей. Вони оцінюють голосування в умовах, що не дозволяють чинно змінити міжнародний статус, і закликають до невизнання. Документи встановлюють міжнародну реакцію, але не замінюють соціологічного вивчення поглядів мешканців.',
          ],
        ),
      },
      {
        title: L('Между формальным правом и живой идентичностью', 'Between formal law and lived identity', 'Між формальним правом і живою ідентичністю'),
        paragraphs: P(
          [
            'Одна позиция делает международно признанную границу единственным значимым фактом и рискует не слышать устойчивые региональные предпочтения. Другая превращает заявленную самоидентификацию в немедленное право на отделение и игнорирует принуждение, права несогласных и общий конституционный порядок. Обеим необходим один стандарт процедуры: свобода выбора должна быть доказана, а не предположена из удобного результата.',
            'Статья не устанавливает истинные взгляды каждого региона и не объявляет любой референдум окончательным решением сложного конфликта. Её вывод методический: мнение населения важно, но его правовой эффект зависит от вопроса, процедуры и контекста силы. Уважение к идентичности может требовать автономии, языковых гарантий или политического участия, не обязательно изменения международной границы; конкретное средство нуждается в отдельном обосновании.',
          ],
          [
            'One position treats the internationally recognised border as the only relevant fact and risks ignoring durable regional preferences. Another turns asserted self-identification into an immediate right to secede, ignoring coercion, dissenters’ rights, and the constitutional order. Both need one procedural standard: free choice must be demonstrated rather than inferred from a convenient outcome.',
            'This article does not establish every region’s true views or declare any referendum a final solution to conflict. Its conclusion is methodological: popular opinion matters, but its legal effect depends on question, process, and the context of force. Respect for identity may call for autonomy, language guarantees, or participation rather than a changed international border; the particular remedy requires separate justification.',
          ],
          [
            'Одна позиція робить міжнародно визнаний кордон єдиним значущим фактом і ризикує не почути сталих регіональних уподобань. Інша перетворює заявлену самоідентифікацію на негайне право відокремитися, ігноруючи примус, права незгодних і конституційний лад. Обом потрібен однаковий процедурний стандарт: свободу вибору треба довести, а не припустити зі зручного результату.',
            'Стаття не встановлює справжні погляди кожного регіону й не оголошує будь-який референдум остаточним розв’язанням конфлікту. Її висновок методичний: думка населення важлива, але її правовий ефект залежить від питання, процедури та контексту сили. Повага до ідентичності може вимагати автономії, мовних гарантій або участі, а не обов’язково зміни міжнародного кордону; засіб потребує окремого обґрунтування.',
          ],
        ),
      },
    ],
  },

  'concept-state-continuity': {
    lead: L(
      'Правопродолжение объясняет, почему после радикальной смены режима, территории или названия государство может сохранять международные права и обязанности. Оно не означает сохранения прежней идеологии, экономической системы или власти над всеми частями распавшегося образования. После прекращения СССР Россия продолжила его членство в ООН и часть международных обязательств, тогда как Украина и другие республики стали отдельными государствами. Смешение этих двух процессов порождает ошибочный вывод, будто международная непрерывность России восстановила союзные полномочия над соседями.',
      'State continuity explains how international rights and obligations may survive radical changes of regime, territory, or name. It does not preserve the former ideology, economic system, or authority over every part of a dissolved entity. After the USSR ended, Russia continued its UN membership and parts of its international obligations, while Ukraine and other republics became separate states. Conflating these processes produces the false conclusion that Russia’s international continuity restored Union powers over its neighbours.',
      'Правопродовження пояснює, чому після радикальної зміни режиму, території чи назви держава може зберігати міжнародні права й обов’язки. Воно не означає збереження колишньої ідеології, економічної системи або влади над усіма частинами розпалої структури. Після припинення СРСР Росія продовжила його членство в ООН і частину міжнародних зобов’язань, тоді як Україна та інші республіки стали окремими державами. Змішування цих процесів породжує хибний висновок, ніби міжнародна безперервність Росії відновила союзні повноваження над сусідами.',
    ),
    sections: [
      {
        title: L('Непрерывность без сохранения прежнего строя', 'Continuity without preserving the former order', 'Безперервність без збереження колишнього ладу'),
        paragraphs: P(
          [
            'Порог вопроса возникает, когда меняется государственное устройство, но международное сообщество продолжает обращаться с одним субъектом как с носителем прежних прав и обязанностей. Проверяются официальные уведомления, практика организаций, договорные позиции и признание других государств. Совпадение территории, населения или институтов имеет значение, но ни один признак сам не устанавливает полный объём продолжения.',
            'Правопродолжение отличается от правопреемства нескольких новых государств и от политической ностальгии по прежнему союзу. Оно может относиться к членству, долгу, собственности или договору по-разному. Продолжение места в международной организации не возвращает внутреннюю конституцию исчезнувшего государства и не делает новую власть обязанной воспроизводить его идеологию. Объём каждого последствия нужно показывать отдельно.',
          ],
          [
            'The issue arises when state organisation changes but the international community continues to treat one subject as carrying former rights and obligations. Official notifications, organisational practice, treaty positions, and recognition by other states must be examined. Territory, population, and institutional continuity matter, but no single factor establishes the full scope.',
            'Continuity differs from succession among several new states and from political nostalgia for a former union. It can operate differently for membership, debt, property, or treaties. Continuing a seat in an international organisation does not restore the dissolved state’s domestic constitution or require the new government to reproduce its ideology. Each consequence must be demonstrated separately.',
          ],
          [
            'Питання виникає, коли державний устрій змінюється, але міжнародна спільнота продовжує ставитися до одного суб’єкта як носія попередніх прав та обов’язків. Треба перевіряти офіційні повідомлення, практику організацій, договірні позиції й визнання інших держав. Територія, населення та інституційна спадковість важливі, але жодна ознака сама не визначає повного обсягу продовження.',
            'Правопродовження відрізняється від правонаступництва кількох нових держав і політичної ностальгії за колишнім союзом. Воно може по-різному стосуватися членства, боргу, майна чи договорів. Продовження місця в міжнародній організації не відновлює внутрішню конституцію зниклої держави й не вимагає від нової влади відтворювати її ідеологію. Кожен наслідок треба показувати окремо.',
          ],
        ),
      },
      {
        title: L('Декабрь 1991 года и последующие границы', 'December 1991 and the borders that followed', 'Грудень 1991 року й наступні кордони'),
        paragraphs: P(
          [
            '«Распад СССР и продолжение обязательств Россией» от 26 декабря 1991 года соединяет два факта: прекращение союзного государства и уведомление России о продолжении членства СССР в ООН. «Декларация о суверенитете Украины» от 16 июля 1990 года и акт независимости показывают отдельную траекторию Украины. Эти процессы совместимы: продолжение одного международного места не отменяет появление других признанных субъектов.',
            '«Будапештский меморандум» от 5 декабря 1994 года уже обращается к Украине как к независимому государству с существующими границами. «Крымский референдум и аннексия» от 16 марта 2014 года не может быть объяснён восстановлением советского правопорядка через российскую непрерывность. После 1991 года территориальные претензии оцениваются по отношениям между отдельными государствами, запрету силы и согласованным правилам изменения границ.',
          ],
          [
            '“USSR dissolution and Russia’s continuity” of 26 December 1991 combines two facts: termination of the Union state and Russia’s notice continuing the USSR’s UN membership. The “Declaration of State Sovereignty of Ukraine” of 16 July 1990 and the Independence Act show Ukraine’s separate path. The processes coexist: continuation of one international seat does not cancel other recognised subjects.',
            'The “Budapest Memorandum” of 5 December 1994 already addresses Ukraine as an independent state with existing borders. “Crimean referendum and annexation” of 16 March 2014 cannot be explained as restoration of Soviet law through Russian continuity. After 1991, territorial claims are assessed between separate states through the prohibition on force and agreed border-change rules.',
          ],
          [
            '«Розпад СРСР і продовження зобов’язань Росією» від 26 грудня 1991 року поєднує два факти: припинення союзної держави та повідомлення Росії про продовження членства СРСР в ООН. «Декларація про державний суверенітет України» від 16 липня 1990 року й Акт незалежності показують окремий шлях України. Ці процеси сумісні: продовження одного міжнародного місця не скасовує появи інших визнаних суб’єктів.',
            '«Будапештський меморандум» від 5 грудня 1994 року вже звертається до України як незалежної держави з чинними кордонами. «Кримський референдум і анексію» від 16 березня 2014 року не можна пояснити відновленням радянського права через російську безперервність. Після 1991 року територіальні претензії оцінюють між окремими державами за забороною сили та погодженими правилами зміни кордонів.',
          ],
        ),
      },
      {
        title: L('Как читать уведомление России в ООН', 'How to read Russia’s UN notification', 'Як читати повідомлення Росії в ООН'),
        paragraphs: P(
          [
            'Официальная запись ООН показывает, что Россия продолжила членство СССР, включая место в Совете Безопасности, и приняла ответственность по соответствующим правам и обязательствам. Документ следует читать по его предмету: международное представительство и ответственность. В нём нет формулы о продолжении территории всего СССР или подчинении новых независимых государств российской конституционной власти.',
            'Решения российских органов 1996 года о денонсации союзного договора создали внутреннюю политико-правовую коллизию, но не восстановили СССР в международной практике. Их буквальный текст и последствие нужно различать. Отсутствие новой процедуры приёма России в ООН подтверждает продолжение членства, однако не доказывает неизменность каждого советского договора и не решает автоматически вопросы собственности, долга и границ.',
          ],
          [
            'The official UN record shows Russia continuing USSR membership, including the Security Council seat, and accepting responsibility for related rights and obligations. It should be read within that subject: international representation and responsibility. It contains no continuation of the USSR’s entire territory or subordination of newly independent states to Russian constitutional authority.',
            'Russian decisions in 1996 concerning denunciation of the Union treaty created a domestic legal-political controversy but did not restore the USSR in international practice. Their wording and effect must be distinguished. Russia’s lack of a new UN admission procedure supports membership continuity, but does not prove every Soviet treaty unchanged or automatically settle property, debt, and border questions.',
          ],
          [
            'Офіційний запис ООН показує, що Росія продовжила членство СРСР, включно з місцем у Раді Безпеки, і прийняла відповідальність за відповідні права та обов’язки. Документ треба читати за його предметом: міжнародне представництво й відповідальність. У ньому немає продовження всієї території СРСР або підпорядкування нових незалежних держав російській конституційній владі.',
            'Російські рішення 1996 року щодо денонсації союзного договору створили внутрішню політико-правову колізію, але не відновили СРСР у міжнародній практиці. Їхні формулювання й наслідки треба розрізняти. Відсутність нової процедури вступу Росії до ООН підтверджує продовження членства, але не доводить незмінність кожного радянського договору й не вирішує автоматично питання майна, боргу та кордонів.',
          ],
        ),
      },
      {
        title: L('Наследник, продолжатель или новое государство', 'Successor, continuer, or new state', 'Наступник, продовжувач чи нова держава'),
        paragraphs: P(
          [
            'Одна трактовка называет Россию обычным правопреемником наряду с другими республиками и оспаривает особый характер продолжения. Другая превращает продолжение в полное тождество с СССР во всех отношениях. Практика ООН поддерживает непрерывность конкретного международного членства, но дальнейшие вопросы требуют предметного анализа. Юридические ярлыки не должны расширять последствие сверх подтверждённой практики.',
            'Статья не оценивает справедливость распределения советских активов и не решает спор о процедуре распада. Её вывод уже: правопродолжение совместимо с радикальной сменой режима и отдельной государственностью бывших республик. Поэтому идеологическое отличие современной России от СССР не отменяет принятые международные обязанности, а советское прошлое Украины не уменьшает её суверенитет после признанной независимости.',
          ],
          [
            'One view treats Russia as an ordinary successor alongside other republics and disputes a special continuation. Another expands continuation into complete identity with the USSR for all purposes. UN practice supports continuity of a particular international membership, while other issues require subject-specific analysis. Labels should not enlarge consequences beyond demonstrated practice.',
            'This article does not judge distribution of Soviet assets or settle the dissolution procedure. Its narrower conclusion is that continuity coexists with radical regime change and separate statehood of former republics. Modern Russia’s ideological difference from the USSR does not erase assumed international duties, while Ukraine’s Soviet past does not diminish its sovereignty after recognised independence.',
          ],
          [
            'Одне бачення вважає Росію звичайним правонаступником поряд з іншими республіками й заперечує особливе продовження. Інше розширює продовження до повної тотожності із СРСР у всіх питаннях. Практика ООН підтримує безперервність конкретного міжнародного членства, а інші питання потребують предметного аналізу. Юридичні назви не мають розширювати наслідки понад доведену практику.',
            'Стаття не оцінює розподіл радянських активів і не вирішує спір про процедуру розпаду. Її вужчий висновок: правопродовження сумісне з радикальною зміною режиму й окремою державністю колишніх республік. Ідеологічна відмінність сучасної Росії від СРСР не стирає прийнятих міжнародних обов’язків, а радянське минуле України не зменшує її суверенітету після визнаної незалежності.',
          ],
        ),
      },
    ],
  },

  'concept-sovereignty': {
    lead: L(
      'Суверенитет означает способность государства самостоятельно принимать решения внутри международного права и равноправно участвовать во внешних отношениях. Это не абсолютная свобода от договоров, ответственности или прав человека: государство связывает себя обязательствами именно как суверенный участник. Для Украины принцип соединяет решения 1990–1991 годов о собственной государственности, Будапештские заверения 1994 года, свободу выбирать политику безопасности и защиту от внешнего принуждения. Поддержка союзников не передаёт им украинский суверенитет, как историческая близость не передаёт его России.',
      'Sovereignty is a state’s capacity to decide independently within international law and participate as an equal in external relations. It is not absolute freedom from treaties, responsibility, or human rights: a state binds itself precisely as a sovereign participant. For Ukraine it links the 1990–1991 statehood decisions, the 1994 Budapest assurances, freedom to choose security policy, and protection from external coercion. Allied support does not transfer Ukrainian sovereignty to allies, just as historical affinity does not transfer it to Russia.',
      'Суверенітет означає здатність держави самостійно ухвалювати рішення в межах міжнародного права й рівноправно брати участь у зовнішніх відносинах. Це не абсолютна свобода від договорів, відповідальності чи прав людини: держава зв’язує себе зобов’язаннями саме як суверенний учасник. Для України принцип поєднує рішення 1990–1991 років про власну державність, Будапештські запевнення 1994 року, свободу обирати політику безпеки та захист від зовнішнього примусу. Підтримка союзників не передає їм український суверенітет, як історична близькість не передає його Росії.',
    ),
    sections: [
      {
        title: L('Самостоятельность в системе правил', 'Independence within a system of rules', 'Самостійність у системі правил'),
        paragraphs: P(
          [
            'Суверенитет применяется, когда определяется, кто вправе говорить и решать от имени государства, распоряжаться его территорией и заключать международные обязательства. Внешнее давление становится правовой проблемой, если оно переходит в запрещённую угрозу силой, применение силы или вмешательство в защищённую сферу решений. Обычная дипломатия, критика и добровольно принятая договорная обязанность не равны утрате суверенитета.',
            'Внутренняя способность государства может быть слабой, власть — сменяться, а решения — зависеть от помощи партнёров; это не означает автоматического исчезновения международной правосубъектности. Одновременно ссылка на суверенитет не оправдывает нарушение собственных обязательств. Равный стандарт требует уважать самостоятельность и Украины, и России, а претензии каждой стороны проверять по тем же нормам силы, договоров и ответственности.',
          ],
          [
            'Sovereignty applies when identifying who may speak and decide for a state, dispose of territory, and undertake international obligations. External pressure becomes a legal issue if it crosses into prohibited threats or force or intervention in a protected sphere of decision. Ordinary diplomacy, criticism, and a voluntarily assumed treaty duty are not losses of sovereignty.',
            'Domestic capacity may be weak, governments may change, and decisions may rely on partner assistance without international personality disappearing. At the same time, sovereignty does not excuse breach of obligations. An equal standard respects both Ukrainian and Russian independence while testing each side’s claims under the same rules of force, treaties, and responsibility.',
          ],
          [
            'Суверенітет застосовується, коли визначають, хто може говорити й вирішувати від імені держави, розпоряджатися її територією та брати міжнародні зобов’язання. Зовнішній тиск стає правовою проблемою, якщо переходить у заборонену погрозу силою, силу або втручання в захищену сферу рішень. Звичайна дипломатія, критика й добровільний договірний обов’язок не дорівнюють втраті суверенітету.',
            'Внутрішня спроможність може бути слабкою, уряди — змінюватися, а рішення — залежати від допомоги партнерів без зникнення міжнародної правосуб’єктності. Водночас суверенітет не виправдовує порушення зобов’язань. Рівний стандарт поважає самостійність України й Росії та перевіряє претензії обох за однаковими нормами сили, договорів і відповідальності.',
          ],
        ),
      },
      {
        title: L('Украинский суверенитет в ключевых датах', 'Ukrainian sovereignty at key dates', 'Український суверенітет у ключових датах'),
        paragraphs: P(
          [
            '«Декларация о суверенитете Украины» от 16 июля 1990 года формулирует верховенство, самостоятельность и будущий курс республики. «Распад СССР» от 26 декабря 1991 года закрепляет международную обстановку отдельных государств. «Будапештский меморандум» от 5 декабря 1994 года уже подтверждает уважение независимости, суверенитета и существующих границ Украины в связи с её ядерным разоружением.',
            '«Крымский референдум и аннексия» от 16 марта 2014 года ставит вопрос о внешнем изменении территориального статуса. «Полномасштабное вторжение России» от 24 февраля 2022 года затрагивает ядро политической независимости, поскольку вооружённая сила используется против другого государства. Внешняя военная и финансовая поддержка Украины после вторжения требует анализа условий, но сама не превращает поддерживаемое государство в несамостоятельное.',
          ],
          [
            'The “Declaration of State Sovereignty of Ukraine” of 16 July 1990 states supremacy, independence, and the republic’s future course. “USSR dissolution” of 26 December 1991 establishes the international setting of separate states. The “Budapest Memorandum” of 5 December 1994 reaffirms Ukraine’s independence, sovereignty, and existing borders in connection with nuclear disarmament.',
            '“Crimean referendum and annexation” of 16 March 2014 raises external alteration of territorial status. “Russia’s full-scale invasion” of 24 February 2022 touches the core of political independence through armed force against another state. Conditions attached to foreign military and financial support merit analysis, but support itself does not make the recipient non-sovereign.',
          ],
          [
            '«Декларація про державний суверенітет України» від 16 липня 1990 року формулює верховенство, самостійність і майбутній курс республіки. «Розпад СРСР» від 26 грудня 1991 року закріплює міжнародне середовище окремих держав. «Будапештський меморандум» від 5 грудня 1994 року підтверджує повагу до незалежності, суверенітету й чинних кордонів України у зв’язку з ядерним роззброєнням.',
            '«Кримський референдум і анексія» від 16 березня 2014 року ставить питання про зовнішню зміну територіального статусу. «Повномасштабне вторгнення Росії» від 24 лютого 2022 року зачіпає ядро політичної незалежності через збройну силу проти іншої держави. Умови зовнішньої військової й фінансової допомоги Україні слід аналізувати, але сама допомога не робить державу несамостійною.',
          ],
        ),
      },
      {
        title: L('Как читать декларацию и меморандум', 'Reading the declaration and memorandum', 'Як читати декларацію та меморандум'),
        paragraphs: P(
          [
            'Декларация 1990 года буквально провозглашает государственный суверенитет и содержит намерение в будущем стать нейтральным государством вне военных блоков, а также три неядерных принципа. Намерение и принцип суверенитета нужно различать. Текст не говорит, что самостоятельность Украины признаётся только при вечном сохранении нейтралитета, и не устанавливает для другого государства право принудительно обеспечивать выбранный тогда курс.',
            'Будапештский меморандум фиксирует конкретные заверения уважать независимость, суверенитет и существующие границы. Отсутствие автоматического военного механизма не удаляет эти положения, а их наличие не превращает меморандум в договор коллективной обороны. Документ устанавливает предмет обещаний; оценка нарушения требует сопоставить их с последующими действиями, тогда как вопрос принудительного исполнения рассматривается отдельно.',
          ],
          [
            'The 1990 Declaration literally proclaims state sovereignty and states an intention to become neutral and outside military blocs, alongside three non-nuclear principles. Intention and sovereignty must be distinguished. The text does not condition Ukraine’s independence on permanent neutrality or authorise another state to enforce that course coercively.',
            'The Budapest Memorandum records specific assurances to respect independence, sovereignty, and existing borders. The absence of an automatic military mechanism does not erase these provisions, while their presence does not turn it into a collective-defence treaty. The document identifies the promises; alleged breach is assessed against later conduct, while enforcement remains a separate question.',
          ],
          [
            'Декларація 1990 року буквально проголошує державний суверенітет і містить намір у майбутньому стати нейтральною державою поза військовими блоками, а також три без’ядерні принципи. Намір і суверенітет треба розрізняти. Текст не ставить самостійність України в залежність від вічного нейтралітету й не дає іншій державі права примусово забезпечувати обраний тоді курс.',
            'Будапештський меморандум фіксує конкретні запевнення поважати незалежність, суверенітет і чинні кордони. Відсутність автоматичного військового механізму не стирає цих положень, а їхня наявність не робить документ договором колективної оборони. Текст визначає обіцянки; можливе порушення зіставляють із подальшими діями, тоді як примусове виконання є окремим питанням.',
          ],
        ),
      },
      {
        title: L('Влияние, зависимость и граница вывода', 'Influence, dependence, and the limit of inference', 'Вплив, залежність і межа висновку'),
        paragraphs: P(
          [
            'Одна трактовка считает глубокую зависимость от западной помощи доказательством утраты Украиной самостоятельности. Другая отказывается обсуждать, как условия помощи влияют на решения. Между ними важно различать влияние и передачу власти: совет, условие финансирования и координация могут сужать выбор, но юридический вывод об отсутствии суверенитета требует гораздо большего — фактического подчинения ключевых государственных решений внешнему субъекту.',
            'Суверенитет не доказывает мудрость каждого решения и не исключает внутренних кризисов легитимности. Он также не запрещает добровольное объединение полномочий в международных организациях. Предел статьи состоит в равном исходном признании государств самостоятельными, пока конкретные факты не показывают иное. Политическую критику внешней зависимости следует формулировать точно, не превращая её автоматически в отрицание украинской государственности или оправдание внешней силы.',
          ],
          [
            'One interpretation treats dependence on Western assistance as proof that Ukraine lost independence. Another refuses to examine how assistance conditions influence choices. Influence must be separated from transferred authority: advice, financing conditions, and coordination can narrow options, but a legal conclusion of lost sovereignty requires much more—effective subordination of central state decisions to an external actor.',
            'Sovereignty does not prove every decision wise or exclude domestic legitimacy crises, and it permits voluntary pooling of authority in organisations. The article begins from equal independence unless concrete facts show otherwise. Criticism of external dependence should be precise rather than automatically denying Ukrainian statehood or justifying foreign force.',
          ],
          [
            'Одне тлумачення вважає залежність від західної допомоги доказом втрати Україною самостійності. Інше відмовляється аналізувати вплив умов допомоги. Треба розділяти вплив і передачу влади: порада, умова фінансування та координація можуть звужувати вибір, але висновок про відсутність суверенітету потребує значно більшого — фактичного підпорядкування ключових державних рішень зовнішньому суб’єкту.',
            'Суверенітет не доводить мудрості кожного рішення й не виключає внутрішніх криз легітимності, а також дозволяє добровільне об’єднання повноважень в організаціях. Стаття виходить із рівної самостійності держав, доки конкретні факти не показують інше. Критику зовнішньої залежності слід формулювати точно, не перетворюючи її на заперечення української державності чи виправдання зовнішньої сили.',
          ],
        ),
      },
    ],
  },

  'concept-security-assurances': {
    lead: L(
      'Заверения безопасности занимают промежуточное место между общей политической декларацией и договором, который автоматически запускает коллективную военную помощь. Их содержание определяется не привычным переводом слова «гарантия», а конкретным текстом: что обещано уважать, от каких действий воздерживаться, когда консультироваться и какие механизмы предусмотрены. Будапештский меморандум 1994 года поэтому нельзя ни приравнивать к статье 5 НАТО, ни объявлять пустой бумагой. Он записал обязательные для оценки обещания Украине в связи с ядерным разоружением, но не создал автоматическую оборону.',
      'Security assurances lie between a general political declaration and a treaty automatically activating collective military assistance. Their content comes not from a familiar translation of “guarantee,” but from the text: what must be respected, which conduct is renounced, when consultation occurs, and what mechanisms exist. The 1994 Budapest Memorandum is therefore neither NATO Article 5 nor meaningless paper. It recorded promises to Ukraine relevant to nuclear disarmament without creating automatic defence.',
      'Запевнення безпеки містяться між загальною політичною декларацією та договором, що автоматично запускає колективну військову допомогу. Їхній зміст визначає не звичний переклад слова «гарантія», а конкретний текст: що треба поважати, від яких дій утримуватися, коли консультуватися та які механізми передбачені. Тому Будапештський меморандум 1994 року не є ані статтею 5 НАТО, ані порожнім папером. Він зафіксував обіцянки Україні у зв’язку з ядерним роззброєнням, але не створив автоматичної оборони.',
    ),
    sections: [
      {
        title: L('Обещание, обязанность и механизм реакции', 'Promise, obligation, and response mechanism', 'Обіцянка, обов’язок і механізм реакції'),
        paragraphs: P(
          [
            'Порог анализа требует разделить три вопроса. Первый — существует ли зафиксированное обязательство уважать определённое положение. Второй — что считается его нарушением. Третий — какое последствие или средство реакции прямо предусмотрено. Сильная обязанность может иметь слабый механизм принуждения; отсутствие автоматического военного ответа не делает само обещание несуществующим. И наоборот, политическая поддержка сверх текста не переписывает документ задним числом.',
            'Заверение оценивается по сторонам, формулировкам, обстоятельствам принятия и последующей практике. Связь с отказом Украины от ядерного оружия придаёт меморандуму особый политический вес, но не позволяет добавлять не записанную обязанность немедленно вступить в войну. Консультации, обращение к Совету Безопасности и уважение границ — разные элементы; каждый требует собственной проверки исполнения.',
          ],
          [
            'Analysis separates three questions: whether a recorded duty exists, what conduct breaches it, and which consequence or response is expressly provided. A strong substantive duty may have a weak enforcement mechanism; lack of automatic military response does not erase the promise. Conversely, later political support beyond the text does not rewrite the document retroactively.',
            'An assurance is assessed through parties, wording, circumstances, and later practice. Its connection to Ukraine’s nuclear disarmament gives the memorandum special political weight but cannot add an unwritten duty to enter war immediately. Consultation, recourse to the Security Council, and respect for borders are distinct elements requiring separate performance analysis.',
          ],
          [
            'Аналіз розділяє три питання: чи існує записаний обов’язок, яка дія його порушує і який наслідок або спосіб реакції прямо передбачено. Сильний змістовний обов’язок може мати слабкий механізм примусу; відсутність автоматичної військової відповіді не стирає обіцянки. І навпаки, пізніша політична підтримка понад текст не переписує документ заднім числом.',
            'Запевнення оцінюють за сторонами, формулюваннями, обставинами й наступною практикою. Зв’язок із ядерним роззброєнням України надає меморандуму особливої політичної ваги, але не додає неписаного обов’язку негайно вступити у війну. Консультації, звернення до Ради Безпеки та повага до кордонів — окремі елементи з окремою перевіркою виконання.',
          ],
        ),
      },
      {
        title: L('От неядерного курса к проверке 2022 года', 'From a non-nuclear course to the test of 2022', 'Від без’ядерного курсу до перевірки 2022 року'),
        paragraphs: P(
          [
            '«Декларация о суверенитете Украины» от 16 июля 1990 года содержит будущий нейтральный курс и три неядерных принципа. «Будапештский меморандум» от 5 декабря 1994 года относится уже к присоединению независимой Украины к Договору о нераспространении и записывает заверения России, США и Великобритании. Эти статьи показывают развитие решений, а не простой обмен одного документа на другой.',
            '«Мюнхенская речь о безопасности» от 19 февраля 2022 года фиксирует украинский призыв к консультациям по меморандуму. «Полномасштабное вторжение России» через пять дней стало прямой проверкой заверений об уважении независимости, суверенитета, границ и воздержании от силы. Реакция западных государств была значительной, но её нельзя описывать как исполнение автоматического пункта, которого в меморандуме нет.',
          ],
          [
            'The “Declaration of State Sovereignty of Ukraine” of 16 July 1990 states a future neutral course and three non-nuclear principles. The “Budapest Memorandum” of 5 December 1994 concerns independent Ukraine’s accession to the Non-Proliferation Treaty and records assurances by Russia, the United States, and the United Kingdom. The articles show developing decisions, not a simple exchange of one paper for another.',
            'The “Munich security speech” of 19 February 2022 records Ukraine’s call for consultations under the memorandum. “Russia’s full-scale invasion” five days later directly tested assurances concerning independence, sovereignty, borders, and force. Western reaction was substantial, but it cannot be described as execution of an automatic clause absent from the memorandum.',
          ],
          [
            '«Декларація про державний суверенітет України» від 16 липня 1990 року містить майбутній нейтральний курс і три без’ядерні принципи. «Будапештський меморандум» від 5 грудня 1994 року стосується приєднання незалежної України до Договору про нерозповсюдження та записує запевнення Росії, США й Великої Британії. Статті показують розвиток рішень, а не простий обмін одного паперу на інший.',
            '«Мюнхенська промова про безпеку» від 19 лютого 2022 року фіксує український заклик до консультацій за меморандумом. «Повномасштабне вторгнення Росії» через п’ять днів безпосередньо перевірило запевнення щодо незалежності, суверенітету, кордонів і сили. Західна реакція була значною, але її не можна називати виконанням автоматичного пункту, якого в меморандумі немає.',
          ],
        ),
      },
      {
        title: L('Буквальное содержание Будапештского меморандума', 'The Budapest Memorandum’s literal content', 'Буквальний зміст Будапештського меморандуму'),
        paragraphs: P(
          [
            'Официальный текст нужно читать по пунктам: уважение независимости, суверенитета и существующих границ; воздержание от угрозы силой или её применения; ограничения экономического принуждения; обращение за действием Совета Безопасности при определённых обстоятельствах; консультации. Перечень показывает содержательность документа, но не включает заранее назначенную военную операцию подписантов в случае нарушения.',
            'Регистрация и карточка документа в системе ООН подтверждают его текст и международное обращение, но сами не решают спор о договорной классификации и принудительном исполнении. Название «меморандум» также не делает положения ничтожными автоматически. Практический вопрос состоит не в выборе одного ярлыка, а в том, какие обещания были приняты, какие действия с ними несовместимы и какие ответные меры были юридически или политически доступны.',
          ],
          [
            'The official text should be read paragraph by paragraph: respect for independence, sovereignty, and existing borders; refraining from threat or force; limits on economic coercion; recourse to Security Council action in specified circumstances; and consultation. The list is substantive but contains no pre-assigned military operation by signatories upon breach.',
            'UN registration and the document record confirm the text and international circulation but do not settle treaty classification or coercive enforcement. The title “memorandum” does not make provisions automatically void. The practical inquiry is which promises were made, which acts conflict with them, and which responses were legally or politically available.',
          ],
          [
            'Офіційний текст слід читати за пунктами: повага до незалежності, суверенітету й чинних кордонів; утримання від погрози силою або її застосування; обмеження економічного примусу; звернення до Ради Безпеки за певних обставин; консультації. Перелік змістовний, але не містить наперед призначеної військової операції підписантів у разі порушення.',
            'Реєстрація та картка документа в системі ООН підтверджують текст і міжнародний обіг, але не вирішують спору про договірну класифікацію та примусове виконання. Назва «меморандум» також не робить положення автоматично нікчемними. Практичне питання — які обіцянки прийнято, які дії їм суперечать і які відповіді були юридично чи політично доступні.',
          ],
        ),
      },
      {
        title: L('Две крайности и реальный предел обещаний', 'Two extremes and the true limit of the promises', 'Дві крайнощі та реальна межа обіцянок'),
        paragraphs: P(
          [
            'Максималистская трактовка утверждает, что подписанты обязались воевать за Украину так же, как участники оборонного союза. Минималистская считает, что отсутствие такого механизма обнуляет весь текст. Первая добавляет обязанность, которой документ не формулирует; вторая стирает явно записанные заверения и политическую связь с разоружением. Обе мешают оценить фактическое поведение по реальному стандарту.',
            'Статья не разрешает все споры о юридической природе меморандума и не оценивает достаточность каждой меры поддержки. Её вывод ограничен текстом: Россия приняла заверения, с которыми применение силы и изменение границ несовместимы; западные подписанты не дали автоматической гарантии ввода войск. Этот промежуточный результат важен для будущих соглашений: значимость обещания зависит и от содержания, и от заранее продуманного механизма реакции.',
          ],
          [
            'A maximalist reading says signatories promised to fight for Ukraine as members of a defence alliance would. A minimalist reading treats the absence of that mechanism as erasing the text. The first adds an unstated duty; the second removes express assurances and their political connection to disarmament. Both prevent conduct from being measured against the actual standard.',
            'This article does not settle every classification dispute or judge the sufficiency of each supporting measure. Its textual conclusion is limited: Russia gave assurances incompatible with force and border alteration, while Western signatories did not promise automatic troop deployment. Future agreements require both substantive promises and a designed response mechanism.',
          ],
          [
            'Максималістське тлумачення каже, що підписанти зобов’язалися воювати за Україну як учасники оборонного союзу. Мінімалістське стирає весь текст через відсутність такого механізму. Перше додає не записаний обов’язок; друге видаляє прямі запевнення та їхній політичний зв’язок із роззброєнням. Обидва заважають оцінити поведінку за реальним стандартом.',
            'Стаття не вирішує всі спори про природу меморандуму й не оцінює достатність кожної міри підтримки. Її текстуальний висновок обмежений: Росія дала запевнення, несумісні із силою та зміною кордонів, а західні підписанти не обіцяли автоматичного введення військ. Майбутні угоди потребують і змістовних обіцянок, і продуманого механізму реакції.',
          ],
        ),
      },
    ],
  },

  'concept-alliance-signals': {
    lead: L(
      'Сигнал союзника — это заявление или действие, из которого государство пытается понять будущую поддержку, сдерживание или предел обязательств. Сигналы влияют на расчёты риска, но имеют разную силу: коммюнике, поставка вооружений, санкция, совместное планирование и договорная гарантия не взаимозаменяемы. В украинском случае обещание будущего членства в НАТО, поддержка после 2014 года и масштабная помощь после вторжения 2022 года формировали ожидания, однако ни одна отдельная формула не отменяла необходимости различать политическое намерение и юридически запускаемое обязательство.',
      'An alliance signal is a statement or action from which a state infers future support, deterrence, or the limits of commitment. Signals vary in strength: a communiqué, arms delivery, sanction, joint planning, and treaty guarantee are not interchangeable. For Ukraine, promised future NATO membership, support after 2014, and large-scale assistance after the 2022 invasion shaped expectations, but no single formula removed the need to distinguish political intention from a legally activated commitment.',
      'Сигнал союзника — це заява або дія, з якої держава робить висновок про майбутню підтримку, стримування чи межі зобов’язань. Сигнали мають різну силу: комюніке, постачання зброї, санкція, спільне планування й договірна гарантія не взаємозамінні. Для України обіцянка майбутнього членства в НАТО, підтримка після 2014 року та масштабна допомога після вторгнення 2022 року формували очікування, але жодна формула не усувала різниці між політичним наміром і юридично активованим обов’язком.',
    ),
    sections: [
      {
        title: L('Иерархия сигналов и проверка поведения', 'A hierarchy of signals and conduct', 'Ієрархія сигналів і перевірка поведінки'),
        paragraphs: P(
          [
            'Порог убедительного сигнала зависит от автора, публичности, конкретности, издержек отказа и институционального закрепления. Заявление главы государства весит иначе, чем комментарий отдельного политика; ратифицированный договор — иначе, чем итоговое коммюнике. Повторяемость и последующие действия могут усилить или ослабить смысл. Поэтому цитату нельзя использовать без даты, адресата и проверки того, что произошло после неё.',
            'Сигнал может одновременно сдерживать противника и подталкивать партнёра к более рискованному поведению, если создаёт ожидание помощи. Но это возможный механизм, а не автоматически доказанная причина решения. Внутренняя оценка интересов, военные возможности и альтернативы сохраняют значение. Получатель помощи не утрачивает собственной ответственности, а отправитель не обязательно принимает все цели получателя.',
          ],
          [
            'A signal’s force depends on author, publicity, specificity, the cost of reversal, and institutional form. A head of state differs from an individual politician; a ratified treaty differs from a summit communiqué. Repetition and later conduct may strengthen or weaken meaning. A quotation therefore requires its date, audience, and what followed.',
            'A signal may deter an adversary while encouraging greater risk by a partner expecting help. That is a possible mechanism, not a proven cause of every choice. Domestic interests, capabilities, and alternatives remain relevant. A recipient retains responsibility for its decisions, while the sender does not necessarily adopt all of the recipient’s objectives.',
          ],
          [
            'Сила сигналу залежить від автора, публічності, конкретності, ціни відмови та інституційної форми. Заява глави держави відрізняється від коментаря політика; ратифікований договір — від комюніке саміту. Повторення й подальші дії можуть посилити або послабити зміст. Тому цитата потребує дати, адресата та перевірки того, що сталося далі.',
            'Сигнал може стримувати противника й водночас заохочувати ризикованішу поведінку партнера, який очікує допомоги. Це можливий механізм, а не доведена причина кожного рішення. Внутрішні інтереси, можливості й альтернативи залишаються важливими. Отримувач зберігає відповідальність за свої рішення, а відправник не обов’язково приймає всі його цілі.',
          ],
        ),
      },
      {
        title: L('От Бухареста к полномасштабной войне', 'From Bucharest to full-scale war', 'Від Бухареста до повномасштабної війни'),
        paragraphs: P(
          [
            '«Бухарестский саммит НАТО» от 3 апреля 2008 года заявил, что Украина и Грузия станут членами, но не установил дату вступления. «Астанинская декларация ОБСЕ» от 3 декабря 2010 года одновременно подтверждала право государств выбирать союзы и идею неделимой безопасности. Эти документы показывают открытую политическую траекторию без предоставления Украине на тот момент договорной коллективной обороны.',
            '«Полномасштабное вторжение России» от 24 февраля 2022 года стало проверкой реального объёма внешней поддержки. Партнёры предоставили вооружения, финансирование, санкционную и политическую помощь, но Украина не стала членом НАТО автоматически. Сопоставление заявления 2008 года и поведения после 2022 года позволяет оценивать сигнал по последствиям, не превращая помощь в доказательство заранее гарантированного вступления в войну.',
          ],
          [
            'The “NATO Bucharest Summit” of 3 April 2008 stated that Ukraine and Georgia would become members but set no accession date. The “OSCE Astana Commemorative Declaration” of 3 December 2010 reaffirmed both freedom to choose alliances and indivisible security. Together they show an open political trajectory without extending treaty collective defence to Ukraine at that time.',
            '“Russia’s full-scale invasion” of 24 February 2022 tested the actual extent of external support. Partners supplied arms, finance, sanctions, and political assistance, but Ukraine did not automatically become a NATO member. Comparing the 2008 statement with post-2022 conduct evaluates the signal through consequences without inventing a prior guarantee to enter the war.',
          ],
          [
            '«Бухарестський саміт НАТО» від 3 квітня 2008 року заявив, що Україна й Грузія стануть членами, але не визначив дати вступу. «Астанинська декларація ОБСЄ» від 3 грудня 2010 року водночас підтвердила свободу обирати союзи та неподільну безпеку. Разом документи показують відкриту політичну траєкторію без поширення на Україну договірної колективної оборони на той час.',
            '«Повномасштабне вторгнення Росії» від 24 лютого 2022 року перевірило реальний обсяг зовнішньої підтримки. Партнери надали зброю, фінансування, санкційну й політичну допомогу, але Україна автоматично не стала членом НАТО. Порівняння заяви 2008 року з поведінкою після 2022 року оцінює сигнал за наслідками без вигадування попередньої гарантії вступити у війну.',
          ],
        ),
      },
      {
        title: L('Как читать коммюнике и практические меры', 'Reading communiqués and practical measures', 'Як читати комюніке та практичні заходи'),
        paragraphs: P(
          [
            'Официальное коммюнике нужно читать по глаголам и условиям. Формула о будущем членстве выражает политическое решение направления, а отсутствие даты и завершённой процедуры показывает незаконченный путь. Документ не равен протоколу о присоединении и не включает Украину в действующий договорный механизм обороны. Однако он также не является нейтральной фразой: он меняет ожидания сторон относительно будущего порядка.',
            'Практическая поддержка читается по объявленным пакетам, полномочиям органов и реальной поставке, а не только по обещанию. Санкции и вооружения способны продемонстрировать долгосрочную позицию, но правительства могут менять объём и условия. Официальный источник устанавливает принятое решение на дату публикации; он не гарантирует неизменность будущей политики и не доказывает, что получатель полностью контролируется поставщиком.',
          ],
          [
            'An official communiqué should be read through its verbs and conditions. A promise of future membership expresses political direction, while the absence of a date and completed procedure shows an unfinished path. It is not an accession protocol and does not place Ukraine under existing treaty defence. Yet it is not neutral language either: it changes expectations about the future order.',
            'Practical support is read through announced packages, institutional authority, and actual delivery, not promises alone. Sanctions and weapons may show a durable position, but governments can change scale and conditions. An official source establishes a decision on its publication date; it neither guarantees future policy nor proves supplier control over the recipient.',
          ],
          [
            'Офіційне комюніке слід читати за дієсловами та умовами. Формула майбутнього членства виражає політичний напрям, а відсутність дати й завершеної процедури показує незакінчений шлях. Це не протокол про приєднання й не поширення чинного договірного захисту на Україну. Водночас це не нейтральна фраза: вона змінює очікування сторін щодо майбутнього порядку.',
            'Практичну підтримку читають за оголошеними пакетами, повноваженнями органів і реальною поставкою, а не лише обіцянкою. Санкції та зброя можуть показувати тривалу позицію, але уряди змінюють обсяг і умови. Офіційне джерело встановлює рішення на дату публікації; воно не гарантує незмінності майбутньої політики й не доводить контроль постачальника над отримувачем.',
          ],
        ),
      },
      {
        title: L('Брошенный партнёр или управляемый клиент', 'Abandoned partner or controlled client', 'Покинутий партнер чи керований клієнт'),
        paragraphs: P(
          [
            'Одна крайняя версия описывает любую осторожность союзников как предательство данных обещаний. Другая считает сам объём помощи доказательством, что украинские решения полностью диктуются извне. Первая смешивает политическое ожидание с юридической гарантией; вторая игнорирует собственные интересы, институты и выбор Украины. Обе требуют вместо лозунга показать конкретное заявление, условие и последующее действие.',
            'Статья не измеряет достаточность помощи и не предсказывает членство Украины. Она устанавливает более узкую рамку: сигнал влияет на расчёты, но его сила определяется формой и подтверждением поведением. Государству опасно строить жизненно важную политику на расплывчатой фразе, а исследователю — задним числом превращать каждое действие в исполнение давнего плана. Последовательность официальных решений важнее психологического прочтения одного жеста.',
          ],
          [
            'One extreme describes allied caution as betrayal of promises. Another treats the volume of assistance as proof that Ukrainian decisions are dictated from abroad. The first confuses political expectation with legal guarantee; the second ignores Ukraine’s own interests, institutions, and choices. Both must replace slogans with a specific statement, condition, and later conduct.',
            'This article neither measures sufficiency of support nor predicts membership. Its narrower frame is that signals shape calculations but gain force through form and confirming conduct. A state should not base vital strategy on vague language, and an analyst should not retroactively turn every act into execution of an old plan. Sequences of official decisions matter more than psychological readings of one gesture.',
          ],
          [
            'Одна крайня версія описує обережність союзників як зраду обіцянок. Інша вважає обсяг допомоги доказом зовнішнього диктату над українськими рішеннями. Перша змішує політичне очікування з юридичною гарантією; друга ігнорує власні інтереси, інституції та вибір України. Обидві мають замінити гасло конкретною заявою, умовою й подальшою дією.',
            'Стаття не вимірює достатність допомоги й не прогнозує членство. Її вужча рамка: сигнали впливають на розрахунки, але набувають сили через форму й підтвердження поведінкою. Державі небезпечно будувати життєву стратегію на розмитій фразі, а досліднику — заднім числом перетворювати кожну дію на виконання давнього плану. Послідовність офіційних рішень важливіша за психологічне читання одного жесту.',
          ],
        ),
      },
    ],
  },

  'concept-indivisible-security': {
    lead: L(
      'Неделимая безопасность выражает политико-нормативную идею: государство не должно укреплять собственную безопасность за счёт безопасности других. В документах ОБСЕ эта формула существует рядом с равным правом каждого государства выбирать союзы и механизмы защиты. Поэтому она не создаёт российского вето на внешнюю политику Украины и не разрешает игнорировать восприятие угрозы в Москве. Её практический смысл — требовать обсуждения последствий, прозрачности и мер снижения риска, не превращая субъективное чувство небезопасности в самостоятельное право на вооружённое принуждение.',
      'Indivisible security expresses a political and normative idea: a state should not strengthen its security at the expense of others. In OSCE texts this formula appears beside every state’s equal right to choose alliances and security arrangements. It therefore creates neither a Russian veto over Ukrainian foreign policy nor permission to ignore threat perceptions in Moscow. Its practical role is to demand discussion of effects, transparency, and risk reduction without turning subjective insecurity into a right of armed coercion.',
      'Неподільна безпека виражає політико-нормативну ідею: держава не повинна зміцнювати власну безпеку коштом безпеки інших. У документах ОБСЄ ця формула стоїть поруч із рівним правом кожної держави обирати союзи та механізми захисту. Тому вона не створює російського вето на зовнішню політику України й не дозволяє ігнорувати сприйняття загрози в Москві. Її практичний сенс — вимагати обговорення наслідків, прозорості та зниження ризику, не перетворюючи суб’єктивну небезпеку на право збройного примусу.',
    ),
    sections: [
      {
        title: L('Взаимная безопасность без права запрета', 'Mutual security without a right of veto', 'Взаємна безпека без права вето'),
        paragraphs: P(
          [
            'Принцип применяется, когда оборонительная мера одной стороны меняет расчёты другой: расширение союза, размещение сил, учения, вооружение или новая инфраструктура. Порог содержательного возражения требует показать конкретный ущерб безопасности и связь с мерой, а не только выразить неприятие чужого выбора. Ответом могут быть консультации, транспарентность и контроль вооружений, но не автоматическое лишение другого государства равных прав.',
            'Безопасность здесь понимается как взаимозависимая, однако не как единый ресурс, который сильная держава распределяет соседям. Формула действует вместе с суверенным равенством и свободой союзов. Она просит учитывать последствия и избегать действий, создающих ненужный риск, но не устанавливает, что любое заявленное чувство угрозы объективно или что более крупное государство получает преимущественную сферу безопасности.',
          ],
          [
            'The principle applies when one side’s defensive measure changes another’s calculations: alliance enlargement, force posture, exercises, armament, or infrastructure. A substantive objection must identify a concrete security effect and causal link, not merely dislike another state’s choice. Consultation, transparency, and arms control may respond, but equal rights are not automatically removed.',
            'Security is interdependent here, not a single resource allocated by a powerful state to neighbours. The formula operates with sovereign equality and alliance freedom. It calls for attention to consequences and avoidance of unnecessary risk, but does not make every asserted fear objective or grant a larger state a privileged security sphere.',
          ],
          [
            'Принцип застосовується, коли оборонний захід однієї сторони змінює розрахунки іншої: розширення союзу, розміщення сил, навчання, озброєння чи інфраструктура. Змістовне заперечення має показати конкретний вплив на безпеку та причинний зв’язок, а не лише неприйняття чужого вибору. Відповіддю можуть бути консультації, прозорість і контроль озброєнь, але не автоматичне позбавлення іншої держави рівних прав.',
            'Безпека тут взаємозалежна, але не є єдиним ресурсом, який сильна держава розподіляє сусідам. Формула діє разом із суверенною рівністю та свободою союзів. Вона вимагає враховувати наслідки й уникати зайвого ризику, але не робить кожний заявлений страх об’єктивним і не надає великій державі привілейованої сфери безпеки.',
          ],
        ),
      },
      {
        title: L('От акта Россия — НАТО к Астане', 'From the NATO–Russia Act to Astana', 'Від акта Росія — НАТО до Астани'),
        paragraphs: P(
          [
            '«Основополагающий акт Россия — НАТО» от 27 мая 1997 года оформлял сотрудничество и консультации после холодной войны. «Бухарестский саммит НАТО» от 3 апреля 2008 года заявил о будущем членстве Украины и Грузии, усилив спор о безопасности. «Астанинская декларация ОБСЕ» от 3 декабря 2010 года вновь поместила свободу союзов и неделимую безопасность в один официальный текст.',
            '«Полномасштабное вторжение России» от 24 февраля 2022 года показывает предел политической формулы: неразрешённый конфликт восприятий перешёл в применение силы. Предыстория важна для объяснения провала механизмов безопасности, но не создаёт нового исключения из Устава ООН. Напротив, она позволяет спросить, какие меры прозрачности, контроля вооружений и переговоров могли уменьшить риск до того, как базовые правила были нарушены.',
          ],
          [
            'The “NATO–Russia Founding Act” of 27 May 1997 framed post-Cold War cooperation and consultation. The “NATO Bucharest Summit” of 3 April 2008 promised future Ukrainian and Georgian membership, intensifying the security dispute. The “OSCE Astana Declaration” of 3 December 2010 again placed alliance freedom and indivisible security in the same official text.',
            '“Russia’s full-scale invasion” of 24 February 2022 shows the limit of the political formula: an unresolved perception conflict became force. The background explains failure of security mechanisms but creates no new Charter exception. It instead asks which transparency, arms-control, and negotiating measures might have reduced risk before foundational rules were breached.',
          ],
          [
            '«Основоположний акт Росія — НАТО» від 27 травня 1997 року оформлював співпрацю та консультації після холодної війни. «Бухарестський саміт НАТО» від 3 квітня 2008 року заявив про майбутнє членство України й Грузії, посиливши спір про безпеку. «Астанинська декларація ОБСЄ» від 3 грудня 2010 року знову поставила свободу союзів і неподільну безпеку в одному офіційному тексті.',
            '«Повномасштабне вторгнення Росії» від 24 лютого 2022 року показує межу політичної формули: невирішений конфлікт сприйняття перейшов у силу. Передісторія пояснює провал механізмів безпеки, але не створює нового винятку зі Статуту ООН. Вона ставить питання, які заходи прозорості, контролю озброєнь і переговорів могли зменшити ризик до порушення базових правил.',
          ],
        ),
      },
      {
        title: L('Обе половины Астанинской формулы', 'Both halves of the Astana formula', 'Обидві частини Астанинської формули'),
        paragraphs: P(
          [
            'Астанинский документ следует читать без разрыва предложений. Он подтверждает право государств свободно выбирать или менять механизмы безопасности, включая союзы, и одновременно обязательство не укреплять безопасность за счёт других. Первая часть не говорит, что последствия выбора не подлежат обсуждению; вторая не формулирует право соседа остановить выбор силой. Их совместное чтение требует переговорного управления противоречием.',
            'Основополагающий акт Россия — НАТО фиксировал намерение строить отношения без конфронтации и создавал консультационные механизмы. Он не содержал юридического запрета на расширение НАТО. Политические ожидания вокруг будущей военной инфраструктуры следует проверять по точным формулировкам и последующим решениям. Документ показывает предложенную модель общей безопасности, но факт её последующего разрушения не переписывает исходный текст.',
          ],
          [
            'The Astana text must be read without splitting its sentences. It reaffirms the freedom to choose or change security arrangements, including alliances, and the commitment not to strengthen security at others’ expense. The first does not make consequences immune from discussion; the second does not let a neighbour stop the choice by force. Together they require negotiated management of tension.',
            'The NATO–Russia Founding Act recorded an intention for non-confrontational relations and consultation mechanisms. It contained no legal prohibition on NATO enlargement. Expectations about future military infrastructure must be tested against exact wording and later decisions. The document shows a proposed common-security model; its later failure does not rewrite the original text.',
          ],
          [
            'Астанинський текст треба читати без розриву речень. Він підтверджує свободу обирати або змінювати механізми безпеки, включно із союзами, та обов’язок не зміцнювати безпеку коштом інших. Перша частина не забороняє обговорювати наслідки; друга не дає сусідові права зупинити вибір силою. Разом вони вимагають переговорного управління суперечністю.',
            'Основоположний акт Росія — НАТО фіксував намір будувати неконфронтаційні відносини й створював механізми консультацій. Він не містив юридичної заборони на розширення НАТО. Очікування щодо майбутньої військової інфраструктури треба перевіряти за точними формулюваннями та наступними рішеннями. Документ показує запропоновану модель спільної безпеки, але її пізніший провал не переписує текст.',
          ],
        ),
      },
      {
        title: L('Принцип диалога, а не оправдание войны', 'A principle for dialogue, not a justification for war', 'Принцип діалогу, а не виправдання війни'),
        paragraphs: P(
          [
            'Российская трактовка подчёркивает вторую половину формулы и описывает расширение НАТО как ущерб своей безопасности. Украинская и западная трактовки ставят в центр право выбора и считают требование ограничить его сферой влияния. Обе стороны могут приводить один документ, потому что он действительно сохраняет оба принципа. Решение конфликта между ними предполагалось через согласование, а не одностороннее принуждение.',
            'Статья не доказывает отсутствие реального российского восприятия угрозы и не устанавливает, что любой союзный шаг оптимален. Она ограничивает правовой вывод: восприятие может объяснять мотивацию и требовать ответной дипломатии, но само не делает войну допустимой. Неделимая безопасность полезна как критерий проектирования будущего порядка лишь при взаимности, точных мерах и уважении равного статуса всех участников.',
          ],
          [
            'Russia stresses the formula’s second half and describes NATO enlargement as harm to its security. Ukraine and Western states centre freedom of choice and view demanded limits as a sphere of influence. Both cite the same text because it preserves both principles. Their tension was meant to be managed through agreement rather than unilateral coercion.',
            'This article neither denies a genuine Russian perception of threat nor declares every alliance step optimal. It limits the legal inference: perception may explain motivation and require diplomacy, but does not make war lawful. Indivisible security can guide a future order only through reciprocity, precise measures, and equal status for all participants.',
          ],
          [
            'Російське тлумачення підкреслює другу частину формули й описує розширення НАТО як шкоду своїй безпеці. Україна та західні держави ставлять у центр свободу вибору й бачать у вимозі обмежити її сферу впливу. Обидві сторони цитують один текст, бо він справді зберігає обидва принципи. Суперечність передбачалося врегульовувати домовленістю, а не одностороннім примусом.',
            'Стаття не заперечує реального російського сприйняття загрози й не оголошує кожний союзний крок оптимальним. Вона обмежує правовий висновок: сприйняття пояснює мотивацію та потребу дипломатії, але не робить війну законною. Неподільна безпека може спрямовувати майбутній порядок лише за взаємності, точних заходів і рівного статусу учасників.',
          ],
        ),
      },
    ],
  },

  'concept-alliance-choice': {
    lead: L(
      'Свобода выбора союзов означает, что государство вправе самостоятельно определять механизмы собственной безопасности, включая нейтралитет, участие в союзе или изменение прежнего курса. Это право не обещает автоматического принятия в выбранную организацию и не делает последствия решения несущественными для соседей. Для Украины спор проходит от намерения нейтралитета в 1990 году через формулу будущего членства НАТО в 2008 году к войне 2022 года. Право выбора и необходимость учитывать безопасность других должны применяться одновременно, без внешнего военного вето.',
      'Freedom to choose alliances means that a state may decide its own security arrangements, including neutrality, alliance membership, or a change of course. It does not guarantee admission to a chosen organisation or make effects on neighbours irrelevant. For Ukraine, the dispute runs from intended neutrality in 1990 through NATO’s future-membership formula in 2008 to war in 2022. Freedom of choice and attention to others’ security must operate together, without an external military veto.',
      'Свобода вибору союзів означає, що держава може самостійно визначати механізми своєї безпеки, включно з нейтралітетом, участю в союзі або зміною попереднього курсу. Це право не гарантує прийняття до обраної організації й не робить наслідки для сусідів неважливими. Для України спір простягається від наміру нейтралітету 1990 року через формулу майбутнього членства НАТО 2008 року до війни 2022 року. Право вибору й увага до безпеки інших мають діяти разом, без зовнішнього військового вето.',
    ),
    sections: [
      {
        title: L('Право выбрать не равно праву вступить', 'A right to choose is not a right to be admitted', 'Право обрати не є правом бути прийнятим'),
        paragraphs: P(
          [
            'Порог применения возникает, когда внешняя держава требует от государства сохранить нейтралитет или отказаться от союза вопреки его собственным решениям. Свобода означает отсутствие такого принуждения. Но вступление требует согласия членов организации и выполнения её процедур. Поэтому украинская ориентация на НАТО и фактическое членство — разные стадии, как политическая декларация саммита и ратифицированные обязательства.',
            'Выбор курса может создавать реальные риски и обязан сопровождаться дипломатией, прозрачностью и контролем вооружений. Учитывать эти риски не значит передавать соседу окончательное решение. Иначе принцип равенства превращается в иерархию сфер влияния. Одновременно государство не может требовать от союза гарантий, которых тот не принял, или считать осторожность потенциальных партнёров нарушением уже действующего оборонного договора.',
          ],
          [
            'The principle applies when an external power demands that a state remain neutral or renounce an alliance contrary to its own decision. Freedom means absence of that coercion. Admission still requires consent of existing members and completion of procedures. Ukraine’s NATO orientation and actual membership are therefore different stages, as are a summit declaration and ratified obligations.',
            'A chosen course may create real risks and should be accompanied by diplomacy, transparency, and arms control. Taking risks seriously does not transfer the final decision to a neighbour; otherwise equality becomes a hierarchy of spheres. A state also cannot demand guarantees a coalition has not accepted or call partner caution a breach of a defence treaty not yet in force.',
          ],
          [
            'Принцип застосовується, коли зовнішня держава вимагає зберегти нейтралітет або відмовитися від союзу всупереч власному рішенню країни. Свобода означає відсутність такого примусу. Вступ однаково потребує згоди членів організації та виконання процедур. Тому українська орієнтація на НАТО й фактичне членство — різні стадії, як декларація саміту та ратифіковані зобов’язання.',
            'Обраний курс може створювати реальні ризики й має супроводжуватися дипломатією, прозорістю та контролем озброєнь. Урахування ризиків не передає сусідові остаточного рішення, інакше рівність стає ієрархією сфер. Держава також не може вимагати гарантій, яких союз не прийняв, або називати обережність партнерів порушенням ще не чинного оборонного договору.',
          ],
        ),
      },
      {
        title: L('Изменение украинского курса', 'Changes in Ukraine’s course', 'Зміна українського курсу'),
        paragraphs: P(
          [
            '«Декларация о суверенитете Украины» от 16 июля 1990 года выражала намерение стать постоянно нейтральным государством вне военных блоков. «Бухарестский саммит НАТО» от 3 апреля 2008 года заявил о будущем членстве Украины без даты. Эти документы не отменяют друг друга задним числом: первый фиксирует курс переходного периода, второй — последующую международную политическую траекторию.',
            '«Астанинская декларация ОБСЕ» от 3 декабря 2010 года прямо соединяет право выбирать союзы и неделимую безопасность. «Полномасштабное вторжение России» от 24 февраля 2022 года нельзя правомерно вывести из одного факта смены курса. Предыстория помогает понять восприятие угрозы, но применение силы против политической независимости другого государства требует отдельного основания по Уставу ООН.',
          ],
          [
            'The “Declaration of State Sovereignty of Ukraine” of 16 July 1990 expressed an intention to become permanently neutral and outside military blocs. The “NATO Bucharest Summit” of 3 April 2008 promised future Ukrainian membership without a date. The instruments do not retroactively cancel one another: one records a transitional course, the other a later international political trajectory.',
            'The “OSCE Astana Declaration” of 3 December 2010 expressly joins alliance freedom and indivisible security. “Russia’s full-scale invasion” of 24 February 2022 cannot lawfully follow from a changed course alone. The history helps explain threat perception, but force against another state’s political independence needs a separate Charter basis.',
          ],
          [
            '«Декларація про державний суверенітет України» від 16 липня 1990 року виражала намір стати постійно нейтральною державою поза військовими блоками. «Бухарестський саміт НАТО» від 3 квітня 2008 року заявив про майбутнє членство України без дати. Документи не скасовують один одного заднім числом: перший фіксує курс перехідного періоду, другий — наступну міжнародну політичну траєкторію.',
            '«Астанинська декларація ОБСЄ» від 3 грудня 2010 року прямо поєднує свободу союзів і неподільну безпеку. «Повномасштабне вторгнення Росії» від 24 лютого 2022 року не можна правомірно вивести лише зі зміни курсу. Передісторія пояснює сприйняття загрози, але сила проти політичної незалежності іншої держави потребує окремої підстави за Статутом ООН.',
          ],
        ),
      },
      {
        title: L('Глаголы официальных деклараций', 'The verbs of official declarations', 'Дієслова офіційних декларацій'),
        paragraphs: P(
          [
            'В Декларации 1990 года важно слово о намерении будущего нейтралитета. Оно показывает политическое направление, но не бессрочный международный договор, предоставляющий другой державе право контроля. В Бухарестском коммюнике формула «станут членами» также выражает направление, но не завершённое вступление. Правовой эффект нельзя определять только силой звучания переведённой фразы.',
            'Астанинский текст устанавливает свободу выбирать или менять механизмы безопасности и право каждого государства на безопасность. Одновременно он содержит обязательство не укреплять её за счёт других. Документ буквально не описывает автоматическое разрешение коллизии. Он задаёт процедуру политического сосуществования принципов: консультации и согласование мер вместо одностороннего отрицания права одной из сторон.',
          ],
          [
            'In the 1990 Declaration, the language of intended future neutrality matters. It expresses political direction, not a perpetual international treaty granting another power control. Bucharest’s wording that Ukraine “will become” a member also states direction rather than completed accession. Legal effect cannot be inferred from the rhetorical force of a translation.',
            'Astana establishes freedom to choose or change security arrangements and each state’s right to security, alongside a commitment not to strengthen it at others’ expense. It supplies no automatic solution to collision. Instead it frames political coexistence of principles through consultation and agreed measures rather than unilateral denial of one side’s right.',
          ],
          [
            'У Декларації 1990 року важлива мова наміру майбутнього нейтралітету. Вона виражає політичний напрям, а не безстроковий міжнародний договір, що дає іншій державі контроль. Бухарестська формула «стануть членами» також визначає напрям, а не завершений вступ. Правовий ефект не можна виводити лише з риторичної сили перекладу.',
            'Астанинський текст встановлює свободу обирати або змінювати механізми безпеки та право кожної держави на безпеку, поруч із обов’язком не зміцнювати її коштом інших. Він не дає автоматичного розв’язання колізії. Натомість окреслює політичне співіснування принципів через консультації та погоджені заходи, а не одностороннє заперечення права іншої сторони.',
          ],
        ),
      },
      {
        title: L('Сфера влияния и ответственность выбора', 'Spheres of influence and responsibility for choice', 'Сфери впливу та відповідальність за вибір'),
        paragraphs: P(
          [
            'Одна позиция считает любую внешнюю ориентацию Украины полностью свободной и не требующей учёта региональной безопасности. Другая исходит из особого права России определять допустимые украинские союзы. Первая недооценивает последствия и необходимость переговоров; вторая несовместима с равным суверенитетом и превращает географию в подчинение. Учёт интересов не должен становиться правом окончательного запрета.',
            'Статья не утверждает, что членство в конкретном союзе является единственно разумной политикой, и не прогнозирует его условия. Её предел правовой: выбор принадлежит Украине и потенциальным участникам союза, а не внешней силе. Политическая ответственность требует оценивать цену курса, готовность партнёров и альтернативные архитектуры безопасности. Ошибка в таком выборе не даёт соседу права исправлять её вторжением.',
          ],
          [
            'One position treats every Ukrainian orientation as entirely free of regional consequences. Another gives Russia a special right to determine permissible Ukrainian alliances. The first undervalues effects and negotiation; the second conflicts with equal sovereignty and turns geography into subordination. Attention to interests must not become a final veto.',
            'This article does not declare one alliance uniquely wise or predict accession terms. Its legal limit is that the choice belongs to Ukraine and prospective alliance members, not an external power. Political responsibility still requires assessing costs, partner readiness, and alternative architectures. A mistaken choice does not authorise a neighbour to correct it by invasion.',
          ],
          [
            'Одна позиція вважає будь-яку зовнішню орієнтацію України повністю вільною від регіональних наслідків. Інша дає Росії особливе право визначати допустимі українські союзи. Перша недооцінює наслідки й переговори; друга суперечить рівному суверенітету та перетворює географію на підпорядкування. Урахування інтересів не має ставати остаточним вето.',
            'Стаття не оголошує конкретний союз єдино розумною політикою й не прогнозує умови вступу. Її правова межа: вибір належить Україні та потенційним членам союзу, а не зовнішній силі. Політична відповідальність однаково вимагає оцінювати ціну курсу, готовність партнерів і альтернативну архітектуру. Помилковий вибір не дозволяє сусідові виправляти його вторгненням.',
          ],
        ),
      },
    ],
  },

  'concept-security-dilemma': {
    lead: L(
      'Дилемма безопасности описывает трагический механизм, при котором оборонительная мера одной стороны воспринимается другой как подготовка нападения, вызывая ответное усиление и новый страх. Это аналитическая модель, а не правовое оправдание войны и не доказательство равной ответственности. В российско-украинском случае она помогает связать расширение союзов, военную модернизацию, риторику и разрушение механизмов доверия. Но причинную силу каждого звена необходимо доказывать, а открытое применение силы оценивать отдельно по Уставу ООН.',
      'A security dilemma is a tragic mechanism in which one side’s defensive measure is perceived as preparation for attack, prompting countermeasures and renewed fear. It is an analytical model, not a legal justification for war or proof of equal responsibility. In the Russia–Ukraine case it connects alliance enlargement, military modernisation, rhetoric, and collapsed trust mechanisms. The causal force of each link still requires evidence, while open force must be assessed separately under the UN Charter.',
      'Дилема безпеки описує трагічний механізм, у якому оборонний захід однієї сторони сприймається іншою як підготовка нападу, викликаючи посилення у відповідь і новий страх. Це аналітична модель, а не правове виправдання війни чи доказ рівної відповідальності. У російсько-українському випадку вона пов’язує розширення союзів, військову модернізацію, риторику й руйнування довіри. Причинну силу кожної ланки треба доводити, а відкриту силу — окремо оцінювати за Статутом ООН.',
    ),
    sections: [
      {
        title: L('Когда возникает спираль взаимного страха', 'When a spiral of mutual fear emerges', 'Коли виникає спіраль взаємного страху'),
        paragraphs: P(
          [
            'Для применения модели нужны неопределённость намерений, меры двойного назначения и последовательная реакция сторон. Следует показать, какое действие считалось оборонительным его автором, как его воспринял адресат и каким конкретным ответом это восприятие выразилось. Простая одновременность событий недостаточна. Также важно выяснять, были ли доступны сигналы, которые могли отличить защиту от подготовки нападения.',
            'Дилемма сильнее там, где наступательные и оборонительные возможности трудно различить, а доверие к заявлениям низко. Она слабее объясняет действия с очевидной территориальной или ревизионистской целью. Модель не предполагает нравственной симметрии: одна сторона может ошибаться сильнее, манипулировать страхом или сознательно использовать эскалацию. Аналитик должен допускать и искреннее восприятие угрозы, и инструментальное прикрытие.',
          ],
          [
            'Applying the model requires uncertainty about intentions, dual-use measures, and a sequence of reactions. Analysis must show which act its author saw as defensive, how the recipient interpreted it, and which response followed. Mere simultaneity is insufficient. It also matters whether signals could have distinguished defence from preparation for attack.',
            'The dilemma is stronger where offensive and defensive capabilities are difficult to distinguish and statements lack credibility. It explains obviously territorial or revisionist aims less well. The model assumes no moral symmetry: one side may misperceive more, manipulate fear, or exploit escalation. Analysis should allow both sincere threat perception and strategic cover.',
          ],
          [
            'Застосування моделі потребує невизначеності намірів, засобів подвійного призначення й послідовної реакції сторін. Треба показати, яку дію автор вважав оборонною, як її сприйняв адресат і якою відповіддю це проявилося. Простого збігу в часі недостатньо. Важливо також з’ясувати, чи існували сигнали, здатні відрізнити захист від підготовки нападу.',
            'Дилема сильніша там, де наступальні й оборонні можливості важко розрізнити, а довіра до заяв низька. Вона гірше пояснює очевидні територіальні або ревізіоністські цілі. Модель не передбачає моральної симетрії: одна сторона може більше помилятися, маніпулювати страхом або свідомо використовувати ескалацію. Аналіз має допускати і щире сприйняття загрози, і стратегічне прикриття.',
          ],
        ),
      },
      {
        title: L('Бухарест, Астана и вторжение', 'Bucharest, Astana, and invasion', 'Бухарест, Астана та вторгнення'),
        paragraphs: P(
          [
            '«Бухарестский саммит НАТО» от 3 апреля 2008 года дал политический сигнал будущего членства Украины без даты и немедленной гарантии. «Астанинская декларация ОБСЕ» от 3 декабря 2010 года попыталась удержать вместе свободу союзов и неделимую безопасность. Эти статьи показывают институциональную попытку управлять противоречием, но не доказывают, какая сторона неизбежно должна была эскалировать.',
            '«Крымский референдум и аннексия» от 16 марта 2014 года и «Полномасштабное вторжение России» от 24 февраля 2022 года изменили саму среду безопасности. Украинское стремление к внешней защите после применения силы может быть следствием угрозы, а российская сторона может читать это стремление как подтверждение прежнего опасения. Эта обратная связь объясняет устойчивость спирали, не оправдывая исходные нарушения.',
          ],
          [
            'The “NATO Bucharest Summit” of 3 April 2008 sent a political signal of future Ukrainian membership without a date or immediate guarantee. The “OSCE Astana Declaration” of 3 December 2010 tried to hold alliance freedom and indivisible security together. The articles show an institutional attempt to manage tension, not proof that either side inevitably had to escalate.',
            '“Crimean referendum and annexation” of 16 March 2014 and “Russia’s full-scale invasion” of 24 February 2022 transformed the security environment. Ukraine’s search for external protection after force may be a response to threat, while Russia may read it as confirmation of prior fear. That feedback explains persistence without justifying initial breaches.',
          ],
          [
            '«Бухарестський саміт НАТО» від 3 квітня 2008 року дав політичний сигнал майбутнього членства України без дати й негайної гарантії. «Астанинська декларація ОБСЄ» від 3 грудня 2010 року намагалася втримати разом свободу союзів і неподільну безпеку. Статті показують інституційну спробу керувати суперечністю, а не доводять неминучість ескалації будь-якої сторони.',
            '«Кримський референдум і анексія» від 16 березня 2014 року та «Повномасштабне вторгнення Росії» від 24 лютого 2022 року змінили саме середовище безпеки. Пошук Україною зовнішнього захисту після сили може бути відповіддю на загрозу, а Росія може читати його як підтвердження давнього страху. Такий зворотний зв’язок пояснює стійкість спіралі, не виправдовуючи початкових порушень.',
          ],
        ),
      },
      {
        title: L('Документы как следы восприятия, а не доказательство мотива', 'Documents as evidence of perception, not conclusive motive', 'Документи як сліди сприйняття, а не доказ мотиву'),
        paragraphs: P(
          [
            'Коммюнике НАТО устанавливает официально заявленную траекторию, но не раскрывает единственную цель всех участников. Декларация ОБСЕ фиксирует согласованные принципы, но не доказывает, что стороны одинаково их понимали или добросовестно применяли. Заявления лидеров показывают публичную угрозовую рамку; для вывода о реальном мотиве их нужно сопоставлять с планированием, ресурсами, решениями и доступными альтернативами.',
            'Устав ООН отделяет аналитическое объяснение от правовой квалификации. Даже если расширение союза существенно повлияло на российское восприятие, это не становится самостоятельным исключением из запрета силы. И наоборот, незаконность вторжения не доказывает, что все предшествующие меры безопасности были оптимальны. Документы позволяют вести два анализа параллельно, не подменяя один другим.',
          ],
          [
            'A NATO communiqué establishes an officially stated trajectory but not the single purpose of every participant. An OSCE declaration records agreed principles but not identical understanding or good-faith application. Leaders’ statements show a public threat frame; conclusions about actual motive require comparison with planning, resources, decisions, and alternatives.',
            'The UN Charter separates analytical explanation from legal classification. Even if alliance enlargement strongly shaped Russian perception, it creates no independent exception to the prohibition on force. Conversely, an unlawful invasion does not prove every earlier security policy optimal. Documents permit both inquiries without replacing one with the other.',
          ],
          [
            'Комюніке НАТО встановлює офіційно заявлену траєкторію, але не єдину мету всіх учасників. Декларація ОБСЄ фіксує погоджені принципи, але не доводить однакове розуміння чи добросовісне застосування. Заяви лідерів показують публічну рамку загрози; реальний мотив треба зіставляти з плануванням, ресурсами, рішеннями та альтернативами.',
            'Статут ООН відокремлює аналітичне пояснення від правової кваліфікації. Навіть сильний вплив розширення союзу на російське сприйняття не створює винятку із заборони сили. І навпаки, незаконність вторгнення не доводить оптимальність усіх попередніх заходів безпеки. Документи дозволяють вести обидва аналізи, не підміняючи один одним.',
          ],
        ),
      },
      {
        title: L('Объяснение без распределения автоматической вины', 'Explanation without automatic allocation of blame', 'Пояснення без автоматичного розподілу вини'),
        paragraphs: P(
          [
            'Одна трактовка использует дилемму для равного распределения ответственности независимо от действий. Другая отвергает модель, опасаясь, что любое объяснение смягчит правовую оценку. Первая смешивает причинность с оправданием; вторая лишает анализ возможности понять повторяющийся механизм эскалации. Можно одновременно назвать нарушение, изучить его мотивы и определить меры, уменьшающие риск повторения.',
            'Статья не устанавливает полную причинную историю войны и не измеряет вклад каждого решения. Её вывод — рабочая гипотеза, которую нужно проверять по датированной цепочке действий и реакций. Если звенья не подтверждаются, модель неприменима. Если подтверждаются, практический урок касается каналов связи, проверяемых ограничений и сигналов оборонительного намерения, а не ретроспективного разрешения на силу.',
          ],
          [
            'One reading uses the dilemma to distribute responsibility equally regardless of conduct. Another rejects the model for fear that explanation softens legal judgment. The first confuses causation with justification; the second prevents understanding a recurring escalation mechanism. A breach can be named while motives and preventive measures are studied.',
            'This article does not supply a complete causal history or quantify every decision’s contribution. It offers a hypothesis to test against a dated action–reaction chain. If links fail, the model fails. If they hold, the practical lesson concerns communication, verifiable restraints, and signals of defensive intention—not retrospective permission for force.',
          ],
          [
            'Одне тлумачення використовує дилему для рівного розподілу відповідальності незалежно від дій. Інше відкидає модель, боячись пом’якшення правової оцінки. Перше змішує причинність із виправданням; друге заважає зрозуміти повторюваний механізм ескалації. Можна одночасно назвати порушення, дослідити мотиви й визначити заходи проти повторення.',
            'Стаття не дає повної причинної історії й не вимірює внесок кожного рішення. Вона пропонує гіпотезу для перевірки за датованим ланцюгом дій і реакцій. Якщо ланки не підтверджуються, модель не працює. Якщо підтверджуються, практичний урок стосується зв’язку, перевірюваних обмежень і сигналів оборонного наміру, а не ретроспективного дозволу на силу.',
          ],
        ),
      },
    ],
  },

  'concept-threat-rhetoric': {
    lead: L(
      'Риторика угрозы превращает сложную опасность в понятный общественный образ: внешний враг, предательство, окружение или борьба за выживание. Она способна мобилизовать население, дисциплинировать элиты и оправдать издержки, но её политическая полезность не доказывает ни вымышленность, ни реальность самой угрозы. В российско-украинской войне заявления о НАТО, «нацизме», распаде государства и экзистенциальной опасности нужно проверять отдельно по автору, аудитории, дате, фактам и последующим действиям, а не принимать как готовое описание мира.',
      'Threat rhetoric turns complex danger into a legible public image: an external enemy, betrayal, encirclement, or a struggle for survival. It can mobilise society, discipline elites, and justify costs, but political usefulness proves neither that the threat is invented nor that it is real. In the Russia–Ukraine war, claims about NATO, “Nazism,” state collapse, and existential danger require separate testing by author, audience, date, facts, and later conduct rather than acceptance as a ready description of reality.',
      'Риторика загрози перетворює складну небезпеку на зрозумілий суспільний образ: зовнішнього ворога, зраду, оточення або боротьбу за виживання. Вона може мобілізувати населення, дисциплінувати еліти й виправдовувати витрати, але політична корисність не доводить ані вигаданість, ані реальність загрози. У російсько-українській війні заяви про НАТО, «нацизм», розпад держави й екзистенційну небезпеку треба окремо перевіряти за автором, аудиторією, датою, фактами та наступними діями.',
    ),
    sections: [
      {
        title: L('Слова как политическое действие', 'Words as political action', 'Слова як політична дія'),
        paragraphs: P(
          [
            'Порог анализа возникает, когда описание опасности используется для конкретного решения: мобилизации, ограничения прав, военной операции, санкций или отказа от переговоров. Нужно выделить проверяемое утверждение и отличить его от оценки или метафоры. Затем сопоставляются масштаб названной угрозы, доступные данные и предлагаемая мера. Чем более чрезвычайно действие, тем выше требования к фактическому основанию.',
            'Риторика может быть искренней и инструментальной одновременно. Лидер способен действительно воспринимать риск и выбирать формулировку, которая укрепляет поддержку. Поэтому разоблачение политической выгоды не опровергает опасность, а обнаружение опасности не подтверждает каждое публичное преувеличение. Анализ должен рассматривать функцию речи и независимые факты по двум отдельным дорожкам.',
          ],
          [
            'Analysis is triggered when a description of danger supports a decision: mobilisation, restriction of rights, military operation, sanctions, or refusal to negotiate. A testable assertion must be separated from evaluation or metaphor, then compared with available data and the proposed measure. The more exceptional the action, the stronger its factual foundation must be.',
            'Rhetoric can be sincere and instrumental at once. A leader may genuinely perceive risk while choosing language that builds support. Showing political benefit does not disprove danger, and finding danger does not validate every exaggeration. The function of speech and independent facts should follow separate analytical tracks.',
          ],
          [
            'Аналіз потрібен, коли опис небезпеки підтримує конкретне рішення: мобілізацію, обмеження прав, військову операцію, санкції або відмову від переговорів. Перевірюване твердження треба відокремити від оцінки чи метафори, а потім зіставити масштаб загрози, доступні дані й запропонований захід. Що винятковіша дія, то міцнішою має бути її фактична основа.',
            'Риторика може бути щирою й інструментальною водночас. Лідер здатний справді відчувати ризик і обирати слова для зміцнення підтримки. Політична вигода не спростовує небезпеки, а наявність небезпеки не підтверджує кожне перебільшення. Функцію промови й незалежні факти треба аналізувати окремими шляхами.',
          ],
        ),
      },
      {
        title: L('Как угрозовая рамка менялась во времени', 'How the threat frame changed over time', 'Як рамка загрози змінювалася в часі'),
        paragraphs: P(
          [
            '«Бухарестский саммит НАТО» от 3 апреля 2008 года дал материал для российской рамки приближающегося союза, хотя членство Украины не состоялось. «Смена власти в Украине» от 22 февраля 2014 года стала предметом противоположных описаний: демократический переход, революция или переворот. Название влияло на то, считалась ли последующая власть законным партнёром и как оправдывались ответные решения.',
            '«Полномасштабное вторжение России» от 24 февраля 2022 года сопровождалось максимальными формулами опасности и защитной необходимости. После вторжения украинская риторика экзистенциальной угрозы получила прямую фактическую основу в крупной войне, но отдельные заявления всё равно требуют проверки. Риторический контекст помогает понять мобилизацию; правовую квалификацию силы и конкретных атак он не заменяет.',
          ],
          [
            'The “NATO Bucharest Summit” of 3 April 2008 supplied material for a Russian frame of an approaching alliance, although Ukrainian membership did not occur. “Transfer of power in Ukraine” of 22 February 2014 received opposing labels: democratic transition, revolution, or coup. The label shaped whether later authorities were treated as lawful partners and how responses were justified.',
            '“Russia’s full-scale invasion” of 24 February 2022 came with maximal language of danger and defensive necessity. After invasion, Ukrainian existential-threat rhetoric had a direct factual basis in large-scale war, although particular claims still require examination. Rhetoric explains mobilisation but does not replace legal classification of force or attacks.',
          ],
          [
            '«Бухарестський саміт НАТО» від 3 квітня 2008 року дав матеріал для російської рамки наближення союзу, хоча членство України не відбулося. «Зміна влади в Україні» від 22 лютого 2014 року отримала протилежні назви: демократичний перехід, революція або переворот. Назва впливала на те, чи вважали наступну владу законним партнером і як виправдовували відповіді.',
            '«Повномасштабне вторгнення Росії» від 24 лютого 2022 року супроводжувалося максимальними формулами небезпеки й захисної необхідності. Після вторгнення українська риторика екзистенційної загрози отримала пряму фактичну основу у великій війні, хоча окремі твердження однаково треба перевіряти. Риторика пояснює мобілізацію, але не замінює правову кваліфікацію сили чи атак.',
          ],
        ),
      },
      {
        title: L('Официальная речь как источник', 'Official speech as a source', 'Офіційна промова як джерело'),
        paragraphs: P(
          [
            'Официальная речь надёжно устанавливает, что публично заявил конкретный орган или лидер в конкретную дату. Она может показать заявленную цель, адресата сигнала и выбранный образ угрозы. Она не доказывает автоматически факты внутри заявления и не всегда раскрывает реальную мотивацию. Поэтому цитату следует связывать с полным текстом, переводом, обстоятельствами и независимыми документами.',
            'Коммюнике, закон, военный указ и политическая речь имеют разный статус. Коммюнике фиксирует согласованную позицию; закон создаёт норму; указ оформляет решение; речь объясняет или мобилизует. Их нельзя цитировать как взаимозаменяемые подтверждения. Особенно важно не превращать повторение ярлыка государственными медиа в независимое множество источников: проверяемое утверждение остаётся одним и требует внешнего подтверждения.',
          ],
          [
            'An official speech reliably establishes what a particular leader or institution said on a date. It can show a stated objective, audience, and chosen threat image. It does not automatically prove embedded facts or always reveal actual motivation. Quotations therefore require the full text, translation, circumstances, and independent documents.',
            'A communiqué, statute, military decree, and political speech have different status. A communiqué records an agreed position; a statute creates a rule; a decree formalises a decision; a speech explains or mobilises. They are not interchangeable proof. Repetition of a label across state media is not multiple independent sourcing: the underlying assertion remains one claim requiring external support.',
          ],
          [
            'Офіційна промова надійно встановлює, що конкретний лідер або орган заявив у певну дату. Вона показує проголошену мету, адресата й обраний образ загрози. Вона не доводить автоматично факти всередині заяви й не завжди розкриває справжній мотив. Тому цитату слід пов’язувати з повним текстом, перекладом, обставинами та незалежними документами.',
            'Комюніке, закон, військовий указ і політична промова мають різний статус. Комюніке фіксує погоджену позицію; закон створює норму; указ оформлює рішення; промова пояснює або мобілізує. Вони не є взаємозамінними доказами. Повторення ярлика державними медіа не створює багато незалежних джерел: твердження залишається одним і потребує зовнішньої перевірки.',
          ],
        ),
      },
      {
        title: L('Манипуляция или предупреждение', 'Manipulation or warning', 'Маніпуляція чи попередження'),
        paragraphs: P(
          [
            'Одна трактовка считает угрозовую речь только пропагандой и тем самым может пропустить реальный риск. Другая принимает заявление власти как достаточное доказательство чрезвычайной опасности. Между ними нужен независимый тест: возможности предполагаемого противника, наблюдаемое поведение, временной горизонт, альтернативные объяснения и соразмерность предложенной реакции. Политическая функция речи входит в анализ, но не предрешает результат.',
            'Статья не выносит психологический диагноз обществу и не измеряет личную искренность политиков. Её вывод касается доказательности: образ угрозы нельзя использовать как самоподтверждающуюся посылку. Чем серьёзнее действие, оправдываемое словами, тем яснее должны быть факты и юридическое основание. Это правило одинаково действует для российской, украинской и союзной коммуникации и не зависит от симпатии к говорящему.',
          ],
          [
            'One reading treats all threat speech as propaganda and may miss a real danger. Another accepts official language as sufficient proof of emergency. Independent testing should examine capabilities, observed conduct, time horizon, alternative explanations, and proportionality of the proposed response. Political function matters but does not predetermine the answer.',
            'This article diagnoses neither a society nor a politician’s sincerity. Its conclusion concerns proof: a threat image cannot confirm itself. The more serious the action justified, the clearer its factual and legal basis must be. The rule applies equally to Russian, Ukrainian, and allied communication regardless of sympathy for the speaker.',
          ],
          [
            'Одне тлумачення вважає всю мову загрози пропагандою й може пропустити реальну небезпеку. Інше приймає слова влади як достатній доказ надзвичайності. Незалежна перевірка має охоплювати можливості, спостережувану поведінку, часовий горизонт, альтернативні пояснення та пропорційність відповіді. Політична функція важлива, але не визначає результат наперед.',
            'Стаття не ставить психологічного діагнозу суспільству й не вимірює щирість політиків. Її висновок стосується доказів: образ загрози не може підтверджувати сам себе. Що серйозніша дія, виправдана словами, то яснішими мають бути фактична й правова підстави. Правило однаково діє для російської, української та союзної комунікації незалежно від симпатії до мовця.',
          ],
        ),
      },
    ],
  },

  'concept-constitutional-procedure': {
    lead: L(
      'Конституционная процедура превращает политическую силу в полномочие, ограниченное заранее установленными правилами. В кризисе она особенно важна: фактический уход руководителя, парламентское решение, общественный протест и последующие выборы могут указывать на изменение власти, но отвечают на разные вопросы о его законности и устойчивости. События 22 февраля 2014 года нельзя честно описать только словами «переворот» или «безупречный переход». Нужно читать действующие статьи Конституции, постановление Верховной Рады, фактическую способность президента исполнять функции и последующее восстановление выборной легитимности.',
      'Constitutional procedure turns political power into authority constrained by pre-existing rules. It matters most in crisis: a leader’s effective departure, a parliamentary resolution, public protest, and later elections may all show changed power, but answer different questions about legality and stability. The events of 22 February 2014 cannot fairly be reduced to “coup” or “flawless transition.” The operative Constitution, the Verkhovna Rada resolution, the president’s capacity to act, and later electoral legitimation must be read together.',
      'Конституційна процедура перетворює політичну силу на повноваження, обмежене наперед установленими правилами. У кризі вона особливо важлива: фактичний відхід керівника, парламентська постанова, суспільний протест і наступні вибори можуть свідчити про зміну влади, але відповідають на різні питання законності та сталості. Події 22 лютого 2014 року не можна чесно звести до слів «переворот» або «бездоганний перехід». Треба читати чинну Конституцію, постанову Верховної Ради, фактичну здатність президента діяти та подальше виборче відновлення легітимності.',
    ),
    sections: [
      {
        title: L('Процедурный дефект и непрерывность институтов', 'Procedural defect and institutional continuity', 'Процедурний дефект та інституційна безперервність'),
        paragraphs: P(
          [
            'Порог анализа возникает при досрочном прекращении полномочий или передаче функций в условиях, прямо не описанных одной нормой. Сначала устанавливаются предусмотренные основания и компетентные органы, затем — форма и голоса принятого решения. Отдельно проверяется фактическая невозможность прежнего должностного лица действовать. Политическая необходимость может объяснить отклонение, но не делает текст процедуры ненужным.',
            'Возможный дефект перехода не равен автоматическому исчезновению парламента, судов, администрации и международной правосубъектности государства. Последующие выборы и признание могут укреплять новую власть, не переписывая задним числом каждый шаг. Обратная крайность тоже неверна: эффективность и признание не превращают исходную процедуру в идеальную. Анализ должен сохранить различие между первоначальной законностью и последующей институциональной устойчивостью.',
          ],
          [
            'The inquiry arises when authority ends early or functions transfer under circumstances not captured by one provision. First identify listed grounds, competent bodies, legal form, and votes; then separately examine the former officeholder’s practical ability to act. Political necessity may explain departure from procedure but does not make the procedural text irrelevant.',
            'A possible transition defect does not automatically dissolve parliament, courts, administration, and the state’s international personality. Later elections and recognition can strengthen new authorities without retroactively perfecting every step. Effectiveness and recognition likewise do not make the initial process flawless. Initial legality and later institutional stability must remain distinct.',
          ],
          [
            'Аналіз потрібен за дострокового припинення повноважень або передачі функцій в умовах, прямо не описаних однією нормою. Спершу встановлюють передбачені підстави, компетентні органи, форму й голоси рішення; окремо — фактичну здатність колишньої посадової особи діяти. Політична необхідність може пояснити відхилення, але не робить текст процедури непотрібним.',
            'Можливий дефект переходу не розчиняє автоматично парламент, суди, адміністрацію та міжнародну правосуб’єктність. Наступні вибори й визнання можуть зміцнювати нову владу, не виправляючи заднім числом кожний крок. Ефективність і визнання також не роблять початковий процес бездоганним. Початкову законність і подальшу інституційну сталість треба розрізняти.',
          ],
        ),
      },
      {
        title: L('Февраль, апрель и проверка полномочий', 'February, April, and authority', 'Лютий, квітень та перевірка повноважень'),
        paragraphs: P(
          [
            '«Смена власти в Украине» от 22 февраля 2014 года фиксирует парламентское решение о самоустранении президента от исполнения полномочий и назначении досрочных выборов. «Начало Антитеррористической операции» от 14 апреля 2014 года относится к отдельной цепочке решения Совета национальной безопасности и обороны и президентского указа. Нельзя смешивать февральское политическое заявление и апрельский правовой акт или переносить оценку одного на другой без проверки.',
            '«Крымский референдум и аннексия» от 16 марта 2014 года разворачивается между этими датами и показывает международное последствие кризиса власти. Спорность украинской процедуры не создаёт автоматически полномочие иностранного государства менять территориальный статус. Одновременно внешнее вмешательство не устраняет необходимость честно оценить соблюдение украинских норм. Внутренний и международный вопросы связаны, но имеют разные правовые тесты.',
          ],
          [
            '“Transfer of power in Ukraine” of 22 February 2014 records parliament’s finding that the president had withdrawn from performing duties and its call for early elections. “Start of the Anti-Terrorist Operation” of 14 April 2014 concerns a separate National Security and Defence Council decision and presidential decree. The February political transition and April legal act cannot be conflated or judged automatically through one another.',
            '“Crimean referendum and annexation” of 16 March 2014 unfolds between those dates and shows an international consequence of the authority crisis. A disputed Ukrainian procedure does not grant a foreign state authority to alter territory. Foreign intervention likewise does not remove the need to assess Ukrainian rules honestly. The domestic and international questions are connected but governed by different tests.',
          ],
          [
            '«Зміна влади в Україні» від 22 лютого 2014 року фіксує постанову парламенту про самоусунення президента від виконання повноважень і призначення дострокових виборів. «Початок Антитерористичної операції» від 14 квітня 2014 року стосується окремого рішення Ради національної безпеки і оборони та президентського указу. Лютневий перехід і квітневий правовий акт не можна змішувати або автоматично оцінювати один через інший.',
            '«Кримський референдум і анексія» від 16 березня 2014 року розгортаються між цими датами й показують міжнародний наслідок кризи влади. Спірна українська процедура не надає іноземній державі повноваження змінювати територію. Зовнішнє втручання також не усуває потреби чесно оцінити українські норми. Внутрішнє й міжнародне питання пов’язані, але мають різні тести.',
          ],
        ),
      },
      {
        title: L('Что устанавливают Конституция и постановление', 'What the Constitution and resolution establish', 'Що встановлюють Конституція й постанова'),
        paragraphs: P(
          [
            'Статьи 108–112 Конституции Украины следует читать в редакции и системе, действовавшей в феврале 2014 года: основания прекращения полномочий, порядок замещения и распределение функций не взаимозаменяемы. Постановление № 757-VII буквально утверждает, что президент самоустранился от исполнения конституционных полномочий, и назначает досрочные выборы. Оно не называется завершённой процедурой импичмента, поэтому аргумент должен работать с реальной формой документа.',
            'Официальный текст подтверждает принятие решения парламентом и его мотивировку, но не делает юридическую квалификацию неоспоримой. Для оценки нужны количество голосов, фактическое местонахождение и действия президента, работа других органов и последующие выборы. Международное признание показывает обращение с новой властью, но не является толкованием каждой статьи украинской Конституции. Каждый источник отвечает только на часть общей задачи.',
          ],
          [
            'Articles 108–112 of Ukraine’s Constitution should be read in the version and system operative in February 2014: grounds for termination, succession, and allocation of functions are not interchangeable. Resolution No. 757-VII literally states that the president withdrew from performing constitutional powers and calls early elections. It does not claim to complete impeachment, so analysis must address the document’s actual form.',
            'The official text proves parliament adopted and reasoned a decision but does not make its legal classification uncontested. Votes, the president’s location and conduct, other institutions, and later elections matter. International recognition shows dealings with new authorities but is not an interpretation of every constitutional provision. Each source answers only part of the inquiry.',
          ],
          [
            'Статті 108–112 Конституції України треба читати в редакції та системі, чинній у лютому 2014 року: підстави припинення повноважень, заміщення та розподіл функцій не взаємозамінні. Постанова № 757-VII буквально стверджує, що президент самоусунувся від виконання конституційних повноважень, і призначає дострокові вибори. Вона не називає себе завершеною процедурою імпічменту, тому аналіз має працювати з реальною формою документа.',
            'Офіційний текст доводить ухвалення й мотивування парламентського рішення, але не робить кваліфікацію безспірною. Важливі голоси, місцеперебування й дії президента, робота інших органів і наступні вибори. Міжнародне визнання показує відносини з новою владою, але не тлумачить кожне положення Конституції. Кожне джерело відповідає лише на частину завдання.',
          ],
        ),
      },
      {
        title: L('Между «переворотом» и безупречной законностью', 'Between “coup” and flawless legality', 'Між «переворотом» і бездоганною законністю'),
        paragraphs: P(
          [
            'Трактовка «переворота» подчёркивает несоответствие стандартной процедуре прекращения президентских полномочий и давление уличного кризиса. Трактовка демократического перехода указывает на парламентское большинство, фактическое отсутствие президента и последующие выборы. Первая часто делает из дефекта вывод о ничтожности всего государства; вторая иногда замалчивает отклонение от буквальной конституционной схемы. Обе требуют более узких выводов.',
            'Статья не выносит судебное решение о действительности каждого акта 2014 года. Она устанавливает способ чтения: назвать норму, решение, отклонение и последующее институциональное развитие. Даже серьёзный процедурный спор не оправдывает иностранное применение силы и не отменяет права граждан на протест. Одновременно политическая поддержка перехода не освобождает государственные органы от обязанности объяснять полномочия и сохранять проверяемую цепочку решений.',
          ],
          [
            'The “coup” account stresses departure from ordinary termination procedures and pressure from street crisis. The democratic-transition account stresses a parliamentary majority, the president’s effective absence, and later elections. The first often turns a defect into nullity of the entire state; the second may conceal departure from the literal scheme. Both require narrower conclusions.',
            'This article does not adjudicate every 2014 act. It supplies a method: identify the rule, decision, departure, and later institutional development. Even a serious procedural dispute neither justifies foreign force nor cancels the right to protest. Political support for transition also does not release public bodies from explaining authority and preserving a verifiable chain of decisions.',
          ],
          [
            'Версія «перевороту» підкреслює відхилення від звичайної процедури припинення президентських повноважень і тиск вуличної кризи. Версія демократичного переходу наголошує на парламентській більшості, фактичній відсутності президента й наступних виборах. Перша часто перетворює дефект на нікчемність усієї держави; друга може приховувати відхід від буквальної схеми. Обидві потребують вужчих висновків.',
            'Стаття не виносить судового рішення щодо кожного акта 2014 року. Вона дає метод: назвати норму, рішення, відхилення й подальший інституційний розвиток. Навіть серйозний процедурний спір не виправдовує зовнішню силу й не скасовує права на протест. Політична підтримка переходу також не звільняє органи від обов’язку пояснити повноваження та зберігати перевірюваний ланцюг рішень.',
          ],
        ),
      },
    ],
  },

  'concept-election-integrity': {
    lead: L(
      'Интегритет выборов означает достоверность всей цепочки, превращающей голоса граждан в законный мандат: правила участия, свободную кампанию, тайное голосование, честный подсчёт, независимое администрирование, разрешение жалоб и принятие результата. Высокий процент или сам факт открытия участков не заменяют эту систему. В российско-украинском контексте нужно различать общенациональный референдум 1991 года, очередные и досрочные украинские выборы, крымское голосование 2014 года и голосования на оккупированных территориях в 2022 году: их процедуры и среда принципиально различны.',
      'Electoral integrity is the reliability of the entire chain turning citizens’ votes into a lawful mandate: participation rules, a free campaign, ballot secrecy, honest counting, independent administration, remedies, and acceptance of results. A high percentage or open polling stations cannot replace that system. In the Russia–Ukraine context, the nationwide referendum of 1991, ordinary and early Ukrainian elections, the Crimean vote of 2014, and votes in occupied territories in 2022 must be distinguished because their procedures and environments differ fundamentally.',
      'Інтегритет виборів означає надійність усього ланцюга, що перетворює голоси громадян на законний мандат: правила участі, вільну кампанію, таємницю голосування, чесний підрахунок, незалежне адміністрування, розгляд скарг і прийняття результату. Високий відсоток або відкриті дільниці не замінюють цієї системи. У російсько-українському контексті треба розрізняти загальнонаціональний референдум 1991 року, звичайні й дострокові українські вибори, кримське голосування 2014 року та голосування на окупованих територіях 2022 року.',
    ),
    sections: [
      {
        title: L('Не только бюллетень и подсчёт', 'More than ballots and counting', 'Не лише бюлетень і підрахунок'),
        paragraphs: P(
          [
            'Порог полноценного электорального процесса начинается до дня голосования. Важны ясность закона, равное право кандидатов и позиций участвовать, доступ к информации, отсутствие запугивания, точность списков и независимость комиссии. После подсчёта нужны публикация данных, наблюдение и реальный способ оспорить нарушение. Без этих элементов цифра результата может быть точной арифметикой несвободной процедуры.',
            'Интегритет не требует полного отсутствия ошибки или политической страсти. Вопрос — могли ли нарушения изменить возможность свободного выбора и итог, были ли они системными и существовало ли эффективное исправление. Решение международного наблюдателя, суда или комиссии имеет вес в пределах его мандата. Общественное недоверие важно, но само по себе не доказывает фальсификацию без проверяемых данных.',
          ],
          [
            'A complete electoral process begins before polling day. Clear law, equal participation, access to information, freedom from intimidation, accurate rolls, and independent administration matter. After counting, publication, observation, and effective remedies are necessary. Without these elements, a result may be accurate arithmetic produced by an unfree process.',
            'Integrity does not require zero error or political passion. The questions are whether violations impaired free choice or outcome, whether they were systemic, and whether effective correction existed. Observers, courts, and commissions carry weight within their mandates. Public distrust matters but does not prove fraud without verifiable data.',
          ],
          [
            'Повноцінний виборчий процес починається до дня голосування. Важливі ясність закону, рівна участь кандидатів і позицій, доступ до інформації, відсутність залякування, точні списки й незалежне адміністрування. Після підрахунку потрібні публікація, спостереження та дієве оскарження. Без цих елементів результат може бути точною арифметикою невільної процедури.',
            'Інтегритет не вимагає повної відсутності помилок чи політичної пристрасті. Питання в тому, чи порушення вплинули на свободу вибору або підсумок, чи були системними й чи існувало ефективне виправлення. Спостерігачі, суди та комісії мають вагу в межах мандата. Суспільна недовіра важлива, але сама не доводить фальсифікації без перевірюваних даних.',
          ],
        ),
      },
      {
        title: L('Разные голосования в одной хронологии', 'Different votes within one chronology', 'Різні голосування в одній хронології'),
        paragraphs: P(
          [
            '«Распад СССР» от 26 декабря 1991 года связан со всеукраинским референдумом, проведённым в общереспубликанском масштабе по вопросу независимости. «Смена власти в Украине» от 22 февраля 2014 года привела к досрочному электоральному циклу, который должен был восстановить прямой мандат после кризиса. Эти процессы можно критиковать, но их нельзя оценивать тем же набором фактов, что голосование под иностранным военным контролем.',
            '«Крымский референдум и аннексия» от 16 марта 2014 года прошёл в условиях смены фактического контроля и вне украинской конституционной процедуры. «Заявленная аннексия четырёх регионов» от 30 сентября 2022 года опиралась на голосования во время полномасштабной войны, оккупации и массового перемещения населения. Процент результата не устраняет вопросы о составе участников, свободе кампании и принуждении.',
          ],
          [
            '“USSR dissolution” of 26 December 1991 relates to a republic-wide referendum on independence. “Transfer of power in Ukraine” of 22 February 2014 led to an early electoral cycle intended to restore a direct mandate after crisis. These processes can be criticised, but they cannot be assessed through the same facts as voting under foreign military control.',
            '“Crimean referendum and annexation” of 16 March 2014 occurred amid a change of effective control and outside Ukrainian constitutional procedure. “Claimed annexation of four regions” of 30 September 2022 relied on votes during full-scale war, occupation, and mass displacement. Announced percentages do not answer who participated, whether campaigning was free, or whether coercion operated.',
          ],
          [
            '«Розпад СРСР» від 26 грудня 1991 року пов’язаний із всеукраїнським референдумом загальнореспубліканського масштабу щодо незалежності. «Зміна влади в Україні» від 22 лютого 2014 року привела до дострокового виборчого циклу, покликаного відновити прямий мандат після кризи. Ці процеси можна критикувати, але їх не можна оцінювати за тими самими фактами, що голосування під іноземним військовим контролем.',
            '«Кримський референдум і анексія» від 16 березня 2014 року відбулися під час зміни фактичного контролю й поза українською конституційною процедурою. «Заявлена анексія чотирьох регіонів» від 30 вересня 2022 року спиралася на голосування під час повномасштабної війни, окупації та масового переміщення населення. Відсоток не відповідає на питання складу учасників, свободи кампанії та примусу.',
          ],
        ),
      },
      {
        title: L('Как читать решения и отчёты', 'How to read decisions and reports', 'Як читати рішення та звіти'),
        paragraphs: P(
          [
            'Официальный акт о назначении выборов или референдума устанавливает правовое основание, вопрос, дату и ответственные органы. Он не доказывает качество исполнения. Итоговый протокол фиксирует объявленные цифры, но для проверки нужны данные по участкам, жалобы, судебные решения и наблюдение. Наличие документа является необходимым элементом процедуры, а не автоматическим свидетельством её свободы.',
            'Резолюции Генеральной Ассамблеи по Крыму и оккупированным территориям оценивают голосования как неспособные изменить международный статус и призывают не признавать заявленный результат. Они не являются социологическим исследованием личных взглядов всех жителей. Отчёты наблюдателей также следует читать по охвату и доступу: отсутствие наблюдения может быть существенным ограничением, но не позволяет выдумать неизвестные детали.',
          ],
          [
            'An official act calling an election or referendum establishes legal basis, question, date, and responsible bodies; it does not prove execution quality. A final protocol records announced figures, while verification requires precinct data, complaints, court decisions, and observation. Documentation is necessary but not automatic evidence of freedom.',
            'General Assembly resolutions on Crimea and occupied territories assess the votes as incapable of changing international status and call for non-recognition. They are not sociological studies of every resident’s views. Observer reports must also be read through coverage and access: lack of observation is a serious limit but does not permit invented details.',
          ],
          [
            'Офіційний акт про призначення виборів або референдуму встановлює підставу, питання, дату й відповідальні органи; він не доводить якість виконання. Підсумковий протокол фіксує оголошені цифри, а перевірка потребує даних дільниць, скарг, судових рішень і спостереження. Документ є необхідним елементом, але не автоматичним доказом свободи.',
            'Резолюції Генеральної Асамблеї щодо Криму й окупованих територій оцінюють голосування як нездатні змінити міжнародний статус і закликають до невизнання. Вони не є соціологічним дослідженням поглядів усіх мешканців. Звіти спостерігачів також читають за охопленням і доступом: відсутність спостереження є суттєвим обмеженням, але не дозволяє вигадувати невідомі деталі.',
          ],
        ),
      },
      {
        title: L('Мандат, доверие и границы вывода', 'Mandate, trust, and limits of inference', 'Мандат, довіра та межі висновку'),
        paragraphs: P(
          [
            'Одна позиция считает формальное проведение голосования достаточным для легитимности. Другая отвергает результат, если он политически нежелателен или если часть общества ему не доверяет. Обе подменяют проверку. Процесс должен оцениваться по заранее одинаковым критериям, а масштаб нарушения — соотноситься с выводом. Отдельная ошибка не обязательно отменяет весь мандат; системное принуждение нельзя исправить одной красивой цифрой.',
            'Статья не устанавливает предпочтения населения Крыма или регионов и не объявляет все украинские выборы безупречными. Её вывод методический: сравнивать нужно не проценты, а институциональные условия превращения голоса в решение. Электоральный мандат даёт полномочие на срок и в рамках Конституции, но не снимает последующую ответственность. Именно поэтому интегритет и демократическая подотчётность дополняют, а не заменяют друг друга.',
          ],
          [
            'One position treats holding a vote as sufficient legitimacy. Another rejects a politically unwelcome result or one distrusted by part of society. Both replace scrutiny. The same prior criteria must assess each process, and the conclusion must match the violation’s scale. An isolated error need not void a mandate; systemic coercion cannot be cured by an impressive number.',
            'This article neither determines preferences in Crimea or other regions nor calls every Ukrainian election flawless. Its method compares institutional conditions, not percentages. An electoral mandate grants limited authority for a term and does not remove later accountability. Electoral integrity and democratic accountability therefore complement rather than replace each other.',
          ],
          [
            'Одна позиція вважає сам факт голосування достатньою легітимністю. Інша відкидає політично небажаний результат або той, якому не довіряє частина суспільства. Обидві підміняють перевірку. Кожен процес треба оцінювати за однаковими попередніми критеріями, а висновок — співвідносити з масштабом порушення. Окрема помилка не обов’язково скасовує мандат; системний примус не виправляється красивою цифрою.',
            'Стаття не визначає вподобання населення Криму чи регіонів і не називає всі українські вибори бездоганними. Її метод порівнює інституційні умови, а не відсотки. Виборчий мандат дає обмежене повноваження на строк і не знімає подальшої відповідальності. Тому інтегритет і демократична підзвітність доповнюють, а не замінюють одне одного.',
          ],
        ),
      },
    ],
  },

  'concept-democratic-accountability': {
    lead: L(
      'Демократическая ответственность означает, что победа на выборах даёт временный мандат управлять, но не освобождает руководителей от закона, контроля институтов, публичного объяснения решений и предусмотренных способов досрочного прекращения полномочий. Протест, парламент, суд, расследование и следующие выборы являются разными каналами обратной связи. Украинский кризис 2014 года показывает их столкновение: массовое давление и бегство президента сочетались со спорной конституционной процедурой и последующим электоральным обновлением власти. Нравственная оценка лидера не заменяет вопроса о законном механизме ответственности.',
      'Democratic accountability means that electoral victory grants a temporary mandate to govern but does not release leaders from law, institutional oversight, public explanation, or prescribed means of early removal. Protest, parliament, courts, investigation, and later elections are distinct feedback channels. Ukraine’s 2014 crisis shows their collision: mass pressure and presidential flight coincided with a contested constitutional process and later electoral renewal. Moral judgment of a leader does not replace the question of lawful accountability.',
      'Демократична підзвітність означає, що перемога на виборах дає тимчасовий мандат керувати, але не звільняє лідерів від закону, інституційного контролю, публічного пояснення та передбачених способів дострокового припинення повноважень. Протест, парламент, суд, розслідування й наступні вибори є різними каналами зворотного зв’язку. Українська криза 2014 року показує їх зіткнення: масовий тиск і втеча президента поєдналися зі спірною процедурою та наступним виборчим оновленням. Моральна оцінка лідера не замінює законного механізму відповідальності.',
    ),
    sections: [
      {
        title: L('Мандат не является иммунитетом', 'A mandate is not immunity', 'Мандат не є імунітетом'),
        paragraphs: P(
          [
            'Порог ответственности возникает не только при уголовном обвинении. Политический контроль включает вопросы парламента, независимую информацию, аудит, протест и оценку на следующих выборах. Для досрочного лишения полномочий обычно действуют более строгие юридические процедуры, потому что нужно защитить и общество от злоупотребления лидера, и выборы от произвольного пересмотра проигравшей стороной.',
            'Демократическая ответственность направлена на решения и институты, а не только на характер политика. Популярность не делает действие законным, непопулярность не доказывает преступление. Обоснованная критика должна назвать решение, обязанность, ущерб и орган, способный его проверить. Такое устройство медленнее уличного приговора, но позволяет отличать политическую смену курса от юридического наказания.',
          ],
          [
            'Accountability is triggered by more than criminal accusation. Political oversight includes parliamentary questions, independent information, audit, protest, and judgment at later elections. Early removal usually follows stricter legal procedure to protect both society from abuse and an electoral result from arbitrary revision by those who lost.',
            'Democratic accountability concerns decisions and institutions, not only a politician’s character. Popularity does not make conduct lawful; unpopularity does not prove crime. Sound criticism identifies the decision, duty, harm, and reviewing body. That is slower than a street verdict but distinguishes political change from legal punishment.',
          ],
          [
            'Підзвітність виникає не лише за кримінального обвинувачення. Політичний контроль охоплює парламентські питання, незалежну інформацію, аудит, протест і оцінку на наступних виборах. Дострокове позбавлення повноважень зазвичай має суворішу процедуру, щоб захистити суспільство від зловживання, а виборчий результат — від свавільного перегляду переможеними.',
            'Демократична підзвітність стосується рішень та інституцій, а не лише характеру політика. Популярність не робить дію законною, непопулярність не доводить злочину. Обґрунтована критика називає рішення, обов’язок, шкоду й орган перевірки. Це повільніше за вуличний вирок, але відрізняє політичну зміну від юридичного покарання.',
          ],
        ),
      },
      {
        title: L('Ответственность в кризисе 2014 года', 'Accountability in the 2014 crisis', 'Підзвітність у кризі 2014 року'),
        paragraphs: P(
          [
            '«Смена власти в Украине» от 22 февраля 2014 года показывает конфликт между полученным ранее президентским мандатом, массовым протестом, парламентским решением и фактическим прекращением исполнения функций. «Начало Антитеррористической операции» от 14 апреля 2014 года уже проверяет ответственность новой власти за применение силовых полномочий. Критика прежнего президента не даёт преемникам неограниченной свободы, а спорность перехода не делает каждое их решение ничтожным.',
            '«Военное положение в Украине» от 24 февраля 2022 года создаёт новый уровень исполнительной власти и ограничений на фоне вторжения. Чрезвычайная необходимость усиливает потребность в быстрых решениях, но не устраняет парламентский, судебный и публичный контроль там, где он практически возможен. Продолжение полномочий и перенос выборов во время военного положения следует оценивать по действующим нормам, а не только по отношению к конкретному руководителю.',
          ],
          [
            '“Transfer of power in Ukraine” of 22 February 2014 shows conflict among an earlier presidential mandate, mass protest, parliamentary action, and effective cessation of duties. “Start of the Anti-Terrorist Operation” of 14 April 2014 then tests the succeeding authorities’ responsibility for coercive powers. Criticism of the former president does not give successors unlimited freedom, while a disputed transition does not void every later decision.',
            '“Martial law in Ukraine” of 24 February 2022 creates a new level of executive power and restriction amid invasion. Emergency increases the need for rapid decisions but does not eliminate parliamentary, judicial, and public scrutiny where practicable. Continuation in office and postponed elections under martial law should be assessed by operative rules rather than feelings about one leader.',
          ],
          [
            '«Зміна влади в Україні» від 22 лютого 2014 року показує конфлікт між попереднім президентським мандатом, масовим протестом, парламентським рішенням і фактичним припиненням виконання функцій. «Початок Антитерористичної операції» від 14 квітня 2014 року вже перевіряє відповідальність нової влади за силові повноваження. Критика колишнього президента не дає наступникам необмеженої свободи, а спірний перехід не робить кожне їхнє рішення нікчемним.',
            '«Воєнний стан в Україні» від 24 лютого 2022 року створює новий рівень виконавчої влади й обмежень під час вторгнення. Надзвичайність посилює потребу у швидких рішеннях, але не усуває парламентський, судовий і публічний контроль там, де він практично можливий. Продовження повноважень і перенесення виборів слід оцінювати за чинними нормами, а не ставленням до конкретного керівника.',
          ],
        ),
      },
      {
        title: L('Как читать нормы об ответственности', 'How to read accountability rules', 'Як читати норми про підзвітність'),
        paragraphs: P(
          [
            'Конституционные положения о президентском сроке, прекращении полномочий, импичменте и временном исполнении функций отвечают на разные ситуации. Их нельзя заменить общим утверждением, что народ является источником власти. Этот принцип реализуется через институты и процедуры, иначе любая группа сможет объявить себя непосредственным выражением народа. Постановление парламента устанавливает принятое решение, но его соответствие каждой норме остаётся предметом анализа.',
            'Закон о военном положении устанавливает дополнительные полномочия и ограничения, включая избирательный календарь, но не создаёт полного правового вакуума. Официальные акты нужно читать по сроку, органу продления и доступным средствам контроля. Документ подтверждает юридическую основу действия; отчёты парламента, суда, аудитора или расследования помогают оценить исполнение. Политический комментарий не заменяет ни один из этих уровней.',
          ],
          [
            'Constitutional rules on presidential term, termination, impeachment, and temporary performance address different situations. They cannot be replaced by saying simply that the people are the source of power. That principle operates through institutions; otherwise any group could declare itself the people’s direct expression. A parliamentary resolution proves a decision was made, while conformity with every rule remains open to analysis.',
            'Martial-law legislation adds powers and restrictions, including electoral timing, but creates no legal vacuum. Official acts should be read for duration, renewal authority, and available review. An instrument confirms legal basis; reports by parliament, courts, auditors, or investigations assess performance. Political commentary substitutes for none of these levels.',
          ],
          [
            'Конституційні норми про президентський строк, припинення повноважень, імпічмент і тимчасове виконання функцій стосуються різних ситуацій. Їх не можна замінити загальною фразою, що народ є джерелом влади. Цей принцип діє через інституції, інакше будь-яка група зможе оголосити себе прямим виразником народу. Постанова парламенту доводить ухвалення рішення, але відповідність кожній нормі потребує аналізу.',
            'Закон про воєнний стан додає повноваження й обмеження, включно з виборчим календарем, але не створює правового вакууму. Офіційні акти треба читати за строком, органом продовження та доступним контролем. Документ підтверджує правову основу; звіти парламенту, суду, аудитора чи розслідування оцінюють виконання. Політичний коментар не замінює жодного рівня.',
          ],
        ),
      },
      {
        title: L('Моральный приговор и институциональный ответ', 'Moral judgment and institutional response', 'Моральний вирок та інституційна відповідь'),
        paragraphs: P(
          [
            'Одна трактовка считает победу на выборах достаточным ответом на все претензии до следующего голосования. Другая считает массовое возмущение достаточным для немедленного прекращения полномочий. Первая делает мандат иммунитетом; вторая рискует заменить право балансом улицы. Демократия требует сохранить и возможность общества остановить злоупотребление, и процедуру, защищающую результат выборов от произвольной отмены.',
            'Статья не оправдывает бездействие институтов в чрезвычайной ситуации и не утверждает, что формальная процедура всегда доступна полностью. Она ограничивает вывод: отклонение должно быть названо, объяснено и по возможности исправлено последующим легитимным процессом, а не скрыто моральной убеждённостью одной стороны. Устойчивая ответственность измеряется тем, могут ли одинаковые правила проверять союзников и противников, действующую и прежнюю власть.',
          ],
          [
            'One reading treats electoral victory as a complete answer to every claim until the next vote. Another treats mass anger as sufficient for immediate removal. The first makes a mandate immunity; the second risks replacing law with street power. Democracy must preserve both society’s ability to stop abuse and procedures protecting election results from arbitrary reversal.',
            'This article does not justify institutional inaction in emergency or assume perfect procedure is always available. It limits the conclusion: departures should be named, explained, and where possible corrected by a later legitimate process rather than concealed by one side’s moral certainty. Durable accountability means the same rules can scrutinise allies and opponents, current and former authorities.',
          ],
          [
            'Одне тлумачення вважає перемогу на виборах повною відповіддю на всі претензії до наступного голосування. Інше вважає масове обурення достатнім для негайного усунення. Перше робить мандат імунітетом; друге ризикує замінити право силою вулиці. Демократія має зберігати і здатність суспільства зупинити зловживання, і процедуру захисту виборчого результату від свавільного скасування.',
            'Стаття не виправдовує бездіяльність інституцій у надзвичайній ситуації й не припускає, що ідеальна процедура завжди доступна. Вона обмежує висновок: відхилення треба назвати, пояснити й за можливості виправити наступним легітимним процесом, а не приховати моральною певністю однієї сторони. Стала підзвітність означає однакові правила для союзників і противників, чинної та колишньої влади.',
          ],
        ),
      },
    ],
  },
}
