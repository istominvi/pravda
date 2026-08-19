import type { Localized } from '../domain/types'

const L = (ru: string, en: string, uk: string): Localized => ({ ru, en, uk })
const P = (ru: string[], en: string[], uk: string[]): Localized<string[]> => ({ ru, en, uk })

type EditorialEventArticle = {
  lead: Localized
  sections: Array<{
    title: Localized
    paragraphs: Localized<string[]>
  }>
}

export const editorialEventArticlesA: Record<string, EditorialEventArticle> = {
  'un-charter': {
    lead: L(
      'Устав ООН был подписан 26 июня 1945 года после мировой войны и вступил в силу 24 октября. Для российско-украинского конфликта это не церемонический пролог, а действующая исходная рамка: суверенное равенство государств, запрет угрозы силой и её применения, система коллективной безопасности и право на индивидуальную или коллективную самооборону. Документ не выдаёт готовый ответ на каждый исторический и территориальный спор. Он устанавливает порядок рассуждения, в котором политическая причина войны, субъективное чувство угрозы и признанное правовое исключение должны рассматриваться раздельно.',
      'The UN Charter was signed on 26 June 1945 after the world war and entered into force on 24 October. For the Russia–Ukraine conflict it is not a ceremonial preface but the operative starting framework: sovereign equality, the prohibition on the threat or use of force, collective security, and individual or collective self-defence. It does not pre-write an answer to every historical and territorial dispute. It establishes a method in which a political cause of war, a subjective sense of threat, and a recognised legal exception are examined separately.',
      'Статут ООН підписали 26 червня 1945 року після світової війни, а чинності він набув 24 жовтня. Для російсько-українського конфлікту це не церемоніальна передмова, а чинна вихідна рамка: суверенна рівність, заборона погрози силою та її застосування, колективна безпека й індивідуальна або колективна самооборона. Документ не дає наперед готової відповіді на кожний історичний і територіальний спір. Він встановлює спосіб мислення, у якому політичну причину війни, суб’єктивне відчуття загрози та визнаний правовий виняток розглядають окремо.',
    ),
    sections: [
      {
        title: L('Что буквально учреждает Устав', 'What the Charter literally establishes', 'Що буквально встановлює Статут'),
        paragraphs: P(
          [
            'Устав создаёт Организацию Объединённых Наций и формулирует цели поддержания международного мира, развития дружественных отношений и сотрудничества. Среди основных принципов он закрепляет суверенное равенство членов и обязанность добросовестно выполнять принятые обязательства. Положение о силе запрещает государствам угрожать ею или применять её против территориальной целостности и политической независимости другого государства либо иным образом, несовместимым с целями ООН.',
            'Право самообороны сформулировано отдельно на случай вооружённого нападения и связано с ролью Совета Безопасности. Это исключение нельзя превратить в общее разрешение на войну из-за политического конфликта или будущего риска. Устав также предоставляет Совету Безопасности центральную функцию в коллективных мерах, но не обещает, что институциональный механизм сработает без политических препятствий в каждом кризисе.',
          ],
          [
            'The Charter creates the United Nations and states purposes of maintaining international peace, developing friendly relations, and promoting cooperation. Its principles include sovereign equality and good-faith performance of obligations. Its force rule bars states from threatening or using force against another state’s territorial integrity or political independence, or otherwise inconsistently with UN purposes.',
            'Self-defence is stated separately for an armed attack and linked to the Security Council’s role. It cannot become general permission for war because of political conflict or future risk. The Charter also gives the Security Council a central collective-security function, but does not promise that political obstacles will never prevent institutional action.',
          ],
          [
            'Статут створює Організацію Об’єднаних Націй і формулює цілі підтримання міжнародного миру, розвитку дружніх відносин та співпраці. Серед принципів він закріплює суверенну рівність членів і добросовісне виконання зобов’язань. Положення про силу забороняє погрожувати нею або застосовувати її проти територіальної цілісності чи політичної незалежності іншої держави або в інший спосіб, несумісний із цілями ООН.',
            'Право на самооборону сформульовано окремо на випадок збройного нападу й пов’язано з роллю Ради Безпеки. Його не можна перетворювати на загальний дозвіл війни через політичний конфлікт або майбутній ризик. Статут також надає Раді Безпеки центральну функцію в колективних заходах, але не обіцяє, що політичні перешкоди ніколи не заблокують інституційну дію.',
          ],
        ),
      },
      {
        title: L('Как Устав проходит через украинскую хронологию', 'How the Charter runs through the Ukrainian chronology', 'Як Статут проходить через українську хронологію'),
        paragraphs: P(
          [
            'После распада СССР 26 декабря 1991 года Украина и Россия действуют как отдельные государства в уставной системе, а Россия продолжает членство СССР в ООН. Будапештский меморандум 5 декабря 1994 года повторяет применительно к Украине требования уважать независимость, суверенитет и существующие границы и воздерживаться от угрозы силой. Последующий спор поэтому разворачивается не в правовом вакууме и не внутри прежнего союзного государства.',
            'Крымское голосование 16 марта 2014 года и заявленная аннексия четырёх регионов 30 сентября 2022 года ставят вопрос о территориальных последствиях силы. Полномасштабное вторжение 24 февраля 2022 года затрагивает ядро общего запрета, а защита Украины — право атакованного государства на самооборону. Эти выводы не освобождают ни одну сторону от отдельных правил ведения боевых действий и защиты гражданских.',
          ],
          [
            'After the USSR dissolved on 26 December 1991, Ukraine and Russia operate as separate states within the Charter system, while Russia continues the USSR’s UN membership. The Budapest Memorandum of 5 December 1994 repeats for Ukraine duties to respect independence, sovereignty, and existing borders and to refrain from force. The later dispute thus occurs neither in a legal vacuum nor inside the former Union state.',
            'The Crimean vote of 16 March 2014 and the claimed annexation of four regions on 30 September 2022 raise territorial consequences of force. The full-scale invasion of 24 February 2022 reaches the core prohibition, while Ukraine’s defence invokes the attacked state’s defensive right. These conclusions release neither party from separate rules governing hostilities and civilian protection.',
          ],
          [
            'Після розпаду СРСР 26 грудня 1991 року Україна й Росія діють як окремі держави в системі Статуту, а Росія продовжує членство СРСР в ООН. Будапештський меморандум 5 грудня 1994 року повторює щодо України вимоги поважати незалежність, суверенітет і чинні кордони та утримуватися від сили. Наступний спір відбувається не в правовому вакуумі й не всередині колишньої союзної держави.',
            'Кримське голосування 16 березня 2014 року та заявлена анексія чотирьох регіонів 30 вересня 2022 року ставлять питання про територіальні наслідки сили. Повномасштабне вторгнення 24 лютого 2022 року зачіпає ядро загальної заборони, а захист України — право атакованої держави на самооборону. Ці висновки не звільняють сторони від окремих правил ведення війни й захисту цивільних.',
          ],
        ),
      },
      {
        title: L('Как читать статьи 2(4) и 51 вместе', 'Reading Articles 2(4) and 51 together', 'Як читати статті 2(4) і 51 разом'),
        paragraphs: P(
          [
            'Статья 2(4) задаёт общий запрет, поэтому анализ начинается с установления межгосударственной силы, а не с поиска удобной политической причины. Статья 51 сохраняет право на индивидуальную и коллективную самооборону при вооружённом нападении. Сторона, ссылающаяся на исключение, должна назвать нападение, защитную цель и связь выбранных мер с необходимостью отражения, а не только использовать слово «оборона».',
            'Устав не содержит положений о НАТО, украинском нейтралитете, советских административных границах или праве «исторически близкого» государства защищать соседнее население военной операцией. Эти вопросы могут регулироваться другими документами и влиять на политический контекст. Они не должны незаметно добавляться в текст Устава как новые основания силы. Полный документ важнее пересказа одной стороны.',
          ],
          [
            'Article 2(4) supplies the general prohibition, so analysis begins by identifying interstate force rather than searching for a convenient political cause. Article 51 preserves individual and collective self-defence if an armed attack occurs. A party invoking the exception must identify the attack, defensive purpose, and connection between the measure and the need to repel it, not merely use the word “defence.”',
            'The Charter says nothing about NATO, Ukrainian neutrality, Soviet administrative borders, or a right of a “historically close” state to protect a neighbouring population by military operation. Other instruments may govern these matters and they may shape context, but they cannot be silently inserted as new grounds for force. The full document matters more than one side’s paraphrase.',
          ],
          [
            'Стаття 2(4) задає загальну заборону, тому аналіз починається зі встановлення міждержавної сили, а не пошуку зручної політичної причини. Стаття 51 зберігає право на індивідуальну й колективну самооборону в разі збройного нападу. Сторона, що заявляє виняток, має назвати напад, захисну мету та зв’язок заходів із необхідністю відбиття, а не лише вжити слово «оборона».',
            'Статут не містить положень про НАТО, український нейтралітет, радянські адміністративні кордони чи право «історично близької» держави захищати сусіднє населення військовою операцією. Інші документи можуть регулювати ці питання й формувати контекст, але їх не можна непомітно додавати до Статуту як нові підстави сили. Повний документ важливіший за переказ однієї сторони.',
          ],
        ),
      },
      {
        title: L('Сильная норма и пределы её применения', 'A strong rule and its limits', 'Сильна норма та межі її застосування'),
        paragraphs: P(
          [
            'Одна трактовка превращает Устав в формальный текст без силы, поскольку постоянный член Совета Безопасности может блокировать решения. Другая ожидает от одной ссылки на него ответа на каждый спор о фактах, намерениях и ответственности. Первая смешивает нарушение и отсутствие нормы; вторая приписывает договору доказательную работу, которую должны выполнить документы, свидетельства и уполномоченные органы.',
            'Из Устава можно заключить, какой общий стандарт и какие основные исключения применимы. Нельзя только из него вывести, что произошло в конкретном месте, кто отдал приказ, была ли отдельная атака соразмерной или каким должен стать мирный договор. Его постоянная ценность уже и фундаментальнее: даже тяжёлая предыстория не выводит государство из равной системы правил, а политическое объяснение не подменяет правовое основание.',
          ],
          [
            'One reading treats the Charter as powerless because a permanent Security Council member can block decisions. Another expects one citation to resolve every factual, intentional, and responsibility dispute. The first confuses breach and absence of law; the second assigns evidentiary work to a treaty that must be done by documents, testimony, and competent institutions.',
            'The Charter establishes the general standard and principal exceptions. It cannot alone show what happened at a location, who ordered it, whether an attack was proportionate, or what a peace treaty should contain. Its value is narrower and more fundamental: grave background does not remove a state from equal rules, and political explanation does not substitute for a legal ground.',
          ],
          [
            'Одне тлумачення вважає Статут безсилим, бо постійний член Ради Безпеки може блокувати рішення. Інше очікує від одного посилання відповіді на кожний спір про факти, наміри й відповідальність. Перше змішує порушення й відсутність норми; друге покладає на договір доказову роботу, яку мають виконати документи, свідчення та компетентні органи.',
            'Статут дозволяє встановити загальний стандарт і головні винятки. Лише з нього не можна визначити, що сталося в конкретному місці, хто віддав наказ, чи була атака пропорційною або яким має бути мирний договір. Його цінність вужча й фундаментальніша: тяжка передісторія не виводить державу з рівної системи правил, а політичне пояснення не замінює правової підстави.',
          ],
        ),
      },
    ],
  },

  'crimea-transfer-1954': {
    lead: L(
      'Передача Крымской области в состав Украинской ССР была не личным «подарком», а последовательностью советских государственных актов. 19 февраля 1954 года Президиум Верховного Совета СССР утвердил совместное представление республиканских президиумов; 26 апреля Верховный Совет СССР утвердил указ законом и изменил конституционные перечни территорий. Спор о компетенции отдельных органов существует, но его нельзя решать по одному февральскому постановлению или по позднему политическому ярлыку. Тем более советская процедура 1954 года не отвечает сама по себе на вопросы суверенитета и применения силы после признанной независимости Украины.',
      'The transfer of the Crimean region to the Ukrainian SSR was not a personal “gift” but a sequence of Soviet state acts. On 19 February 1954 the Presidium of the USSR Supreme Soviet approved a joint submission by republican presidiums; on 26 April the Supreme Soviet approved the decree by law and amended constitutional territorial lists. Questions about institutional competence exist, but cannot be decided through one February resolution or a later political label. Nor can a 1954 Soviet procedure alone answer sovereignty and force questions after Ukraine’s recognised independence.',
      'Передача Кримської області до Української РСР була не особистим «подарунком», а послідовністю радянських державних актів. 19 лютого 1954 року Президія Верховної Ради СРСР затвердила спільне подання республіканських президій; 26 квітня Верховна Рада СРСР затвердила указ законом і змінила конституційні переліки територій. Спір про компетенцію окремих органів існує, але його не можна вирішити за однією лютневою постановою або пізнім політичним ярликом. Радянська процедура 1954 року також сама не відповідає на питання суверенітету й сили після визнаної незалежності України.',
    ),
    sections: [
      {
        title: L('Цепочка решений 1954 года', 'The chain of decisions in 1954', 'Ланцюг рішень 1954 року'),
        paragraphs: P(
          [
            'Февральский указ фиксировал передачу области на основании совместного представления президиумов РСФСР и УССР. Апрельский закон Верховного Совета СССР утвердил указ и сопровождался изменением конституционного перечисления территорий республик. Для точного описания нужно различать республиканские согласования, решение союзного президиума, утверждение высшим союзным органом и последующее отражение результата в конституционном тексте.',
            'Статья 16 Конституции РСФСР и статья 18 Конституции СССР требовали согласия республики на изменение территории. Сами формулировки не называли всенародный референдум единственным способом такого согласия. Это не снимает вопроса о пределах полномочий республиканского президиума, но не позволяет добавить в текст отсутствующую процедуру. Ответ требует всей институциональной цепочки, а не современного представления о желательной демократии.',
          ],
          [
            'The February decree recorded the transfer following a joint submission by the RSFSR and Ukrainian SSR presidiums. The April law of the USSR Supreme Soviet approved the decree and accompanied amended constitutional lists of republican territories. A precise account distinguishes republican approvals, the Union presidium decision, approval by the supreme Union body, and later constitutional reflection.',
            'Article 16 of the RSFSR Constitution and Article 18 of the USSR Constitution required republican consent to territorial change. Their wording did not specify a nationwide referendum as the only form. That does not eliminate questions about a republican presidium’s authority, but it prevents adding a procedure absent from the text. The answer requires the entire institutional chain, not current preferences about democratic form.',
          ],
          [
            'Лютневий указ фіксував передачу області на підставі спільного подання президій РРФСР та УРСР. Квітневий закон Верховної Ради СРСР затвердив указ і супроводжувався зміною конституційних переліків територій республік. Точний опис розрізняє республіканські погодження, рішення союзної президії, затвердження найвищим союзним органом і подальше відображення результату в конституційному тексті.',
            'Стаття 16 Конституції РРФСР і стаття 18 Конституції СРСР вимагали згоди республіки на зміну території. Самі формулювання не називали всенародний референдум єдиною формою. Це не усуває питання про повноваження республіканської президії, але не дозволяє додати відсутню процедуру. Відповідь потребує всього інституційного ланцюга, а не сучасного уявлення про бажану демократію.',
          ],
        ),
      },
      {
        title: L('От советской границы к межгосударственной', 'From a Soviet boundary to an international border', 'Від радянського кордону до міждержавного'),
        paragraphs: P(
          [
            'В 1954 году граница изменилась внутри СССР, а не между двумя независимыми государствами. Декларация о суверенитете Украины 16 июля 1990 года и распад СССР в декабре 1991 года создали иной правовой контекст. После международного признания бывшая внутренняя граница стала частью территории независимой Украины, а российско-украинские документы и Будапештский меморандум 5 декабря 1994 года исходили из существующих границ.',
            'Крымское голосование 16 марта 2014 года и последующее принятие полуострова Россией нельзя оценить только как исправление советского решения. Между событиями лежат шесть десятилетий законодательства, распад союзного государства, признание суверенитета и запрет межгосударственной силы. История передачи объясняет происхождение линии на карте и политические претензии, но не переносит автоматически титул в 2014 году.',
          ],
          [
            'In 1954 the boundary changed within the USSR, not between two independent states. Ukraine’s sovereignty declaration of 16 July 1990 and the USSR’s dissolution in December 1991 created a different legal setting. After international recognition, the former internal boundary formed part of independent Ukraine, while Russia–Ukraine instruments and the Budapest Memorandum of 5 December 1994 proceeded from existing borders.',
            'The Crimean vote of 16 March 2014 and Russia’s subsequent incorporation cannot be assessed simply as correction of a Soviet decision. Six decades of law, Union dissolution, recognised sovereignty, and the prohibition on interstate force stand between them. The transfer explains the line’s origin and political claims but does not automatically transfer title in 2014.',
          ],
          [
            '1954 року кордон змінився всередині СРСР, а не між двома незалежними державами. Декларація про суверенітет України 16 липня 1990 року та розпад СРСР у грудні 1991 року створили інший правовий контекст. Після міжнародного визнання колишній внутрішній кордон став частиною території незалежної України, а російсько-українські документи й Будапештський меморандум 5 грудня 1994 року виходили з чинних кордонів.',
            'Кримське голосування 16 березня 2014 року та подальше включення півострова до Росії не можна оцінювати лише як виправлення радянського рішення. Між подіями лежать шість десятиліть права, розпад Союзу, визнаний суверенітет і заборона міждержавної сили. Історія передачі пояснює походження лінії та політичні претензії, але не переносить титул автоматично у 2014 році.',
          ],
        ),
      },
      {
        title: L('Что установило российское решение 1992 года', 'What the 1992 Russian resolution established', 'Що встановила російська постанова 1992 року'),
        paragraphs: P(
          [
            'Верховный Совет России в 1992 году назвал постановление Президиума РСФСР от 5 февраля 1954 года не имевшим юридической силы с момента принятия из-за нарушения Конституции и законодательной процедуры. Эту часть часто цитируют отдельно. Однако тот же текст признал, что последующее союзное законодательство и договор 1990 года правовым образом закрепили фактическое изменение, и предложил решать вопрос межгосударственными переговорами.',
            'Постановление 1992 года является официальной российской оценкой одного звена советской процедуры, но не международным судебным решением о принадлежности Крыма. Его полный текст не говорит, что Россия вправе изменить границу односторонней силой. Заявление Верховной Рады Украины, данное в ответ, показывает непосредственный межгосударственный спор и украинское неприятие претензии. Оба акта следует читать в контексте уже независимых государств.',
          ],
          [
            'In 1992 Russia’s Supreme Soviet called the RSFSR Presidium resolution of 5 February 1954 legally void from adoption because of constitutional and procedural breach. That passage is often isolated. The same text, however, acknowledged that later Union legislation and the 1990 treaty legally consolidated the factual change and proposed interstate negotiations.',
            'The 1992 resolution is an official Russian assessment of one link in the Soviet process, not an international judicial ruling on Crimean title. Its full text does not authorise unilateral force to change a border. The Ukrainian parliament’s response shows the immediate interstate dispute and rejection of the claim. Both instruments belong to a context of already independent states.',
          ],
          [
            '1992 року Верховна Рада Росії назвала постанову Президії РРФСР від 5 лютого 1954 року такою, що не мала юридичної сили від моменту ухвалення через порушення Конституції й процедури. Цю частину часто цитують окремо. Проте той самий текст визнав, що наступне союзне законодавство й договір 1990 року правово закріпили фактичну зміну, та запропонував міждержавні переговори.',
            'Постанова 1992 року є офіційною російською оцінкою однієї ланки радянського процесу, а не міжнародним судовим рішенням про титул Криму. Повний текст не дозволяє односторонньо змінити кордон силою. Відповідна заява Верховної Ради України показує безпосередній міждержавний спір і відхилення претензії. Обидва акти належать до контексту вже незалежних держав.',
          ],
        ),
      },
      {
        title: L('Между «подарком» и безупречной процедурой', 'Between a “gift” and a flawless procedure', 'Між «подарунком» і бездоганною процедурою'),
        paragraphs: P(
          [
            'Формула «подарок Хрущёва» персонализирует решение нескольких органов и скрывает апрельский закон. Противоположная версия иногда изображает советскую процедуру совершенно бесспорной и игнорирует вопрос компетенции республиканского президиума. Точное описание допускает дефект отдельного шага и одновременно учитывает последующее союзное закрепление. Оно не обязано выбирать между двумя политически удобными крайностями.',
            'Из документов можно заключить, какие органы и акты составляли передачу и почему позднее возник процедурный спор. Нельзя только из них вывести, каково было мнение населения, что требовал бы современный демократический стандарт или кому принадлежит территория после событий 2014 года. Последний вопрос требует документов независимости, признанных границ, условий голосования и норм о силе. Историческая точность сужает спор, но не заменяет современное право.',
          ],
          [
            'The phrase “Khrushchev’s gift” personalises a multi-institutional decision and conceals the April law. The opposite account sometimes treats the Soviet procedure as flawless and ignores the republican presidium’s competence. A precise description can recognise a defect in one step while accounting for later Union consolidation, without choosing between convenient extremes.',
            'The instruments show which bodies and acts formed the transfer and why a procedural dispute later arose. They cannot alone establish popular opinion, the result under modern democratic standards, or title after 2014. The latter requires independence instruments, recognised borders, voting conditions, and force rules. Historical accuracy narrows the dispute but does not replace present law.',
          ],
          [
            'Формула «подарунок Хрущова» персоналізує рішення кількох органів і приховує квітневий закон. Протилежна версія часом подає радянську процедуру як бездоганну й ігнорує компетенцію республіканської президії. Точний опис допускає дефект окремого кроку й водночас враховує наступне союзне закріплення, не обираючи між зручними крайнощами.',
            'Документи дозволяють встановити органи й акти передачі та причину пізнішого процедурного спору. Лише з них не можна вивести думку населення, результат за сучасним демократичним стандартом або титул після 2014 року. Останнє потребує актів незалежності, визнаних кордонів, умов голосування й норм про силу. Історична точність звужує спір, але не замінює сучасне право.',
          ],
        ),
      },
    ],
  },

  'ukraine-sovereignty-1990': {
    lead: L(
      'Декларация о государственном суверенитете Украины, принятая 16 июля 1990 года Верховной Радой Украинской ССР, стала программным актом перехода от союзной республики к самостоятельной государственности. Она провозгласила верховенство, самостоятельность, полноту и неделимость власти республики в пределах её территории и обозначила будущий курс в сфере безопасности. Особое значение получили намерение стать постоянно нейтральным государством вне военных блоков и три неядерных принципа: не принимать, не производить и не приобретать ядерное оружие. Эти формулы нужно читать как текст 1990 года, а не как бессрочное внешнее разрешение контролировать украинскую политику.',
      'The Declaration of State Sovereignty of Ukraine, adopted on 16 July 1990 by the Ukrainian SSR parliament, was a programme for transition from a Union republic to independent statehood. It proclaimed supremacy, independence, completeness, and indivisibility of republican authority within its territory and set a future security course. Its intention to become permanently neutral outside military blocs and its three non-nuclear principles—not to accept, produce, or acquire nuclear weapons—became especially significant. These are 1990 formulations, not perpetual external permission to control Ukrainian policy.',
      'Декларація про державний суверенітет України, ухвалена 16 липня 1990 року Верховною Радою Української РСР, стала програмним актом переходу від союзної республіки до самостійної державності. Вона проголосила верховенство, самостійність, повноту й неподільність влади республіки в межах її території та визначила майбутній курс безпеки. Особливого значення набули намір стати постійно нейтральною державою поза військовими блоками й три без’ядерні принципи: не приймати, не виробляти й не набувати ядерну зброю. Ці формули слід читати як текст 1990 року, а не безстроковий зовнішній дозвіл контролювати українську політику.',
    ),
    sections: [
      {
        title: L('Программное содержание Декларации', 'The Declaration’s programme', 'Програмний зміст Декларації'),
        paragraphs: P(
          [
            'Документ провозглашает государственный суверенитет как верховенство, самостоятельность, полноту и неделимость власти республики на её территории, а также независимость и равноправие во внешних отношениях. Он охватывает вопросы гражданства, территории, экономики, безопасности и международных связей. Это широкий учредительный политико-правовой акт, а не только заявление о ядерном оружии или выборе военного союза.',
            'Раздел о безопасности выражает намерение в будущем стать постоянно нейтральным государством, не участвующим в военных блоках, и следовать трём неядерным принципам. Слова о будущем намерении важны: они фиксируют направление тогдашнего перехода, но не формулируют двусторонний договор с Россией или вечное условие международного признания. Неядерный курс и нейтралитет также являются разными элементами.',
          ],
          [
            'The document defines state sovereignty as supremacy, independence, completeness, and indivisibility of republican authority on its territory, plus independence and equality in external relations. It addresses citizenship, territory, economy, security, and international ties. It is a broad foundational legal-political act, not merely a statement about nuclear weapons or alliance choice.',
            'Its security section expresses an intention to become permanently neutral, remain outside military blocs, and follow three non-nuclear principles. The future-oriented language records a transitional direction but not a bilateral treaty with Russia or a perpetual condition of international recognition. Non-nuclear policy and neutrality are also distinct elements.',
          ],
          [
            'Документ визначає державний суверенітет як верховенство, самостійність, повноту й неподільність влади республіки на її території, а також незалежність і рівноправність у зовнішніх відносинах. Він охоплює громадянство, територію, економіку, безпеку й міжнародні зв’язки. Це широкий установчий політико-правовий акт, а не лише заява про ядерну зброю чи вибір союзу.',
            'Розділ про безпеку виражає намір у майбутньому стати постійно нейтральною державою, не брати участі у військових блоках і дотримуватися трьох без’ядерних принципів. Майбутня форма слів фіксує напрям переходу, але не двосторонній договір із Росією чи вічну умову міжнародного визнання. Без’ядерний курс і нейтралітет також є різними елементами.',
          ],
        ),
      },
      {
        title: L('От суверенитета к независимости и разоружению', 'From sovereignty to independence and disarmament', 'Від суверенітету до незалежності й роззброєння'),
        paragraphs: P(
          [
            'Декларация предшествует Акту провозглашения независимости 1991 года и не должна с ним смешиваться. Первый документ сформулировал суверенную программу ещё внутри СССР; второй утвердил отдельное государство в условиях распада Союза. Всеукраинское голосование придало независимости общенациональный мандат. Поэтому признание Украины строилось на событиях 1991 года, а не на бессрочной проверке неизменности каждого пункта программы 1990 года.',
            'Будапештский меморандум 5 декабря 1994 года относится к присоединению Украины к Договору о нераспространении ядерного оружия и записывает заверения в её адрес. Он связан с неядерной линией Декларации, но является отдельным международным документом с собственными сторонами и формулировками. Бухарестское коммюнике 3 апреля 2008 года показывает последующее изменение союзной ориентации, которое нужно оценивать в новом политическом контексте.',
          ],
          [
            'The Declaration precedes the 1991 Act of Independence and should not be conflated with it. The first stated a sovereign programme while still inside the USSR; the second established a separate state amid Union dissolution. The nationwide vote supplied a national mandate. Recognition therefore rests on the 1991 process, not perpetual verification that every 1990 programme point remained unchanged.',
            'The Budapest Memorandum of 5 December 1994 concerns Ukraine’s accession to the Nuclear Non-Proliferation Treaty and records assurances to it. It is connected to the Declaration’s non-nuclear line but is a separate international instrument with its own parties and wording. The Bucharest communiqué of 3 April 2008 shows a later shift in alliance orientation requiring its own political context.',
          ],
          [
            'Декларація передує Акту проголошення незалежності 1991 року й не повинна з ним змішуватися. Перший документ сформулював суверенну програму ще всередині СРСР; другий утвердив окрему державу під час розпаду Союзу. Всеукраїнське голосування надало незалежності загальнонаціональний мандат. Тому визнання України спирається на процес 1991 року, а не на вічну незмінність кожного пункту програми 1990 року.',
            'Будапештський меморандум 5 грудня 1994 року стосується приєднання України до Договору про нерозповсюдження та фіксує запевнення. Він пов’язаний із без’ядерною лінією Декларації, але є окремим міжнародним документом зі своїми сторонами й формулюваннями. Бухарестське комюніке 3 квітня 2008 року показує пізнішу зміну союзної орієнтації, яку треба оцінювати у новому контексті.',
          ],
        ),
      },
      {
        title: L('Как читать нейтралитет и три неядерных принципа', 'Reading neutrality and the three non-nuclear principles', 'Як читати нейтралітет і три без’ядерні принципи'),
        paragraphs: P(
          [
            'Официальный текст нужно проверять по времени и грамматике. Формула выражает намерение Украины в будущем стать постоянно нейтральной и не участвовать в военных блоках; она не сообщает, что нейтральный статус уже создан международным договором. Три неядерных принципа сформулированы конкретнее и описывают отказ принимать, производить и приобретать ядерное оружие. Это не одна и та же юридическая конструкция.',
            'Документ не содержит положения о том, что независимость утрачивает силу при изменении политики безопасности, и не назначает иностранное государство её принудительным хранителем. Он также не устанавливает автоматический механизм внешней защиты Украины. Последующие обязательства нужно искать в последующих договорах и актах. Цитирование одной фразы без раздела, даты и развития событий превращает программу переходного времени в несуществующее вечное условие.',
          ],
          [
            'The official text must be read through its tense and grammar. It expresses Ukraine’s future intention to become permanently neutral and not participate in military blocs; it does not report a neutral status already created by international treaty. The three non-nuclear principles are more concrete and concern not accepting, producing, or acquiring nuclear weapons. These are not the same legal construction.',
            'The document does not say independence lapses when security policy changes or appoint a foreign state as coercive guardian. Nor does it create an automatic external defence mechanism. Later obligations must be found in later instruments. Isolating one sentence from its section, date, and later development turns a transitional programme into an invented perpetual condition.',
          ],
          [
            'Офіційний текст треба читати за часом і граматикою. Формула виражає майбутній намір України стати постійно нейтральною та не брати участі у військових блоках; вона не повідомляє про нейтральний статус, уже створений міжнародним договором. Три без’ядерні принципи конкретніші й стосуються відмови приймати, виробляти та набувати ядерну зброю. Це не та сама правова конструкція.',
            'Документ не каже, що незалежність припиняється зі зміною політики безпеки, і не призначає іноземну державу її примусовим охоронцем. Він також не створює автоматичного зовнішнього захисту. Подальші обов’язки слід шукати в наступних актах. Одна фраза без розділу, дати й розвитку подій перетворює перехідну програму на вигадану вічну умову.',
          ],
        ),
      },
      {
        title: L('Обещание нейтралитета или суверенное право изменить курс', 'A neutrality promise or a sovereign right to change course', 'Обіцянка нейтралітету чи суверенне право змінити курс'),
        paragraphs: P(
          [
            'Одна трактовка считает нейтральную формулу ценой признания независимости и видит в сближении с НАТО нарушение исходной сделки. Другая читает Декларацию только как исторический текст без современного значения. Первая не находит в документе стороны, механизм и условие такой сделки; вторая недооценивает его значение для понимания первоначального курса, разоружения и последующих ожиданий безопасности.',
            'Из Декларации можно заключить, что Украина в 1990 году официально провозгласила суверенитет, будущую нейтральность и неядерную ориентацию. Нельзя только из неё вывести вечный запрет менять союзную политику, обязанность другого государства обеспечивать нейтралитет силой или точное содержание Будапештских заверений. Документ остаётся важным началом хронологии, но последующие решения должны оцениваться по своим текстам и датам.',
          ],
          [
            'One reading treats neutrality as the price of recognised independence and later NATO alignment as breach of an original bargain. Another treats the Declaration as history with no present relevance. The first cannot identify parties, mechanism, or condition for such a bargain in the text; the second undervalues the initial course, disarmament, and later security expectations.',
            'The Declaration establishes that in 1990 Ukraine officially proclaimed sovereignty, future neutrality, and a non-nuclear orientation. It cannot alone establish a perpetual ban on policy change, another state’s right to enforce neutrality, or the content of later Budapest assurances. It is an essential starting point, while subsequent decisions must be assessed through their own texts and dates.',
          ],
          [
            'Одне тлумачення вважає нейтральну формулу ціною визнання незалежності й бачить у зближенні з НАТО порушення первісної угоди. Інше сприймає Декларацію лише як історичний текст без сучасного значення. Перше не знаходить у документі сторін, механізму й умови такої угоди; друге недооцінює початковий курс, роззброєння та наступні очікування безпеки.',
            'Із Декларації можна встановити, що 1990 року Україна офіційно проголосила суверенітет, майбутню нейтральність і без’ядерну орієнтацію. Лише з неї не випливає вічна заборона змінювати союзну політику, право іншої держави забезпечувати нейтралітет силою або точний зміст Будапештських запевнень. Документ є важливим початком хронології, але наступні рішення треба оцінювати за їхніми текстами й датами.',
          ],
        ),
      },
    ],
  },

  'ussr-dissolution-1991': {
    lead: L(
      'Декабрь 1991 года нельзя свести к одной подписи или одному дню. 8 декабря руководители России, Украины и Беларуси подписали соглашение о создании СНГ; 12 декабря Верховный Совет РСФСР ратифицировал его и отдельно денонсировал договор об образовании СССР. 24 декабря Россия уведомила Генерального секретаря ООН о продолжении членства СССР и ответственности по его правам и обязательствам. 26 декабря Совет Республик объявил прекращение существования Союза. Эта последовательность позволяет различать распад общего государства, спор о внутренней процедуре и международное продолжение отдельных прав Россией.',
      'December 1991 cannot be reduced to one signature or day. On 8 December the leaders of Russia, Ukraine, and Belarus signed the CIS agreement; on 12 December the RSFSR Supreme Soviet ratified it and separately denounced the treaty creating the USSR. On 24 December Russia notified the UN Secretary-General that it continued the USSR’s membership and responsibility for its rights and obligations. On 26 December the Soviet of Republics declared the Union ended. This sequence separates state dissolution, domestic procedural controversy, and Russia’s international continuation of selected rights.',
      'Грудень 1991 року не можна звести до одного підпису чи дня. 8 грудня керівники Росії, України та Білорусі підписали угоду про СНД; 12 грудня Верховна Рада РРФСР ратифікувала її й окремо денонсувала договір про утворення СРСР. 24 грудня Росія повідомила Генерального секретаря ООН про продовження членства СРСР і відповідальність за його права та обов’язки. 26 грудня Рада Республік оголосила припинення Союзу. Ця послідовність розділяє розпад держави, внутрішній процедурний спір і міжнародне продовження окремих прав Росією.',
    ),
    sections: [
      {
        title: L('Четыре шага прекращения Союза', 'Four steps in the Union’s end', 'Чотири кроки припинення Союзу'),
        paragraphs: P(
          [
            'Соглашение 8 декабря заявило, что СССР как субъект международного права и геополитическая реальность прекращает существование, и учредило СНГ. Ратификация 12 декабря ввела решение в российский внутренний порядок, а отдельная денонсация союзного договора стала источником позднейшего процедурного спора. Декларация 26 декабря исходила уже из создания независимых государств и завершила деятельность союзных органов.',
            'Российское уведомление от 24 декабря относится к другому уровню: оно сообщило ООН, что Российская Федерация продолжает членство СССР, включая место в Совете Безопасности, и принимает ответственность по соответствующим правам и обязательствам. Продолжение международного места не означает, что СССР продолжил существовать территориально или что Россия сохранила союзную власть над другими республиками.',
          ],
          [
            'The agreement of 8 December declared that the USSR ceased to exist as an international subject and geopolitical reality and created the CIS. Ratification on 12 December brought the decision into Russia’s domestic order, while separate denunciation of the Union treaty became the source of later procedural dispute. The declaration of 26 December proceeded from independent states and concluded Union institutions.',
            'Russia’s notice of 24 December belongs to another level: it told the UN that the Russian Federation continued USSR membership, including the Security Council seat, and accepted responsibility for related rights and obligations. Continuation of an international seat does not mean territorial survival of the USSR or continued Russian Union authority over other republics.',
          ],
          [
            'Угода 8 грудня заявила, що СРСР як суб’єкт міжнародного права й геополітична реальність припиняє існування, та створила СНД. Ратифікація 12 грудня ввела рішення до російського внутрішнього порядку, а окрема денонсація союзного договору стала джерелом пізнішого процедурного спору. Декларація 26 грудня виходила вже зі створення незалежних держав і завершила союзні органи.',
            'Російське повідомлення 24 грудня належить до іншого рівня: воно сповістило ООН, що Російська Федерація продовжує членство СРСР, включно з місцем у Раді Безпеки, і приймає відповідальність за відповідні права й обов’язки. Продовження міжнародного місця не означає територіального існування СРСР або російської союзної влади над іншими республіками.',
          ],
        ),
      },
      {
        title: L('Независимая Украина и постсоветские обязательства', 'Independent Ukraine and post-Soviet obligations', 'Незалежна Україна й пострадянські зобов’язання'),
        paragraphs: P(
          [
            'Декларация о суверенитете Украины 16 июля 1990 года и Акт независимости 1991 года показывают отдельное украинское решение до формального завершения Союза. После 26 декабря Украина действует в ООН и двусторонних отношениях как самостоятельное государство. Российское продолжение членства СССР сосуществует с этим фактом и не превращает украинскую независимость в административное отделение, которое можно отменить внутренним российским актом.',
            'Будапештский меморандум 5 декабря 1994 года исходит из независимости, суверенитета и существующих границ Украины. Основополагающий акт Россия — НАТО 27 мая 1997 года также принадлежит уже европейской системе после холодной войны. Крымские события 2014 года и вторжение 2022 года поэтому оцениваются как отношения отдельных государств, даже если стороны спорят о законности отдельных решений распада.',
          ],
          [
            'Ukraine’s sovereignty declaration of 16 July 1990 and the 1991 Independence Act show a separate Ukrainian choice before formal Union termination. After 26 December Ukraine acts in the UN and bilateral relations as an independent state. Russia’s continuation of USSR membership coexists with that fact and does not turn Ukrainian independence into an administrative separation revocable by a Russian domestic act.',
            'The Budapest Memorandum of 5 December 1994 proceeds from Ukraine’s independence, sovereignty, and existing borders. The NATO–Russia Founding Act of 27 May 1997 likewise belongs to the post-Cold War European system. Crimea in 2014 and invasion in 2022 are therefore relations among separate states, even if parties dispute elements of the dissolution process.',
          ],
          [
            'Декларація про суверенітет України 16 липня 1990 року й Акт незалежності 1991 року показують окремий український вибір до формального завершення Союзу. Після 26 грудня Україна діє в ООН і двосторонніх відносинах як самостійна держава. Російське продовження членства СРСР співіснує з цим фактом і не перетворює українську незалежність на адміністративне відокремлення, яке можна скасувати внутрішнім російським актом.',
            'Будапештський меморандум 5 грудня 1994 року виходить із незалежності, суверенітету й чинних кордонів України. Основоположний акт Росія — НАТО 27 травня 1997 року також належить до європейської системи після холодної війни. Кримські події 2014 року та вторгнення 2022 року тому оцінюються як відносини окремих держав, навіть за спору про рішення розпаду.',
          ],
        ),
      },
      {
        title: L('Что показывают запись ООН и решения 1996 года', 'What the UN record and 1996 decisions show', 'Що показують запис ООН і рішення 1996 року'),
        paragraphs: P(
          [
            'Карточка государства-члена и история российского представительства подтверждают практический результат уведомления: отдельной процедуры нового приёма России не проводилось, а её представители заняли место СССР. Это сильное доказательство продолжения конкретного членства. Оно не устанавливает автоматически судьбу каждого договора, долга, актива или границы; по этим вопросам могли действовать отдельные соглашения и практика.',
            'В 1996 году Государственная Дума отменила постановление о денонсации союзного договора и подтвердила значение результата союзного референдума для России. Эти решения выразили политико-правовое несогласие с шагом 1991 года, но не восстановили союзные институты, международное членство СССР как отдельного от России субъекта или власть над признанными государствами. Внутренний акт и международное последствие нельзя считать одним событием.',
          ],
          [
            'The member-state record and history of Russian representation confirm the practical effect of the notice: Russia underwent no new admission procedure and its representatives occupied the USSR’s seat. This is strong evidence of continuity of that membership. It does not automatically settle every treaty, debt, asset, or border, which may be governed by separate agreements and practice.',
            'In 1996 the State Duma annulled the resolution denouncing the Union treaty and reaffirmed the Union referendum’s significance for Russia. These decisions expressed legal-political disagreement with the 1991 step but did not restore Union institutions, a USSR membership separate from Russia, or authority over recognised states. A domestic act and an international consequence are not the same event.',
          ],
          [
            'Запис про державу-члена та історія російського представництва підтверджують практичний результат повідомлення: Росія не проходила нової процедури вступу, а її представники посіли місце СРСР. Це вагомий доказ продовження конкретного членства. Він не вирішує автоматично долю кожного договору, боргу, активу чи кордону, що могли регулюватися окремими угодами й практикою.',
            '1996 року Державна Дума скасувала постанову про денонсацію союзного договору й підтвердила значення союзного референдуму для Росії. Ці рішення виразили політико-правову незгоду з кроком 1991 року, але не відновили союзні інституції, окреме від Росії членство СРСР чи владу над визнаними державами. Внутрішній акт і міжнародний наслідок не є однією подією.',
          ],
        ),
      },
      {
        title: L('Незаконный распад или завершённое прекращение', 'Unlawful dissolution or completed termination', 'Незаконний розпад чи завершене припинення'),
        paragraphs: P(
          [
            'Одна трактовка ставит в центр союзный референдум и процедурные недостатки денонсации, считая распад юридически порочным. Другая видит только фактическое исчезновение Союза и считает внутреннюю процедуру несущественной. Первая не объясняет, каким актом и институтом СССР продолжал бы существовать после признания новых государств; вторая недооценивает реальный предмет конституционного спора и цену соблюдения процедуры.',
            'Из хронологии можно заключить, что к 26 декабря союзные органы объявили прекращение СССР, новые государства получили международное признание, а Россия продолжила конкретные международные права и обязанности. Нельзя из этого автоматически вывести безупречность каждого внутреннего шага или восстановление Союза поздним парламентским решением. Историко-правовой спор остаётся возможным, но не отменяет последующую международную структуру одним заявлением.',
          ],
          [
            'One interpretation centres the Union referendum and procedural defects, calling dissolution legally flawed. Another sees only effective disappearance and treats domestic procedure as irrelevant. The first cannot identify the institution through which the USSR continued after recognition of new states; the second undervalues a genuine constitutional dispute and the importance of procedure.',
            'The chronology supports that by 26 December Union bodies declared the USSR ended, new states received recognition, and Russia continued particular international rights and duties. It does not prove every domestic step flawless or let a later parliamentary act restore the Union. Historical legal controversy remains possible without cancelling the subsequent international structure by declaration.',
          ],
          [
            'Одне тлумачення ставить у центр союзний референдум і процедурні дефекти денонсації, вважаючи розпад юридично хибним. Інше бачить лише фактичне зникнення й робить внутрішню процедуру неважливою. Перше не називає інституції, через які СРСР продовжував би існувати після визнання нових держав; друге недооцінює реальний конституційний спір і значення процедури.',
            'Хронологія дозволяє встановити, що до 26 грудня союзні органи оголосили припинення СРСР, нові держави отримали визнання, а Росія продовжила конкретні міжнародні права й обов’язки. Це не доводить бездоганність кожного внутрішнього кроку й не дозволяє пізній парламентській постанові відновити Союз. Історико-правовий спір можливий, але не скасовує наступну міжнародну структуру однією заявою.',
          ],
        ),
      },
    ],
  },

  budapest: {
    lead: L(
      'Будапештский меморандум был подписан 5 декабря 1994 года Украиной, Россией, США и Великобританией в связи с присоединением Украины к Договору о нераспространении ядерного оружия. Его короткий текст оказался в центре долгого спора о том, что именно Украина получила после отказа от размещённого на её территории советского ядерного наследия. Документ содержит заверения уважать независимость, суверенитет и существующие границы, воздерживаться от угрозы силой или её применения, а также проводить консультации. Он не содержит автоматического механизма ввода войск, но отсутствие такого механизма не стирает записанные обещания.',
      'The Budapest Memorandum was signed on 5 December 1994 by Ukraine, Russia, the United States, and the United Kingdom in connection with Ukraine’s accession to the Nuclear Non-Proliferation Treaty. Its short text became central to dispute over what Ukraine received after relinquishing the Soviet nuclear legacy located on its territory. It contains assurances to respect independence, sovereignty, and existing borders, refrain from threats or force, and consult. It contains no automatic troop-deployment mechanism, but that absence does not erase the recorded promises.',
      'Будапештський меморандум підписали 5 грудня 1994 року Україна, Росія, США й Велика Британія у зв’язку з приєднанням України до Договору про нерозповсюдження ядерної зброї. Його короткий текст опинився в центрі спору про те, що саме отримала Україна після відмови від розміщеної на її території радянської ядерної спадщини. Документ містить запевнення поважати незалежність, суверенітет і чинні кордони, утримуватися від погрози силою чи її застосування та консультуватися. Автоматичного механізму введення військ немає, але це не стирає записаних обіцянок.',
    ),
    sections: [
      {
        title: L('Содержание записанных заверений', 'The content of the recorded assurances', 'Зміст записаних запевнень'),
        paragraphs: P(
          [
            'Подписанты подтвердили уважение независимости, суверенитета и существующих границ Украины и обязанность воздерживаться от угрозы силой или её применения против её территориальной целостности или политической независимости. Текст также касается экономического принуждения, обращения за действием Совета Безопасности при определённых обстоятельствах и консультаций, если возникает ситуация, затрагивающая эти обязательства.',
            'Каждый пункт имеет собственный предмет. Уважение границ не равно обязанности направить войска; консультация не равна заранее определённому военному ответу; обращение к Совету Безопасности зависит от уставной процедуры. Но отсутствие единого принудительного механизма не делает содержательные положения пустыми. Сначала устанавливается несовместимость действия с обещанием, а затем отдельно обсуждается доступное средство реакции.',
          ],
          [
            'The signatories reaffirmed respect for Ukraine’s independence, sovereignty, and existing borders and the duty to refrain from threats or force against its territorial integrity or political independence. The text also addresses economic coercion, recourse to Security Council action in specified circumstances, and consultation when a situation affecting these commitments arises.',
            'Each paragraph has a distinct subject. Respect for borders is not a duty to deploy troops; consultation is not a pre-defined military response; recourse to the Security Council depends on Charter procedure. Yet absence of one enforcement mechanism does not empty the substantive provisions. Incompatibility with a promise and available response are separate questions.',
          ],
          [
            'Підписанти підтвердили повагу до незалежності, суверенітету й чинних кордонів України та обов’язок утримуватися від погрози силою або її застосування проти територіальної цілісності чи політичної незалежності. Текст також стосується економічного примусу, звернення до Ради Безпеки за певних обставин і консультацій, коли виникає ситуація щодо цих зобов’язань.',
            'Кожний пункт має окремий предмет. Повага до кордонів не є обов’язком ввести війська; консультація не є наперед визначеною військовою відповіддю; звернення до Ради Безпеки залежить від процедури Статуту. Проте відсутність єдиного примусового механізму не спустошує зміст. Несумісність дії з обіцянкою й доступна відповідь — окремі питання.',
          ],
        ),
      },
      {
        title: L('От неядерной программы к войне', 'From a non-nuclear programme to war', 'Від без’ядерної програми до війни'),
        paragraphs: P(
          [
            'Декларация о суверенитете Украины 16 июля 1990 года уже содержала три неядерных принципа. После независимости решение оформлялось через международный режим нераспространения, а меморандум 1994 года стал частью этого политико-правового пакета. Поэтому связь между разоружением и заверениями реальна, хотя документ нельзя описывать как простой двусторонний обмен боеголовок на автоматическую оборону.',
            'Крымские события 16 марта 2014 года поставили вопрос о совместимости российского поведения с уважением существующих границ. В Мюнхене 19 февраля 2022 года Украина призвала провести консультации по меморандуму, а через пять дней началось полномасштабное вторжение. Эта последовательность показывает практический провал записанных заверений, не доказывая, что западные подписанты обещали конкретную форму военного вступления.',
          ],
          [
            'Ukraine’s sovereignty declaration of 16 July 1990 already stated three non-nuclear principles. After independence, policy was implemented through the international non-proliferation regime, and the 1994 memorandum formed part of that legal-political package. The connection between disarmament and assurances is real, although it was not a simple bilateral exchange of warheads for automatic defence.',
            'Crimea on 16 March 2014 raised compatibility of Russian conduct with respect for existing borders. In Munich on 19 February 2022 Ukraine called for consultations, and full-scale invasion began five days later. The sequence shows practical failure of the assurances without proving that Western signatories promised a particular form of military entry.',
          ],
          [
            'Декларація про суверенітет України 16 липня 1990 року вже містила три без’ядерні принципи. Після незалежності курс оформлювався через міжнародний режим нерозповсюдження, а меморандум 1994 року став частиною цього політико-правового пакета. Зв’язок роззброєння й запевнень реальний, хоча документ не був простим обміном боєголовок на автоматичну оборону.',
            'Кримські події 16 березня 2014 року поставили питання про сумісність російської поведінки з повагою до чинних кордонів. У Мюнхені 19 лютого 2022 року Україна закликала до консультацій, а через п’ять днів почалося повномасштабне вторгнення. Послідовність показує практичний провал запевнень, не доводячи, що західні підписанти обіцяли конкретну форму військового вступу.',
          ],
        ),
      },
      {
        title: L('Как читать запись и название документа', 'How to read the record and the document’s title', 'Як читати запис і назву документа'),
        paragraphs: P(
          [
            'Карточка и запись в системе ООН подтверждают существование, стороны и текст меморандума. Регистрация важна для доступности официального документа, но сама по себе не превращает его в договор коллективной обороны и не решает все вопросы юридической классификации. Название «меморандум» также не позволяет автоматически объявить положения необязательными: содержание и обстоятельства принятия требуют самостоятельного анализа.',
            'При чтении нужно указывать конкретный пункт, а не ссылаться на общее впечатление от слова «гарантии». В англоязычном названии используется термин assurances, но спор о переводе не заменяет текст. Документ буквально не содержит формулы, аналогичной статье 5 НАТО, и буквально содержит заверения о границах и силе. Обе части результата должны сохраняться одновременно.',
          ],
          [
            'The UN record confirms the memorandum’s existence, parties, and text. Registration provides an official accessible document but does not turn it into a collective-defence treaty or settle every classification question. The title “memorandum” likewise does not automatically make provisions non-binding; content and circumstances require analysis.',
            'Reading should identify the particular paragraph rather than rely on impressions created by “guarantees.” The English title uses assurances, but translation debate cannot substitute for text. The instrument literally lacks a NATO Article 5 formula and literally contains assurances on borders and force. Both findings must be retained.',
          ],
          [
            'Запис у системі ООН підтверджує існування, сторони й текст меморандуму. Реєстрація дає офіційний доступний документ, але не перетворює його на договір колективної оборони й не вирішує всі питання класифікації. Назва «меморандум» також не робить положення автоматично необов’язковими; зміст і обставини потребують аналізу.',
            'Під час читання треба називати конкретний пункт, а не загальне враження від слова «гарантії». В англійській назві вжито assurances, але спір про переклад не замінює текст. Документ буквально не містить формули статті 5 НАТО й буквально містить запевнення щодо кордонів і сили. Обидва висновки треба зберігати разом.',
          ],
        ),
      },
      {
        title: L('Не статья 5 и не пустая бумага', 'Neither Article 5 nor empty paper', 'Не стаття 5 і не порожній папір'),
        paragraphs: P(
          [
            'Максималистская версия считает, что США и Великобритания обязались вступить в войну при любом нарушении. Минималистская версия видит отсутствие такого механизма и обнуляет все заверения. Первая добавляет несуществующий пункт; вторая игнорирует прямо записанные обязательства и политическую связь с ядерным разоружением. Точный вывод находится не посередине по компромиссу, а в самом тексте.',
            'Меморандум позволяет оценить, какие обещания были даны и какие последующие действия с ними несовместимы. Он не позволяет без дополнительного основания определить обязательный объём вооружённой помощи, индивидуальную ответственность или окончательный способ урегулирования. Его история показывает различие между содержанием обязательства и механизмом исполнения: слабость второго способна разрушить практический эффект, не уничтожая факт нарушения первого.',
          ],
          [
            'The maximalist view says the United States and United Kingdom promised to enter any war following breach. The minimalist view sees no such mechanism and nullifies every assurance. The first adds an absent clause; the second ignores express commitments and their connection to disarmament. The accurate answer comes from the text, not a negotiated midpoint.',
            'The memorandum permits assessment of promises and later incompatible conduct. Without additional grounds it cannot determine a mandatory volume of armed support, individual responsibility, or final settlement. Its history distinguishes obligation from enforcement: weakness of the latter can destroy practical effect without erasing breach of the former.',
          ],
          [
            'Максималістська версія стверджує, що США й Велика Британія обіцяли вступити в будь-яку війну після порушення. Мінімалістська бачить відсутність такого механізму й обнуляє всі запевнення. Перша додає відсутній пункт; друга ігнорує прямі зобов’язання та зв’язок із роззброєнням. Точна відповідь походить із тексту, а не з компромісної середини.',
            'Меморандум дозволяє оцінити дані обіцянки й несумісні з ними пізніші дії. Без додаткової підстави він не визначає обов’язковий обсяг збройної допомоги, індивідуальну відповідальність або остаточне врегулювання. Його історія розділяє обов’язок і виконання: слабкість другого може зруйнувати практичний ефект, не стираючи порушення першого.',
          ],
        ),
      },
    ],
  },

  'nato-russia-act': {
    lead: L(
      'Основополагающий акт о взаимных отношениях, сотрудничестве и безопасности между НАТО и Российской Федерацией был подписан в Париже 27 мая 1997 года. Документ пытался оформить послевоенную европейскую архитектуру без конфронтации: стороны заявляли, что не считают друг друга противниками, подтверждали общие принципы и создавали постоянный механизм консультаций. Акт важен не как доказательство гармонии, а как зафиксированная попытка управлять разногласиями. Он не предоставил России юридического права запрещать расширение НАТО и не гарантировал, что политические обещания переживут последующие кризисы.',
      'The Founding Act on Mutual Relations, Cooperation and Security between NATO and the Russian Federation was signed in Paris on 27 May 1997. It sought a non-confrontational post-Cold War European architecture: the parties said they did not consider one another adversaries, reaffirmed principles, and created a permanent consultation mechanism. Its importance lies not in proving harmony but in recording an attempt to manage disagreement. It granted Russia no legal veto over NATO enlargement and did not guarantee that political commitments would survive later crises.',
      'Основоположний акт про взаємні відносини, співпрацю й безпеку між НАТО та Російською Федерацією підписали в Парижі 27 травня 1997 року. Він намагався оформити неконфронтаційну європейську архітектуру після холодної війни: сторони заявляли, що не вважають одна одну противниками, підтверджували принципи й створювали постійний механізм консультацій. Його значення не в доказі гармонії, а у зафіксованій спробі керувати розбіжностями. Акт не дав Росії юридичного вето на розширення НАТО й не гарантував, що політичні обіцянки переживуть наступні кризи.',
    ),
    sections: [
      {
        title: L('Модель отношений, записанная в Париже', 'The relationship model recorded in Paris', 'Модель відносин, записана в Парижі'),
        paragraphs: P(
          [
            'Акт формулирует намерение строить прочный и всеобъемлющий мир на принципах демократии и совместной безопасности и заявляет о новом качестве отношений. Он создаёт площадку постоянных консультаций и сотрудничества по вопросам безопасности. Это политический рамочный документ: он организует взаимодействие и закрепляет принципы, но не превращает Россию в члена НАТО и не предоставляет ей полномочий внутри союзной процедуры принятия решений.',
            'Упоминания военной инфраструктуры, прозрачности и обычных вооружённых сил следует читать в точных формулировках и обстоятельствах 1997 года. Они описывали тогдашние намерения и условия, а не вечную заморозку всех будущих решений независимо от изменений безопасности. Одновременно политический характер не делает формулы несущественными: они создавали ожидания, по которым стороны оценивали последующее поведение друг друга.',
          ],
          [
            'The Act states an intention to build an enduring and inclusive peace on democracy and cooperative security and describes a new quality of relations. It creates a permanent forum for consultation and security cooperation. This is a political framework: it organises interaction and records principles but makes Russia neither a NATO member nor a participant in internal alliance decisions.',
            'References to military infrastructure, transparency, and conventional forces must be read in their exact wording and 1997 circumstances. They stated contemporary intentions and conditions, not a perpetual freeze on all future decisions regardless of changed security. Their political form still mattered because it created expectations against which later conduct was judged.',
          ],
          [
            'Акт висловлює намір будувати міцний і всеохопний мир на демократії та спільній безпеці й описує нову якість відносин. Він створює постійний майданчик консультацій і співпраці з питань безпеки. Це політична рамка: вона організує взаємодію та фіксує принципи, але не робить Росію членом НАТО й не надає їй участі у внутрішньому ухваленні рішень союзу.',
            'Згадки про військову інфраструктуру, прозорість і звичайні сили треба читати в точних формулюваннях та обставинах 1997 року. Вони описували тодішні наміри й умови, а не вічне замороження всіх майбутніх рішень. Політична форма однаково була важливою, бо створювала очікування, за якими сторони оцінювали подальшу поведінку.',
          ],
        ),
      },
      {
        title: L('От сотрудничества к спору о расширении', 'From cooperation to the enlargement dispute', 'Від співпраці до спору про розширення'),
        paragraphs: P(
          [
            'Акт появился после распада СССР и до Бухарестского саммита 3 апреля 2008 года, который заявил о будущем членстве Украины и Грузии. Он показывает, что расширение и сотрудничество с Россией некоторое время мыслились как совместимые процессы. Бухарестская формула усилила российское ощущение неблагоприятной траектории, но не изменила задним числом содержание парижского документа и не создала автоматической гарантии Украине.',
            'Астанинская декларация ОБСЕ 3 декабря 2010 года снова соединила свободу выбора союзов и неделимость безопасности. После Крыма 2014 года и полномасштабного вторжения 2022 года прежняя модель сотрудничества разрушилась. Этот исход можно изучать как провал институтов и взаимных ожиданий, не делая из него доказательство того, что юридический запрет на расширение существовал с самого начала.',
          ],
          [
            'The Act came after USSR dissolution and before the Bucharest Summit of 3 April 2008 promised future Ukrainian and Georgian membership. It shows enlargement and cooperation with Russia being treated as compatible for a period. Bucharest intensified a Russian sense of an adverse trajectory but did not rewrite the Paris document or create automatic defence for Ukraine.',
            'The OSCE Astana Declaration of 3 December 2010 again joined alliance freedom and indivisible security. Crimea in 2014 and full-scale invasion in 2022 destroyed the earlier cooperation model. That outcome can be studied as institutional and expectation failure without proving that a legal enlargement ban existed from the start.',
          ],
          [
            'Акт з’явився після розпаду СРСР і до Бухарестського саміту 3 квітня 2008 року, який заявив про майбутнє членство України й Грузії. Він показує, що розширення та співпрацю з Росією певний час вважали сумісними. Бухарест посилив російське відчуття несприятливого напряму, але не переписав паризький документ і не створив автоматичного захисту України.',
            'Астанинська декларація ОБСЄ 3 грудня 2010 року знову поєднала свободу союзів і неподільну безпеку. Після Криму 2014 року та повномасштабного вторгнення 2022 року колишня модель співпраці зруйнувалася. Це можна вивчати як провал інституцій та очікувань, не доводячи існування юридичної заборони розширення від початку.',
          ],
        ),
      },
      {
        title: L('Что искать в полном тексте акта', 'What to look for in the full Act', 'Що шукати в повному тексті акта'),
        paragraphs: P(
          [
            'Нужно различать преамбулу, политические принципы, институциональные механизмы и конкретные военные формулировки. Заявление о том, что стороны не рассматривают друг друга как противников, описывает политическую модель, но не является договором взаимной обороны. Созданный совет консультаций предоставляет голос и площадку, но не право блокировать суверенное решение членов НАТО или государства-кандидата.',
            'В документе следует искать точную формулу, если утверждается обещание не расширять НАТО. Само недовольство последующим расширением или ссылка на дух партнёрства не заменяют такого положения. Акт можно обоснованно использовать для сравнения заявленных в 1997 году отношений с последующей конфронтацией. Нельзя приписывать ему пункт только потому, что позднейшая политика кажется несовместимой с первоначальной надеждой.',
          ],
          [
            'Preamble, political principles, institutional mechanisms, and specific military language must be distinguished. Saying the parties do not regard one another as adversaries describes a political model, not mutual defence. The consultation council provides a voice and forum, not authority to block a sovereign choice by NATO members or a candidate state.',
            'A claimed promise not to enlarge NATO requires exact wording in the document. Later dissatisfaction or an appeal to partnership’s spirit cannot substitute for such a clause. The Act validly compares relations declared in 1997 with later confrontation; it cannot be assigned a provision merely because later policy departed from original hope.',
          ],
          [
            'Треба розрізняти преамбулу, політичні принципи, інституційні механізми й конкретні військові формулювання. Заява, що сторони не вважають одна одну противниками, описує політичну модель, а не взаємну оборону. Рада консультацій дає голос і майданчик, але не право блокувати суверенний вибір членів НАТО чи держави-кандидата.',
            'Якщо стверджується обіцянка не розширювати НАТО, у документі треба знайти точне формулювання. Пізніше невдоволення або посилання на дух партнерства не замінюють такого пункту. Акт обґрунтовано порівнює відносини, заявлені 1997 року, з наступною конфронтацією; йому не можна приписувати положення лише через розрив між політикою й початковою надією.',
          ],
        ),
      },
      {
        title: L('Нарушенное обещание или неудавшаяся архитектура', 'Broken promise or failed architecture', 'Порушена обіцянка чи невдала архітектура'),
        paragraphs: P(
          [
            'Одна трактовка видит в акте обещание устойчивой общей безопасности, преданное расширением и военной инфраструктурой. Другая считает его только декларацией, которую последующие события сделали полностью неважной. Первая должна показать нарушенную точную формулу, а не только изменение политической среды; вторая упускает роль документа в создании консультаций, ожиданий и критериев взаимного поведения.',
            'Из акта можно заключить, какую модель стороны публично приняли в 1997 году и какие механизмы создали. Нельзя только из него вывести юридическое российское вето, единственную причину войны или вечную действительность каждой военной оговорки вне изменившихся обстоятельств. Документ полезнее как контрольная точка: он показывает, насколько далеко отношения отошли от согласованной рамки и какие элементы будущей безопасности потребуют более надёжного исполнения.',
          ],
          [
            'One reading sees a promise of common security betrayed by enlargement and infrastructure. Another calls the Act a mere declaration made irrelevant by later events. The first must identify exact breached language rather than changed atmosphere; the second misses the document’s role in creating consultation, expectations, and standards of conduct.',
            'The Act establishes the model publicly accepted in 1997 and the mechanisms created. It does not alone establish a Russian legal veto, the sole cause of war, or perpetual validity of every military formulation under changed circumstances. It is most useful as a benchmark showing departure from the agreed framework and which future-security elements require stronger implementation.',
          ],
          [
            'Одне тлумачення бачить в акті обіцянку спільної безпеки, зраджену розширенням та інфраструктурою. Інше називає його декларацією, яку пізніші події зробили неважливою. Перше має назвати точне порушене формулювання, а не лише зміну середовища; друге втрачає роль документа у створенні консультацій, очікувань і критеріїв поведінки.',
            'Акт дозволяє встановити модель, публічно прийняту 1997 року, і створені механізми. Лише з нього не випливає російське юридичне вето, єдина причина війни або вічна чинність кожної військової формули за змінених обставин. Найкраще він працює як контрольна точка віддалення від погодженої рамки й потреби надійнішого виконання майбутніх домовленостей.',
          ],
        ),
      },
    ],
  },

  bucharest: {
    lead: L(
      'Декларация Бухарестского саммита НАТО 3 апреля 2008 года содержит короткую, но политически тяжёлую формулу: союзники согласились, что Украина и Грузия станут членами НАТО. Саммит не установил дату вступления и не предоставил этим государствам план действий по членству. Получился промежуточный статус — публично объявленная траектория без завершённой процедуры и без распространения договорной коллективной обороны. Эта неопределённость стала частью последующего конфликта восприятий: для Украины — подтверждением права на выбор, для России — сигналом движения военной структуры к её границам.',
      'The NATO Bucharest Summit Declaration of 3 April 2008 contains a short but consequential formula: the allies agreed that Ukraine and Georgia would become members. The summit set no accession date and did not grant them a Membership Action Plan. The result was an intermediate status—a public trajectory without completed procedure or treaty collective defence. This ambiguity entered the later perception conflict: for Ukraine, confirmation of freedom to choose; for Russia, a signal that a military structure was moving toward its borders.',
      'Декларація Бухарестського саміту НАТО 3 квітня 2008 року містить коротку, але політично вагому формулу: союзники погодилися, що Україна й Грузія стануть членами НАТО. Саміт не визначив дати вступу й не надав їм плану дій щодо членства. Виник проміжний статус — публічно оголошений напрям без завершеної процедури та без поширення договірної колективної оборони. Ця невизначеність стала частиною наступного конфлікту сприйняття: для України — підтвердженням свободи вибору, для Росії — сигналом руху військової структури до її кордонів.',
    ),
    sections: [
      {
        title: L('Что решил и чего не решил саммит', 'What the summit did and did not decide', 'Що саміт вирішив і чого не вирішив'),
        paragraphs: P(
          [
            'Официальная декларация фиксирует согласие союзников относительно будущего членства Украины и Грузии и поручает министрам иностранных дел позднее оценивать прогресс. Это политическое решение направления, а не протокол присоединения. Украина не получила права участвовать во внутренних решениях НАТО, а обязательство коллективной обороны не распространилось на неё с момента публикации коммюнике.',
            'Отсутствие даты и плана действий по членству имеет собственное значение. Оно показывает, что среди союзников не было завершённого согласия о темпе и условиях пути. Но объявленная конечная цель не была нейтральной фразой: она изменила ожидания Украины, России и членов НАТО. Одновременная определённость цели и неопределённость исполнения стала основной особенностью Бухарестской формулы.',
          ],
          [
            'The official declaration records allied agreement on future Ukrainian and Georgian membership and asks foreign ministers later to assess progress. It is a decision of direction, not an accession protocol. Ukraine gained no role in NATO’s internal decisions and collective-defence obligations did not extend to it upon publication.',
            'The absence of a date and Membership Action Plan matters. It shows incomplete allied agreement on pace and conditions. Yet the announced destination was not neutral language: it changed expectations in Ukraine, Russia, and NATO states. A certain destination paired with uncertain implementation defines the Bucharest formula.',
          ],
          [
            'Офіційна декларація фіксує згоду союзників щодо майбутнього членства України й Грузії та доручає міністрам закордонних справ надалі оцінювати прогрес. Це рішення напряму, а не протокол приєднання. Україна не отримала участі у внутрішніх рішеннях НАТО, а колективна оборона не поширилася на неї з публікацією комюніке.',
            'Відсутність дати й плану дій щодо членства має окреме значення. Вона показує незавершену згоду союзників про темп та умови. Водночас оголошена кінцева мета не була нейтральною фразою: вона змінила очікування України, Росії та членів НАТО. Певність мети разом із невизначеністю виконання визначає Бухарестську формулу.',
          ],
        ),
      },
      {
        title: L('Место Бухареста в цепочке безопасности', 'Bucharest in the security sequence', 'Місце Бухареста в ланцюзі безпеки'),
        paragraphs: P(
          [
            'Основополагающий акт Россия — НАТО 27 мая 1997 года создавал модель консультаций и сотрудничества, в которой расширение не было оформлено как российское право вето. Бухарест 2008 года обозначил более конкретную украинскую перспективу. Астанинская декларация ОБСЕ 3 декабря 2010 года после этого вновь подтвердила и свободу выбора союзов, и обязательство не укреплять безопасность за счёт других.',
            'Крымские события 16 марта 2014 года и полномасштабное вторжение 24 февраля 2022 года часто объясняются как реакция на Бухарест. Хронологическое предшествование и публичные заявления подтверждают значение темы для российской угрозовой рамки. Они не доказывают, что саммит был единственной причиной или что восприятие будущего риска предоставило юридическое право применить силу против Украины.',
          ],
          [
            'The NATO–Russia Founding Act of 27 May 1997 created consultation and cooperation without formalising a Russian veto over enlargement. Bucharest in 2008 stated a more concrete Ukrainian prospect. The OSCE Astana Declaration of 3 December 2010 then reaffirmed both alliance freedom and the commitment not to strengthen security at others’ expense.',
            'Crimea on 16 March 2014 and full-scale invasion on 24 February 2022 are often explained as reactions to Bucharest. Sequence and public statements confirm the issue’s role in Russia’s threat frame. They do not prove the summit was the sole cause or that perceived future risk created a legal right to use force against Ukraine.',
          ],
          [
            'Основоположний акт Росія — НАТО 27 травня 1997 року створював консультації та співпрацю без оформлення російського вето на розширення. Бухарест 2008 року заявив конкретнішу українську перспективу. Астанинська декларація ОБСЄ 3 грудня 2010 року після цього знову підтвердила і свободу союзів, і обов’язок не зміцнювати безпеку коштом інших.',
            'Кримські події 16 березня 2014 року та повномасштабне вторгнення 24 лютого 2022 року часто пояснюють як реакцію на Бухарест. Послідовність і публічні заяви підтверджують значення теми в російській рамці загрози. Вони не доводять, що саміт був єдиною причиною або що сприйняття майбутнього ризику дало юридичне право застосувати силу проти України.',
          ],
        ),
      },
      {
        title: L('Как читать формулу будущего членства', 'How to read the future-membership formula', 'Як читати формулу майбутнього членства'),
        paragraphs: P(
          [
            'В коммюнике важны глагол будущего времени, отсутствие даты и отдельное упоминание плана действий. Формула устанавливает согласованное политическое намерение союзников на момент саммита. Она не устанавливает, что все необходимые условия уже выполнены, и не даёт точного календаря. Позднейшие изменения политики могут влиять на реализацию, но не отменяют факт сделанного в 2008 году заявления.',
            'Документ следует отличать от статьи 5 Североатлантического договора. Последняя относится к членам союза, тогда как Бухарест говорит о будущем статусе Украины. Поэтому нельзя считать, что в 2008 году Украина получила автоматическую военную гарантию. Нельзя и объявлять формулу бессодержательной: официально заявленная перспектива влияла на национальное планирование и международное восприятие.',
          ],
          [
            'The future tense, absence of date, and separate reference to a Membership Action Plan all matter. The communiqué establishes a shared allied political intention at the summit. It does not say that every condition was met or provide a calendar. Later policy may affect implementation without erasing the 2008 statement.',
            'The document must be distinguished from Article 5 of the North Atlantic Treaty. Article 5 applies to alliance members, while Bucharest describes Ukraine’s future status. Ukraine therefore received no automatic military guarantee in 2008. Nor was the formula empty: an official prospect shaped planning and international perceptions.',
          ],
          [
            'Важливі майбутній час дієслова, відсутність дати й окрема згадка плану дій. Комюніке встановлює спільний політичний намір союзників на момент саміту. Воно не каже, що всі умови вже виконані, і не дає календаря. Пізніша політика може впливати на реалізацію, але не стирає заяви 2008 року.',
            'Документ треба відрізняти від статті 5 Північноатлантичного договору. Вона стосується членів союзу, тоді як Бухарест описує майбутній статус України. Тому 2008 року Україна не отримала автоматичної військової гарантії. Формула водночас не була порожньою: офіційна перспектива впливала на планування та міжнародне сприйняття.',
          ],
        ),
      },
      {
        title: L('Суверенный выбор или созданная угроза', 'Sovereign choice or a created threat', 'Суверенний вибір чи створена загроза'),
        paragraphs: P(
          [
            'Украинская трактовка видит в Бухаресте подтверждение права государства выбирать механизмы безопасности. Российская трактовка видит в нём решение военного союза приблизить потенциальную инфраструктуру и изменить баланс. Оба описания отражают части политического эффекта. Но право выбора не гарантирует принятия в союз, а ощущение угрозы не становится само по себе законным основанием войны.',
            'Из декларации можно заключить, что НАТО объявило конечную перспективу без даты и плана действий. Нельзя только из неё вывести неизбежность последующей войны, фактическое членство Украины, обязательство союзников немедленно защищать её или юридическое право России остановить процесс силой. Бухарест важен как политический поворот и неразрешённая неопределённость, а не как документ, заранее определивший все дальнейшие решения.',
          ],
          [
            'Ukraine reads Bucharest as confirming a state’s right to choose security arrangements. Russia reads it as a military alliance moving potential infrastructure and changing the balance. Both capture part of the political effect. Freedom to choose does not guarantee admission, while perceived threat does not itself become a lawful ground for war.',
            'The declaration establishes an eventual NATO prospect without a date or action plan. It cannot alone establish inevitable war, actual Ukrainian membership, an immediate allied defence duty, or a Russian right to stop the process by force. Bucharest is a political turning point and unresolved ambiguity, not a document predetermining every later choice.',
          ],
          [
            'Українське тлумачення бачить у Бухаресті підтвердження права держави обирати механізми безпеки. Російське бачить рішення військового союзу наблизити потенційну інфраструктуру й змінити баланс. Обидва описують частину політичного ефекту. Свобода вибору не гарантує вступу, а відчуття загрози саме не стає законною підставою війни.',
            'Декларація встановлює кінцеву перспективу НАТО без дати й плану дій. Лише з неї не випливає неминучість війни, фактичне членство України, негайний союзний обов’язок захищати її або право Росії зупинити процес силою. Бухарест є політичним поворотом і невирішеною невизначеністю, а не документом, що наперед визначив усі наступні рішення.',
          ],
        ),
      },
    ],
  },

  astana: {
    lead: L(
      'Астанинская памятная декларация ОБСЕ была принята 3 декабря 2010 года и подтвердила общую систему принципов европейской безопасности. Её центральный для российско-украинского спора абзац содержит не одну, а две связанные идеи: каждое государство имеет равное право на безопасность и свободно выбирать или менять механизмы её обеспечения, включая союзы; одновременно государства не должны укреплять собственную безопасность за счёт других. Документ не объясняет автоматический способ разрешить коллизию между этими положениями. Он предполагает политическое согласование, взаимность и мирные средства, а не выбор удобной половины текста.',
      'The OSCE Astana Commemorative Declaration was adopted on 3 December 2010 and reaffirmed the shared framework of European security principles. Its paragraph central to the Russia–Ukraine dispute contains two linked ideas: every state has an equal right to security and freedom to choose or change security arrangements, including alliances; states also should not strengthen their security at the expense of others. The document supplies no automatic formula for resolving tension between them. It presupposes political accommodation, reciprocity, and peaceful means rather than selecting a convenient half of the text.',
      'Астанинську пам’ятну декларацію ОБСЄ ухвалили 3 грудня 2010 року, підтвердивши спільну систему принципів європейської безпеки. Центральний для російсько-українського спору абзац містить дві пов’язані ідеї: кожна держава має рівне право на безпеку й свободу обирати або змінювати її механізми, включно із союзами; водночас держави не повинні зміцнювати власну безпеку коштом інших. Документ не дає автоматичної формули розв’язання колізії. Він передбачає політичне узгодження, взаємність і мирні засоби, а не вибір зручної половини тексту.',
    ),
    sections: [
      {
        title: L('Единый абзац о разных интересах', 'One paragraph for different interests', 'Один абзац про різні інтереси'),
        paragraphs: P(
          [
            'Декларация подтверждает неотъемлемое право каждого государства свободно выбирать или менять свои механизмы безопасности, включая договоры и союзы, а также право на нейтралитет. Это положение защищает самостоятельность малых и больших государств одинаково. Оно не означает, что выбранный союз обязан принять государство или что последствия решения нельзя обсуждать с соседями.',
            'В той же связанной формуле говорится, что ни одно государство, группа государств или организация не может иметь преимущественную ответственность за мир и стабильность или считать какую-либо часть региона своей сферой влияния, а безопасность нельзя укреплять за счёт других. Эти положения требуют учитывать взаимные последствия, но не превращают субъективное возражение соседа в юридическое право вето.',
          ],
          [
            'The Declaration reaffirms every state’s inherent right freely to choose or change security arrangements, including treaties and alliances, and the right to neutrality. This protects the autonomy of small and large states equally. It neither obliges a chosen alliance to admit a state nor prevents discussion of effects with neighbours.',
            'The linked formula also rejects any state, group, or organisation having pre-eminent responsibility for peace or treating a region as its sphere of influence, and says security should not be strengthened at others’ expense. These provisions demand attention to mutual effects but do not turn a neighbour’s subjective objection into a legal veto.',
          ],
          [
            'Декларація підтверджує невід’ємне право кожної держави вільно обирати або змінювати механізми безпеки, включно з договорами та союзами, а також право на нейтралітет. Це однаково захищає самостійність малих і великих держав. Положення не зобов’язує обраний союз прийняти державу й не забороняє обговорювати наслідки рішення із сусідами.',
            'Та сама пов’язана формула відкидає переважну відповідальність будь-якої держави, групи чи організації за мир або сферу впливу в регіоні й каже, що безпеку не слід зміцнювати коштом інших. Ці положення вимагають уваги до взаємних наслідків, але не перетворюють суб’єктивне заперечення сусіда на юридичне вето.',
          ],
        ),
      },
      {
        title: L('После Бухареста и перед разрушением системы', 'After Bucharest and before the system’s collapse', 'Після Бухареста й перед руйнуванням системи'),
        paragraphs: P(
          [
            'Основополагающий акт Россия — НАТО 27 мая 1997 года создал раннюю модель консультаций. Бухарестский саммит 3 апреля 2008 года объявил будущее членство Украины и Грузии без даты. Астана 2010 года появилась уже после этого спора и всё же была согласована государствами ОБСЕ, включая Россию и Украину. Следовательно, обе стороны официально подтвердили обе части формулы в известном политическом контексте.',
            'Крымские события 16 марта 2014 года и полномасштабное вторжение 24 февраля 2022 года показали разрушение согласованной рамки. Российская сторона продолжала ссылаться на неделимую безопасность, а Украина — на свободу союзного выбора и территориальную целостность. Предыстория объясняет содержание претензий, но Астанинская декларация не содержит разрешения обеспечивать одну часть формулы вооружённым нарушением другой.',
          ],
          [
            'The NATO–Russia Founding Act of 27 May 1997 created an early consultation model. The Bucharest Summit of 3 April 2008 promised future Ukrainian and Georgian membership without a date. Astana in 2010 came after that dispute and was still agreed by OSCE states including Russia and Ukraine. Both officially reaffirmed both halves in a known political context.',
            'Crimea on 16 March 2014 and full-scale invasion on 24 February 2022 showed collapse of the agreed framework. Russia continued to invoke indivisible security, while Ukraine invoked alliance freedom and territorial integrity. The background explains claims, but Astana contains no permission to enforce one half through armed breach of another.',
          ],
          [
            'Основоположний акт Росія — НАТО 27 травня 1997 року створив ранню модель консультацій. Бухарестський саміт 3 квітня 2008 року оголосив майбутнє членство України й Грузії без дати. Астана 2010 року з’явилася вже після цього спору й однаково була погоджена державами ОБСЄ, включно з Росією та Україною. Отже, обидві офіційно підтвердили обидві частини формули у відомому контексті.',
            'Кримські події 16 березня 2014 року та повномасштабне вторгнення 24 лютого 2022 року показали руйнування погодженої рамки. Росія посилалася на неподільну безпеку, Україна — на свободу союзного вибору й територіальну цілісність. Передісторія пояснює претензії, але Астана не дозволяє забезпечувати одну частину формули збройним порушенням іншої.',
          ],
        ),
      },
      {
        title: L('Как читать политическую декларацию', 'How to read a political declaration', 'Як читати політичну декларацію'),
        paragraphs: P(
          [
            'Астанинский текст является декларацией саммита ОБСЕ и подтверждает политические обязательства и принципы, а не создаёт наднациональный суд, автоматически распределяющий допустимый уровень безопасности. Его значение определяется буквальной формулой, согласованностью с прежними документами и последующей практикой. Политический характер не позволяет произвольно переписать абзац, но требует осторожности при заявлении прямого юридического средства принуждения.',
            'Полный абзац следует приводить вместе: свобода выбора, равное право на безопасность, отсутствие сфер влияния и требование не укрепляться за чужой счёт образуют систему. Цитирование только последней части создаёт несуществующее право сильного соседа остановить союзную политику. Цитирование только первой части скрывает обязанность обсуждать реальные последствия и искать меры, которые снижают опасность для остальных.',
          ],
          [
            'Astana is an OSCE summit declaration reaffirming political commitments and principles, not a supranational court automatically allocating acceptable security levels. Its significance comes from literal wording, continuity with earlier instruments, and later practice. Political form does not permit rewriting the paragraph but requires care before claiming a direct coercive legal remedy.',
            'The whole paragraph belongs together: freedom of choice, equal security rights, absence of spheres, and the duty not to strengthen security at others’ expense. Quoting only the last invents a strong neighbour’s right to stop alliance policy. Quoting only the first conceals a duty to discuss effects and seek risk-reducing measures.',
          ],
          [
            'Астана є декларацією саміту ОБСЄ, що підтверджує політичні зобов’язання й принципи, а не наднаціональним судом, який автоматично розподіляє допустимий рівень безпеки. Її значення походить із буквальних слів, зв’язку з попередніми документами та подальшої практики. Політична форма не дозволяє переписувати абзац, але вимагає обережності щодо прямого примусового засобу.',
            'Повний абзац треба наводити разом: свобода вибору, рівне право на безпеку, відсутність сфер впливу й вимога не зміцнюватися коштом інших утворюють систему. Лише остання частина вигадує право сильного сусіда зупинити союзну політику. Лише перша приховує обов’язок обговорювати наслідки й шукати заходи зниження ризику.',
          ],
        ),
      },
      {
        title: L('Вето, игнорирование или трудное согласование', 'Veto, disregard, or difficult accommodation', 'Вето, ігнорування чи складне узгодження'),
        paragraphs: P(
          [
            'Российская трактовка ставит в центр недопустимость укрепления безопасности НАТО за российский счёт. Украинская трактовка подчёркивает, что без свободы выбора эта формула превращает соседние государства в сферу влияния. Обе обнаруживают реальное напряжение текста. Оно должно было разрешаться переговорами о конкретных силах, прозрачности и ограничениях, а не абстрактным признанием абсолютного приоритета одной стороны.',
            'Из декларации можно заключить, что Россия, Украина и другие государства ОБСЕ в 2010 году совместно подтвердили обе нормы. Нельзя только из неё вывести точный баланс вооружений, обязанность Украины отказаться от НАТО, обязанность НАТО принять Украину или право применить силу при неудаче консультаций. Документ остаётся проектным принципом будущего порядка: его смысл появится лишь в симметричных, проверяемых и согласованных мерах.',
          ],
          [
            'Russia centres the prohibition on strengthening NATO security at Russian expense. Ukraine stresses that without alliance freedom the formula turns neighbours into a sphere of influence. Both identify a real textual tension. It was meant to be managed through negotiations on forces, transparency, and restraints, not abstract priority for one side.',
            'The Declaration establishes that Russia, Ukraine, and other OSCE states jointly reaffirmed both principles in 2010. It cannot alone set a force balance, require Ukraine to renounce NATO, require NATO to admit Ukraine, or authorise force after failed consultation. It remains a design principle whose meaning depends on reciprocal, verifiable, agreed measures.',
          ],
          [
            'Російське тлумачення ставить у центр неприпустимість зміцнення безпеки НАТО коштом Росії. Українське підкреслює, що без свободи вибору формула перетворює сусідів на сферу впливу. Обидва бачать реальне напруження тексту. Його передбачалося врегульовувати переговорами про сили, прозорість та обмеження, а не абстрактним пріоритетом однієї сторони.',
            'Декларація встановлює, що Росія, Україна й інші держави ОБСЄ 2010 року спільно підтвердили обидві норми. Лише з неї не випливає баланс озброєнь, обов’язок України відмовитися від НАТО, обов’язок НАТО прийняти Україну чи право сили після провалу консультацій. Це проєктний принцип, зміст якого залежить від взаємних, перевірюваних і погоджених заходів.',
          ],
        ),
      },
    ],
  },

  'power-2014': {
    lead: L(
      '22 февраля 2014 года Верховная Рада Украины приняла постановление № 757-VII, заявив, что президент Виктор Янукович неконституционным образом самоустранился от исполнения полномочий, и назначила досрочные президентские выборы. Решение возникло после месяцев протестов, насилия, соглашения 21 февраля и фактического отъезда президента из Киева. Оно стало одновременно юридическим актом, революционным переломом и началом новой институциональной последовательности. Поэтому спор о «перевороте» нельзя решить одним названием: нужно отдельно оценить буквальную конституционную процедуру, фактическую непрерывность государства и последующую выборную легитимацию.',
      'On 22 February 2014 Ukraine’s Verkhovna Rada adopted Resolution No. 757-VII, stating that President Viktor Yanukovych had unconstitutionally withdrawn from performing his powers and calling an early presidential election. The decision followed months of protest and violence, the 21 February agreement, and the president’s effective departure from Kyiv. It was simultaneously a legal act, a revolutionary turning point, and the beginning of a new institutional sequence. The “coup” dispute cannot be settled by a label; constitutional procedure, state continuity, and later electoral legitimation require separate assessment.',
      '22 лютого 2014 року Верховна Рада України ухвалила постанову № 757-VII, заявивши, що президент Віктор Янукович неконституційно самоусунувся від виконання повноважень, і призначила дострокові президентські вибори. Рішення настало після місяців протестів і насильства, угоди 21 лютого та фактичного від’їзду президента з Києва. Воно стало водночас юридичним актом, революційним переломом і початком нової інституційної послідовності. Тому спір про «переворот» не вирішується однією назвою: треба окремо оцінити конституційну процедуру, безперервність держави й наступну виборчу легітимацію.',
    ),
    sections: [
      {
        title: L('Что установило постановление парламента', 'What parliament’s resolution established', 'Що встановила постанова парламенту'),
        paragraphs: P(
          [
            'Постановление зафиксировало парламентскую оценку: президент прекратил выполнять конституционные полномочия и тем самым создал угрозу управляемости, территориальной целостности и суверенитету. На этой основе Рада назначила досрочные выборы. Документ не объявляет завершённую процедуру импичмента и не утверждает, что президент подал в отставку. Его собственная формула — неконституционное самоустранение.',
            'Конституция перечисляла основания досрочного прекращения президентских полномочий и порядок временного исполнения функций. Спор возникает потому, что использованная парламентом категория не совпадает буквально с обычной завершённой процедурой одного из перечисленных оснований. Установление этого отклонения важно, но оно ещё не отвечает, как государство должно было действовать при фактическом отсутствии президента и кризисе управления.',
          ],
          [
            'The resolution recorded parliament’s assessment that the president had ceased performing constitutional powers, threatening governability, territorial integrity, and sovereignty. It called an early election on that basis. It does not claim completed impeachment or presidential resignation. Its own formula is unconstitutional withdrawal from duties.',
            'The Constitution listed grounds for early termination and rules for temporary performance. Controversy arises because parliament’s category does not literally match the ordinary completed procedure for one listed ground. Identifying that departure matters, but does not yet answer how the state should respond to effective presidential absence and a governance crisis.',
          ],
          [
            'Постанова зафіксувала оцінку парламенту: президент припинив виконувати конституційні повноваження й створив загрозу керованості, територіальній цілісності та суверенітету. На цій підставі Рада призначила дострокові вибори. Документ не оголошує завершений імпічмент і не стверджує про відставку. Його власна формула — неконституційне самоусунення.',
            'Конституція перелічувала підстави дострокового припинення президентських повноважень і порядок тимчасового виконання функцій. Спір виникає, бо використана парламентом категорія буквально не збігається зі звичайною завершеною процедурою однієї з підстав. Це відхилення важливе, але ще не відповідає, як державі діяти за фактичної відсутності президента й кризи управління.',
          ],
        ),
      },
      {
        title: L('Избирательный мандат, кризис и последующие события', 'Electoral mandate, crisis, and what followed', 'Виборчий мандат, криза й наступні події'),
        paragraphs: P(
          [
            'Янукович получил президентский мандат на выборах 2010 года; итоговый доклад БДИПЧ ОБСЕ оценивал второй тур как подтверждавший соответствие большинству обязательств перед ОБСЕ и Советом Европы. Этот факт опровергает упрощение, будто исходного выборного мандата не существовало. Но победа на выборах не исключает предусмотренных законом способов ответственности и не отвечает на ситуацию фактического прекращения исполнения обязанностей.',
            'Крымское голосование 16 марта 2014 года состоялось менее чем через месяц и в условиях появления российских сил. Начало Антитеррористической операции 14 апреля относится уже к решениям новой власти, а досрочные выборы дали ей последующий прямой мандат. Эти этапы связаны, но возможный дефект 22 февраля нельзя автоматически переносить на каждый поздний акт или использовать как разрешение иностранного изменения территории.',
          ],
          [
            'Yanukovych received an electoral mandate in 2010; the OSCE/ODIHR final report assessed the second round as meeting most OSCE and Council of Europe commitments. This rejects the claim that no initial mandate existed. Electoral victory, however, does not eliminate lawful accountability and does not answer effective cessation of duties.',
            'The Crimean vote of 16 March 2014 occurred less than a month later amid Russian forces. The Anti-Terrorist Operation of 14 April belongs to decisions of succeeding authorities, and early elections later supplied a direct mandate. These stages are connected, but a possible defect on 22 February cannot invalidate every later act automatically or authorise foreign territorial change.',
          ],
          [
            'Янукович отримав президентський мандат на виборах 2010 року; підсумковий звіт БДІПЛ ОБСЄ оцінював другий тур як такий, що відповідав більшості зобов’язань перед ОБСЄ та Радою Європи. Це спростовує твердження про відсутність початкового мандата. Проте виборча перемога не скасовує законних способів відповідальності й не відповідає на фактичне припинення виконання обов’язків.',
            'Кримське голосування 16 березня 2014 року відбулося менш ніж за місяць і за присутності російських сил. Початок Антитерористичної операції 14 квітня належить уже до рішень нової влади, а дострокові вибори дали наступний прямий мандат. Етапи пов’язані, але можливий дефект 22 лютого не скасовує автоматично всі пізніші акти й не дозволяє зовнішню зміну території.',
          ],
        ),
      },
      {
        title: L('Как читать Конституцию, постановление и отчёт ОБСЕ', 'Reading the Constitution, resolution, and OSCE report', 'Як читати Конституцію, постанову й звіт ОБСЄ'),
        paragraphs: P(
          [
            'Конституцию нужно открывать в редакции, относящейся к февралю 2014 года, и различать прекращение полномочий, их временное исполнение и импичмент. Постановление № 757-VII устанавливает фактически принятую парламентом формулу и дату выборов. Сопоставление показывает расхождение между чрезвычайным решением и обычной конституционной схемой, но не превращает исследователя в суд, способный отменить весь последующий порядок.',
            'Доклад БДИПЧ о выборах 2010 года оценивает избирательный процесс, а не поведение президента через четыре года и не процедуру его отстранения. Последующие отчёты о выборах отвечают на вопрос качества нового голосования, а не исправляют прошлое задним числом. Каждый официальный источник имеет ограниченный предмет; их объединение даёт последовательную картину, но не одно всеохватывающее заключение.',
          ],
          [
            'The Constitution must be opened in its February 2014 version, distinguishing termination, temporary performance, and impeachment. Resolution No. 757-VII establishes the formula parliament actually used and the election date. Comparison shows departure from the ordinary constitutional scheme under emergency, but does not turn an analyst into a court able to nullify the entire later order.',
            'The ODIHR report on the 2010 election evaluates that electoral process, not the president’s conduct four years later or his removal. Later election reports assess new voting quality without retroactively correcting the past. Each official source has a limited subject; together they create a sequence, not one all-purpose judgment.',
          ],
          [
            'Конституцію треба відкривати в редакції лютого 2014 року й розрізняти припинення повноважень, їх тимчасове виконання та імпічмент. Постанова № 757-VII встановлює формулу, фактично використану парламентом, і дату виборів. Зіставлення показує відхилення надзвичайного рішення від звичайної схеми, але не робить дослідника судом, здатним скасувати весь наступний порядок.',
            'Звіт БДІПЛ про вибори 2010 року оцінює той виборчий процес, а не поведінку президента через чотири роки чи процедуру його усунення. Наступні звіти оцінюють якість нового голосування, але не виправляють минуле заднім числом. Кожне офіційне джерело має обмежений предмет; разом вони створюють послідовність, а не один всеохопний вирок.',
          ],
        ),
      },
      {
        title: L('Переворот, революция или конституционный переход', 'Coup, revolution, or constitutional transition', 'Переворот, революція чи конституційний перехід'),
        paragraphs: P(
          [
            'Термин «переворот» подчёркивает давление улицы, насилие и отклонение от стандартной процедуры. Термин «революция» описывает фактический политический перелом и массовую мобилизацию. Формула «конституционный переход» ставит в центр парламент и последующие выборы. Каждая схватывает отдельный уровень, но становится вводящей в заблуждение, когда выдаётся за полный юридический и фактический портрет события.',
            'Из документов можно заключить, что парламент принял реальное чрезвычайное решение при действующем выборном мандате президента и отклонился от бесспорной обычной схемы, после чего государственные институты продолжили работу и провели выборы. Нельзя только из этого вывести исчезновение Украины, законность любого действия новой власти, право России вмешаться или безупречность исходной процедуры. Точный вывод признаёт одновременно дефект, необходимость управления и последующую легитимацию.',
          ],
          [
            '“Coup” stresses street pressure, violence, and departure from ordinary procedure. “Revolution” describes effective political rupture and mass mobilisation. “Constitutional transition” centres parliament and later elections. Each captures one level but misleads when presented as the complete legal and factual account.',
            'The documents support that parliament made a real emergency decision while an elected presidential mandate existed and departed from an uncontested ordinary scheme, after which state institutions continued and held elections. They do not prove Ukraine disappeared, every later act was lawful, Russia could intervene, or the initial process was flawless. The accurate conclusion holds defect, governance necessity, and later legitimation together.',
          ],
          [
            'Термін «переворот» підкреслює тиск вулиці, насильство й відхилення від звичайної процедури. «Революція» описує фактичний політичний перелом і масову мобілізацію. «Конституційний перехід» ставить у центр парламент і наступні вибори. Кожна назва охоплює один рівень, але вводить в оману, коли видається за повний правовий і фактичний портрет.',
            'Документи дозволяють встановити, що парламент ухвалив реальне надзвичайне рішення за наявності виборчого мандата президента й відійшов від безспірної звичайної схеми, після чого інституції продовжили роботу та провели вибори. Це не доводить зникнення України, законність кожної пізнішої дії, право Росії втрутитися чи бездоганність початкової процедури. Точний висновок поєднує дефект, потребу управління й наступну легітимацію.',
          ],
        ),
      },
    ],
  },

  crimea: {
    lead: L(
      '16 марта 2014 года в Крыму провели голосование о статусе полуострова, а 18 марта Россия подписала договор о принятии Крыма и Севастополя. Событие соединяет четыре разных вопроса: взгляды жителей, конституционные полномочия крымских органов, условия голосования при присутствии российских сил и международно-правовое изменение границы. Венецианская комиссия сочла решение о местном референдуме несовместимым с Конституцией Украины и указала, что обстоятельства не позволяли провести демократическое голосование. Генеральная Ассамблея ООН подтвердила территориальную целостность Украины и не признала изменение статуса.',
      'On 16 March 2014 a vote on Crimea’s status was held, and on 18 March Russia signed a treaty incorporating Crimea and Sevastopol. The event combines four distinct questions: residents’ views, constitutional authority of Crimean bodies, voting conditions amid Russian forces, and an international border change. The Venice Commission found the local referendum decision incompatible with Ukraine’s Constitution and said circumstances did not permit a democratic vote. The UN General Assembly reaffirmed Ukraine’s territorial integrity and did not recognise the status change.',
      '16 березня 2014 року в Криму провели голосування про статус півострова, а 18 березня Росія підписала договір про прийняття Криму й Севастополя. Подія поєднує чотири різні питання: погляди мешканців, конституційні повноваження кримських органів, умови голосування за присутності російських сил і міжнародно-правову зміну кордону. Венеційська комісія визнала рішення про місцевий референдум несумісним із Конституцією України та зазначила, що обставини не дозволяли демократичного голосування. Генеральна Асамблея ООН підтвердила територіальну цілісність України й не визнала зміни статусу.',
    ),
    sections: [
      {
        title: L('Что произошло между голосованием и аннексией', 'What happened between the vote and annexation', 'Що сталося між голосуванням та анексією'),
        paragraphs: P(
          [
            'Голосование было организовано крымскими властями после быстрой смены фактического контроля на полуострове. Поставленные варианты не предусматривали простого сохранения прежнего положения, а российские силы играли определяющую роль в окружающей обстановке. Уже через два дня был подписан договор о включении территории в Российскую Федерацию. Скорость последовательности имеет значение для оценки заранее подготовленных решений и свободы процесса.',
            'Украинская Конституция относила изменение территории к всеукраинскому референдуму, а автономные органы не обладали односторонним полномочием вывести Крым из состава государства. Российская позиция опиралась на заявленную волю населения и самоопределение. Международная оценка поставила в центр отсутствие действительной конституционной процедуры, военную обстановку и запрет изменять границы посредством силы.',
          ],
          [
            'Crimean authorities organised the vote after a rapid shift of effective control on the peninsula. The offered options did not include simple continuation of the previous position, while Russian forces shaped the surrounding environment. A treaty incorporating the territory into Russia was signed two days later. The speed matters to assessment of pre-arranged decisions and process freedom.',
            'Ukraine’s Constitution reserved territorial change to a nationwide referendum, and autonomous bodies lacked unilateral authority to remove Crimea from the state. Russia relied on asserted popular will and self-determination. The international assessment centred absence of valid constitutional procedure, the military setting, and the prohibition on changing borders through force.',
          ],
          [
            'Кримська влада організувала голосування після швидкої зміни фактичного контролю на півострові. Запропоновані варіанти не містили простого збереження попереднього становища, а російські сили визначали навколишнє середовище. Уже через два дні підписали договір про включення території до Російської Федерації. Швидкість важлива для оцінки наперед підготовлених рішень і свободи процесу.',
            'Конституція України відносила зміну території до всеукраїнського референдуму, а автономні органи не мали одностороннього повноваження вивести Крим зі складу держави. Російська позиція спиралася на заявлену волю населення й самовизначення. Міжнародна оцінка поставила в центр відсутність чинної конституційної процедури, військове середовище та заборону змінювати кордони силою.',
          ],
        ),
      },
      {
        title: L('Исторический фон и непосредственная последовательность', 'Historical background and immediate sequence', 'Історичне тло й безпосередня послідовність'),
        paragraphs: P(
          [
            'Передача Крымской области 19 февраля 1954 года объясняет происхождение советской административной границы, но не решает статус после распада СССР. Декларация о суверенитете Украины 16 июля 1990 года, независимость 1991 года и Будапештский меморандум 5 декабря 1994 года образуют последующую линию самостоятельного государства и признанных границ. Историческая претензия должна учитывать все эти этапы.',
            'Смена власти в Киеве 22 февраля 2014 года создала острый спор о легитимности центральных органов, но не передала Крыму или России полномочие менять украинскую территорию. Между этим решением и голосованием прошло менее месяца. Именно сочетание внутреннего кризиса, иностранного военного присутствия, действий автономных органов и быстрого российского договора делает событие отличным от свободного согласованного референдума о границе.',
          ],
          [
            'The transfer of Crimea on 19 February 1954 explains the Soviet administrative boundary but not status after USSR dissolution. Ukraine’s sovereignty declaration of 16 July 1990, independence in 1991, and the Budapest Memorandum of 5 December 1994 form the later line of separate statehood and recognised borders. A historical claim must account for every stage.',
            'The transfer of power in Kyiv on 22 February 2014 created acute controversy over central authority but gave neither Crimea nor Russia power to alter Ukrainian territory. Less than a month separated it from the vote. Internal crisis, foreign military presence, autonomous-body action, and rapid Russian incorporation distinguish the event from a free, agreed border referendum.',
          ],
          [
            'Передача Криму 19 лютого 1954 року пояснює походження радянського адміністративного кордону, але не статус після розпаду СРСР. Декларація про суверенітет України 16 липня 1990 року, незалежність 1991 року й Будапештський меморандум 5 грудня 1994 року утворюють наступну лінію окремої державності та визнаних кордонів. Історична претензія має враховувати всі етапи.',
            'Зміна влади в Києві 22 лютого 2014 року створила гострий спір про легітимність центральних органів, але не передала Криму чи Росії повноваження змінювати українську територію. До голосування минуло менш ніж місяць. Поєднання внутрішньої кризи, іноземної військової присутності, дій автономних органів і швидкого російського договору відрізняє подію від вільного погодженого референдуму.',
          ],
        ),
      },
      {
        title: L('Что установили Венецианская комиссия и ООН', 'What the Venice Commission and UN established', 'Що встановили Венеційська комісія та ООН'),
        paragraphs: P(
          [
            'Заключение Венецианской комиссии отвечает на конституционный и демократический вопросы. Оно указывает, что Конституция Украины не допускала местного референдума об изменении территории, а обстоятельства в Крыму не позволяли провести голосование в соответствии с демократическими стандартами. Заключение не является опросом населения и не утверждает, что на полуострове отсутствовали сторонники присоединения к России.',
            'Резолюция Генеральной Ассамблеи 68/262 подтвердила территориальную целостность Украины в международно признанных границах и указала, что голосование не может изменить статус Крыма. Она фиксирует позицию широкого состава государств и основание непризнания, но не заменяет уголовное расследование каждого действия или социологическое исследование взглядов. Конституция Украины отдельно показывает внутреннее распределение полномочий по территории.',
          ],
          [
            'The Venice Commission opinion answers constitutional and democratic questions. It says Ukraine’s Constitution did not permit a local referendum changing territory and that Crimean circumstances did not allow a vote according to democratic standards. It is not an opinion poll and does not say no residents supported joining Russia.',
            'General Assembly Resolution 68/262 reaffirms Ukraine’s territorial integrity within internationally recognised borders and says the vote cannot alter Crimea’s status. It records a broad state position and basis for non-recognition, but replaces neither criminal investigation nor sociological study. Ukraine’s Constitution separately shows domestic allocation of territorial authority.',
          ],
          [
            'Висновок Венеційської комісії відповідає на конституційне й демократичне питання. Він вказує, що Конституція України не дозволяла місцевого референдуму про зміну території, а кримські обставини не давали провести голосування за демократичними стандартами. Це не опитування населення й не твердження про відсутність прихильників приєднання до Росії.',
            'Резолюція Генеральної Асамблеї 68/262 підтверджує територіальну цілісність України в міжнародно визнаних кордонах і каже, що голосування не може змінити статус Криму. Вона фіксує широку позицію держав та основу невизнання, але не замінює кримінального розслідування чи соціологічного дослідження. Конституція України окремо показує внутрішній розподіл територіальних повноважень.',
          ],
        ),
      },
      {
        title: L('Воля населения и граница правового вывода', 'Popular will and the limit of legal inference', 'Воля населення та межа правового висновку'),
        paragraphs: P(
          [
            'Российская трактовка ставит в центр объявленный результат и право на самоопределение, сравнивая Крым с другими отделениями. Украинская и преобладающая международная трактовка подчёркивают иностранную силу, отсутствие компетенции и территориальную целостность. Первая не отвечает на условия свободного волеизъявления и роль силы; вторая не должна делать вид, что политические настроения населения не заслуживают отдельного изучения.',
            'Из официальных документов можно заключить, что голосование не было признано законным основанием изменения международного статуса и что Россия установила контроль и объявила присоединение. Нельзя только из этих документов точно измерить убеждения всех крымчан, установить личную ответственность каждого участника или вывести готовую модель будущего урегулирования. Уважение мнения населения требует надёжной свободной процедуры; признание границы требует согласования с правом и отсутствия внешнего принуждения.',
          ],
          [
            'Russia centres the announced result and self-determination, comparing Crimea with other separations. Ukraine and the prevailing international view centre foreign force, lack of authority, and territorial integrity. The first does not answer free-choice conditions and force; the second should not pretend residents’ political views merit no separate study.',
            'Official instruments establish that the vote was not recognised as a lawful basis for international status change and that Russia took control and declared incorporation. They cannot precisely measure every Crimean’s beliefs, assign each person’s responsibility, or provide a ready future settlement. Respect for popular opinion requires a reliable free process; recognised border change requires law and absence of external coercion.',
          ],
          [
            'Російське тлумачення ставить у центр оголошений результат і самовизначення, порівнюючи Крим з іншими відокремленнями. Українське та переважне міжнародне бачення підкреслюють іноземну силу, відсутність повноважень і територіальну цілісність. Перше не відповідає на умови вільного вибору й роль сили; друге не повинно заперечувати потребу окремо вивчати політичні погляди мешканців.',
            'Офіційні документи дозволяють встановити, що голосування не визнали законною підставою зміни міжнародного статусу, а Росія встановила контроль і оголосила приєднання. Вони не вимірюють переконань усіх кримчан, не встановлюють відповідальність кожного учасника й не дають готового майбутнього врегулювання. Повага до думки населення потребує надійної вільної процедури; визнана зміна кордону — права й відсутності зовнішнього примусу.',
          ],
        ),
      },
    ],
  },
}
