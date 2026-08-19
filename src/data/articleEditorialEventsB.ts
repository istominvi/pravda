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

export const editorialEventArticlesB: Record<string, EditorialEventArticle> = {
  ato: {
    lead: L(
      '14 апреля 2014 года указом президента Украины было введено в действие решение Совета национальной безопасности и обороны о мерах против террористической угрозы и для сохранения территориальной целостности. Эта дата обозначает начало оформленной государственной силовой операции на востоке страны, но не начало всей причинной цепочки. Ей предшествовали политический кризис, захваты административных зданий, появление вооружённых групп и быстрое изменение контроля на местах. Документальная реконструкция должна удерживать вместе внутреннюю мобилизацию, решения Киева и подтверждаемое внешнее участие, не превращая один уровень в объяснение всего конфликта.',
      'On 14 April 2014, a Ukrainian presidential decree put into effect a National Security and Defence Council decision on measures against the terrorist threat and in defence of territorial integrity. The date marks the start of a formally constituted state security operation in eastern Ukraine, but not the beginning of the entire causal chain. It was preceded by political crisis, seizures of administrative buildings, the emergence of armed groups, and rapidly shifting local control. A documentary reconstruction must hold together local mobilisation, decisions in Kyiv, and verifiable external involvement without turning one level into a complete explanation of the conflict.',
      '14 квітня 2014 року указом президента України було введено в дію рішення Ради національної безпеки і оборони про заходи проти терористичної загрози та для збереження територіальної цілісності. Ця дата позначає початок оформленої державної силової операції на сході країни, але не початок усього причинного ланцюга. Їй передували політична криза, захоплення адміністративних будівель, поява збройних груп і швидка зміна контролю на місцях. Документальна реконструкція має разом утримувати внутрішню мобілізацію, рішення Києва та підтверджувану зовнішню участь, не перетворюючи один рівень на пояснення всього конфлікту.',
    ),
    sections: [
      {
        title: L('До указа: кризис власти и вооружённая эскалация', 'Before the decree: political crisis and armed escalation', 'До указу: криза влади та збройна ескалація'),
        paragraphs: P(
          [
            'Хронология апреля важна по дням. Публичные заявления 7 апреля, захваты зданий и провозглашение новых политических образований относятся к обстановке, предшествовавшей силовому решению. 13 апреля Совет национальной безопасности и обороны принял решение о неотложных мерах, а 14 апреля президентский указ ввёл его в действие. Сведение всех этих эпизодов к одной дате скрывает, на какие действия отвечал государственный орган и как быстро менялась ситуация.',
            'В то же время предыстория не доказывает автоматически законность каждого последующего применения силы. Нужно установить, какое здание было захвачено, кем контролировалась конкретная вооружённая группа, существовала ли реальная возможность мирного разрешения и какие приказы получили государственные подразделения. Политический протест, занятие учреждения без оружия, вооружённое восстание и командование извне требуют разных фактов и не должны объединяться одним названием.',
          ],
          [
            'The April chronology matters day by day. Public declarations on 7 April, building seizures, and proclamations of new political entities belong to the setting before the security decision. On 13 April the National Security and Defence Council adopted urgent measures, and on 14 April the presidential decree put them into effect. Collapsing these episodes into one date obscures what conduct the state body was responding to and how quickly conditions were changing.',
            'At the same time, the background does not automatically make every later use of force lawful. The inquiry must identify which building was seized, who controlled a particular armed group, whether a genuine peaceful route remained, and what orders state units received. Political protest, unarmed occupation of an institution, armed uprising, and command from abroad require different facts and should not be merged under one label.',
          ],
          [
            'Квітнева хронологія важлива за окремими днями. Публічні заяви 7 квітня, захоплення будівель і проголошення нових політичних утворень належать до обстановки, що передувала силовому рішенню. 13 квітня Рада національної безпеки і оборони ухвалила рішення про невідкладні заходи, а 14 квітня президентський указ увів його в дію. Зведення цих епізодів до однієї дати приховує, на які дії відповідав державний орган і як швидко змінювалася ситуація.',
            'Водночас передісторія не доводить автоматично законності кожного наступного застосування сили. Треба встановити, яку будівлю захопили, хто контролював конкретну збройну групу, чи лишалася реальна можливість мирного розв’язання і які накази отримали державні підрозділи. Політичний протест, неозброєне зайняття установи, збройне повстання та командування ззовні потребують різних фактів і не мають об’єднуватися однією назвою.',
          ],
        ),
      },
      {
        title: L('Что установили указ, ОБСЕ и миссия ООН', 'What the decree, OSCE, and UN mission establish', 'Що встановили указ, ОБСЄ та місія ООН'),
        paragraphs: P(
          [
            'Указ № 405/2014 точно устанавливает юридический момент введения в действие решения СНБО и официально заявленную задачу — преодоление террористической угрозы и сохранение территориальной целостности. Он подтверждает решение украинской власти, но не является нейтральной инвентаризацией всех участников на земле. Из названия операции нельзя вывести индивидуальную ответственность каждого жителя региона или правовую квалификацию любого эпизода.',
            'Ежедневный отчёт Специальной мониторинговой миссии ОБСЕ от 14 апреля фиксирует наблюдаемую обстановку и захваты административных объектов в пределах доступа миссии. Доклад Мониторинговой миссии ООН от 15 июня добавляет более широкий ретроспективный обзор: вооружённые группы, присутствие граждан России, командную роль Игоря Гиркина в Славянске и действия украинского правительства. Эти источники дополняют друг друга, но не заменяют поэпизодное расследование.',
          ],
          [
            'Decree No. 405/2014 precisely establishes the legal moment when the NSDC decision took effect and its officially stated purpose—overcoming a terrorist threat and preserving territorial integrity. It proves a decision by the Ukrainian authorities but is not a neutral inventory of every participant on the ground. The operation’s name cannot establish individual responsibility for every resident or legally classify every incident.',
            'The OSCE Special Monitoring Mission daily report of 14 April records observable conditions and seizures of administrative sites within the mission’s access. The UN Human Rights Monitoring Mission report of 15 June adds a wider retrospective account: armed groups, Russian citizens among them, Igor Girkin’s command role in Sloviansk, and Ukrainian government action. The sources complement one another but do not replace incident-by-incident investigation.',
          ],
          [
            'Указ № 405/2014 точно встановлює юридичний момент введення в дію рішення РНБО та офіційно заявлене завдання — подолання терористичної загрози й збереження територіальної цілісності. Він підтверджує рішення української влади, але не є нейтральною інвентаризацією всіх учасників на місці. З назви операції не можна вивести індивідуальну відповідальність кожного жителя регіону або правову кваліфікацію будь-якого епізоду.',
            'Щоденний звіт Спеціальної моніторингової місії ОБСЄ від 14 квітня фіксує спостережувану обстановку й захоплення адміністративних об’єктів у межах доступу місії. Доповідь Моніторингової місії ООН від 15 червня додає ширший ретроспективний огляд: збройні групи, присутність громадян Росії, командну роль Ігоря Гіркіна у Слов’янську та дії українського уряду. Ці джерела доповнюють одне одного, але не замінюють розслідування кожного епізоду.',
          ],
        ),
      },
      {
        title: L('Три уровня участников конфликта', 'Three levels of conflict participation', 'Три рівні участі в конфлікті'),
        paragraphs: P(
          [
            'Внутренний уровень включает недоверие к новой власти, региональные политические сети и местных участников захватов. Межгосударственный уровень охватывает перемещение людей, вооружений, командных возможностей и политическую поддержку из России. Государственный ответ Украины составляет третий уровень: решения центральных органов, действия силовых подразделений и последствия для гражданского населения. Полная картина требует проверять их взаимодействие, а не выбирать один как единственно настоящий.',
            'Формула «Киев начал войну против Донбасса» ставит указ раньше предшествующих вооружённых действий и превращает регион в единого участника. Обратная формула «всё было только внешней операцией» может стирать местные мотивы и самостоятельные действия. Документальная версия допускает одновременно локальную мобилизацию и существенное внешнее участие, но для каждого вывода требует имён, дат, командных связей и наблюдаемого поведения.',
          ],
          [
            'The internal level includes distrust of the new authorities, regional political networks, and local participants in seizures. The interstate level includes movement of people, weapons, command capability, and political support from Russia. Ukraine’s state response forms a third level: central decisions, action by security units, and consequences for civilians. A complete picture tests their interaction rather than choosing one as the only real level.',
            'The formula “Kyiv started a war against Donbas” places the decree before preceding armed actions and turns a region into a single actor. The reverse formula, “everything was only an external operation,” may erase local motives and autonomous conduct. A documentary account can recognise both local mobilisation and substantial outside involvement, but each conclusion needs names, dates, command links, and observable behaviour.',
          ],
          [
            'Внутрішній рівень охоплює недовіру до нової влади, регіональні політичні мережі й місцевих учасників захоплень. Міждержавний рівень включає переміщення людей, озброєнь, командних можливостей і політичну підтримку з Росії. Державна відповідь України становить третій рівень: рішення центральних органів, дії силових підрозділів і наслідки для цивільного населення. Повна картина потребує перевіряти їх взаємодію, а не обирати один як єдино справжній.',
            'Формула «Київ почав війну проти Донбасу» ставить указ раніше за попередні збройні дії й перетворює регіон на єдиного учасника. Зворотна формула «усе було лише зовнішньою операцією» може стирати місцеві мотиви й самостійні дії. Документальна версія допускає водночас локальну мобілізацію та істотну зовнішню участь, але для кожного висновку вимагає імен, дат, командних зв’язків і спостережуваної поведінки.',
          ],
        ),
      },
      {
        title: L('Граница даты и ответственность за последующие действия', 'The boundary of the date and responsibility for later conduct', 'Межа дати й відповідальність за наступні дії'),
        paragraphs: P(
          [
            '14 апреля удобно использовать как дату официального начала АТО, но опасно превращать её в нулевую точку всей войны. Выбор начала хронологии влияет на причинный рассказ: февральская смена власти, мартовская аннексия Крыма, апрельские захваты и более позднее прямое межгосударственное столкновение отвечают на разные вопросы. Корректная статья сообщает, какой процесс начинается выбранной датой, и не удаляет предшествующие звенья.',
            'Наличие вооружённой угрозы давало государству обязанность защищать население и территориальный порядок, но не освобождало его силы от ограничений права и проверки конкретного вреда. Внешнее участие также не снимает ответственности с местных командиров за их решения. Главный предел общего объяснения прост: происхождение конфликта не выносит заранее вердикт по каждому обстрелу, задержанию или гражданской жертве; такие случаи требуют отдельных доказательств.',
          ],
          [
            '14 April is a useful date for the official start of the ATO, but a dangerous zero point for the entire war. A starting date shapes the causal account: the February transfer of power, March annexation of Crimea, April seizures, and later direct interstate confrontation answer different questions. An accurate article states which process begins on the selected date without deleting earlier links.',
            'An armed threat gave the state a duty to protect people and territorial order, but did not free its forces from legal limits or review of specific harm. Outside involvement likewise does not remove local commanders’ responsibility for their decisions. The key limit of any general account is simple: the conflict’s origin does not prejudge every shelling, detention, or civilian casualty; each requires separate evidence.',
          ],
          [
            '14 квітня зручно використовувати як дату офіційного початку АТО, але небезпечно перетворювати її на нульову точку всієї війни. Вибір початку хронології впливає на причинну розповідь: лютнева зміна влади, березнева анексія Криму, квітневі захоплення й пізніше пряме міждержавне зіткнення відповідають на різні питання. Коректна стаття повідомляє, який процес починається обраною датою, і не видаляє попередні ланки.',
            'Наявність збройної загрози давала державі обов’язок захищати населення й територіальний порядок, але не звільняла її сили від правових обмежень і перевірки конкретної шкоди. Зовнішня участь також не знімає відповідальності з місцевих командирів за їхні рішення. Головна межа загального пояснення проста: походження конфлікту не визначає наперед кожний обстріл, затримання чи цивільну жертву; такі випадки потребують окремих доказів.',
          ],
        ),
      },
    ],
  },

  minsk: {
    lead: L(
      '12 февраля 2015 года участники Трёхсторонней контактной группы подписали Комплекс мер по выполнению Минских соглашений. Документ связал прекращение огня и отвод тяжёлых вооружений с политическими шагами, местными выборами, особым порядком самоуправления, амнистией, конституционной реформой, восстановлением контроля над границей и выводом иностранных вооружённых формирований. 17 февраля Совет Безопасности ООН поддержал его резолюцией 2202. Главный спор возник не из отсутствия текста, а из взаимозависимости обязательств: стороны по-разному отвечали, что должно произойти первым, кто обязан действовать и каким фактом подтверждается исполнение.',
      'On 12 February 2015, participants in the Trilateral Contact Group signed the Package of Measures for the Implementation of the Minsk Agreements. It linked a ceasefire and withdrawal of heavy weapons with political steps, local elections, special local-government arrangements, amnesty, constitutional reform, restoration of border control, and withdrawal of foreign armed formations. On 17 February the UN Security Council endorsed it in Resolution 2202. The central dispute arose not from the absence of a text but from interdependent obligations: the parties disagreed over what came first, who had to act, and what fact counted as performance.',
      '12 лютого 2015 року учасники Тристоронньої контактної групи підписали Комплекс заходів щодо виконання Мінських угод. Документ пов’язав припинення вогню й відведення важких озброєнь із політичними кроками, місцевими виборами, особливим порядком самоврядування, амністією, конституційною реформою, відновленням контролю над кордоном і виведенням іноземних збройних формувань. 17 лютого Рада Безпеки ООН підтримала його резолюцією 2202. Головна суперечка виникла не через відсутність тексту, а через взаємозалежність зобов’язань: сторони по-різному відповідали, що має відбутися першим, хто повинен діяти і який факт підтверджує виконання.',
    ),
    sections: [
      {
        title: L('Архитектура тринадцати мер', 'The architecture of thirteen measures', 'Архітектура тринадцяти заходів'),
        paragraphs: P(
          [
            'Комплекс мер не был одним обещанием прекратить стрельбу. Он объединял немедленный безопасностный блок, наблюдение ОБСЕ, гуманитарные и социально-экономические вопросы, политическое представительство и изменение режима границы применительно к отдельным районам Донецкой и Луганской областей. Крым, Херсонская и Запорожская области не были предметом его оперативных мер. Некоторые положения содержали даты или привязку к другим действиям, другие оставляли пространство для толкования. Поэтому общий вопрос «кто выполнил Минск» нужно заменять разбором каждого положения и его взаимосвязей.',
            'Для любого пункта необходима одна и та же карта: точная формулировка, адресат действия, срок, наблюдаемый результат и условие перехода дальше. Прекращение огня можно оценивать по зафиксированным нарушениям; принятие закона — по официальному акту; отвод вооружений — по наблюдению и доступу; восстановление границы — по фактической передаче контроля. Политическая декларация стороны не равна выполнению измеримого шага.',
          ],
          [
            'The Package was not one promise to stop shooting. It combined immediate security measures, OSCE monitoring, humanitarian and socioeconomic issues, political representation, and a change in the border regime for certain areas of the Donetsk and Luhansk regions. Crimea and the Kherson and Zaporizhzhia regions were not subjects of its operative measures. Some provisions contained dates or links to other actions; others left room for interpretation. The broad question “who implemented Minsk?” must therefore be replaced with examination of each provision and its dependencies.',
            'Every provision needs the same map: exact wording, actor responsible, deadline, observable outcome, and condition for moving onward. A ceasefire can be assessed through recorded violations; adoption of a law through the official act; weapons withdrawal through monitoring and access; restoration of the border through actual transfer of control. A party’s political declaration is not performance of a measurable step.',
          ],
          [
            'Комплекс заходів не був однією обіцянкою припинити стрілянину. Він поєднував негайний безпековий блок, спостереження ОБСЄ, гуманітарні й соціально-економічні питання, політичне представництво та зміну режиму кордону щодо окремих районів Донецької та Луганської областей. Крим, Херсонська й Запорізька області не були предметом його оперативних заходів. Деякі положення містили дати або прив’язку до інших дій, інші залишали простір для тлумачення. Тому загальне питання «хто виконав Мінськ» слід замінювати розбором кожного положення та його взаємозв’язків.',
            'Для кожного пункту потрібна однакова карта: точне формулювання, адресат дії, строк, спостережуваний результат і умова переходу далі. Припинення вогню можна оцінювати за зафіксованими порушеннями; ухвалення закону — за офіційним актом; відведення озброєнь — за спостереженням і доступом; відновлення кордону — за фактичною передачею контролю. Політична декларація сторони не дорівнює виконанню вимірюваного кроку.',
          ],
        ),
      },
      {
        title: L('Безопасность сначала или политика параллельно', 'Security first or politics in parallel', 'Спочатку безпека чи політика паралельно'),
        paragraphs: P(
          [
            'Украинское чтение подчёркивало устойчивое прекращение огня, доступ наблюдателей, вывод вооружённых формирований и безопасные условия до полноценной политической процедуры. Иное чтение делало акцент на быстром закреплении особого порядка, амнистии, конституционных изменениях и выборах, рассматривая политические шаги как средство создать безопасность. Текст содержал связи между этапами, но не устранил все разногласия об их практической очередности.',
            'У обеих логик есть риск. Выборы под вооружённым контролем и без равной кампании могут легализовать принуждение. Бесконечное ожидание идеальной безопасности может заблокировать политический выход даже при снижении насилия. Рабочая схема требовала бы согласованных порогов, параллельных обратимых шагов и органа, способного установить нарушение. Минский текст и практика не создали бесспорного ответа для каждого такого перехода.',
          ],
          [
            'The Ukrainian reading emphasised a durable ceasefire, monitoring access, withdrawal of armed formations, and safe conditions before a full political process. Another reading stressed rapid adoption of special arrangements, amnesty, constitutional change, and elections, treating political steps as a route to security. The text linked stages but did not eliminate every disagreement over their practical order.',
            'Each logic carries risk. Elections under armed control and without an equal campaign may legalise coercion. Waiting indefinitely for perfect security may block a political exit even after violence declines. A workable scheme would have required agreed thresholds, parallel reversible steps, and a body able to determine breaches. The Minsk text and practice produced no uncontested answer for every transition.',
          ],
          [
            'Українське прочитання наголошувало на сталому припиненні вогню, доступі спостерігачів, виведенні збройних формувань і безпечних умовах до повноцінної політичної процедури. Інше прочитання робило акцент на швидкому закріпленні особливого порядку, амністії, конституційних змінах і виборах, розглядаючи політичні кроки як шлях до безпеки. Текст пов’язував етапи, але не усунув усіх розбіжностей щодо їх практичної черговості.',
            'Обидві логіки мають ризик. Вибори під збройним контролем і без рівної кампанії можуть легалізувати примус. Нескінченне очікування ідеальної безпеки може заблокувати політичний вихід навіть після зниження насильства. Робоча схема потребувала б узгоджених порогів, паралельних оборотних кроків і органу, здатного встановити порушення. Мінський текст і практика не створили безспірної відповіді для кожного переходу.',
          ],
        ),
      },
      {
        title: L('Что означает поддержка Совета Безопасности', 'What Security Council endorsement means', 'Що означає підтримка Ради Безпеки'),
        paragraphs: P(
          [
            'Документ ОБСЕ позволяет проверить буквальное содержание согласованных мер, а резолюция Совета Безопасности № 2202 одобряет Комплекс и призывает стороны к полному исполнению. Резолюция придаёт договорённости международный политический и правовой вес, но не доказывает, что каждый пункт затем был выполнен. Принятие текста и изменение поведения — два самостоятельных факта, между которыми нужен мониторинг.',
            'Официальные документы также не назначают одного универсального виновника всех срывов. Для такого вывода нужны отчёты наблюдателей, решения органов, данные о доступе, перемещении вооружений и конкретных нарушениях прекращения огня. Даже если одна сторона нарушила важный пункт, это не устанавливает автоматически факты по всем остальным пунктам. Ответственность следует распределять по действиям и датам, а не по общей политической симпатии.',
          ],
          [
            'The OSCE document makes the agreed measures readable in their exact wording, while Security Council Resolution 2202 endorses the Package and calls for full implementation. The resolution gives the arrangement international political and legal weight but does not prove that every provision was later performed. Adoption of a text and a change in conduct are separate facts linked by monitoring.',
            'The official records also do not name one universal author of every failure. Such a conclusion needs monitoring reports, institutional acts, evidence of access and weapons movements, and specific ceasefire breaches. Even a serious violation of one provision does not automatically establish the facts for every other provision. Responsibility should follow actions and dates rather than broad political allegiance.',
          ],
          [
            'Документ ОБСЄ дає змогу перевірити буквальний зміст узгоджених заходів, а резолюція Ради Безпеки № 2202 схвалює Комплекс і закликає сторони до повного виконання. Резолюція надає домовленості міжнародної політичної та правової ваги, але не доводить, що кожний пункт потім виконали. Ухвалення тексту й зміна поведінки — два самостійні факти, між якими потрібне спостереження.',
            'Офіційні документи також не призначають одного універсального винуватця всіх зривів. Для такого висновку потрібні звіти спостерігачів, рішення органів, дані про доступ, переміщення озброєнь і конкретні порушення припинення вогню. Навіть якщо одна сторона порушила важливий пункт, це не встановлює автоматично факти щодо всіх інших. Відповідальність слід розподіляти за діями й датами, а не за загальною політичною симпатією.',
          ],
        ),
      },
      {
        title: L('Неудавшееся соглашение и предел контрфактов', 'A failed agreement and the limits of counterfactuals', 'Невдала угода та межі контрфактів'),
        paragraphs: P(
          [
            'Одна трактовка считает Минск реальным шансом, разрушенным нежеланием выполнять согласованное; другая видит в нём паузу, которой стороны пользовались для перегруппировки. Факты могут поддерживать элементы обеих оценок в разные периоды, но мотив нельзя выводить только из позднейшего результата. Для утверждения о первоначальном замысле нужны документы решения, последовательное поведение и сравнение с доступными альтернативами.',
            'Полномасштабное вторжение 2022 года доказало, что Минск не создал устойчивого порядка, но не превращает каждую меру 2015 года в бессмысленную. Временное снижение вреда, освобождение людей или канал переговоров имеют самостоятельную ценность. Одновременно такая ценность не равна прочному миру. Точный итог состоит в разрыве между согласованной архитектурой и исполнимым режимом, а не в мифе, что одного подписанного текста было достаточно.',
          ],
          [
            'One interpretation treats Minsk as a genuine opportunity destroyed by unwillingness to implement it; another sees a pause used by the parties to regroup. Facts may support elements of both assessments at different times, but motive cannot be inferred solely from the later outcome. A claim about original design needs decision records, consistent conduct, and comparison with available alternatives.',
            'The 2022 full-scale invasion proved that Minsk did not create a durable order, but it does not make every 2015 measure meaningless. Temporary harm reduction, release of people, or a negotiating channel has independent value. That value is not the same as lasting peace. The precise conclusion concerns the gap between an agreed architecture and an enforceable regime—not a myth that one signed text was sufficient.',
          ],
          [
            'Одне тлумачення вважає Мінськ реальною можливістю, зруйнованою небажанням виконувати узгоджене; інше бачить у ньому паузу, яку сторони використали для перегрупування. Факти можуть підтримувати елементи обох оцінок у різні періоди, але мотив не можна виводити лише з пізнішого результату. Для твердження про початковий задум потрібні документи рішення, послідовна поведінка й порівняння з доступними альтернативами.',
            'Повномасштабне вторгнення 2022 року довело, що Мінськ не створив сталого порядку, але не перетворює кожний захід 2015 року на беззмістовний. Тимчасове зниження шкоди, звільнення людей або канал переговорів мають самостійну цінність. Водночас така цінність не дорівнює тривалому миру. Точний підсумок полягає в розриві між узгодженою архітектурою та здійсненним режимом, а не в міфі, що одного підписаного тексту було достатньо.',
          ],
        ),
      },
    ],
  },

  'language-law': {
    lead: L(
      '25 апреля 2019 года Верховная Рада приняла закон об обеспечении функционирования украинского языка как государственного. Он расширил и систематизировал обязательное использование украинского в работе органов власти и ряде публичных сфер, одновременно оставив за пределами регулирования частное общение и религиозные обряды. Закон стал частью долгого государственного строительства после независимости и войны 2014 года. Его нельзя точно описать ни формулой о полном запрете русского языка, ни утверждением об отсутствии ограничений: правовой эффект зависит от сферы, адресата обязанности, редакции нормы и практики применения.',
      'On 25 April 2019, the Verkhovna Rada adopted the law on ensuring the functioning of Ukrainian as the state language. It expanded and systematised mandatory Ukrainian in public authorities and a range of public domains, while leaving private communication and religious rites outside its scope. The law became part of a long state-building process after independence and the war that began in 2014. It is accurately described neither as a total ban on Russian nor as an absence of restrictions: legal effect depends on the domain, duty-holder, applicable version, and enforcement practice.',
      '25 квітня 2019 року Верховна Рада ухвалила закон про забезпечення функціонування української мови як державної. Він розширив і систематизував обов’язкове використання української в роботі органів влади та низці публічних сфер, водночас залишивши поза регулюванням приватне спілкування й релігійні обряди. Закон став частиною тривалого державотворення після незалежності та війни 2014 року. Його не можна точно описати ані формулою про повну заборону російської мови, ані твердженням про відсутність обмежень: правовий ефект залежить від сфери, адресата обов’язку, редакції норми та практики застосування.',
    ),
    sections: [
      {
        title: L('Где действует обязанность, а где сохраняется выбор', 'Where a duty applies and where choice remains', 'Де діє обов’язок, а де зберігається вибір'),
        paragraphs: P(
          [
            'Главная единица анализа — конкретная сфера. Язык государственного органа, обслуживания потребителя, медиа, образования, культурного мероприятия и частного разговора регулируется не одинаково. Для каждой ситуации необходимо найти, кто обязан использовать государственный язык, какое исключение предусмотрено, существует ли переходный период и какое последствие наступает при нарушении. Политический пересказ часто стирает эти различия и приписывает одной норме действие всего закона.',
            'Исключение частного общения означает, что закон не устанавливает общий запрет человеку говорить по-русски в быту. Это, однако, не отменяет требований в определённых публичных отношениях. Обратное тоже верно: наличие обязанности в учреждении не доказывает, что любое фактическое затруднение доступа законно и соразмерно. Для оценки прав граждан важны не только буква, но и возможность получить услугу, освоить требование и обжаловать решение.',
          ],
          [
            'The central unit of analysis is the specific domain. Language in a state body, consumer service, media, education, a cultural event, and private conversation is not regulated identically. Each situation requires identifying who must use the state language, what exception applies, whether a transition exists, and what follows from breach. Political paraphrase often erases these distinctions and attributes the whole law’s effect to one provision.',
            'The private-communication exception means the law does not generally prohibit a person from speaking Russian in daily life. It does not remove requirements in specified public relationships. The reverse is also true: a duty within an institution does not prove that every practical barrier to access is lawful and proportionate. Citizens’ rights depend not only on text but on receiving a service, reasonably learning a requirement, and challenging a decision.',
          ],
          [
            'Головна одиниця аналізу — конкретна сфера. Мова державного органу, обслуговування споживача, медіа, освіти, культурного заходу й приватної розмови регулюється не однаково. Для кожної ситуації треба знайти, хто зобов’язаний використовувати державну мову, який виняток передбачено, чи існує перехідний період і який наслідок настає за порушення. Політичний переказ часто стирає ці відмінності й приписує одній нормі дію всього закону.',
            'Виняток для приватного спілкування означає, що закон не встановлює загальної заборони людині говорити російською в побуті. Однак це не скасовує вимог у визначених публічних відносинах. Справедливе й зворотне: наявність обов’язку в установі не доводить, що кожне фактичне ускладнення доступу законне й пропорційне. Для оцінки прав громадян важливі не лише текст, а й можливість отримати послугу, опанувати вимогу та оскаржити рішення.',
          ],
        ),
      },
      {
        title: L('Почему закон появился именно в 2019 году', 'Why the law emerged in 2019', 'Чому закон з’явився саме 2019 року'),
        paragraphs: P(
          [
            'Украинская языковая политика развивалась с момента независимости, но после 2014 года получила дополнительное измерение безопасности и дистанцирования от российского политического и медийного пространства. Государство стремилось обеспечить украинскому не только символический статус, но и повседневную институциональную среду. Этот контекст объясняет политическую цель закона, однако не решает заранее, насколько каждая конкретная обязанность была необходимой и сбалансированной.',
            'Русский язык при этом оставался повседневным языком большого числа украинских граждан с различными политическими взглядами. Использование русского не показывает автоматически отношения к украинской государственности, а использование украинского не доказывает согласия со всеми решениями власти. Война усилила символическую нагрузку языка, но правовой анализ должен сопротивляться коллективной атрибуции лояльности и рассматривать фактическое поведение человека отдельно.',
          ],
          [
            'Ukrainian language policy developed from independence, but after 2014 it gained an additional security dimension and a drive to distance public institutions from Russia’s political and media space. The state sought to give Ukrainian not only symbolic status but an everyday institutional environment. This explains the law’s political purpose but does not determine in advance whether every particular duty was necessary and balanced.',
            'Russian nevertheless remained the everyday language of many Ukrainian citizens with varied political views. Speaking Russian does not automatically indicate a view of Ukrainian statehood, just as speaking Ukrainian does not prove agreement with every government decision. War increased language’s symbolic weight, but legal analysis must resist collective attribution of loyalty and examine individual conduct separately.',
          ],
          [
            'Українська мовна політика розвивалася від часу незалежності, але після 2014 року отримала додатковий вимір безпеки й дистанціювання від російського політичного та медійного простору. Держава прагнула забезпечити українській не лише символічний статус, а й повсякденне інституційне середовище. Цей контекст пояснює політичну мету закону, однак не вирішує наперед, наскільки кожний конкретний обов’язок був необхідним і збалансованим.',
            'Російська мова водночас лишалася повсякденною мовою великої кількості українських громадян із різними політичними поглядами. Використання російської не показує автоматично ставлення до української державності, а використання української не доводить згоди з усіма рішеннями влади. Війна посилила символічне навантаження мови, але правовий аналіз має протистояти колективному приписуванню лояльності й розглядати фактичну поведінку людини окремо.',
          ],
        ),
      },
      {
        title: L('Как читать закон и международную оценку', 'How to read the law and international assessment', 'Як читати закон і міжнародну оцінку'),
        paragraphs: P(
          [
            'Официальный текст закона устанавливает его предмет, адресатов, исключения, сроки введения положений и систему исполнения. Для спора на конкретную дату необходимо пользоваться редакцией, действовавшей тогда, потому что последующие изменения могут менять обязанность или процедуру. Сам текст подтверждает, что законодатель предписал, но не показывает автоматически, как правило применялось во всех регионах и учреждениях.',
            'Заключение Венецианской комиссии 2019 года рассматривает баланс между укреплением государственного языка и защитой языковых прав и формулирует рекомендации. Это институциональная правовая оценка, а не отмена закона и не решение по каждому гражданину. Чтобы определить практический результат, нужно сопоставить рекомендацию с последующими изменениями, административной практикой, судебными решениями и данными о реальном доступе к услугам.',
          ],
          [
            'The official statutory text establishes scope, duty-holders, exceptions, commencement periods, and enforcement arrangements. A dispute about a particular date must use the version then in force because later amendments may change a duty or process. The text proves what lawmakers prescribed but does not automatically show how the rule operated in every region and institution.',
            'The Venice Commission’s 2019 opinion examines the balance between strengthening the state language and protecting language rights and makes recommendations. It is an institutional legal assessment, not an annulment of the law or a decision about every citizen. Practical effect requires comparison with later amendments, administrative practice, court rulings, and evidence of actual access to services.',
          ],
          [
            'Офіційний текст закону встановлює його предмет, адресатів, винятки, строки введення положень і систему виконання. Для суперечки щодо конкретної дати треба користуватися редакцією, яка тоді діяла, бо подальші зміни можуть змінювати обов’язок або процедуру. Сам текст підтверджує, що приписав законодавець, але не показує автоматично, як правило застосовували в усіх регіонах та установах.',
            'Висновок Венеційської комісії 2019 року розглядає баланс між зміцненням державної мови та захистом мовних прав і формулює рекомендації. Це інституційна правова оцінка, а не скасування закону й не рішення щодо кожного громадянина. Щоб визначити практичний результат, треба зіставити рекомендацію з подальшими змінами, адміністративною практикою, судовими рішеннями та даними про реальний доступ до послуг.',
          ],
        ),
      },
      {
        title: L('Интеграция, дискриминация и предел военной рамки', 'Integration, discrimination, and the limit of a wartime frame', 'Інтеграція, дискримінація та межа воєнної рамки'),
        paragraphs: P(
          [
            'Сторонники закона видят в нём необходимую инфраструктуру политической нации и исправление исторического неравенства языковых возможностей. Критики указывают на риск вытеснения русского и других языков из публичной жизни, неравную исходную способность выполнить требования и отчуждение граждан. Эти позиции следует проверять по отдельным сферам: требование к должностному лицу, школьнику, медиа и частному клиенту имеет разную цель и нагрузку.',
            'Аргумент безопасности также имеет границу. Государство вправе противодействовать враждебной информационной операции по её организации, содержанию и поведению участников. Но язык как таковой не является доказательством такой операции. Временная военная необходимость не должна без отдельного обоснования становиться постоянным ограничением гражданской сферы. Справедливое применение сочетает работоспособный государственный язык, частную свободу, доступ к базовым услугам и отказ от презумпции нелояльности.',
          ],
          [
            'Supporters see the law as necessary infrastructure for a political nation and a correction of historic inequality in language opportunities. Critics point to possible displacement of Russian and other languages from public life, unequal starting capacity to meet requirements, and alienation of citizens. These positions should be tested domain by domain: a duty imposed on an official, pupil, media outlet, or private customer has a different purpose and burden.',
            'The security argument also has a boundary. A state may oppose a hostile information operation through its organisation, content, and participants’ conduct. Language itself is not proof of such an operation. A temporary wartime need should not become a permanent restriction of civic life without separate justification. Fair application combines a functioning state language, private freedom, access to basic services, and rejection of presumed disloyalty.',
          ],
          [
            'Прихильники закону бачать у ньому необхідну інфраструктуру політичної нації та виправлення історичної нерівності мовних можливостей. Критики вказують на ризик витіснення російської та інших мов із публічного життя, нерівну початкову здатність виконати вимоги й відчуження громадян. Ці позиції слід перевіряти за окремими сферами: вимога до посадовця, школяра, медіа та приватного клієнта має різну мету й навантаження.',
            'Аргумент безпеки також має межу. Держава може протидіяти ворожій інформаційній операції за її організацією, змістом і поведінкою учасників. Але мова сама по собі не є доказом такої операції. Тимчасова воєнна потреба не повинна без окремого обґрунтування ставати постійним обмеженням громадянської сфери. Справедливе застосування поєднує дієву державну мову, приватну свободу, доступ до базових послуг і відмову від презумпції нелояльності.',
          ],
        ),
      },
    ],
  },

  'munich-security-2022': {
    lead: L(
      '19 февраля 2022 года президент Украины на Мюнхенской конференции объявил о новой попытке провести консультации в рамках Будапештского меморандума. Он связал возможный провал консультаций или отсутствие действенного результата с правом Украины считать меморандум неработающим, а пакетные решения 1994 года — поставленными под сомнение. Речь прозвучала за пять дней до полномасштабного российского вторжения и выражала острую неудовлетворённость архитектурой безопасности. Однако её текст не содержит прямого решения начать создание ядерного оружия. Условный пересмотр политико-правового пакета и объявление ядерной программы — не одно утверждение.',
      'On 19 February 2022, Ukraine’s president told the Munich Security Conference that Ukraine would again seek consultations under the Budapest Memorandum. He linked another failed consultation, or the absence of an effective security result, to Ukraine’s right to regard the memorandum as non-operational and the package decisions of 1994 as being in doubt. Delivered five days before Russia’s full-scale invasion, the speech expressed acute dissatisfaction with the security architecture. Its text, however, contains no direct decision to begin building nuclear weapons. Conditional reconsideration of a political-legal package is not the same proposition as announcing a nuclear programme.',
      '19 лютого 2022 року президент України на Мюнхенській конференції оголосив про нову спробу провести консультації в межах Будапештського меморандуму. Він пов’язав можливий провал консультацій або відсутність дієвого результату з правом України вважати меморандум непрацюючим, а пакетні рішення 1994 року — поставленими під сумнів. Промова пролунала за п’ять днів до повномасштабного російського вторгнення й виражала гостре невдоволення архітектурою безпеки. Однак її текст не містить прямого рішення почати створення ядерної зброї. Умовний перегляд політико-правового пакета й оголошення ядерної програми — не одне твердження.',
    ),
    sections: [
      {
        title: L('Что именно было сказано 19 февраля', 'What was actually said on 19 February', 'Що саме було сказано 19 лютого'),
        paragraphs: P(
          [
            'Ключевая формула речи состояла из последовательных условий. Украина в четвёртый раз инициирует консультации; министр иностранных дел получает поручение их созвать; если консультации снова не состоятся или не дадут результата, гарантирующего безопасность, Украина будет считать, что меморандум не работает. Далее ставятся под сомнение пакетные решения 1994 года. Сохранение этой грамматики важно: будущий вывод был привязан к возможному провалу следующего шага.',
            'В тексте нет объявления о выходе из Договора о нераспространении ядерного оружия, решения разрабатывать боезаряд или описания соответствующей программы. Нет там и утверждения, что Украина уже вернула ядерный статус. Политическая резкость выражения «поставить под сомнение» допускает разные последствия и действительно создавала неопределённость, но документальный анализ не может заполнить эту неопределённость наиболее драматичной версией без дополнительных актов.',
          ],
          [
            'The central wording formed a sequence of conditions. Ukraine was initiating consultations for a fourth time; the foreign minister was instructed to convene them; if consultations again failed to occur or produced no result guaranteeing security, Ukraine would regard the memorandum as non-operational. The 1994 package decisions were then placed in doubt. Preserving that grammar matters: the future conclusion depended on possible failure of the next step.',
            'The text does not announce withdrawal from the Nuclear Non-Proliferation Treaty, a decision to develop a warhead, or any such programme. Nor does it state that Ukraine had already restored nuclear status. The politically forceful phrase “put in doubt” allowed several possible consequences and created real uncertainty, but documentary analysis cannot fill that uncertainty with the most dramatic version without additional acts.',
          ],
          [
            'Ключова формула промови складалася з послідовних умов. Україна вчетверте ініціює консультації; міністр закордонних справ отримує доручення їх скликати; якщо консультації знову не відбудуться або не дадуть результату, що гарантує безпеку, Україна вважатиме меморандум непрацюючим. Далі ставляться під сумнів пакетні рішення 1994 року. Збереження цієї граматики важливе: майбутній висновок залежав від можливого провалу наступного кроку.',
            'У тексті немає оголошення про вихід із Договору про нерозповсюдження ядерної зброї, рішення розробляти боєзаряд або опису такої програми. Немає й твердження, що Україна вже відновила ядерний статус. Політична різкість виразу «поставити під сумнів» допускала різні наслідки й справді створювала невизначеність, але документальний аналіз не може заповнювати її найдраматичнішою версією без додаткових актів.',
          ],
        ),
      },
      {
        title: L('Будапештский пакет и предел его механизма', 'The Budapest package and the limit of its mechanism', 'Будапештський пакет і межа його механізму'),
        paragraphs: P(
          [
            'Будапештский меморандум 1994 года был связан с присоединением Украины к режиму нераспространения и содержал заверения уважать независимость, суверенитет и существующие границы, воздерживаться от угрозы силой и проводить консультации. Он не создавал автоматический механизм ввода войск, сопоставимый с коллективной обороной военного союза. Отсутствие такого механизма не делает записанные заверения пустыми, но объясняет спор о практической защите.',
            'Мюнхенская речь обращалась именно к разрыву между существованием заверений и переживаемой угрозой. В феврале 2022 года российские силы были сосредоточены вокруг Украины, а дипломатические усилия не устранили риск нападения. Этот контекст делает требование консультаций понятным и срочным. Он, однако, не меняет буквального содержания произнесённой формулы и не позволяет приписать документу решение, для которого потребовались бы отдельные государственные действия.',
          ],
          [
            'The 1994 Budapest Memorandum was connected with Ukraine joining the non-proliferation regime and contained assurances to respect independence, sovereignty, and existing borders, refrain from threats or force, and consult. It created no automatic troop-deployment mechanism comparable to a military alliance’s collective defence. The absence of such a mechanism does not erase the assurances, but it explains the dispute over practical protection.',
            'The Munich speech addressed the gap between recorded assurances and an experienced threat. In February 2022 Russian forces were concentrated around Ukraine and diplomacy had not removed the danger of attack. That setting makes the demand for consultations intelligible and urgent. It does not alter the literal wording or attribute a decision that would have required separate acts of state.',
          ],
          [
            'Будапештський меморандум 1994 року був пов’язаний із приєднанням України до режиму нерозповсюдження й містив запевнення поважати незалежність, суверенітет і наявні кордони, утримуватися від погрози силою та проводити консультації. Він не створював автоматичного механізму введення військ, співмірного з колективною обороною військового союзу. Відсутність такого механізму не робить записані запевнення порожніми, але пояснює суперечку про практичний захист.',
            'Мюнхенська промова зверталася саме до розриву між існуванням запевнень і пережитою загрозою. У лютому 2022 року російські сили були зосереджені навколо України, а дипломатичні зусилля не усунули ризику нападу. Цей контекст робить вимогу консультацій зрозумілою й терміновою. Однак він не змінює буквального змісту формули й не дозволяє приписати документу рішення, для якого були б потрібні окремі державні дії.',
          ],
        ),
      },
      {
        title: L('Первичный документ и то, чего он не доказывает', 'A primary record and what it does not prove', 'Первинний документ і те, чого він не доводить'),
        paragraphs: P(
          [
            'Официально опубликованный текст выступления надёжно устанавливает слова, дату, площадку и политическую позицию украинского руководства. Он позволяет проверить цитату без пересказа и увидеть соседние фразы о консультациях, безопасности и решениях 1994 года. Для утверждения о содержании речи это главный документ. Его близость к событию не превращает политическую оценку эффективности меморандума в окончательное юридическое решение.',
            'Текст не раскрывает закрытые планы правительства, технические возможности ядерной программы или реакции каждого государства — участника меморандума. Из последующего вторжения нельзя задним числом выводить, что речь была либо заранее подготовленным ядерным ультиматумом, либо ничего не значившей риторикой. Позднейшее событие показывает серьёзность угрозы и провал безопасности, но мотив и намерение требуют собственных подтверждений.',
          ],
          [
            'The officially published text reliably establishes the words, date, forum, and political position of Ukraine’s leadership. It makes the quotation verifiable without paraphrase and restores neighbouring passages on consultations, security, and the 1994 decisions. It is the principal record for claims about the speech. Proximity to the event does not turn a political assessment of the memorandum’s effectiveness into a final legal determination.',
            'The text does not reveal classified government plans, technical capacity for a nuclear programme, or every Budapest state’s response. The later invasion cannot retroactively prove that the speech was either a prepared nuclear ultimatum or meaningless rhetoric. The later event demonstrates the gravity of the threat and failure of security, but motive and intent need their own evidence.',
          ],
          [
            'Офіційно опублікований текст виступу надійно встановлює слова, дату, майданчик і політичну позицію українського керівництва. Він дає змогу перевірити цитату без переказу й побачити сусідні фрази про консультації, безпеку та рішення 1994 року. Для твердження про зміст промови це головний документ. Його близькість до події не перетворює політичну оцінку дієвості меморандуму на остаточне юридичне рішення.',
            'Текст не розкриває закритих планів уряду, технічних можливостей ядерної програми або реакцій кожної держави — учасниці меморандуму. З подальшого вторгнення не можна заднім числом виводити, що промова була або заздалегідь підготовленим ядерним ультиматумом, або нічого не значущою риторикою. Пізніша подія показує серйозність загрози й провал безпеки, але мотив і намір потребують власних підтверджень.',
          ],
        ),
      },
      {
        title: L('Предупреждение, давление или объявление курса', 'Warning, pressure, or declaration of policy', 'Попередження, тиск чи оголошення курсу'),
        paragraphs: P(
          [
            'Одна трактовка читает речь как скрытую угрозу восстановить ядерное оружие и включает её в объяснение российского решения о вторжении. Другая видит только дипломатическое предупреждение партнёрам о неработающем механизме. Первая обязана показать переход от условного сомнения к конкретному плану и причинную роль этого плана. Вторая не должна сглаживать политическую силу слов о пересмотре всего пакета.',
            'Граница доказуемого проходит по тексту и последующим действиям. Можно утверждать, что украинское руководство публично потребовало консультаций, заявило о провале прежней защиты и допустило пересмотр решений. Нельзя без дополнительных документов утверждать, что 19 февраля было принято решение создать оружие. И тем более одна неоднозначная речь не заменяет отдельной оценки законности начатого через пять дней применения силы.',
          ],
          [
            'One interpretation reads the speech as a concealed threat to restore nuclear weapons and includes it in an explanation of Russia’s decision to invade. Another sees only diplomatic pressure on partners over a failed mechanism. The first must show the transition from conditional doubt to a concrete plan and that plan’s causal role. The second should not smooth away the political force of questioning the whole package.',
            'The boundary of what can be proved follows the text and later actions. It is supportable that Ukraine’s leadership publicly demanded consultations, described the previous protection as failing, and contemplated reconsidering the decisions. Without additional records, it is not supportable that a decision to build a weapon was taken on 19 February. Still less can one ambiguous speech replace a separate legal assessment of force launched five days later.',
          ],
          [
            'Одне тлумачення читає промову як приховану погрозу відновити ядерну зброю й включає її до пояснення російського рішення про вторгнення. Інше бачить лише дипломатичне попередження партнерам про недієвий механізм. Перше має показати перехід від умовного сумніву до конкретного плану та причинну роль цього плану. Друге не повинно згладжувати політичну силу слів про перегляд усього пакета.',
            'Межа доказового проходить за текстом і наступними діями. Можна стверджувати, що українське керівництво публічно вимагало консультацій, заявило про провал попереднього захисту й допустило перегляд рішень. Не можна без додаткових документів стверджувати, що 19 лютого було ухвалено рішення створити зброю. Тим більше одна неоднозначна промова не замінює окремої оцінки законності застосування сили, розпочатого через п’ять днів.',
          ],
        ),
      },
    ],
  },

  'full-invasion': {
    lead: L(
      '24 февраля 2022 года Россия начала полномасштабное вторжение в Украину по нескольким направлениям. Украина в тот же день ввела военное положение и объявила общую мобилизацию. Масштаб конфликта, начавшегося в 2014 году, радикально изменился: регулярные силы пересекли международно признанные границы, боевые действия охватили большую часть страны, а миллионы людей столкнулись с перемещением и разрушением привычной жизни. 2 марта Генеральная Ассамблея ООН приняла резолюцию ES-11/1 с требованием прекратить применение силы и вывести российские войска. Предыстория важна для объяснения, но не заменяет правовую оценку решения начать вторжение.',
      'On 24 February 2022, Russia launched a full-scale invasion of Ukraine along several axes. Ukraine imposed martial law and announced general mobilisation that day. The conflict that had begun in 2014 changed radically in scale: regular forces crossed internationally recognised borders, combat spread across much of the country, and millions faced displacement and destruction of ordinary life. On 2 March the UN General Assembly adopted Resolution ES-11/1 demanding an end to the use of force and withdrawal of Russian troops. The background matters for explanation, but it does not replace legal assessment of the decision to invade.',
      '24 лютого 2022 року Росія розпочала повномасштабне вторгнення в Україну за кількома напрямками. Україна того самого дня запровадила воєнний стан і оголосила загальну мобілізацію. Масштаб конфлікту, що розпочався 2014 року, радикально змінився: регулярні сили перетнули міжнародно визнані кордони, бойові дії охопили значну частину країни, а мільйони людей зіткнулися з переміщенням і руйнуванням звичного життя. 2 березня Генеральна Асамблея ООН ухвалила резолюцію ES-11/1 з вимогою припинити застосування сили та вивести російські війська. Передісторія важлива для пояснення, але не замінює правової оцінки рішення почати вторгнення.',
    ),
    sections: [
      {
        title: L('Перелом масштаба, а не начало всей истории', 'A change of scale, not the start of all history', 'Злам масштабу, а не початок усієї історії'),
        paragraphs: P(
          [
            'Хронология войны не начинается в вакууме 24 февраля. Ей предшествовали смена власти 2014 года, аннексия Крыма, вооружённый конфликт в Донбассе, попытки Минского урегулирования, изменение отношений России с Украиной и западными государствами, а также предвоенное сосредоточение сил. Эти звенья помогают анализировать мотивы, просчёты и упущенные дипломатические возможности. Они не делают полномасштабное нападение природным или неизбежным событием.',
            'Выбор даты зависит от поставленного вопроса. Для начала российского-украинского вооружённого конфликта важен 2014 год; для оформленной АТО — 14 апреля 2014 года; для вторжения регулярных сил в общенациональном масштабе — 24 февраля 2022 года. Точная формулировка предотвращает две ошибки: стирание предыдущих восьми лет и растворение нового решения в длинной предыстории так, будто отдельного перехода к большой войне не было.',
          ],
          [
            'The war’s chronology does not begin in a vacuum on 24 February. It includes the 2014 transfer of power, annexation of Crimea, armed conflict in Donbas, Minsk settlement efforts, changes in Russia’s relations with Ukraine and Western states, and the pre-war concentration of forces. Those links help analyse motives, miscalculations, and missed diplomatic opportunities. They do not make a full-scale attack natural or inevitable.',
            'The relevant date depends on the question. The Russia–Ukraine armed conflict begins in 2014; the formally constituted ATO on 14 April 2014; the nationwide invasion by regular forces on 24 February 2022. Precise wording prevents two errors: erasing the preceding eight years and dissolving the new decision in a long background as if no distinct transition to major war occurred.',
          ],
          [
            'Хронологія війни не починається у вакуумі 24 лютого. Їй передували зміна влади 2014 року, анексія Криму, збройний конфлікт на Донбасі, спроби Мінського врегулювання, зміна відносин Росії з Україною та західними державами, а також передвоєнне зосередження сил. Ці ланки допомагають аналізувати мотиви, прорахунки й утрачені дипломатичні можливості. Вони не роблять повномасштабний напад природною чи неминучою подією.',
            'Вибір дати залежить від поставленого питання. Для початку російсько-українського збройного конфлікту важливий 2014 рік; для оформленої АТО — 14 квітня 2014 року; для вторгнення регулярних сил у загальнонаціональному масштабі — 24 лютого 2022 року. Точне формулювання запобігає двом помилкам: стиранню попередніх восьми років і розчиненню нового рішення в довгій передісторії так, ніби окремого переходу до великої війни не було.',
          ],
        ),
      },
      {
        title: L('Устав ООН и международная реакция', 'The UN Charter and the international response', 'Статут ООН і міжнародна реакція'),
        paragraphs: P(
          [
            'Устав ООН закрепляет запрет угрозы силой и её применения против территориальной целостности и политической независимости государств и отдельно регулирует право самообороны при вооружённом нападении. Политическое недовольство устройством безопасности, спор о границах или провал соглашения сами по себе не образуют общего исключения. Любое заявленное правовое основание должно проверяться по фактам и условиям применимой нормы, а не по широте исторического рассказа.',
            'Резолюция ES-11/1 зафиксировала оценку Генеральной Ассамблеи, осудила агрессию и потребовала от России немедленно прекратить применение силы и вывести войска. Это важное официальное свидетельство позиции международного большинства. Резолюция не является подробным судебным решением по каждому эпизоду войны и не устанавливает индивидуальную уголовную ответственность. Она отвечает на вопрос о международной оценке самого начала полномасштабного применения силы.',
          ],
          [
            'The UN Charter prohibits the threat or use of force against states’ territorial integrity and political independence and separately regulates self-defence in the event of armed attack. Political dissatisfaction with the security order, a border dispute, or a failed agreement does not itself create a general exception. Any claimed legal basis must be tested against facts and the conditions of the applicable rule, not the breadth of a historical narrative.',
            'Resolution ES-11/1 recorded the General Assembly’s assessment, deplored the aggression, and demanded that Russia immediately end the use of force and withdraw its troops. It is important official evidence of the international majority’s position. It is not a detailed judicial ruling on every wartime incident and does not determine individual criminal responsibility. It addresses the international assessment of the full-scale use of force itself.',
          ],
          [
            'Статут ООН закріплює заборону погрози силою та її застосування проти територіальної цілісності й політичної незалежності держав і окремо регулює право самооборони в разі збройного нападу. Політичне невдоволення устроєм безпеки, спір про кордони або провал угоди самі по собі не створюють загального винятку. Кожну заявлену правову підставу треба перевіряти за фактами й умовами застосовної норми, а не за широтою історичної розповіді.',
            'Резолюція ES-11/1 зафіксувала оцінку Генеральної Асамблеї, засудила агресію та вимагала від Росії негайно припинити застосування сили й вивести війська. Це важливе офіційне свідчення позиції міжнародної більшості. Резолюція не є докладним судовим рішенням щодо кожного епізоду війни й не встановлює індивідуальної кримінальної відповідальності. Вона відповідає на питання про міжнародну оцінку самого початку повномасштабного застосування сили.',
          ],
        ),
      },
      {
        title: L('Причины, заявленные цели и предел оправдания', 'Causes, declared aims, and the limit of justification', 'Причини, заявлені цілі та межа виправдання'),
        paragraphs: P(
          [
            'В объяснения вторжения включают расширение НАТО, конфликт в Донбассе, невыполнение Минска, внутренние решения Украины, российскую политику идентичности и расчёт на быструю победу. Это разные гипотезы: одни описывают восприятие угрозы, другие — политические цели или ошибки прогноза. Их можно исследовать одновременно. Но причинный фактор не становится юридическим разрешением, а предсказуемая реакция не снимает выбора с того, кто её осуществил.',
            'Официально объявленные цели фиксируют публичную позицию на конкретную дату, но не обязательно раскрывают весь замысел и могут меняться вместе с военной ситуацией. Фактические цели проверяются по распределению сил, выбору объектов, допустимым издержкам, территориальным действиям и поведению на переговорах. Из результата нельзя автоматически восстановить первоначальное намерение: провал может скрыть цель, а непредвиденная возможность — изменить её после начала войны.',
          ],
          [
            'Explanations of the invasion invoke NATO enlargement, the Donbas conflict, Minsk non-implementation, Ukraine’s domestic decisions, Russian identity policy, and an expectation of rapid victory. These are distinct hypotheses: some concern threat perception, others political objectives or forecasting errors. They can be studied together. A causal factor does not become legal permission, and a foreseeable reaction does not remove choice from the actor carrying it out.',
            'Officially declared aims record a public position on a particular date but may not reveal the full design and may change with military conditions. Actual aims are tested through force allocation, target selection, accepted costs, territorial acts, and negotiating behaviour. Outcome alone cannot reconstruct original intent: failure may conceal an objective, while an unforeseen opportunity may change it after war begins.',
          ],
          [
            'До пояснень вторгнення включають розширення НАТО, конфлікт на Донбасі, невиконання Мінська, внутрішні рішення України, російську політику ідентичності та розрахунок на швидку перемогу. Це різні гіпотези: одні описують сприйняття загрози, інші — політичні цілі чи помилки прогнозу. Їх можна досліджувати одночасно. Але причинний чинник не стає юридичним дозволом, а передбачувана реакція не знімає вибору з того, хто її здійснив.',
            'Офіційно оголошені цілі фіксують публічну позицію на конкретну дату, але не обов’язково розкривають увесь задум і можуть змінюватися разом із воєнною ситуацією. Фактичні цілі перевіряють за розподілом сил, вибором об’єктів, допустимими витратами, територіальними діями й поведінкою на переговорах. Із результату не можна автоматично відновити початковий намір: невдача може приховати мету, а непередбачена можливість — змінити її після початку війни.',
          ],
        ),
      },
      {
        title: L('Масштаб последствий и точность отдельных выводов', 'The scale of consequences and precision of individual findings', 'Масштаб наслідків і точність окремих висновків'),
        paragraphs: P(
          [
            'Вторжение создало связанные, но самостоятельные последствия: массовое перемещение, мобилизацию, разрушение инфраструктуры, оккупацию территорий, перестройку экономики, внешнюю военную помощь и новый санкционный режим. Каждая тема требует собственного периода и источников. Общий факт большой войны не подтверждает автоматически конкретное число жертв, причину разрушения отдельного объекта или законность конкретной атаки; такие утверждения нуждаются в поэпизодной проверке.',
            'Конкурирующие трактовки расходятся и в прогнозе окончания. Одна считает военный результат главным условием справедливого мира, другая ставит немедленное сокращение потерь выше неопределённого будущего успеха. Документальная статья не решает этот нормативный выбор, но задаёт ограничения: не путать предложение с договором, контроль с признанием, тактический эпизод со стратегическим переломом и объяснение предыстории с оправданием решения о применении силы.',
          ],
          [
            'The invasion produced connected but distinct consequences: mass displacement, mobilisation, infrastructure destruction, territorial occupation, economic restructuring, outside military assistance, and a new sanctions regime. Each needs its own period and evidence. The general fact of major war does not automatically prove a particular casualty number, the cause of damage to one site, or the legality of a specific attack; such claims require incident-level verification.',
            'Competing interpretations also diverge over termination. One treats military outcome as the central condition of a just peace; another ranks immediate reduction of losses above an uncertain future success. A documentary article does not resolve that normative choice, but it imposes boundaries: do not confuse a proposal with a treaty, control with recognition, a tactical episode with strategic reversal, or explanation of background with justification for force.',
          ],
          [
            'Вторгнення створило пов’язані, але самостійні наслідки: масове переміщення, мобілізацію, руйнування інфраструктури, окупацію територій, перебудову економіки, зовнішню військову допомогу й новий санкційний режим. Кожна тема потребує власного періоду та джерел. Загальний факт великої війни не підтверджує автоматично конкретну кількість жертв, причину руйнування окремого об’єкта або законність конкретної атаки; такі твердження потребують перевірки кожного епізоду.',
            'Конкуруючі тлумачення розходяться й у прогнозі завершення. Одне вважає військовий результат головною умовою справедливого миру, інше ставить негайне скорочення втрат вище за невизначений майбутній успіх. Документальна стаття не розв’язує цей нормативний вибір, але задає межі: не плутати пропозицію з договором, контроль із визнанням, тактичний епізод зі стратегічним переломом і пояснення передісторії з виправданням рішення застосувати силу.',
          ],
        ),
      },
    ],
  },

  'martial-law': {
    lead: L(
      '24 февраля 2022 года в Украине было введено военное положение, а отдельным решением началась общая мобилизация. Особый правовой режим перераспределяет полномочия, допускает временные ограничения и меняет обычную работу органов власти, но не отменяет Конституцию и не создаёт неограниченную власть. Для оценки любой меры необходимо соединять конституционную норму, профильный закон, конкретный указ, период его действия и практику исполнения. Особенно острыми стали споры о выборах, продолжении полномочий, обязанностях граждан и выезде. Общая ссылка на войну не отвечает, какой орган принял меру, на каком основании и была ли она соразмерна задаче.',
      'On 24 February 2022, Ukraine introduced martial law and separately began general mobilisation. The special legal regime reallocates powers, permits temporary restrictions, and alters the ordinary operation of public institutions, but it neither suspends the Constitution nor creates unlimited authority. Any measure must be assessed by reading the constitutional provision, relevant statute, particular decree, period of operation, and enforcement practice together. Disputes over elections, continuity of office, civic duties, and departure became especially acute. A general appeal to war does not identify which body acted, on what basis, or whether the measure was proportionate to its purpose.',
      '24 лютого 2022 року в Україні було запроваджено воєнний стан, а окремим рішенням розпочалася загальна мобілізація. Особливий правовий режим перерозподіляє повноваження, допускає тимчасові обмеження та змінює звичайну роботу органів влади, але не скасовує Конституцію й не створює необмеженої влади. Для оцінки кожного заходу треба разом читати конституційну норму, профільний закон, конкретний указ, період його дії та практику виконання. Особливо гострими стали суперечки про вибори, продовження повноважень, обов’язки громадян і виїзд. Загальне посилання на війну не відповідає, який орган ухвалив захід, на якій підставі та чи був він пропорційним меті.',
    ),
    sections: [
      {
        title: L('Как устроен особый правовой режим', 'How the special legal regime works', 'Як улаштований особливий правовий режим'),
        paragraphs: P(
          [
            'Закон о правовом режиме военного положения определяет условия введения, роли президента и Верховной Рады, полномочия военного командования и особенности работы государственных и местных органов. Указ устанавливает начало и территорию действия режима, а последующие акты — его продление. Поэтому нельзя ссылаться на «военное положение вообще»: для конкретной даты нужно найти действующий указ и пределы полномочия, которым воспользовался орган.',
            'Режим создавался для отражения вооружённой агрессии и сохранения управляемости в чрезвычайных условиях. Его меры могут затрагивать передвижение, трудовые обязанности, использование имущества, информационную сферу и иные права в установленных законом пределах. Наличие законной цели — только начало проверки. Далее выясняются компетенция, необходимость, длительность, равное применение и возможность контроля за конкретным решением.',
          ],
          [
            'The statute on the legal regime of martial law defines conditions for introduction, the roles of the president and Verkhovna Rada, powers of military command, and special operation of national and local bodies. The decree establishes commencement and territorial scope, while later acts extend it. “Martial law in general” is therefore insufficient: the applicable decree and the limits of the power used must be identified for a particular date.',
            'The regime was created to resist armed aggression and preserve governability under emergency conditions. Its measures may affect movement, labour duties, use of property, information, and other rights within statutory limits. A lawful aim is only the beginning of review. Competence, necessity, duration, equal application, and oversight of the particular decision must then be examined.',
          ],
          [
            'Закон про правовий режим воєнного стану визначає умови запровадження, ролі президента й Верховної Ради, повноваження військового командування та особливості роботи державних і місцевих органів. Указ установлює початок і територію дії режиму, а наступні акти — його продовження. Тому не можна посилатися на «воєнний стан узагалі»: для конкретної дати треба знайти чинний указ і межі повноваження, яким скористався орган.',
            'Режим створювали для відсічі збройній агресії та збереження керованості в надзвичайних умовах. Його заходи можуть зачіпати пересування, трудові обов’язки, використання майна, інформаційну сферу та інші права в установлених законом межах. Наявність законної мети — лише початок перевірки. Далі з’ясовують компетенцію, необхідність, тривалість, рівне застосування й можливість контролю за конкретним рішенням.',
          ],
        ),
      },
      {
        title: L('Выборы и непрерывность государственных органов', 'Elections and continuity of public institutions', 'Вибори й безперервність державних органів'),
        paragraphs: P(
          [
            'Закон запрещает проведение выборов в период военного положения и регулирует продолжение работы органов, полномочия которых иначе могли бы завершиться. Конституционные положения об обычном сроке и исполнении обязанностей до вступления преемника отвечают на связанные, но не одинаковые вопросы. Календарное истечение срока не следует автоматически превращать в вакансию, как и правовую непрерывность нельзя описывать как новый бессрочный мандат.',
            'Практические препятствия дополняют юридический запрет: оккупация, обстрелы, массовое перемещение, участие военнослужащих и неравный доступ к кампании затрудняют всеобщее и свободное голосование. Это не устраняет потребность в выборах после снятия препятствий. Чем дольше исключительный период, тем важнее парламентский контроль, судебная защита, открытость решений и заранее обсуждённый путь к восстановлению обычного избирательного календаря.',
          ],
          [
            'The statute bars elections during martial law and regulates continued operation of institutions whose terms might otherwise end. Constitutional provisions on an ordinary term and performance until a successor takes office answer related but different questions. Calendar expiry should not automatically be converted into a vacancy, just as legal continuity should not be described as a new indefinite mandate.',
            'Practical obstacles accompany the legal bar: occupation, attacks, mass displacement, military service, and unequal campaign access hinder universal and free voting. That does not remove the need for elections after the obstacles end. The longer the exceptional period, the more important parliamentary oversight, judicial protection, transparency of decisions, and a pre-discussed route back to the ordinary electoral calendar become.',
          ],
          [
            'Закон забороняє проведення виборів під час воєнного стану й регулює продовження роботи органів, повноваження яких інакше могли б завершитися. Конституційні положення про звичайний строк і виконання обов’язків до вступу наступника відповідають на пов’язані, але не однакові питання. Календарний сплив строку не слід автоматично перетворювати на вакансію, як і правову безперервність не можна описувати як новий безстроковий мандат.',
            'Практичні перешкоди доповнюють юридичну заборону: окупація, обстріли, масове переміщення, участь військовослужбовців і нерівний доступ до кампанії ускладнюють загальне й вільне голосування. Це не усуває потреби у виборах після зникнення перешкод. Що довший винятковий період, то важливіші парламентський контроль, судовий захист, відкритість рішень і наперед обговорений шлях до відновлення звичайного виборчого календаря.',
          ],
        ),
      },
      {
        title: L('Мобилизация, обязанности и индивидуальная мера', 'Mobilisation, duties, and the individual measure', 'Мобілізація, обов’язки та індивідуальний захід'),
        paragraphs: P(
          [
            'Закон о мобилизационной подготовке и мобилизации устанавливает организационную рамку привлечения ресурсов и граждан к обороне. Он не описывает в одной норме каждую жизненную ситуацию. Возраст, состояние здоровья, семейные обстоятельства, бронирование, учёт и процедура вручения документов могут иметь самостоятельное значение. Поэтому критика конкретного случая должна указывать применённое положение и фактические обстоятельства, а не переносить один эпизод на весь режим.',
            'То же относится к выезду и иным ограничениям. Публичная формула часто объединяет закон, подзаконное правило, решение пограничного органа и неформальную практику. Для правовой оценки их необходимо разложить: кто установил требование, опубликовано ли оно, к кому относится, как долго действует и существует ли обжалование. Военная необходимость может оправдывать существенную нагрузку, но не устраняет обязанности действовать предсказуемо и без произвола.',
          ],
          [
            'The mobilisation statute establishes an organisational framework for drawing resources and citizens into defence. It does not resolve every life circumstance in one provision. Age, health, family situation, employment reservation, registration, and service of documents may each matter independently. Criticism of a particular case should therefore identify the provision applied and factual circumstances rather than project one incident onto the whole regime.',
            'The same applies to departure and other restrictions. Public debate often merges a statute, secondary rule, border-authority decision, and informal practice. Legal assessment must separate them: who imposed the requirement, whether it was published, whom it covers, how long it operates, and whether appeal exists. Military necessity may justify a substantial burden but does not remove the duty to act predictably and without arbitrariness.',
          ],
          [
            'Закон про мобілізаційну підготовку та мобілізацію встановлює організаційну рамку залучення ресурсів і громадян до оборони. Він не описує в одній нормі кожну життєву ситуацію. Вік, стан здоров’я, сімейні обставини, бронювання, облік і процедура вручення документів можуть мати самостійне значення. Тому критика конкретного випадку має вказувати застосоване положення й фактичні обставини, а не переносити один епізод на весь режим.',
            'Те саме стосується виїзду та інших обмежень. Публічна формула часто об’єднує закон, підзаконне правило, рішення прикордонного органу й неформальну практику. Для правової оцінки їх треба розкласти: хто встановив вимогу, чи оприлюднено її, до кого вона належить, як довго діє та чи існує оскарження. Воєнна необхідність може виправдовувати істотне навантаження, але не усуває обов’язку діяти передбачувано й без свавілля.',
          ],
        ),
      },
      {
        title: L('Легитимность чрезвычайного режима и его предел', 'Legitimacy of emergency rule and its boundary', 'Легітимність надзвичайного режиму та його межа'),
        paragraphs: P(
          [
            'Сторонники жёсткого режима подчёркивают скорость командования и необходимость концентрировать ресурсы для выживания государства. Критики опасаются, что длительная война нормализует ограничения, ослабляет конкуренцию и делает контроль формальным. Эти позиции не решаются одной ссылкой на фронт или на довоенную процедуру. Нужно проверять, сохраняется ли связь каждой меры с угрозой и работают ли институты, способные отменить ошибочное решение.',
            'Официальные акты подтверждают наличие режима, его правовую основу и заявленные полномочия. Они не доказывают качество каждого исполнения, отсутствие злоупотреблений или поддержку гражданами всех мер. Одновременно отдельное злоупотребление не аннулирует автоматически весь режим. Документальный предел проходит между конструкцией и практикой: закон читается вместе с конкретными решениями, контролем, судебными выводами и изменением фактической необходимости во времени.',
          ],
          [
            'Supporters of a strict regime emphasise speed of command and the need to concentrate resources for state survival. Critics fear that prolonged war normalises restrictions, weakens competition, and makes oversight formal. Neither position is resolved by one appeal to the front or to peacetime procedure. Each measure must remain connected to the threat, and institutions capable of reversing error must continue to function.',
            'Official acts establish the regime, its legal basis, and stated powers. They do not prove the quality of every implementation, the absence of abuse, or public support for all measures. A particular abuse likewise does not automatically annul the whole regime. The documentary boundary lies between design and practice: statutes must be read with individual decisions, oversight, judicial findings, and changing necessity over time.',
          ],
          [
            'Прихильники жорсткого режиму наголошують на швидкості командування й потребі концентрувати ресурси для виживання держави. Критики побоюються, що тривала війна нормалізує обмеження, послаблює конкуренцію й робить контроль формальним. Ці позиції не розв’язуються одним посиланням на фронт або довоєнну процедуру. Треба перевіряти, чи зберігається зв’язок кожного заходу із загрозою і чи працюють інституції, здатні скасувати помилкове рішення.',
            'Офіційні акти підтверджують наявність режиму, його правову основу та заявлені повноваження. Вони не доводять якість кожного виконання, відсутність зловживань або підтримку громадянами всіх заходів. Водночас окреме зловживання не скасовує автоматично весь режим. Документальна межа проходить між конструкцією та практикою: закон читають разом із конкретними рішеннями, контролем, судовими висновками й зміною фактичної необхідності в часі.',
          ],
        ),
      },
    ],
  },

  'istanbul-talks-2022': {
    lead: L(
      '29 марта 2022 года российская и украинская делегации провели очный раунд переговоров в Стамбуле. Украинская сторона представила предложения о нейтральном и неядерном статусе в обмен на многосторонние юридически обязательные гарантии безопасности. Официальное сообщение в тот же день подчёркивало, что документы не подписывались: предложения передавались для дальнейшей работы. Турецкое посредничество отмечало сближение по отдельным вопросам, но сохраняло принцип, что частичное согласие не означает согласия по всему пакету. Поэтому Стамбул был содержательным переговорным этапом и возможностью для продолжения дипломатии, а не уже заключённым мирным договором.',
      'On 29 March 2022, Russian and Ukrainian delegations held an in-person negotiating round in Istanbul. Ukraine presented proposals for neutral and non-nuclear status in exchange for multilateral, legally binding security guarantees. The official statement that day stressed that no documents were signed: proposals were transmitted for further work. Turkish mediation noted convergence on particular issues while preserving the principle that partial agreement did not mean agreement on the whole package. Istanbul was therefore a substantive stage and an opportunity for continued diplomacy, not a peace treaty already concluded.',
      '29 березня 2022 року російська й українська делегації провели очний раунд переговорів у Стамбулі. Українська сторона представила пропозиції про нейтральний і без’ядерний статус в обмін на багатосторонні юридично зобов’язальні гарантії безпеки. Офіційне повідомлення того самого дня наголошувало, що документи не підписували: пропозиції передавали для подальшої роботи. Турецьке посередництво відзначало зближення з окремих питань, але зберігало принцип, що часткова згода не означає згоди щодо всього пакета. Тому Стамбул був змістовним переговорним етапом і можливістю для продовження дипломатії, а не вже укладеним мирним договором.',
    ),
    sections: [
      {
        title: L('Содержание украинских предложений', 'The content of Ukraine’s proposals', 'Зміст українських пропозицій'),
        paragraphs: P(
          [
            'Представленная рамка связывала возможный нейтральный и неядерный статус Украины с системой гарантий безопасности со стороны нескольких государств. Политический смысл обмена состоял в том, что изменение внешнеполитического курса не предлагалось как односторонний отказ от защиты: оно должно было сопровождаться новым обязательным механизмом. Но перечень желаемых гарантов ещё не подтверждал, что каждый из них принял обязанности и согласовал процедуру ответа.',
            'Переговоры затрагивали и другие вопросы, часть которых оставалась открытой. Даже согласие по общему принципу не решает формулировки территории, допустимого военного устройства, порядка вступления гарантий в действие, внутреннего одобрения и последствий нарушения. Содержательность предложения измеряется не только числом обсуждённых положений, а тем, какие из них получили согласованный текст и чьи полномочия были достаточны для следующего шага.',
          ],
          [
            'The presented framework linked possible neutral and non-nuclear status for Ukraine with a security-guarantee system involving several states. The political logic was that a change in foreign-policy course was not offered as a unilateral surrender of protection; it required a new binding mechanism. A list of desired guarantors did not yet establish that each had accepted duties and agreed on a response process.',
            'The talks addressed other issues, some of which remained open. Agreement on a general principle does not resolve territorial wording, permitted defence arrangements, commencement of guarantees, domestic approval, or consequences of breach. A proposal’s substance is measured not only by how many provisions were discussed, but by which received agreed text and whose authority was sufficient for the next step.',
          ],
          [
            'Представлена рамка пов’язувала можливий нейтральний і без’ядерний статус України із системою гарантій безпеки з боку кількох держав. Політичний сенс обміну полягав у тому, що зміну зовнішньополітичного курсу не пропонували як односторонню відмову від захисту: її мав супроводжувати новий обов’язковий механізм. Але перелік бажаних гарантів ще не підтверджував, що кожний із них прийняв обов’язки й узгодив процедуру відповіді.',
            'Переговори стосувалися й інших питань, частина яких лишалася відкритою. Навіть згода щодо загального принципу не вирішує формулювання території, допустимого військового устрою, порядку набуття чинності гарантіями, внутрішнього схвалення та наслідків порушення. Змістовність пропозиції вимірюється не лише кількістю обговорених положень, а тим, які з них отримали узгоджений текст і чиї повноваження були достатніми для наступного кроку.',
          ],
        ),
      },
      {
        title: L('Предложение, проект и заключённая сделка', 'Proposal, draft, and concluded bargain', 'Пропозиція, проєкт і укладена угода'),
        paragraphs: P(
          [
            'Статус документа определяется действиями сторон, а не позднейшим названием. Устно изложенная позиция, переданный письменный проект, согласованная рамка, парафированный текст, подписанный договор и вступившее в силу обязательство создают разные последствия. 29 марта официально сообщалось о представлении предложений и отсутствии подписи. Это не делает работу незначительной, но устанавливает верхнюю границу вывода на эту дату.',
            'Даже близкий к завершению проект может содержать несогласованные формулировки, приложения и условия. Формула посредника «ничего не согласовано, пока не согласовано всё» защищает от сложения отдельных совпадений в готовый пакет. Чтобы утверждать существование заключённого мира, потребовались бы окончательный текст, подтверждённые полномочия, подписи и предусмотренное одобрение. Доступные официальные сообщения такого состояния 29 марта не фиксируют.',
          ],
          [
            'A document’s status follows the parties’ acts, not a later name. An oral position, transmitted written draft, agreed framework, initialled text, signed treaty, and obligation in force create different consequences. On 29 March the official account described proposals and the absence of signatures. That does not make the work insignificant, but it establishes the upper boundary of what can be concluded for that date.',
            'Even a nearly completed draft may contain unresolved wording, annexes, and conditions. The mediator’s principle that nothing is agreed until everything is agreed prevents separate points of convergence from being added into a complete package. A concluded peace would require final text, demonstrated authority, signatures, and any required approval. The available official statements do not record that condition on 29 March.',
          ],
          [
            'Статус документа визначається діями сторін, а не пізнішою назвою. Усно викладена позиція, переданий письмовий проєкт, узгоджена рамка, парафований текст, підписаний договір і чинне зобов’язання створюють різні наслідки. 29 березня офіційно повідомлялося про представлення пропозицій і відсутність підпису. Це не робить роботу незначущою, але встановлює верхню межу висновку на цю дату.',
            'Навіть близький до завершення проєкт може містити неузгоджені формулювання, додатки й умови. Формула посередника «нічого не узгоджено, доки не узгоджено все» захищає від складання окремих збігів у готовий пакет. Щоб стверджувати існування укладеного миру, були б потрібні остаточний текст, підтверджені повноваження, підписи й передбачене схвалення. Доступні офіційні повідомлення такого стану 29 березня не фіксують.',
          ],
        ),
      },
      {
        title: L('Что подтверждают три официальных сообщения', 'What the three official accounts establish', 'Що підтверджують три офіційні повідомлення'),
        paragraphs: P(
          [
            'Сообщение украинской делегации устанавливает представленные ею положения и прямо отмечает отсутствие подписания. Обращение украинского руководства после раунда признаёт положительные сигналы, одновременно предлагая судить о России по последующим действиям. Интервью турецкого министра иностранных дел передаёт оценку посредника: по отдельным вопросам произошло заметное сближение, но требовались дальнейшие переговоры на других уровнях.',
            'Вместе эти документы подтверждают реальный дипломатический процесс, но не полный текст всех обменённых версий, согласие потенциальных гарантов и окончательную территориальную формулу. Они также не устанавливают единственную причину последующего прекращения переговоров. Для причинного вывода нужны документы о состоянии проекта до предполагаемого поворотного события, нерешённых вопросах, изменении позиции сторон и связи именно с названным фактором.',
          ],
          [
            'The Ukrainian delegation’s statement establishes its presented provisions and expressly notes the absence of signing. The Ukrainian leadership’s address after the round acknowledges positive signals while proposing that Russia be judged by later actions. The Turkish foreign minister’s interview records the mediator’s assessment: meaningful convergence occurred on particular issues, but further negotiations at other levels remained necessary.',
            'Together, these records establish a real diplomatic process, but not every exchanged version’s complete text, prospective guarantors’ consent, or a final territorial formula. Nor do they establish one cause for the later end of talks. A causal conclusion requires records of the draft before the alleged turning point, unresolved issues, changed positions, and a link to the particular factor claimed.',
          ],
          [
            'Повідомлення української делегації встановлює представлені нею положення й прямо зазначає відсутність підписання. Звернення українського керівництва після раунду визнає позитивні сигнали, водночас пропонуючи судити про Росію за наступними діями. Інтерв’ю турецького міністра закордонних справ передає оцінку посередника: з окремих питань відбулося помітне зближення, але були потрібні подальші переговори на інших рівнях.',
            'Разом ці документи підтверджують реальний дипломатичний процес, але не повний текст усіх обміняних версій, згоду потенційних гарантів і остаточну територіальну формулу. Вони також не встановлюють єдину причину подальшого припинення переговорів. Для причинного висновку потрібні документи про стан проєкту до передбачуваної поворотної події, невирішені питання, зміну позицій сторін і зв’язок саме з названим чинником.',
          ],
        ),
      },
      {
        title: L('Между упущенным шансом и готовым миром', 'Between a missed chance and a completed peace', 'Між утраченою можливістю та готовим миром'),
        paragraphs: P(
          [
            'Одна трактовка считает Стамбул почти завершённым соглашением, сорванным после внешнего политического вмешательства. Другая обесценивает раунд, потому что подписи не было. Обе выходят за документы. Проект способен быть подлинным шансом: он выявляет приемлемые параметры и уменьшает разногласия. Но шанс не равен обязательству, а его осуществимость зависит от оставшихся условий и готовности участников принять издержки.',
            'Последующий визит британского премьер-министра может исследоваться как один из факторов, но для решающей причинной роли недостаточно временной последовательности или позднего пересказа. Военная обстановка, сведения о событиях на оккупированных территориях, требования гарантий, внутренние процедуры и оценка соблюдения Россией прежних обязательств могли действовать одновременно. Точный итог сохраняет двойную формулу: в марте существовала содержательная переговорная возможность, но заключённого мирного договора не существовало.',
          ],
          [
            'One interpretation treats Istanbul as an almost completed agreement derailed by outside political intervention. Another dismisses the round because no signature existed. Both go beyond the documents. A draft can be a genuine opportunity: it identifies acceptable parameters and narrows differences. An opportunity is not an obligation, and feasibility depends on remaining conditions and willingness to bear costs.',
            'A later visit by the British prime minister can be studied as one factor, but temporal sequence or a later retelling is insufficient to make it decisive. Battlefield conditions, information about events in occupied areas, guarantee requirements, domestic procedures, and assessments of Russia’s performance of earlier obligations may have operated together. The precise conclusion preserves both propositions: a substantive negotiating opportunity existed in March, and no concluded peace treaty existed.',
          ],
          [
            'Одне тлумачення вважає Стамбул майже завершеною угодою, зірваною після зовнішнього політичного втручання. Інше знецінює раунд, бо підпису не було. Обидва виходять за межі документів. Проєкт може бути справжньою можливістю: він виявляє прийнятні параметри й зменшує розбіжності. Але можливість не дорівнює зобов’язанню, а її здійсненність залежить від решти умов і готовності учасників прийняти витрати.',
            'Наступний візит британського прем’єр-міністра можна досліджувати як один із чинників, але для вирішальної причинної ролі недостатньо часової послідовності або пізнього переказу. Воєнна обстановка, відомості про події на окупованих територіях, вимоги гарантій, внутрішні процедури та оцінка виконання Росією попередніх зобов’язань могли діяти одночасно. Точний підсумок зберігає подвійну формулу: у березні існувала змістовна переговорна можливість, але укладеного мирного договору не було.',
          ],
        ),
      },
    ],
  },

  'annexation-2022': {
    lead: L(
      '30 сентября 2022 года Россия объявила о включении Донецкой, Луганской, Запорожской и Херсонской областей Украины в состав Российской Федерации после организованных на оккупированных территориях голосований. На дату объявления российские силы не контролировали полностью ни одну из четырёх областей. Внутренние договоры и законодательные акты оформили российскую претензию, но не изменили автоматически международно-правовой статус территорий. 12 октября Генеральная Ассамблея ООН приняла резолюцию ES-11/4, осудив попытку незаконной аннексии и призвав государства и международные организации не признавать заявленное изменение статуса.',
      'On 30 September 2022, Russia declared the incorporation of Ukraine’s Donetsk, Luhansk, Zaporizhzhia, and Kherson regions into the Russian Federation after votes organised in occupied territory. On the date of the claim, Russian forces did not fully control any of the four regions. Domestic treaties and legislation formalised Russia’s claim but did not automatically alter the territories’ international legal status. On 12 October the UN General Assembly adopted Resolution ES-11/4, condemning the attempted illegal annexation and calling on states and international organisations not to recognise the claimed status change.',
      '30 вересня 2022 року Росія оголосила про включення Донецької, Луганської, Запорізької та Херсонської областей України до складу Російської Федерації після організованих на окупованих територіях голосувань. На дату оголошення російські сили не контролювали повністю жодну з чотирьох областей. Внутрішні договори й законодавчі акти оформили російську претензію, але не змінили автоматично міжнародно-правовий статус територій. 12 жовтня Генеральна Асамблея ООН ухвалила резолюцію ES-11/4, засудивши спробу незаконної анексії та закликавши держави й міжнародні організації не визнавати заявлену зміну статусу.',
    ),
    sections: [
      {
        title: L('Голосование в условиях оккупации', 'Voting under occupation', 'Голосування в умовах окупації'),
        paragraphs: P(
          [
            'Оценка заявленного волеизъявления начинается не с опубликованного процента, а с условий формирования выбора. Кто создал избирательные органы, какие альтернативы были доступны, могли ли противники кампании свободно участвовать, кто имел доступ к спискам и наблюдению, как учитывалось массовое перемещение жителей — все эти вопросы влияют на доказательную ценность результата. Вооружённый контроль организующей стороны не является внешней деталью процедуры.',
            'Мнение жителей территории при этом не становится несущественным только из-за нарушения процедуры. Политические предпочтения можно исследовать через различные данные, не приписывая голосованию большей силы, чем оно имеет. Но даже достоверно измеренное большинство не отвечает автоматически, какой орган вправе менять государственную границу и может ли такое изменение оформляться во время иностранной оккупации. Социологическое предпочтение и юридический титул остаются разными вопросами.',
          ],
          [
            'Assessment of the claimed popular will starts not with a published percentage but with conditions of choice. Who created the electoral bodies, which alternatives were available, whether opponents could campaign freely, who had access to lists and observation, and how mass displacement was treated all affect the result’s evidentiary value. Armed control by the organising side is not an external detail of the process.',
            'Residents’ views do not become irrelevant merely because procedure was defective. Political preferences can be studied through various evidence without granting the vote more force than it has. Yet even a reliably measured majority would not automatically answer which body may alter a state boundary or whether that change can be formalised during foreign occupation. Sociological preference and legal title remain separate questions.',
          ],
          [
            'Оцінка заявленого волевиявлення починається не з оприлюдненого відсотка, а з умов формування вибору. Хто створив виборчі органи, які альтернативи були доступні, чи могли противники кампанії вільно брати участь, хто мав доступ до списків і спостереження, як враховували масове переміщення жителів — усі ці питання впливають на доказову цінність результату. Збройний контроль сторони-організатора не є зовнішньою деталлю процедури.',
            'Думка жителів території водночас не стає несуттєвою лише через порушення процедури. Політичні вподобання можна досліджувати за різними даними, не приписуючи голосуванню більшої сили, ніж воно має. Але навіть достовірно виміряна більшість не відповідає автоматично, який орган може змінювати державний кордон і чи можна оформлювати таку зміну під час іноземної окупації. Соціологічне вподобання й юридичний титул лишаються різними питаннями.',
          ],
        ),
      },
      {
        title: L('Заявленная территория и фактический контроль', 'Claimed territory and effective control', 'Заявлена територія та фактичний контроль'),
        paragraphs: P(
          [
            'Российские акты заявили включение областей в их административных границах, хотя военная линия не совпадала с этими границами. Это создаёт немедленный разрыв между внутренним описанием территории и способностью ею управлять. Для любой карты на конкретную дату нужно отдельно указывать контролируемую площадь, населённые пункты, присутствие органов и устойчивость управления, а не переносить юридическую претензию на фактическую ситуацию.',
            'Фактический контроль также не создаёт международное признание сам по себе. Администрация может применять правила, собирать данные и распоряжаться ресурсами на земле, но другие государства не обязаны считать это законным переходом суверенитета. Обратное тоже важно: международное непризнание не возвращает контроль физически и не устраняет обязанности защищать жителей оккупированной территории. Реальность управления и правовой статус следует описывать одновременно.',
          ],
          [
            'Russian acts claimed the regions within their administrative boundaries even though the military line did not match those boundaries. This creates an immediate gap between a domestic territorial description and capacity to govern. Any map for a particular date must separately state controlled area, settlements, institutional presence, and durability of administration rather than project a legal claim onto factual conditions.',
            'Effective control also does not create international recognition by itself. An administration may apply rules, collect information, and manage resources on the ground, but other states need not regard this as a lawful transfer of sovereignty. The reverse matters too: international non-recognition does not physically restore control or remove duties toward residents of occupied territory. Governing reality and legal status must be described together.',
          ],
          [
            'Російські акти заявили включення областей у їхніх адміністративних кордонах, хоча воєнна лінія не збігалася з цими кордонами. Це створює негайний розрив між внутрішнім описом території та здатністю нею управляти. Для кожної карти на конкретну дату треба окремо вказувати контрольовану площу, населені пункти, присутність органів і стійкість управління, а не переносити юридичну претензію на фактичну ситуацію.',
            'Фактичний контроль також не створює міжнародне визнання сам по собі. Адміністрація може застосовувати правила, збирати дані й розпоряджатися ресурсами на місці, але інші держави не зобов’язані вважати це законним переходом суверенітету. Важливе й зворотне: міжнародне невизнання не повертає контроль фізично й не усуває обов’язків захищати жителів окупованої території. Реальність управління та правовий статус слід описувати одночасно.',
          ],
        ),
      },
      {
        title: L('Что установила резолюция ES-11/4', 'What Resolution ES-11/4 established', 'Що встановила резолюція ES-11/4'),
        paragraphs: P(
          [
            'Резолюция Генеральной Ассамблеи характеризует организованные Россией голосования как незаконные и заявленную аннексию как попытку, не имеющую силы по международному праву. Она подтверждает суверенитет и территориальную целостность Украины в международно признанных границах, требует отменить решения об изменении статуса и призывает к непризнанию. Это прямой официальный ответ международного большинства на акты сентября 2022 года.',
            'Резолюция не является описанием политических взглядов каждого жителя, картой контроля на любой последующий день или механизмом физического вывода войск. Она не делает российские внутренние акты несуществующими в российской системе; она определяет, что эти акты не должны производить заявленный международный эффект. Поэтому точная формула различает наличие внутреннего оформления, фактическую оккупацию и отсутствие общего международного признания.',
          ],
          [
            'The General Assembly resolution characterises the Russia-organised votes as illegal and the claimed annexation as an attempted act without validity under international law. It reaffirms Ukraine’s sovereignty and territorial integrity within internationally recognised borders, demands reversal of status decisions, and calls for non-recognition. It is the international majority’s direct official response to the September 2022 acts.',
            'The resolution is not an account of every resident’s political views, a map of control on every later day, or a mechanism physically withdrawing troops. It does not make Russian domestic acts nonexistent within Russia’s system; it determines that those acts should not produce the claimed international effect. Precise wording distinguishes domestic formalisation, effective occupation, and absence of general international recognition.',
          ],
          [
            'Резолюція Генеральної Асамблеї характеризує організовані Росією голосування як незаконні, а заявлену анексію — як спробу, що не має сили за міжнародним правом. Вона підтверджує суверенітет і територіальну цілісність України в міжнародно визнаних кордонах, вимагає скасувати рішення про зміну статусу й закликає до невизнання. Це пряма офіційна відповідь міжнародної більшості на акти вересня 2022 року.',
            'Резолюція не є описом політичних поглядів кожного жителя, картою контролю на кожний наступний день або механізмом фізичного виведення військ. Вона не робить російські внутрішні акти неіснуючими в російській системі; вона визначає, що ці акти не повинні створювати заявлений міжнародний ефект. Тому точна формула розрізняє наявність внутрішнього оформлення, фактичну окупацію та відсутність загального міжнародного визнання.',
          ],
        ),
      },
      {
        title: L('Самоопределение, территориальная целостность и время', 'Self-determination, territorial integrity, and time', 'Самовизначення, територіальна цілісність і час'),
        paragraphs: P(
          [
            'Российская трактовка обращается к самоопределению и заявленным результатам голосований. Украинская и поддержавшая резолюцию международная трактовка подчёркивает оккупацию, неконституционную процедуру и запрет приобретать территорию силой. Для сопоставления недостаточно одного слова «референдум»: нужно сравнить компетенцию организатора, свободу выбора, масштаб представительства, роль иностранной силы и правовую процедуру изменения границ.',
            'Длительность контроля может увеличивать человеческую и политическую цену изменения положения, но течение времени само по себе не превращает непризнанную аннексию в признанный титул. Одновременно правовая позиция не должна стирать жизнь людей под фактическим управлением. Документальный предел требует сообщать обе координаты на конкретную дату: кто реально контролирует территорию и какой суверенитет признаёт названный международный институт. Прогноз будущей сделки остаётся прогнозом.',
          ],
          [
            'The Russian interpretation invokes self-determination and claimed vote results. The Ukrainian and international interpretation reflected in the resolution emphasises occupation, unconstitutional procedure, and the bar on acquiring territory by force. The word “referendum” is insufficient for comparison: the organiser’s authority, freedom of choice, scale of representation, role of foreign force, and legal border-change process must all be examined.',
            'Prolonged control may increase the human and political cost of changing the situation, but time alone does not turn an unrecognised annexation into recognised title. Legal position must also not erase life under effective administration. The documentary boundary requires both coordinates for a stated date: who actually controls the territory and which sovereignty the named international institution recognises. A forecast of a future bargain remains a forecast.',
          ],
          [
            'Російське тлумачення звертається до самовизначення й заявлених результатів голосувань. Українське та підтримане резолюцією міжнародне тлумачення наголошує на окупації, неконституційній процедурі й забороні набувати територію силою. Для зіставлення недостатньо одного слова «референдум»: треба порівняти компетенцію організатора, свободу вибору, масштаб представництва, роль іноземної сили та правову процедуру зміни кордонів.',
            'Тривалість контролю може збільшувати людську й політичну ціну зміни становища, але плин часу сам по собі не перетворює невизнану анексію на визнаний титул. Водночас правова позиція не повинна стирати життя людей під фактичним управлінням. Документальна межа вимагає повідомляти обидві координати на конкретну дату: хто реально контролює територію і який суверенітет визнає названа міжнародна інституція. Прогноз майбутньої угоди лишається прогнозом.',
          ],
        ),
      },
    ],
  },

  'spiderweb-2025': {
    lead: L(
      '1 июня 2025 года Служба безопасности Украины провела операцию с FPV-дронами против самолётов на российских военных аэродромах. Официальные украинские сообщения называли целью стратегические бомбардировщики, применявшиеся для ударов по Украине, и заявляли о повреждении 41 самолёта. Эти публикации надёжно фиксируют авторство, заявленный замысел и самооценку украинской стороны, но не являются независимой инвентаризацией ущерба. Даже после подтверждения поражённых объектов остаётся отдельный вопрос о стратегическом результате: насколько сократились доступные возможности, изменился темп операций, выросла стоимость защиты и возникло ли устойчивое влияние на ход войны или переговоры.',
      'On 1 June 2025, the Security Service of Ukraine conducted an FPV-drone operation against aircraft at Russian military airfields. Official Ukrainian statements identified strategic bombers used for attacks on Ukraine and claimed damage to 41 aircraft. Those publications reliably establish attribution, declared design, and the Ukrainian side’s own assessment, but they are not an independent damage inventory. Even after struck objects are confirmed, strategic effect remains a separate question: how far available capability declined, operational tempo changed, defensive costs rose, and any durable effect emerged on the war or negotiations.',
      '1 червня 2025 року Служба безпеки України провела операцію з FPV-дронами проти літаків на російських військових аеродромах. Офіційні українські повідомлення називали цілями стратегічні бомбардувальники, що застосовувалися для ударів по Україні, і заявляли про пошкодження 41 літака. Ці публікації надійно фіксують авторство, заявлений задум і самооцінку української сторони, але не є незалежною інвентаризацією шкоди. Навіть після підтвердження уражених об’єктів лишається окреме питання про стратегічний результат: наскільки скоротилися доступні можливості, змінився темп операцій, зросла вартість захисту й виник сталий вплив на перебіг війни або переговори.',
    ),
    sections: [
      {
        title: L('Замысел и непосредственный результат операции', 'Design and immediate operational result', 'Задум і безпосередній результат операції'),
        paragraphs: P(
          [
            'По официальной версии, небольшие беспилотники были использованы для поражения самолётов на нескольких аэродромах в глубине российской территории. Выбор стратегической авиации связывал операцию с возможностями, применяемыми в дальней ударной кампании против Украины. Сам факт достижения удалённых военных объектов имеет оперативное значение: он показывает уязвимость инфраструктуры и заставляет пересматривать защиту, размещение и процедуры безопасности.',
            'Однако непосредственный результат должен описываться по отдельным объектам. «Атакован», «зафиксировано попадание», «повреждён», «временно выведен из строя» и «уничтожен» означают разную остаточную способность и срок восстановления. Опубликованное общее число не раскрывает распределение по этим состояниям. Точная оценка требует исходного парка, идентификации бортов, визуальных данных после атаки и сведений о ремонте.',
          ],
          [
            'According to the official account, small drones were used against aircraft at several airfields deep inside Russian territory. Selection of strategic aviation linked the operation to capabilities employed in the long-range strike campaign against Ukraine. Reaching remote military objects has operational significance in itself: it reveals infrastructure vulnerability and forces changes in protection, dispersal, and security procedures.',
            'The immediate result must nevertheless be described object by object. “Attacked,” “a hit observed,” “damaged,” “temporarily disabled,” and “destroyed” imply different residual capability and recovery periods. The published total does not disclose distribution among those conditions. Precise assessment requires a baseline inventory, airframe identification, post-attack imagery, and repair evidence.',
          ],
          [
            'За офіційною версією, невеликі безпілотники використали для ураження літаків на кількох аеродромах у глибині російської території. Вибір стратегічної авіації пов’язував операцію з можливостями, що застосовуються в далекій ударній кампанії проти України. Сам факт досягнення віддалених військових об’єктів має оперативне значення: він показує вразливість інфраструктури й змушує переглядати захист, розміщення та процедури безпеки.',
            'Однак безпосередній результат треба описувати за окремими об’єктами. «Атакований», «зафіксовано влучання», «пошкоджений», «тимчасово виведений із ладу» і «знищений» означають різну залишкову здатність і строк відновлення. Оприлюднене загальне число не розкриває розподілу за цими станами. Точна оцінка потребує початкового парку, ідентифікації бортів, візуальних даних після атаки й відомостей про ремонт.',
          ],
        ),
      },
      {
        title: L('Что подтверждает официальный отчёт стороны', 'What a party’s official account establishes', 'Що підтверджує офіційний звіт сторони'),
        paragraphs: P(
          [
            'Публикации президента Украины подтверждают, что украинское руководство приписывает операцию СБУ, считает целью российскую стратегическую авиацию и заявляет определённый масштаб поражения. Это первичные документы для политического представления операции и понимания заявленного замысла. Они также показывают, как результат связывался с необходимостью ограничить удары по Украине и продолжать оборонную поддержку.',
            'Та же близость к исполнителю ограничивает независимость оценки ущерба. Официальный отчёт заинтересованной стороны может быть точным, но его цифры требуют сопоставления с изображениями, данными нескольких независимых наблюдателей и последующим поведением авиации. Повторение одной исходной цифры многими публикациями не создаёт нескольких подтверждений. Пока категории поражения не раскрыты, корректно сохранять авторство заявления в самой формулировке.',
          ],
          [
            'Publications by Ukraine’s president establish that the Ukrainian leadership attributes the operation to the Security Service, identifies Russian strategic aviation as the target, and claims a particular scale of damage. They are primary documents for the operation’s political presentation and declared design. They also show how the result was connected to restricting attacks on Ukraine and sustaining defensive support.',
            'The same proximity to the implementer limits independence of the damage assessment. An interested party’s official account may be accurate, but its figures require comparison with imagery, several independent observations, and later aviation behaviour. Repetition of one originating figure across many publications does not create multiple confirmations. Until the distribution of damage is disclosed, accurate wording should preserve attribution of the claim.',
          ],
          [
            'Публікації президента України підтверджують, що українське керівництво приписує операцію СБУ, вважає цілями російську стратегічну авіацію й заявляє певний масштаб ураження. Це первинні документи для політичного представлення операції та розуміння заявленого задуму. Вони також показують, як результат пов’язували з необхідністю обмежити удари по Україні й продовжувати оборонну підтримку.',
            'Та сама близькість до виконавця обмежує незалежність оцінки шкоди. Офіційний звіт зацікавленої сторони може бути точним, але його цифри потребують зіставлення із зображеннями, даними кількох незалежних спостерігачів і подальшою поведінкою авіації. Повторення однієї початкової цифри багатьма публікаціями не створює кількох підтверджень. Поки категорії ураження не розкрито, коректно зберігати авторство заяви в самому формулюванні.',
          ],
        ),
      },
      {
        title: L('От тактического успеха к стратегическому эффекту', 'From tactical success to strategic effect', 'Від тактичного успіху до стратегічного ефекту'),
        paragraphs: P(
          [
            'Тактический вывод отвечает, были ли поражены намеченные военные объекты. Оперативный — насколько изменилась способность проводить конкретную кампанию в ближайший период. Стратегический — вынудил ли ущерб устойчиво перераспределить редкие ресурсы, снизить интенсивность ударов, изменить военные цели или переговорную позицию. Переход между уровнями не происходит автоматически: для него нужна наблюдаемая причинная цепочка.',
            'Показатели включают доступный парк, частоту и состав последующих вылетов, время восстановления, стоимость замещения, перенос базирования и дополнительные расходы на охрану. Информационный эффект также может иметь стратегическое значение через мораль, внешнюю помощь и отвлечение ресурсов противника, но это влияние нужно доказать. Сильный общественный резонанс измеряет внимание, а не сам по себе перелом общего хода войны.',
          ],
          [
            'A tactical conclusion asks whether intended military objects were struck. An operational conclusion asks how capability for a particular campaign changed in the near term. A strategic conclusion asks whether damage durably forced reallocation of scarce resources, reduced strike intensity, changed military objectives, or altered bargaining position. Movement among levels is not automatic; it requires an observable causal chain.',
            'Indicators include available aircraft, frequency and composition of later sorties, recovery time, replacement cost, relocation of basing, and added protection expenses. Information effect may also become strategic through morale, outside assistance, and diversion of adversary resources, but that influence must be demonstrated. Strong public resonance measures attention, not by itself a reversal of the war’s overall course.',
          ],
          [
            'Тактичний висновок відповідає, чи були уражені намічені військові об’єкти. Оперативний — наскільки змінилася здатність проводити конкретну кампанію найближчим часом. Стратегічний — чи змусила шкода стійко перерозподілити рідкісні ресурси, знизити інтенсивність ударів, змінити військові цілі або переговорну позицію. Перехід між рівнями не відбувається автоматично: для нього потрібен спостережуваний причинний ланцюг.',
            'Показники охоплюють доступний парк, частоту й склад наступних вильотів, час відновлення, вартість заміщення, перенесення базування та додаткові витрати на охорону. Інформаційний ефект також може мати стратегічне значення через мораль, зовнішню допомогу й відволікання ресурсів противника, але цей вплив треба довести. Сильний суспільний резонанс вимірює увагу, а не сам по собі перелом загального перебігу війни.',
          ],
        ),
      },
      {
        title: L('Военная цель, правовая оценка и неподтверждённые версии', 'Military target, legal assessment, and unverified accounts', 'Військова ціль, правова оцінка та непідтверджені версії'),
        paragraphs: P(
          [
            'Официальное описание связывает атакованные самолёты с военными ударами по Украине, что указывает на заявленную военную цель. Полная правовая оценка конкретной атаки всё равно требует фактов о каждом объекте, способе операции, ожидаемом военном преимуществе и риске для гражданских. Удалённость аэродрома от линии фронта сама по себе не превращает военный объект в гражданский и не решает все остальные вопросы права.',
            'Конкурирующие политические трактовки называют операцию либо стратегическим переломом, либо преимущественно медийным жестом. Обе должны пройти проверку временем и показателями. Версии о прямом иностранном управлении, основанные на предполагаемом «почерке», не являются установленным фактом без документов о планировании и командовании. Точный итог на раннем этапе допускает одновременно признание сложной и значимой операции, предварительность точного ущерба и открытость вопроса о долгосрочном результате.',
          ],
          [
            'The official account links the attacked aircraft to military strikes on Ukraine, indicating a declared military objective. A full legal assessment of a particular attack still requires facts about each object, the method used, expected military advantage, and civilian risk. Distance from the front does not by itself turn a military object into a civilian one or resolve every other legal question.',
            'Competing political interpretations call the operation either a strategic reversal or mainly a media gesture. Both must be tested over time and against indicators. Claims of direct foreign control based on perceived “signature” are not established facts without planning and command records. An accurate early conclusion can recognise a complex and significant operation while treating exact damage as preliminary and long-term effect as open.',
          ],
          [
            'Офіційний опис пов’язує атаковані літаки з військовими ударами по Україні, що вказує на заявлену військову ціль. Повна правова оцінка конкретної атаки все одно потребує фактів про кожний об’єкт, спосіб операції, очікувану військову перевагу й ризик для цивільних. Віддаленість аеродрому від лінії фронту сама по собі не перетворює військовий об’єкт на цивільний і не розв’язує всіх інших питань права.',
            'Конкуруючі політичні тлумачення називають операцію або стратегічним переломом, або переважно медійним жестом. Обидва мають пройти перевірку часом і показниками. Версії про пряме іноземне управління, засновані на передбачуваному «почерку», не є встановленим фактом без документів про планування й командування. Точний підсумок на ранньому етапі допускає водночас визнання складної та значущої операції, попередність точної шкоди й відкритість питання про довгостроковий результат.',
          ],
        ),
      },
    ],
  },
}
