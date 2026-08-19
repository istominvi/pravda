import type { Localized } from '../domain/types'

const L = (ru: string, en: string, uk: string): Localized => ({ ru, en, uk })

const P = (ru: string[], en: string[], uk: string[]): Localized<string[]> => ({ ru, en, uk })

export const editorialArticlesB: Record<string, {
  lead: Localized
  sections: Array<{
    title: Localized
    paragraphs: Localized<string[]>
  }>
}> = {
  'concept-right-to-protest': {
    lead: L(
      `Право на протест защищает возможность граждан мирно собираться, выражать несогласие и добиваться политического ответа. Оно важно именно как способ участия, а не как автоматическое подтверждение правоты любой программы или законности любого последующего решения. В украинской истории 2014 года это различие позволяет одновременно признать самостоятельное значение массовой мобилизации и отдельно проверить, по какой процедуре прекращались президентские полномочия, сохранялась работа государственных органов и формировалась новая электоральная легитимность.`,
      `The right to protest protects the ability of citizens to assemble peacefully, express dissent, and demand a political response. Its importance lies in participation, not in automatically proving every programme correct or every subsequent decision lawful. In Ukraine's 2014 history, this distinction makes it possible to recognise mass mobilisation as an independent political fact while separately examining how presidential authority ended, whether state institutions continued to function, and how a new electoral mandate was formed.`,
      `Право на протест захищає можливість громадян мирно збиратися, висловлювати незгоду й вимагати політичної відповіді. Його значення полягає в участі, а не в автоматичному доведенні правильності кожної програми чи законності кожного наступного рішення. В українській історії 2014 року це розрізнення дає змогу визнати масову мобілізацію самостійним політичним фактом і водночас окремо перевірити, як припинилися президентські повноваження, чи продовжували діяти державні інституції та як сформувався новий виборчий мандат.`
    ),
    sections: [
      {
        title: L(`Защищённое действие и предел требования`, `Protected action and the limits of a claim`, `Захищена дія та межі вимоги`),
        paragraphs: P(
          [
            `Порог защиты начинается с мирного характера собрания и реальной возможности донести позицию до власти и общества. Численность, популярность лозунга или нравственная убедительность требования сами по себе не превращают уличное действие в источник государственных полномочий. Протест влияет на политический процесс, но полномочия органов по-прежнему определяются конституционным устройством.`,
            `Поэтому нужно разделять четыре вопроса: могли ли люди собраться; были ли ограничения законными и соразмерными; выражало ли движение значимую общественную позицию; и каким правовым способом эта позиция была преобразована в решение. Смешение этих вопросов порождает две зеркальные ошибки — отрицание права на собрание из-за спорной политики и оправдание любой процедуры масштабом улицы.`,
          ],
          [
            `Protection begins with the peaceful character of an assembly and a genuine opportunity to convey a position to government and society. Numbers, the popularity of a slogan, or the moral force of a demand do not by themselves turn street action into a source of public authority. Protest influences politics, but the powers of state bodies remain defined by the constitutional order.`,
            `Four questions must therefore be kept apart: whether people could assemble; whether restrictions were lawful and proportionate; whether the movement expressed a significant social position; and by what legal route that position became a decision. Collapsing them creates two mirror-image errors—denying assembly rights because the politics are disputed, or excusing any procedure because the crowd was large.`,
          ],
          [
            `Захист починається з мирного характеру зібрання та реальної можливості донести позицію до влади й суспільства. Чисельність, популярність гасла чи моральна переконливість вимоги самі по собі не перетворюють вуличну дію на джерело державних повноважень. Протест впливає на політичний процес, але повноваження органів і далі визначає конституційний лад.`,
            `Тому слід розділяти чотири питання: чи могли люди зібратися; чи були обмеження законними й пропорційними; чи виражав рух значущу суспільну позицію; і яким правовим шляхом цю позицію перетворили на рішення. Змішування створює дві дзеркальні помилки — заперечення права на зібрання через спірну політику та виправдання будь-якої процедури масштабом вулиці.`,
          ]
        ),
      },
      {
        title: L(`Три узла украинской весны 2014 года`, `Three nodes of Ukraine's spring of 2014`, `Три вузли української весни 2014 року`),
        paragraphs: P(
          [
            `Статья о смене власти 22 февраля 2014 года фиксирует постановление Верховной Рады о прекращении исполнения Виктором Януковичем полномочий и назначении досрочных выборов. Предшествующие протесты объясняют политическое давление и кризис представительства, но юридический спор касается текста постановления, конституционных способов досрочного прекращения мандата и последующей работы институтов.`,
            `Крымское голосование 16 марта и начало АТО 14 апреля показывают, почему исходный спор быстро вышел за пределы площади. В первом случае общественное волеизъявление обсуждается вместе с полномочиями, условиями военного контроля и территориальной целостностью; во втором — государственное решение отвечало на захваты зданий и вооружённую эскалацию. Ни один эпизод нельзя объяснить одной формулой о протесте.`,
          ],
          [
            `The article on the transfer of power on 22 February 2014 records the Verkhovna Rada resolution stating that Viktor Yanukovych had ceased to perform his duties and scheduling an early election. The preceding protests explain political pressure and a crisis of representation, but the legal dispute concerns the resolution's text, constitutional routes for ending a mandate early, and the subsequent operation of institutions.`,
            `The Crimean vote of 16 March and the start of the ATO on 14 April show why the initial dispute quickly moved beyond the square. In the first case, public choice must be assessed alongside legal authority, conditions of military control, and territorial integrity; in the second, a state decision responded to building seizures and armed escalation. No single formula about protest explains either episode.`,
          ],
          [
            `Стаття про зміну влади 22 лютого 2014 року фіксує постанову Верховної Ради про припинення виконання Віктором Януковичем повноважень і призначення дострокових виборів. Попередні протести пояснюють політичний тиск і кризу представництва, але правова суперечка стосується тексту постанови, конституційних способів дострокового припинення мандата та подальшої роботи інституцій.`,
            `Кримське голосування 16 березня та початок АТО 14 квітня показують, чому початкова суперечка швидко вийшла за межі площі. У першому випадку суспільне волевиявлення оцінюють разом із повноваженнями, умовами військового контролю й територіальною цілісністю; у другому державне рішення відповідало на захоплення будівель і збройну ескалацію. Жоден епізод не пояснює одна формула про протест.`,
          ]
        ),
      },
      {
        title: L(`Что устанавливают правовые акты`, `What the legal records establish`, `Що встановлюють правові акти`),
        paragraphs: P(
          [
            `Конституция Украины задаёт общую защиту мирных собраний и одновременно распределяет полномочия между государственными органами. Постановление № 757-VII показывает, какое основание Верховная Рада сформулировала 22 февраля. Итоговый доклад БДИПЧ ОБСЕ о выборах 2010 года подтверждает происхождение прежнего мандата и тем самым помогает точно поставить вопрос о способе его досрочного завершения.`,
            `Эти документы не измеряют поддержку каждой группы на площади, не выносят нравственный вердикт протестующим и не превращают политическую оценку в судебное решение. Они дают проверяемые опорные точки: содержание права, компетенцию органа, формулу принятого акта и исходную электоральную ситуацию. Для оценки насилия, ограничений и поведения участников нужны отдельные фактические данные.`,
          ],
          [
            `Ukraine's Constitution provides the general protection of peaceful assembly while allocating powers among state institutions. Resolution No. 757-VII shows the basis formulated by the Verkhovna Rada on 22 February. The OSCE/ODIHR final report on the 2010 election confirms the origin of the previous mandate and thus helps frame the precise question of how it ended early.`,
            `These records do not measure support for every group in the square, deliver a moral verdict on protesters, or turn a political assessment into a judicial ruling. They provide verifiable anchors: the content of the right, the authority of the body, the wording of the adopted act, and the initial electoral setting. Violence, restrictions, and participant conduct require separate factual evidence.`,
          ],
          [
            `Конституція України надає загальний захист мирним зібранням і водночас розподіляє повноваження між державними органами. Постанова № 757-VII показує, яку підставу Верховна Рада сформулювала 22 лютого. Підсумковий звіт БДІПЛ ОБСЄ про вибори 2010 року підтверджує походження попереднього мандата й допомагає точно поставити питання про спосіб його дострокового завершення.`,
            `Ці документи не вимірюють підтримку кожної групи на площі, не виносять морального вироку протестувальникам і не перетворюють політичну оцінку на судове рішення. Вони дають перевірювані опорні точки: зміст права, компетенцію органу, формулу ухваленого акта й початкову виборчу ситуацію. Для оцінки насильства, обмежень і поведінки учасників потрібні окремі фактичні дані.`,
          ]
        ),
      },
      {
        title: L(`Между гражданским участием и процедурой`, `Between civic participation and procedure`, `Між громадянською участю та процедурою`),
        paragraphs: P(
          [
            `Одна трактовка видит в массовом протесте прямое проявление народного суверенитета и считает последующие решения политически неизбежными. Другая сводит всё событие к нарушению формальной процедуры и тем самым делает общественную мобилизацию несущественной. Более точное чтение признаёт причинную силу протеста, не наделяя её безграничной юридической силой.`,
            `Предел анализа проходит там, где общая защита собраний подменяет разбор конкретного поведения. Мирный участник, лицо, совершившее насилие, полицейское подразделение и государственный орган несут разные обязанности и оцениваются по разным данным. Право на протест сохраняет смысл только тогда, когда оно не служит ни лицензией на любое действие, ни предлогом отменить политическое несогласие.`,
          ],
          [
            `One interpretation treats mass protest as a direct expression of popular sovereignty and subsequent decisions as politically inevitable. Another reduces the entire event to a breach of formal procedure and makes social mobilisation irrelevant. A more precise reading recognises protest's causal force without granting it unlimited legal force.`,
            `The analysis reaches its limit when general assembly protection substitutes for examining specific conduct. A peaceful participant, a person committing violence, a police unit, and a state body have different duties and must be assessed through different evidence. The right to protest remains meaningful only when it is neither a licence for every act nor a pretext for erasing political dissent.`,
          ],
          [
            `Одне тлумачення бачить у масовому протесті прямий прояв народного суверенітету й вважає наступні рішення політично неминучими. Інше зводить усю подію до порушення формальної процедури й робить суспільну мобілізацію несуттєвою. Точніше прочитання визнає причинну силу протесту, не наділяючи її необмеженою юридичною силою.`,
            `Межа аналізу проходить там, де загальний захист зібрань підміняє розбір конкретної поведінки. Мирний учасник, особа, що вчинила насильство, поліцейський підрозділ і державний орган мають різні обов'язки та оцінюються за різними даними. Право на протест зберігає сенс лише тоді, коли воно не є ані дозволом на будь-яку дію, ані приводом скасувати політичну незгоду.`,
          ]
        ),
      },
    ],
  },

  'concept-public-speech': {
    lead: L(
      `Свобода слова создаёт пространство для критики власти, обсуждения войны и столкновения несовместимых оценок. Но доступ к публичной трибуне не превращает утверждение в установленный факт. Для содержательного спора важно видеть, кто говорит, к какому моменту относится заявление, на какие наблюдаемые данные оно опирается и допускает ли проверку. В условиях войны эта дисциплина особенно важна: официальное сообщение может быть одновременно необходимым источником о позиции государства, средством мобилизации и неполным описанием происходящего.`,
      `Freedom of expression creates space to criticise government, debate war, and confront incompatible assessments. Access to a public platform, however, does not turn a statement into an established fact. A substantive dispute asks who is speaking, when the claim applies, what observable evidence supports it, and whether it can be checked. This discipline is especially important in wartime: an official statement may simultaneously be necessary evidence of a government's position, an instrument of mobilisation, and an incomplete account of events.`,
      `Свобода слова створює простір для критики влади, обговорення війни та зіткнення несумісних оцінок. Проте доступ до публічної трибуни не перетворює твердження на встановлений факт. Змістовна суперечка вимагає бачити, хто говорить, до якого моменту належить заява, на які спостережувані дані вона спирається й чи допускає перевірку. Під час війни ця дисципліна особливо важлива: офіційне повідомлення може водночас бути необхідним джерелом позиції держави, засобом мобілізації та неповним описом подій.`
    ),
    sections: [
      {
        title: L(`Право говорить и обязанность доказывать`, `The right to speak and the burden of proof`, `Право говорити та обов'язок доводити`),
        paragraphs: P(
          [
            `Свободная публичная сфера предполагает право высказывать мнение, распространять информацию и оспаривать доминирующую версию. Порог доказательства возникает не из разрешения говорить, а из характера сказанного. Оценочное суждение можно обсуждать по его основаниям; проверяемое утверждение о дате, решении, ущербе или участнике требует источника, масштаба и ясной формулировки.`,
            `Полезно различать свидетельство очевидца, официальную позицию, аналитический вывод и утверждение о причинной связи. У каждого разная доказательная сила. Имя должностного лица подтверждает, что позиция была озвучена, но не доказывает все описанные обстоятельства; повторение сообщения многими площадками также не создаёт нескольких независимых подтверждений, если они восходят к одному сообщению.`,
          ],
          [
            `A free public sphere includes the right to state opinions, circulate information, and challenge a dominant account. The evidentiary threshold comes not from permission to speak but from the nature of the statement. A value judgement can be debated through its reasons; a testable claim about a date, decision, loss, or actor requires a source, a scale, and precise wording.`,
            `It is useful to distinguish eyewitness testimony, an official position, an analytical inference, and a causal claim. Each carries different weight. Naming an official proves that a position was expressed, but not every circumstance described; repetition across many outlets also does not create multiple independent confirmations when all reports derive from the same statement.`,
          ],
          [
            `Вільна публічна сфера передбачає право висловлювати думки, поширювати інформацію й заперечувати панівну версію. Доказовий поріг виникає не з дозволу говорити, а з характеру сказаного. Оцінне судження можна обговорювати за його підставами; перевірюване твердження про дату, рішення, шкоду чи учасника потребує джерела, масштабу й точної формули.`,
            `Корисно розрізняти свідчення очевидця, офіційну позицію, аналітичний висновок і твердження про причинний зв'язок. Кожне має різну вагу. Ім'я посадовця підтверджує, що позицію озвучили, але не доводить усіх описаних обставин; повторення повідомлення багатьма майданчиками також не створює кількох незалежних підтверджень, якщо всі вони походять з однієї заяви.`,
          ]
        ),
      },
      {
        title: L(`Публичные версии от Киева до Мюнхена`, `Public accounts from Kyiv to Munich`, `Публічні версії від Києва до Мюнхена`),
        paragraphs: P(
          [
            `В статье о смене власти 22 февраля 2014 года политические ярлыки — «революция», «переворот», «конституционный переход» — направляют восприятие, но не заменяют постановление Рады и конституционный разбор. В статье о начале АТО 14 апреля официальная формула «антитеррористической операции» должна читаться вместе с сообщениями ОБСЕ о захватах зданий и докладом ООН о вооружённых группах и действиях государства.`,
            `Мюнхенская речь 19 февраля 2022 года фиксирует, как украинское руководство описывало угрозы и архитектуру безопасности за несколько дней до полномасштабного вторжения. Это первичный источник политической позиции на конкретную дату, а не исчерпывающий отчёт о намерениях всех сторон. Сопоставление этих трёх статей показывает, как слова задают рамку события, но нуждаются в документах и последующей хронологии.`,
          ],
          [
            `In the article on the transfer of power on 22 February 2014, labels such as “revolution,” “coup,” and “constitutional transition” guide perception but do not replace the Rada resolution and constitutional analysis. In the article on the start of the ATO on 14 April, the official phrase “anti-terrorist operation” must be read alongside OSCE reports of building seizures and the UN account of armed groups and state action.`,
            `The Munich speech of 19 February 2022 records how Ukraine's leadership described threats and the security architecture days before the full-scale invasion. It is a primary source for a political position at a specific moment, not a complete account of every side's intentions. Reading these three articles together shows how words frame an event but still require documents and later chronology.`,
          ],
          [
            `У статті про зміну влади 22 лютого 2014 року ярлики «революція», «переворот» і «конституційний перехід» спрямовують сприйняття, але не замінюють постанову Ради та конституційний аналіз. У статті про початок АТО 14 квітня офіційну формулу «антитерористичної операції» слід читати разом із повідомленнями ОБСЄ про захоплення будівель і доповіддю ООН про збройні групи та дії держави.`,
            `Мюнхенська промова 19 лютого 2022 року фіксує, як українське керівництво описувало загрози й архітектуру безпеки за кілька днів до повномасштабного вторгнення. Це первинне джерело політичної позиції на конкретну дату, а не вичерпний звіт про наміри всіх сторін. Зіставлення трьох статей показує, як слова задають рамку події, але потребують документів і подальшої хронології.`,
          ]
        ),
      },
      {
        title: L(`Документ как запись позиции, а не печать истины`, `A document records a position; it does not certify truth`, `Документ фіксує позицію, а не засвідчує істину`),
        paragraphs: P(
          [
            `Конституция устанавливает правовую рамку выражения мнений и работы публичных институтов. Постановления органов власти достоверно показывают, что именно орган решил и как сформулировал основание. Доклады ОБСЕ и Мониторинговой миссии ООН добавляют наблюдения учреждений с описанной компетенцией. Официальная речь, в свою очередь, точно передаёт позицию выступающей стороны на дату публикации.`,
            `Ни один из этих жанров не решает автоматически вопрос о причинности. Постановление не доказывает все факты, положенные в его основу; наблюдательный доклад ограничен временем, доступом и методикой; речь не подтверждает скрытые намерения противника. Надёжное чтение отмечает назначение документа, сравнивает даты и проверяет, изменилось ли утверждение после появления новых сведений.`,
          ],
          [
            `The Constitution supplies the legal framework for expression and public institutions. Acts of state bodies reliably show what a body decided and how it stated its basis. OSCE and UN Human Rights Monitoring Mission reports add observations by institutions with defined mandates. An official speech, in turn, accurately records the speaker's side at the date of publication.`,
            `None of these genres automatically resolves causation. A resolution does not prove every fact underlying it; a monitoring report is bounded by time, access, and method; a speech does not establish an adversary's hidden intentions. Reliable reading identifies a document's function, compares dates, and checks whether a claim changed as new information appeared.`,
          ],
          [
            `Конституція встановлює правову рамку висловлення думок і роботи публічних інституцій. Акти органів влади достовірно показують, що саме орган вирішив і як сформулював підставу. Доповіді ОБСЄ та Моніторингової місії ООН додають спостереження установ із визначеними повноваженнями. Офіційна промова, своєю чергою, точно фіксує позицію сторони на дату публікації.`,
            `Жоден із цих жанрів не розв'язує автоматично питання причинності. Постанова не доводить усіх фактів у її основі; моніторингова доповідь обмежена часом, доступом і методикою; промова не встановлює прихованих намірів противника. Надійне читання визначає призначення документа, порівнює дати й перевіряє, чи змінилося твердження після появи нових відомостей.`,
          ]
        ),
      },
      {
        title: L(`Открытость, безопасность и ответственность`, `Openness, security, and responsibility`, `Відкритість, безпека та відповідальність`),
        paragraphs: P(
          [
            `Максималистская позиция требует почти неограниченного оборота информации даже во время войны; противоположная считает любую жёсткую информационную политику необходимой безопасностью. Между ними остаётся вопрос о конкретной цели ограничения, его правовом основании, сроке и возможности обжалования. Секретность может защищать операцию, но не должна становиться универсальным ответом на критику решений.`,
            `Другой предел связан с ошибкой симметрии. Нейтральная проверка не означает, что два несовместимых утверждения обязательно равноценны; она означает применение одинаковых вопросов о происхождении, независимости и проверяемости данных. Публичная коммуникация поддерживает демократию тогда, когда гражданам доступна не только яркая версия, но и путь от заявления к документу, наблюдению и последующему исправлению.`,
          ],
          [
            `A maximalist position demands an almost unrestricted flow of information even during war; the opposite treats every strict information policy as necessary security. Between them lies the specific purpose of a restriction, its legal basis, duration, and route of appeal. Secrecy may protect an operation, but it should not become a universal answer to criticism of decisions.`,
            `A second limit concerns false symmetry. Neutral verification does not mean that two incompatible claims must carry equal weight; it means applying the same questions about origin, independence, and testability. Public communication supports democracy when citizens receive not only a vivid account but also a path from claim to document, observation, and later correction.`,
          ],
          [
            `Максималістська позиція вимагає майже необмеженого обігу інформації навіть під час війни; протилежна вважає будь-яку жорстку інформаційну політику необхідною безпекою. Між ними залишається питання про конкретну мету обмеження, його правову підставу, строк і можливість оскарження. Таємність може захищати операцію, але не повинна ставати універсальною відповіддю на критику рішень.`,
            `Інша межа пов'язана з хибною симетрією. Нейтральна перевірка не означає, що два несумісні твердження обов'язково рівноцінні; вона означає однакові питання про походження, незалежність і перевірюваність даних. Публічна комунікація підтримує демократію тоді, коли громадянам доступна не лише яскрава версія, а й шлях від заяви до документа, спостереження та подальшого виправлення.`,
          ]
        ),
      },
    ],
  },

  'concept-state-capacity': {
    lead: L(
      `Государственная способность проявляется не в масштабе обещаний и не в персональном образе руководителя, а в том, может ли система последовательно исполнять решения. Для Украины военного времени это охватывает мобилизацию, оборону, бюджетное и местное управление, сохранение услуг, защиту прав и подготовку послевоенного порядка. Статья предлагает оценивать такую способность по цепочке от законного полномочия до фактического результата, различая наличие института, качество его работы и устойчивость под длительной нагрузкой.`,
      `State capacity is shown neither by the scale of promises nor by a leader's personal image, but by whether a system can implement decisions consistently. For wartime Ukraine, this includes mobilisation, defence, fiscal and local administration, continuity of services, protection of rights, and preparation for the post-war order. This article assesses capacity along the chain from lawful authority to actual outcome, distinguishing the existence of an institution, the quality of its work, and its resilience under prolonged pressure.`,
      `Державна спроможність проявляється не в масштабі обіцянок і не в персональному образі керівника, а в тому, чи може система послідовно виконувати рішення. Для України воєнного часу це охоплює мобілізацію, оборону, бюджетне й місцеве управління, збереження послуг, захист прав і підготовку повоєнного порядку. Стаття оцінює таку спроможність за ланцюгом від законного повноваження до фактичного результату, розрізняючи наявність інституції, якість її роботи та стійкість під тривалим навантаженням.`
    ),
    sections: [
      {
        title: L(`От решения к воспроизводимому результату`, `From decision to repeatable outcome`, `Від рішення до відтворюваного результату`),
        paragraphs: P(
          [
            `Минимальный порог — способность органа принять решение в пределах полномочий, обеспечить ресурсы, назначить ответственных и проверить исполнение. Однократный успех ещё не показывает устойчивости: работающий институт повторяет функцию при смене персоналий, исправляет ошибки и сохраняет подотчётность. Военная эффективность без гражданского управления либо формальная законность без исполнения дают лишь часть общей картины.`,
            `Измерение требует конкретного предмета. Способность собирать доходы, поддерживать энергетику, проводить мобилизацию, обеспечивать суды или координировать оборону может различаться. Поэтому общий ярлык «сильное» или «слабое» государство мало объясняет без показателей времени, охвата, качества услуги, потерь, доступности обжалования и зависимости от внешней помощи.`,
          ],
          [
            `The minimum threshold is the ability of a body to decide within its authority, secure resources, assign responsibility, and verify implementation. A single success does not establish resilience: a functioning institution repeats its function after personnel changes, corrects errors, and preserves accountability. Military effectiveness without civilian administration, or formal legality without execution, gives only part of the picture.`,
            `Measurement needs a defined object. Capacity to collect revenue, sustain energy, conduct mobilisation, keep courts operating, or coordinate defence may vary considerably. The broad label “strong” or “weak” state therefore explains little without indicators of time, reach, service quality, losses, access to appeal, and dependence on outside assistance.`,
          ],
          [
            `Мінімальний поріг — здатність органу ухвалити рішення в межах повноважень, забезпечити ресурси, призначити відповідальних і перевірити виконання. Одноразовий успіх ще не показує стійкості: дієва інституція повторює функцію після зміни персоналій, виправляє помилки й зберігає підзвітність. Військова ефективність без цивільного управління або формальна законність без виконання дають лише частину картини.`,
            `Вимірювання потребує конкретного предмета. Спроможність збирати доходи, підтримувати енергетику, проводити мобілізацію, забезпечувати суди чи координувати оборону може істотно відрізнятися. Тому загальний ярлик «сильна» або «слабка» держава мало пояснює без показників часу, охоплення, якості послуги, втрат, доступності оскарження та залежності від зовнішньої допомоги.`,
          ]
        ),
      },
      {
        title: L(`Институции под последовательными кризисами`, `Institutions under successive crises`, `Інституції під послідовними кризами`),
        paragraphs: P(
          [
            `Декларация о суверенитете 16 июля 1990 года и Акт независимости, на который ведёт эта статья, описывают создание самостоятельного центра решений, но не гарантируют качество будущего управления. Смена власти 22 февраля 2014 года стала проверкой непрерывности органов в условиях острого кризиса: юридическая форма перехода оспаривалась, тогда как государственные структуры продолжали принимать решения.`,
            `Полномасштабное вторжение и введение военного положения 24 февраля 2022 года поставили другую задачу — быстро перераспределить полномочия и ресурсы, не допустить вакуума власти и одновременно сохранить правовые ограничения. Операция «Паутина» 1 июня 2025 года показывает узкий пример оперативной способности, однако отдельная военная операция ничего не говорит сама по себе о качестве экономики, правосудия или послевоенного управления.`,
          ],
          [
            `The Declaration of Sovereignty of 16 July 1990 and the Independence Act linked from that article describe the creation of an autonomous centre of decision-making, but do not guarantee future administrative quality. The transfer of power on 22 February 2014 tested institutional continuity during acute crisis: the legal form of transition was disputed while state structures continued to make decisions.`,
            `The full-scale invasion and introduction of martial law on 24 February 2022 posed a different task: reallocating authority and resources quickly, preventing a vacuum of power, and preserving legal limits. Operation Spiderweb on 1 June 2025 illustrates a narrow operational capability, but a single military operation says nothing by itself about the quality of the economy, justice system, or post-war administration.`,
          ],
          [
            `Декларація про суверенітет 16 липня 1990 року та Акт незалежності, на який веде ця стаття, описують створення самостійного центру рішень, але не гарантують якості майбутнього управління. Зміна влади 22 лютого 2014 року стала перевіркою безперервності органів у гострій кризі: правову форму переходу оспорювали, тоді як державні структури продовжували ухвалювати рішення.`,
            `Повномасштабне вторгнення та запровадження воєнного стану 24 лютого 2022 року поставили інше завдання — швидко перерозподілити повноваження й ресурси, не допустити вакууму влади та водночас зберегти правові межі. Операція «Павутина» 1 червня 2025 року показує вузький приклад оперативної спроможності, але окрема військова операція сама по собі нічого не каже про якість економіки, правосуддя чи повоєнного управління.`,
          ]
        ),
      },
      {
        title: L(`Правовые полномочия и фактическое исполнение`, `Legal authority and actual implementation`, `Правові повноваження та фактичне виконання`),
        paragraphs: P(
          [
            `Конституция, указ о военном положении и закон о мобилизации устанавливают, какие органы получают полномочия и в каком режиме действуют. Они позволяют проверить дату, компетенцию и формальную основу мер. Официальные сообщения о конкретной операции показывают заявленную цель и отчёт исполнителя. Вместе эти документы описывают архитектуру решения, но не являются универсальной оценкой её качества.`,
            `Из текста закона нельзя вывести, насколько равномерно мера применялась, сколько ресурсов было потрачено и какие издержки понесли граждане. Из сообщения исполнителя нельзя получить независимую оценку результата. Для вывода о способности требуются бюджеты, сроки, данные об охвате, решения контролирующих органов и сопоставление заявленной задачи с устойчивым эффектом.`,
          ],
          [
            `The Constitution, the martial-law decree, and mobilisation legislation establish which bodies receive powers and under what regime they act. They allow dates, authority, and the formal basis of measures to be checked. Official statements about a particular operation identify its stated purpose and the implementer's account. Together, these records describe the decision architecture but do not provide a universal rating of its quality.`,
            `A statute does not reveal how evenly a measure was applied, how many resources it consumed, or what costs citizens bore. An implementer's statement cannot provide an independent assessment of the result. A capacity judgement requires budgets, timelines, coverage data, findings by oversight bodies, and comparison of the stated task with a durable effect.`,
          ],
          [
            `Конституція, указ про воєнний стан і законодавство про мобілізацію встановлюють, які органи отримують повноваження та в якому режимі діють. Вони дають змогу перевірити дату, компетенцію й формальну основу заходів. Офіційні повідомлення про конкретну операцію показують заявлену мету та звіт виконавця. Разом ці документи описують архітектуру рішення, але не є універсальною оцінкою його якості.`,
            `Із тексту закону не випливає, наскільки рівномірно застосували захід, скільки ресурсів витратили та яких витрат зазнали громадяни. З повідомлення виконавця не можна отримати незалежну оцінку результату. Для висновку про спроможність потрібні бюджети, строки, дані про охоплення, рішення контрольних органів і зіставлення заявленого завдання зі сталим ефектом.`,
          ]
        ),
      },
      {
        title: L(`Сильное государство для кого и для чего`, `A capable state for whom and for what`, `Спроможна держава для кого і для чого`),
        paragraphs: P(
          [
            `Одна школа ставит на первое место скорость командования и способность концентрировать ресурсы; другая считает главным соблюдение процедуры, права и подотчётность. Во время войны конфликт между этими ориентирами обостряется, но полностью выбирать один из них опасно. Решение, которое быстро исполняется без обратной связи, может накапливать ошибки; процедура без способности действовать оставляет права без практической защиты.`,
            `Есть и предел внешнего сравнения. Помощь союзников может расширять возможности, но её объём не равен внутренней институциональной зрелости; одновременно зависимость не означает отсутствия собственной способности. Разумный вывод должен назвать функцию, период и показатель, а также признать цену результата. Тогда обсуждение послевоенного устройства становится проверкой механизмов, а не соревнованием символов и персональных образов.`,
          ],
          [
            `One school prioritises speed of command and the ability to concentrate resources; another treats procedure, rights, and accountability as decisive. War sharpens the conflict between these aims, but choosing only one is dangerous. A decision executed rapidly without feedback may accumulate errors, while procedure without the ability to act leaves rights without practical protection.`,
            `External comparison also has limits. Allied assistance may expand capability, but its volume is not the same as domestic institutional maturity; dependence likewise does not mean that local capacity is absent. A sound conclusion must name the function, period, indicator, and cost of the result. Discussion of the post-war order then becomes a test of mechanisms rather than a contest of symbols and personal images.`,
          ],
          [
            `Одна школа ставить на перше місце швидкість командування та здатність концентрувати ресурси; інша вважає визначальними процедуру, права й підзвітність. Війна загострює конфлікт між цими орієнтирами, але повністю обирати один із них небезпечно. Рішення, яке швидко виконують без зворотного зв'язку, може накопичувати помилки; процедура без здатності діяти залишає права без практичного захисту.`,
            `Зовнішнє порівняння також має межі. Допомога союзників може розширювати можливості, але її обсяг не дорівнює внутрішній інституційній зрілості; водночас залежність не означає відсутності власної спроможності. Обґрунтований висновок має назвати функцію, період, показник і ціну результату. Тоді обговорення повоєнного устрою стає перевіркою механізмів, а не змаганням символів і персональних образів.`,
          ]
        ),
      },
    ],
  },

  'concept-elite-continuity': {
    lead: L(
      `Непрерывность политических элит — это гипотеза о сохранении способов отбора кадров, распределения ресурсов и принятия решений при смене фамилий и партийных вывесок. Она помогает объяснять, почему новый руководящий состав иногда воспроизводит прежние неформальные практики, но не может подтверждаться одним совпадением биографий или общим разочарованием в политике. Для украинского конфликта полезно проследить, какие институты, сети и решения действительно продолжились после февраля 2014 года, а какие изменились под давлением войны и выборов.`,
      `Political elite continuity is a hypothesis about the persistence of recruitment, resource allocation, and decision-making practices despite changes in names and party labels. It can explain why a new leadership sometimes reproduces older informal methods, but cannot be established by one biographical overlap or general disappointment with politics. In the Ukrainian conflict, the useful task is to trace which institutions, networks, and decisions actually continued after February 2014 and which changed under the pressure of war and elections.`,
      `Безперервність політичних еліт — це гіпотеза про збереження способів добору кадрів, розподілу ресурсів і ухвалення рішень попри зміну прізвищ та партійних вивісок. Вона може пояснювати, чому нове керівництво іноді відтворює старі неформальні практики, але не доводиться одним біографічним збігом або загальним розчаруванням у політиці. Для українського конфлікту корисно простежити, які інституції, мережі й рішення справді продовжилися після лютого 2014 року, а які змінилися під тиском війни та виборів.`
    ),
    sections: [
      {
        title: L(`Что именно должно продолжаться`, `What must actually persist`, `Що саме має продовжуватися`),
        paragraphs: P(
          [
            `Минимальный порог требует указать носителя и механизм продолжения. Это может быть состав высших должностей, карьерные траектории чиновников, владельцы экономических активов, правила партийного финансирования, неформальные каналы влияния или привычный способ обходить контроль. Простое существование тех же министерств отражает институциональную преемственность, но ещё не доказывает неизменность элитной практики.`,
            `Сильное утверждение нуждается в сравнении до и после выбранной даты: кто принимал решения, как попадал на должность, кому распределялись ресурсы и какие механизмы ответственности работали. Если критерий не назван, тезис становится неуязвимым для проверки: любое изменение объявляется декоративным, а любое постоянство — доказательством заранее принятого вывода.`,
          ],
          [
            `The minimum threshold is to identify the carrier and mechanism of continuity. It may involve senior officeholders, civil-service careers, owners of economic assets, party-finance rules, informal influence channels, or a recurring way of avoiding oversight. The survival of the same ministries shows institutional succession, but does not yet prove that elite practices remained unchanged.`,
            `A strong claim requires comparison before and after a selected date: who made decisions, how they entered office, where resources went, and which accountability mechanisms operated. Without a stated criterion, the thesis becomes impossible to test: every change is called cosmetic and every continuity is treated as proof of a conclusion chosen in advance.`,
          ],
          [
            `Мінімальний поріг вимагає назвати носія та механізм продовження. Це може бути склад найвищих посад, кар'єрні траєкторії чиновників, власники економічних активів, правила партійного фінансування, неформальні канали впливу або звичний спосіб обходити контроль. Існування тих самих міністерств відображає інституційну наступність, але ще не доводить незмінності елітної практики.`,
            `Сильне твердження потребує порівняння до і після обраної дати: хто ухвалював рішення, як потрапляв на посаду, кому розподіляли ресурси та які механізми відповідальності діяли. Якщо критерій не названо, теза стає невразливою для перевірки: кожну зміну оголошують декоративною, а кожну сталість — доказом наперед прийнятого висновку.`,
          ]
        ),
      },
      {
        title: L(`Переход власти, силовое решение и Минск`, `Transfer of power, security policy, and Minsk`, `Перехід влади, силове рішення та Мінськ`),
        paragraphs: P(
          [
            `Смена власти 22 февраля 2014 года создаёт исходную точку: персональный и партийный состав изменился, но Верховная Рада, правительство и другие органы продолжили действовать. Начало АТО 14 апреля показывает, как переходная власть использовала существующие органы безопасности и правовые формы в ответ на вооружённый кризис. Эти факты допускают вопрос о преемственности, но не дают готового ответа о неформальных сетях.`,
            `Комплекс мер Минска от 12 февраля 2015 года добавляет следующий срез: решения уже принимались в длительном конфликте, с участием международных посредников и набором взаимозависимых обязательств. Сопоставление трёх статей позволяет проверять, сохранилась ли логика управления от кризисного перехода к войне и переговорам, либо внешняя среда, выборы и новые коалиции существенно изменили круг акторов и стимулов.`,
          ],
          [
            `The transfer of power on 22 February 2014 provides the starting point: personnel and party composition changed, while the Verkhovna Rada, government, and other bodies continued to operate. The start of the ATO on 14 April shows how the transitional authorities used existing security institutions and legal forms in response to armed crisis. These facts permit a continuity question but do not answer it for informal networks.`,
            `The Minsk Package of Measures of 12 February 2015 adds a later cross-section: decisions were now made during a prolonged conflict, with international mediation and a set of interdependent commitments. Reading the three articles together allows inquiry into whether the governing logic persisted from crisis transition to war and negotiation, or whether external pressure, elections, and new coalitions substantially changed actors and incentives.`,
          ],
          [
            `Зміна влади 22 лютого 2014 року дає початкову точку: персональний і партійний склад змінився, але Верховна Рада, уряд та інші органи продовжили діяти. Початок АТО 14 квітня показує, як перехідна влада використала наявні органи безпеки й правові форми у відповідь на збройну кризу. Ці факти дозволяють поставити питання про наступність, але не відповідають щодо неформальних мереж.`,
            `Комплекс заходів Мінська від 12 лютого 2015 року додає наступний зріз: рішення вже ухвалювали у тривалому конфлікті, за участі міжнародних посередників і набору взаємозалежних зобов'язань. Зіставлення трьох статей дає змогу перевірити, чи збереглася логіка управління від кризового переходу до війни й переговорів, чи зовнішнє середовище, вибори та нові коаліції істотно змінили коло учасників і стимули.`,
          ]
        ),
      },
      {
        title: L(`Официальная запись видит решения, но не сети`, `The official record sees decisions, not networks`, `Офіційний запис бачить рішення, а не мережі`),
        paragraphs: P(
          [
            `Постановление № 757-VII фиксирует основание, сформулированное парламентом при смене власти. Указ о введении в действие решения по АТО показывает компетентный орган и юридическую форму силовой политики. Минский текст и резолюция Совета Безопасности № 2202 устанавливают содержание согласованных мер и международное одобрение. Это надёжная последовательность публичных решений.`,
            `Однако эти акты не раскрывают происхождение кадровых назначений, связи владельцев активов, неформальные договорённости или степень влияния отдельных групп. Из сходства политического результата нельзя выводить тождество людей и мотивов. Для проверки элитной непрерывности нужны реестры должностей и собственности, финансирование партий, карьерные данные, расследования контролирующих органов и сопоставимый период наблюдения.`,
          ],
          [
            `Resolution No. 757-VII records the basis stated by parliament during the transfer of power. The decree implementing the ATO decision identifies the competent body and legal form of security policy. The Minsk text and Security Council Resolution 2202 establish the content of agreed measures and international endorsement. This is a reliable sequence of public decisions.`,
            `Those acts, however, do not reveal the origins of appointments, ties among asset owners, informal bargains, or the influence of particular groups. Similar political outcomes cannot establish identical personnel or motives. Testing elite continuity requires office and ownership registers, party-finance data, career histories, oversight findings, and a comparable observation period.`,
          ],
          [
            `Постанова № 757-VII фіксує підставу, сформульовану парламентом під час зміни влади. Указ про введення в дію рішення щодо АТО показує компетентний орган і правову форму безпекової політики. Мінський текст і резолюція Ради Безпеки № 2202 встановлюють зміст узгоджених заходів та міжнародне схвалення. Це надійна послідовність публічних рішень.`,
            `Однак ці акти не розкривають походження кадрових призначень, зв'язки власників активів, неформальні домовленості чи ступінь впливу окремих груп. Подібність політичного результату не доводить тотожності людей і мотивів. Для перевірки елітної наступності потрібні реєстри посад і власності, фінансування партій, кар'єрні дані, висновки контрольних органів та зіставний період спостереження.`,
          ]
        ),
      },
      {
        title: L(`Преемственность без теории заговора`, `Continuity without conspiracy theory`, `Наступність без теорії змови`),
        paragraphs: P(
          [
            `Одна трактовка утверждает, что смена руководителей почти ничего не меняет: устойчивые группы приспосабливаются и сохраняют доступ к ресурсам. Другая видит в каждом электоральном цикле глубокий разрыв. Обе позиции становятся убедительными лишь после определения масштаба: национальная политика, отдельное ведомство, региональная сеть или конкретная экономическая отрасль могут показывать разные траектории.`,
            `Нельзя также путать непрерывность государства с непрерывностью элит. Сохранение правосубъектности, архивов, должностей и обязательств необходимо для управляемости и само по себе не свидетельствует о закрытом круге влияния. Аналитическая ценность гипотезы появляется там, где назван воспроизводимый механизм и возможное опровержение; без этого она превращается в универсальное объяснение любого нежелательного исхода.`,
          ],
          [
            `One interpretation says changes of leadership alter little because durable groups adapt and retain access to resources. Another sees a deep break in every electoral cycle. Either becomes persuasive only after the scale is defined: national politics, a particular agency, a regional network, or an economic sector may follow different trajectories.`,
            `State continuity must also not be confused with elite continuity. Preserving legal personality, archives, offices, and obligations is necessary for governability and does not itself indicate a closed circle of influence. The hypothesis becomes analytically valuable when it identifies a reproducible mechanism and a possible disproof; otherwise, it turns into a universal explanation for every unwelcome outcome.`,
          ],
          [
            `Одне тлумачення стверджує, що зміна керівників майже нічого не змінює: стійкі групи пристосовуються й зберігають доступ до ресурсів. Інше бачить у кожному виборчому циклі глибокий розрив. Обидві позиції стають переконливими лише після визначення масштабу: національна політика, окреме відомство, регіональна мережа чи економічна галузь можуть мати різні траєкторії.`,
            `Не можна також плутати безперервність держави з безперервністю еліт. Збереження правосуб'єктності, архівів, посад і зобов'язань потрібне для керованості й саме по собі не свідчить про закрите коло впливу. Аналітична цінність гіпотези виникає там, де названо відтворюваний механізм і можливе спростування; без цього вона стає універсальним поясненням будь-якого небажаного результату.`,
          ]
        ),
      },
    ],
  },

  'concept-amnesty-vs-verdict': {
    lead: L(
      `Амнистия и судебный приговор отвечают на разные вопросы. Амнистия определяет, при каких условиях государство отказывается от преследования или исполнения наказания для обозначенной группы; приговор устанавливает обстоятельства конкретного дела, юридическую квалификацию и ответственность конкретного лица. Смешение этих процедур особенно искажает чтение украинских актов кризисного периода: перечень возможных статей в законе об освобождении участников протестов нельзя превращать ни в доказательство совершения каждого преступления, ни в заключение о полной невиновности каждого освобождённого.`,
      `Amnesty and a judicial verdict answer different questions. Amnesty defines when the state gives up prosecution or punishment for a designated group; a judgment establishes the facts of a particular case, their legal classification, and an individual's responsibility. Confusing these procedures is especially misleading when reading Ukrainian crisis-era acts: a list of possible offences in a law releasing protest participants proves neither that every offence was committed nor that every released person was wholly innocent.`,
      `Амністія та судовий вирок відповідають на різні питання. Амністія визначає, за яких умов держава відмовляється від переслідування чи виконання покарання щодо визначеної групи; вирок установлює обставини конкретної справи, правову кваліфікацію та відповідальність конкретної особи. Змішування цих процедур особливо спотворює читання українських актів кризового періоду: перелік можливих статей у законі про звільнення учасників протестів не доводить ані вчинення кожного злочину, ані повної невинуватості кожної звільненої особи.`
    ),
    sections: [
      {
        title: L(`Освобождение не устанавливает факт`, `Release does not establish a fact`, `Звільнення не встановлює факт`),
        paragraphs: P(
          [
            `Порог судебного вывода включает индивидуализированное обвинение, исследование доказательств, возможность защиты и решение компетентного суда. Амнистия может вмешаться до окончания этой цепочки или после приговора, исходя из политической, гуманитарной либо примирительной цели. Поэтому её действие меняет правовые последствия, но не создаёт задним числом доказанную фактическую историю каждого эпизода.`,
            `В тексте амнистии составы преступлений часто очерчивают предел применимости: законодатель должен указать, к каким производствам и лицам относится освобождение. Такой перечень описывает юридический фильтр, а не коллективное признание вины. Равным образом закрытие преследования не исключает, что в отдельных событиях были потерпевшие и вред; это требует самостоятельного установления.`,
          ],
          [
            `A judicial conclusion requires an individualised charge, examination of evidence, an opportunity to defend, and a ruling by a competent court. Amnesty may intervene before that chain is complete or after judgment, for political, humanitarian, or reconciliation purposes. It therefore changes legal consequences but does not retrospectively create a proven factual history for every episode.`,
            `Offences listed in an amnesty often define its scope: lawmakers must identify which proceedings and people may benefit. The list is a legal filter, not a collective confession of guilt. Likewise, ending prosecution does not mean that no one suffered harm in particular incidents; those facts require separate establishment.`,
          ],
          [
            `Поріг судового висновку охоплює індивідуалізоване обвинувачення, дослідження доказів, можливість захисту й рішення компетентного суду. Амністія може втрутитися до завершення цього ланцюга або після вироку, виходячи з політичної, гуманітарної чи примирювальної мети. Тому вона змінює правові наслідки, але не створює заднім числом доведеної фактичної історії кожного епізоду.`,
            `Перелічені в амністії склади злочинів часто окреслюють її межі: законодавець має вказати, до яких проваджень і осіб належить звільнення. Такий перелік є правовим фільтром, а не колективним визнанням вини. Так само припинення переслідування не означає, що в окремих подіях не було потерпілих і шкоди; це потребує самостійного встановлення.`,
          ]
        ),
      },
      {
        title: L(`От протестного кризиса к вооружённому конфликту`, `From protest crisis to armed conflict`, `Від протестної кризи до збройного конфлікту`),
        paragraphs: P(
          [
            `Закон об освобождении участников массовых акций появился до смены власти, описанной в статье от 22 февраля 2014 года. Поэтому позднейшая оценка перехода власти не должна подменять вопрос о том, что законодатель решил в момент острого противостояния. Постановление Рады о прекращении исполнения президентских полномочий — другой акт, с иной целью и иным предметом регулирования.`,
            `Начало АТО 14 апреля 2014 года и Минский комплекс мер 12 февраля 2015 года переводят тему ответственности в условия вооружённого конфликта. Там возникают вопросы о деяниях разных участников, будущей амнистии, расследовании тяжёлых нарушений и политическом урегулировании. Связь этих статей показывает, почему инструмент деэскалации нельзя механически читать как итоговое судебное описание всего кризиса.`,
          ],
          [
            `The law releasing participants in mass actions preceded the transfer of power described in the article dated 22 February 2014. A later assessment of that transfer should therefore not replace the question of what lawmakers decided at a moment of acute confrontation. The Rada resolution on the president ceasing to perform his duties was a different act with a different purpose and subject.`,
            `The start of the ATO on 14 April 2014 and the Minsk Package of Measures of 12 February 2015 move responsibility into the setting of armed conflict. Questions then concern conduct by multiple actors, prospective amnesty, investigation of grave violations, and political settlement. The connection among these articles shows why a de-escalation instrument cannot be read mechanically as a final judicial account of the entire crisis.`,
          ],
          [
            `Закон про звільнення учасників масових акцій з'явився до зміни влади, описаної у статті від 22 лютого 2014 року. Тому пізніша оцінка переходу влади не повинна підміняти питання про те, що законодавець вирішив у момент гострого протистояння. Постанова Ради про припинення виконання президентських повноважень — інший акт, з іншою метою та предметом регулювання.`,
            `Початок АТО 14 квітня 2014 року та Мінський комплекс заходів 12 лютого 2015 року переносять тему відповідальності в умови збройного конфлікту. Там постають питання про діяння різних учасників, майбутню амністію, розслідування тяжких порушень і політичне врегулювання. Зв'язок цих статей показує, чому інструмент деескалації не можна механічно читати як остаточний судовий опис усієї кризи.`,
          ]
        ),
      },
      {
        title: L(`Как читать закон и уголовную норму`, `How to read the statute and criminal provision`, `Як читати закон і кримінальну норму`),
        paragraphs: P(
          [
            `Закон № 743-VII позволяет установить круг событий, временные и процессуальные условия освобождения, а также перечень уголовно-правовых положений, с которыми законодатель связал его применение. Уголовный кодекс раскрывает элементы соответствующих составов. Вместе они показывают юридическую конструкцию решения, но не содержат индивидуального исследования доказательств по каждому человеку.`,
            `Постановление № 757-VII и другие акты февраля дают хронологический контекст, однако не превращают парламент в суд по прежним эпизодам. Чтобы утверждать, что конкретное лицо совершило конкретное деяние, нужны материалы производства и итоговое процессуальное решение. Чтобы оценить саму амнистию, нужны иные вопросы: законность, равное применение, совместимость с обязанностью расследовать наиболее тяжкие нарушения.`,
          ],
          [
            `Law No. 743-VII makes it possible to identify the events, temporal and procedural conditions of release, and the criminal-law provisions to which lawmakers linked its operation. The Criminal Code defines the elements of those offences. Together they show the legal design of the decision, but contain no individual examination of evidence for every person.`,
            `Resolution No. 757-VII and other February acts provide chronology, but do not turn parliament into a court for earlier incidents. A claim that a particular person committed a particular act requires the case record and a final procedural decision. Assessing the amnesty itself raises different questions: legality, equal application, and compatibility with duties to investigate the gravest violations.`,
          ],
          [
            `Закон № 743-VII дає змогу встановити коло подій, часові та процесуальні умови звільнення, а також перелік кримінально-правових положень, із якими законодавець пов'язав його застосування. Кримінальний кодекс розкриває елементи відповідних складів. Разом вони показують правову конструкцію рішення, але не містять індивідуального дослідження доказів щодо кожної особи.`,
            `Постанова № 757-VII та інші лютневі акти дають хронологічний контекст, але не перетворюють парламент на суд щодо попередніх епізодів. Твердження, що конкретна особа вчинила конкретне діяння, потребує матеріалів провадження й підсумкового процесуального рішення. Оцінка самої амністії ставить інші питання: законність, рівне застосування та сумісність з обов'язком розслідувати найтяжчі порушення.`,
          ]
        ),
      },
      {
        title: L(`Примирение, безнаказанность и презумпция`, `Reconciliation, impunity, and presumption`, `Примирення, безкарність і презумпція`),
        paragraphs: P(
          [
            `Сторонники широкой амнистии видят в ней способ остановить цикл преследований и вернуть политический конфликт в ненасильственную сферу. Критики опасаются, что групповое освобождение оставит потерпевших без ответа и поощрит повторение насилия. Эти позиции спорят о допустимых последствиях решения, но ни одна не даёт права переписать его как уже состоявшийся обвинительный или оправдательный приговор.`,
            `Граница проходит также между юридической невиновностью и историческим исследованием. Отсутствие приговора запрещает обращаться с человеком как с осуждённым, но исследователь может устанавливать ход событий по открытым доказательствам, аккуратно обозначая уровень вывода. Амнистия требует точности языка: «освобождён от преследования» означает не то же самое, что «признан виновным» или «оправдан судом».`,
          ],
          [
            `Supporters of broad amnesty see it as a way to stop cycles of prosecution and return political conflict to a non-violent arena. Critics fear group release may leave victims without redress and encourage renewed violence. These positions dispute the acceptable consequences of the policy, but neither permits rewriting it as a conviction or acquittal that has already occurred.`,
            `A boundary also separates legal innocence from historical inquiry. The absence of a conviction bars treating a person as convicted, while a researcher may reconstruct events from public evidence and state the limits of the conclusion carefully. Amnesty demands precise language: “released from prosecution” is not the same as “found guilty” or “acquitted by a court.”`,
          ],
          [
            `Прихильники широкої амністії бачать у ній спосіб зупинити цикл переслідувань і повернути політичний конфлікт у ненасильницьку сферу. Критики остерігаються, що групове звільнення залишить потерпілих без відповіді та заохотить повторення насильства. Ці позиції сперечаються про допустимі наслідки рішення, але жодна не дозволяє переписати його як обвинувальний або виправдувальний вирок, що вже відбувся.`,
            `Межа також проходить між юридичною невинуватістю та історичним дослідженням. Відсутність вироку забороняє поводитися з людиною як із засудженою, але дослідник може встановлювати перебіг подій за відкритими доказами, чітко позначаючи межі висновку. Амністія вимагає точності мови: «звільнено від переслідування» — не те саме, що «визнано винним» або «виправдано судом».`,
          ]
        ),
      },
    ],
  },

  'concept-self-determination': {
    lead: L(
      `Самоопределение описывает право народа определять политический статус и направление развития, но не действует как автоматическая формула отделения территории после любого голосования. В споре об Украине этот принцип необходимо читать вместе с территориальной целостностью, конституционной компетенцией, свободой волеизъявления и условиями применения силы. Такой подход не отрицает значения коллективной идентичности или мнения жителей; он требует показать, кто считается носителем права, как выражена воля и почему выбранное последствие согласуется с внутренним и международным порядком.`,
      `Self-determination describes a people's right to determine its political status and path of development, but it is not an automatic formula for territorial separation after any vote. In disputes about Ukraine, the principle must be read together with territorial integrity, constitutional authority, freedom of choice, and the conditions surrounding force. This approach does not deny collective identity or residents' views; it asks who holds the right, how their will was expressed, and why the claimed consequence fits domestic and international legal orders.`,
      `Самовизначення описує право народу визначати політичний статус і напрям розвитку, але не діє як автоматична формула відокремлення території після будь-якого голосування. У суперечці про Україну цей принцип слід читати разом із територіальною цілісністю, конституційною компетенцією, свободою волевиявлення та умовами застосування сили. Такий підхід не заперечує значення колективної ідентичності чи думки жителів; він вимагає показати, хто є носієм права, як виражено волю і чому заявлений наслідок узгоджується з внутрішнім та міжнародним порядком.`
    ),
    sections: [
      {
        title: L(`Носитель права, процедура и последствие`, `Rights-holder, procedure, and consequence`, `Носій права, процедура та наслідок`),
        paragraphs: P(
          [
            `Анализ начинается с трёх отдельных вопросов. Первый — какая общность заявляет самоопределение и как определены её участники. Второй — было ли волеизъявление свободным, представительным и проведённым компетентным органом. Третий — какое последствие из него выводят: культурную автономию, участие в управлении, изменение внутреннего устройства, независимость или присоединение к другому государству.`,
            `Чем радикальнее последствие, тем больше факторов требуется оценить. Результат голосования может сообщать о предпочтениях, но не устраняет вопросы о формулировке бюллетеня, доступе альтернатив, перемещении населения и вооружённом контроле. Одновременно формальная ссылка на территориальную целостность не освобождает государство от необходимости обеспечивать равное участие и права жителей.`,
          ],
          [
            `Analysis starts with three separate questions. First, which community claims self-determination and how its members are defined. Second, whether the expression of will was free, representative, and organised by a competent authority. Third, what consequence is claimed: cultural autonomy, participation in government, a change in internal arrangements, independence, or accession to another state.`,
            `The more radical the consequence, the more factors must be assessed. A vote may reveal preferences but does not remove questions about ballot wording, access to alternatives, population displacement, and armed control. At the same time, a formal appeal to territorial integrity does not free a state from ensuring equal participation and residents' rights.`,
          ],
          [
            `Аналіз починається з трьох окремих питань. Перше — яка спільнота заявляє самовизначення і як визначено її учасників. Друге — чи було волевиявлення вільним, представницьким і проведеним компетентним органом. Третє — який наслідок із нього виводять: культурну автономію, участь в управлінні, зміну внутрішнього устрою, незалежність або приєднання до іншої держави.`,
            `Що радикальніший наслідок, то більше чинників треба оцінити. Результат голосування може повідомляти про вподобання, але не усуває питань про формулювання бюлетеня, доступ до альтернатив, переміщення населення та збройний контроль. Водночас формальне посилання на територіальну цілісність не звільняє державу від забезпечення рівної участі й прав жителів.`,
          ]
        ),
      },
      {
        title: L(`От суверенитета Украины к спорным голосованиям`, `From Ukrainian sovereignty to contested votes`, `Від суверенітету України до спірних голосувань`),
        paragraphs: P(
          [
            `Акт независимости 1991 года показывает самоопределение на уровне союзной республики, позднее подтверждённое общенациональным референдумом. Крымское голосование 16 марта 2014 года возникло уже внутри признанного украинского государства и в иной фактической обстановке, поэтому аналогия требует сравнивать компетенцию, масштаб голосования и присутствие вооружённой силы.`,
            `Объявление об аннексии четырёх областей 30 сентября 2022 года ещё яснее разделяет заявленное волеизъявление и международный статус: голосования проходили на оккупированных территориях, а Россия не контролировала полностью заявленные области. Три статьи показывают, что слово «референдум» не делает процедуры тождественными; решающими остаются правовой порядок, условия и реакция других государств.`,
          ],
          [
            `The 1991 Independence Act shows self-determination at the level of a union republic, later confirmed by a nationwide referendum. The Crimean vote of 16 March 2014 occurred within an already recognised Ukrainian state and under different factual conditions, so any analogy must compare authority, territorial scale, and the presence of armed force.`,
            `The claimed annexation of four regions on 30 September 2022 separates asserted popular will from international status even more clearly: votes took place in occupied territory, while Russia did not fully control the regions it claimed. The three articles show that the word “referendum” does not make procedures equivalent; legal order, conditions, and other states' responses remain decisive.`,
          ],
          [
            `Акт незалежності 1991 року показує самовизначення на рівні союзної республіки, пізніше підтверджене загальнонаціональним референдумом. Кримське голосування 16 березня 2014 року відбулося вже всередині визнаної української держави та за іншої фактичної обстановки, тому аналогія вимагає порівнювати компетенцію, масштаб голосування і присутність збройної сили.`,
            `Оголошення про анексію чотирьох областей 30 вересня 2022 року ще виразніше розділяє заявлене волевиявлення й міжнародний статус: голосування відбувалися на окупованих територіях, а Росія не контролювала повністю заявлені області. Три статті показують, що слово «референдум» не робить процедури тотожними; визначальними залишаються правовий порядок, умови та реакція інших держав.`,
          ]
        ),
      },
      {
        title: L(`Совместное чтение международных и внутренних норм`, `Reading international and domestic rules together`, `Спільне читання міжнародних і внутрішніх норм`),
        paragraphs: P(
          [
            `Конституция Украины определяет унитарное устройство и относит изменение территории к общенациональной процедуре. Заключение Венецианской комиссии по Крыму рассматривает совместимость местного референдума с этой Конституцией и условия его проведения. Вместе документы отделяют наличие политического требования от компетенции органа и допустимости способа его реализации.`,
            `Резолюции Генеральной Ассамблеи 68/262 и ES-11/4 фиксируют позицию международного большинства о территориальной целостности и непризнании заявленных изменений. Они не измеряют все политические настроения населения, но прямо опровергают тезис об автоматическом изменении статуса вследствие организованных голосований.`,
          ],
          [
            `Ukraine's Constitution defines a unitary state and assigns territorial alteration to a nationwide procedure. The Venice Commission opinion on Crimea examines whether the local referendum was compatible with that Constitution and the conditions in which it occurred. Together the documents separate the existence of a political demand from the authority of the body and the permissibility of its method.`,
            `General Assembly Resolutions 68/262 and ES-11/4 record the international majority's position on territorial integrity and non-recognition of claimed changes. They do not measure every political attitude among residents, but directly rebut automatic status change through the organised votes.`,
          ],
          [
            `Конституція України визначає унітарний устрій і відносить зміну території до загальнонаціональної процедури. Висновок Венеційської комісії щодо Криму розглядає сумісність місцевого референдуму з цією Конституцією та умови його проведення. Разом документи відокремлюють наявність політичної вимоги від компетенції органу й допустимості способу її реалізації.`,
            `Резолюції Генеральної Асамблеї 68/262 і ES-11/4 фіксують позицію міжнародної більшості щодо територіальної цілісності й невизнання заявлених змін. Вони не вимірюють усіх політичних настроїв населення, але прямо спростовують автоматичну зміну статусу через організовані голосування.`,
          ]
        ),
      },
      {
        title: L(`Между волей населения и запретом силового передела`, `Between popular will and the bar on forcible change`, `Між волею населення та забороною силового переділу`),
        paragraphs: P(
          [
            `Одна трактовка считает выраженное большинство достаточным основанием для отделения, особенно если центральная власть утратила доверие части населения. Другая почти полностью растворяет самоопределение в существующих границах. Более строгий подход не делает ни голосование, ни границу единственным фактом: он исследует доступные внутренние формы участия, тяжесть нарушения прав, свободу процедуры и роль внешней силы.`,
            `Есть предел и у ретроспективных аналогий. Распад империи, деколонизация, выход союзной республики и голосование на территории под иностранным военным контролем имеют разную структуру. Сравнение полезно только при одинаковых критериях. Оно не должно выбирать один исторический пример за результат, игнорируя различия в статусе территории, масштабе представительства и международной реакции.`,
          ],
          [
            `One interpretation treats an expressed majority as sufficient for secession, especially when central authorities have lost part of the population's trust. Another nearly dissolves self-determination into existing borders. A stricter approach makes neither a vote nor a boundary the sole fact: it examines available forms of internal participation, the gravity of rights violations, procedural freedom, and the role of external force.`,
            `Retrospective analogies also have limits. Imperial dissolution, decolonisation, the exit of a union republic, and voting under foreign military control have different structures. Comparison is useful only under consistent criteria. It should not select a historical precedent for its desired outcome while ignoring differences in territorial status, scale of representation, and international response.`,
          ],
          [
            `Одне тлумачення вважає виражену більшість достатньою підставою для відокремлення, особливо якщо центральна влада втратила довіру частини населення. Інше майже повністю розчиняє самовизначення в наявних кордонах. Суворіший підхід не робить ані голосування, ані кордон єдиним фактом: він досліджує доступні внутрішні форми участі, тяжкість порушення прав, свободу процедури та роль зовнішньої сили.`,
            `Ретроспективні аналогії також мають межі. Розпад імперії, деколонізація, вихід союзної республіки й голосування на території під іноземним військовим контролем мають різну структуру. Порівняння корисне лише за послідовних критеріїв. Воно не повинно обирати історичний приклад за бажаним результатом, ігноруючи відмінності у статусі території, масштабі представництва та міжнародній реакції.`,
          ]
        ),
      },
    ],
  },

  'concept-evidence-trust': {
    lead: L(
      `Доверие к фактам возникает не из авторитета одной стороны, а из прозрачного пути от утверждения к источнику и проверке. Для исследования войны полезно заранее определить, что именно доказывает документ, насколько близко он расположен к событию, есть ли независимое подтверждение и какие альтернативные объяснения остаются. Такой стандарт не требует ждать абсолютной полноты перед любым выводом; он требует соразмерять силу формулировки с качеством данных и исправлять картину, когда появляются более надёжные сведения.`,
      `Trust in facts comes not from one side's authority but from a transparent path between a claim, its source, and verification. Research on war should identify in advance what a document actually proves, how close it is to the event, whether independent corroboration exists, and which alternative explanations remain. This standard does not require absolute completeness before any conclusion; it requires matching the strength of language to the quality of evidence and revising the picture when better information appears.`,
      `Довіра до фактів виникає не з авторитету однієї сторони, а з прозорого шляху від твердження до джерела й перевірки. Для дослідження війни варто заздалегідь визначити, що саме доводить документ, наскільки він близький до події, чи є незалежне підтвердження та які альтернативні пояснення залишаються. Такий стандарт не вимагає абсолютної повноти перед будь-яким висновком; він вимагає співвідносити силу формулювання з якістю даних і виправляти картину, коли з'являються надійніші відомості.`
    ),
    sections: [
      {
        title: L(`Проверяемое утверждение и достаточный вывод`, `A testable claim and a proportionate conclusion`, `Перевірюване твердження та співмірний висновок`),
        paragraphs: P(
          [
            `Первый порог — сформулировать утверждение так, чтобы можно было представить данные за и против. Дата решения, содержание нормы, число объектов и причинная роль внешнего участника требуют разных доказательств. Чем дальше вывод от непосредственно наблюдаемого факта, тем яснее должна быть цепочка рассуждения и тем важнее проверка независимыми источниками.`,
            `Полезная шкала различает подлинность документа, точность содержащегося сообщения, полноту описания и обоснованность вывода. Официальная публикация обычно хорошо подтверждает факт принятия акта или озвучивания позиции. Она может гораздо слабее подтверждать заявленный ущерб, мотив противника либо долгосрочный эффект, если автор документа одновременно участвует в событии и не раскрывает методику.`,
          ],
          [
            `The first threshold is to state a claim so that evidence for and against it can be imagined. A decision date, the content of a rule, a number of objects, and an external actor's causal role each require different proof. The farther an inference moves from a directly observed fact, the clearer its reasoning chain must be and the more important independent corroboration becomes.`,
            `A useful scale distinguishes document authenticity, accuracy of the message within it, completeness of the account, and validity of the inference. An official publication usually supports the fact that an act was adopted or a position expressed. It may support claimed damage, an adversary's motive, or long-term effect much less strongly when the author participates in the event and does not disclose a method.`,
          ],
          [
            `Перший поріг — сформулювати твердження так, щоб можна було уявити дані за і проти нього. Дата рішення, зміст норми, кількість об'єктів і причинна роль зовнішнього учасника потребують різних доказів. Що далі висновок від безпосередньо спостережуваного факту, то яснішим має бути ланцюг міркування й важливішою перевірка незалежними джерелами.`,
            `Корисна шкала розрізняє справжність документа, точність повідомлення в ньому, повноту опису та обґрунтованість висновку. Офіційна публікація зазвичай добре підтверджує факт ухвалення акта або озвучення позиції. Вона може значно слабше підтверджувати заявлену шкоду, мотив противника чи довгостроковий ефект, якщо автор документа бере участь у події й не розкриває методику.`,
          ]
        ),
      },
      {
        title: L(`Три проверки военной хронологии`, `Three tests across the war chronology`, `Три перевірки воєнної хронології`),
        paragraphs: P(
          [
            `Начало АТО 14 апреля 2014 года требует совместить государственный указ с наблюдениями ОБСЕ о захватах зданий и докладом ООН о вооружённых группах. Стамбульский раунд 29 марта 2022 года требует отличить официально озвученные предложения от подписанного договора. В обоих случаях ошибка возникает, когда один документ заставляют отвечать на более широкий вопрос, чем позволяет его назначение.`,
            `Операция «Паутина» 1 июня 2025 года даёт ещё один тип проверки: официальные сообщения подтверждают заявленную цель и версию исполнителя, однако точный ущерб и стратегические последствия требуют внешнего сопоставления. Эти три статьи показывают движение от установления участника и статуса текста к количественной и причинной оценке. Для каждой ступени нужен свой набор данных.`,
          ],
          [
            `The start of the ATO on 14 April 2014 requires the state decree to be read with OSCE observations of building seizures and the UN account of armed groups. The Istanbul round on 29 March 2022 requires official proposals to be distinguished from a signed treaty. In both cases, error arises when a single document is made to answer a broader question than its purpose permits.`,
            `Operation Spiderweb on 1 June 2025 provides another test: official statements establish the declared target and the implementer's account, while exact damage and strategic consequences require external comparison. These three articles move from identifying actors and document status to quantitative and causal assessment. Each step needs a different evidence set.`,
          ],
          [
            `Початок АТО 14 квітня 2014 року вимагає читати державний указ разом зі спостереженнями ОБСЄ про захоплення будівель і доповіддю ООН про збройні групи. Стамбульський раунд 29 березня 2022 року потребує відрізняти офіційно озвучені пропозиції від підписаного договору. В обох випадках помилка виникає, коли один документ змушують відповідати на ширше питання, ніж дозволяє його призначення.`,
            `Операція «Павутина» 1 червня 2025 року дає інший тип перевірки: офіційні повідомлення підтверджують заявлену мету й версію виконавця, але точна шкода та стратегічні наслідки потребують зовнішнього зіставлення. Ці три статті показують рух від установлення учасника й статусу тексту до кількісної та причинної оцінки. Для кожного кроку потрібен свій набір даних.`,
          ]
        ),
      },
      {
        title: L(`Иерархия документов без культа источника`, `A hierarchy of records without source worship`, `Ієрархія документів без культу джерела`),
        paragraphs: P(
          [
            `Закон и международная резолюция наиболее прямо устанавливают собственный текст, дату и юридико-политическое действие. Наблюдательная миссия описывает увиденное в пределах мандата, времени, маршрута и фактического доступа. Поэтому отсутствие объекта в отчёте означает, что миссия не зафиксировала его в этих условиях, а не доказывает всеобщее отсутствие. Ограничения движения, риски для патрулей и помехи техническим средствам дополнительно сужают охват наблюдения.`,
            `Позднейшее судебное разбирательство может использовать более широкий массив доказательств и отвечать на иной вопрос. Большая палата Европейского суда по правам человека в решении 2025 года оценивала ответственность России за нарушения в конфликте с 2014 года на основе материалов сторон и международных записей; это не делает ежедневные отчёты ОБСЕ ошибочными, а показывает различие предмета и доказательной базы. Надёжное чтение сопоставляет источники по времени, доступу, компетенции и вопросу, который каждый из них способен решить.`,
          ],
          [
            `A statute or international resolution most directly establishes its own text, date, and legal-political act. A monitoring mission describes what it observed within its mandate, time, route, and actual access. An object’s absence from a report therefore means that the mission did not record it under those conditions, not that universal absence has been proved. Movement restrictions, patrol risks, and interference with technical means narrow coverage further.`,
            `Later judicial proceedings may use a broader evidentiary record and answer a different question. In its 2025 judgment, the Grand Chamber of the European Court of Human Rights assessed Russia’s responsibility for violations in the conflict since 2014 using party submissions and international records; that does not make OSCE daily reports wrong, but shows a difference in subject and evidence base. Reliable reading compares sources by time, access, authority, and the question each can answer.`,
          ],
          [
            `Закон або міжнародна резолюція найпряміше встановлюють власний текст, дату та правово-політичну дію. Спостережна місія описує побачене в межах мандата, часу, маршруту й фактичного доступу. Тому відсутність об’єкта у звіті означає, що місія не зафіксувала його за цих умов, а не доводить загальну відсутність. Обмеження руху, ризики для патрулів і перешкоди технічним засобам додатково звужують охоплення.`,
            `Пізніший судовий розгляд може використовувати ширший масив доказів і відповідати на інше питання. Велика палата Європейського суду з прав людини у рішенні 2025 року оцінювала відповідальність Росії за порушення у конфлікті з 2014 року на основі матеріалів сторін і міжнародних записів; це не робить щоденні звіти ОБСЄ хибними, а показує відмінність предмета й доказової бази. Надійне читання зіставляє джерела за часом, доступом, компетенцією та питанням, на яке кожне здатне відповісти.`,
          ]
        ),
      },
      {
        title: L(`Скептицизм, срочность и предел проверки`, `Scepticism, urgency, and the limits of verification`, `Скептицизм, терміновість і межі перевірки`),
        paragraphs: P(
          [
            `На одном полюсе находится доверие только «своим» сообщениям, на другом — отказ признавать любой факт, пока не открыты все данные. Второй подход выглядит осторожным, но в реальности делает вывод невозможным даже при сходящихся независимых свидетельствах. Практический стандарт допускает предварительную оценку, если её язык обратим: факт, заявление стороны, вероятный вывод и непроверенная гипотеза не обозначаются одинаково.`,
            `Военная срочность иногда не позволяет дождаться полной картины перед решением, однако необходимость действовать не меняет прошлое доказательство. После события требуется аудит: какие предположения подтвердились, что оказалось ошибкой и как это влияет на более широкий вывод. Доверие растёт не от отсутствия исправлений, а от видимой способности отделить ошибку, обновить формулировку и сохранить ссылку на первичные данные.`,
          ],
          [
            `At one pole lies trust only in “our” messages; at the other, refusal to accept any fact until every record is open. The second posture appears cautious but makes conclusions impossible even when independent evidence converges. A practical standard permits preliminary assessment when its language remains reversible: fact, party claim, probable inference, and untested hypothesis are not labelled alike.`,
            `Wartime urgency may prevent waiting for a complete picture before acting, but the need to act does not strengthen prior evidence. An after-action audit is still required: which assumptions held, what proved wrong, and how that changes the wider conclusion. Trust grows not from never correcting the record, but from visibly separating error, updating wording, and retaining access to primary evidence.`,
          ],
          [
            `На одному полюсі — довіра лише до «своїх» повідомлень, на іншому — відмова визнавати будь-який факт, доки не відкрито всі дані. Друга позиція виглядає обережною, але робить висновок неможливим навіть за збіжних незалежних свідчень. Практичний стандарт допускає попередню оцінку, якщо її мова оборотна: факт, заява сторони, імовірний висновок і неперевірена гіпотеза не позначаються однаково.`,
            `Воєнна терміновість іноді не дає чекати повної картини перед рішенням, але необхідність діяти не посилює попередні докази. Після події потрібен аудит: які припущення підтвердилися, що виявилося помилкою і як це змінює ширший висновок. Довіра зростає не від відсутності виправлень, а від видимої здатності відокремити помилку, оновити формулювання й зберегти доступ до первинних даних.`,
          ]
        ),
      },
    ],
  },

  'concept-alliance-volatility': {
    lead: L(
      `Союзная поддержка меняется не только по объёму, но и по правовой форме, политической цене и горизонту действия. Заявление о солидарности, итоговая декларация саммита, поставка конкретного ресурса и договорное обязательство нельзя складывать в одну величину. Для Украины различие особенно заметно на длинной дуге от попыток сотрудничества России и НАТО до обещаний будущего членства и кризисных сигналов февраля 2022 года. Волатильность означает риск изменения курса, а не доказательство неизбежного отказа союзников.`,
      `Alliance support changes not only in volume but in legal form, political cost, and time horizon. A statement of solidarity, a summit declaration, delivery of a specific resource, and a treaty obligation cannot be treated as one quantity. For Ukraine, the distinction is especially visible across the long arc from attempted NATO–Russia cooperation to promises of future membership and the crisis signals of February 2022. Volatility means exposure to policy change, not proof that allies will inevitably withdraw.`,
      `Союзницька підтримка змінюється не лише за обсягом, а й за правовою формою, політичною ціною та горизонтом дії. Заяву про солідарність, підсумкову декларацію саміту, постачання конкретного ресурсу й договірне зобов'язання не можна складати в одну величину. Для України відмінність особливо помітна на довгій дузі від спроб співпраці Росії та НАТО до обіцянок майбутнього членства й кризових сигналів лютого 2022 року. Волатильність означає ризик зміни курсу, а не доказ неминучої відмови союзників.`
    ),
    sections: [
      {
        title: L(`Лестница обязательств и фактических действий`, `A ladder of commitments and actions`, `Драбина зобов'язань і фактичних дій`),
        paragraphs: P(
          [
            `Порог анализа начинается с классификации сигнала. Договорная гарантия, политическое обещание, стратегическая формула, бюджетное решение и уже осуществлённая поставка создают разные ожидания. Затем проверяются автор сигнала, его полномочия, внутренние процедуры государства и срок. Высказывание отдельного политика может влиять на рынок ожиданий, не связывая будущий кабинет юридически.`,
            `Волатильность можно видеть в разрыве между словами и действиями, частоте пересмотра условий, зависимости от выборов и способности получателя заменить поддержку. Однократное изменение риторики ещё не образует устойчивого тренда. Напротив, повторяемые решения нескольких институтов могут делать поддержку прочнее, даже если формулировки публичных заявлений становятся осторожнее.`,
          ],
          [
            `Analysis starts by classifying the signal. A treaty guarantee, political promise, strategic formula, budget decision, and completed delivery create different expectations. The signal's author, authority, domestic procedures, and duration must then be checked. A single politician's statement may shape expectations without legally binding a future government.`,
            `Volatility may appear in gaps between words and actions, frequent revision of conditions, dependence on elections, and the recipient's ability to replace support. One rhetorical shift does not yet form a durable trend. Conversely, repeated decisions across several institutions may make support more resilient even when public language becomes more cautious.`,
          ],
          [
            `Аналіз починається з класифікації сигналу. Договірна гарантія, політична обіцянка, стратегічна формула, бюджетне рішення та вже здійснене постачання створюють різні очікування. Далі перевіряють автора сигналу, його повноваження, внутрішні процедури держави й строк. Висловлювання окремого політика може впливати на очікування, не зв'язуючи майбутній уряд юридично.`,
            `Волатильність можна побачити в розриві між словами й діями, частоті перегляду умов, залежності від виборів і здатності отримувача замінити підтримку. Одноразова зміна риторики ще не утворює сталого тренду. Натомість повторювані рішення кількох інституцій можуть робити підтримку міцнішою, навіть якщо публічні формулювання стають обережнішими.`,
          ]
        ),
      },
      {
        title: L(`От Основополагающего акта к предвоенным сигналам`, `From the Founding Act to pre-war signals`, `Від Основоположного акта до передвоєнних сигналів`),
        paragraphs: P(
          [
            `Основополагающий акт Россия — НАТО 27 мая 1997 года фиксировал рамку сотрудничества и взаимные политические принципы после холодной войны. Бухарестская декларация 3 апреля 2008 года заявила, что Украина и Грузия станут членами НАТО, но не установила дату и не создала для Украины действующую гарантию коллективной обороны. Разница между формулами уже показывает неодинаковый вес сигналов.`,
            `Астанинская декларация ОБСЕ 3 декабря 2010 года вновь соединяла право государств выбирать механизмы безопасности с идеей неделимой безопасности. Мюнхенская речь 19 февраля 2022 года показывает украинскую оценку того, как эта архитектура работала накануне вторжения. Длинная последовательность не подтверждает единую неизменную линию: сотрудничество, открытая перспектива и кризисное обращение принадлежат разным фазам.`,
          ],
          [
            `The NATO–Russia Founding Act of 27 May 1997 recorded a framework of cooperation and mutual political principles after the Cold War. The Bucharest declaration of 3 April 2008 stated that Ukraine and Georgia would become NATO members, but set no date and created no active collective-defence guarantee for Ukraine. The difference between the formulas already shows unequal signal strength.`,
            `The OSCE Astana Commemorative Declaration of 3 December 2010 again linked states' freedom to choose security arrangements with the idea of indivisible security. The Munich speech of 19 February 2022 records Ukraine's assessment of how that architecture operated before invasion. The sequence does not prove one immutable policy: cooperation, an open-ended prospect, and a crisis appeal belong to different phases.`,
          ],
          [
            `Основоположний акт Росія — НАТО 27 травня 1997 року зафіксував рамку співпраці та взаємні політичні принципи після холодної війни. Бухарестська декларація 3 квітня 2008 року заявила, що Україна й Грузія стануть членами НАТО, але не встановила дати й не створила для України чинної гарантії колективної оборони. Різниця між формулами вже показує неоднакову вагу сигналів.`,
            `Астанинська декларація ОБСЄ 3 грудня 2010 року знову поєднала право держав обирати механізми безпеки з ідеєю неподільної безпеки. Мюнхенська промова 19 лютого 2022 року фіксує українську оцінку того, як ця архітектура працювала напередодні вторгнення. Послідовність не доводить єдиної незмінної лінії: співпраця, відкрита перспектива й кризове звернення належать до різних фаз.`,
          ]
        ),
      },
      {
        title: L(`Политические документы и границы обещанного`, `Political records and the limits of what was promised`, `Політичні документи та межі обіцяного`),
        paragraphs: P(
          [
            `Тексты НАТО и ОБСЕ надёжно устанавливают согласованные формулировки участников на дату принятия. Основополагающий акт описывает отношения Россия — НАТО; Бухарестская декларация — позицию членов альянса о будущей перспективе; Астанинская декларация — общие принципы безопасности. Ни один из этих документов нельзя без дополнительного основания читать как секретный договор о сроках или автоматическом военном ответе.`,
            `Официальная речь украинского президента в Мюнхене фиксирует требования и восприятие риска государством, но не раскрывает внутренних решений всех партнёров. Чтобы оценить устойчивость поддержки, нужны последующие бюджетные акты, поставки, санкционные решения и институциональные процедуры. Документ о намерении важен, однако фактическая стоимость исполнения и способность изменить решение устанавливаются другими свидетельствами.`,
          ],
          [
            `NATO and OSCE texts reliably establish the agreed language of participants on their adoption dates. The Founding Act describes NATO–Russia relations; the Bucharest declaration records allies' position on a future prospect; the Astana declaration states shared security principles. None can be read, without additional evidence, as a secret timetable or an automatic military-response treaty.`,
            `The Ukrainian president's official Munich speech records the state's demands and perception of risk, but not every partner's internal decisions. Assessing durable support requires later budget acts, deliveries, sanctions decisions, and institutional procedures. A statement of intent matters, while the actual cost of performance and ability to reverse course must be established through other evidence.`,
          ],
          [
            `Тексти НАТО й ОБСЄ надійно встановлюють узгоджені формулювання учасників на дату ухвалення. Основоположний акт описує відносини Росія — НАТО; Бухарестська декларація — позицію членів альянсу щодо майбутньої перспективи; Астанинська декларація — спільні принципи безпеки. Жоден із цих документів без додаткової підстави не можна читати як таємний договір про строки або автоматичну військову відповідь.`,
            `Офіційна промова президента України в Мюнхені фіксує вимоги й сприйняття ризику державою, але не розкриває внутрішніх рішень усіх партнерів. Для оцінки стійкості підтримки потрібні наступні бюджетні акти, постачання, санкційні рішення та інституційні процедури. Документ про намір важливий, однак фактичну ціну виконання і здатність змінити курс встановлюють інші свідчення.`,
          ]
        ),
      },
      {
        title: L(`Зависимость, автономия и ошибочные крайности`, `Dependence, autonomy, and mistaken extremes`, `Залежність, автономія та хибні крайнощі`),
        paragraphs: P(
          [
            `Оптимистическая трактовка принимает каждое сильное заявление за долговременную гарантию и недооценивает выборы, бюджетные ограничения и расхождение интересов. Пессимистическая заранее считает любую поддержку временной и потому игнорирует уже понесённые партнёрами издержки, созданные институты и повторяемость решений. Обеим нужен один тест: что именно стало дороже отменить и какой орган способен это отменить.`,
            `Для получателя волатильность — не только внешняя данность. Диверсификация поставщиков, совместимость систем, собственное производство и ясные политические цели меняют цену возможного колебания. Но автономия не равна изоляции: коалиция может быть устойчивее одиночного курса. Корректный анализ строит несколько сценариев поддержки и не превращает текущую риторику ни в вечное обязательство, ни в неизбежное предательство.`,
          ],
          [
            `An optimistic reading treats every strong statement as a long-term guarantee and understates elections, budget constraints, and divergent interests. A pessimistic reading assumes all support is temporary and ignores costs already borne by partners, institutions already built, and repeated decisions. Both need the same test: what has become costly to reverse, and which body has the power to reverse it.`,
            `For the recipient, volatility is not purely external. Supplier diversification, system compatibility, domestic production, and clear political objectives change the cost of a possible swing. Yet autonomy is not isolation: a coalition may be more durable than a solitary course. Proper analysis builds several support scenarios and turns current rhetoric into neither an eternal commitment nor an inevitable betrayal.`,
          ],
          [
            `Оптимістичне тлумачення сприймає кожну сильну заяву як довгострокову гарантію й недооцінює вибори, бюджетні обмеження та розходження інтересів. Песимістичне заздалегідь вважає будь-яку підтримку тимчасовою й тому ігнорує вже понесені партнерами витрати, створені інституції та повторюваність рішень. Обом потрібен один тест: що саме стало дорожче скасувати і який орган здатен це зробити.`,
            `Для отримувача волатильність — не лише зовнішня даність. Диверсифікація постачальників, сумісність систем, власне виробництво та ясні політичні цілі змінюють ціну можливого коливання. Але автономія не дорівнює ізоляції: коаліція може бути стійкішою за одиночний курс. Коректний аналіз будує кілька сценаріїв підтримки й не перетворює поточну риторику ані на вічне зобов'язання, ані на неминучу зраду.`,
          ]
        ),
      },
    ],
  },

  'concept-captive-verification': {
    lead: L(
      `Сообщение о пленении, обращении с пленным или принадлежности человека к особому подразделению затрагивает одновременно факт, правовой статус и безопасность конкретного лица. Поэтому к нему неприменим принцип «достаточно яркой фотографии» или «достаточно заявления ведомства». Проверка должна установить личность, обстоятельства попадания под власть стороны, статус в конфликте, непрерывность хранения данных и компетенцию органа, который делает вывод. Публичность важна для ответственности, но не должна подвергать пленного дополнительному риску или превращать его в средство пропаганды.`,
      `A report about capture, treatment of a captive, or a person's membership in a special unit concerns fact, legal status, and the safety of an individual at the same time. A striking photograph or an agency statement is therefore insufficient. Verification must establish identity, circumstances in which the person came under a party's control, status in the conflict, continuity of the evidence record, and the authority of the body reaching a conclusion. Public scrutiny supports accountability but should not expose the captive to added risk or turn that person into a propaganda instrument.`,
      `Повідомлення про полонення, поводження з полоненим або належність людини до спеціального підрозділу стосується водночас факту, правового статусу й безпеки конкретної особи. Тому яскравої фотографії чи заяви відомства недостатньо. Перевірка має встановити особу, обставини потрапляння під владу сторони, статус у конфлікті, безперервність збереження даних і компетенцію органу, що робить висновок. Публічність важлива для відповідальності, але не повинна створювати додатковий ризик для полоненого чи перетворювати його на засіб пропаганди.`
    ),
    sections: [
      {
        title: L(`Четыре элемента проверяемого сообщения`, `Four elements of a verifiable account`, `Чотири елементи перевірюваного повідомлення`),
        paragraphs: P(
          [
            `Минимальная проверка разделяет существование человека, факт удержания, его юридический статус и конкретное утверждение об обращении. Имя в списке ещё не показывает, где и кем человек удерживается; видеозапись не всегда устанавливает дату и добровольность слов; военная форма не доказывает должность или участие в определённой операции. Для каждого элемента нужен собственный набор подтверждений.`,
            `Следующий порог — происхождение данных. Важно сохранить исходный файл, время получения, последовательность передачи и сведения о лице, проводившем опознание. Медицинское заключение, регистрационные данные, показания освобождённого и сообщение удерживающей стороны могут дополнять друг друга, но их нельзя механически суммировать, если они зависят от одного первичного источника.`,
          ],
          [
            `Minimum verification separates the person's existence, the fact of detention, legal status, and a specific claim about treatment. A name on a list does not show where or by whom the person is held; a video may not establish its date or whether words were voluntary; a uniform does not prove a role or participation in a particular operation. Each element requires its own evidence.`,
            `The next threshold concerns provenance. The original file, time of receipt, chain of transfer, and identity of the person making an identification matter. A medical finding, registration entry, released captive's testimony, and statement by the holding party may reinforce one another, but cannot be added mechanically if they all depend on a single initial source.`,
          ],
          [
            `Мінімальна перевірка розділяє існування людини, факт утримання, її правовий статус і конкретне твердження про поводження. Ім'я у списку ще не показує, де й ким особу утримують; відеозапис не завжди встановлює дату та добровільність слів; військова форма не доводить посаду чи участь у певній операції. Для кожного елемента потрібен власний набір підтверджень.`,
            `Наступний поріг стосується походження даних. Важливо зберегти вихідний файл, час отримання, послідовність передачі та відомості про особу, яка проводила впізнання. Медичний висновок, реєстраційні дані, свідчення звільненого й повідомлення сторони, що утримує, можуть доповнювати одне одного, але їх не можна механічно складати, якщо всі вони залежать від одного первинного джерела.`,
          ]
        ),
      },
      {
        title: L(`От атрибуции участников к массовой войне`, `From actor attribution to full-scale war`, `Від атрибуції учасників до повномасштабної війни`),
        paragraphs: P(
          [
            `Статья о начале АТО 14 апреля 2014 года показывает исходную проблему атрибуции: официальные решения, наблюдения ОБСЕ и доклад ООН по-разному описывали вооружённые группы, граждан России и действия украинских органов. Уже тогда имя, гражданство, командная роль и правовой статус требовали раздельного установления. Эта логика переносится и на любое сообщение о пленном.`,
            `Полномасштабное вторжение 24 февраля 2022 года резко увеличило число участников, мест удержания и взаимных заявлений. Объявление об аннексии 30 сентября 2022 года добавило спорные изменения внутреннего статуса территорий, но не изменило автоматически международно-правовую защиту лиц в конфликте. Хронология объясняет масштаб задачи, не подтверждая конкретное обвинение без его доказательств.`,
          ],
          [
            `The article on the start of the ATO on 14 April 2014 shows the initial attribution problem: official decisions, OSCE observations, and a UN report described armed groups, Russian citizens, and Ukrainian state action from different vantage points. Even then, name, nationality, command role, and legal status required separate establishment. The same logic applies to every captive report.`,
            `The full-scale invasion of 24 February 2022 sharply increased the number of participants, places of detention, and competing claims. The claimed annexation of 30 September 2022 added disputed domestic status changes for territory but did not automatically alter international legal protection for individuals in the conflict. Chronology explains scale; it does not prove a particular allegation.`,
          ],
          [
            `Стаття про початок АТО 14 квітня 2014 року показує початкову проблему атрибуції: офіційні рішення, спостереження ОБСЄ та доповідь ООН по-різному описували збройні групи, громадян Росії й дії українських органів. Уже тоді ім'я, громадянство, командна роль і правовий статус потребували окремого встановлення. Ця логіка переноситься на кожне повідомлення про полоненого.`,
            `Повномасштабне вторгнення 24 лютого 2022 року різко збільшило кількість учасників, місць утримання і взаємних заяв. Оголошення про анексію 30 вересня 2022 року додало спірні зміни внутрішнього статусу територій, але не змінило автоматично міжнародно-правовий захист осіб у конфлікті. Хронологія пояснює масштаб завдання, не доводячи конкретного звинувачення без його доказів.`,
          ]
        ),
      },
      {
        title: L(`Женевская конвенция задаёт обязанности, не факты дела`, `The Geneva Convention sets duties, not case facts`, `Женевська конвенція встановлює обов'язки, а не факти справи`),
        paragraphs: P(
          [
            `Третья Женевская конвенция устанавливает правовой режим обращения с военнопленными и обязанности удерживающей стороны. Её официальный текст позволяет проверить применимые стандарты защиты и не зависит от политической оценки пленного. Но сама конвенция не подтверждает, что названный человек действительно захвачен, к какому формированию он относился или что конкретное нарушение произошло.`,
            `Доклады международных наблюдательных учреждений и сведения компетентных органов могут устанавливать более узкие обстоятельства в пределах доступа и методики. Публичное расследование должно различать регистрационную функцию, гуманитарную коммуникацию, уголовное установление и журналистскую проверку. Название организации не заменяет чтение её мандата: отсутствие публичной детали иногда отражает защиту человека, а не отсутствие работы.`,
          ],
          [
            `The Third Geneva Convention establishes the legal regime for treatment of prisoners of war and the duties of a detaining power. Its official text makes the applicable protections verifiable without depending on a political judgement about the captive. The Convention itself, however, does not prove that a named person was captured, belonged to a particular formation, or suffered a particular violation.`,
            `Reports by international monitoring institutions and records from competent authorities may establish narrower circumstances within their access and methods. Public inquiry must distinguish registration, humanitarian communication, criminal determination, and journalistic verification. An organisation's name does not replace reading its mandate: the absence of public detail may protect a person rather than indicate that no work occurred.`,
          ],
          [
            `Третя Женевська конвенція встановлює правовий режим поводження з військовополоненими та обов'язки сторони, що утримує. Її офіційний текст дає змогу перевірити застосовні стандарти захисту незалежно від політичної оцінки полоненого. Проте сама конвенція не доводить, що названа особа справді захоплена, належала до певного формування або зазнала конкретного порушення.`,
            `Доповіді міжнародних спостережних установ і відомості компетентних органів можуть установлювати вужчі обставини в межах доступу й методики. Публічне розслідування має розрізняти реєстраційну функцію, гуманітарну комунікацію, кримінальне встановлення та журналістську перевірку. Назва організації не замінює читання її мандата: відсутність публічної деталі іноді захищає людину, а не свідчить про відсутність роботи.`,
          ]
        ),
      },
      {
        title: L(`Между срочным оглашением и защитой человека`, `Between urgent disclosure and protecting the person`, `Між терміновим оприлюдненням і захистом людини`),
        paragraphs: P(
          [
            `Родственникам и обществу нужна быстрая информация, тогда как следствию и гуманитарным организациям может требоваться непубличная проверка. Немедленное распространение изображения способно помочь опознанию, но также раскрыть чувствительные данные, закрепить ошибочную идентификацию или создать давление на удерживаемого. Решение о публикации должно учитывать цель, минимизацию данных и возможность исправления.`,
            `Крайности одинаково вредны. Безоговорочное принятие заявления стороны превращает пленного в доказательство заранее выбранной версии; тотальное недоверие обесценивает сходящиеся данные и откладывает помощь. Ответственный вывод имеет узкий объём: что установлено о личности и удержании, кем и каким способом; что относится к правовой квалификации; и какие обстоятельства пока требуют доступа компетентного независимого проверяющего.`,
          ],
          [
            `Families and the public need rapid information, while investigators and humanitarian organisations may require non-public verification. Immediate circulation of an image may assist identification but also expose sensitive data, entrench a mistaken identity, or place pressure on the detainee. A publication decision should consider purpose, data minimisation, and the ability to correct.`,
            `Both extremes are harmful. Uncritical acceptance of a party's statement turns the captive into evidence for a predetermined account; total disbelief discounts converging evidence and delays assistance. A responsible conclusion remains narrow: what is established about identity and detention, by whom and by what method; what belongs to legal classification; and which circumstances still require access by a competent independent verifier.`,
          ],
          [
            `Родичам і суспільству потрібна швидка інформація, тоді як слідству й гуманітарним організаціям може бути потрібна непублічна перевірка. Негайне поширення зображення здатне допомогти впізнанню, але також розкрити чутливі дані, закріпити помилкову ідентифікацію або створити тиск на утримуваного. Рішення про публікацію має враховувати мету, мінімізацію даних і можливість виправлення.`,
            `Обидві крайнощі шкідливі. Беззастережне прийняття заяви сторони перетворює полоненого на доказ наперед обраної версії; тотальна недовіра знецінює збіжні дані й відкладає допомогу. Відповідальний висновок має вузький обсяг: що встановлено про особу й утримання, ким і яким способом; що належить до правової кваліфікації; і які обставини ще потребують доступу компетентного незалежного перевіряльника.`,
          ]
        ),
      },
    ],
  },

  'concept-ceasefire-sequencing': {
    lead: L(
      `Последовательность прекращения огня — это спор не о желательности снижения насилия, а о том, в каком порядке выполнять взаимозависимые меры. Безопасность, отвод сил, наблюдение, политические решения, выборы, контроль границы и правовой статус могут поддерживать друг друга либо блокироваться, если каждая сторона требует выполнения чужого шага первой. Украинский опыт Минска показывает, что перечисление мер в одном документе ещё не создаёт бесспорного календаря, способа принуждения и общего понимания того, когда условие считается выполненным.`,
      `Ceasefire sequencing is a dispute not about whether violence should decline, but about the order in which interdependent measures must occur. Security, force withdrawal, monitoring, political decisions, elections, border control, and legal status may reinforce one another—or become blocked when each party demands the other's step first. Ukraine's Minsk experience shows that listing measures in one document does not by itself create an uncontested timetable, enforcement mechanism, or common definition of when a condition has been fulfilled.`,
      `Послідовність припинення вогню — це суперечка не про бажаність зменшення насильства, а про порядок виконання взаємозалежних заходів. Безпека, відведення сил, спостереження, політичні рішення, вибори, контроль кордону та правовий статус можуть підтримувати одне одного або блокуватися, якщо кожна сторона вимагає спочатку чужого кроку. Український досвід Мінська показує, що перелік заходів в одному документі ще не створює безспірного календаря, механізму примусу та спільного розуміння виконаної умови.`
    ),
    sections: [
      {
        title: L(`Зависимые шаги и измеримый переход`, `Dependent steps and measurable transition`, `Залежні кроки та вимірюваний перехід`),
        paragraphs: P(
          [
            `Рабочая последовательность должна назвать начальный шаг, исполнителя, срок, способ наблюдения и последствие нарушения. Если два шага объективно требуют параллельного движения, тексту нужен механизм синхронизации. Формула «сначала безопасность» остаётся неполной без определения уровня насилия и контроля; формула «сначала политика» — без условий свободного участия и исполнения решения.`,
            `Порог исполнения нельзя определять только самоотчётом стороны. Нужны наблюдаемые показатели: зафиксированное прекращение огня, доступ миссии, отвод обозначенных сил, принятый акт или фактическая передача функции. При этом единичное нарушение не всегда отменяет весь процесс, а систематическое несоблюдение нельзя скрыть средним показателем. Механизм должен различать сбой, спор и отказ.`,
          ],
          [
            `A workable sequence must identify the first step, responsible actor, deadline, monitoring method, and consequence of breach. If two steps objectively require parallel movement, the text needs a synchronisation mechanism. “Security first” remains incomplete without defining a threshold for violence and control; “politics first” is incomplete without conditions for free participation and implementation.`,
            `Performance cannot be defined solely by a party's own report. Observable indicators are needed: a recorded halt in fire, mission access, withdrawal of designated forces, adoption of an act, or actual transfer of a function. A single breach may not collapse the process, while systematic non-compliance cannot be hidden by an average. The mechanism must distinguish incident, dispute, and refusal.`,
          ],
          [
            `Робоча послідовність має назвати початковий крок, виконавця, строк, спосіб спостереження та наслідок порушення. Якщо два кроки об'єктивно потребують паралельного руху, тексту потрібен механізм синхронізації. Формула «спочатку безпека» лишається неповною без визначення рівня насильства й контролю; формула «спочатку політика» — без умов вільної участі та виконання рішення.`,
            `Виконання не можна визначати лише самозвітом сторони. Потрібні спостережувані показники: зафіксоване припинення вогню, доступ місії, відведення визначених сил, ухвалений акт або фактична передача функції. Окреме порушення не завжди руйнує весь процес, а систематичне невиконання не можна приховати середнім показником. Механізм має розрізняти інцидент, спір і відмову.`,
          ]
        ),
      },
      {
        title: L(`Минская схема и стамбульская пауза`, `The Minsk scheme and the Istanbul opening`, `Мінська схема та стамбульське вікно`),
        paragraphs: P(
          [
            `Комплекс мер 12 февраля 2015 года связал прекращение огня и отвод вооружений с местными выборами, особым порядком, восстановлением контроля границы и выводом иностранных формирований. Спор возник не только из-за политической воли, но и из-за разных чтений очередности. Статья о Минске показывает структуру узла, а не простую историю одного невыполненного обещания.`,
            `Полномасштабное вторжение 24 февраля 2022 года разрушило прежнюю рамку, после чего стамбульский раунд 29 марта обсуждал нейтральный статус и гарантии безопасности на новой стадии войны. Официальные сообщения называли предложения и прогресс, но не подписанное соглашение. Сопоставление дат показывает: новая переговорная возможность не наследовала автоматически ни исполнение Минска, ни готовый механизм прекращения боёв.`,
          ],
          [
            `The Package of Measures of 12 February 2015 linked ceasefire and weapons withdrawal to local elections, special arrangements, restoration of border control, and withdrawal of foreign formations. Dispute arose not only from political will but from different readings of order. The Minsk article reveals a sequencing knot, not a simple story of one broken promise.`,
            `The full-scale invasion of 24 February 2022 destroyed the earlier frame, after which the Istanbul round of 29 March discussed neutral status and security guarantees at a new stage of war. Official messages described proposals and progress, but no signed agreement. The dates show that the new negotiating opportunity inherited neither Minsk implementation nor a ready-made mechanism for stopping combat.`,
          ],
          [
            `Комплекс заходів 12 лютого 2015 року пов'язав припинення вогню й відведення озброєнь із місцевими виборами, особливим порядком, відновленням контролю кордону та виведенням іноземних формувань. Суперечка виникла не лише через політичну волю, а й через різні прочитання черговості. Стаття про Мінськ показує вузол послідовності, а не просту історію однієї невиконаної обіцянки.`,
            `Повномасштабне вторгнення 24 лютого 2022 року зруйнувало попередню рамку, після чого стамбульський раунд 29 березня обговорював нейтральний статус і гарантії безпеки на новому етапі війни. Офіційні повідомлення називали пропозиції та прогрес, але не підписану угоду. Зіставлення дат показує: нова переговорна можливість не успадкувала автоматично ані виконання Мінська, ані готового механізму зупинки боїв.`,
          ]
        ),
      },
      {
        title: L(`Текст мер, международное одобрение и пробел исполнения`, `Measures, endorsement, and the implementation gap`, `Заходи, схвалення та прогалина виконання`),
        paragraphs: P(
          [
            `Документ ОБСЕ точно устанавливает согласованный перечень Минских мер, а резолюция Совета Безопасности № 2202 одобряет его и призывает к исполнению. Эти источники позволяют проверить формулировки, участников и связь элементов. Они не создают отдельный орган, который автоматически разрешает каждое разногласие о приоритете, и не доказывают фактическое исполнение только фактом принятия текста.`,
            `Официальные заявления украинской делегации и турецкого посредника 29–31 марта 2022 года устанавливают стадию предложений и наличие нерешённых вопросов. Они не содержат подписанного календаря прекращения огня. При чтении документов важно не дорисовывать отсутствующее приложение: гарант, процедура проверки, последствия нарушения и момент перехода к следующему шагу должны быть найдены в тексте либо обозначены как предмет будущего согласования.`,
          ],
          [
            `The OSCE document precisely establishes the agreed Minsk measures, while Security Council Resolution 2202 endorses them and calls for implementation. These sources make wording, participants, and links among elements verifiable. They do not create a body that automatically resolves every priority dispute, nor do they prove performance merely because the text was adopted.`,
            `Official statements by the Ukrainian delegation and Turkish mediator on 29–31 March 2022 establish a proposal stage and unresolved issues. They contain no signed ceasefire timetable. A reader should not invent a missing annex: guarantor, verification process, consequences of breach, and transition to the next step must appear in the text or be identified as matters still to be agreed.`,
          ],
          [
            `Документ ОБСЄ точно встановлює узгоджений перелік Мінських заходів, а резолюція Ради Безпеки № 2202 схвалює його й закликає до виконання. Ці джерела дають змогу перевірити формулювання, учасників і зв'язок елементів. Вони не створюють органу, що автоматично розв'язує кожну суперечку про пріоритет, і не доводять фактичного виконання самим ухваленням тексту.`,
            `Офіційні заяви української делегації та турецького посередника 29–31 березня 2022 року встановлюють стадію пропозицій і наявність невирішених питань. Вони не містять підписаного календаря припинення вогню. Читач не повинен домальовувати відсутній додаток: гарант, процедура перевірки, наслідки порушення та момент переходу до наступного кроку мають бути в тексті або позначені як предмет майбутньої згоди.`,
          ]
        ),
      },
      {
        title: L(`Цена немедленной остановки и риск непрочной схемы`, `The value of an immediate halt and the risk of a brittle scheme`, `Ціна негайної зупинки та ризик крихкої схеми`),
        paragraphs: P(
          [
            `Подход «сначала тишина» обоснован немедленным сокращением смертей и разрушений; он допускает перенос трудных политических вопросов на более безопасный этап. Возражение состоит в том, что пауза без контроля и гарантий может закрепить военное преимущество и подготовить новую атаку. Подход «сначала устойчивые условия» отвечает на этот риск, но способен превратить полноту решения в условие бесконечного продолжения боёв.`,
            `Компромисс не обязательно означает одну линейную очередь. Возможны параллельные дорожки, обратимые промежуточные шаги, автоматические последствия за нарушение и поэтапное расширение контроля. Предел статьи — она не выбирает конкретную территориальную сделку. Она задаёт тест: уменьшает ли схема насилие сейчас, не лишая стороны способа проверить исполнение и выйти из цикла взаимных предварительных условий.`,
          ],
          [
            `The “silence first” approach is grounded in the immediate reduction of death and destruction and permits difficult political issues to move to a safer stage. The objection is that a pause without monitoring and guarantees may entrench military advantage and prepare another attack. “Durable conditions first” addresses that risk but can turn a complete settlement into a condition for endless fighting.`,
            `Compromise need not be a single linear order. Parallel tracks, reversible interim steps, automatic consequences for breach, and phased expansion of control are possible. This article does not select a territorial bargain. It supplies a test: does the scheme reduce violence now without depriving the parties of a way to verify performance and escape a cycle of reciprocal preconditions?`,
          ],
          [
            `Підхід «спочатку тиша» обґрунтований негайним скороченням смертей і руйнувань; він дозволяє перенести складні політичні питання на безпечніший етап. Заперечення полягає в тому, що пауза без контролю й гарантій може закріпити військову перевагу та підготувати нову атаку. Підхід «спочатку стійкі умови» відповідає на цей ризик, але здатен перетворити повноту рішення на умову нескінченного продовження боїв.`,
            `Компроміс не обов'язково означає одну лінійну чергу. Можливі паралельні доріжки, оборотні проміжні кроки, автоматичні наслідки за порушення та поетапне розширення контролю. Межа статті — вона не обирає конкретну територіальну угоду. Вона задає тест: чи зменшує схема насильство зараз, не позбавляючи сторони способу перевірити виконання й вийти з циклу взаємних попередніх умов.`,
          ]
        ),
      },
    ],
  },

  'concept-cause-vs-justification': {
    lead: L(
      `Причинное объяснение отвечает, почему решение стало возможным или вероятным; правовое и моральное оправдание — было ли действие допустимым. Эти вопросы могут использовать одни исторические факты, но требуют разных правил вывода. Провал переговоров, страх расширения альянса, внутренняя мобилизация и взаимное восприятие угроз способны войти в причинную цепочку войны. Ни один из этих факторов сам по себе не отменяет запрет применения силы и не распределяет ответственность без анализа конкретных решений.`,
      `A causal explanation asks why a decision became possible or likely; legal and moral justification asks whether the action was permissible. The questions may use some of the same history but follow different rules of inference. Failed negotiations, fear of alliance enlargement, domestic mobilisation, and mutual threat perception may enter a causal chain of war. None by itself displaces the prohibition on force or allocates responsibility without analysis of particular decisions.`,
      `Причинне пояснення відповідає, чому рішення стало можливим або ймовірним; правове й моральне виправдання — чи була дія допустимою. Ці питання можуть використовувати ті самі історичні факти, але потребують різних правил висновку. Провал переговорів, страх розширення альянсу, внутрішня мобілізація та взаємне сприйняття загроз здатні входити до причинного ланцюга війни. Жоден із цих чинників сам по собі не скасовує заборони сили й не розподіляє відповідальність без аналізу конкретних рішень.`
    ),
    sections: [
      {
        title: L(`Два вопроса и два порога`, `Two questions and two thresholds`, `Два питання та два пороги`),
        paragraphs: P(
          [
            `Причинный тезис должен назвать механизм: какой актор получил новую информацию или стимул, какое решение изменилось и почему без предполагаемого фактора исход был бы менее вероятен. Простая последовательность событий ещё не доказывает причинность. Чем больше факторов действовало одновременно, тем осторожнее утверждение о единственной или решающей причине.`,
            `Оправдание требует отдельного нормативного основания. Для юридической оценки проверяются применимые правила, факты, полномочия и заявленное исключение; для моральной — ценности, соразмерность и доступные альтернативы. Фраза «можно было предвидеть реакцию» описывает риск, но не передаёт право решать тому, кто эту реакцию осуществил.`,
          ],
          [
            `A causal claim must identify a mechanism: which actor received new information or incentives, which decision changed, and why the outcome would have been less likely without the proposed factor. Sequence alone does not establish causation. The more factors acted simultaneously, the more cautious a claim of one decisive cause must be.`,
            `Justification needs a separate normative ground. Legal assessment checks applicable rules, facts, authority, and any claimed exception; moral assessment examines values, proportionality, and available alternatives. Saying that a reaction was foreseeable describes risk but does not transfer the right to decide to the actor who carried out that reaction.`,
          ],
          [
            `Причинна теза має назвати механізм: який учасник отримав нову інформацію або стимул, яке рішення змінилося і чому без передбачуваного чинника результат був би менш імовірним. Проста послідовність подій ще не доводить причинності. Що більше чинників діяло одночасно, то обережнішим має бути твердження про одну вирішальну причину.`,
            `Виправдання потребує окремої нормативної підстави. Для правової оцінки перевіряють застосовні правила, факти, повноваження й заявлений виняток; для моральної — цінності, пропорційність і доступні альтернативи. Фраза «реакцію можна було передбачити» описує ризик, але не передає право вирішувати тому, хто цю реакцію здійснив.`,
          ]
        ),
      },
      {
        title: L(`Дипломатический провал и решение о вторжении`, `Diplomatic failure and the decision to invade`, `Дипломатичний провал і рішення про вторгнення`),
        paragraphs: P(
          [
            `Минский комплекс мер 12 февраля 2015 года показывает длительный спор о безопасности, политических шагах и контроле границы. Мюнхенская речь 19 февраля 2022 года фиксирует украинское восприятие угроз и неудовлетворённость устройством безопасности. Оба материала помогают реконструировать предысторию, но ни один не устанавливает неизбежность следующего решения или отсутствие иных дипломатических вариантов.`,
            `Полномасштабное вторжение 24 февраля 2022 года является отдельным актом, который оценивается по своим основаниям и последствиям. Стамбульский раунд 29 марта показывает, что переговоры оставались возможны уже после начала войны, хотя подписанного соглашения не возникло. Эта последовательность мешает двум упрощениям: будто предыстории не существовало и будто предыстория автоматически разрешила применение силы.`,
          ],
          [
            `The Minsk Package of Measures of 12 February 2015 shows a prolonged dispute over security, political steps, and border control. The Munich speech of 19 February 2022 records Ukraine's threat perception and dissatisfaction with the security order. Both help reconstruct background, but neither establishes that the next decision was inevitable or that no diplomatic alternatives remained.`,
            `The full-scale invasion of 24 February 2022 is a separate act assessed through its own grounds and consequences. The Istanbul round of 29 March shows that negotiation remained possible after the war began, although no signed settlement emerged. This sequence prevents two simplifications: that there was no background, or that the background automatically authorised force.`,
          ],
          [
            `Мінський комплекс заходів 12 лютого 2015 року показує тривалу суперечку про безпеку, політичні кроки й контроль кордону. Мюнхенська промова 19 лютого 2022 року фіксує українське сприйняття загроз і невдоволення устроєм безпеки. Обидва матеріали допомагають реконструювати передісторію, але жоден не встановлює неминучості наступного рішення або відсутності інших дипломатичних варіантів.`,
            `Повномасштабне вторгнення 24 лютого 2022 року є окремим актом, який оцінюють за власними підставами й наслідками. Стамбульський раунд 29 березня показує, що переговори залишалися можливими вже після початку війни, хоча підписаної угоди не виникло. Ця послідовність заважає двом спрощенням: нібито передісторії не було і нібито вона автоматично дозволила застосування сили.`,
          ]
        ),
      },
      {
        title: L(`Устав ООН и документированная предыстория`, `The UN Charter and the documented background`, `Статут ООН і документована передісторія`),
        paragraphs: P(
          [
            `Устав ООН закрепляет запрет угрозы силой и её применения и содержит рамку самообороны. Это отправная точка юридической оценки, а не схема исторических мотивов. Резолюция Генеральной Ассамблеи ES-11/1 квалифицирует международную реакцию на вторжение и требует прекращения применения силы. Она не заменяет исследование того, как формировалось решение внутри каждого государства.`,
            `Опубликованный ОБСЕ Минский комплекс мер и выступление президента Украины на Мюнхенской конференции создают проверяемую хронологию согласованных шагов и публично заявленного восприятия угроз. Они способны подтвердить, что спор и восприятие угрозы существовали. Чтобы превратить это в причинный вывод, нужны данные о процессе принятия решения; чтобы превратить в правовое исключение, нужна применимая норма и факты, удовлетворяющие её условиям.`,
          ],
          [
            `The UN Charter sets the prohibition on the threat or use of force and provides the framework of self-defence. It is the starting point for legal assessment, not a model of historical motives. General Assembly Resolution ES-11/1 records the international response to the invasion and demands an end to the use of force. It does not replace research into how decisions formed within each state.`,
            `The Minsk Package of Measures published by the OSCE and the Ukrainian president's Munich Conference address create a verifiable chronology of agreed steps and publicly stated threat perception. They can establish that a dispute and threat perception existed. Turning that into a causal inference requires evidence of decision-making; turning it into a legal exception requires an applicable rule and facts that satisfy its conditions.`,
          ],
          [
            `Статут ООН закріплює заборону погрози силою та її застосування й містить рамку самооборони. Це вихідна точка правової оцінки, а не схема історичних мотивів. Резолюція Генеральної Асамблеї ES-11/1 фіксує міжнародну реакцію на вторгнення й вимагає припинити застосування сили. Вона не замінює дослідження того, як формувалося рішення всередині кожної держави.`,
            `Опублікований ОБСЄ Мінський комплекс заходів і виступ президента України на Мюнхенській конференції створюють перевірювану хронологію погоджених кроків і публічно заявленого сприйняття загроз. Вони здатні підтвердити, що суперечка та сприйняття загрози існували. Для причинного висновку потрібні дані про процес ухвалення рішення; для правового винятку — застосовна норма й факти, що відповідають її умовам.`,
          ]
        ),
      },
      {
        title: L(`Объяснять без оправдания и судить без мифа`, `Explaining without excusing; judging without myth`, `Пояснювати без виправдання й судити без міфу`),
        paragraphs: P(
          [
            `Опасение состоит в том, что обсуждение причин «нормализует» агрессию. Но отказ от причинного анализа лишает возможности понимать предупреждающие сигналы и предотвращать повторение. Обратная опасность — представить накопленные обиды как механическую силу, снимающую выбор и ответственность с руководителей. Объяснение становится честным, когда сохраняет агентность и рассматривает альтернативные решения в той же обстановке.`,
            `Моральная оценка также не должна опираться на вымышленную историю. Незаконность действия не делает любое описание его предыстории точным; наличие реальной причины не делает действие допустимым. Статья ограничивается дисциплиной вывода: сначала устанавливается событие и механизм, затем отдельно применяются правовые и моральные критерии, а язык ответственности относится к тому решению, которое каждый актор действительно принял.`,
          ],
          [
            `Some fear that discussing causes “normalises” aggression. Yet rejecting causal analysis prevents recognition of warning signs and recurrence prevention. The opposite danger is to depict accumulated grievances as a mechanical force that removes choice and responsibility from leaders. Explanation remains honest when it preserves agency and considers alternative decisions available in the same setting.`,
            `Moral judgement should not rest on invented history either. An act's illegality does not make every account of its background accurate; a genuine cause does not make the act permissible. This article imposes a discipline of inference: establish the event and mechanism first, then apply legal and moral criteria separately, and assign responsibility to the decision each actor actually made.`,
          ],
          [
            `Дехто побоюється, що обговорення причин «нормалізує» агресію. Проте відмова від причинного аналізу позбавляє можливості розпізнавати попереджувальні сигнали й запобігати повторенню. Протилежна небезпека — зобразити накопичені образи як механічну силу, що знімає вибір і відповідальність із керівників. Пояснення лишається чесним, коли зберігає суб'єктність і розглядає альтернативні рішення в тій самій обстановці.`,
            `Моральна оцінка також не повинна спиратися на вигадану історію. Незаконність дії не робить кожний опис її передісторії точним; наявність реальної причини не робить дію допустимою. Стаття встановлює дисципліну висновку: спочатку визначають подію й механізм, потім окремо застосовують правові та моральні критерії, а відповідальність відносять до рішення, яке кожний учасник справді ухвалив.`,
          ]
        ),
      },
    ],
  },

  'concept-war-endgame': {
    lead: L(
      `Завершение войны — не одна дата, а переход между прекращением крупномасштабных боёв, политическим соглашением, правовым урегулированием и устойчивым послевоенным порядком. Эти этапы могут совпасть, разойтись на годы или остаться незавершёнными. Для Украины сценарий окончания должен отвечать как минимум на вопросы безопасности, территории, гарантий, внутренней легитимности, возвращения людей и способности институтов выполнять договорённости. Назвать желаемый итог недостаточно: необходим механизм, связывающий военную позицию сегодня с управляемым состоянием после прекращения огня.`,
      `War termination is not a single date but a transition among the end of large-scale combat, a political agreement, legal settlement, and a durable post-war order. These stages may coincide, diverge for years, or remain incomplete. For Ukraine, an endgame must address security, territory, guarantees, domestic legitimacy, return of people, and institutions capable of carrying out commitments. Naming a desired outcome is insufficient; a mechanism must connect today's military position to a governable condition after firing stops.`,
      `Завершення війни — не одна дата, а перехід між припиненням масштабних боїв, політичною угодою, правовим урегулюванням і стійким повоєнним порядком. Ці етапи можуть збігтися, розійтися на роки або лишитися незавершеними. Для України сценарій завершення має відповісти щонайменше на питання безпеки, території, гарантій, внутрішньої легітимності, повернення людей і здатності інституцій виконувати домовленості. Назвати бажаний підсумок недостатньо: потрібен механізм, що пов'язує сьогоднішню військову позицію з керованим станом після припинення вогню.`
    ),
    sections: [
      {
        title: L(`Конечное состояние вместо лозунга`, `An end state instead of a slogan`, `Кінцевий стан замість гасла`),
        paragraphs: P(
          [
            `Полноценный сценарий определяет участников, последовательность шагов, предел допустимого риска и признаки устойчивости. «Победа», «мир» или «заморозка» слишком широки без ответа, кто контролирует силу, какие обязательства вступают в действие, как решаются споры и что произойдёт при нарушении. Военный результат становится политическим лишь через институт, решение или признанное правило.`,
            `Следует различать минимальную цель прекращения массового вреда и максимальную программу устранения всех причин конфликта. Первая может быть достижима быстрее, но оставить опасную неопределённость; вторая может оказаться недостижимым условием остановки огня. Сценарное мышление строит несколько промежуточных состояний и для каждого оценивает безопасность, законность, стоимость и обратимость.`,
          ],
          [
            `A complete scenario identifies participants, sequence, acceptable risk, and indicators of durability. “Victory,” “peace,” or “freeze” are too broad unless they say who controls force, which commitments take effect, how disputes are resolved, and what follows a breach. A military outcome becomes political only through an institution, decision, or recognised rule.`,
            `The minimum aim of ending mass harm should be distinguished from the maximum programme of removing every conflict driver. The former may be reached faster while leaving dangerous uncertainty; the latter may become an unattainable condition for stopping fire. Scenario analysis builds several intermediate states and evaluates security, legality, cost, and reversibility for each.`,
          ],
          [
            `Повний сценарій визначає учасників, послідовність, межу допустимого ризику та ознаки стійкості. «Перемога», «мир» або «замороження» надто широкі без відповіді, хто контролює силу, які зобов'язання набувають чинності, як розв'язують суперечки і що настане після порушення. Військовий результат стає політичним лише через інституцію, рішення або визнане правило.`,
            `Слід розрізняти мінімальну мету припинення масової шкоди й максимальну програму усунення всіх причин конфлікту. Перша може бути досяжною швидше, але залишити небезпечну невизначеність; друга може стати недосяжною умовою зупинки вогню. Сценарне мислення будує кілька проміжних станів і для кожного оцінює безпеку, законність, вартість та оборотність.`,
          ]
        ),
      },
      {
        title: L(`Минск, вторжение и Стамбул как разные стадии`, `Minsk, invasion, and Istanbul as different stages`, `Мінськ, вторгнення та Стамбул як різні стадії`),
        paragraphs: P(
          [
            `Минский комплекс мер 12 февраля 2015 года связал прекращение огня с политическим и территориальным устройством конфликта в Донбассе. Сам текст показывает, что подписанный перечень задаёт последовательность обязательств, но не равен реализованному конечному состоянию. По документам можно проверить содержание мер; вопрос фактического исполнения и разногласий требует отдельной хронологии наблюдения.`,
            `Полномасштабное вторжение 24 февраля 2022 года изменило масштаб, участников и цену любого окончания. Стамбульский раунд 29 марта зафиксировал предложения о нейтралитете и гарантиях, но не заключённый мир. Эти три статьи нельзя сложить в прямую линию «готового соглашения»: каждая относится к иной военной обстановке и иной стадии политического оформления.`,
          ],
          [
            `The Minsk Package of Measures of 12 February 2015 connected a ceasefire with the political and territorial arrangement of the Donbas conflict. The text itself shows that a signed sequence of commitments is not an implemented end state. The instruments establish the measures; actual performance and disputes over sequencing require a separate monitoring chronology.`,
            `The full-scale invasion of 24 February 2022 changed the scale, actors, and cost of any termination. The Istanbul round of 29 March recorded proposals on neutrality and guarantees, but not a concluded peace. These three articles cannot be placed on a straight line toward a “ready agreement”: each belongs to a different military setting and stage of political formalisation.`,
          ],
          [
            `Мінський комплекс заходів 12 лютого 2015 року пов'язав припинення вогню з політичним і територіальним устроєм конфлікту на Донбасі. Сам текст показує, що підписана послідовність зобов'язань не дорівнює реалізованому кінцевому стану. Документи встановлюють зміст заходів; фактичне виконання та суперечки про черговість потребують окремої хронології спостереження.`,
            `Повномасштабне вторгнення 24 лютого 2022 року змінило масштаб, учасників і ціну будь-якого завершення. Стамбульський раунд 29 березня зафіксував пропозиції щодо нейтралітету й гарантій, але не укладений мир. Ці три статті не можна скласти у пряму лінію до «готової угоди»: кожна належить іншій воєнній обстановці та іншій стадії політичного оформлення.`,
          ]
        ),
      },
      {
        title: L(`Документы фиксируют обязательства и стадию`, `Documents establish commitments and stage`, `Документи встановлюють зобов'язання та стадію`),
        paragraphs: P(
          [
            `Документ ОБСЕ по Минску и резолюция Совета Безопасности № 2202 позволяют точно читать согласованные меры и их международное одобрение. Резолюция Генеральной Ассамблеи ES-11/1 фиксирует международную оценку вторжения и требование вывести силы. Эти акты задают правовые и политические параметры, но не предсказывают, при какой военной позиции стороны согласятся их выполнять.`,
            `Сообщения украинской делегации, турецкого посредника и президента Украины после стамбульского раунда устанавливают, что обсуждались предложения и оставались нерешённые вопросы. Они прямо не заменяют подписанный договор и не раскрывают полный механизм гарантий. Документальная осторожность важна для сценария: нельзя строить конечное состояние на обязательствах, которых потенциальные гаранты ещё не приняли.`,
          ],
          [
            `The OSCE Minsk document and Security Council Resolution 2202 make the agreed measures and their international endorsement readable with precision. General Assembly Resolution ES-11/1 records the international assessment of the invasion and demand for force withdrawal. These acts set legal and political parameters but do not predict the military position at which parties will agree to perform them.`,
            `Statements by the Ukrainian delegation, Turkish mediator, and Ukrainian president after the Istanbul round establish that proposals were discussed and issues remained unresolved. They are not a substitute for a signed treaty and do not disclose a complete guarantee mechanism. Documentary caution matters for scenarios: an end state cannot rest on obligations prospective guarantors have not accepted.`,
          ],
          [
            `Документ ОБСЄ щодо Мінська та резолюція Ради Безпеки № 2202 дають змогу точно прочитати узгоджені заходи й їх міжнародне схвалення. Резолюція Генеральної Асамблеї ES-11/1 фіксує міжнародну оцінку вторгнення та вимогу вивести сили. Ці акти задають правові й політичні параметри, але не прогнозують, за якої військової позиції сторони погодяться їх виконувати.`,
            `Повідомлення української делегації, турецького посередника й президента України після стамбульського раунду встановлюють, що обговорювалися пропозиції та лишалися невирішені питання. Вони не замінюють підписаного договору й не розкривають повного механізму гарантій. Документальна обережність важлива для сценарію: кінцевий стан не можна будувати на зобов'язаннях, яких потенційні гаранти ще не прийняли.`,
          ]
        ),
      },
      {
        title: L(`Военная достижимость и политическая устойчивость`, `Military attainability and political durability`, `Військова досяжність і політична стійкість`),
        paragraphs: P(
          [
            `Одна позиция считает приемлемым только полное достижение заявленных целей и опасается, что компромисс вознаградит силу. Другая ставит немедленное прекращение потерь выше неопределённого будущего результата. Оценка должна показать цену времени для обоих вариантов, вероятность исполнения, риск повторной войны и то, кто несёт последствия ошибочного прогноза. Одной нравственной формулы для этого недостаточно.`,
            `Статья не предписывает конкретный исход и не предполагает, что все спорные вопросы решаются одновременно. Её предел — отсутствие доступа к будущим решениям и закрытым военным данным. Но уже сейчас можно требовать от каждого сценария ясной причинной цепочки, документированного статуса обязательств, внутренней процедуры одобрения и плана на случай нарушения. Это отличает стратегию завершения от пожелания.`,
          ],
          [
            `One position accepts only complete achievement of declared objectives and fears compromise will reward force. Another ranks an immediate end to losses above an uncertain future result. Assessment must show the time cost of each option, likelihood of implementation, renewed-war risk, and who bears the consequences of a mistaken forecast. A moral formula alone cannot do that work.`,
            `This article prescribes no particular outcome and does not assume every dispute can be solved at once. Its limit is lack of access to future decisions and classified military data. Even now, however, every scenario can be required to show a clear causal chain, documented status of commitments, domestic approval procedure, and plan for breach. That distinguishes an endgame strategy from a wish.`,
          ],
          [
            `Одна позиція вважає прийнятним лише повне досягнення заявлених цілей і побоюється, що компроміс винагородить силу. Інша ставить негайне припинення втрат вище за невизначений майбутній результат. Оцінка має показати ціну часу для обох варіантів, імовірність виконання, ризик повторної війни й те, хто несе наслідки помилкового прогнозу. Однієї моральної формули для цього недостатньо.`,
            `Стаття не приписує конкретного результату й не припускає, що всі спірні питання вирішуються одночасно. Її межа — відсутність доступу до майбутніх рішень і закритих військових даних. Але вже зараз від кожного сценарію можна вимагати ясного причинного ланцюга, документованого статусу зобов'язань, внутрішньої процедури схвалення та плану на випадок порушення. Це відрізняє стратегію завершення від побажання.`,
          ]
        ),
      },
    ],
  },

  'concept-durable-peace': {
    lead: L(
      `Устойчивый мир — это порядок, который не только снижает насилие в момент подписания, но и способен пережить нарушения, смену руководителей и новые кризисы без возврата к большой войне. Его нельзя свести ни к паузе в огне, ни к максимально подробному договору. Необходимы исполнимые обязанности, наблюдение, способы разрешения споров, внутренняя политическая опора и приемлемая безопасность для затронутых обществ. Украинская история Минска и стамбульских переговоров позволяет увидеть разрыв между наличием текста и работой созданного им режима.`,
      `Durable peace is an order that not only reduces violence when signed but can survive breaches, leadership changes, and new crises without returning to major war. It is neither a pause in fire nor merely the most detailed possible treaty. It requires performable obligations, monitoring, dispute-resolution methods, domestic political support, and acceptable security for affected societies. Ukraine's experience with Minsk and the Istanbul talks reveals the gap between having a text and sustaining the regime that text is meant to create.`,
      `Сталий мир — це порядок, який не лише зменшує насильство в момент підписання, а й здатний пережити порушення, зміну керівників і нові кризи без повернення до великої війни. Його не можна звести ані до паузи у вогні, ані до максимально докладного договору. Потрібні здійсненні обов'язки, спостереження, способи розв'язання спорів, внутрішня політична опора та прийнятна безпека для заторкнутих суспільств. Українська історія Мінська й стамбульських переговорів показує розрив між наявністю тексту та роботою створеного ним режиму.`
    ),
    sections: [
      {
        title: L(`Прочность соглашения после первого нарушения`, `Durability after the first breach`, `Міцність угоди після першого порушення`),
        paragraphs: P(
          [
            `Минимальный критерий — существенное и наблюдаемое сокращение насилия. Следующий — способность механизма определить нарушение, остановить его и вернуть участников к исполнению. Если любое происшествие автоматически разрушает договор, порядок хрупок; если нарушение не влечёт никакой реакции, договор становится декорацией. Прочность находится в предусмотренной процедуре между этими крайностями.`,
            `Долгосрочный тест включает безопасность, политическое представительство, экономическую осуществимость и общественное принятие. Эти элементы не обязаны быть полностью решены до первой тишины, но должен существовать путь их согласования. Мир, зависящий только от личных отношений подписантов или неопределённого обещания внешней помощи, особенно уязвим при смене правительства и баланса сил.`,
          ],
          [
            `The minimum criterion is a substantial and observable reduction in violence. The next is a mechanism capable of identifying a breach, containing it, and returning participants to performance. An order that collapses after any incident is brittle; an agreement that produces no response to breaches is decorative. Durability lies in the procedure between those extremes.`,
            `The long-term test includes security, political representation, economic feasibility, and social acceptance. Not every element must be fully resolved before the first silence, but a pathway for agreement must exist. Peace dependent only on personal relations among signatories or an undefined promise of external support is particularly vulnerable to changes of government and power balance.`,
          ],
          [
            `Мінімальний критерій — істотне й спостережуване скорочення насильства. Наступний — здатність механізму визначити порушення, зупинити його та повернути учасників до виконання. Якщо будь-який інцидент автоматично руйнує договір, порядок крихкий; якщо порушення не спричиняє жодної реакції, угода стає декорацією. Міцність міститься в передбаченій процедурі між цими крайнощами.`,
            `Довгостроковий тест охоплює безпеку, політичне представництво, економічну здійсненність і суспільне прийняття. Ці елементи не обов'язково повністю вирішити до першої тиші, але має існувати шлях їх узгодження. Мир, що залежить лише від особистих відносин підписантів або невизначеної обіцянки зовнішньої допомоги, особливо вразливий до зміни уряду й балансу сил.`,
          ]
        ),
      },
      {
        title: L(`Два дипломатических опыта и война между ними`, `Two diplomatic experiences with a war between them`, `Два дипломатичні досвіди й війна між ними`),
        paragraphs: P(
          [
            `Комплекс мер Минска от 12 февраля 2015 года включил прекращение огня, отвод вооружений, политические шаги, границу и вывод формирований. То, что эти элементы были записаны, не обеспечило общего порядка исполнения. Полномасштабное вторжение 24 февраля 2022 года стало самым сильным свидетельством того, что прежняя схема не создала устойчивого режима безопасности.`,
            `Стамбульский раунд 29 марта 2022 года возник уже после разрушения прежней рамки и обсуждал новые предложения о нейтралитете и гарантиях. Официальные сообщения фиксировали сближение по отдельным вопросам и отсутствие подписанного документа. Сопоставление трёх дат показывает: прекращение переговоров и продолжение боёв нельзя объяснить только недостатком текста; значение имеют исполнители, гарантии, военная обстановка и доверие к будущему соблюдению.`,
          ],
          [
            `The Minsk Package of Measures of 12 February 2015 included a ceasefire, weapons withdrawal, political steps, the border, and removal of formations. Recording those elements did not produce a shared order of performance. The full-scale invasion of 24 February 2022 became the strongest evidence that the earlier scheme had not created a durable security regime.`,
            `The Istanbul round of 29 March 2022 took place after the previous framework had collapsed and discussed new proposals on neutrality and guarantees. Official messages recorded movement on some issues and the absence of a signed document. The three dates show that failed talks and continued combat cannot be explained by insufficient text alone; implementers, guarantees, military conditions, and expectations of future compliance all matter.`,
          ],
          [
            `Комплекс заходів Мінська від 12 лютого 2015 року охопив припинення вогню, відведення озброєнь, політичні кроки, кордон і виведення формувань. Те, що ці елементи записали, не забезпечило спільного порядку виконання. Повномасштабне вторгнення 24 лютого 2022 року стало найсильнішим свідченням того, що попередня схема не створила сталого режиму безпеки.`,
            `Стамбульський раунд 29 березня 2022 року відбувся вже після руйнування попередньої рамки й обговорював нові пропозиції щодо нейтралітету та гарантій. Офіційні повідомлення фіксували зближення з окремих питань і відсутність підписаного документа. Зіставлення трьох дат показує: припинення переговорів і продовження боїв не пояснюються лише браком тексту; важливі виконавці, гарантії, воєнна обстановка й очікування майбутнього дотримання.`,
          ]
        ),
      },
      {
        title: L(`Что обещает документ и кто обеспечивает режим`, `What a document promises and who sustains the regime`, `Що обіцяє документ і хто підтримує режим`),
        paragraphs: P(
          [
            `Документ ОБСЕ по Минску и резолюция Совета Безопасности № 2202 устанавливают согласованный набор мер и международное одобрение. Они дают основу для проверки обязанностей, но не содержат автоматического исполнителя всех пунктов. Отсутствие бесспорного механизма последовательности и различия в трактовках показывают, почему юридико-политический текст следует читать вместе с практикой его применения.`,
            `Стамбульские заявления украинской делегации, президента Украины и турецкого посредника подтверждают стадию предложений, обсуждение гарантий и нерешённость части вопросов. Они не устанавливают согласие потенциальных гарантов, окончательный территориальный режим или вступившие в силу обязательства. Для прочного мира эти пробелы должны быть закрыты явным согласием, внутренними процедурами и проверяемым распределением ответственности.`,
          ],
          [
            `The OSCE Minsk document and Security Council Resolution 2202 establish an agreed set of measures and international endorsement. They provide a basis for checking duties but contain no automatic implementer of every provision. The absence of an uncontested sequencing mechanism and conflicting interpretations show why a legal-political text must be read together with implementation practice.`,
            `Istanbul statements by the Ukrainian delegation, the Ukrainian president, and the Turkish mediator confirm a proposal stage, discussion of guarantees, and unresolved issues. They do not establish prospective guarantors' consent, a final territorial regime, or obligations in force. Durable peace requires those gaps to be closed through explicit consent, domestic procedures, and verifiable allocation of responsibility.`,
          ],
          [
            `Документ ОБСЄ щодо Мінська та резолюція Ради Безпеки № 2202 встановлюють узгоджений набір заходів і міжнародне схвалення. Вони дають основу для перевірки обов'язків, але не містять автоматичного виконавця всіх пунктів. Відсутність безспірного механізму послідовності й різні тлумачення показують, чому правово-політичний текст слід читати разом із практикою його застосування.`,
            `Стамбульські заяви української делегації, президента України й турецького посередника підтверджують стадію пропозицій, обговорення гарантій і невирішеність частини питань. Вони не встановлюють згоди потенційних гарантів, остаточного територіального режиму чи чинних зобов'язань. Для сталого миру ці прогалини мають бути закриті явною згодою, внутрішніми процедурами та перевірюваним розподілом відповідальності.`,
          ]
        ),
      },
      {
        title: L(`Неполный мир, справедливость и риск отсрочки`, `Incomplete peace, justice, and the risk of delay`, `Неповний мир, справедливість і ризик відстрочки`),
        paragraphs: P(
          [
            `Одна позиция считает договор непрочным без предварительного решения территории, ответственности и гарантий. Другая допускает неполный порядок, если он немедленно спасает жизни и создаёт пространство для дальнейшей политики. Обе сталкиваются с риском: требование полного решения может отсрочить тишину, а слишком слабая пауза — закрепить стимул возобновить войну на более выгодных условиях.`,
            `Устойчивость не равна неподвижности. Хороший режим может предусматривать пересмотр, постепенное исполнение и мирное изменение спорных правил, сохраняя запрет силового пересмотра. Статья не определяет справедливую границу или объём уступок; она требует показать, почему выбранный механизм переживёт ожидаемые потрясения и каким способом граждане, институты и внешние участники смогут исправлять его без нового вооружённого цикла.`,
          ],
          [
            `One position treats a treaty as brittle unless territory, responsibility, and guarantees are resolved first. Another accepts an incomplete order if it saves lives immediately and creates room for later politics. Each faces a risk: demanding a complete solution may postpone silence, while an excessively weak pause may preserve incentives to restart war under more favourable conditions.`,
            `Durability is not immobility. A sound regime may allow review, gradual implementation, and peaceful amendment of disputed rules while preserving the bar on forcible revision. This article does not determine a just boundary or level of concession; it asks why the chosen mechanism will survive expected shocks and how citizens, institutions, and outside actors can correct it without another armed cycle.`,
          ],
          [
            `Одна позиція вважає договір крихким без попереднього вирішення території, відповідальності та гарантій. Інша допускає неповний порядок, якщо він негайно рятує життя й створює простір для подальшої політики. Обидві стикаються з ризиком: вимога повного рішення може відкласти тишу, а надто слабка пауза — зберегти стимул відновити війну за вигідніших умов.`,
            `Стійкість не дорівнює нерухомості. Добрий режим може передбачати перегляд, поступове виконання й мирну зміну спірних правил, зберігаючи заборону силового перегляду. Стаття не визначає справедливий кордон чи обсяг поступок; вона вимагає показати, чому обраний механізм переживе очікувані потрясіння та як громадяни, інституції й зовнішні учасники зможуть виправляти його без нового збройного циклу.`,
          ]
        ),
      },
    ],
  },

  'concept-identity-policy': {
    lead: L(
      `Политика идентичности превращает язык, историческую память, символы и представление о политической нации в предмет государственных решений. Она может расширять общую гражданскую рамку после распада империи и военного нападения, но также создавать барьеры для граждан, чей язык или культурная память отличаются от большинства. Для украинского случая важно не приписывать один мотив всему населению: следует отдельно исследовать цель конкретной меры, её правовую форму, доступ к публичным услугам и то, как политика меняется под давлением конфликта.`,
      `Identity policy turns language, historical memory, symbols, and the idea of the political nation into matters of state decision. It may broaden a shared civic framework after imperial collapse and military attack, but it can also create barriers for citizens whose language or cultural memory differs from the majority. In Ukraine, one motive should not be attributed to the whole population: the purpose of each measure, its legal form, access to public services, and changes under conflict pressure must be examined separately.`,
      `Політика ідентичності перетворює мову, історичну пам'ять, символи та уявлення про політичну націю на предмет державних рішень. Вона може розширювати спільну громадянську рамку після розпаду імперії й військового нападу, але також створювати бар'єри для громадян, чия мова чи культурна пам'ять відрізняється від більшості. Для українського випадку не слід приписувати один мотив усьому населенню: треба окремо досліджувати мету заходу, його правову форму, доступ до публічних послуг і зміни під тиском конфлікту.`
    ),
    sections: [
      {
        title: L(`Гражданская интеграция и проверяемый доступ`, `Civic integration and testable access`, `Громадянська інтеграція та перевірюваний доступ`),
        paragraphs: P(
          [
            `Порог анализа проходит между символическим посланием и материальным последствием. Выбор государственного языка или памятной даты сообщает, какую общую историю поддерживает власть. Ограничение образования, административной услуги, профессии или политического участия влияет на доступ уже непосредственно. Эти уровни связаны, но требуют разных данных и различной оценки соразмерности.`,
            `Единая публичная коммуникация может снижать транзакционные издержки и укреплять общее политическое пространство. Однако интеграция перестаёт быть гражданской, если культурный признак используется как автоматический тест лояльности. Проверка должна спрашивать, доступно ли разумное освоение требований, защищена ли частная сфера, существуют ли переходные меры и не исключается ли группа из базовых услуг.`,
          ],
          [
            `Analysis must separate symbolic messages from material consequences. Choosing a state language or commemorative date communicates the common history supported by government. Restricting education, an administrative service, a profession, or political participation directly affects access. These levels are connected but require different evidence and proportionality assessments.`,
            `A shared language of public administration may reduce transaction costs and strengthen a common political space. Integration stops being civic, however, when a cultural trait becomes an automatic loyalty test. Review should ask whether requirements can reasonably be learned, whether private life remains protected, whether transition measures exist, and whether a group is excluded from basic services.`,
          ],
          [
            `Аналіз має розділяти символічне послання й матеріальний наслідок. Вибір державної мови чи пам'ятної дати повідомляє, яку спільну історію підтримує влада. Обмеження освіти, адміністративної послуги, професії або політичної участі вже безпосередньо впливає на доступ. Ці рівні пов'язані, але потребують різних даних та оцінки пропорційності.`,
            `Єдина мова публічного управління може зменшувати транзакційні витрати й зміцнювати спільний політичний простір. Однак інтеграція перестає бути громадянською, якщо культурну ознаку використовують як автоматичний тест лояльності. Перевірка має з'ясувати, чи можна розумно опанувати вимоги, чи захищена приватна сфера, чи існують перехідні заходи та чи не виключено групу з базових послуг.`,
          ]
        ),
      },
      {
        title: L(`Суверенитет, языковой закон и вторжение`, `Sovereignty, language legislation, and invasion`, `Суверенітет, мовний закон і вторгнення`),
        paragraphs: P(
          [
            `Декларация о суверенитете 16 июля 1990 года задала рамку самостоятельной украинской государственности, а последующая независимость создала задачу формирования общей политической нации. Смена власти 22 февраля 2014 года обострила спор о том, кто говорит от имени государства и насколько политическая мобилизация меняет его институциональную и символическую ориентацию.`,
            `Закон об обеспечении функционирования украинского языка от 25 апреля 2019 года перевёл часть этой политики в конкретные правила публичной сферы. Полномасштабное вторжение 24 февраля 2022 года усилило значение языка и символов как маркеров сопротивления, но не сделало культурную практику каждого русскоязычного гражданина политической позицией. Историческая связь объясняет усиление политики, не отменяя индивидуальных прав.`,
          ],
          [
            `The Declaration of Sovereignty of 16 July 1990 framed independent Ukrainian statehood, while later independence created the task of building a shared political nation. The transfer of power on 22 February 2014 sharpened disputes over who speaks for the state and how far political mobilisation changes its institutional and symbolic orientation.`,
            `The law on ensuring the functioning of Ukrainian as the state language, adopted on 25 April 2019, translated part of that policy into concrete rules for public life. The full-scale invasion of 24 February 2022 strengthened language and symbols as markers of resistance, but did not turn every Russian-speaking citizen's cultural practice into a political position. History explains intensified policy without cancelling individual rights.`,
          ],
          [
            `Декларація про суверенітет 16 липня 1990 року задала рамку самостійної української державності, а подальша незалежність створила завдання формування спільної політичної нації. Зміна влади 22 лютого 2014 року загострила суперечку про те, хто говорить від імені держави й наскільки політична мобілізація змінює її інституційну та символічну орієнтацію.`,
            `Закон про забезпечення функціонування української мови від 25 квітня 2019 року перевів частину цієї політики в конкретні правила публічної сфери. Повномасштабне вторгнення 24 лютого 2022 року посилило значення мови й символів як маркерів опору, але не зробило культурну практику кожного російськомовного громадянина політичною позицією. Історичний зв'язок пояснює посилення політики, не скасовуючи індивідуальних прав.`,
          ]
        ),
      },
      {
        title: L(`Закон устанавливает режим, а не тождество общества`, `Law establishes a regime, not society's identity`, `Закон установлює режим, а не тотожність суспільства`),
        paragraphs: P(
          [
            `Конституция и языковой закон позволяют установить статус украинского языка, сферы действия требований и предусмотренные исключения. Заключение Венецианской комиссии 2019 года даёт институциональную оценку баланса между укреплением государственного языка и защитой языковых прав. Эти документы пригодны для разбора конкретных норм, но не измеряют сами по себе повседневную идентичность граждан.`,
            `Официальные акты также не доказывают, что все меры мотивированы одной идеологией или что их практическое применение одинаково во всех регионах. Для этого нужны административные данные, судебные решения, исследования доступа и репрезентативные опросы. Наличие рекомендации международного органа показывает предмет правовой обеспокоенности, но не заменяет проверку того, как государство ответило и что изменилось на практике.`,
          ],
          [
            `The Constitution and language law establish the status of Ukrainian, the fields covered by requirements, and stated exceptions. The Venice Commission's 2019 opinion provides an institutional assessment of the balance between strengthening the state language and protecting language rights. These records support analysis of specific rules but do not themselves measure citizens' everyday identities.`,
            `Official acts also do not prove that every measure has one ideological motive or that implementation is uniform across regions. Administrative data, court decisions, access studies, and representative surveys are needed. A recommendation by an international body identifies an area of legal concern; it does not replace checking how the state responded and what changed in practice.`,
          ],
          [
            `Конституція та мовний закон дають змогу встановити статус української мови, сфери дії вимог і передбачені винятки. Висновок Венеційської комісії 2019 року надає інституційну оцінку балансу між зміцненням державної мови та захистом мовних прав. Ці документи придатні для аналізу конкретних норм, але самі по собі не вимірюють повсякденну ідентичність громадян.`,
            `Офіційні акти також не доводять, що всі заходи мотивовані однією ідеологією або що їх практичне застосування однакове в усіх регіонах. Для цього потрібні адміністративні дані, судові рішення, дослідження доступу й репрезентативні опитування. Наявність рекомендації міжнародного органу показує предмет правового занепокоєння, але не замінює перевірки того, як держава відповіла і що змінилося на практиці.`,
          ]
        ),
      },
      {
        title: L(`Общая нация без культурной унификации`, `A common nation without cultural uniformity`, `Спільна нація без культурної уніфікації`),
        paragraphs: P(
          [
            `Сторонники активной политики считают, что без защищённого государственного языка и общей памяти более сильное внешнее культурное поле воспроизводит зависимость. Критики видят риск административного вытеснения и отчуждения лояльных граждан. Спор нельзя решить абстрактным выбором между «единством» и «разнообразием»: нужно сравнивать конкретную цель, менее ограничительные средства и фактический эффект.`,
            `Война усиливает давление на символический выбор, однако чрезвычайный контекст не должен навечно определять гражданский статус. Человек может использовать русский язык, критиковать отдельную историческую политику и одновременно поддерживать украинскую государственность. Предел допустимой политики проходит там, где доказуемая публичная функция заканчивается и начинается презумпция нелояльности по происхождению, языку дома или культурному вкусу.`,
          ],
          [
            `Supporters of active policy argue that without a protected state language and shared memory, a stronger external cultural field reproduces dependence. Critics see a risk of administrative displacement and alienation of loyal citizens. The dispute cannot be solved by an abstract choice between “unity” and “diversity”; each purpose, less restrictive alternative, and practical effect must be compared.`,
            `War intensifies pressure around symbolic choices, but an emergency context should not define civic status forever. A person may use Russian, criticise a particular historical policy, and still support Ukrainian statehood. Permissible policy reaches its limit where a demonstrable public function ends and a presumption of disloyalty begins on the basis of origin, home language, or cultural taste.`,
          ],
          [
            `Прихильники активної політики вважають, що без захищеної державної мови та спільної пам'яті сильніше зовнішнє культурне поле відтворює залежність. Критики бачать ризик адміністративного витіснення й відчуження лояльних громадян. Суперечку не можна розв'язати абстрактним вибором між «єдністю» та «різноманіттям»: треба порівнювати конкретну мету, менш обмежувальні засоби й фактичний ефект.`,
            `Війна посилює тиск навколо символічного вибору, але надзвичайний контекст не повинен назавжди визначати громадянський статус. Людина може користуватися російською, критикувати окрему історичну політику й водночас підтримувати українську державність. Межа допустимої політики проходить там, де доказова публічна функція закінчується і починається презумпція нелояльності за походженням, домашньою мовою чи культурним смаком.`,
          ]
        ),
      },
    ],
  },

  'concept-russian-language-rights': {
    lead: L(
      `Права русскоязычных граждан следует рассматривать через конкретные сферы общения и доступа, а не через предположение о политической лояльности. Государство вправе организовывать публичную администрацию на государственном языке и поддерживать его после длительной исторической уязвимости. Одновременно правила образования, услуг, труда и участия должны учитывать равенство граждан, частную жизнь и защиту меньшинств. Российское использование языковой темы для оправдания силы не устраняет самостоятельный вопрос о качестве украинской языковой политики и не делает русскую речь признаком поддержки войны.`,
      `The rights of Russian-speaking citizens should be examined through particular domains of communication and access, not assumptions about political loyalty. A state may organise public administration in its state language and support that language after a long history of vulnerability. At the same time, rules on education, services, employment, and participation must account for equality, private life, and minority protection. Russia's use of language claims to justify force does not remove the separate question of Ukrainian policy quality and does not make Russian speech evidence of support for war.`,
      `Права російськомовних громадян слід розглядати через конкретні сфери спілкування й доступу, а не через припущення про політичну лояльність. Держава може організовувати публічну адміністрацію державною мовою та підтримувати її після тривалої історичної вразливості. Водночас правила освіти, послуг, праці й участі мають враховувати рівність громадян, приватне життя та захист меншин. Використання Росією мовної теми для виправдання сили не усуває окремого питання про якість української політики й не робить російську мову ознакою підтримки війни.`
    ),
    sections: [
      {
        title: L(`Сфера употребления определяет правовой вопрос`, `The domain of use defines the legal question`, `Сфера вживання визначає правове питання`),
        paragraphs: P(
          [
            `Язык дома, обращение в государственный орган, школьная программа, коммерческая услуга и квалификационное требование — разные ситуации. В частной сфере исходной является свобода выбора; в работе публичного органа важны единообразие и доступность; в образовании сталкиваются интерес ребёнка, семьи и долгосрочной интеграции. Общий тезис о «запрете языка» мало полезен без названия конкретной нормы и последствия.`,
            `Порог нарушения оценивается по тому, теряет ли человек реальный доступ, несёт ли несоразмерную санкцию и есть ли разумный переходный механизм. Не всякое требование использовать государственный язык является дискриминацией, как и не всякая формально одинаковая норма обеспечивает равенство. Если разные группы находятся в разных фактических условиях, важен практический эффект.`,
          ],
          [
            `Home language, communication with a state office, a school curriculum, a commercial service, and a professional requirement are different situations. Private life begins from freedom of choice; public administration needs consistency and accessibility; education balances the interests of the child, family, and long-term integration. A general claim that a language is “banned” says little without a specific rule and consequence.`,
            `A violation threshold asks whether a person loses meaningful access, suffers a disproportionate sanction, and has a reasonable transition path. Not every state-language requirement is discriminatory, just as every formally equal rule does not produce equality. Practical effect matters when groups begin from different factual positions.`,
          ],
          [
            `Мова вдома, звернення до державного органу, шкільна програма, комерційна послуга й кваліфікаційна вимога — різні ситуації. У приватній сфері вихідною є свобода вибору; у роботі публічного органу важливі єдність і доступність; в освіті стикаються інтереси дитини, родини та довгострокової інтеграції. Загальна теза про «заборону мови» мало корисна без конкретної норми й наслідку.`,
            `Поріг порушення оцінюють за тим, чи втрачає людина реальний доступ, чи зазнає непропорційної санкції та чи має розумний перехідний механізм. Не кожна вимога використовувати державну мову є дискримінацією, так само як не кожна формально однакова норма забезпечує рівність. Коли групи перебувають у різних фактичних умовах, важливий практичний ефект.`,
          ]
        ),
      },
      {
        title: L(`Кризис 2014 года, закон 2019 года и вторжение`, `The 2014 crisis, the 2019 law, and invasion`, `Криза 2014 року, закон 2019 року та вторгнення`),
        paragraphs: P(
          [
            `Смена власти 22 февраля 2014 года стала моментом острого спора о политическом курсе и представительности новых решений. Уже в последующих конфликтах языковая тема использовалась как объяснение отчуждения части населения, однако статья о начале АТО 14 апреля показывает более сложную обстановку вооружённых групп, захватов зданий, местной мобилизации и внешнего участия. Язык не заменяет атрибуцию действий.`,
            `Закон о функционировании украинского языка от 25 апреля 2019 года даёт конкретный предмет для анализа вместо общих формул. Полномасштабное вторжение 24 февраля 2022 года резко усилило политическую нагрузку языка. Но дата нападения не превращает прежнюю бытовую русскоязычность миллионов граждан в свидетельство нелояльности и не освобождает государство от оценки соразмерности постоянных правил после чрезвычайной фазы.`,
          ],
          [
            `The transfer of power on 22 February 2014 became a moment of acute dispute over political direction and the representativeness of new decisions. Language was later invoked to explain alienation among parts of the population, but the article on the start of the ATO on 14 April shows a more complex setting of armed groups, building seizures, local mobilisation, and external involvement. Language cannot substitute for attribution of conduct.`,
            `The law on the functioning of Ukrainian as the state language of 25 April 2019 provides a specific object for analysis instead of general slogans. The full-scale invasion of 24 February 2022 sharply increased language's political weight. Yet the attack does not turn the prior everyday Russian use of millions of citizens into evidence of disloyalty or relieve the state from reviewing the proportionality of permanent rules after the emergency phase.`,
          ],
          [
            `Зміна влади 22 лютого 2014 року стала моментом гострої суперечки про політичний курс і представницький характер нових рішень. У подальших конфліктах мовну тему використовували як пояснення відчуження частини населення, однак стаття про початок АТО 14 квітня показує складнішу обстановку збройних груп, захоплень будівель, місцевої мобілізації та зовнішньої участі. Мова не замінює атрибуцію дій.`,
            `Закон про функціонування української мови від 25 квітня 2019 року дає конкретний предмет для аналізу замість загальних гасел. Повномасштабне вторгнення 24 лютого 2022 року різко посилило політичне навантаження мови. Проте напад не перетворює попередню побутову російськомовність мільйонів громадян на доказ нелояльності й не звільняє державу від оцінки пропорційності постійних правил після надзвичайної фази.`,
          ]
        ),
      },
      {
        title: L(`Национальный закон и оценка Венецианской комиссии`, `National law and the Venice Commission assessment`, `Національний закон і оцінка Венеційської комісії`),
        paragraphs: P(
          [
            `Конституция Украины и закон 2019 года устанавливают государственный статус украинского языка и регулируемые публичные сферы. Их нужно читать по статьям: адресат обязанности, исключение, переходный срок и санкция важнее политического пересказа. Сам факт существования государственного языка не доказывает нарушения прав, однако широкая сфера обязательного применения требует проверки доступности и баланса.`,
            `Заключение Венецианской комиссии CDL-AD(2019)032 анализирует этот баланс и формулирует рекомендации по защите языковых прав. Оно представляет авторитетную институциональную оценку, но не отменяет закон автоматически и не устанавливает каждый индивидуальный случай дискриминации. Практический вывод требует сопоставить рекомендацию, последующее изменение нормы, административное применение и доступный способ защиты для конкретного человека.`,
          ],
          [
            `Ukraine's Constitution and the 2019 law establish the state status of Ukrainian and regulate specified public domains. They must be read provision by provision: the person bound, exception, transition period, and sanction matter more than political paraphrase. The existence of a state language does not itself prove a rights violation, although broad mandatory use requires review of accessibility and balance.`,
            `Venice Commission Opinion CDL-AD(2019)032 analyses that balance and makes recommendations on protecting language rights. It is an authoritative institutional assessment but does not automatically invalidate the law or establish every individual case of discrimination. A practical conclusion compares the recommendation, later amendments, administrative application, and remedy available to a particular person.`,
          ],
          [
            `Конституція України та закон 2019 року встановлюють державний статус української мови й регульовані публічні сфери. Їх треба читати за статтями: адресат обов'язку, виняток, перехідний строк і санкція важливіші за політичний переказ. Сам факт існування державної мови не доводить порушення прав, хоча широка сфера обов'язкового застосування потребує перевірки доступності й балансу.`,
            `Висновок Венеційської комісії CDL-AD(2019)032 аналізує цей баланс і формулює рекомендації щодо захисту мовних прав. Це авторитетна інституційна оцінка, але вона не скасовує закон автоматично й не встановлює кожен індивідуальний випадок дискримінації. Практичний висновок потребує зіставити рекомендацію, подальшу зміну норми, адміністративне застосування й доступний спосіб захисту для конкретної людини.`,
          ]
        ),
      },
      {
        title: L(`Интеграция без презумпции нелояльности`, `Integration without presumed disloyalty`, `Інтеграція без презумпції нелояльності`),
        paragraphs: P(
          [
            `Сторонники строгих требований указывают, что государственный язык нуждается не только в символическом признании, но и в реальной среде употребления. Критики отвечают, что быстрый административный переход может сокращать доступ и усиливать отчуждение. Разрешение спора зависит от сферы: требования к должностному лицу, школьнику, клиенту и частному медиа не должны оцениваться одной меркой.`,
            `Граница аргумента особенно важна во время войны. Защита государства от враждебной информационной операции относится к поведению, организации и содержанию, а не к звуковому строю речи гражданина. Русский язык может быть инструментом агрессорской пропаганды и одновременно родным языком украинского военнослужащего или перемещённой семьи. Правовая политика обязана различать эти ситуации, иначе безопасность превращается в культурную коллективную ответственность.`,
          ],
          [
            `Supporters of strict requirements argue that a state language needs not only symbolic recognition but a real environment of use. Critics answer that rapid administrative transition may reduce access and deepen alienation. Resolution depends on the domain: an official, pupil, customer, and private media outlet should not be judged by one measure.`,
            `The boundary is especially important during war. Protecting the state from hostile information operations concerns conduct, organisation, and content—not the phonetics of a citizen's speech. Russian may be used by aggressor propaganda and also be the native language of a Ukrainian service member or displaced family. Law must distinguish those situations, or security becomes cultural collective responsibility.`,
          ],
          [
            `Прихильники суворих вимог зазначають, що державна мова потребує не лише символічного визнання, а й реального середовища вживання. Критики відповідають, що швидкий адміністративний перехід може скорочувати доступ і посилювати відчуження. Розв'язання залежить від сфери: вимоги до посадовця, школяра, клієнта й приватного медіа не слід оцінювати однією міркою.`,
            `Межа аргументу особливо важлива під час війни. Захист держави від ворожої інформаційної операції стосується поведінки, організації та змісту, а не звукової будови мовлення громадянина. Російська може бути інструментом пропаганди агресора й водночас рідною мовою українського військовослужбовця або переміщеної родини. Правова політика має розрізняти ці ситуації, інакше безпека перетворюється на культурну колективну відповідальність.`,
          ]
        ),
      },
    ],
  },

  'concept-war-aims': {
    lead: L(
      `Политическая цель войны описывает состояние, ради которого руководство готово расходовать людей, технику, деньги и международный капитал. Она отличается от отдельной военной задачи: уничтожение объекта, удержание рубежа или демонстрация возможности имеют стратегический смысл только через связь с принуждением, защитой, территориальным контролем, переговорами либо внутренней мобилизацией. В российско-украинской войне заявленные цели менялись и оспаривались, поэтому анализ должен различать официальную формулу, наблюдаемое распределение ресурсов и вывод о фактическом замысле.`,
      `A political war aim describes the condition for which leaders are prepared to spend lives, equipment, money, and international capital. It differs from a discrete military task: destroying an object, holding a line, or demonstrating capability gains strategic meaning only through a link to coercion, defence, territorial control, negotiation, or domestic mobilisation. In the Russia–Ukraine war, stated aims have shifted and been contested, so analysis must distinguish official wording, observable resource allocation, and inference about actual design.`,
      `Політична мета війни описує стан, заради якого керівництво готове витрачати людей, техніку, гроші та міжнародний капітал. Вона відрізняється від окремого військового завдання: знищення об'єкта, утримання рубежу чи демонстрація можливості мають стратегічний сенс лише через зв'язок із примусом, захистом, територіальним контролем, переговорами або внутрішньою мобілізацією. У російсько-українській війні заявлені цілі змінювалися й оспорювалися, тому аналіз має розрізняти офіційну формулу, спостережуваний розподіл ресурсів і висновок про фактичний задум.`
    ),
    sections: [
      {
        title: L(`Цель, средство и механизм преобразования`, `Objective, means, and conversion mechanism`, `Мета, засіб і механізм перетворення`),
        paragraphs: P(
          [
            `Полноценное утверждение о цели называет желаемое политическое состояние, адресата принуждения и способ, которым военное действие должно изменить его выбор. «Ослабить противника» остаётся промежуточной задачей, пока не объяснено, какое решение станет возможным после ослабления. Аналогично, оборона территории описывает непосредственную функцию, но может обслуживать разные дипломатические и внутренние конечные состояния.`,
            `Официальная декларация важна, однако поведение проверяется по ресурсам, выбору целей, допустимым издержкам и реакции на переговорные возможности. Несоответствие не всегда означает обман: цели могут меняться после неудачи, быть предметом внутреннего компромисса или существовать на нескольких уровнях. Поэтому вывод должен указывать период и отделять исходный замысел от последующей адаптации.`,
          ],
          [
            `A complete claim about a war aim identifies the desired political condition, the target of coercion, and the way military action is meant to alter that target's choices. “Weakening the adversary” remains an intermediate task until the decision enabled by weakening is explained. Likewise, territorial defence describes an immediate function but may serve different diplomatic and domestic end states.`,
            `Official declarations matter, yet conduct must be tested through resources, target selection, accepted costs, and responses to negotiating opportunities. A mismatch does not always mean deception: aims may change after failure, emerge from internal compromise, or operate at several levels. A conclusion should therefore state its period and distinguish original design from later adaptation.`,
          ],
          [
            `Повне твердження про мету називає бажаний політичний стан, адресата примусу й спосіб, яким військова дія має змінити його вибір. «Послабити противника» лишається проміжним завданням, доки не пояснено, яке рішення стане можливим після послаблення. Так само оборона території описує безпосередню функцію, але може обслуговувати різні дипломатичні та внутрішні кінцеві стани.`,
            `Офіційна декларація важлива, однак поведінку перевіряють за ресурсами, вибором цілей, допустимими витратами й реакцією на переговорні можливості. Невідповідність не завжди означає обман: цілі можуть змінюватися після невдачі, бути предметом внутрішнього компромісу або існувати на кількох рівнях. Тому висновок має вказувати період і відділяти початковий задум від подальшої адаптації.`,
          ]
        ),
      },
      {
        title: L(`От предвоенной позиции к переговорам и операции`, `From pre-war posture to negotiation and operation`, `Від передвоєнної позиції до переговорів і операції`),
        paragraphs: P(
          [
            `Мюнхенская речь 19 февраля 2022 года показывает украинские требования к системе безопасности непосредственно перед вторжением. Полномасштабное нападение 24 февраля создало новый набор непосредственных целей — выживание государства, оборону территории и мобилизацию внешней поддержки. Эти статьи фиксируют позиции и действия в начале фазы, но не исчерпывают последующую эволюцию военных и политических задач.`,
            `Стамбульский раунд 29 марта 2022 года показывает попытку связать военную обстановку с предложениями о нейтралитете и гарантиях. Операция «Паутина» 1 июня 2025 года, напротив, представляет конкретное поражение военных объектов, стратегический смысл которого зависит от устойчивого влияния на ресурсы и переговоры. Датированные узлы позволяют проверять, как тактическая задача включается в более широкую цель в разные моменты.`,
          ],
          [
            `The Munich speech of 19 February 2022 records Ukraine's demands of the security system immediately before invasion. The full-scale attack of 24 February created a new set of immediate aims—state survival, territorial defence, and mobilisation of external support. These articles establish positions and actions at the start of a phase but do not exhaust the later evolution of military and political objectives.`,
            `The Istanbul round of 29 March 2022 shows an attempt to connect battlefield conditions with proposals on neutrality and guarantees. Operation Spiderweb on 1 June 2025, by contrast, is a specific attack on military objects whose strategic meaning depends on a durable effect on resources and bargaining. The dated nodes allow tactical tasks to be tested against wider aims at different moments.`,
          ],
          [
            `Мюнхенська промова 19 лютого 2022 року показує українські вимоги до системи безпеки безпосередньо перед вторгненням. Повномасштабний напад 24 лютого створив новий набір безпосередніх цілей — виживання держави, оборону території та мобілізацію зовнішньої підтримки. Ці статті фіксують позиції й дії на початку фази, але не вичерпують подальшої еволюції військових і політичних завдань.`,
            `Стамбульський раунд 29 березня 2022 року показує спробу пов'язати воєнну обстановку з пропозиціями щодо нейтралітету й гарантій. Операція «Павутина» 1 червня 2025 року, навпаки, є конкретним ураженням військових об'єктів, стратегічний сенс якого залежить від стійкого впливу на ресурси та переговори. Датовані вузли дають змогу перевіряти, як тактичне завдання входить до ширшої мети в різні моменти.`,
          ]
        ),
      },
      {
        title: L(`Официальная цель и предел документального вывода`, `The official aim and the limits of documentary inference`, `Офіційна мета та межі документального висновку`),
        paragraphs: P(
          [
            `Резолюция Генеральной Ассамблеи ES-11/1 устанавливает международную оценку российского вторжения и требование прекратить применение силы. Официальные украинские речи и сообщения устанавливают заявленные цели защиты и конкретных операций. Стамбульские заявления фиксируют предложения на переговорах. Каждый источник надёжно сообщает публичную позицию своего автора или органа на указанную дату.`,
            `Эти документы не раскрывают закрытый процесс принятия решений, полный перечень целей противника или минимальные условия будущего компромисса. Намерение нельзя доказывать только результатом: неудача может скрыть исходную цель, а непредвиденный успех — изменить её. Более сильный вывод требует сопоставить последовательные заявления, оперативные решения, расход ресурсов и поведение при появлении альтернатив.`,
          ],
          [
            `General Assembly Resolution ES-11/1 establishes the international assessment of Russia's invasion and the demand to end the use of force. Official Ukrainian speeches and statements establish declared defensive and operational aims. Istanbul statements record negotiating proposals. Each source reliably reports its author's or institution's public position on a specified date.`,
            `These records do not reveal classified decision-making, an adversary's complete list of aims, or minimum terms for a future compromise. Intent cannot be proved from outcome alone: failure may conceal an original aim, while unexpected success may change it. A stronger inference compares successive statements, operational choices, resource expenditure, and behaviour when alternatives emerge.`,
          ],
          [
            `Резолюція Генеральної Асамблеї ES-11/1 встановлює міжнародну оцінку російського вторгнення й вимогу припинити застосування сили. Офіційні українські промови та повідомлення встановлюють заявлені цілі захисту й конкретних операцій. Стамбульські заяви фіксують переговорні пропозиції. Кожне джерело надійно повідомляє публічну позицію автора чи органу на зазначену дату.`,
            `Ці документи не розкривають закритий процес ухвалення рішень, повний перелік цілей противника або мінімальні умови майбутнього компромісу. Намір не можна доводити лише результатом: невдача може приховати початкову мету, а непередбачений успіх — змінити її. Сильніший висновок потребує зіставити послідовні заяви, оперативні рішення, витрати ресурсів і поведінку під час появи альтернатив.`,
          ]
        ),
      },
      {
        title: L(`Рациональность, символический эффект и меняющиеся цели`, `Rationality, symbolic effect, and changing aims`, `Раціональність, символічний ефект і мінливі цілі`),
        paragraphs: P(
          [
            `Один подход предполагает, что огромные издержки обязательно обслуживают связную рациональную программу. Другой объясняет войну иррациональностью и тем самым отказывается искать механизм. Реальные решения могут сочетать стратегический расчёт, ошибочную информацию, бюрократические интересы и символические задачи. Политическая цель остаётся необходимым вопросом, но не обязана быть разумной, единой или достижимой.`,
            `Медийный эффект тоже может быть средством: поддерживать мобилизацию, убеждать союзников или давить на переговоры. Он становится самостоятельной целью лишь тогда, когда поведение устойчиво жертвует иными результатами ради аудитории. Предел анализа проходит там, где интерпретация мотивов выдаётся за установленный факт. Корректнее предлагать несколько гипотез и заранее указывать, какое следующее действие различит их.`,
          ],
          [
            `One approach assumes that enormous costs must serve a coherent rational programme. Another explains war through irrationality and stops looking for a mechanism. Actual decisions may combine strategic calculation, faulty information, bureaucratic interests, and symbolic tasks. A political aim remains a necessary question but need not be wise, unified, or attainable.`,
            `Media effect may also be a means: sustaining mobilisation, persuading allies, or pressuring negotiations. It becomes an aim in itself only when conduct consistently sacrifices other outcomes for an audience. Analysis reaches its limit when an interpretation of motives is presented as established fact. It is more accurate to offer several hypotheses and identify in advance what future action would distinguish them.`,
          ],
          [
            `Один підхід припускає, що величезні витрати обов'язково обслуговують зв'язну раціональну програму. Інший пояснює війну ірраціональністю й перестає шукати механізм. Реальні рішення можуть поєднувати стратегічний розрахунок, хибну інформацію, бюрократичні інтереси та символічні завдання. Політична мета лишається необхідним питанням, але не зобов'язана бути розумною, єдиною чи досяжною.`,
            `Медійний ефект також може бути засобом: підтримувати мобілізацію, переконувати союзників або тиснути на переговори. Він стає самостійною метою лише тоді, коли поведінка послідовно жертвує іншими результатами заради аудиторії. Межа аналізу проходить там, де тлумачення мотивів видають за встановлений факт. Точніше запропонувати кілька гіпотез і наперед указати, яка наступна дія їх розрізнить.`,
          ]
        ),
      },
    ],
  },

  'concept-ideology-prevalence': {
    lead: L(
      `Распространённость идеологии нельзя устанавливать по одной цитате, имени исторического деятеля, памятнику или даже одному закону. Идеология становится общественно значимой, когда устойчивый набор представлений разделяется заметной частью населения, воспроизводится организациями и влияет на решения. Для оценки Украины нужны сопоставимые данные о массовых установках, выборах, институтах, программах и практике во времени. Отдельный радикальный пример может быть важен как сигнал, но не показывает размер явления и не даёт основания приписывать его всему государству.`,
      `The prevalence of an ideology cannot be established by one quotation, historical figure, monument, or even a single statute. An ideology becomes socially significant when a durable set of beliefs is shared by a substantial population, reproduced by organisations, and influences decisions. Assessing Ukraine requires comparable evidence on mass attitudes, elections, institutions, programmes, and practice over time. A radical example may be an important signal, but it neither measures the phenomenon nor permits attribution to an entire state.`,
      `Поширеність ідеології не можна встановити за однією цитатою, іменем історичної постаті, пам'ятником або навіть одним законом. Ідеологія стає суспільно значущою, коли стійкий набір уявлень поділяє помітна частина населення, його відтворюють організації й він впливає на рішення. Для оцінки України потрібні зіставні дані про масові установки, вибори, інституції, програми та практику в часі. Окремий радикальний приклад може бути важливим сигналом, але не вимірює явища й не дозволяє приписувати його всій державі.`
    ),
    sections: [
      {
        title: L(`Масштаб, организация и влияние`, `Scale, organisation, and influence`, `Масштаб, організація та вплив`),
        paragraphs: P(
          [
            `Минимальный порог включает определение самой идеологии и признаков, по которым она отличима от патриотизма, консерватизма, протеста или ситуативной военной риторики. Затем измеряются доля сторонников, устойчивость во времени, организационная сеть и способность влиять на обязательные решения. Без этого ярлык адаптируется к любому неудобному высказыванию и теряет проверяемое содержание.`,
            `Разные показатели не взаимозаменяемы. Электоральный результат показывает поддержку списка в конкретной кампании, но не полное мировоззрение каждого избирателя. Государственная программа показывает решение органа, но не степень внутреннего согласия общества. Наличие символа говорит о политике памяти, а преступление участника движения требует индивидуальной атрибуции и не измеряет автоматически массовую поддержку.`,
          ],
          [
            `The minimum threshold requires defining the ideology and indicators that distinguish it from patriotism, conservatism, protest, or situational wartime rhetoric. Its share of supporters, persistence over time, organisational network, and capacity to influence binding decisions can then be measured. Without this discipline, a label adapts to every objectionable statement and loses testable meaning.`,
            `Indicators are not interchangeable. An electoral result shows support for a list in a particular campaign, not every voter's complete worldview. A state programme shows an institution's decision, not society's level of internal agreement. A symbol reveals memory policy, while an offence by a movement participant requires individual attribution and does not automatically measure popular support.`,
          ],
          [
            `Мінімальний поріг потребує визначити саму ідеологію та ознаки, що відрізняють її від патріотизму, консерватизму, протесту чи ситуативної воєнної риторики. Потім вимірюють частку прихильників, стійкість у часі, організаційну мережу й здатність впливати на обов'язкові рішення. Без цього ярлик пристосовується до кожного небажаного висловлювання й втрачає перевірюваний зміст.`,
            `Різні показники не взаємозамінні. Виборчий результат показує підтримку списку в конкретній кампанії, але не повний світогляд кожного виборця. Державна програма показує рішення органу, але не ступінь внутрішньої згоди суспільства. Наявність символу свідчить про політику пам'яті, а злочин учасника руху потребує індивідуальної атрибуції й не вимірює автоматично масову підтримку.`,
          ]
        ),
      },
      {
        title: L(`Политические сдвиги от 2014 к 2022 году`, `Political shifts from 2014 to 2022`, `Політичні зрушення від 2014 до 2022 року`),
        paragraphs: P(
          [
            `Смена власти 22 февраля 2014 года сопровождалась сильной символической мобилизацией, но сама статья о переходе касается постановления Рады, процедуры и институциональной непрерывности. Из присутствия отдельных групп в протесте нельзя вывести идеологию всего перехода. Для этого потребовалось бы сравнить их численность, влияние на решения, результаты последующих выборов и длительность организационного присутствия.`,
            `Языковой закон 25 апреля 2019 года показывает конкретное направление политики идентичности. Мюнхенская речь 19 февраля и полномасштабное вторжение 24 февраля 2022 года изменили среду: оборонная мобилизация и дистанцирование от России усилились. Эти даты объясняют изменение риторики, но не позволяют автоматически считать всякую военную солидарность доказательством одной крайней идеологии.`,
          ],
          [
            `The transfer of power on 22 February 2014 involved intense symbolic mobilisation, but the article on transition concerns the Rada resolution, procedure, and institutional continuity. The presence of particular groups in protest does not establish the ideology of the entire transition. That would require comparing their numbers, influence on decisions, subsequent electoral results, and duration of organisational presence.`,
            `The language law of 25 April 2019 shows a concrete direction in identity policy. The Munich speech of 19 February and full-scale invasion of 24 February 2022 changed the environment: defensive mobilisation and distancing from Russia intensified. Those dates explain rhetorical change but do not make every expression of wartime solidarity proof of one extreme ideology.`,
          ],
          [
            `Зміна влади 22 лютого 2014 року супроводжувалася сильною символічною мобілізацією, але сама стаття про перехід стосується постанови Ради, процедури та інституційної безперервності. З присутності окремих груп у протесті не випливає ідеологія всього переходу. Для цього треба було б порівняти їх чисельність, вплив на рішення, результати наступних виборів і тривалість організаційної присутності.`,
            `Мовний закон 25 квітня 2019 року показує конкретний напрям політики ідентичності. Мюнхенська промова 19 лютого й повномасштабне вторгнення 24 лютого 2022 року змінили середовище: оборонна мобілізація та дистанціювання від Росії посилилися. Ці дати пояснюють зміну риторики, але не дозволяють автоматично вважати кожну воєнну солідарність доказом однієї крайньої ідеології.`,
          ]
        ),
      },
      {
        title: L(`Официальный акт показывает политику, а не массовое убеждение`, `An official act shows policy, not mass belief`, `Офіційний акт показує політику, а не масове переконання`),
        paragraphs: P(
          [
            `Постановление № 757-VII, языковой закон и официальная речь достоверно устанавливают действия и формулировки государственных органов. Венецианская комиссия оценивает правовой баланс языковой политики. Эти источники позволяют изучать институциональный уровень идеологии: какие ценности закреплены и какие меры применяются. Они не сообщают, сколько граждан разделяет цель и по каким причинам.`,
            `Для вывода о распространённости нужны репрезентативные опросы с устойчивыми вопросами, электоральные данные, членство и активность организаций, анализ образовательной и медийной практики. Даже здесь требуется осторожность: ответ во время войны может отражать безопасность и групповую солидарность, а не долговременную доктрину. Официальный документ становится одним показателем среди нескольких, а не заменой социальной картины.`,
          ],
          [
            `Resolution No. 757-VII, the language law, and an official speech reliably establish state actions and wording. The Venice Commission assesses the legal balance of language policy. These sources support study of ideology at institutional level: which values are formalised and which measures apply. They do not show how many citizens share the objective or why.`,
            `Prevalence requires representative surveys with stable questions, electoral data, organisational membership and activity, and analysis of educational and media practice. Caution remains necessary: a wartime response may express security concerns and group solidarity rather than a durable doctrine. The official record becomes one indicator among several, not a substitute for the social picture.`,
          ],
          [
            `Постанова № 757-VII, мовний закон і офіційна промова достовірно встановлюють дії та формулювання державних органів. Венеційська комісія оцінює правовий баланс мовної політики. Ці джерела дають змогу вивчати інституційний рівень ідеології: які цінності закріплено та які заходи застосовують. Вони не повідомляють, скільки громадян поділяє мету й з яких причин.`,
            `Для висновку про поширеність потрібні репрезентативні опитування зі сталими питаннями, виборчі дані, членство й активність організацій, аналіз освітньої та медійної практики. Навіть тут потрібна обережність: відповідь під час війни може відображати безпеку й групову солідарність, а не тривалу доктрину. Офіційний документ стає одним показником серед кількох, а не заміною суспільної картини.`,
          ]
        ),
      },
      {
        title: L(`Между отрицанием угрозы и коллективным ярлыком`, `Between denying a threat and imposing a collective label`, `Між запереченням загрози та колективним ярликом`),
        paragraphs: P(
          [
            `Требование измерять масштаб не означает игнорировать малую радикальную группу: организованное меньшинство способно причинить серьёзный вред или влиять непропорционально численности. Но из способности группы к насилию не следует, что её взгляды господствуют в обществе. Следует отдельно оценивать распространённость, доступ к власти и конкретную операционную опасность.`,
            `Противоположная ошибка использует единичный пример, чтобы лишить целое население политической субъектности или оправдать внешнее насилие. Идеологический ярлык не заменяет атрибуцию решения и не отменяет правовой статус государства. Обоснованный спор указывает определение, период, сравнимую базу и возможное опровержение; без них он остаётся способом морального именования противника, а не исследованием.`,
          ],
          [
            `Requiring measurement does not mean ignoring a small radical group: an organised minority may cause serious harm or exercise influence disproportionate to its numbers. Yet a group's capacity for violence does not show that its views dominate society. Prevalence, access to power, and a specific operational threat must be assessed separately.`,
            `The opposite error uses a single example to deprive an entire population of political agency or justify external violence. An ideological label does not replace attribution of a decision or erase a state's legal status. A sound dispute states its definition, period, comparison base, and possible disproof; without them, it remains moral naming of an opponent rather than research.`,
          ],
          [
            `Вимога вимірювати масштаб не означає ігнорувати малу радикальну групу: організована меншість здатна завдати серйозної шкоди або впливати непропорційно чисельності. Проте зі здатності групи до насильства не випливає, що її погляди панують у суспільстві. Треба окремо оцінювати поширеність, доступ до влади й конкретну операційну небезпеку.`,
            `Протилежна помилка використовує одиничний приклад, щоб позбавити ціле населення політичної суб'єктності або виправдати зовнішнє насильство. Ідеологічний ярлик не замінює атрибуцію рішення й не скасовує правовий статус держави. Обґрунтована суперечка вказує визначення, період, зіставну базу та можливе спростування; без них вона лишається моральним найменуванням противника, а не дослідженням.`,
          ]
        ),
      },
    ],
  },

  'concept-population-emigration': {
    lead: L(
      `Эмиграция и вынужденное перемещение меняют не только численность населения, но и способность общества поддерживать семьи, экономику, оборону и институты. При этом зарегистрированный беженец, временно перемещённый человек, трудовой мигрант и гражданин, окончательно сменивший место жизни, — не одна статистическая группа. Для Украины после 2022 года ключевой вопрос состоит не только в масштабе выезда, но и в продолжительности отсутствия, составе домохозяйств, условиях возвращения и связи людей с украинским образованием, рынком труда и публичными услугами.`,
      `Emigration and forced displacement change not only population size but a society's ability to sustain families, the economy, defence, and institutions. A registered refugee, a temporarily displaced person, a labour migrant, and a citizen who has permanently relocated are not one statistical group. For Ukraine after 2022, the central question is not only the scale of departure but its duration, household composition, conditions for return, and people's continuing links to Ukrainian education, labour markets, and public services.`,
      `Еміграція та вимушене переміщення змінюють не лише чисельність населення, а й здатність суспільства підтримувати родини, економіку, оборону та інституції. Зареєстрований біженець, тимчасово переміщена людина, трудовий мігрант і громадянин, який остаточно змінив місце життя, — не одна статистична група. Для України після 2022 року ключове питання полягає не лише в масштабі виїзду, а й у тривалості відсутності, складі домогосподарств, умовах повернення та зв'язку людей з українською освітою, ринком праці й публічними послугами.`
    ),
    sections: [
      {
        title: L(`Поток, запас населения и человеческий капитал`, `Flows, population stock, and human capital`, `Потік, чисельність населення та людський капітал`),
        paragraphs: P(
          [
            `Порог измерения начинается с периода и единицы учёта. Число пересечений границы не равно числу уехавших людей, регистрация защиты не доказывает постоянного проживания, а текущий запас за рубежом отличается от суммарного потока. Повторные поездки, возвращения и изменение статуса должны учитываться, иначе одна и та же биография попадает в итог несколько раз.`,
            `Человеческий капитал включает образование, навыки, здоровье, профессиональные сети и способность передавать их следующим поколениям. Его потерю нельзя свести к вычитанию работников: человек за рубежом может продолжать платить налоги, работать на украинскую организацию или вернуться с новыми навыками. Но длительное отделение детей от системы образования и семей от рынка труда повышает вероятность закрепления жизни в другой стране.`,
          ],
          [
            `Measurement begins with a period and unit of account. Border crossings are not the number of people who left, registration for protection does not prove permanent residence, and a current stock abroad differs from a cumulative flow. Repeat journeys, returns, and status changes must be accounted for or one biography will appear several times in the total.`,
            `Human capital includes education, skills, health, professional networks, and the ability to pass them to another generation. Its loss cannot be reduced to subtracting workers: a person abroad may keep paying taxes, work for a Ukrainian organisation, or return with new skills. Yet prolonged separation of children from the education system and families from the labour market increases the likelihood of settlement elsewhere.`,
          ],
          [
            `Вимірювання починається з періоду й одиниці обліку. Кількість перетинів кордону не дорівнює кількості людей, які виїхали, реєстрація захисту не доводить постійного проживання, а поточна чисельність за кордоном відрізняється від сумарного потоку. Повторні поїздки, повернення та зміни статусу треба враховувати, інакше одна біографія потрапить у підсумок кілька разів.`,
            `Людський капітал охоплює освіту, навички, здоров'я, професійні мережі та здатність передавати їх наступним поколінням. Його втрату не можна звести до віднімання працівників: людина за кордоном може далі платити податки, працювати на українську організацію або повернутися з новими навичками. Але тривале відокремлення дітей від освітньої системи й родин від ринку праці підвищує ймовірність закріплення життя в іншій країні.`,
          ]
        ),
      },
      {
        title: L(`Вторжение, правовой режим и ожидание возвращения`, `Invasion, legal regime, and expectations of return`, `Вторгнення, правовий режим і очікування повернення`),
        paragraphs: P(
          [
            `Полномасштабное вторжение 24 февраля 2022 года создало непосредственный импульс массового вынужденного выезда. Введение военного положения в тот же день изменило внутренний режим управления, мобилизации и пересечения границы для разных групп. Эти две статьи помогают объяснить резкий поток, но долгосрочная эмиграция зависит также от безопасности жилья, занятости, школ и продолжительности войны.`,
            `Стамбульский раунд 29 марта 2022 года представлял раннюю возможность ожидать более короткую войну, тогда как объявление об аннексии четырёх областей 30 сентября закрепило территориальную неопределённость для многих семей. Переговорный эпизод и последующая эскалация влияют на ожидания возврата, но не позволяют заранее определить индивидуальное решение: люди реагируют на разные риски и ресурсы.`,
          ],
          [
            `The full-scale invasion of 24 February 2022 created the immediate impulse for mass forced departure. Martial law introduced that day changed domestic governance, mobilisation, and border-crossing conditions for different groups. The two articles explain the sudden flow, but long-term emigration also depends on housing security, employment, schools, and the war's duration.`,
            `The Istanbul round of 29 March 2022 offered an early reason to expect a shorter war, while the claimed annexation of four regions on 30 September entrenched territorial uncertainty for many families. A negotiating episode and later escalation shape expectations of return but cannot predict individual decisions: people respond to different risks and resources.`,
          ],
          [
            `Повномасштабне вторгнення 24 лютого 2022 року створило безпосередній імпульс масового вимушеного виїзду. Запровадження воєнного стану того ж дня змінило внутрішній режим управління, мобілізації та перетину кордону для різних груп. Ці дві статті допомагають пояснити різкий потік, але довгострокова еміграція залежить також від безпеки житла, зайнятості, шкіл і тривалості війни.`,
            `Стамбульський раунд 29 березня 2022 року давав ранню можливість очікувати коротшої війни, тоді як оголошення про анексію чотирьох областей 30 вересня закріпило територіальну невизначеність для багатьох родин. Переговорний епізод і подальша ескалація впливають на очікування повернення, але не визначають індивідуального рішення: люди реагують на різні ризики й ресурси.`,
          ]
        ),
      },
      {
        title: L(`Что показывает регистрация УВКБ ООН`, `What UNHCR registration data show`, `Що показують реєстраційні дані УВКБ ООН`),
        paragraphs: P(
          [
            `Портал УВКБ ООН по ситуации в Украине собирает институциональные данные о беженцах и формах защиты в принимающих странах. Он позволяет следить за масштабом зарегистрированного перемещения и сравнивать даты. Это важная опора, но показатель зависит от национальных систем регистрации, не охватывает одинаково всех уехавших и не сообщает автоматически о намерении остаться навсегда.`,
            `Законы о военном положении и мобилизации показывают правовые условия внутри Украины, но не измеряют эмиграционный поток. Для полной картины нужны пограничные данные без повторного счёта, демографические оценки, школьная и трудовая статистика, опросы намерений и сведения о возвратах. Ни один ряд не следует превращать в точную численность населения без описания метода и даты среза.`,
          ],
          [
            `UNHCR's Ukraine situation portal compiles institutional data on refugees and forms of protection in host countries. It supports monitoring the scale of registered displacement and comparing dates. This is an important anchor, but the indicator depends on national registration systems, does not cover every person who left in the same way, and does not automatically reveal an intention to remain permanently.`,
            `Martial-law and mobilisation statutes show legal conditions within Ukraine but do not measure emigration. A fuller picture requires border data without double counting, demographic estimates, school and labour statistics, surveys of intentions, and return data. No series should be converted into an exact population total without describing the method and observation date.`,
          ],
          [
            `Портал УВКБ ООН щодо ситуації в Україні збирає інституційні дані про біженців і форми захисту в країнах прийому. Він дає змогу стежити за масштабом зареєстрованого переміщення й порівнювати дати. Це важлива опора, але показник залежить від національних систем реєстрації, не охоплює однаково всіх, хто виїхав, і не повідомляє автоматично про намір залишитися назавжди.`,
            `Закони про воєнний стан і мобілізацію показують правові умови всередині України, але не вимірюють еміграційний потік. Для повної картини потрібні прикордонні дані без повторного рахунку, демографічні оцінки, шкільна й трудова статистика, опитування намірів і відомості про повернення. Жоден ряд не слід перетворювати на точну чисельність населення без опису методу й дати зрізу.`,
          ]
        ),
      },
      {
        title: L(`Свобода выбора, возвращение и государственная политика`, `Freedom of choice, return, and state policy`, `Свобода вибору, повернення та державна політика`),
        paragraphs: P(
          [
            `Одна трактовка описывает отъезд главным образом как потерю и требует стимулировать возвращение; другая подчёркивает право человека строить безопасную жизнь там, где это возможно. Государственная политика должна избегать обвинения уехавших и сосредоточиться на условиях: безопасность, жильё, работа, признание квалификаций, школы и связь семей сильнее влияют на решение, чем моральный призыв.`,
            `Есть предел и у оптимистической идеи «диаспора всё компенсирует». Денежные переводы и внешние сети полезны, но не заменяют присутствие специалистов, налоговую базу и ежедневное воспроизводство институтов. Обратная крайность считает любой длительный выезд необратимым. Корректнее строить сценарии по возрасту, профессии и региону, признавая, что возвращение может быть частичным, циклическим и зависимым от окончания войны.`,
          ],
          [
            `One interpretation treats departure mainly as loss and urges policies to induce return; another stresses each person's right to build a safe life where possible. State policy should avoid blaming those who left and focus on conditions: security, housing, work, recognition of qualifications, schools, and family connections influence decisions more than moral appeals.`,
            `The optimistic idea that “the diaspora compensates for everything” also has limits. Remittances and external networks help but do not replace the presence of professionals, a tax base, and daily reproduction of institutions. The opposite extreme treats every prolonged departure as irreversible. Better scenarios distinguish age, profession, and region and recognise that return may be partial, circular, and dependent on war termination.`,
          ],
          [
            `Одне тлумачення описує виїзд переважно як втрату й вимагає стимулювати повернення; інше наголошує на праві людини будувати безпечне життя там, де це можливо. Державна політика має уникати звинувачення тих, хто виїхав, і зосередитися на умовах: безпека, житло, робота, визнання кваліфікацій, школи та зв'язок родин впливають на рішення сильніше за моральний заклик.`,
            `Має межі й оптимістична ідея, що «діаспора все компенсує». Грошові перекази та зовнішні мережі корисні, але не замінюють присутності фахівців, податкової бази й щоденного відтворення інституцій. Протилежна крайність вважає кожний тривалий виїзд незворотним. Точніше будувати сценарії за віком, професією й регіоном, визнаючи, що повернення може бути частковим, циклічним і залежним від завершення війни.`,
          ]
        ),
      },
    ],
  },

  'concept-wartime-electoral-continuity': {
    lead: L(
      `Непрерывность выборной власти во время войны возникает из столкновения трёх правил: обычного срока мандата, запрета или невозможности провести полноценные выборы при военном положении и необходимости не допустить вакуума должности. Эти правила нельзя читать как одну фразу. Юридическое продолжение исполнения полномочий обеспечивает работу государства, но не отменяет политический вопрос о подотчётности и возвращении к выборам. С другой стороны, истечение календарного срока не означает автоматической утраты всех полномочий, если конституционный порядок прямо регулирует переход к преемнику.`,
      `Continuity of elected office during war arises from the interaction of three rules: the ordinary term, the prohibition or practical impossibility of full elections under martial law, and the need to prevent an office from becoming vacant. They cannot be collapsed into one sentence. Legal continuation preserves state operation but does not remove political questions of accountability and return to elections. Conversely, the calendar expiry of a term does not automatically end all authority when the constitutional order expressly regulates transition to a successor.`,
      `Безперервність виборної влади під час війни виникає зі взаємодії трьох правил: звичайного строку мандата, заборони або практичної неможливості повноцінних виборів за воєнного стану й необхідності не допустити вакансії посади. Їх не можна згорнути в одну фразу. Правове продовження повноважень зберігає роботу держави, але не усуває політичного питання про підзвітність і повернення до виборів. Водночас сплив календарного строку не припиняє автоматично всі повноваження, якщо конституційний порядок прямо регулює перехід до наступника.`
    ),
    sections: [
      {
        title: L(`Срок мандата, продолжение функции и выборный запрет`, `Term, continuation of function, and election bar`, `Строк мандата, продовження функції та виборча заборона`),
        paragraphs: P(
          [
            `Обычный срок сообщает, когда в нормальных условиях должен обновиться мандат. Норма о продолжении исполнения до вступления преемника предотвращает институциональный разрыв. Правило военного положения отвечает, можно ли организовать голосование в текущем режиме. Каждое имеет свой предмет; ссылка только на одно создаёт либо мнимый вакуум, либо видимость бессрочного мандата.`,
            `Юридическая непрерывность не тождественна новой электоральной поддержке. Она сохраняет компетенцию на период исключительных условий и требует процедурных ограничителей: парламентского и судебного контроля, публичного объяснения продления режима, равного применения и ясного пути к назначению выборов после снятия препятствия. Чем дольше период, тем важнее эти заменяющие механизмы подотчётности.`,
          ],
          [
            `The ordinary term indicates when a mandate should be renewed under normal conditions. A continuation rule until a successor takes office prevents an institutional break. Martial-law rules answer whether voting may be organised under the current regime. Each has a distinct subject; citing only one creates either an imaginary vacancy or the appearance of an indefinite mandate.`,
            `Legal continuity is not a renewed electoral endorsement. It preserves competence during exceptional conditions and requires procedural safeguards: parliamentary and judicial oversight, public explanation for extending the regime, equal application, and a clear route to elections after the obstacle is removed. The longer the period, the more important these substitute accountability mechanisms become.`,
          ],
          [
            `Звичайний строк повідомляє, коли за нормальних умов мандат має оновитися. Норма про продовження виконання до вступу наступника запобігає інституційному розриву. Правила воєнного стану відповідають, чи можна організувати голосування в поточному режимі. Кожне має окремий предмет; посилання лише на одне створює або уявну вакансію, або видимість безстрокового мандата.`,
            `Правова безперервність не тотожна новій виборчій підтримці. Вона зберігає компетенцію на період виняткових умов і потребує процедурних запобіжників: парламентського та судового контролю, публічного пояснення продовження режиму, рівного застосування й ясного шляху до призначення виборів після усунення перешкоди. Що довший період, то важливіші ці замінні механізми підзвітності.`,
          ]
        ),
      },
      {
        title: L(`Урок перехода 2014 года и режим 2022 года`, `The 2014 transition and the 2022 regime`, `Урок переходу 2014 року та режим 2022 року`),
        paragraphs: P(
          [
            `Статья о смене власти 22 февраля 2014 года показывает, насколько важно различать происхождение мандата, предусмотренные способы его досрочного прекращения и последующую электоральную легитимацию. Тогда спор возник из-за прекращения исполнения президентских обязанностей и назначения досрочных выборов. Этот эпизод не даёт готового ответа для войны 2022 года, но задаёт дисциплину чтения компетенций.`,
            `Полномасштабное вторжение и введение военного положения 24 февраля 2022 года создали фактическую и правовую преграду обычному избирательному календарю. Оккупация, перемещение миллионов людей, участие военнослужащих и безопасность агитации затрагивают равенство голосования. Одновременно статья о военном положении фиксирует формальные правила, которые следует анализировать отдельно от политической популярности действующей власти.`,
          ],
          [
            `The article on the transfer of power on 22 February 2014 shows why the origin of a mandate, prescribed routes for ending it early, and later electoral legitimation must be distinguished. The dispute then concerned the president ceasing to perform his duties and the scheduling of an early election. That episode does not answer the 2022 wartime question, but it supplies a discipline for reading powers.`,
            `The full-scale invasion and introduction of martial law on 24 February 2022 created factual and legal obstacles to the ordinary electoral calendar. Occupation, displacement of millions, military participation, and campaign security affect electoral equality. At the same time, the martial-law article records formal rules that must be analysed separately from the current government's political popularity.`,
          ],
          [
            `Стаття про зміну влади 22 лютого 2014 року показує, чому слід розрізняти походження мандата, передбачені способи його дострокового припинення та наступну виборчу легітимацію. Тоді суперечка виникла через припинення виконання президентських обов'язків і призначення дострокових виборів. Цей епізод не дає готової відповіді для війни 2022 року, але задає дисципліну читання повноважень.`,
            `Повномасштабне вторгнення та запровадження воєнного стану 24 лютого 2022 року створили фактичні й правові перешкоди звичайному виборчому календарю. Окупація, переміщення мільйонів людей, участь військовослужбовців і безпека агітації впливають на рівність голосування. Водночас стаття про воєнний стан фіксує формальні правила, які слід аналізувати окремо від політичної популярності чинної влади.`,
          ]
        ),
      },
      {
        title: L(`Конституция, закон о военном положении и позиция ЦИК`, `The Constitution, martial-law statute, and the election authority`, `Конституція, закон про воєнний стан і позиція ЦВК`),
        paragraphs: P(
          [
            `Конституционные положения об обычном сроке президентских полномочий и их исполнении до вступления новоизбранного преемника отвечают на связанные, но разные вопросы. Закон о правовом режиме военного положения запрещает проведение выборов в период действия режима и сохраняет полномочия органов, которые иначе могли бы прекратиться. Совместное чтение устраняет простой календарный вывод о вакансии.`,
            `Официальное разъяснение руководства Центральной избирательной комиссии подтверждает институциональное понимание избирательного календаря, но не заменяет судебное толкование и политическую дискуссию. Документы устанавливают текущую правовую конструкцию; они не определяют оптимальную дату после снятия режима, техническую модель голосования перемещённых граждан или справедливые условия доступа конкурентов к медиа.`,
          ],
          [
            `Constitutional provisions on the ordinary presidential term and continuation until a newly elected successor takes office answer related but different questions. The statute on the legal regime of martial law bars elections while the regime operates and preserves powers of bodies that might otherwise expire. Reading them together removes the simplistic calendar claim of a vacancy.`,
            `An official explanation by the leadership of the Central Election Commission confirms the institutional reading of the electoral calendar but does not replace judicial interpretation or political debate. The documents establish the current legal design; they do not determine the best post-regime date, the technical model for displaced voters, or fair media access for competitors.`,
          ],
          [
            `Конституційні положення про звичайний строк президентських повноважень і їх виконання до вступу новообраного наступника відповідають на пов'язані, але різні питання. Закон про правовий режим воєнного стану забороняє проведення виборів під час дії режиму й зберігає повноваження органів, які інакше могли б припинитися. Спільне читання усуває спрощений календарний висновок про вакансію.`,
            `Офіційне роз'яснення керівництва Центральної виборчої комісії підтверджує інституційне розуміння виборчого календаря, але не замінює судового тлумачення й політичної дискусії. Документи встановлюють поточну правову конструкцію; вони не визначають найкращу дату після скасування режиму, технічну модель голосування переміщених громадян або справедливий доступ конкурентів до медіа.`,
          ]
        ),
      },
      {
        title: L(`Легитимность без вакуума и без бессрочности`, `Legitimacy without vacancy or permanence`, `Легітимність без вакууму й безстроковості`),
        paragraphs: P(
          [
            `Критики продолжения мандата опасаются концентрации власти и утраты свежего народного согласия. Сторонники подчёркивают невозможность равного голосования под обстрелами, на оккупированных территориях и при массовом перемещении. Оба риска реальны. Правовой режим решает вопрос непрерывности, а демократическая политика должна дополнительно сохранять конкуренцию мнений, контроль расходов и возможность критики.`,
            `Продление не должно становиться наградой за бесконечное чрезвычайное положение. Переход к выборам требует заранее обсуждённых критериев безопасности, обновления реестра, правил для военных и граждан за рубежом, а также разумного времени для кампании. Но преждевременное голосование, исключающее значительные группы, может дать формальный акт без равной представительности. Предел выбирается по фактическим условиям, а не по удобству одной стороны.`,
          ],
          [
            `Critics of continuity fear concentrated power and the loss of renewed popular consent. Supporters stress that equal voting is impossible under attack, in occupied territory, and amid mass displacement. Both risks are real. The legal regime answers continuity, while democratic politics must also preserve competition of views, spending oversight, and the ability to criticise.`,
            `Continuation should not reward an endless emergency. A return to elections needs pre-agreed security criteria, an updated register, rules for service members and citizens abroad, and reasonable campaign time. Yet premature voting that excludes substantial groups may produce a formal act without equal representation. The boundary should follow factual conditions, not one side's convenience.`,
          ],
          [
            `Критики продовження мандата побоюються концентрації влади й втрати оновленої народної згоди. Прихильники наголошують на неможливості рівного голосування під обстрілами, на окупованих територіях і за масового переміщення. Обидва ризики реальні. Правовий режим відповідає на питання безперервності, а демократична політика має додатково зберігати конкуренцію поглядів, контроль витрат і можливість критики.`,
            `Продовження не повинно ставати винагородою за нескінченний надзвичайний стан. Перехід до виборів потребує наперед обговорених критеріїв безпеки, оновлення реєстру, правил для військових і громадян за кордоном, а також розумного часу для кампанії. Але передчасне голосування, що виключає значні групи, може дати формальний акт без рівного представництва. Межу слід обирати за фактичними умовами, а не за зручністю однієї сторони.`,
          ]
        ),
      },
    ],
  },

  'concept-negotiation-status': {
    lead: L(
      `Переговорный документ меняет значение по мере прохождения стадий: устное предложение, письменный проект, согласованная рамка, парафированный текст, подписанный договор и вступившее в силу обязательство дают разную степень определённости. Даже подробный проект может сохранять квадратные скобки, нерешённые приложения и отсутствие согласия потенциальных гарантов. Поэтому вопрос о том, «был ли мир готов», следует разложить на проверяемые элементы: какой текст существовал на конкретную дату, кто его одобрил, какие вопросы оставались открытыми и какая процедура ещё требовалась.`,
      `A negotiating document changes meaning as it passes through stages: an oral proposal, written draft, agreed framework, initialled text, signed treaty, and obligation in force provide different levels of certainty. Even a detailed draft may retain bracketed language, unresolved annexes, and no consent from prospective guarantors. The question “was peace ready?” must therefore be divided into testable elements: which text existed on a given date, who approved it, what remained open, and which procedure still had to occur.`,
      `Переговорний документ змінює значення під час проходження стадій: усна пропозиція, письмовий проєкт, узгоджена рамка, парафований текст, підписаний договір і чинне зобов'язання дають різний ступінь визначеності. Навіть докладний проєкт може містити неузгоджені формули, невирішені додатки та відсутність згоди потенційних гарантів. Тому питання, «чи був мир готовий», слід розкласти на перевірювані елементи: який текст існував на конкретну дату, хто його схвалив, що лишалося відкритим і яка процедура ще була потрібна.`
    ),
    sections: [
      {
        title: L(`Стадия определяется действием сторон`, `Stage is defined by the parties' acts`, `Стадію визначають дії сторін`),
        paragraphs: P(
          [
            `Название файла или позднейший пересказ не устанавливают статус. Нужно проверить происхождение версии, отметки правок, полномочия делегаций, форму одобрения и наличие подписи. Если стороны согласовали отдельный принцип, это не означает согласия по всему пакету. Формула посредника «ничего не согласовано, пока не согласовано всё» прямо предупреждает против сложения частичных сближений в готовый договор.`,
            `Статус связан и с содержанием. Проект без согласованных гарантий, территориальной формулы или механизма исполнения может быть политически значимым продвижением, но ещё не задаёт обязательного поведения. Подпись, в свою очередь, не всегда завершает процесс, если документ предусматривает дальнейшее утверждение. Точное описание называет достигнутую ступень, а не выбирает самое сильное слово.`,
          ],
          [
            `A file name or later retelling does not establish status. The version's provenance, tracked changes, delegation authority, form of approval, and signatures must be checked. Agreement on one principle is not agreement on the whole package. A mediator's formula that nothing is agreed until everything is agreed directly warns against adding partial convergence into a completed treaty.`,
            `Status also depends on substance. A draft without agreed guarantees, territorial terms, or an implementation mechanism may mark politically significant progress but does not yet prescribe binding conduct. A signature, in turn, may not complete the process if further approval is required. Precise description names the stage actually reached rather than selecting the strongest word.`,
          ],
          [
            `Назва файлу чи пізніший переказ не встановлюють статусу. Треба перевірити походження версії, позначки правок, повноваження делегацій, форму схвалення й наявність підпису. Якщо сторони узгодили окремий принцип, це не означає згоди щодо всього пакета. Формула посередника «нічого не узгоджено, доки не узгоджено все» прямо застерігає від складання часткових зближень у готовий договір.`,
            `Статус пов'язаний і зі змістом. Проєкт без узгоджених гарантій, територіальної формули чи механізму виконання може бути політично значущим поступом, але ще не встановлює обов'язкової поведінки. Підпис, своєю чергою, не завжди завершує процес, якщо документ потребує подальшого схвалення. Точний опис називає досягнуту сходинку, а не обирає найсильніше слово.`,
          ]
        ),
      },
      {
        title: L(`Минский текст и стамбульские предложения`, `The Minsk text and the Istanbul proposals`, `Мінський текст і стамбульські пропозиції`),
        paragraphs: P(
          [
            `Комплекс мер от 12 февраля 2015 года существовал как согласованный документ, поддержанный резолюцией Совета Безопасности, хотя его последовательность и исполнение оставались спорными. Этот пример показывает, что высокий формальный статус не равен успешной реализации. Полномасштабное вторжение 24 февраля 2022 года разрушило рамку, в которой прежние меры должны были привести к урегулированию.`,
            `На стамбульском раунде 29 марта 2022 года украинская делегация официально представила предложения о нейтралитете и системе гарантий. Её сообщение подчёркивало, что документы не были подписаны; турецкий посредник говорил о сближении и необходимости дальнейших уровней переговоров. Сопоставление с Минском не обесценивает Стамбул, а точно помещает его на стадии предложения и работы над возможной рамкой.`,
          ],
          [
            `The Package of Measures of 12 February 2015 existed as an agreed document endorsed by a Security Council resolution, although sequencing and implementation remained disputed. It shows that high formal status is not successful performance. The full-scale invasion of 24 February 2022 destroyed the framework within which the earlier measures were meant to produce a settlement.`,
            `At the Istanbul round on 29 March 2022, the Ukrainian delegation officially presented proposals on neutrality and a guarantee system. Its statement stressed that no documents had been signed; the Turkish mediator described convergence and the need for further negotiating levels. Comparison with Minsk does not diminish Istanbul but accurately locates it at the proposal and potential-framework stage.`,
          ],
          [
            `Комплекс заходів від 12 лютого 2015 року існував як узгоджений документ, підтриманий резолюцією Ради Безпеки, хоча його послідовність і виконання лишалися спірними. Цей приклад показує, що високий формальний статус не дорівнює успішній реалізації. Повномасштабне вторгнення 24 лютого 2022 року зруйнувало рамку, у якій попередні заходи мали привести до врегулювання.`,
            `На стамбульському раунді 29 березня 2022 року українська делегація офіційно представила пропозиції щодо нейтралітету й системи гарантій. Її повідомлення наголошувало, що документи не підписували; турецький посередник говорив про зближення та потребу в наступних рівнях переговорів. Порівняння з Мінськом не знецінює Стамбул, а точно розміщує його на стадії пропозиції та роботи над можливою рамкою.`,
          ]
        ),
      },
      {
        title: L(`Что подтверждают заявления 29–31 марта`, `What the statements of 29–31 March establish`, `Що підтверджують заяви 29–31 березня`),
        paragraphs: P(
          [
            `Официальное сообщение украинской делегации подтверждает содержание представленных ею предложений и отсутствие подписания на тот момент. Обращение президента Украины оценивает сигналы как положительные, но подчёркивает необходимость судить по действиям. Интервью министра иностранных дел Турции фиксирует восприятие посредника: продвижение по отдельным вопросам и незавершённость всего пакета.`,
            `Эти источники не устанавливают полный текст всех обменённых проектов, окончательные полномочия на заключение мира или согласие перечисленных государств стать гарантами. Они также не доказывают единственную причину прекращения переговоров. Чтобы связать позднейший визит, военное событие или политическое решение со срывом, требуется временная последовательность, данные о нерешённых вопросах и свидетельство изменения позиции вследствие именно этого фактора.`,
          ],
          [
            `The Ukrainian delegation's official statement establishes the proposals it presented and the absence of signatures at that time. The Ukrainian president's address describes the signals as positive but stresses judging by actions. The Turkish foreign minister's interview records the mediator's view: progress on particular issues and an incomplete overall package.`,
            `These sources do not establish every exchanged draft's complete text, final authority to conclude peace, or listed states' consent to serve as guarantors. Nor do they prove a single cause for the talks ending. Linking a later visit, military event, or political decision to failure requires chronology, evidence of unresolved issues, and proof that the particular factor changed a party's position.`,
          ],
          [
            `Офіційне повідомлення української делегації підтверджує зміст представлених нею пропозицій і відсутність підписання на той момент. Звернення президента України оцінює сигнали як позитивні, але наголошує на потребі судити за діями. Інтерв'ю міністра закордонних справ Туреччини фіксує сприйняття посередника: поступ з окремих питань і незавершеність усього пакета.`,
            `Ці джерела не встановлюють повний текст усіх обміняних проєктів, остаточні повноваження на укладення миру чи згоду перелічених держав стати гарантами. Вони також не доводять єдину причину припинення переговорів. Щоб пов'язати пізніший візит, воєнну подію або політичне рішення зі зривом, потрібні часова послідовність, дані про невирішені питання та свідчення зміни позиції саме внаслідок цього чинника.`,
          ]
        ),
      },
      {
        title: L(`Между упущенной возможностью и мифом о готовом мире`, `Between a missed opportunity and the myth of a completed peace`, `Між втраченою можливістю та міфом про готовий мир`),
        paragraphs: P(
          [
            `Одна интерпретация видит в наличии проекта доказательство, что стороны почти завершили мир и его остановило одно внешнее решение. Другая считает неподписанный текст политически пустым. Обе чрезмерны. Проект может сузить разногласия, раскрыть приемлемые параметры и создать реальную возможность, не становясь договором и не гарантируя, что оставшиеся вопросы разрешимы.`,
            `Предел реконструкции определяется доступом к версиям и внутренним решениям. Позднейшие воспоминания полезны, но должны сопоставляться с документами, созданными в момент переговоров. Корректный вывод может быть скромным: на указанную дату существовали такие предложения, такие вопросы оставались открыты, подписей не было. Оценка того, была ли возможность реализуема, должна оставаться отдельным аргументом, а не подменой статуса текста.`,
          ],
          [
            `One interpretation treats a draft as proof that the parties had nearly completed peace and that one external decision stopped it. Another treats an unsigned text as politically empty. Both go too far. A draft may narrow differences, reveal acceptable parameters, and create a real opportunity without becoming a treaty or guaranteeing that remaining issues can be solved.`,
            `Reconstruction is limited by access to versions and internal decisions. Later recollections are useful but must be compared with records created during the talks. An accurate conclusion may remain modest: on a stated date these proposals existed, these issues remained open, and no signatures were present. Whether the opportunity was feasible is a separate argument, not a substitute for document status.`,
          ],
          [
            `Одне тлумачення бачить у наявності проєкту доказ того, що сторони майже завершили мир і його зупинило одне зовнішнє рішення. Інше вважає непідписаний текст політично порожнім. Обидва перебільшують. Проєкт може звузити розбіжності, показати прийнятні параметри й створити реальну можливість, не стаючи договором і не гарантуючи, що решту питань можна розв'язати.`,
            `Реконструкція обмежена доступом до версій і внутрішніх рішень. Пізніші спогади корисні, але їх слід зіставляти з документами, створеними під час переговорів. Коректний висновок може бути скромним: на зазначену дату існували такі пропозиції, такі питання лишалися відкритими, підписів не було. Оцінка здійсненності можливості має бути окремим аргументом, а не підміною статусу тексту.`,
          ]
        ),
      },
    ],
  },

  'concept-de-facto-vs-de-jure': {
    lead: L(
      `Фактический контроль отвечает на вопрос, кто способен управлять территорией сейчас; юридическое признание — кому другие государства и международные институты приписывают суверенный статус. Эти состояния могут долго расходиться. Администрация способна собирать налоги, применять силу и выдавать документы, не приобретая признанного титула; государство может сохранять международно признанные права, не контролируя территорию на земле. Для Украины различие необходимо при чтении Крыма и заявленной аннексии четырёх областей: внутренний акт России не обязывает остальных участников менять правовую позицию.`,
      `Effective control asks who can govern a territory now; legal recognition asks to whom other states and international institutions attribute sovereign status. The two may diverge for a long time. An administration may tax, use force, and issue documents without acquiring recognised title; a state may retain internationally recognised rights while lacking control on the ground. For Ukraine, this distinction is essential when reading Crimea and the claimed annexation of four regions: a Russian domestic act does not compel other actors to change legal position.`,
      `Фактичний контроль відповідає на питання, хто здатен управляти територією зараз; юридичне визнання — кому інші держави й міжнародні інституції приписують суверенний статус. Ці стани можуть довго розходитися. Адміністрація здатна збирати податки, застосовувати силу й видавати документи, не набуваючи визнаного титулу; держава може зберігати міжнародно визнані права, не контролюючи територію на місці. Для України розрізнення необхідне під час читання Криму й заявленої анексії чотирьох областей: внутрішній акт Росії не зобов'язує інших змінювати правову позицію.`
    ),
    sections: [
      {
        title: L(`Два независимых набора признаков`, `Two independent sets of indicators`, `Два незалежні набори ознак`),
        paragraphs: P(
          [
            `Контроль проверяется по способности постоянно осуществлять управление: присутствию органов, исполнению решений, доступу сил и реальному охвату территории. Признание проверяется по официальным актам государств, дипломатическим отношениям, международным голосованиям и обращению с договорами. Карта боевых действий важна для первого вопроса, но не отвечает автоматически на второй.`,
            `Даже фактический уровень требует точной даты и масштаба. Объявление притязания на административные границы не означает контроля всей области; временное продвижение не тождественно устойчивой администрации. Юридический уровень также неоднороден: признание может быть явным, подразумеваемым в конкретном действии или прямо отвергнутым. Поэтому число взаимодействий не следует автоматически считать признанием суверенитета.`,
          ],
          [
            `Control is tested by sustained ability to govern: institutional presence, execution of decisions, access by forces, and actual territorial reach. Recognition is tested by official acts of states, diplomatic relations, international votes, and treatment of treaties. A battlefield map matters for the first question but does not automatically answer the second.`,
            `Even factual assessment needs a precise date and scale. A claim to administrative boundaries does not mean control of an entire region; temporary advance is not durable administration. The legal level is also varied: recognition may be express, implied in a specific act, or explicitly rejected. The number of interactions should therefore not automatically be counted as recognition of sovereignty.`,
          ],
          [
            `Контроль перевіряють за здатністю постійно здійснювати управління: присутністю органів, виконанням рішень, доступом сил і реальним охопленням території. Визнання перевіряють за офіційними актами держав, дипломатичними відносинами, міжнародними голосуваннями та поводженням із договорами. Карта бойових дій важлива для першого питання, але не відповідає автоматично на друге.`,
            `Навіть фактичний рівень потребує точної дати й масштабу. Оголошення претензії на адміністративні кордони не означає контролю всієї області; тимчасове просування не тотожне стійкій адміністрації. Правовий рівень також неоднорідний: визнання може бути явним, випливати з конкретної дії або прямо заперечуватися. Тому кількість взаємодій не слід автоматично вважати визнанням суверенітету.`,
          ]
        ),
      },
      {
        title: L(`Правопродолжение, Крым и аннексия 2022 года`, `State continuity, Crimea, and the 2022 annexation claim`, `Правопродовження, Крим і анексія 2022 року`),
        paragraphs: P(
          [
            `Распад СССР 26 декабря 1991 года показывает, что международный статус оформляется не только через контроль: Россия уведомила ООН о продолжении членства СССР, а возникшие государства получили признание в новых границах. Этот исторический эпизод нельзя переносить на любой территориальный захват, потому что структура распада союзного государства отличалась от изменения границы силой.`,
            `После крымского голосования 16 марта 2014 года Россия установила фактическое управление полуостровом, тогда как резолюция Генеральной Ассамблеи 68/262 подтвердила территориальную целостность Украины. Объявление 30 сентября 2022 года охватило четыре области, которые Россия даже не контролировала полностью; резолюция ES-11/4 призвала не признавать заявленное изменение статуса. Три статьи демонстрируют независимость контроля и признания.`,
          ],
          [
            `The dissolution of the USSR on 26 December 1991 shows that international status is not formed through control alone: Russia notified the UN that it continued USSR membership, while new states received recognition within new borders. That episode cannot be transferred to every territorial seizure because dissolution of a union state had a different structure from changing a boundary by force.`,
            `After the Crimean vote on 16 March 2014, Russia established effective administration of the peninsula, while General Assembly Resolution 68/262 affirmed Ukraine's territorial integrity. The claim of 30 September 2022 covered four regions Russia did not fully control; Resolution ES-11/4 called for non-recognition of the claimed status change. The three articles demonstrate the independence of control and recognition.`,
          ],
          [
            `Розпад СРСР 26 грудня 1991 року показує, що міжнародний статус оформлюється не лише через контроль: Росія повідомила ООН про продовження членства СРСР, а нові держави отримали визнання в нових кордонах. Цей історичний епізод не можна переносити на кожне територіальне захоплення, бо структура розпаду союзної держави відрізнялася від зміни кордону силою.`,
            `Після кримського голосування 16 березня 2014 року Росія встановила фактичне управління півостровом, тоді як резолюція Генеральної Асамблеї 68/262 підтвердила територіальну цілісність України. Оголошення 30 вересня 2022 року охопило чотири області, які Росія навіть не контролювала повністю; резолюція ES-11/4 закликала не визнавати заявлену зміну статусу. Три статті демонструють незалежність контролю й визнання.`,
          ]
        ),
      },
      {
        title: L(`Резолюции о непризнании и их точный эффект`, `Non-recognition resolutions and their precise effect`, `Резолюції про невизнання та їх точний ефект`),
        paragraphs: P(
          [
            `Резолюция 68/262 и резолюция ES-11/4 фиксируют позицию Генеральной Ассамблеи о территориальной целостности Украины и заявленных изменениях статуса. Вторая прямо призывает государства и организации не признавать аннексию. Эти документы надёжно опровергают утверждение, что внутреннее российское оформление получило общее международное признание.`,
            `Резолюции не возвращают контроль физически и не описывают ежедневное управление на оккупированной территории. Декларация ООН о дружественных отношениях связывает неприменение силы, суверенное равенство и территориальную целостность как общую правовую рамку. Она не превращает любой спор о границе в одинаковый случай, но не позволяет выводить законный титул только из эффективности силового контроля.`,
          ],
          [
            `Resolution 68/262 and Resolution ES-11/4 record the General Assembly's position on Ukraine's territorial integrity and the claimed status changes. The latter expressly calls on states and organisations not to recognise the annexation. These documents reliably rebut any claim that Russia's domestic formalisation received general international recognition.`,
            `The resolutions do not physically restore control or describe daily governance in occupied territory. The UN Friendly Relations Declaration places non-use of force, sovereign equality, and territorial integrity within a common legal framework. It does not make every border dispute identical, but it prevents lawful title from being inferred solely from effective forcible control.`,
          ],
          [
            `Резолюція 68/262 і резолюція ES-11/4 фіксують позицію Генеральної Асамблеї щодо територіальної цілісності України та заявлених змін статусу. Друга прямо закликає держави й організації не визнавати анексію. Ці документи надійно спростовують твердження, що внутрішнє російське оформлення отримало загальне міжнародне визнання.`,
            `Резолюції не повертають контроль фізично й не описують щоденне управління на окупованій території. Декларація ООН про дружні відносини поєднує незастосування сили, суверенну рівність і територіальну цілісність у спільній правовій рамці. Вона не робить кожну суперечку про кордон однаковою, але не дозволяє виводити законний титул лише з ефективності силового контролю.`,
          ]
        ),
      },
      {
        title: L(`Реализм без капитуляции права`, `Realism without surrendering law`, `Реалізм без капітуляції права`),
        paragraphs: P(
          [
            `Политический реализм напоминает, что длительный контроль создаёт институты, зависимости и цену изменения положения; игнорировать это при переговорах невозможно. Юридическая позиция отвечает, что течение времени и административная эффективность сами по себе не должны вознаграждать приобретение территории силой. Эти подходы описывают разные последствия и не обязаны взаимно отменяться.`,
            `Практическая коммуникация с контролирующей стороной ради жителей, обмена пленными или безопасности не обязательно означает признание её суверенитета. Обратная ошибка — ссылкой на непризнание отрицать реальные обязанности и вред на земле. Точный язык удерживает оба уровня: кто контролирует на указанную дату, какой статус признаёт конкретный институт и какое действие из этого следует. Прогноз будущего признания остаётся прогнозом, а не свершившимся правовым фактом.`,
          ],
          [
            `Political realism notes that prolonged control creates institutions, dependencies, and costs of changing the situation; negotiations cannot ignore them. The legal position answers that time and administrative effectiveness alone should not reward territorial acquisition by force. These approaches describe different consequences and need not cancel one another.`,
            `Practical communication with the controlling side for residents, captive exchanges, or safety does not necessarily recognise its sovereignty. The opposite error uses non-recognition to deny real duties and harm on the ground. Precise language preserves both levels: who controls on a stated date, what status a particular institution recognises, and what action follows. A forecast of future recognition remains a forecast, not an accomplished legal fact.`,
          ],
          [
            `Політичний реалізм нагадує, що тривалий контроль створює інституції, залежності й ціну зміни становища; ігнорувати це на переговорах неможливо. Правова позиція відповідає, що плин часу й адміністративна ефективність самі по собі не повинні винагороджувати набуття території силою. Ці підходи описують різні наслідки й не зобов'язані взаємно скасовуватися.`,
            `Практична комунікація з контролюючою стороною заради жителів, обміну полоненими чи безпеки не обов'язково означає визнання її суверенітету. Протилежна помилка — посиланням на невизнання заперечувати реальні обов'язки й шкоду на місці. Точна мова утримує обидва рівні: хто контролює на вказану дату, який статус визнає конкретна інституція та яка дія з цього випливає. Прогноз майбутнього визнання лишається прогнозом, а не здійсненим правовим фактом.`,
          ]
        ),
      },
    ],
  },

  'concept-strategic-effect': {
    lead: L(
      `Стратегический эффект — это устойчивое изменение возможностей, темпа войны или политического выбора, а не просто заметный эпизод. Уничтожение цели может быть тактически успешным, информационно значимым и всё же не менять общую траекторию; обратное тоже возможно, если малозаметное действие нарушает критическую систему. Для оценки операции нужны исходное состояние, выбранные показатели, срок наблюдения и механизм, через который непосредственный ущерб влияет на последующие удары, оборону, ресурсы союзников или переговорную позицию.`,
      `Strategic effect is a durable change in capability, war tempo, or political choice—not merely a visible episode. Destroying a target may be tactically successful and informationally significant while leaving the overall trajectory unchanged; the reverse is also possible when an inconspicuous action disrupts a critical system. Assessment requires a baseline, chosen indicators, an observation period, and a mechanism linking immediate damage to later strikes, defence, allied resources, or bargaining position.`,
      `Стратегічний ефект — це стійка зміна можливостей, темпу війни або політичного вибору, а не просто помітний епізод. Знищення цілі може бути тактично успішним, інформаційно значущим і все ж не змінювати загальну траєкторію; можливе й протилежне, коли малопомітна дія порушує критичну систему. Для оцінки операції потрібні початковий стан, обрані показники, строк спостереження й механізм, через який безпосередня шкода впливає на наступні удари, оборону, ресурси союзників або переговорну позицію.`
    ),
    sections: [
      {
        title: L(`От поражённой цели к изменённой системе`, `From a struck target to a changed system`, `Від ураженої цілі до зміненої системи`),
        paragraphs: P(
          [
            `Первый уровень устанавливает, достигла ли операция намеченного объекта и какой физический ущерб причинён. Второй оценивает функциональную потерю: сколько возможностей недоступно и на какой срок. Стратегический уровень спрашивает, вынужден ли противник изменить кампанию, перераспределить редкий ресурс, отказаться от цели или принять менее выгодное политическое решение. Переход между уровнями нужно доказать.`,
            `Метрики выбираются до окончательного вывода: доступный парк, частота операций, время восстановления, стоимость замещения, изменение линии фронта или условий переговоров. Одна и та же цифра повреждённых объектов имеет разный смысл при большом резерве и при отсутствии замены. Медийный охват измеряет реакцию аудитории, но не может служить единственной мерой военного перелома.`,
          ],
          [
            `The first level establishes whether an operation reached its target and what physical damage occurred. The second assesses functional loss: how much capability is unavailable and for how long. The strategic level asks whether the adversary must change the campaign, reallocate a scarce resource, abandon an objective, or accept a less favourable political choice. The transition among levels must be demonstrated.`,
            `Metrics should be selected before the final conclusion: available inventory, operation frequency, recovery time, replacement cost, changes at the front, or negotiating conditions. The same number of damaged objects means something different with a large reserve and with no replacement. Media reach measures audience reaction but cannot be the sole measure of a military reversal.`,
          ],
          [
            `Перший рівень установлює, чи досягла операція наміченого об'єкта та якої фізичної шкоди завдано. Другий оцінює функціональну втрату: скільки можливостей недоступно й на який строк. Стратегічний рівень питає, чи змушений противник змінити кампанію, перерозподілити рідкісний ресурс, відмовитися від мети або прийняти менш вигідне політичне рішення. Перехід між рівнями треба довести.`,
            `Метрики обирають до остаточного висновку: доступний парк, частота операцій, час відновлення, вартість заміщення, зміна лінії фронту або умов переговорів. Та сама кількість пошкоджених об'єктів має різний сенс за великого резерву й за відсутності заміни. Медійне охоплення вимірює реакцію аудиторії, але не може бути єдиною мірою воєнного перелому.`,
          ]
        ),
      },
      {
        title: L(`Война, переговоры и операция «Паутина»`, `War, negotiation, and Operation Spiderweb`, `Війна, переговори й операція «Павутина»`),
        paragraphs: P(
          [
            `Полномасштабное вторжение 24 февраля 2022 года задаёт исходный масштаб: стратегическим считается изменение способности сторон продолжать крупную войну и достигать политических целей. Стамбульский раунд 29 марта показывает, что военная позиция может приобретать стратегический смысл через параметры возможного соглашения, хотя сам факт переговоров не раскрывает вклад каждой операции в позицию сторон.`,
            `Операция «Паутина» 1 июня 2025 года была направлена против российской стратегической авиации. Официальные украинские сообщения заявили о поражении значительного числа самолётов, но точный ущерб требует внешней проверки. Даже после установления повреждений остаётся отдельный вопрос: как изменились доступные вылеты, размещение авиации, защита аэродромов, стоимость операций и возможный переговорный расчёт.`,
          ],
          [
            `The full-scale invasion of 24 February 2022 supplies the baseline scale: a strategic change alters the parties' ability to continue a major war and achieve political objectives. The Istanbul round of 29 March shows that military position may acquire strategic meaning through terms of a possible agreement, although the fact of talks does not reveal each operation's contribution to bargaining positions.`,
            `Operation Spiderweb on 1 June 2025 targeted Russian strategic aviation. Official Ukrainian statements claimed damage to a significant number of aircraft, while exact losses require external verification. Even after physical damage is established, a separate question remains: how sorties, aircraft dispersal, airfield defence, operational cost, and possible bargaining calculations changed.`,
          ],
          [
            `Повномасштабне вторгнення 24 лютого 2022 року задає початковий масштаб: стратегічною є зміна здатності сторін продовжувати велику війну й досягати політичних цілей. Стамбульський раунд 29 березня показує, що військова позиція може набувати стратегічного сенсу через параметри можливої угоди, хоча сам факт переговорів не розкриває внеску кожної операції в позиції сторін.`,
            `Операція «Павутина» 1 червня 2025 року була спрямована проти російської стратегічної авіації. Офіційні українські повідомлення заявили про ураження значної кількості літаків, але точна шкода потребує зовнішньої перевірки. Навіть після встановлення пошкоджень лишається окреме питання: як змінилися доступні вильоти, розосередження авіації, захист аеродромів, вартість операцій і можливий переговорний розрахунок.`,
          ]
        ),
      },
      {
        title: L(`Официальное сообщение устанавливает замысел и заявление`, `Official statements establish design and claim`, `Офіційне повідомлення встановлює задум і заяву`),
        paragraphs: P(
          [
            `Сообщения президента Украины об операции надёжно устанавливают, что украинская сторона приписывает её Службе безопасности, называет целью самолёты стратегической авиации и заявляет определённый масштаб поражения. Это первичный источник позиции исполнителя и политической презентации результата. Он важен для понимания замысла и самооценки операции.`,
            `Тот же источник не является независимой инвентаризацией повреждённых, уничтоженных и временно выведенных из строя самолётов. Он не сообщает полного исходного парка, сроков ремонта и последующей динамики ударов. Для стратегического вывода нужны спутниковые изображения, несколько независимых оценок ущерба, данные о восстановлении и наблюдаемое изменение поведения; при их отсутствии формулировка должна оставаться предварительной.`,
          ],
          [
            `Statements by the Ukrainian president reliably establish that the Ukrainian side attributes the operation to the Security Service, identifies strategic aircraft as targets, and claims a particular scale of damage. This is a primary source for the implementer's position and political presentation of the outcome. It matters for understanding design and self-assessment.`,
            `The same source is not an independent inventory distinguishing damaged, destroyed, and temporarily disabled aircraft. It does not provide the full baseline fleet, repair timelines, or later strike dynamics. A strategic conclusion requires satellite imagery, several independent damage assessments, recovery evidence, and observed behavioural change; without them, wording should remain provisional.`,
          ],
          [
            `Повідомлення президента України про операцію надійно встановлюють, що українська сторона приписує її Службі безпеки, називає цілями літаки стратегічної авіації та заявляє певний масштаб ураження. Це первинне джерело позиції виконавця й політичної презентації результату. Воно важливе для розуміння задуму та самооцінки операції.`,
            `Те саме джерело не є незалежною інвентаризацією пошкоджених, знищених і тимчасово виведених із ладу літаків. Воно не повідомляє повного початкового парку, строків ремонту й подальшої динаміки ударів. Для стратегічного висновку потрібні супутникові зображення, кілька незалежних оцінок шкоди, дані про відновлення та спостережувана зміна поведінки; без них формулювання має лишатися попереднім.`,
          ]
        ),
      },
      {
        title: L(`Символический успех, сдерживание и временной горизонт`, `Symbolic success, deterrence, and time horizon`, `Символічний успіх, стримування й часовий горизонт`),
        paragraphs: P(
          [
            `Скептическая трактовка считает эффект стратегическим только при видимом переломе фронта и рискует пропустить изменение дальних возможностей, расходов на защиту или сдерживания. Восторженная трактовка переносит впечатляющий тактический результат на всю войну, не проверяя компенсацию потерь. Обеим необходим один временной горизонт и набор заранее названных показателей.`,
            `Информационный эффект не обязательно пуст: он способен поддержать мораль, привлечь ресурсы и заставить противника защищать более широкую сеть объектов. Но причинную связь следует показать, а издержки сопоставить с альтернативным использованием средств. Статья не предрешает итог операции 2025 года. Она устанавливает более строгий порядок оценки, в котором признание тактического успеха совместимо с открытым вопросом о долгосрочной стратегической траектории.`,
          ],
          [
            `A sceptical reading calls an effect strategic only after a visible reversal at the front and may miss changes in long-range capability, defensive cost, or deterrence. An enthusiastic reading projects an impressive tactical result onto the entire war without testing replacement of losses. Both need the same time horizon and indicators chosen in advance.`,
            `Information effects are not necessarily empty: they may sustain morale, attract resources, and force an adversary to defend a wider network of sites. But the causal link must be shown and costs compared with alternative uses. This article does not prejudge the 2025 operation's final outcome. It establishes a stricter assessment in which acknowledging tactical success is compatible with leaving the long-term strategic trajectory open.`,
          ],
          [
            `Скептичне тлумачення вважає ефект стратегічним лише за видимого перелому фронту й може пропустити зміну дальніх можливостей, витрат на захист або стримування. Захоплене тлумачення переносить вражаючий тактичний результат на всю війну, не перевіряючи компенсацію втрат. Обом потрібні однаковий часовий горизонт і наперед названі показники.`,
            `Інформаційний ефект не обов'язково порожній: він здатен підтримати мораль, залучити ресурси й змусити противника захищати ширшу мережу об'єктів. Але причинний зв'язок слід показати, а витрати порівняти з альтернативним використанням засобів. Стаття не визначає наперед підсумок операції 2025 року. Вона встановлює суворіший порядок оцінки, де визнання тактичного успіху сумісне з відкритим питанням про довгострокову стратегічну траєкторію.`,
          ]
        ),
      },
    ],
  },
}
