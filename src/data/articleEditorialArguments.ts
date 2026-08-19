import type { Localized } from '../domain/types'

const L = (ru: string, en: string, uk: string): Localized => ({ ru, en, uk })
const P = (ru: string[], en: string[], uk: string[]): Localized<string[]> => ({ ru, en, uk })

type EditorialArgumentArticle = {
  lead: Localized
  sections: Array<{
    title: Localized
    paragraphs: Localized<string[]>
  }>
}

export const editorialArgumentArticles: Record<string, EditorialArgumentArticle> = {
  'tactical-effect-vs-strategic-outcome': {
    lead: L(
      'Громкая военная операция может одновременно быть технически успешной, политически заметной и недостаточной для перелома войны. Эти уровни нельзя объединять одним словом «победа». На примере операции «Паутина» 1 июня 2025 года проверяемый вопрос состоит не только в том, были ли поражены заявленные самолёты российской авиации, но и изменились ли после удара доступные ресурсы, темп операций, положение на фронте или переговорные возможности сторон. Официальные заявления подтверждают замысел и заявленный ущерб; долгосрочный эффект требует сопоставимых данных за последующий период.',
      'A prominent military operation can be technically successful, politically resonant, and still insufficient to reverse a war. These levels should not be merged into “victory.” For Operation Spiderweb on 1 June 2025, the test is not only whether the stated Russian aircraft were struck, but whether available resources, operational tempo, front-line conditions, or bargaining power changed afterward. Official statements confirm the declared aim and claimed damage; long-term effect requires comparable evidence over time.',
      'Гучна військова операція може бути технічно успішною, політично помітною й водночас недостатньою для перелому війни. Ці рівні не слід об’єднувати словом «перемога». Для операції «Павутина» 1 червня 2025 року перевірка стосується не лише ураження заявлених літаків російської авіації, а й зміни доступних ресурсів, темпу операцій, становища на фронті чи переговорних можливостей. Офіційні заяви підтверджують задум і заявлену шкоду; довгостроковий ефект потребує порівнянних даних у часі.',
    ),
    sections: [
      {
        title: L('Четыре уровня военного результата', 'Four levels of military result', 'Чотири рівні військового результату'),
        paragraphs: P(
          [
            'Тактический результат отвечает на непосредственный вопрос: достигла ли конкретная операция поставленной цели при приемлемых для исполнителя затратах. Оперативный уровень оценивает влияние на кампанию и способность противника выполнять задачи. Стратегический уровень касается устойчивого изменения баланса ресурсов, темпа войны или политического выбора. Информационный эффект описывает реакцию аудитории и может существовать при любом из трёх исходов.',
            'Порог заявления о переломе выше, чем порог заявления об успешном ударе. Нужны исходное состояние, измеримые показатели после операции и разумный временной горизонт. Потеря отдельной техники может быть тяжёлой и всё же компенсироваться резервами, изменением базирования или тактики. Обратная ошибка — недооценить накопительный эффект серии локальных действий, каждое из которых по отдельности не меняет картину.',
          ],
          [
            'A tactical result asks whether a particular mission achieved its immediate objective at acceptable cost. The operational level concerns a campaign and the adversary’s ability to perform tasks. The strategic level asks whether resources, war tempo, or political choice changed durably. Information effect describes audience response and may accompany any of the other outcomes.',
            'Claiming a reversal requires more than claiming a successful strike. It needs a baseline, measurable post-operation indicators, and a reasonable horizon. Loss of equipment may be severe yet offset through reserves, dispersal, or changed tactics. The opposite error is to miss the cumulative effect of local actions that seem insufficient individually.',
          ],
          [
            'Тактичний результат відповідає, чи досягла конкретна операція безпосередньої мети за прийнятних витрат. Оперативний рівень стосується кампанії та здатності противника виконувати завдання. Стратегічний рівень оцінює сталу зміну ресурсів, темпу війни чи політичного вибору. Інформаційний ефект описує реакцію аудиторії й може супроводжувати будь-який інший результат.',
            'Заява про перелом потребує більше, ніж заява про успішний удар. Потрібні вихідний стан, вимірювані показники після операції та розумний часовий горизонт. Втрата техніки може бути тяжкою, але компенсуватися резервами, розосередженням або зміною тактики. Зворотна помилка — не помітити накопичувальний ефект серії локальних дій.',
          ],
        ),
      },
      {
        title: L('Операция 2025 года внутри войны, начавшейся в 2022-м', 'The 2025 operation within the war begun in 2022', 'Операція 2025 року у війні, що почалася 2022-го'),
        paragraphs: P(
          [
            'Полномасштабное вторжение 24 февраля 2022 года задаёт исходную войну ресурсов, территории и политической устойчивости. Операция «Паутина» 1 июня 2025 года была направлена против российской дальней авиации на удалённых аэродромах и продемонстрировала способность Украины проводить сложное асимметричное действие. Этот факт имеет самостоятельное военное значение даже до определения долгосрочного результата.',
            'Для вывода о переломе нужно проследить последующие российские авиационные возможности, интенсивность ударов, стоимость защиты и восстановления, изменение украинской свободы действий и влияние на переговорные позиции. Медийный резонанс может укрепить мораль и внешнюю поддержку, что тоже является ресурсом. Но гипотеза о внешнем управлении операцией или намерении сорвать переговоры требует самостоятельного документального подтверждения.',
          ],
          [
            'The full-scale invasion of 24 February 2022 sets the baseline war of resources, territory, and political resilience. Operation Spiderweb on 1 June 2025 targeted Russian long-range aviation at distant airfields and demonstrated Ukraine’s capacity for a complex asymmetric action. That fact has military significance even before long-term consequences are known.',
            'A reversal claim requires later evidence on Russian aviation capacity, strike intensity, protection and replacement costs, Ukrainian freedom of action, and bargaining position. Media resonance may strengthen morale and external support, which are also resources. Allegations of foreign control or an intention to disrupt negotiations require separate documentary support.',
          ],
          [
            'Повномасштабне вторгнення 24 лютого 2022 року задає вихідну війну ресурсів, території та політичної стійкості. Операція «Павутина» 1 червня 2025 року була спрямована проти російської дальньої авіації на віддалених аеродромах і продемонструвала здатність України провести складну асиметричну дію. Цей факт має окреме військове значення ще до визначення довгострокових наслідків.',
            'Для висновку про перелом потрібні наступні дані про російські авіаційні можливості, інтенсивність ударів, вартість захисту й відновлення, українську свободу дій та переговорну позицію. Медійний резонанс може зміцнити мораль і зовнішню підтримку. Припущення про зовнішнє керування або намір зірвати переговори потребують окремого документального підтвердження.',
          ],
        ),
      },
      {
        title: L('Что подтверждают официальные заявления', 'What official statements confirm', 'Що підтверджують офіційні заяви'),
        paragraphs: P(
          [
            'Сообщения украинского президента и государственных органов подтверждают официальное признание операции, её заявленную цель и оценку исполнителей. Они позволяют установить, какое значение украинская власть придавала удару. Однако заявление участника не является независимой инвентаризацией ущерба и не показывает само по себе, насколько быстро противник способен восстановить функции. Для этого нужны сопоставимые последующие сведения.',
            'Термин «террористический акт» также нельзя выводить из необычного способа атаки или её психологического эффекта. Правовая квалификация требует установить объект, участников, применимое право и конкретные факты. Если целью являлись военные самолёты во время международного вооружённого конфликта, исходный анализ относится к правилам ведения войны; возможные нарушения оцениваются отдельно, а не назначаются политическим ярлыком.',
          ],
          [
            'Statements by Ukraine’s president and public bodies confirm official acknowledgment, the declared objective, and the state’s assessment of the personnel involved. They show the meaning assigned by Ukrainian authorities. A participant’s statement is not an independent damage inventory and does not show how quickly functions can be restored; comparable later information is needed.',
            'The label “terrorist act” cannot be inferred from an unusual attack method or psychological effect. Legal classification requires the target, participants, applicable law, and facts. If military aircraft were targeted during an international armed conflict, the starting framework is the law of hostilities; possible violations require separate examination rather than a political label.',
          ],
          [
            'Повідомлення президента України та державних органів підтверджують офіційне визнання операції, заявлену мету й оцінку виконавців. Вони показують значення, яке українська влада надавала удару. Проте заява учасника не є незалежною інвентаризацією шкоди й не показує швидкість відновлення функцій; потрібні порівнянні наступні відомості.',
            'Назву «терористичний акт» також не можна вивести з незвичного способу атаки чи психологічного ефекту. Правова кваліфікація потребує цілі, учасників, застосовного права й фактів. Якщо атакували військові літаки під час міжнародного збройного конфлікту, вихідною рамкою є право ведення війни; можливі порушення перевіряють окремо, а не призначають політичним ярликом.',
          ],
        ),
      },
      {
        title: L('Между символом и переломом', 'Between symbol and reversal', 'Між символом і переломом'),
        paragraphs: P(
          [
            'Одна трактовка считает саму способность ударить по защищённой авиации доказательством крупного изменения войны. Другая обесценивает всё, что не привело к немедленному изменению фронта. Первая преждевременно переносит тактический успех на высший уровень; вторая игнорирует издержки, адаптацию противника, моральный эффект и возможное накопление результатов. Оценка должна оставаться открытой для обновления.',
            'Документы позволяют назвать операцию значительным и заявленно успешным ударом по военным объектам. Они пока не позволяют без временного ряда объявить её переломом всей войны, доказать конкретного внешнего организатора или единственную политическую цель. Такой предел не уменьшает достижение. Он делает формулировку проверяемой и оставляет возможность позднее повысить или снизить оценку на основании измеримых последствий.',
          ],
          [
            'One interpretation treats the capacity to strike protected aviation as proof that the war changed fundamentally. Another dismisses anything without immediate front-line movement. The first prematurely promotes tactical success to the highest level; the second ignores cost, adversary adaptation, morale, and cumulative effects. Assessment should remain open to revision.',
            'The documents support calling the operation a significant and officially claimed successful strike on military objectives. Without a time series they do not support calling it a reversal of the whole war, identifying a foreign organiser, or assigning one political aim. That limit does not diminish achievement; it makes the claim testable and revisable through measured consequences.',
          ],
          [
            'Одне тлумачення вважає саму здатність ударити по захищеній авіації доказом фундаментальної зміни війни. Інше знецінює все, що не змінило фронт негайно. Перше передчасно переносить тактичний успіх на найвищий рівень; друге ігнорує витрати, адаптацію противника, мораль і накопичення результатів. Оцінка має залишатися відкритою для перегляду.',
            'Документи дозволяють назвати операцію значним і офіційно заявленим успішним ударом по військових цілях. Без часового ряду вони не дозволяють назвати її переломом усієї війни, визначити зовнішнього організатора чи одну політичну мету. Така межа не применшує досягнення, а робить висновок перевірюваним і придатним до оновлення.',
          ],
        ),
      },
    ],
  },

  'urban-objectives-and-civilian-risk': {
    lead: L(
      'Военный объект в городе повышает опасность для окружающих, но не превращает гражданский район в свободную зону поражения. Международное гуманитарное право распределяет обязанности между сторонами: обороняющаяся сторона должна по возможности удалять военные объекты от густонаселённых районов, а атакующая обязана проверить цель, оценить соразмерность и принять практически возможные меры предосторожности. Во время войны после 24 февраля 2022 года этот двойной стандарт особенно важен для ракетных ударов, работы противовоздушной обороны и падения обломков. Вина одного участника не отменяет самостоятельную обязанность другого.',
      'A military objective in a city increases danger to nearby people but does not turn a civilian district into a free-fire zone. International humanitarian law allocates duties to both sides: the defender should, where feasible, remove military objectives from densely populated areas, while the attacker must verify the target, assess proportionality, and take feasible precautions. In the war after 24 February 2022, this dual standard is crucial for missile strikes, air defence, and falling debris. One participant’s breach does not cancel the other’s independent duty.',
      'Військовий об’єкт у місті підвищує небезпеку для людей поруч, але не перетворює цивільний район на вільну зону ураження. Міжнародне гуманітарне право розподіляє обов’язки: сторона, що обороняється, має за можливості віддаляти військові об’єкти від густонаселених районів, а нападник — перевірити ціль, оцінити пропорційність і вжити практично можливих запобіжних заходів. У війні після 24 лютого 2022 року цей подвійний стандарт важливий для ракетних ударів, роботи ППО й падіння уламків. Порушення одного учасника не скасовує обов’язку іншого.',
    ),
    sections: [
      {
        title: L('Как город меняет, но не отменяет правила', 'How the city changes but does not cancel the rules', 'Як місто змінює, але не скасовує правила'),
        paragraphs: P(
          [
            'Объект становится военной целью по своему характеру, местоположению, назначению или использованию и по эффективному вкладу в военные действия. Близость жилых домов сама не снимает этот статус, но резко увеличивает объём необходимой проверки. Атакующая сторона должна располагать информацией, позволяющей разумно подтвердить цель, и учитывать ожидаемый конкретный военный результат вместе с предвидимым сопутствующим вредом.',
            'Обороняющаяся сторона должна по возможности избегать размещения военных целей внутри или рядом с густонаселёнными районами и принимать меры защиты гражданских. Эти обязанности зависят от практически доступных вариантов. Даже неправомерное использование городской среды не делает жителей участниками боевых действий. Атака остаётся подчинённой различению, соразмерности, выбору средств, предупреждению и отмене при изменении обстоятельств.',
          ],
          [
            'An object becomes a military objective through its nature, location, purpose, or use and its effective contribution to military action. Nearby homes do not remove that status but greatly increase required scrutiny. The attacker needs information reasonably confirming the target and must weigh the expected concrete military advantage against foreseeable incidental harm.',
            'The defender should, where feasible, avoid locating military objectives in or near densely populated areas and take protective measures. These duties depend on available options. Even unlawful use of an urban environment does not turn residents into combatants. Attack remains governed by distinction, proportionality, choice of means, warning, and cancellation if circumstances change.',
          ],
          [
            'Об’єкт стає військовою ціллю за характером, місцем, призначенням або використанням і ефективним внеском у воєнні дії. Близькість житла не знімає цього статусу, але різко підвищує вимоги до перевірки. Нападник має розумно підтвердити ціль і зіставити очікувану конкретну військову перевагу з передбачуваною супутньою шкодою.',
            'Сторона, що обороняється, має за можливості уникати розміщення військових цілей у густонаселених районах і захищати цивільних. Обов’язки залежать від доступних варіантів. Навіть неправомірне використання міста не робить мешканців учасниками бою. Атака підпорядковується розрізненню, пропорційності, вибору засобів, попередженню й скасуванню за зміни обставин.',
          ],
        ),
      },
      {
        title: L('Ракетная война, ПВО и причинная цепочка', 'Missile warfare, air defence, and causation', 'Ракетна війна, ППО та причинний ланцюг'),
        paragraphs: P(
          [
            'Материалы УВКПЛ о первых месяцах полномасштабного вторжения фиксируют повторяющиеся удары взрывным оружием по населённым районам и значительный гражданский ущерб; на этом фоне широко применялась противовоздушная оборона. В отдельном эпизоде вред может возникнуть от прямого попадания, отклонения боеприпаса, поражения перехватчиком, падения обломков или сочетания факторов. Общая картина и вид разрушения без технических данных не позволяют надёжно выбрать одну причинную версию.',
            'Для конкретного эпизода нужны координаты заявленной цели, её фактическое использование, виды средств нападения и защиты, траектория, предупреждения, ожидаемое военное преимущество и оценка риска до решения. Общая ссылка на расположенный рядом объект объясняет возможный механизм опасности, но не доказывает законность удара. Общая ссылка на работу ПВО также не снимает исходную ответственность за запуск по городской среде.',
          ],
          [
            'OHCHR material on the first months of the full-scale invasion records repeated use of explosive weapons in populated areas and extensive civilian harm; air defence was operating across that environment. In a particular incident, harm may result from direct impact, weapon deviation, interception, falling debris, or combined factors. The general pattern and damage appearance cannot select a causal account without technical data.',
            'A particular incident requires the claimed target’s coordinates and actual use, attacking and defensive systems, trajectory, warnings, expected advantage, and pre-decision risk assessment. A nearby objective explains a possible danger mechanism but not attack legality. Invoking air defence likewise does not erase initial responsibility for launching toward an urban environment.',
          ],
          [
            'Матеріали УВКПЛ про перші місяці повномасштабного вторгнення фіксують повторюване застосування вибухової зброї в населених районах і значну цивільну шкоду; на цьому тлі широко працювала протиповітряна оборона. В окремому епізоді шкода може виникнути від прямого влучання, відхилення боєприпасу, перехоплення, падіння уламків або поєднання чинників. Загальна картина й вигляд руйнування без технічних даних не дозволяють надійно обрати одну причинну версію.',
            'Для конкретного епізоду потрібні координати заявленої цілі, її використання, засоби нападу й захисту, траєкторія, попередження, очікувана перевага та попередня оцінка ризику. Посилання на об’єкт поруч пояснює можливу небезпеку, але не законність удару. Посилання на роботу ППО також не стирає відповідальності за запуск у напрямку міста.',
          ],
        ),
      },
      {
        title: L('Что устанавливают гуманитарно-правовые документы', 'What humanitarian-law instruments establish', 'Що встановлюють гуманітарно-правові документи'),
        paragraphs: P(
          [
            'Дополнительный протокол I формулирует определение военных целей и меры предосторожности при нападении и против последствий нападений. Эти нормы устанавливают стандарты поведения, а не гарантируют отсутствие любой жертвы. Сам факт гражданского ущерба требует расследования, но не завершает квалификацию; столь же недостаточно одно утверждение воюющей стороны, что поражённый объект был военным.',
            'Разъяснения Международного комитета Красного Креста помогают применять различение, соразмерность и практически возможные меры. Они не заменяют фактические материалы конкретного дела. Термин «живой щит» имеет более узкое содержание, чем любое присутствие военных рядом с гражданскими, и не должен использоваться автоматически. Даже при его обоснованном применении защищённый статус гражданских не исчезает.',
          ],
          [
            'Additional Protocol I defines military objectives and precautions in attack and against effects of attacks. These are conduct standards, not a guarantee of no casualties. Civilian harm requires investigation but does not complete classification; a belligerent’s assertion that an object was military is equally insufficient.',
            'International Committee of the Red Cross explanations assist application of distinction, proportionality, and feasible precautions but do not replace incident evidence. “Human shield” is narrower than any military presence near civilians and should not be automatic. Even when substantiated, civilians do not lose protection.',
          ],
          [
            'Додатковий протокол I визначає військові цілі та запобіжні заходи під час нападу й проти його наслідків. Це стандарти поведінки, а не гарантія відсутності жертв. Цивільна шкода потребує розслідування, але не завершує кваліфікацію; так само недостатня заява воюючої сторони про військовий характер об’єкта.',
            'Роз’яснення Міжнародного комітету Червоного Хреста допомагають застосувати розрізнення, пропорційність і практично можливі заходи, але не замінюють фактів епізоду. «Живий щит» є вужчим поняттям, ніж будь-яка військова присутність поруч із цивільними. Навіть за доведеного застосування цивільні не втрачають захисту.',
          ],
        ),
      },
      {
        title: L('Зеркальные обвинения и предел вывода', 'Mirrored accusations and the limit of inference', 'Дзеркальні звинувачення та межа висновку'),
        paragraphs: P(
          [
            'Одна сторона может объяснять потери опасным размещением военных объектов и работой ПВО, другая — неизбирательным выбором средств или несоразмерной атакой. Эти версии не исключают друг друга заранее. Нарушение защитника и нарушение атакующего могут существовать одновременно, а ответственность за разные решения должна исследоваться отдельно. Политическая лояльность не должна определять, какие факты признаются значимыми.',
            'Без данных об объекте, оружии и предвидимом вреде нельзя квалифицировать конкретный удар. Можно сделать более общий вывод: городская военная цель повышает риск и обязанности обеих сторон, но не отменяет ни одну из них. Такая формула отказывается распределять всю причинность по одному признаку и сохраняет возможность точной оценки, когда появятся технические, оперативные и свидетельские материалы.',
          ],
          [
            'One side may explain casualties through dangerous military placement and air defence; another through indiscriminate means or disproportionate attack. These accounts are not mutually exclusive in advance. Defender and attacker violations may coexist, and separate decisions require separate responsibility analysis. Political loyalty should not decide which facts matter.',
            'Without target, weapon, and foreseeable-harm data, a particular strike cannot be classified. A general conclusion remains: an urban military objective raises risk and both sides’ duties without cancelling either. This avoids assigning all causation through one feature and preserves accurate assessment when technical, operational, and witness evidence emerges.',
          ],
          [
            'Одна сторона може пояснювати втрати небезпечним розміщенням військових об’єктів і роботою ППО, інша — невибірковими засобами чи непропорційною атакою. Версії не виключають одна одну наперед. Порушення захисника й нападника можуть співіснувати, а відповідальність за різні рішення треба досліджувати окремо. Політична лояльність не має визначати значущі факти.',
            'Без даних про об’єкт, зброю й передбачувану шкоду конкретний удар не можна кваліфікувати. Загальний висновок можливий: міська військова ціль підвищує ризик та обов’язки обох сторін, але не скасовує жодного. Це не розподіляє всю причинність за однією ознакою й зберігає точну оцінку для появи технічних, оперативних і свідчень.',
          ],
        ),
      },
    ],
  },

  'transfer-2014-and-ato-authority': {
    lead: L(
      'Полномочие начать Антитеррористическую операцию весной 2014 года связано с предшествующим переходом президентских функций, но не растворяется в нём. 22 февраля Верховная Рада приняла постановление о самоустранении президента и назначила выборы; 13 апреля Совет национальной безопасности и обороны принял решение о неотложных мерах, а 14 апреля указ № 405/2014 ввёл его в действие. Проверка должна различать возможный дефект февральской процедуры, фактическую непрерывность институтов, компетенцию исполняющего обязанности президента и законность конкретных последующих действий силовых органов.',
      'Authority to begin the Anti-Terrorist Operation in spring 2014 is connected to the preceding transfer of presidential functions but is not absorbed by it. On 22 February parliament adopted its resolution on presidential withdrawal and called elections; on 13 April the National Security and Defence Council decided urgent measures, and Decree No. 405/2014 put that decision into effect on 14 April. Analysis must distinguish a possible February procedural defect, effective institutional continuity, the acting president’s competence, and legality of particular later security actions.',
      'Повноваження розпочати Антитерористичну операцію навесні 2014 року пов’язане з попередньою передачею президентських функцій, але не розчиняється в ній. 22 лютого парламент ухвалив постанову про самоусунення президента й призначив вибори; 13 квітня Рада національної безпеки і оборони вирішила невідкладні заходи, а 14 квітня указ № 405/2014 увів рішення в дію. Аналіз має розрізняти можливий дефект лютневої процедури, фактичну безперервність інституцій, компетенцію виконувача обов’язків і законність конкретних наступних дій.',
    ),
    sections: [
      {
        title: L('Две правовые цепочки, а не одно событие', 'Two legal chains, not one event', 'Два правові ланцюги, а не одна подія'),
        paragraphs: P(
          [
            'Первая цепочка касается досрочного прекращения президентских полномочий и их временного исполнения по статьям 108–112 Конституции. Постановление № 757-VII использовало формулу самоустранения, которой нет в закрытом перечне обычных оснований. Это создаёт реальный вопрос соответствия текста чрезвычайному решению, но не отвечает автоматически, прекратили ли все органы государства существовать или действовать.',
            'Вторая цепочка начинается с решения СНБО 13 апреля и указа 14 апреля, подписанного исполняющим обязанности президента со ссылкой на его конституционные полномочия. Политические заявления 7 апреля могли обозначать направление реакции, но не являются тем же юридическим актом. Точная дата важна, потому что полномочие, обстоятельства и фактические события должны оцениваться на момент конкретного решения.',
          ],
          [
            'The first chain concerns early termination and temporary performance under Constitutional Articles 108–112. Resolution No. 757-VII used “withdrawal from duties,” absent from the ordinary closed list. This creates a real textual question but does not automatically answer whether every state institution ceased to exist or act.',
            'The second chain begins with the Security Council decision of 13 April and the decree of 14 April signed by the acting president under cited constitutional authority. Political statements on 7 April may show direction but are not the same legal act. The exact date matters because authority, circumstances, and facts must be assessed when the decision occurred.',
          ],
          [
            'Перший ланцюг стосується дострокового припинення президентських повноважень і їх тимчасового виконання за статтями 108–112 Конституції. Постанова № 757-VII використала формулу самоусунення, якої немає у звичайному закритому переліку. Це створює реальне текстуальне питання, але не доводить автоматичного припинення всіх державних інституцій.',
            'Другий ланцюг починається з рішення РНБО 13 квітня та указу 14 квітня, підписаного виконувачем обов’язків із посиланням на конституційні повноваження. Політичні заяви 7 квітня могли визначати напрям, але не є тим самим правовим актом. Точна дата важлива для оцінки повноваження, обставин і фактів на момент рішення.',
          ],
        ),
      },
      {
        title: L('От кризиса власти к вооружённой эскалации', 'From authority crisis to armed escalation', 'Від кризи влади до збройної ескалації'),
        paragraphs: P(
          [
            'Смена власти 22 февраля 2014 года происходила на фоне протестов и насилия. Затем последовали крымские события 16 марта, захваты зданий и вооружённая мобилизация на востоке. К 14 апреля центральная власть отвечала уже не на абстрактное политическое несогласие, а на конкретную обстановку с вооружёнными группами и занятыми государственными объектами. Это не предрешает законность каждого средства реакции.',
            'Начало АТО стало одним из факторов дальнейшей эскалации и одновременно ответом на уже развивавшееся вооружённое противостояние. Поэтому причинную историю нельзя свести ни к одному указу, ни к одной вооружённой группе. Для каждого этапа важны последовательность захватов, решения органов, местная мобилизация, иностранное участие и реальное применение силы. Конституционная компетенция и причинность являются разными вопросами.',
          ],
          [
            'The transfer of power on 22 February 2014 occurred amid protest and violence. Crimea on 16 March, seizures of buildings, and armed mobilisation in the east followed. By 14 April the central authorities faced not abstract disagreement but armed groups and occupied state facilities. That does not predetermine legality of every response method.',
            'The ATO’s start became one factor in further escalation while responding to an already developing armed confrontation. Causation cannot be reduced to one decree or group. Each stage requires the sequence of seizures, public decisions, local mobilisation, foreign participation, and actual force. Constitutional competence and causation are different questions.',
          ],
          [
            'Зміна влади 22 лютого 2014 року відбувалася на тлі протестів і насильства. Далі настали кримські події 16 березня, захоплення будівель і збройна мобілізація на сході. До 14 квітня центральна влада відповідала не на абстрактну незгоду, а на озброєні групи й зайняті державні об’єкти. Це не визначає наперед законність кожного засобу реакції.',
            'Початок АТО став одним із чинників подальшої ескалації й водночас відповіддю на вже розвинене збройне протистояння. Причинність не зводиться до одного указу чи групи. Для кожного етапу важливі захоплення, рішення органів, місцева мобілізація, іноземна участь і фактична сила. Конституційна компетенція та причинність є різними питаннями.',
          ],
        ),
      },
      {
        title: L('Что подтверждают три официальных документа', 'What the three official instruments confirm', 'Що підтверджують три офіційні документи'),
        paragraphs: P(
          [
            'Конституция устанавливает основания прекращения полномочий, временное исполнение и распределение функций. Постановление 22 февраля показывает фактически выбранную парламентом формулу. Указ 14 апреля подтверждает дату и форму введения решения СНБО в действие. Вместе они позволяют обнаружить спорное звено, но не превращают политическое слово «переворот» в установленную судом квалификацию.',
            'Документы высшего уровня не подтверждают число и происхождение отдельных захваченных бронемашин, содержание каждого приказа или поведение подразделений на месте. Законность исходного акта также не переносится автоматически на каждую операцию. Для этого нужны оперативные документы, факты и применимые нормы о правах человека и вооружённом конфликте. И наоборот, отдельное нарушение не аннулирует автоматически компетенцию всей государственной структуры.',
          ],
          [
            'The Constitution establishes termination grounds, temporary performance, and allocation of functions. The 22 February resolution shows parliament’s actual formula. The 14 April decree confirms date and legal form for putting the security decision into effect. Together they identify a contested link but do not turn “coup” into an adjudicated classification.',
            'High-level instruments do not prove the number or origin of captured vehicles, every operational order, or unit conduct. A lawful foundational act does not validate each operation automatically; operational documents, facts, and applicable human-rights and conflict rules are required. Conversely, an individual violation does not automatically nullify the entire state structure’s competence.',
          ],
          [
            'Конституція встановлює підстави припинення повноважень, тимчасове виконання та розподіл функцій. Постанова 22 лютого показує фактично обрану парламентом формулу. Указ 14 квітня підтверджує дату й форму введення рішення РНБО в дію. Разом вони виявляють спірну ланку, але не перетворюють політичне слово «переворот» на судову кваліфікацію.',
            'Документи найвищого рівня не доводять кількість і походження захопленої техніки, кожний наказ або поведінку підрозділів. Законність початкового акта не переноситься на кожну операцію автоматично; потрібні оперативні документи, факти й норми прав людини та конфлікту. І навпаки, окреме порушення не скасовує компетенцію всієї державної структури.',
          ],
        ),
      },
      {
        title: L('Производная незаконность или институциональная непрерывность', 'Derivative illegality or institutional continuity', 'Похідна незаконність чи інституційна безперервність'),
        paragraphs: P(
          [
            'Строгая трактовка считает, что дефект прекращения полномочий делает незаконным статус исполняющего обязанности и все его производные решения. Противоположная трактовка считает чрезвычайную фактическую ситуацию достаточной и не видит предмета конституционного спора. Первая расширяет один дефект без анализа последующего признания и функционирования институтов; вторая слишком легко отказывается от заранее установленных ограничений власти.',
            'Обоснованный вывод остаётся разделённым. Февральская процедура требует критической оценки по Конституции; апрельский акт имеет собственную документальную цепочку и фактический предмет; каждая силовая мера оценивается отдельно. Даже подтверждённый процедурный дефект не предоставляет внешнему государству право изменить украинские границы или вооружённой группе общий иммунитет. Последующая выборная легитимация укрепляет институты, но не переписывает прошлый текст.',
          ],
          [
            'A strict reading says a termination defect invalidates the acting presidency and every derived decision. The opposite treats emergency facts as sufficient and sees no constitutional dispute. The first expands one defect without later recognition and institutional operation; the second too readily abandons pre-existing limits on power.',
            'A sound conclusion stays divided. The February process deserves constitutional scrutiny; the April act has its own documentary chain and factual subject; each coercive measure is assessed separately. Even a proven defect grants neither a foreign state authority over Ukrainian borders nor armed groups general immunity. Later elections strengthen institutions without rewriting the earlier text.',
          ],
          [
            'Суворе тлумачення вважає, що дефект припинення повноважень робить незаконним статус виконувача обов’язків і всі похідні рішення. Протилежне вважає надзвичайні факти достатніми й не бачить конституційного спору. Перше розширює один дефект без урахування наступного визнання та роботи інституцій; друге надто легко відмовляється від попередніх меж влади.',
            'Обґрунтований висновок лишається розділеним. Лютнева процедура потребує конституційної оцінки; квітневий акт має власний документальний ланцюг і предмет; кожний силовий захід оцінюють окремо. Навіть доведений дефект не дає зовнішній державі влади над українськими кордонами чи збройній групі імунітету. Наступні вибори зміцнюють інституції, але не переписують минулий текст.',
          ],
        ),
      },
    ],
  },

  'shared-history-vs-statehood': {
    lead: L(
      'Россия и Украина веками существовали в пересекающихся политических, экономических, языковых и семейных пространствах. Эта связанность объясняет интенсивность взаимных ожиданий и конфликтов, но не превращает современную границу в недоразумение, которое одна сторона вправе исправить. Проверяемый тезис состоит в более узком различии: общая история является важной рамкой восприятия, тогда как государственность устанавливается актами суверенитета, волеизъявлением населения, международным признанием и действующими границами. Формула «один народ» может описывать политический взгляд, но не заменяет согласие живущих сегодня обществ.',
      'Russia and Ukraine existed for centuries in overlapping political, economic, linguistic, and family spaces. This connectedness explains intense expectations and conflict but does not turn a modern border into a mistake one side may correct. The testable distinction is narrower: shared history frames perception, while statehood rests on sovereignty acts, popular choice, international recognition, and operative borders. “One people” may describe a political view but cannot replace the consent of societies living today.',
      'Росія й Україна століттями існували в перетинних політичних, економічних, мовних і родинних просторах. Ця пов’язаність пояснює інтенсивність очікувань і конфліктів, але не перетворює сучасний кордон на помилку, яку одна сторона може виправити. Перевірюване розрізнення вужче: спільна історія формує сприйняття, а державність встановлюють акти суверенітету, волевиявлення, міжнародне визнання та чинні кордони. Формула «один народ» може описувати політичний погляд, але не замінює згоди сучасних суспільств.',
    ),
    sections: [
      {
        title: L('Историческая связь требует периодизации', 'Historical connection requires periodisation', 'Історичний зв’язок потребує періодизації'),
        paragraphs: P(
          [
            'Утверждение об общей истории становится содержательным только после указания периода, территории, института и вида связи. Нахождение земель в империи, советской федерации, единой экономике или культурной среде имеет разные последствия. Слова «всегда вместе» стирают войны, смену границ, неоднородность регионов и развитие украинских политических институтов. Обратная формула о полном отсутствии общего прошлого столь же неточна.',
            'История способна объяснить, почему российская политика воспринимала отделение Украины иначе, чем независимость далёкой страны, и почему украинская политика болезненно реагирует на отрицание отдельности. Она не определяет правовой результат сама. Если века совместного прошлого давали бы право на современное политическое поглощение, большинство государств мира столкнулось бы с бесконечными несовместимыми претензиями.',
          ],
          [
            'A shared-history claim becomes meaningful only with a period, territory, institution, and type of connection. Inclusion within an empire, Soviet federation, common economy, or cultural space has different implications. “Always together” erases wars, shifting borders, regional diversity, and Ukrainian political development. Denying all common past is equally inaccurate.',
            'History explains why Russian policy perceived Ukraine’s separation differently from a distant country’s independence and why Ukraine reacts sharply to denial of separateness. It does not determine legal outcome. If centuries of shared past authorised modern absorption, most states would face endless incompatible claims.',
          ],
          [
            'Твердження про спільну історію набуває змісту лише з періодом, територією, інституцією й видом зв’язку. Перебування в імперії, радянській федерації, спільній економіці чи культурному просторі має різні наслідки. «Завжди разом» стирає війни, зміну кордонів, регіональну неоднорідність і розвиток українських інституцій. Повне заперечення спільного минулого так само неточне.',
            'Історія пояснює, чому російська політика сприймала відокремлення України інакше, ніж незалежність далекої країни, і чому Україна гостро реагує на заперечення окремішності. Вона сама не визначає правовий результат. Якби століття спільного минулого давали право на сучасне поглинання, більшість держав зіткнулася б із безкінечними несумісними претензіями.',
          ],
        ),
      },
      {
        title: L('1990–1991 годы как изменение правовой рамки', '1990–1991 as a change of legal framework', '1990–1991 роки як зміна правової рамки'),
        paragraphs: P(
          [
            'Декларация о суверенитете Украины 16 июля 1990 года сформулировала самостоятельность республики ещё внутри СССР. Акт независимости и всеукраинский референдум 1991 года перевели вопрос в общенациональное решение об отдельном государстве. Прекращение СССР 26 декабря завершило союзную систему. Эти документы не уничтожили культуру и человеческие связи, но изменили политико-правовой способ их существования.',
            'Будапештский меморандум 5 декабря 1994 года уже обращается к Украине как к независимому государству с существующими границами. Крымские события 16 марта 2014 года и вторжение 24 февраля 2022 года нельзя квалифицировать как внутренний спор прежнего общего государства. Общая история остаётся контекстом мотивов и риторики, а действия оцениваются между отдельными субъектами международного права.',
          ],
          [
            'Ukraine’s sovereignty declaration of 16 July 1990 stated republican independence while still inside the USSR. The Independence Act and nationwide referendum of 1991 turned this into a national decision for separate statehood. The USSR’s termination on 26 December ended the Union framework. The instruments did not erase culture and human ties but changed their legal-political setting.',
            'The Budapest Memorandum of 5 December 1994 already addresses Ukraine as an independent state with existing borders. Crimea on 16 March 2014 and invasion on 24 February 2022 cannot be classified as internal disputes of the former common state. Shared history remains context for motives and rhetoric; conduct is assessed between separate international subjects.',
          ],
          [
            'Декларація про суверенітет України 16 липня 1990 року сформулювала самостійність республіки ще всередині СРСР. Акт незалежності та всеукраїнський референдум 1991 року перетворили це на загальнонаціональне рішення про окрему державу. Припинення СРСР 26 грудня завершило союзну рамку. Документи не стерли культури й людських зв’язків, але змінили політико-правовий спосіб їх існування.',
            'Будапештський меморандум 5 грудня 1994 року вже звертається до України як незалежної держави з чинними кордонами. Кримські події 16 березня 2014 року й вторгнення 24 лютого 2022 року не є внутрішнім спором колишньої спільної держави. Спільна історія лишається контекстом мотивів і риторики, а дії оцінюються між окремими міжнародними суб’єктами.',
          ],
        ),
      },
      {
        title: L('Что документы доказывают о государственности', 'What the documents prove about statehood', 'Що документи доводять про державність'),
        paragraphs: P(
          [
            'Акт независимости устанавливает заявленное создание самостоятельного украинского государства, а постановление о референдуме и его результат показывают общереспубликанский механизм подтверждения. Записи ООН и последующие международные отношения фиксируют обращение с Украиной и Россией как с отдельными государствами. Эти документы не измеряют культурную дистанцию и не требуют от граждан отказаться от сложной или смешанной идентичности.',
            'Российское продолжение членства СССР в ООН относится к международным правам и обязанностям Российской Федерации, а не к сохранению всей территории Союза. Оно не делает Россию органом, способным отменить украинское решение 1991 года. Аналогично украинская независимость не присваивает одной официальной исторической версии исключительное право на всё прошлое. Правовой статус и историческая память отвечают на разные вопросы.',
          ],
          [
            'The Independence Act states creation of an independent Ukrainian state, while the referendum resolution and result show republic-wide confirmation. UN records and later relations treat Ukraine and Russia as separate states. These documents do not measure cultural distance or require citizens to abandon complex or mixed identity.',
            'Russia’s continuation of USSR UN membership concerns Russian international rights and duties, not survival of all Union territory. It gives Russia no authority to cancel Ukraine’s 1991 choice. Likewise, Ukrainian independence does not give one official history exclusive ownership of the past. Legal status and historical memory answer different questions.',
          ],
          [
            'Акт незалежності встановлює створення самостійної української держави, а постанова про референдум і результат показують загальнореспубліканське підтвердження. Записи ООН і наступні відносини фіксують Україну й Росію як окремі держави. Документи не вимірюють культурну відстань і не вимагають від громадян відмовитися від складної чи змішаної ідентичності.',
            'Продовження Росією членства СРСР в ООН стосується російських міжнародних прав та обов’язків, а не збереження всієї союзної території. Воно не дає Росії влади скасувати український вибір 1991 року. Так само незалежність України не надає одній офіційній історії виключного права на минуле. Правовий статус та історична пам’ять відповідають на різні питання.',
          ],
        ),
      },
      {
        title: L('Между отрицанием связи и отрицанием отдельности', 'Between denying connection and denying separateness', 'Між запереченням зв’язку й запереченням окремішності'),
        paragraphs: P(
          [
            'Одна трактовка использует государственную отдельность так, будто общества не имели общего прошлого и контактов. Другая использует связанность как доказательство искусственности украинского государства. Первая беднее исторически; вторая опаснее политически, потому что превращает описание близости в право контроля. Уважение к общей истории совместимо с признанием самостоятельного политического выбора и границ.',
            'Документы позволяют установить современную государственность и происхождение признанной рамки. Они не определяют «истинную» идентичность каждого человека, не запрещают будущую добровольную интеграцию и не оправдывают принудительное объединение. Обоснованный вывод сохраняет оба факта: российское и украинское общества глубоко связаны, а после 1991 года эта связь существует между отдельными государствами, чьи отношения должны строиться на согласии.',
          ],
          [
            'One interpretation uses state separateness as though the societies had no shared past or contacts. Another uses connectedness to call Ukrainian statehood artificial. The first is historically poorer; the second is politically more dangerous because it turns closeness into authority. Respect for common history is compatible with separate political choice and borders.',
            'The documents establish modern statehood and the recognised framework’s origin. They do not decide every person’s “true” identity, prohibit future voluntary integration, or justify coerced unification. A sound conclusion holds both facts: Russian and Ukrainian societies are deeply connected, and after 1991 that connection exists between separate states whose relations require consent.',
          ],
          [
            'Одне тлумачення використовує державну окремішність так, ніби суспільства не мали спільного минулого й контактів. Інше використовує пов’язаність як доказ штучності української держави. Перше історично бідніше; друге політично небезпечніше, бо перетворює близькість на владу. Повага до спільної історії сумісна з окремим політичним вибором і кордонами.',
            'Документи встановлюють сучасну державність і походження визнаної рамки. Вони не визначають «справжню» ідентичність кожної людини, не забороняють майбутню добровільну інтеграцію й не виправдовують примусове об’єднання. Обґрунтований висновок зберігає обидва факти: суспільства глибоко пов’язані, а після 1991 року цей зв’язок існує між окремими державами й потребує згоди.',
          ],
        ),
      },
    ],
  },

  'war-as-political-instrument': {
    lead: L(
      'Крупная война расходует людей, вооружение, бюджет, дипломатический капитал и время; объяснение её как простого испытания техники не соответствует масштабу этих издержек. Проверяемая версия должна назвать политическую цель, ресурсы, которыми располагало руководство, и механизм превращения военного действия в желаемый порядок. Полномасштабное вторжение России 24 февраля 2022 года поэтому следует анализировать через заявленные и наблюдаемые цели, а не через один эффект на поле боя. Наличие цели, однако, ничего само по себе не говорит о законности, моральной допустимости или рациональности выбранной войны.',
      'Large-scale war consumes people, weapons, budgets, diplomatic capital, and time; describing it as mere equipment testing cannot account for those costs. A testable explanation identifies a political objective, available resources, and a mechanism connecting military action to a desired order. Russia’s full-scale invasion on 24 February 2022 should therefore be analysed through stated and observable aims rather than a single battlefield effect. Having an objective says nothing by itself about legality, moral permissibility, or rationality.',
      'Велика війна витрачає людей, озброєння, бюджет, дипломатичний капітал і час; пояснення її простим випробуванням техніки не відповідає масштабу витрат. Перевірювана версія має назвати політичну мету, доступні ресурси й механізм перетворення військової дії на бажаний порядок. Повномасштабне вторгнення Росії 24 лютого 2022 року тому слід аналізувати через заявлені та спостережувані цілі, а не один ефект на полі бою. Наявність мети сама не говорить про законність, моральну допустимість чи раціональність війни.',
    ),
    sections: [
      {
        title: L('Из чего складывается объяснение войны', 'What an explanation of war requires', 'З чого складається пояснення війни'),
        paragraphs: P(
          [
            'Политическая цель описывает состояние, которого руководство стремится добиться: изменить поведение другого государства, его границы, безопасность или внутренний порядок. Военная задача является промежуточным средством — занять территорию, разрушить возможности, принудить к переговорам. Смешение уровней создаёт круг: война ведётся ради победы, а победа определяется как успешное ведение войны. Нужен внешний измеримый итог.',
            'Ресурсная проверка спрашивает, соответствовали ли выделенные силы масштабу цели и какие предположения руководство делало о сопротивлении, времени и внешней реакции. Ошибочный расчёт не доказывает отсутствие цели; он может показать неполную информацию, внутренние стимулы или ограниченную рациональность. Поэтому объяснение должно допускать как сознательный план, так и последующее изменение целей после провала первоначального замысла.',
          ],
          [
            'A political objective describes the desired condition: changed behaviour, borders, security, or domestic order. A military task is an intermediate means—seize territory, destroy capability, compel negotiation. Merging them creates a circle in which war seeks victory and victory means waging war successfully. An external measurable outcome is needed.',
            'Resource analysis asks whether committed forces matched the aim and what leadership assumed about resistance, time, and external response. Miscalculation does not prove absence of purpose; it may show incomplete information, internal incentives, or bounded rationality. Explanations should permit both an initial plan and later adaptation after failure.',
          ],
          [
            'Політична мета описує бажаний стан: зміну поведінки іншої держави, її кордонів, безпеки чи внутрішнього порядку. Військове завдання є проміжним засобом — зайняти територію, зруйнувати можливості, примусити до переговорів. Змішування створює коло: війна ведеться заради перемоги, а перемога означає успішно вести війну. Потрібен зовнішній вимірюваний підсумок.',
            'Ресурсна перевірка питає, чи відповідали виділені сили меті й які припущення керівництво робило про опір, час і зовнішню реакцію. Помилковий розрахунок не доводить відсутності мети; він може показувати неповну інформацію, внутрішні стимули чи обмежену раціональність. Пояснення має допускати початковий план і пізнішу зміну після провалу.',
          ],
        ),
      },
      {
        title: L('От дипломатии к вторжению и изменению целей', 'From diplomacy to invasion and changing aims', 'Від дипломатії до вторгнення та зміни цілей'),
        paragraphs: P(
          [
            'Минские договорённости 12 февраля 2015 года, предложения по безопасности декабря 2021 года и Мюнхенская речь 19 февраля 2022 года формируют предвоенную дипломатическую последовательность. Она показывает конкурирующие требования и провал согласования, но не устанавливает, что все политические средства объективно были исчерпаны. 24 февраля Россия выбрала крупномасштабную силу, что требует анализа целей на момент решения.',
            'Заявленные цели и наблюдаемое направление операций могли не совпадать и меняться по мере сопротивления. Контроль территории, нейтральный статус, изменение украинской власти, защита Донбасса и более широкий пересмотр европейской безопасности являются разными возможными целями. Исследователь должен сравнивать официальные заявления, развертывание ресурсов, требования на переговорах и фактические решения, не выбирая одну формулу заранее.',
          ],
          [
            'The Minsk measures of 12 February 2015, security proposals in December 2021, and Munich speech of 19 February 2022 form the pre-war diplomatic sequence. They show competing demands and failed agreement, not objective exhaustion of every political means. Russia selected large-scale force on 24 February, requiring analysis of aims at that moment.',
            'Stated aims and operational direction may differ and change with resistance. Territorial control, Ukrainian neutrality, governmental change, protection of Donbas, and broader revision of European security are different possible aims. Official language, resources, negotiating demands, and actual decisions should be compared without selecting one formula in advance.',
          ],
          [
            'Мінські заходи 12 лютого 2015 року, пропозиції безпеки грудня 2021 року й Мюнхенська промова 19 лютого 2022 року утворюють передвоєнну дипломатичну послідовність. Вона показує конкуруючі вимоги та провал згоди, але не доводить об’єктивне вичерпання всіх політичних засобів. 24 лютого Росія обрала масштабну силу, що потребує аналізу цілей у момент рішення.',
            'Заявлені цілі й напрям операцій могли не збігатися та змінюватися з опором. Контроль території, нейтралітет, зміна української влади, захист Донбасу й ширший перегляд європейської безпеки є різними можливими цілями. Треба зіставляти офіційні слова, ресурси, переговорні вимоги та фактичні рішення, не обираючи одну формулу наперед.',
          ],
        ),
      },
      {
        title: L('Что Устав ООН устанавливает и чего не объясняет', 'What the UN Charter establishes and does not explain', 'Що Статут ООН встановлює й чого не пояснює'),
        paragraphs: P(
          [
            'Устав ООН устанавливает запрет угрозы силой и её применения и признанные исключения. Он позволяет квалифицировать исходное решение независимо от того, было ли оно рациональным способом достичь цели. Наличие политической цели не образует дополнительного исключения; война может быть инструментально осмысленной и одновременно запрещённой. Правовая и причинная оценки отвечают на разные вопросы.',
            'Сам Устав не устанавливает скрытый мотив руководства и не измеряет эффективность операции. Для этого нужны заявления, документы планирования, бюджетные и военные данные, последовательность требований и наблюдаемые последствия. Историческая аналогия с иным конфликтом способна предложить гипотезу, но не является доказательством мотива в 2022 году. Чем сильнее вывод о замысле, тем прямее должны быть источники.',
          ],
          [
            'The UN Charter establishes the prohibition on force and recognised exceptions. It permits legal classification regardless of whether war rationally served an objective. A political aim creates no additional exception; war may be instrumentally intelligible and still prohibited. Legal and causal assessments answer different questions.',
            'The Charter does not reveal hidden leadership motive or measure operational effectiveness. Statements, planning documents, budgets, military data, demands, and observed consequences are required. An analogy to another conflict may suggest a hypothesis but is not evidence of motive in 2022. Stronger claims about design require more direct sources.',
          ],
          [
            'Статут ООН встановлює заборону сили й визнані винятки. Він дозволяє правову кваліфікацію незалежно від того, чи була війна раціональним способом досягти мети. Політична мета не створює додаткового винятку; війна може бути інструментально зрозумілою й водночас забороненою. Правова та причинна оцінки відповідають на різні питання.',
            'Сам Статут не розкриває прихований мотив керівництва й не вимірює ефективність операції. Потрібні заяви, документи планування, бюджетні й військові дані, послідовність вимог і наслідки. Історична аналогія може запропонувати гіпотезу, але не є доказом мотиву 2022 року. Що сильніший висновок про задум, то прямішими мають бути джерела.',
          ],
        ),
      },
      {
        title: L('Испытание оружия, иррациональность и предел вывода', 'Weapons testing, irrationality, and limits', 'Випробування зброї, ірраціональність та межа висновку'),
        paragraphs: P(
          [
            'Версия об «испытании оружия» может описывать побочный эффект войны или отдельную задачу оборонной промышленности, но недостаточна как главное объяснение полномасштабных издержек. Противоположная версия иногда предполагает совершенную рациональность государства и выводит цель из каждого результата. Ошибки, бюрократические интересы, конкуренция ведомств и неверные прогнозы способны нарушить связь между целью и действием.',
            'Можно заключить, что крупное применение силы требует проверяемой гипотезы о политическом результате и ресурсном расчёте. Нельзя без дополнительных материалов определить единственную цель, считать любой результат преднамеренным или оправдать действие его инструментальностью. Правильная модель допускает несколько целей, их изменение и провал. Она оценивается тем, лучше ли объясняет решения и издержки, чем более простые альтернативы.',
          ],
          [
            '“Weapons testing” may describe a side effect or defence-industry task but cannot explain the primary scale of costs. The opposite account may assume perfect state rationality and infer intent from every outcome. Error, bureaucratic incentives, inter-agency competition, and false forecasts can break the link between aim and action.',
            'Large-scale force requires a testable hypothesis about political outcome and resources. Without more material one cannot identify a sole aim, treat every result as intended, or justify action through instrumentality. A sound model permits multiple aims, change, and failure and succeeds only if it explains decisions and costs better than alternatives.',
          ],
          [
            '«Випробування зброї» може описувати побічний ефект або завдання оборонної промисловості, але не пояснює головний масштаб витрат. Протилежна версія іноді припускає досконалу раціональність держави й виводить намір із кожного результату. Помилки, бюрократичні стимули, конкуренція відомств і хибні прогнози здатні розірвати зв’язок мети й дії.',
            'Масштабна сила потребує перевірюваної гіпотези про політичний результат і ресурси. Без додаткових матеріалів не можна визначити єдину мету, вважати кожний наслідок навмисним або виправдати дію її інструментальністю. Належна модель допускає кілька цілей, зміну й провал та оцінюється тим, чи краще пояснює рішення й витрати.',
          ],
        ),
      },
    ],
  },

  'budapest-assurances-and-disarmament': {
    lead: L(
      'Украинское ядерное разоружение, первоначальный неядерный курс и Будапештский меморандум относятся к одной исторической линии, но не являются одной сделкой, которую можно пересказать бытовой формулой. Декларация 16 июля 1990 года выразила будущую нейтральность и три неядерных принципа; Акт независимости 1991 года создал отдельное государство; меморандум 5 декабря 1994 года записал заверения в связи с присоединением Украины к режиму нераспространения. Он не создал автоматической коллективной обороны, но закрепил уважение суверенитета, границ и отказ от силы.',
      'Ukraine’s nuclear disarmament, initial non-nuclear course, and the Budapest Memorandum belong to one historical line but are not one bargain reducible to everyday language. The declaration of 16 July 1990 stated future neutrality and three non-nuclear principles; the 1991 Independence Act created a separate state; the memorandum of 5 December 1994 recorded assurances connected to Ukraine joining the non-proliferation regime. It created no automatic collective defence but reaffirmed sovereignty, borders, and abstention from force.',
      'Українське ядерне роззброєння, початковий без’ядерний курс і Будапештський меморандум належать до однієї історичної лінії, але не є однією угодою, яку можна переказати побутовою формулою. Декларація 16 липня 1990 року виразила майбутній нейтралітет і три без’ядерні принципи; Акт незалежності 1991 року створив окрему державу; меморандум 5 грудня 1994 року зафіксував запевнення у зв’язку з приєднанням до режиму нерозповсюдження. Він не створив автоматичної колективної оборони, але підтвердив суверенітет, кордони й відмову від сили.',
    ),
    sections: [
      {
        title: L('Три документа и три разных функции', 'Three instruments with three functions', 'Три документи й три різні функції'),
        paragraphs: P(
          [
            'Декларация о суверенитете является программным актом республики в переходный период и выражает намерение не участвовать в блоках и не принимать, не производить и не приобретать ядерное оружие. Акт независимости имеет иной предмет: он провозглашает самостоятельное государство. В нём нет формулы, ставящей существование Украины в зависимость от вечной нейтральности или неядерности.',
            'Будапештский меморандум относится к международному оформлению неядерного статуса независимой Украины. Его стороны и пункты отличаются от двух украинских актов. Поэтому нельзя утверждать, что признание независимости было выдано в обмен на нейтралитет, если такая обусловленность отсутствует в соответствующем тексте. Связь событий сильна исторически, но каждый правовой вывод должен иметь собственный документ.',
          ],
          [
            'The sovereignty declaration is a transitional republican programme expressing an intention to remain outside blocs and not accept, produce, or acquire nuclear weapons. The Independence Act has another subject: a separate state. It does not condition Ukraine’s existence on permanent neutrality or non-nuclear status.',
            'The Budapest Memorandum concerns international implementation of independent Ukraine’s non-nuclear status. Its parties and provisions differ from the two Ukrainian acts. Recognition of independence cannot be called an exchange for neutrality when the relevant text contains no such condition. Events are historically connected, but each legal conclusion needs its own instrument.',
          ],
          [
            'Декларація про суверенітет є програмним актом республіки перехідного періоду й виражає намір не брати участі в блоках та не приймати, не виробляти й не набувати ядерну зброю. Акт незалежності має інший предмет: самостійну державу. Він не ставить існування України в залежність від вічного нейтралітету чи без’ядерності.',
            'Будапештський меморандум стосується міжнародного оформлення без’ядерного статусу незалежної України. Його сторони й пункти відрізняються від двох українських актів. Не можна називати визнання незалежності обміном на нейтралітет, якщо відповідний текст не містить такої умови. Події історично пов’язані, але кожний правовий висновок потребує свого документа.',
          ],
        ),
      },
      {
        title: L('Арсенал, контроль и последовательность разоружения', 'Arsenal, control, and the disarmament sequence', 'Арсенал, контроль і послідовність роззброєння'),
        paragraphs: P(
          [
            'Ядерные силы на территории Украины были частью советского военного комплекса, что отличает ситуацию от создания полностью самостоятельной украинской системы с нуля. Но советское происхождение не делает вопросы физического размещения, оперативного контроля, собственности, технического обслуживания и международных обязательств одним простым фактом. Для каждого утверждения требуется точный предмет и относящийся к нему документ.',
            'К 5 декабря 1994 года политическая последовательность включала украинские решения, переговоры о вооружениях и присоединение к Договору о нераспространении как неядерного государства. Меморандум сопровождал этот переход заверениями. После Крыма 2014 года и вторжения 2022 года спор о цене разоружения стал острее, но позднее нарушение не переписывает первоначальную конструкцию как автоматический оборонный союз.',
          ],
          [
            'Nuclear forces located in Ukraine formed part of a Soviet military complex, unlike creation of a wholly independent Ukrainian system. Soviet origin does not collapse physical location, operational control, ownership, maintenance, and international duties into one fact. Each claim needs a precise subject and relevant document.',
            'By 5 December 1994 the sequence included Ukrainian decisions, arms negotiations, and accession to the Non-Proliferation Treaty as a non-nuclear state. The memorandum accompanied this transition with assurances. Crimea in 2014 and invasion in 2022 sharpened debate over disarmament’s price, but later breach does not rewrite the original arrangement as an automatic defence alliance.',
          ],
          [
            'Ядерні сили на території України були частиною радянського військового комплексу, що відрізняється від створення цілком самостійної української системи. Радянське походження не зводить фізичне розміщення, оперативний контроль, власність, обслуговування й міжнародні обов’язки до одного факту. Кожне твердження потребує точного предмета й документа.',
            'До 5 грудня 1994 року послідовність охоплювала українські рішення, переговори про озброєння й приєднання до Договору про нерозповсюдження як без’ядерної держави. Меморандум супроводив перехід запевненнями. Крим 2014 року й вторгнення 2022 року загострили спір про ціну роззброєння, але пізніше порушення не переписує початкову конструкцію як автоматичний оборонний союз.',
          ],
        ),
      },
      {
        title: L('Записанные обещания и отсутствующий механизм', 'Recorded promises and an absent mechanism', 'Записані обіцянки й відсутній механізм'),
        paragraphs: P(
          [
            'Меморандум подтверждает уважение независимости, суверенитета и существующих границ Украины, воздержание от угрозы силой или её применения и консультации. Он обращён к Украине как государству и не содержит оговорки, прекращающей заверения после смены президента, правительства, Конституции или внешнеполитического курса. Это буквальное содержание нельзя обнулить из-за отсутствия заранее назначенной военной реакции. Нарушение содержательного заверения и вопрос о способе принуждения к исполнению являются двумя разными этапами анализа.',
            'Документ не содержит формулы автоматической коллективной обороны, сопоставимой с обязательством членов НАТО. Поэтому западным подписантам нельзя приписать именно такую неисполненную обязанность без другого основания. Одновременно отсутствие обязанности вступить в войну не означает, что Россия могла применять силу или менять границы. Точный текст создаёт асимметричный, но не пустой набор обещаний.',
          ],
          [
            'The memorandum reaffirms Ukraine’s independence, sovereignty, existing borders, abstention from threats or force, and consultation. It addresses Ukraine as a state and contains no clause terminating the assurances after a change of president, government, constitution, or foreign-policy course. Absence of a pre-assigned military response does not erase this literal content. Breach of a substantive assurance and available enforcement are separate analytical stages.',
            'The instrument contains no automatic collective-defence formula comparable to NATO members’ duty. Western signatories cannot be assigned that particular breached duty without another basis. Equally, no duty to enter war did not permit Russia to use force or change borders. The exact text creates an asymmetric but non-empty set of promises.',
          ],
          [
            'Меморандум підтверджує незалежність, суверенітет і чинні кордони України, утримання від погрози силою чи її застосування та консультації. Він звернений до України як держави й не містить застереження про припинення запевнень після зміни президента, уряду, Конституції або зовнішньополітичного курсу. Відсутність наперед призначеної військової відповіді не стирає буквального змісту. Порушення змістовного запевнення й доступний механізм виконання є різними етапами аналізу.',
            'Документ не містить автоматичної колективної оборони, подібної до обов’язку членів НАТО. Західним підписантам не можна приписати саме таку порушену обіцянку без іншої підстави. Так само відсутність обов’язку вступити у війну не дозволяла Росії застосовувати силу чи змінювати кордони. Точний текст створює асиметричний, але не порожній набір обіцянок.',
          ],
        ),
      },
      {
        title: L('Гарантия, заверение и предел ретроспективы', 'Guarantee, assurance, and retrospective limits', 'Гарантія, запевнення й межа ретроспективи'),
        paragraphs: P(
          [
            'Одна позиция описывает Украину как обладателя полноценной военной гарантии, оставленного без обещанной защиты. Другая считает советское происхождение арсенала и отсутствие оборонного пункта доказательством, что Украина ничего не отдала и ничего не получила. Первая расширяет текст, вторая игнорирует реальный отказ от ядерного статуса и записанные заверения. Обе упрощают сложную последовательность.',
            'Документы позволяют утверждать: Украина последовательно выбрала неядерный курс, меморандум был связан с его международным оформлением, а подписанты записали конкретные обещания без автоматической обороны. Они не позволяют считать нейтралитет вечным условием независимости, оценить одной фразой весь контроль над советским арсеналом или определить достаточность последующей помощи. Последствия нарушения важны для будущей цены любых заверений безопасности.',
          ],
          [
            'One position describes Ukraine as holding a full military guarantee and abandoned. Another treats Soviet origin and absence of a defence clause as proof Ukraine surrendered and received nothing. The first expands the text; the second ignores real non-nuclear transition and recorded assurances. Both flatten a complex sequence.',
            'The documents support that Ukraine chose a non-nuclear course, the memorandum accompanied its international implementation, and signatories made specific promises without automatic defence. They do not make neutrality a permanent condition of independence, settle Soviet arsenal control in one sentence, or determine sufficiency of later aid. Breach affects the future credibility and cost of security assurances.',
          ],
          [
            'Одна позиція описує Україну як власника повної військової гарантії, покинутого без захисту. Інша вважає радянське походження арсеналу й відсутність оборонного пункту доказом, що Україна нічого не віддала й не отримала. Перша розширює текст, друга ігнорує реальний без’ядерний перехід і запевнення. Обидві спрощують складну послідовність.',
            'Документи дозволяють стверджувати: Україна обрала без’ядерний курс, меморандум супроводив його міжнародне оформлення, а підписанти дали конкретні обіцянки без автоматичної оборони. Вони не роблять нейтралітет вічною умовою незалежності, не вирішують контроль над радянським арсеналом однією фразою й не визначають достатність пізнішої допомоги. Порушення впливає на майбутню ціну запевнень безпеки.',
          ],
        ),
      },
    ],
  },

  'security-dilemma-and-escalation-chain': {
    lead: L(
      'Предыстория вторжения образует цепочку неисполненных договорённостей, взаимного вооружения, требований безопасности и всё более жёстких угрозовых оценок. Минские меры 12 февраля 2015 года не были реализованы полностью; в декабре 2021 года Россия передала США и НАТО проекты соглашений; 19 февраля 2022 года Украина призвала к консультациям по Будапештскому меморандуму; 24 февраля началась полномасштабная война. Эта последовательность помогает понять, как в Москве могли объявить политические средства исчерпанными. Она не устанавливает, что такой вывод был верным или создавал право на силу.',
      'The road to invasion includes unimplemented agreements, reciprocal armament, security demands, and increasingly severe threat assessments. The Minsk measures of 12 February 2015 were not fully implemented; Russia sent draft security agreements to the United States and NATO in December 2021; Ukraine called for Budapest consultations on 19 February 2022; full-scale war began on 24 February. This sequence helps explain how Moscow could declare political means exhausted. It does not establish that this conclusion was correct or legally authorised force.',
      'Передісторія вторгнення складається з невиконаних домовленостей, взаємного озброєння, вимог безпеки й дедалі жорсткіших оцінок загрози. Мінські заходи 12 лютого 2015 року не були реалізовані повністю; у грудні 2021 року Росія передала США й НАТО проєкти угод; 19 лютого 2022 року Україна закликала до консультацій за Будапештським меморандумом; 24 лютого почалася повномасштабна війна. Послідовність пояснює, як Москва могла оголосити політичні засоби вичерпаними. Вона не доводить правильність цього висновку чи право на силу.',
    ),
    sections: [
      {
        title: L('Как строится причинная цепочка', 'How the causal chain is built', 'Як будується причинний ланцюг'),
        paragraphs: P(
          [
            'Для каждого звена нужны действие, восприятие, ответ и доступная альтернатива. Невыполнение Минска должно раскладываться по конкретным пунктам и обязанностям сторон, а не приписываться одному участнику общей формулой. Рост военного сотрудничества требует данных о его масштабе и назначении. Переговорный провал требует показать, какие предложения были отклонены и оставался ли иной путь.',
            'Дилемма безопасности возможна, когда оборонительные меры одной стороны другая воспринимает как наступательные. Но модель не исключает сознательной ревизии, манипуляции угрозой или неверного расчёта. Причинное объяснение становится сильнее, если предсказывает последовательные реакции и подтверждается решениями, а не только поздними оправданиями. Хронология является необходимым, но не достаточным доказательством причинности.',
          ],
          [
            'Each link needs an act, perception, response, and available alternative. Minsk non-performance must be divided among specific provisions and parties rather than assigned wholesale. Military cooperation requires evidence of scale and purpose. Negotiating failure requires rejected proposals and whether another route remained.',
            'A security dilemma exists when one side’s defensive measure appears offensive to another. It does not exclude conscious revisionism, manipulation, or miscalculation. Causal explanation strengthens when it predicts responses and appears in decisions rather than later justifications. Chronology is necessary but insufficient for causation.',
          ],
          [
            'Кожна ланка потребує дії, сприйняття, відповіді й доступної альтернативи. Невиконання Мінська треба розкладати за конкретними пунктами та сторонами, а не приписувати одному учаснику загалом. Військова співпраця потребує даних про масштаб і мету. Провал переговорів — відхилених пропозицій і перевірки іншого шляху.',
            'Дилема безпеки виникає, коли оборонний захід однієї сторони інша сприймає як наступальний. Вона не виключає свідомої ревізії, маніпуляції чи помилки. Причинне пояснення сильніше, якщо передбачає реакції й підтверджується рішеннями, а не лише пізніми виправданнями. Хронологія потрібна, але недостатня для причинності.',
          ],
        ),
      },
      {
        title: L('Минск, декабрьские проекты и Мюнхен', 'Minsk, the December drafts, and Munich', 'Мінськ, грудневі проєкти та Мюнхен'),
        paragraphs: P(
          [
            'Пакет мер по Минску содержал безопасность, политические шаги, выборы и восстановление контроля границы, но последовательность оставалась предметом конфликта. Проекты декабря 2021 года формализовали российские требования к НАТО и США; ответ НАТО 16 декабря подтверждал готовность к диалогу, не принимая ограничение суверенного выбора союзов. Эти документы фиксируют реальные несовместимые позиции, а не отсутствие всякой дипломатии.',
            'Мюнхенская речь 19 февраля 2022 года призвала инициировать консультации по меморандуму и поставила под сомнение пакет 1994 года при их новом провале. Она не объявляла принятого решения создать ядерное оружие. Американский закон о ленд-лизе также нельзя считать довоенным принятым решением: проект был внесён 19 января, а законом стал 9 мая, уже после вторжения.',
          ],
          [
            'The Minsk package combined security, political steps, elections, and border control, while sequencing remained disputed. Russia’s December 2021 drafts formalised demands toward NATO and the United States; NATO’s 16 December response supported dialogue without accepting limits on alliance choice. These documents record incompatible positions, not absence of diplomacy.',
            'The Munich speech of 19 February 2022 called for memorandum consultations and questioned the 1994 package if they failed again. It did not announce a decision to build nuclear weapons. The US lend-lease law was likewise not a completed pre-war decision: introduced on 19 January, it became law on 9 May after invasion.',
          ],
          [
            'Мінський пакет поєднував безпеку, політичні кроки, вибори й контроль кордону, але послідовність лишалася спірною. Російські проєкти грудня 2021 року формалізували вимоги до НАТО й США; відповідь НАТО 16 грудня підтримувала діалог, не приймаючи обмеження союзного вибору. Документи фіксують несумісні позиції, а не відсутність дипломатії.',
            'Мюнхенська промова 19 лютого 2022 року закликала до консультацій за меморандумом і поставила пакет 1994 року під сумнів за нового провалу. Вона не оголошувала рішення створити ядерну зброю. Американський закон про ленд-ліз також не був готовим довоєнним рішенням: проєкт внесли 19 січня, а законом він став 9 травня після вторгнення.',
          ],
        ),
      },
      {
        title: L('Документы фиксируют позиции, а не неизбежность', 'Documents record positions, not inevitability', 'Документи фіксують позиції, а не неминучість'),
        paragraphs: P(
          [
            'Минский текст позволяет установить согласованный набор мер, но сам не распределяет всю вину за провал исполнения. Дипломатическая переписка 2021 года устанавливает предложения и публичные ответы, но не раскрывает все закрытые контакты и внутреннюю оценку альтернатив. Речь фиксирует публичную позицию Украины; закон фиксирует дату его принятия. Точность этих предметов защищает причинную модель от удобных анахронизмов.',
            'Устав ООН ставит отдельную правовую границу: восприятие военной угрозы, неисполненный договор и неудачный переговорный проект не образуют сами по себе дополнительного исключения из запрета силы. Даже если они существенно повлияли на решение, законность проверяется по вооружённому нападению, самообороне или иному признанному основанию. Причина и оправдание не должны обмениваться функциями.',
          ],
          [
            'Minsk establishes an agreed set of measures but does not allocate all blame for failure. 2021 diplomatic documents establish proposals and public responses but not every closed contact or internal alternative assessment. A speech records Ukraine’s public position; a statute records its adoption date. Subject precision protects causal analysis from convenient anachronism.',
            'The UN Charter supplies a separate legal boundary: perceived military threat, failed agreement, and unsuccessful negotiations do not create an additional exception to force. Even if they influenced the decision, legality requires an armed attack, self-defence, or another recognised ground. Cause and justification must not exchange roles.',
          ],
          [
            'Мінськ встановлює погоджений набір заходів, але не розподіляє всю провину за провал. Дипломатичні документи 2021 року фіксують пропозиції й публічні відповіді, але не всі закриті контакти та внутрішню оцінку альтернатив. Промова фіксує публічну позицію України; закон — дату ухвалення. Точність предмета захищає причинний аналіз від зручних анахронізмів.',
            'Статут ООН ставить окрему правову межу: сприйняття військової загрози, невиконана угода й невдалі переговори не створюють додаткового винятку для сили. Навіть якщо вони вплинули на рішення, законність потребує збройного нападу, самооборони чи іншої визнаної підстави. Причина й виправдання не мають мінятися ролями.',
          ],
        ),
      },
      {
        title: L('Неизбежная реакция или политический выбор', 'Inevitable reaction or political choice', 'Неминуча реакція чи політичний вибір'),
        paragraphs: P(
          [
            'Одна трактовка изображает вторжение почти механическим результатом давления и провала Минска. Другая отказывается изучать предысторию, опасаясь смягчить ответственность. Первая убирает выбор руководства и альтернативы, превращая субъективную угрозу в неизбежность; вторая мешает понять, какие институциональные меры могли предотвратить эскалацию. Объяснение и осуждение способны сосуществовать.',
            'Можно заключить, что спор о безопасности, неисполненные договорённости и переговоры 2021–2022 годов составляли существенный контекст российского решения. Нельзя без дополнительных данных назначить единственную причину, считать дипломатию объективно исчерпанной или возложить весь Минск на одну сторону. Наиболее полезный итог — датированная гипотеза, открытая для проверки альтернатив и отделённая от правового разрешения войны.',
          ],
          [
            'One reading makes invasion an almost mechanical result of pressure and Minsk failure. Another refuses background analysis for fear of softening responsibility. The first removes leadership choice and alternatives; the second prevents learning which institutions might have reduced escalation. Explanation and condemnation can coexist.',
            'Security disputes, unimplemented agreements, and 2021–2022 negotiations were substantial context for Russia’s decision. Without more data they cannot be the sole cause, prove diplomacy objectively exhausted, or place all Minsk failure on one party. The useful result is a dated hypothesis open to alternatives and separate from legal permission for war.',
          ],
          [
            'Одне тлумачення робить вторгнення майже механічним наслідком тиску й провалу Мінська. Інше відмовляється вивчати передісторію, боячись послабити відповідальність. Перше усуває вибір керівництва й альтернативи; друге заважає зрозуміти запобіжні інституційні заходи. Пояснення й осуд можуть співіснувати.',
            'Спір про безпеку, невиконані домовленості та переговори 2021–2022 років були суттєвим контекстом російського рішення. Без додаткових даних вони не є єдиною причиною, не доводять об’єктивне вичерпання дипломатії й не покладають весь Мінськ на одну сторону. Корисний підсумок — датована гіпотеза, відкрита до альтернатив і відокремлена від правового дозволу війни.',
          ],
        ),
      },
    ],
  },

  'ussr-dissolution-and-present-consent': {
    lead: L(
      'Юридическая критика распада СССР, личное сожаление о его результате и современный проект восстановления — три разных позиции. Можно считать решения декабря 1991 года процедурно дефектными и одновременно признавать, что за три десятилетия возникли самостоятельные государства и поколения граждан, чью волю нельзя отменить поздним парламентским актом. 12 декабря 1991 года российский парламент ратифицировал соглашение о СНГ и денонсировал союзный договор; в 1996 году Государственная Дума оспорила этот шаг, но СССР не был восстановлен. Современное объединение потребовало бы нового свободного согласия обществ.',
      'Legal criticism of the USSR’s dissolution, regret about its result, and a present project of restoration are three different positions. One may consider the December 1991 process defective while recognising that three decades produced independent states and generations whose will cannot be erased by a later parliamentary act. On 12 December 1991 Russia’s parliament ratified the CIS agreement and denounced the Union treaty; in 1996 the State Duma challenged that step, but the USSR was not restored. Any present union would require new free social consent.',
      'Юридична критика розпаду СРСР, жаль за його результатом і сучасний проєкт відновлення — три різні позиції. Можна вважати грудневий процес 1991 року процедурно хибним і водночас визнавати, що за три десятиліття виникли самостійні держави та покоління, волю яких не скасує пізня парламентська постанова. 12 грудня 1991 року російський парламент ратифікував угоду про СНД і денонсував союзний договір; 1996 року Державна Дума оскаржила цей крок, але СРСР не відновився. Сучасне об’єднання потребувало б нової вільної згоди суспільств.',
    ),
    sections: [
      {
        title: L('Процедурный спор не останавливает время', 'A procedural dispute does not stop time', 'Процедурний спір не зупиняє час'),
        paragraphs: P(
          [
            'Спор о распаде включает союзный референдум, полномочия республик, соглашение 8 декабря, российские решения 12 декабря и декларацию 26 декабря. Ошибка в дате меняет причинную последовательность: денонсация была принята 12, а не 20 декабря. Точность необходима, потому что разные документы отвечают за создание СНГ, внутреннюю ратификацию, прекращение союзного договора и окончание органов СССР.',
            'Даже если отдельный шаг признать противоречивым, нужно установить его правовое последствие в тот момент и последующую практику. Новые государства получили признание, Россия продолжила членство СССР в ООН, а союзные институты прекратили работу. Процедурный дефект способен сохранять историко-правовой спор, но не удерживает исчезнувшую систему в неизменном состоянии вне фактов и международных отношений.',
          ],
          [
            'The dissolution dispute includes the Union referendum, republican powers, the 8 December agreement, Russian decisions of 12 December, and the 26 December declaration. A date error changes causation: denunciation occurred on 12, not 20 December. Precision matters because different instruments created the CIS, ratified domestically, denounced the treaty, and ended Union bodies.',
            'Even if one step was defective, its effect then and later practice must be identified. New states gained recognition, Russia continued USSR UN membership, and Union institutions ceased. A defect can preserve historical legal controversy but cannot hold a vanished system unchanged outside facts and international relations.',
          ],
          [
            'Спір про розпад охоплює союзний референдум, повноваження республік, угоду 8 грудня, російські рішення 12 грудня й декларацію 26 грудня. Помилка в даті змінює послідовність: денонсацію ухвалили 12, а не 20 грудня. Точність потрібна, бо різні документи створили СНД, ратифікували його, денонсували договір і завершили союзні органи.',
            'Навіть якщо окремий крок був хибним, треба встановити його тодішній наслідок і подальшу практику. Нові держави отримали визнання, Росія продовжила членство СРСР в ООН, а союзні інституції припинили роботу. Дефект зберігає історико-правовий спір, але не утримує зниклу систему поза фактами й міжнародними відносинами.',
          ],
        ),
      },
      {
        title: L('Решения 1996 года и отсутствие восстановления', 'The 1996 decisions and non-restoration', 'Рішення 1996 року й відсутність відновлення'),
        paragraphs: P(
          [
            'В 1996 году Государственная Дума отменила постановление 1991 года о денонсации и подтвердила значение результатов союзного референдума для России. Эти акты следует датировать правильно и читать по буквальному содержанию. Они выразили внутреннюю политико-правовую позицию, но не создали заново союзное правительство, бюджет, территорию, международное членство или обязательную власть над бывшими республиками.',
            'Официальная стенограмма показывает, что сами российские институты обсуждали последствия и пределы решения. Международное продолжение России в ООН шло по иной линии и не означало возрождение СССР. Если бы акт 1996 года сам восстанавливал Союз, потребовалось бы объяснить отсутствие действующих союзных органов и согласия других государств. Фактический результат опровергает такое расширительное прочтение.',
          ],
          [
            'In 1996 the State Duma annulled the 1991 denunciation resolution and reaffirmed the Union referendum’s significance for Russia. These acts require correct dating and literal reading. They expressed a domestic legal-political position but recreated no Union government, budget, territory, international membership, or authority over former republics.',
            'The official parliamentary record shows Russian institutions discussing effect and limits. Russia’s separate UN continuity did not revive the USSR. If the 1996 act itself restored the Union, the absence of Union bodies and other states’ consent would require explanation. The factual result defeats that expansive reading.',
          ],
          [
            '1996 року Державна Дума скасувала постанову 1991 року про денонсацію й підтвердила значення союзного референдуму для Росії. Акти треба правильно датувати й читати буквально. Вони виразили внутрішню політико-правову позицію, але не створили заново союзний уряд, бюджет, територію, міжнародне членство чи владу над колишніми республіками.',
            'Офіційна стенограма показує обговорення наслідків і меж рішення російськими інституціями. Окреме продовження Росії в ООН не відновило СРСР. Якби акт 1996 року сам відновлював Союз, треба було б пояснити відсутність союзних органів і згоди інших держав. Фактичний результат спростовує розширене читання.',
          ],
        ),
      },
      {
        title: L('Современное согласие отличается от воли 1991 года', 'Present consent differs from the will of 1991', 'Сучасна згода відрізняється від волі 1991 року'),
        paragraphs: P(
          [
            'Граждане, голосовавшие на союзном референдуме, отвечали на вопрос в политической обстановке 1991 года. После распада появились новые конституции, гражданства, границы и поколения, которые не участвовали в том выборе. Даже признание юридического веса старого результата не позволяет считать его вечным согласием на любую форму восстановления спустя десятилетия. Предмет и участники нового решения были бы иными.',
            'Акт независимости Украины и всеукраинский референдум показывают отдельное волеизъявление украинского населения в том же историческом периоде. Современный проект объединения должен учитывать нынешнюю волю каждого затрагиваемого общества, быть свободным от вооружённого давления и иметь согласованную конституционную форму. Ностальгия, культурная связь и процедурная критика не заменяют эти условия.',
          ],
          [
            'Citizens in the Union referendum answered a question in 1991 conditions. New constitutions, citizenships, borders, and generations followed. Even granting legal weight to the old result does not make it perpetual consent to any restoration decades later. A new decision would have a different subject and electorate.',
            'Ukraine’s Independence Act and nationwide referendum show a separate Ukrainian choice in the same period. Any present union requires the current will of every affected society, freedom from armed pressure, and an agreed constitutional form. Nostalgia, cultural connection, and procedural criticism cannot substitute for these conditions.',
          ],
          [
            'Громадяни на союзному референдумі відповідали на питання в умовах 1991 року. Після розпаду виникли нові конституції, громадянства, кордони й покоління. Навіть юридична вага старого результату не робить його вічною згодою на будь-яке відновлення через десятиліття. Нове рішення мало б інший предмет і склад учасників.',
            'Акт незалежності України та всеукраїнський референдум показують окремий український вибір того самого періоду. Сучасне об’єднання потребує нинішньої волі кожного суспільства, свободи від збройного тиску й погодженої конституційної форми. Ностальгія, культурний зв’язок і процедурна критика не замінюють цих умов.',
          ],
        ),
      },
      {
        title: L('Сожаление, право и политический проект', 'Regret, law, and political project', 'Жаль, право й політичний проєкт'),
        paragraphs: P(
          [
            'Одна позиция считает всякое сожаление о СССР программой насильственного восстановления. Другая превращает возможную незаконность распада в действующий титул на соседние государства. Первая смешивает оценку прошлого с намерением; вторая игнорирует последующие права и свободную волю населения. Между ними возможна последовательная позиция: критиковать процедуру и отвергать принуждение современного объединения.',
            'Документы позволяют исправить даты, показать характер решений 1996 года и установить фактическое прекращение Союза. Они не позволяют измерить сегодняшнее общественное желание восстановления, определить подходящую форму союза или отменить международно признанные государства. Вывод должен оставаться ограниченным: историческая коллизия существует, но её современное политическое решение возможно только через новое согласие, а не через ретроспективный указ.',
          ],
          [
            'One position treats all regret for the USSR as a programme of violent restoration. Another turns possible unlawful dissolution into current title over neighbours. The first confuses historical judgment with intention; the second ignores later rights and free popular will. A coherent position can criticise procedure while rejecting coercive reunion.',
            'The documents correct dates, show the 1996 decisions’ nature, and establish effective Union termination. They do not measure present desire for restoration, design a union, or erase recognised states. The conclusion is limited: a historical controversy exists, but a present solution requires new consent rather than a retrospective decree.',
          ],
          [
            'Одна позиція вважає кожний жаль за СРСР програмою насильницького відновлення. Інша перетворює можливу незаконність розпаду на сучасний титул над сусідами. Перша змішує оцінку минулого з наміром; друга ігнорує наступні права й вільну волю. Послідовна позиція може критикувати процедуру й відкидати примусове возз’єднання.',
            'Документи виправляють дати, показують характер рішень 1996 року й встановлюють фактичне припинення Союзу. Вони не вимірюють сучасне бажання відновлення, не проєктують союз і не стирають визнані держави. Висновок обмежений: історична колізія існує, але сучасне рішення потребує нової згоди, а не ретроспективного указу.',
          ],
        ),
      },
    ],
  },

  'state-continuity-vs-ideology': {
    lead: L(
      'Продолжение государства не требует сохранения его прежней идеологии, экономического строя или политического режима. После прекращения СССР Россия продолжила его членство в ООН и приняла ответственность по соответствующим международным правам и обязательствам, оставаясь уже иным государственным устройством. Это различие важно для договоров, разоружения и обязанностей перед людьми: нельзя отказаться от обязательства только потому, что новая власть не разделяет советскую доктрину. Одновременно международное продолжение не означает полного тождества во всех вопросах собственности, долга и внутреннего права.',
      'State continuity does not require preservation of an earlier ideology, economy, or political regime. After the USSR ended, Russia continued its UN membership and accepted responsibility for related international rights and obligations under a different domestic order. This matters for treaties, disarmament, and duties to people: a new government cannot reject an obligation merely because it rejects Soviet doctrine. International continuity also does not mean complete identity for every issue of property, debt, and domestic law.',
      'Продовження держави не потребує збереження колишньої ідеології, економічного устрою чи політичного режиму. Після припинення СРСР Росія продовжила його членство в ООН і прийняла відповідальність за відповідні міжнародні права та обов’язки вже за іншого внутрішнього ладу. Це важливо для договорів, роззброєння й обов’язків перед людьми: нова влада не може відкинути зобов’язання лише через відмову від радянської доктрини. Міжнародне продовження також не означає повної тотожності в питаннях майна, боргу й внутрішнього права.',
    ),
    sections: [
      {
        title: L('Юридическая личность и политический строй', 'Legal personality and political order', 'Правова особа й політичний лад'),
        paragraphs: P(
          [
            'Международная правосубъектность отвечает на вопрос, кто несёт права и обязанности во внешней системе. Идеология отвечает на вопрос, какими ценностями и программами руководствуется власть. Революция, смена конституции или переход к иной экономике могут радикально изменить второе, не создавая автоматически нового государства для каждого договора. Иначе любое правительство могло бы обнулять неудобные обязательства сменой режима.',
            'Продолжатель и правопреемник не всегда являются тождественными терминами. Для членства в организации может сложиться непрерывность, а активы, долги и отдельные договоры могут распределяться дополнительными соглашениями. Поэтому общий ярлык недостаточен. Нужно назвать конкретное право, практику признания и документ, который связывает новое устройство с прежним обязательством.',
          ],
          [
            'International legal personality asks who holds external rights and duties. Ideology asks which values and programmes guide government. Revolution, constitutional replacement, or economic transition may radically change the latter without creating a new state for every treaty. Otherwise any government could erase inconvenient duties through regime change.',
            'Continuer and successor are not always identical. Membership may continue while assets, debts, and treaties are allocated by additional agreements. A general label is insufficient; the particular right, recognition practice, and instrument linking the new order to an old duty must be identified.',
          ],
          [
            'Міжнародна правосуб’єктність відповідає, хто має зовнішні права й обов’язки. Ідеологія — якими цінностями та програмами керується влада. Революція, нова конституція чи інша економіка можуть радикально змінити друге, не створюючи нової держави для кожного договору. Інакше будь-який уряд міг би скасувати незручні зобов’язання зміною режиму.',
            'Продовжувач і правонаступник не завжди тотожні. Членство може тривати, тоді як активи, борги й договори розподіляють додаткові угоди. Загального ярлика недостатньо; треба назвати конкретне право, практику визнання й документ, що пов’язує новий лад зі старим обов’язком.',
          ],
        ),
      },
      {
        title: L('Российское продолжение после 24 декабря 1991 года', 'Russian continuity after 24 December 1991', 'Російське продовження після 24 грудня 1991 року'),
        paragraphs: P(
          [
            '24 декабря 1991 года Россия уведомила Генерального секретаря ООН, что продолжает членство СССР и ответственность по его правам и обязательствам. 26 декабря союзные органы объявили прекращение СССР. Международное сообщество приняло российское представительство без новой процедуры вступления. Эта практика является сильным свидетельством непрерывности конкретного членства независимо от отказа России от советской идеологии.',
            'Ежегодник ООН по разоружению и связанные официальные материалы фиксировали вопросы продолжения договорных обязательств в переходный период. Они показывают, что смена политической системы не освобождает автоматически от мер контроля вооружений. Но из продолжения членства нельзя вывести сохранение всей территории СССР, власть над бывшими республиками или автоматическое решение каждой имущественной претензии.',
          ],
          [
            'On 24 December 1991 Russia notified the UN Secretary-General that it continued USSR membership and responsibility for its rights and duties. On 26 December Union bodies declared the USSR ended. International practice accepted Russian representation without new admission. This strongly evidences continuity of that membership despite rejection of Soviet ideology.',
            'The UN Disarmament Yearbook and related materials recorded continuity of treaty duties during transition, showing that political-system change does not automatically release arms-control obligations. Membership continuity does not preserve all USSR territory, authority over former republics, or automatically settle every property claim.',
          ],
          [
            '24 грудня 1991 року Росія повідомила Генерального секретаря ООН, що продовжує членство СРСР і відповідальність за його права й обов’язки. 26 грудня союзні органи оголосили припинення СРСР. Міжнародна практика прийняла російське представництво без нового вступу. Це вагоме свідчення безперервності конкретного членства попри відмову від радянської ідеології.',
            'Щорічник ООН із роззброєння та пов’язані матеріали фіксували продовження договірних обов’язків у перехідний час, показуючи, що зміна політичної системи не звільняє від контролю озброєнь. Продовження членства не зберігає всю територію СРСР, владу над колишніми республіками й не вирішує кожну майнову претензію.',
          ],
        ),
      },
      {
        title: L('Что официальная практика доказывает', 'What official practice proves', 'Що доводить офіційна практика'),
        paragraphs: P(
          [
            'Запись ООН доказывает, что Российская Федерация заняла место СССР и приняла связанный набор ответственности. Она не утверждает, что современная Россия обязана сохранить коммунистическую систему или все внутренние советские законы. Договорное обязательство следует проверять по предмету, участникам и последующим соглашениям. Частная претензия к сбережениям или собственности нуждается в отдельной национальной и договорной норме.',
            'Отсутствие возражений против продолжения членства имеет большой вес, но не превращает понятие государства-продолжателя в универсальный ответ. Например, распределение активов и долгов могло регулироваться дополнительными соглашениями между бывшими республиками. Поэтому иллюстративный пример не должен выдаваться за уже решённое дело. Общий принцип задаёт направление, а конкретная обязанность требует собственной цепочки источников.',
          ],
          [
            'The UN record proves the Russian Federation occupied the USSR seat and accepted related responsibility. It does not require preservation of communism or all Soviet domestic law. A treaty duty requires its subject, parties, and later agreements. A private savings or property claim needs separate domestic and treaty law.',
            'Absence of objection to membership continuity carries great weight but does not make “continuing state” a universal answer. Assets and debts, for example, could be governed by additional agreements among former republics. An illustration cannot be presented as an adjudicated claim. The general principle points; the particular duty needs its own sources.',
          ],
          [
            'Запис ООН доводить, що Російська Федерація посіла місце СРСР і прийняла пов’язану відповідальність. Він не вимагає зберігати комунізм або всі радянські внутрішні закони. Договірний обов’язок перевіряють за предметом, сторонами й наступними угодами. Приватна претензія щодо заощаджень чи майна потребує окремого внутрішнього та договірного права.',
            'Відсутність заперечень проти продовження членства має значну вагу, але не робить поняття держави-продовжувача універсальною відповіддю. Активи й борги могли регулюватися додатковими угодами колишніх республік. Ілюстрація не є вже вирішеною справою. Загальний принцип дає напрям, а конкретний обов’язок потребує власних джерел.',
          ],
        ),
      },
      {
        title: L('Разрыв с СССР или полная тождественность', 'A break with the USSR or complete identity', 'Розрив із СРСР чи повна тотожність'),
        paragraphs: P(
          [
            'Одна трактовка считает отказ от советского строя полным рождением нового государства без прежних обязанностей. Другая считает продолжение в ООН доказательством тождества во всех политических и правовых вопросах. Первая создаёт опасную возможность отказаться от договоров; вторая стирает реальный распад, новые государства и предметные соглашения. Практика занимает более точную промежуточную конструкцию.',
            'Можно заключить, что правопродолжение совместимо с глубокой сменой идеологии и удерживает конкретные международные обязательства. Нельзя без отдельного документа перенести этот вывод на частные долги, внутренние права или территориальные притязания. Принцип защищает стабильность отношений, а не реставрацию прежнего режима. Он одинаково препятствует отказу России от советских обязательств и использованию советского прошлого против суверенитета соседей.',
          ],
          [
            'One reading treats rejection of Soviet order as birth of a new state without old duties. Another treats UN continuity as total identity in every political and legal matter. The first permits dangerous treaty escape; the second erases dissolution, new states, and subject-specific agreements. Practice supports a more precise middle construction.',
            'State continuity can coexist with ideological transformation and preserve particular international duties. Without a separate instrument this does not transfer to private debts, domestic rights, or territorial claims. The principle protects relational stability, not restoration of a regime. It blocks both Russian rejection of Soviet duties and use of Soviet history against neighbours’ sovereignty.',
          ],
          [
            'Одне тлумачення вважає відмову від радянського ладу народженням нової держави без старих обов’язків. Інше робить продовження в ООН повною тотожністю в кожному політичному й правовому питанні. Перше дозволяє небезпечну втечу від договорів; друге стирає розпад, нові держави й предметні угоди. Практика підтримує точнішу проміжну конструкцію.',
            'Правопродовження сумісне з глибокою зміною ідеології й зберігає конкретні міжнародні обов’язки. Без окремого документа це не переноситься на приватні борги, внутрішні права чи територіальні претензії. Принцип захищає стабільність відносин, а не реставрацію режиму. Він перешкоджає і відмові Росії від радянських обов’язків, і використанню радянського минулого проти суверенітету сусідів.',
          ],
        ),
      },
    ],
  },

  'ideological-examples-and-social-prevalence': {
    lead: L(
      'Один автор, памятная доска, цитата политика или решение о реабилитации не доказывают, что целое общество придерживается соответствующей идеологии. Для такого вывода нужны распространённость взглядов, институциональное закрепление, влияние на государственную политику и устойчивые последствия. Этот стандарт одинаково относится к попыткам описать Россию через Ивана Ильина или Украину через Степана Бандеру и Романа Шухевича. Отдельный символ может быть политически важным и конфликтным, но переход от примера к характеристике миллионов людей требует независимых измеримых данных.',
      'One author, memorial plaque, politician’s quotation, or rehabilitation decision does not prove that an entire society holds the associated ideology. Such a conclusion requires prevalence, institutional embedding, influence on state policy, and durable consequences. The same standard applies when Russia is described through Ivan Ilyin or Ukraine through Stepan Bandera and Roman Shukhevych. A symbol may be politically important and contested, but moving from an example to millions of people requires independent measurable evidence.',
      'Один автор, пам’ятна дошка, цитата політика чи рішення про реабілітацію не доводять, що ціле суспільство поділяє відповідну ідеологію. Такий висновок потребує поширеності поглядів, інституційного закріплення, впливу на державну політику й сталих наслідків. Однаковий стандарт діє для опису Росії через Івана Ільїна або України через Степана Бандеру й Романа Шухевича. Символ може бути політично важливим і спірним, але перехід від прикладу до мільйонів людей потребує незалежних вимірюваних даних.',
    ),
    sections: [
      {
        title: L('От примера к распространённости', 'From an example to prevalence', 'Від прикладу до поширеності'),
        paragraphs: P(
          [
            'Сначала нужно определить набор идей, который называется идеологией, и критерии принадлежности к нему. Затем измеряются массовая поддержка, представленность в организациях, образовательных программах, законах, партийных платформах и практике власти. Один текст подтверждает существование идей, а официальная церемония — их символическую доступность. Ни то ни другое само по себе не показывает частоту принятия или реальное влияние.',
            'Выбор только самых ярких примеров создаёт систематическую ошибку. В большой стране всегда можно найти радикальную книгу, спорный памятник или высказывание чиновника. Для обобщения нужны сопоставимые выборки и одинаковый порог для обеих стран. Если российское общество оценивается по массовой поддержке и институтам, украинское нельзя оценивать по одному символу, и наоборот.',
          ],
          [
            'First define the ideas called an ideology and criteria for adherence. Then measure mass support, representation in organisations, education, law, party platforms, and government practice. One text proves ideas existed; a ceremony shows symbolic availability. Neither alone shows adoption frequency or actual influence.',
            'Selecting only vivid examples creates systematic error. Every large country contains a radical book, contested monument, or official remark. Generalisation requires comparable samples and the same threshold for both countries. If Russian society is judged through prevalence and institutions, Ukraine cannot be judged by one symbol, and vice versa.',
          ],
          [
            'Спершу треба визначити набір ідей, названий ідеологією, і критерії належності. Далі вимірюють масову підтримку, представленість в організаціях, освіті, законах, партійних програмах і практиці влади. Один текст доводить існування ідей, а офіційна церемонія — їх символічну доступність. Жодне саме не показує частоту прийняття чи реальний вплив.',
            'Вибір лише найяскравіших прикладів створює системну помилку. У великій країні завжди знайдеться радикальна книга, спірний пам’ятник або слова чиновника. Узагальнення потребує порівнянних вибірок і однакового порога для обох країн. Якщо Росію оцінюють за поширеністю та інституціями, Україну не можна оцінювати за одним символом, і навпаки.',
          ],
        ),
      },
      {
        title: L('Язык, память и война как контекст', 'Language, memory, and war as context', 'Мова, пам’ять і війна як контекст'),
        paragraphs: P(
          [
            'Закон Украины о государственном языке 25 апреля 2019 года показывает институциональную политику идентичности, но не доказывает автоматически радикальную идеологию всего общества. Его предмет, исключения и практика применения требуют отдельного чтения. Спор о языке и исторической памяти может усиливать отчуждение и использоваться в мобилизации, оставаясь отличным от массового одобрения конкретной исторической доктрины.',
            'После полномасштабного вторжения 24 февраля 2022 года символическая политика обеих сторон стала теснее связана с военной мобилизацией. Это меняет публичную видимость исторических фигур и лозунгов, но усложняет измерение свободных предпочтений. Поведение в условиях войны не должно механически переноситься на довоенное общество, как и отдельные довоенные примеры не должны объявляться единственной причиной конфликта.',
          ],
          [
            'Ukraine’s state-language law of 25 April 2019 shows institutional identity policy but does not automatically prove a radical ideology across society. Its subject, exceptions, and implementation require separate reading. Language and memory disputes can deepen alienation and support mobilisation while remaining distinct from mass endorsement of a particular doctrine.',
            'After the full-scale invasion of 24 February 2022, symbolic policy on both sides became more closely tied to mobilisation. This changes visibility of historical figures and slogans while making free preferences harder to measure. Wartime conduct should not be projected mechanically onto pre-war society, nor isolated pre-war examples made the conflict’s sole cause.',
          ],
          [
            'Закон України про державну мову 25 квітня 2019 року показує інституційну політику ідентичності, але не доводить автоматично радикальну ідеологію всього суспільства. Його предмет, винятки та практику треба читати окремо. Спір про мову й пам’ять може посилювати відчуження та мобілізацію, лишаючись відмінним від масового схвалення конкретної доктрини.',
            'Після повномасштабного вторгнення 24 лютого 2022 року символічна політика обох сторін тісніше пов’язалася з воєнною мобілізацією. Це змінює видимість історичних постатей і гасел, але ускладнює вимірювання вільних уподобань. Воєнну поведінку не слід механічно переносити на довоєнне суспільство, як і окремі довоєнні приклади — оголошувати єдиною причиною конфлікту.',
          ],
        ),
      },
      {
        title: L('Какие доказательства нужны для сильного вывода', 'Evidence required for a strong conclusion', 'Які докази потрібні для сильного висновку'),
        paragraphs: P(
          [
            'Источниковедческий разбор конкретной фигуры должен отличать её собственные тексты, поздние интерпретации и выборочные цитаты. Ильин, Шульгин, Бандера и Шухевич принадлежат к разным историческим контекстам; объединение их в одну шкалу без определения критерия мало что измеряет. Цитата исследователя также должна быть обозначена как цитата, а не приписана автору обсуждаемой позиции.',
            'Для общественного уровня нужны репрезентативные опросы, членство в организациях, электоральные результаты, содержание политики, бюджетные решения и повторяющаяся практика. Каждый показатель имеет ограничения: страх и война искажают ответы, партия может менять программу, а закон не всегда исполняется. Сильный вывод должен выдерживать несколько независимых показателей, а не зависеть от одного наиболее удобного.',
          ],
          [
            'Source analysis of a figure distinguishes original texts, later interpretations, and selective quotations. Ilyin, Shulgin, Bandera, and Shukhevych belong to different contexts; placing them on one scale without a criterion measures little. A scholar’s quotation must remain attributed rather than assigned to the position under review.',
            'Societal analysis needs representative surveys, organisational membership, electoral results, policy content, budgets, and repeated practice. Each has limits: fear and war distort answers, parties change programmes, and law may not be implemented. A strong conclusion should survive several independent indicators rather than depend on the most convenient one.',
          ],
          [
            'Джерелознавчий розбір постаті має відрізняти її власні тексти, пізніші тлумачення й вибіркові цитати. Ільїн, Шульгін, Бандера та Шухевич належать до різних контекстів; одна шкала без критерію мало що вимірює. Цитату дослідника треба лишати атрибутованою, а не приписувати позиції, яку розглядають.',
            'Для суспільного рівня потрібні репрезентативні опитування, членство в організаціях, виборчі результати, політика, бюджети й повторювана практика. Кожний показник має межі: страх і війна спотворюють відповіді, партії змінюють програми, закон не завжди виконується. Сильний висновок має витримувати кілька незалежних показників, а не залежати від одного зручного.',
          ],
        ),
      },
      {
        title: L('Символ как факт и общество как вывод', 'A symbol as fact and society as conclusion', 'Символ як факт і суспільство як висновок'),
        paragraphs: P(
          [
            'Одна трактовка считает официальное почтение спорной фигуры достаточным доказательством государственной идеологии. Другая объявляет символы незначительными и отказывается обсуждать их политический эффект. Первая слишком быстро обобщает, вторая упускает, что власть сама выбирает пантеон и посылает сигнал. Верный масштаб вывода находится между: факт символической поддержки значим, распространённость идеологии ещё не доказана.',
            'Можно установить существование конкретного текста, памятного решения или государственной политики и обсуждать их последствия. Нельзя без измерений описать через них всё население, назначить одинаковую мотивацию сторонникам или вывести законность войны. Равный доказательный стандарт особенно важен в конфликте, где каждая сторона ищет крайний пример у другой и называет собственный исключением.',
          ],
          [
            'One reading treats official honour for a contested figure as sufficient proof of state ideology. Another dismisses symbols and their political effects. The first overgeneralises; the second misses that government selects a pantheon and sends signals. The correct scale lies between: symbolic support is significant, societal prevalence remains unproved.',
            'A particular text, commemoration, or policy and its effects can be established. Without measurement they cannot describe an entire population, assign one motive to supporters, or establish war legality. An equal evidentiary standard matters especially when each side selects the other’s extreme example and calls its own exceptional.',
          ],
          [
            'Одне тлумачення вважає офіційне вшанування спірної постаті достатнім доказом державної ідеології. Інше відкидає символи та їх політичний ефект. Перше надто узагальнює; друге не бачить, що влада обирає пантеон і посилає сигнали. Належний масштаб посередині: символічна підтримка значуща, суспільна поширеність ще не доведена.',
            'Можна встановити конкретний текст, пам’ятне рішення чи політику та обговорювати наслідки. Без вимірювань вони не описують усе населення, не дають однакового мотиву прихильникам і не доводять законність війни. Рівний доказовий стандарт особливо важливий, коли кожна сторона обирає крайній приклад іншої й називає власний винятком.',
          ],
        ),
      },
    ],
  },

  'state-capacity-before-symbolic-power': {
    lead: L(
      'Армия и самостоятельная внешняя политика опираются не только на оружие и волю руководства. Их долговременная основа — экономика, налоговая система, образование, здравоохранение, инфраструктура, демография и работа институтов. Символическая политика может укреплять общую идентичность и готовность к защите, но не заменяет материальный и административный фундамент. Украинский опыт после 2019 года и особенно после вторжения 24 февраля 2022 года показывает обе стороны: символы помогают мобилизации, тогда как продолжительность сопротивления определяется также производством, финансами, человеческим капиталом и внешней поддержкой.',
      'An army and independent foreign policy rest on more than weapons and leadership will. Their durable foundation is economy, taxation, education, health, infrastructure, demography, and institutions. Symbolic policy may strengthen shared identity and willingness to defend, but cannot replace material and administrative foundations. Ukraine after 2019, especially after the invasion of 24 February 2022, shows both: symbols aid mobilisation, while sustained resistance also depends on production, finance, human capital, and external support.',
      'Армія й самостійна зовнішня політика спираються не лише на зброю та волю керівництва. Їхня тривала основа — економіка, податки, освіта, охорона здоров’я, інфраструктура, демографія й робота інституцій. Символічна політика може зміцнювати спільну ідентичність і готовність захищатися, але не замінює матеріального та адміністративного фундаменту. Український досвід після 2019 року, особливо після вторгнення 24 лютого 2022 року, показує обидва боки: символи допомагають мобілізації, а тривалість опору залежить також від виробництва, фінансів, людського капіталу й зовнішньої підтримки.',
    ),
    sections: [
      {
        title: L('Государственная способность как цепочка', 'State capacity as a chain', 'Державна спроможність як ланцюг'),
        paragraphs: P(
          [
            'Военная способность начинается с ресурсов, но не заканчивается ими. Налоги должны собираться, решения — превращаться в закупки и подготовку, инфраструктура — работать под нагрузкой, а население — доверять государству достаточно, чтобы выполнять обязанности. Слабость одного звена повышает стоимость остальных. Большой бюджет без управления может дать меньше результата, чем ограниченный ресурс внутри работающей системы.',
            'Суверенная политика также требует способности выдерживать последствия выбора. Формальное право выбрать союз ничего не говорит о готовности финансировать оборону, защищать энергетику, обучать специалистов и поддерживать общество. Внешняя помощь может резко расширить возможности, но создаёт зависимость от решений партнёров. Поэтому устойчивость измеряется и внутренней базой, и качеством управления связями с союзниками.',
          ],
          [
            'Military capacity begins with resources but does not end there. Taxes must be collected, decisions converted into procurement and training, infrastructure kept under stress, and citizens sufficiently trust institutions to perform duties. Weakness in one link raises costs elsewhere. A large budget without administration may produce less than limited resources in a working system.',
            'Sovereign policy also requires capacity to bear consequences. A formal right to choose an alliance says nothing about funding defence, protecting energy, training personnel, and supporting society. External aid can expand capacity while creating dependence on partner decisions. Resilience therefore includes both a domestic base and management of alliances.',
          ],
          [
            'Військова спроможність починається з ресурсів, але не закінчується ними. Податки треба збирати, рішення — перетворювати на закупівлі й підготовку, інфраструктуру — підтримувати під навантаженням, а громадяни мають достатньо довіряти інституціям. Слабкість однієї ланки підвищує вартість інших. Великий бюджет без управління може дати менше, ніж обмежений ресурс у працюючій системі.',
            'Суверенна політика також потребує здатності витримати наслідки вибору. Формальне право обрати союз нічого не каже про фінансування оборони, захист енергетики, підготовку фахівців і підтримку суспільства. Зовнішня допомога розширює можливості, але створює залежність від партнерів. Стійкість включає внутрішню базу й управління союзними зв’язками.',
          ],
        ),
      },
      {
        title: L('Идентичность 2019 года и испытание 2022 года', 'Identity in 2019 and the test of 2022', 'Ідентичність 2019 року й випробування 2022 року'),
        paragraphs: P(
          [
            'Закон о государственном языке 25 апреля 2019 года является примером символической и институциональной политики нации. Он регулирует публичную сферу и может влиять на доступ, идентичность и политическую мобилизацию. Сам по себе такой закон не показывает состояние дорог, оборонного производства, медицины или образования и не доказывает, что ресурсы были прямо отняты у этих направлений.',
            'Полномасштабное вторжение 24 февраля 2022 года стало практическим испытанием способности государства. Продолжение работы органов, мобилизация, восстановление инфраструктуры и использование внешней помощи демонстрируют элементы устойчивости, тогда как эмиграция, разрушения и нагрузка на бюджет показывают пределы. Вывод требует показателей во времени, а не общей характеристики одного из государств как «работающего» или «неработающего».',
          ],
          [
            'The state-language law of 25 April 2019 is an example of symbolic and institutional nation policy. It regulates the public sphere and can affect access, identity, and mobilisation. By itself it reveals nothing about roads, defence production, health, or education and does not prove direct diversion of resources from them.',
            'The full-scale invasion of 24 February 2022 tested state capacity in practice. Institutional continuity, mobilisation, infrastructure repair, and use of aid show resilience; emigration, destruction, and fiscal strain show limits. Conclusions require time-series indicators rather than calling one state simply “working” or “failed.”',
          ],
          [
            'Закон про державну мову 25 квітня 2019 року є прикладом символічної та інституційної політики нації. Він регулює публічну сферу й може впливати на доступ, ідентичність та мобілізацію. Сам по собі закон не показує стан доріг, оборонного виробництва, медицини чи освіти й не доводить пряме вилучення ресурсів із цих напрямів.',
            'Повномасштабне вторгнення 24 лютого 2022 року практично випробувало державну спроможність. Безперервність органів, мобілізація, відновлення інфраструктури й використання допомоги показують стійкість; еміграція, руйнування та бюджетне навантаження — межі. Висновки потребують показників у часі, а не загальної назви держави «працюючою» чи «непрацюючою».',
          ],
        ),
      },
      {
        title: L('Какими данными проверять тезис', 'Data needed to test the claim', 'Якими даними перевіряти тезу'),
        paragraphs: P(
          [
            'Сравнение требует налоговых доходов, доли и эффективности оборонных расходов, промышленной мощности, состояния человеческого капитала, инфраструктурных потерь, качества услуг и способности исполнять решения. Один показатель не является достаточным: высокий военный бюджет может зависеть от внешнего финансирования, а хороший образовательный уровень — не превращаться быстро в производство. Важны причинные связи и динамика.',
            'Утверждение, что символическая политика вытеснила строительство государства, требует бюджетного или институционального доказательства конкретного выбора. Сосуществование возможно: язык и память могут поддерживать легитимность, а инвестиции — материальную базу. Риторическая формула о превращении армии в частную компанию не устанавливает организационный факт. Нужно описать командование, финансирование, подотчётность и правовой статус, если делается такой вывод.',
          ],
          [
            'Comparison requires tax revenue, defence-spending efficiency, industrial capacity, human capital, infrastructure loss, service quality, and implementation capacity. No single indicator suffices: a high military budget may depend on external finance, while education may not convert quickly into production. Causal links and change over time matter.',
            'A claim that symbolic policy displaced state-building needs budgetary or institutional evidence of a concrete trade-off. Coexistence is possible: language and memory may support legitimacy while investment builds material capacity. Calling an army a private company is rhetoric unless command, finance, accountability, and legal status support it.',
          ],
          [
            'Порівняння потребує податкових доходів, ефективності оборонних витрат, промислової потужності, людського капіталу, втрат інфраструктури, якості послуг і виконання рішень. Одного показника недостатньо: великий військовий бюджет може залежати від зовнішніх коштів, а освіта — не швидко перетворюватися на виробництво. Важливі причинні зв’язки й динаміка.',
            'Твердження, що символічна політика витіснила державне будівництво, потребує бюджетного чи інституційного доказу конкретного вибору. Співіснування можливе: мова й пам’ять підтримують легітимність, інвестиції — матеріальну базу. Назва армії приватною компанією є риторикою без даних про командування, фінансування, підзвітність і правовий статус.',
          ],
        ),
      },
      {
        title: L('Материальная база или мобилизующий символ', 'Material base or mobilising symbol', 'Матеріальна база чи мобілізаційний символ'),
        paragraphs: P(
          [
            'Одна трактовка противопоставляет символы и развитие как взаимоисключающие расходы. Другая считает сильную идентичность достаточным источником устойчивости. Первая не замечает роль доверия и мотивации, вторая недооценивает физические ограничения. Война показывает, что общество без общей цели может плохо использовать ресурсы, а общество с высокой мотивацией всё равно нуждается в боеприпасах, энергии и управлении.',
            'Можно заключить, что долгосрочная военная и политическая самостоятельность требует работающей экономики и институтов, а символическая политика не заменяет их. Нельзя без сравнительных данных ранжировать целые государства, объявить любой культурный проект вредным или отрицать мобилизационный эффект идентичности. Практический критерий — способна ли политика одновременно поддерживать легитимность, воспроизводить ресурсы и исправлять институциональные сбои.',
          ],
          [
            'One reading opposes symbols and development as mutually exclusive spending. Another treats identity as sufficient resilience. The first misses trust and motivation; the second underestimates physical limits. War shows that society without common purpose may waste resources, while highly motivated society still needs ammunition, energy, and administration.',
            'Long-term military and political independence requires a working economy and institutions; symbols cannot replace them. Without comparative data one cannot rank whole states, call every cultural project harmful, or deny identity’s mobilisation effect. The practical test is whether policy supports legitimacy, reproduces resources, and corrects institutional failure together.',
          ],
          [
            'Одне тлумачення протиставляє символи й розвиток як взаємовиключні витрати. Інше вважає сильну ідентичність достатньою стійкістю. Перше не бачить довіри й мотивації; друге недооцінює фізичні межі. Війна показує, що суспільство без спільної мети може погано використати ресурси, а високо мотивоване однаково потребує боєприпасів, енергії та управління.',
            'Тривала військова й політична самостійність потребує працюючої економіки та інституцій; символи їх не замінюють. Без порівняльних даних не можна ранжувати цілі держави, називати кожний культурний проєкт шкідливим або заперечувати мобілізаційний ефект ідентичності. Практичний критерій — одночасно підтримувати легітимність, відтворювати ресурси й виправляти збої.',
          ],
        ),
      },
    ],
  },

  'electoral-mandate-vs-moral-judgment': {
    lead: L(
      'Плохая репутация, моральное осуждение или даже серьёзное обвинение сами по себе не прекращают выборный мандат. Виктор Янукович был избран президентом Украины в 2010 году, и итоговый доклад БДИПЧ ОБСЕ оценил второй тур как соответствовавший большинству международных обязательств. Это не создавало иммунитета от отставки, импичмента, уголовной ответственности или иных конституционных оснований прекращения полномочий. Спор 22 февраля 2014 года следует вести о конкретной процедуре и фактическом прекращении функций, а не о том, заслуживал ли политик сохранения должности по моральной оценке.',
      'Bad reputation, moral condemnation, or even serious accusation does not by itself end an electoral mandate. Viktor Yanukovych was elected president in 2010, and the OSCE/ODIHR final report assessed the second round as meeting most international commitments. That created no immunity from resignation, impeachment, criminal responsibility, or other constitutional grounds for termination. The dispute of 22 February 2014 concerns procedure and effective cessation of duties, not whether a politician morally deserved to remain.',
      'Погана репутація, моральний осуд або навіть серйозне обвинувачення самі собою не припиняють виборчого мандата. Віктора Януковича обрали президентом 2010 року, а підсумковий звіт БДІПЛ ОБСЄ оцінив другий тур як такий, що відповідав більшості міжнародних зобов’язань. Це не створювало імунітету від відставки, імпічменту, кримінальної відповідальності чи інших конституційних підстав припинення. Спір 22 лютого 2014 року стосується процедури й фактичного припинення функцій, а не моральної гідності політика залишатися.',
    ),
    sections: [
      {
        title: L('Что даёт и чего не даёт победа на выборах', 'What electoral victory gives and does not give', 'Що дає і чого не дає перемога на виборах'),
        paragraphs: P(
          [
            'Выборы предоставляют полномочие на установленный срок и создают исходную демократическую легитимность. Они не подтверждают истинность всех сведений о кандидате, безошибочность администрации или отсутствие прошлых правовых проблем. Регистрация избирательной комиссией означает допуск по действовавшей процедуре, а не всеобъемлющее судебное заключение о биографии. Мандат ограничен Конституцией с первого дня.',
            'Досрочное прекращение требует отдельного события и формы: отставки, невозможности выполнять полномочия, импичмента или другого предусмотренного основания. Политическое возмущение может запустить ответственность и протест, но не заменяет решение компетентного органа. В чрезвычайном кризисе возможен разрыв между буквальной процедурой и фактической необходимостью; этот разрыв нужно назвать, а не скрывать моральным приговором.',
          ],
          [
            'Election grants authority for a term and initial democratic legitimacy. It does not prove every statement about a candidate, flawless administration, or absence of prior legal issues. Election-commission registration means admission under operative procedure, not a comprehensive judicial biography. The mandate is constitutionally limited from day one.',
            'Early termination requires a separate event and form: resignation, inability, impeachment, or another recognised ground. Political anger may trigger accountability and protest but cannot substitute for competent decision. Crisis may create a gap between literal procedure and practical necessity; the gap should be named rather than hidden by moral judgment.',
          ],
          [
            'Вибори дають повноваження на строк і початкову демократичну легітимність. Вони не доводять істинність усіх відомостей про кандидата, безпомилковість адміністрації чи відсутність минулих правових проблем. Реєстрація комісією означає допуск за чинною процедурою, а не всеохопний судовий висновок про біографію. Мандат обмежений Конституцією від першого дня.',
            'Дострокове припинення потребує окремої події та форми: відставки, неможливості виконувати повноваження, імпічменту чи іншої підстави. Політичне обурення може запустити відповідальність і протест, але не замінює рішення компетентного органу. Криза може створити розрив між текстом і практичною необхідністю; його треба назвати, а не приховати моральним вироком.',
          ],
        ),
      },
      {
        title: L('Мандат 2010 года и решение 22 февраля', 'The 2010 mandate and the decision of 22 February', 'Мандат 2010 року й рішення 22 лютого'),
        paragraphs: P(
          [
            'Доклад БДИПЧ о выборах 2010 года подтверждает качество именно того избирательного процесса в пределах наблюдения. Он важен против утверждения, будто президент изначально не имел выборного основания. Он не оценивает события Майдана, соглашение 21 февраля 2014 года, отъезд президента или последующее парламентское решение. Перенос оценки через четыре года выходит за предмет документа.',
            'Постановление № 757-VII заявило о неконституционном самоустранении и назначило досрочные выборы. Конституционные статьи 108–112 позволяют сравнить использованную формулу с перечисленными основаниями. Последующие досрочные президентские выборы создали новый прямой общенациональный мандат для избранного президента, но не делают февральскую процедуру задним числом безупречной. Происхождение и прекращение одного президентского мандата и выборный мандат его преемника являются отдельными этапами.',
          ],
          [
            'The ODIHR report on 2010 confirms that electoral process within its observation scope and rebuts the claim that the presidency lacked an electoral basis from the outset. It does not assess Maidan, the 21 February 2014 agreement, the president’s departure, or parliament’s later resolution. Projecting it four years forward exceeds its subject.',
            'Resolution No. 757-VII stated unconstitutional withdrawal and called elections. Constitutional Articles 108–112 permit comparison with listed grounds. The subsequent early presidential election created a new direct nationwide mandate for the elected president without retroactively perfecting February. The origin and termination of one presidential mandate and the electoral mandate of its successor are separate stages.',
          ],
          [
            'Звіт БДІПЛ про вибори 2010 року підтверджує саме той виборчий процес у межах спостереження й спростовує твердження про відсутність початкової виборчої основи. Він не оцінює Майдан, угоду 21 лютого 2014 року, від’їзд президента чи парламентську постанову. Переносити його оцінку на чотири роки вперед означає вийти за предмет.',
            'Постанова № 757-VII заявила про неконституційне самоусунення й призначила вибори. Статті 108–112 дозволяють порівняти формулу з переліченими підставами. Наступні дострокові президентські вибори створили новий прямий загальнонаціональний мандат для обраного президента, але не зробили лютневу процедуру бездоганною заднім числом. Походження й припинення одного президентського мандата та виборчий мандат його наступника є окремими етапами.',
          ],
        ),
      },
      {
        title: L('Как читать отчёт, Конституцию и постановление', 'Reading the report, Constitution, and resolution', 'Як читати звіт, Конституцію й постанову'),
        paragraphs: P(
          [
            'Отчёт наблюдателей устанавливает методологически ограниченную оценку выборов: кампанию, голосование, подсчёт и жалобы. Конституция устанавливает юридические способы работы с мандатом. Постановление фиксирует чрезвычайное решение парламента. Эти источники не конкурируют за один ответ; они последовательно описывают получение полномочий, норму прекращения и реально выбранный политико-правовой шаг.',
            'Уголовное обвинение, подозрение или амнистия также не равны обвинительному приговору и не прекращают мандат автоматически. Если политик совершил преступление, это требует надлежащего установления и применимой процедуры ответственности. Если государство не может завершить стандартную процедуру из-за кризиса, фактическое решение остаётся предметом оценки. Нельзя заменить этот трудный анализ одним эпитетом личности.',
          ],
          [
            'An observer report gives a methodologically limited election assessment: campaign, voting, counting, and complaints. The Constitution supplies legal treatment of a mandate. The resolution records parliament’s emergency step. They do not compete for one answer; they sequentially describe acquisition, termination law, and the chosen legal-political act.',
            'Criminal accusation, suspicion, or amnesty is not conviction and does not automatically terminate office. Crime requires adjudication and an applicable accountability process. If crisis prevents ordinary completion, the practical decision remains open to assessment. A personal epithet cannot replace that work.',
          ],
          [
            'Звіт спостерігачів дає методологічно обмежену оцінку виборів: кампанії, голосування, підрахунку й скарг. Конституція встановлює правове поводження з мандатом. Постанова фіксує надзвичайний парламентський крок. Вони не конкурують за одну відповідь, а послідовно описують набуття повноважень, норму припинення й обране рішення.',
            'Кримінальне обвинувачення, підозра чи амністія також не є вироком і не припиняють посаду автоматично. Злочин потребує належного встановлення та процедури відповідальності. Якщо криза заважає завершити звичайний процес, практичне рішення лишається предметом оцінки. Особистий епітет не замінює цього аналізу.',
          ],
        ),
      },
      {
        title: L('Иммунитет победителя или власть улицы', 'Winner’s immunity or rule by the street', 'Імунітет переможця чи влада вулиці'),
        paragraphs: P(
          [
            'Одна позиция считает избранного президента несменяемым до следующего голосования вне зависимости от поведения. Другая считает массовый протест достаточным для немедленной отмены мандата. Первая превращает выборы в иммунитет, вторая — право в баланс физической силы. Демократическая система должна сохранять и устойчивость результата, и работающие способы досрочной ответственности.',
            'Документы позволяют установить действительность исходного мандата и реальный процедурный спор 2014 года. Они не позволяют считать нравственную оценку юридическим основанием, объявить выборы абсолютной защитой или стереть последующую институциональную легитимацию. Наиболее точный вывод разделяет три уровня: формальный президентский мандат существовал, порядок его прекращения был спорным, а избранный в мае 2014 года президент получил отдельный прямой мандат.',
          ],
          [
            'One position makes an elected president irremovable until the next vote regardless of conduct. Another treats mass protest as sufficient to cancel a mandate immediately. The first makes election immunity; the second makes law a balance of physical power. Democracy needs both stable results and workable early accountability.',
            'The documents establish the initial mandate and a real 2014 procedural dispute. They do not turn moral judgment into a legal ground, election into absolute protection, or erase later institutional legitimation. The precise result separates three levels: a formal presidential mandate existed, its termination was contested, and the president elected in May 2014 gained a separate direct mandate.',
          ],
          [
            'Одна позиція робить обраного президента незмінним до наступного голосування незалежно від поведінки. Інша вважає масовий протест достатнім для негайного скасування мандата. Перша перетворює вибори на імунітет, друга — право на баланс фізичної сили. Демократія потребує і сталості результату, і дієвих способів дострокової відповідальності.',
            'Документи встановлюють початковий мандат і реальний процедурний спір 2014 року. Вони не роблять моральну оцінку правовою підставою, вибори абсолютним захистом і не стирають наступну легітимацію. Точний висновок розділяє три рівні: формальний президентський мандат існував, його припинення було спірним, а обраний у травні 2014 року президент отримав окремий прямий мандат.',
          ],
        ),
      },
    ],
  },

  'armed-escalation-cannot-be-single-cause': {
    lead: L(
      'Вооружённую эскалацию в Донбассе весной 2014 года нельзя объяснить одной фигурой, одним указом или одной группой. Захваты зданий, появление вооружённых отрядов, участие российских граждан, местная мобилизация и решение украинской власти начать Антитеррористическую операцию образовали взаимодействующую последовательность. Роль Игоря Гиркина как командира в Славянске существенна, но уменьшение или увеличение его роли не устанавливает автоматически законность других действий. Многоакторность требует раздельно исследовать инициативу, ресурсы, массовую поддержку, государственную реакцию и внешнее участие.',
      'Armed escalation in Donbas in spring 2014 cannot be explained through one figure, decree, or group. Seizures of buildings, armed detachments, Russian citizens’ participation, local mobilisation, and Ukraine’s decision to begin the Anti-Terrorist Operation formed an interacting sequence. Igor Girkin’s role as a commander in Sloviansk matters, but increasing or reducing it does not determine legality of others’ acts. Multi-actor analysis separately examines initiative, resources, support, state response, and external participation.',
      'Збройну ескалацію на Донбасі навесні 2014 року не можна пояснити однією постаттю, указом чи групою. Захоплення будівель, поява озброєних загонів, участь російських громадян, місцева мобілізація й рішення української влади почати Антитерористичну операцію утворили взаємодіючу послідовність. Роль Ігоря Гіркіна як командира у Слов’янську суттєва, але її збільшення чи зменшення не визначає законність інших дій. Багатоакторний аналіз окремо досліджує ініціативу, ресурси, підтримку, державну відповідь і зовнішню участь.',
    ),
    sections: [
      {
        title: L('Причина, спусковой механизм и условие', 'Cause, trigger, and condition', 'Причина, пусковий механізм та умова'),
        paragraphs: P(
          [
            'Спусковой механизм запускает новый этап, но может действовать только при наличии условий. Прибытие вооружённой группы способно изменить уровень организации и насилия; местное недовольство может обеспечить поддержку или пополнение; государственная операция меняет стимулы и масштаб сопротивления. Эти элементы не равнозначны, но каждый может быть необходим для объяснения фактической траектории.',
            'Контрфактический вопрос «что было бы без одного участника» полезен, но не наблюдаем напрямую. Уверенное утверждение требует сравнения регионов, времени и доступных альтернатив. Число людей в первоначальной группе также нуждается в независимом источнике. Даже точное число не показывает само по себе, сколько ресурсов, командования и местной поддержки группа получила позднее.',
          ],
          [
            'A trigger starts a new stage but may require enabling conditions. An armed group’s arrival can change organisation and violence; local grievance may supply support or recruits; state operation alters incentives and scale. These elements are not equal, but each may be necessary to explain the trajectory.',
            'The counterfactual “without one participant” is useful but unobservable directly and requires regional, temporal, and alternative comparison. Initial group size also needs independent sourcing. Even an exact number does not show later resources, command, and local support.',
          ],
          [
            'Пусковий механізм починає новий етап, але може діяти лише за наявності умов. Прибуття озброєної групи здатне змінити організацію й насильство; місцеве невдоволення — дати підтримку чи поповнення; державна операція — змінити стимули та масштаб опору. Елементи не рівнозначні, але кожний може бути потрібним для пояснення траєкторії.',
            'Контрфактичне питання «що було б без одного учасника» корисне, але не спостерігається прямо й потребує порівняння регіонів, часу та альтернатив. Чисельність початкової групи також потребує незалежного джерела. Навіть точне число не показує пізніші ресурси, командування й місцеву підтримку.',
          ],
        ),
      },
      {
        title: L('Апрель 2014 года по датам', 'April 2014 by date', 'Квітень 2014 року за датами'),
        paragraphs: P(
          [
            'Доклады ООН и ежедневные сообщения Специальной мониторинговой миссии ОБСЕ фиксировали захваты государственных зданий, вооружённых участников, напряжённость и государственную реакцию. Решение СНБО датировано 13 апреля, указ № 405/2014 — 14 апреля. Эта документальная последовательность важнее расплывчатой фразы о начале операции в иной день и позволяет сопоставлять решения с уже происходившими захватами.',
            'Начало АТО не было единственным первым применением силы в конфликте и не являлось нейтральным административным актом. Оно расширило участие государственного аппарата и повлияло на дальнейшую мобилизацию. Одновременно наличие вооружённых захватов до указа не делает каждое последующее средство законным. Для каждого эпизода нужны компетенция, цель, необходимость, обращение с гражданскими и фактическое применение.',
          ],
          [
            'UN reports and OSCE Special Monitoring Mission daily reporting recorded seizures of public buildings, armed participants, tension, and state response. The security-council decision is dated 13 April and Decree No. 405/2014 14 April. This sequence is stronger than vague claims of another start date and permits comparison with seizures already underway.',
            'The ATO was neither the conflict’s sole first force nor a neutral administrative act. It expanded state involvement and influenced mobilisation. Armed seizures before the decree still do not make every later method lawful. Each incident needs authority, objective, necessity, civilian treatment, and facts.',
          ],
          [
            'Доповіді ООН і щоденні повідомлення Спеціальної моніторингової місії ОБСЄ фіксували захоплення державних будівель, озброєних учасників, напруженість і державну реакцію. Рішення РНБО датоване 13 квітня, указ № 405/2014 — 14 квітня. Ця послідовність надійніша за розмиту фразу про інший день початку й дозволяє зіставити рішення з уже наявними захопленнями.',
            'АТО не була ані єдиним першим застосуванням сили, ані нейтральним адміністративним актом. Вона розширила державну участь і вплинула на мобілізацію. Озброєні захоплення до указу однаково не роблять кожний наступний засіб законним. Кожний епізод потребує повноваження, мети, необхідності, ставлення до цивільних і фактів.',
          ],
        ),
      },
      {
        title: L('Что доклады подтверждают и не распределяют', 'What reports confirm and do not allocate', 'Що доповіді підтверджують і не розподіляють'),
        paragraphs: P(
          [
            'Официальные международные доклады подтверждают многоакторную среду: командиров, российских граждан в вооружённых группах, местных участников, захваты и украинскую силовую операцию. Это разрушает монопричинный рассказ, но не распределяет окончательную причинную или уголовную ответственность. Наблюдатель фиксирует доступные факты в пределах мандата и даты, а не все скрытые решения и цепочки командования.',
            'Указ подтверждает официальный правовой акт, но не доказывает правильность каждого фактического утверждения власти. Доклад о правах человека показывает последствия и участников, но его методология имеет предел доступа. Несколько источников следует накладывать по времени и предмету. Совпадение данных усиливает вывод, а пробел должен оставаться пробелом, а не заполняться удобной цифрой или мотивом.',
          ],
          [
            'Official international reports confirm a multi-actor environment: commanders, Russian citizens in armed groups, local participants, seizures, and Ukrainian force. This defeats a single-cause story but does not allocate final causal or criminal responsibility. Observers record accessible facts within mandate and date, not every hidden decision and command chain.',
            'The decree confirms an official legal act but not every factual assertion by government. A human-rights report shows consequences and participants within access limits. Sources should be layered by time and subject. Convergence strengthens findings; gaps remain gaps rather than being filled with convenient numbers or motives.',
          ],
          [
            'Офіційні міжнародні доповіді підтверджують багатоакторне середовище: командирів, російських громадян у збройних групах, місцевих учасників, захоплення й українську силу. Це руйнує монопричинну історію, але не розподіляє остаточну причинну чи кримінальну відповідальність. Спостерігач фіксує доступні факти в межах мандата й дати, а не всі приховані рішення та командування.',
            'Указ підтверджує офіційний правовий акт, але не кожне фактичне твердження влади. Доповідь про права людини показує наслідки й учасників у межах доступу. Джерела треба накладати за часом і предметом. Збіг посилює висновок, а прогалина має лишатися прогалиною, а не заповнюватися зручною цифрою чи мотивом.',
          ],
        ),
      },
      {
        title: L('Один виновник или размытая ответственность', 'One culprit or diluted responsibility', 'Один винуватець чи розмита відповідальність'),
        paragraphs: P(
          [
            'Одна трактовка делает Гиркина почти единственным автором войны и уменьшает местные и государственные процессы. Другая подчёркивает множество участников так, что исчезает значение организованного внешнего вклада. Первая переоценивает персональную заменимость, вторая размывает ответственность. Многофакторное объяснение должно не уравнивать всех, а оценивать относительный вклад по ресурсам, инициативе и последствиям.',
            'Можно заключить, что масштаб конфликта возник из взаимодействия нескольких акторов и решений, а не одной фигуры. Нельзя без дополнительных данных утверждать, что без украинской операции войны точно не было бы, что местная мобилизация была полностью самостоятельной или что уменьшение роли одного командира оправдывает других. Чем сложнее причинная картина, тем важнее сохранять индивидуальную правовую оценку каждого действия.',
          ],
          [
            'One reading makes Girkin almost the sole author and diminishes local and state processes. Another stresses many actors until organised external contribution disappears. The first overstates personal indispensability; the second dilutes responsibility. Multi-factor explanation should assess relative contribution through resources, initiative, and consequences rather than equalise everyone.',
            'The conflict’s scale arose through interacting actors and decisions, not one figure. Without more data one cannot say no war would have occurred without Ukraine’s operation, local mobilisation was fully autonomous, or reducing one commander’s role excuses others. A complex causal picture makes individual legal assessment more, not less, important.',
          ],
          [
            'Одне тлумачення робить Гіркіна майже єдиним автором війни й применшує місцеві та державні процеси. Інше наголошує на багатьох учасниках так, що зникає організований зовнішній внесок. Перше переоцінює незамінність особи; друге розмиває відповідальність. Багатофакторне пояснення має оцінювати відносний внесок за ресурсами, ініціативою й наслідками, а не зрівнювати всіх.',
            'Масштаб конфлікту виник із взаємодії кількох акторів і рішень, а не однієї постаті. Без додаткових даних не можна казати, що без української операції війни точно не було б, місцева мобілізація була цілком самостійною або менша роль командира виправдовує інших. Складна причинна картина підвищує значення індивідуальної правової оцінки кожної дії.',
          ],
        ),
      },
    ],
  },

  'self-determination-needs-consistent-criteria': {
    lead: L(
      'Ссылка на самоопределение убедительна только при одинаковых критериях для политически удобных и неудобных случаев. Независимость Украины в 1991 году была решением союзной республики, подтверждённым всеукраинским референдумом; Крымское голосование 16 марта 2014 года и сепаратистские проекты Донбасса возникли внутри унитарной Украины, при вооружённом контроле и иностранном участии. Эти различия не делают волю местного населения неважной, но не позволяют считать все случаи одним юридическим шаблоном. Сравнение должно охватывать статус территории, процедуру, свободу выбора, права несогласных и применение силы.',
      'Self-determination is persuasive only under the same criteria for politically convenient and inconvenient cases. Ukraine’s 1991 independence was a Union republic decision confirmed by a nationwide referendum; the Crimean vote of 16 March 2014 and separatist projects in Donbas arose within unitary Ukraine amid armed control and foreign participation. These differences do not make local views irrelevant but prevent treating every case as one legal template. Comparison must include territorial status, procedure, freedom, dissenters’ rights, and force.',
      'Посилання на самовизначення переконливе лише за однакових критеріїв для політично зручних і незручних випадків. Незалежність України 1991 року була рішенням союзної республіки, підтвердженим всеукраїнським референдумом; кримське голосування 16 березня 2014 року та сепаратистські проєкти Донбасу виникли всередині унітарної України, за збройного контролю й іноземної участі. Відмінності не роблять місцеві погляди неважливими, але не дозволяють вважати всі випадки одним шаблоном. Порівняння охоплює статус, процедуру, свободу, права незгодних і силу.',
    ),
    sections: [
      {
        title: L('Самоопределение не равно автоматическому отделению', 'Self-determination is not automatic secession', 'Самовизначення не є автоматичним відокремленням'),
        paragraphs: P(
          [
            'Самоопределение может реализовываться через участие в государстве, автономию, культурные и языковые права, свободный выбор власти или, в особых спорных обстоятельствах, изменение статуса. Поэтому выражение политической идентичности не сразу создаёт международный титул на отделение. Нужно определить народ или сообщество, характер ущемления, доступные внутренние способы и отношение результата к территориальной целостности.',
            'Голосование приобретает доказательную силу при ясном вопросе, определённом составе участников, равной кампании, отсутствии вооружённого давления и независимом контроле. Заявленный процент без этих условий не завершает анализ. Одновременно формальная конституционная граница не освобождает государство от обязанности обеспечивать участие, безопасность и права регионального населения. Право и политическая проблема должны рассматриваться вместе, но не смешиваться.',
          ],
          [
            'Self-determination may operate through participation, autonomy, cultural and language rights, free government choice, or in exceptional contested settings, status change. Political identity does not immediately create an international title to secede. The relevant people, alleged exclusion, internal options, and relationship to territorial integrity must be identified.',
            'A vote gains evidentiary force through a clear question, defined electorate, equal campaign, absence of armed pressure, and independent scrutiny. A percentage without these conditions is incomplete. A constitutional border likewise does not release a state from participation, safety, and regional rights. Law and political grievance belong together without being conflated.',
          ],
          [
            'Самовизначення може реалізовуватися через участь у державі, автономію, культурні й мовні права, вільний вибір влади або, за особливих спірних обставин, зміну статусу. Політична ідентичність не одразу створює міжнародний титул на відокремлення. Треба визначити спільноту, характер виключення, внутрішні можливості та співвідношення результату з територіальною цілісністю.',
            'Голосування набуває доказової сили за ясного питання, визначених учасників, рівної кампанії, відсутності збройного тиску й незалежного контролю. Відсоток без цих умов неповний. Конституційний кордон так само не звільняє державу від участі, безпеки й регіональних прав. Право й політичну проблему треба розглядати разом, не змішуючи.',
          ],
        ),
      },
      {
        title: L('Украина, Крым и Донбасс: что различается', 'Ukraine, Crimea, and Donbas: the differences', 'Україна, Крим і Донбас: що відрізняється'),
        paragraphs: P(
          [
            'Декларация о суверенитете 16 июля 1990 года, Акт независимости и всеукраинский референдум относятся к статусу союзной республики в распадающемся СССР. Решение имело общереспубликанский масштаб. Крым в 2014 году был автономией внутри признанной Украины, а изменение территории украинская Конституция относила к всеукраинскому голосованию. Дополнительно условия определялись российским военным присутствием.',
            'В Донбассе вооружённые группы, захваты зданий и самопровозглашённые образования развивались к началу АТО 14 апреля 2014 года. Общего международного признания независимой государственности у них не было. Это не доказывает отсутствия местного недовольства и не делает каждое решение Киева законным. Оно показывает, почему аналогия с союзной республикой 1991 года требует дополнительных аргументов, а не простого равенства названий.',
          ],
          [
            'The sovereignty declaration of 16 July 1990, Independence Act, and nationwide referendum concern a Union republic during USSR dissolution and operated republic-wide. Crimea in 2014 was an autonomy within recognised Ukraine, whose Constitution reserved territorial change to a nationwide vote. Russian military presence additionally shaped conditions.',
            'In Donbas armed groups, seizures, and self-proclaimed entities developed by the ATO’s start on 14 April 2014. They lacked general international recognition as independent states. That proves neither absence of local grievance nor legality of every Kyiv decision. It shows why analogy with a Union republic in 1991 needs more than similar labels.',
          ],
          [
            'Декларація про суверенітет 16 липня 1990 року, Акт незалежності й всеукраїнський референдум стосуються статусу союзної республіки під час розпаду СРСР і мали загальнореспубліканський масштаб. Крим 2014 року був автономією у визнаній Україні, а Конституція відносила зміну території до всеукраїнського голосування. Умови додатково формувала російська військова присутність.',
            'На Донбасі збройні групи, захоплення й самопроголошені утворення розвивалися до початку АТО 14 квітня 2014 року. Загального міжнародного визнання незалежними державами вони не мали. Це не доводить відсутності місцевого невдоволення й не робить кожне рішення Києва законним. Аналогія із союзною республікою 1991 року потребує більше, ніж схожих назв.',
          ],
        ),
      },
      {
        title: L('Как документы задают рамку сравнения', 'How documents frame the comparison', 'Як документи задають рамку порівняння'),
        paragraphs: P(
          [
            'Декларация о принципах международного права связывает самоопределение с дружественными отношениями и территориальной целостностью. Она не является простой таблицей, где любое объявившее себя сообщество автоматически получает государство. Конституция Украины определяет страну как унитарную и устанавливает общенациональную процедуру изменения территории. Акты независимости показывают иной исходный статус Украины внутри СССР.',
            'Доклады о правах человека 2014 года помогают установить вооружённую обстановку, состав групп и последствия, но не решают политический вопрос о желаемом устройстве региона. Поэтому такой документ подтверждает обстоятельства, в которых формировались требования, однако сам по себе не превращает общий принцип самоопределения в автоматический ответ для каждого конкретного случая.',
          ],
          [
            'The Friendly Relations Declaration connects self-determination with peaceful relations and territorial integrity; it is not a table granting statehood to every self-declared community. Ukraine’s Constitution defines a unitary state and nationwide territorial procedure. Independence instruments show Ukraine’s different starting status within the USSR.',
            'Human-rights reports from 2014 help establish armed conditions, participants, and consequences but do not decide the region’s preferred political order. Such a document can therefore verify the circumstances in which demands emerged, yet cannot by itself turn the general principle of self-determination into an automatic answer for every particular case.',
          ],
          [
            'Декларація про принципи міжнародного права пов’язує самовизначення з мирними відносинами й територіальною цілісністю; це не таблиця автоматичного надання державності кожній самопроголошеній спільноті. Конституція України визначає унітарну державу й загальнонаціональну процедуру зміни території. Акти незалежності показують інший початковий статус України в СРСР.',
            'Доповіді про права людини 2014 року допомагають встановити збройні умови, учасників і наслідки, але не визначають бажаний політичний устрій регіону. Такий документ може перевірити обставини, за яких виникали вимоги, однак сам по собі не перетворює загальний принцип самовизначення на автоматичну відповідь для кожного окремого випадку.',
          ],
        ),
      },
      {
        title: L('Двойной стандарт или ложное равенство', 'Double standard or false equivalence', 'Подвійний стандарт чи хибна рівність'),
        paragraphs: P(
          [
            'Одна позиция защищает украинскую независимость самоопределением, но отказывается обсуждать региональную волю внутри Украины. Другая объявляет все отделения равными и игнорирует различие конституционного статуса, процедуры и силы. Первая рискует двойным стандартом; вторая — ложным равенством. Последовательность означает применение одинаковых вопросов, а не гарантированно одинаковый ответ при разных фактах.',
            'Можно заключить, что местное самоощущение требует политического ответа и честной процедуры, но не создаёт автоматического права отделиться под вооружённым контролем. Нельзя из аналогии одной строкой вывести законность Крыма, Донбасса или любого силового ответа. Наиболее надёжный стандарт объединяет свободную волю, права всех затронутых жителей, внутреннюю процедуру, отсутствие внешнего принуждения и международную оценку.',
          ],
          [
            'One position defends Ukrainian independence through self-determination but refuses regional will inside Ukraine. Another calls all separations equal and ignores status, procedure, and force. The first risks a double standard; the second false equivalence. Consistency means asking the same questions, not guaranteeing the same answer under different facts.',
            'Local identity requires political response and honest procedure but does not automatically authorise secession under armed control. Analogy alone cannot establish legality of Crimea, Donbas, or any coercive response. A reliable standard joins free will, rights of all affected people, domestic procedure, absence of external coercion, and international assessment.',
          ],
          [
            'Одна позиція захищає українську незалежність самовизначенням, але відмовляється обговорювати регіональну волю всередині України. Інша оголошує всі відокремлення рівними й ігнорує статус, процедуру та силу. Перша ризикує подвійним стандартом; друга — хибною рівністю. Послідовність означає однакові питання, а не однакову відповідь за різних фактів.',
            'Місцева ідентичність потребує політичної відповіді й чесної процедури, але не дає автоматичного права відокремитися під збройним контролем. Аналогія сама не доводить законність Криму, Донбасу чи силової відповіді. Надійний стандарт поєднує вільну волю, права всіх мешканців, внутрішню процедуру, відсутність зовнішнього примусу й міжнародну оцінку.',
          ],
        ),
      },
    ],
  },

  'foreign-troop-consent-needs-authority-and-timing': {
    lead: L(
      'Приглашение иностранных войск является правовым основанием только при действительном согласии государства. Нужно установить компетентного автора, свободу его решения, точную дату и пределы разрешённых действий. 1 марта 2014 года Виктор Янукович направил обращение о применении российских вооружённых сил на территории Украины, которое российский представитель представил Совету Безопасности 3 марта. Этот документ не отвечает автоматически на статус автора после 22 февраля, не легализует более ранние действия и не распространяется без анализа на изменение территории Крыма.',
      'An invitation to foreign troops operates legally only through valid state consent. The competent author, freedom, exact date, and scope must be established. On 1 March 2014 Viktor Yanukovych issued an appeal concerning use of Russian armed forces in Ukraine, presented by Russia’s representative to the Security Council on 3 March. It does not automatically settle the author’s status after 22 February, legalise earlier conduct, or extend without analysis to changing Crimea’s territory.',
      'Запрошення іноземних військ є правовою підставою лише за дійсної згоди держави. Треба встановити компетентного автора, свободу рішення, точну дату й межі дозволених дій. 1 березня 2014 року Віктор Янукович видав звернення про застосування російських збройних сил на території України, яке російський представник подав Раді Безпеки 3 березня. Документ не вирішує автоматично статус автора після 22 лютого, не узаконює попередні дії й не поширюється без аналізу на зміну території Криму.',
    ),
    sections: [
      {
        title: L('Четыре условия действительного приглашения', 'Four conditions for a valid invitation', 'Чотири умови дійсного запрошення'),
        paragraphs: P(
          [
            'Согласие должно исходить от органа, уполномоченного представлять государство в вопросе иностранной силы. Оно должно быть свободным, существовать до или в момент действия и выражать достаточно определённый объём. Позднее одобрение не всегда устраняет первоначальное нарушение, а расплывчатая просьба о восстановлении порядка не равна разрешению занимать органы власти или присоединять территорию.',
            'Согласие действует в своих временных, территориальных и предметных границах и может быть отозвано. Договор о базировании также не является бессрочным разрешением на любые операции. Если иностранные подразделения выходят за согласованные объекты и функции, исходное присутствие и новое действие требуют раздельной оценки. Политическая симпатия населения не заменяет волю компетентного государства.',
          ],
          [
            'Consent must come from an organ empowered to represent the state on foreign force. It must be free, exist before or when conduct occurs, and define scope sufficiently. Later approval does not necessarily cure initial breach, while a broad request to restore order is not permission to seize institutions or incorporate territory.',
            'Consent operates within temporal, territorial, and substantive limits and may be withdrawn. A basing agreement is not perpetual permission for every operation. Conduct beyond agreed facilities and functions requires separate assessment from initial presence. Popular sympathy does not replace competent state will.',
          ],
          [
            'Згода має походити від органу, уповноваженого представляти державу щодо іноземної сили. Вона повинна бути вільною, існувати до або під час дії й достатньо визначати обсяг. Пізніше схвалення не завжди усуває початкове порушення, а загальне прохання відновити порядок не дорівнює дозволу захопити органи чи приєднати територію.',
            'Згода діє у часових, територіальних і предметних межах та може бути відкликана. Угода про базування не є вічним дозволом на кожну операцію. Дії поза погодженими об’єктами й функціями треба оцінювати окремо від початкової присутності. Політична симпатія населення не замінює компетентну державну волю.',
          ],
        ),
      },
      {
        title: L('Февральская власть, мартовское письмо и Крым', 'February authority, the March letter, and Crimea', 'Лютнева влада, березневий лист і Крим'),
        paragraphs: P(
          [
            'Постановление 22 февраля 2014 года заявило о самоустранении Януковича и передало исполнение функций в новой институциональной цепочке. Поэтому 1 марта существовал спор, сохранял ли он конституционное полномочие выражать волю Украины. Формальный титул, фактическая способность управлять, признание действующих органов и свобода автора должны анализироваться вместе, а не выбираться по одному удобному признаку.',
            'Крымское голосование состоялось 16 марта после смены фактического контроля на полуострове. Даже если письму придать определённое правовое значение, нужно показать, охватывало ли оно действия российских сил до 1 марта, контроль над крымскими органами и содействие изменению статуса. Гипотеза о более раннем непубличном разрешении не может использоваться без самостоятельного документального доказательства.',
          ],
          [
            'The 22 February resolution stated Yanukovych’s withdrawal and placed functions in a new institutional chain. On 1 March a dispute therefore existed over his constitutional authority to express Ukraine’s will. Formal title, effective governance, recognition of operative bodies, and the author’s freedom must be considered together.',
            'The Crimean vote occurred on 16 March after effective control changed. Even if the letter has some effect, its coverage of Russian conduct before 1 March, control of Crimean institutions, and assistance in status change must be shown. An alleged earlier non-public permission cannot be used without independent documentary proof.',
          ],
          [
            'Постанова 22 лютого 2014 року заявила про самоусунення Януковича й передала виконання функцій у новому інституційному ланцюзі. Тому 1 березня існував спір, чи зберіг він конституційне повноваження виражати волю України. Формальний титул, фактичне управління, визнання діючих органів і свободу автора треба аналізувати разом.',
            'Кримське голосування відбулося 16 березня після зміни фактичного контролю. Навіть якщо лист має певний ефект, треба показати його охоплення російських дій до 1 березня, контролю кримських органів і сприяння зміні статусу. Припущений раніший непублічний дозвіл не можна використовувати без окремого документального доказу.',
          ],
        ),
      },
      {
        title: L('Что подтверждают стенограмма ООН и правила согласия', 'What the UN record and consent rules confirm', 'Що підтверджують запис ООН і правила згоди'),
        paragraphs: P(
          [
            'Стенограмма заседания Совета Безопасности 3 марта подтверждает, что российский представитель представил обращение и назвал его основанием позиции России. Она надёжно устанавливает публичное использование документа, но не выносит решения о его действительности. Совет не превращает предъявленное письмо в бесспорное согласие только фактом оглашения на заседании.',
            'Статьи о государственной ответственности рассматривают действительное согласие как обстоятельство, исключающее противоправность действия в пределах согласия. Комментарий подчёркивает действительность и границы. Это общий аналитический стандарт, а не готовый ответ на украинский конституционный спор. Факты о полномочии, времени и поведении всё равно должны быть установлены отдельными источниками.',
          ],
          [
            'The Security Council record of 3 March confirms Russia’s representative presented the appeal as a basis for Russia’s position. It reliably establishes public use, not legal validity. Reading a letter at a meeting does not make consent uncontested.',
            'The articles on state responsibility treat valid consent as precluding wrongfulness within its limits, with commentary stressing validity and scope. This is a general analytical standard, not an answer to Ukraine’s constitutional dispute. Authority, timing, and conduct still require separate evidence.',
          ],
          [
            'Стенограма засідання Ради Безпеки 3 березня підтверджує, що російський представник подав звернення як підставу позиції Росії. Вона надійно встановлює публічне використання, а не юридичну дійсність. Оголошення листа на засіданні не робить згоду безспірною.',
            'Статті про відповідальність держав розглядають дійсну згоду як обставину, що виключає протиправність у її межах, а коментар наголошує на дійсності й обсязі. Це загальний стандарт, а не відповідь на український конституційний спір. Повноваження, час і поведінка однаково потребують окремих доказів.',
          ],
        ),
      },
      {
        title: L('Достаточное приглашение или документ без полномочия', 'A sufficient invitation or a document without authority', 'Достатнє запрошення чи документ без повноваження'),
        paragraphs: P(
          [
            'Одна позиция считает сохранение президентского титула достаточным и охватывает письмом всю российскую операцию. Другая считает документ ничтожным из-за фактического ухода и парламентского решения. Первая недооценивает время и пределы; вторая может слишком быстро решить сложный вопрос представительства. Точная оценка должна объяснить каждый критерий, а не заменить их общим отношением к смене власти.',
            'Можно заключить, что письмо существовало и было публично использовано, но его действие оставалось спорным, а более раннее согласие не доказано. Нельзя только из письма оправдать действия до даты, присоединение Крыма или любые последующие операции. Даже действительное приглашение не передаёт иностранной силе суверенитет и не отменяет обязанность соблюдать пределы, права человека и применимое право конфликта.',
          ],
          [
            'One position treats retained presidential title as sufficient and extends the letter across Russia’s operation. Another treats it as void after departure and parliament’s decision. The first undervalues timing and scope; the second may decide representation too quickly. A precise assessment explains every criterion rather than substituting an attitude toward transition.',
            'The letter existed and was publicly invoked, but its effect was contested and earlier consent remains unproved. It cannot alone justify pre-date conduct, Crimean incorporation, or every later operation. Even valid invitation transfers no sovereignty and preserves limits, human rights, and applicable conflict law.',
          ],
          [
            'Одна позиція вважає збережений президентський титул достатнім і поширює лист на всю російську операцію. Інша робить документ нікчемним через від’їзд і парламентське рішення. Перша недооцінює час та межі; друга може надто швидко вирішити складне представництво. Точна оцінка пояснює кожний критерій, а не замінює їх ставленням до переходу.',
            'Лист існував і був публічно використаний, але його дія лишалася спірною, а раніша згода не доведена. Лише лист не виправдовує дії до дати, приєднання Криму чи кожну наступну операцію. Навіть дійсне запрошення не передає суверенітет і зберігає межі, права людини та застосовне право конфлікту.',
          ],
        ),
      },
    ],
  },

  'amnesty-law-is-not-adjudication': {
    lead: L(
      'Закон об освобождении участников протестов может перечислять широкий круг уголовных статей, не устанавливая, что каждое соответствующее преступление действительно совершено. Закон № 743-VII от 21 февраля 2014 года охватывал подозреваемых, обвиняемых и осуждённых за связанные с протестами деяния; в перечне присутствовала статья 109 Уголовного кодекса о насильственном изменении конституционного строя или захвате власти. Из этого следует, что такие обвинения входили в круг преследований. Не следует, что парламент вынес единый фактический приговор всему Майдану или признал состоявшийся государственный переворот.',
      'A law releasing protest participants may list many criminal provisions without finding that every offence occurred. Law No. 743-VII of 21 February 2014 covered suspects, accused persons, and convicts for protest-related acts; its list included Criminal Code Article 109 on violent change of constitutional order or seizure of power. This establishes that such allegations fell within the covered prosecutions. It does not establish that parliament issued one factual judgment on Maidan or recognised a completed coup.',
      'Закон про звільнення учасників протестів може перелічувати багато кримінальних статей, не встановлюючи, що кожний злочин справді вчинено. Закон № 743-VII від 21 лютого 2014 року охоплював підозрюваних, обвинувачених і засуджених за пов’язані з протестами діяння; у переліку була стаття 109 Кримінального кодексу про насильницьку зміну конституційного ладу або захоплення влади. Це доводить наявність таких звинувачень у колі переслідувань. Не доводить, що парламент виніс єдиний фактичний вирок Майдану чи визнав здійснений переворот.',
    ),
    sections: [
      {
        title: L('Освобождение от ответственности и установление вины', 'Release from liability and determination of guilt', 'Звільнення від відповідальності та встановлення вини'),
        paragraphs: P(
          [
            'Уголовный процесс различает подозрение, обвинение, судебное установление и наказание. Амнистия или специальное освобождение меняет последствия преследования для определённого круга людей; оно может применяться до окончательного приговора. Поэтому законодатель вынужден описать охватываемые дела и статьи, не принимая на себя функцию суда по каждому эпизоду. Перечень является фильтром применения закона, а не общей доказательственной таблицей.',
            'Даже для осуждённого освобождение от наказания не позволяет переносить его индивидуальное дело на всех участников протестов. Для подозреваемого тем более отсутствует обвинительный приговор. Если статья 109 названа среди многих составов, это подтверждает существование соответствующих производств или риска преследования. Количество, обоснованность и фактическая история каждого дела требуют отдельных материалов.',
          ],
          [
            'Criminal process distinguishes suspicion, accusation, adjudication, and punishment. Amnesty or special release changes consequences for a defined group and may operate before final judgment. Legislators therefore describe covered cases and offences without acting as a court for each incident. The list filters application; it is not an evidentiary table.',
            'Even release of a convicted person cannot project one individual case onto all protesters. A suspect lacks conviction altogether. Listing Article 109 among many provisions confirms relevant proceedings or exposure, not their number, merits, and facts, which need separate records.',
          ],
          [
            'Кримінальний процес розрізняє підозру, обвинувачення, судове встановлення й покарання. Амністія чи спеціальне звільнення змінює наслідки для визначеного кола й може діяти до остаточного вироку. Тому законодавець описує охоплені справи та статті, не виконуючи функцію суду в кожному епізоді. Перелік є фільтром застосування, а не доказовою таблицею.',
            'Навіть звільнення засудженої особи не переносить її індивідуальну справу на всіх протестувальників. Для підозрюваного вироку немає взагалі. Згадка статті 109 серед багатьох норм підтверджує відповідні провадження чи ризик переслідування, але не їх кількість, обґрунтованість і факти, що потребують окремих матеріалів.',
          ],
        ),
      },
      {
        title: L('Закон 21 февраля и решение 22 февраля', 'The law of 21 February and decision of 22 February', 'Закон 21 лютого й рішення 22 лютого'),
        paragraphs: P(
          [
            'Закон № 743-VII был принят 21 февраля, до парламентского постановления о президентских полномочиях 22 февраля. Он относится к освобождению участников протестов и последствиям уголовного преследования. Постановление № 757-VII относится к фактическому самоустранению президента и досрочным выборам. Близость дат не превращает первый документ в юридическую квалификацию второго события, которое ещё не произошло.',
            'Спор о том, был ли переход власти конституционным, революционным или переворотом, решается через Конституцию, парламентское решение, факты и последующие институты. Упоминание уголовного состава в предыдущем законе может быть частью политического контекста, но не заменяет эту проверку. Иначе законодательный перечень будущих освобождений получает невозможную способность заранее доказать иной комплекс событий.',
          ],
          [
            'Law No. 743-VII was adopted on 21 February, before parliament’s presidential-authority resolution of 22 February. It concerns release of protesters and criminal proceedings. Resolution No. 757-VII concerns presidential withdrawal and early elections. Adjacent dates do not make the first instrument a legal classification of an event not yet taken.',
            'Whether transition was constitutional, revolutionary, or a coup requires the Constitution, resolution, facts, and later institutions. An offence listed in an earlier law may form political context but cannot replace that inquiry. Otherwise a release list would impossibly prove a different future sequence in advance.',
          ],
          [
            'Закон № 743-VII ухвалили 21 лютого, до парламентської постанови про президентські повноваження 22 лютого. Він стосується звільнення протестувальників і кримінальних проваджень. Постанова № 757-VII — самоусунення президента й дострокових виборів. Сусідні дати не роблять перший документ правовою кваліфікацією події, що ще не сталася.',
            'Чи був перехід конституційним, революційним або переворотом, перевіряють за Конституцією, постановою, фактами й наступними інституціями. Згаданий у попередньому законі склад може бути політичним контекстом, але не замінює аналіз. Інакше перелік звільнень отримує неможливу здатність наперед довести іншу майбутню послідовність.',
          ],
        ),
      },
      {
        title: L('Как читать статью 109 и сферу закона', 'Reading Article 109 and the law’s scope', 'Як читати статтю 109 та сферу закону'),
        paragraphs: P(
          [
            'Статья 109 описывает конкретный уголовно-правовой состав и требует его элементов, доказанных в отношении определённого лица и действия. Политическое слово «переворот» может использоваться шире, уже или метафорически и не является автоматически названием этого состава. Чтобы соединить термины, нужно показать факты, умысел, действие, процессуальный статус и окончательное решение, а не только совпадение темы.',
            'Сам закон следует читать по категориям лиц, временным и предметным границам, перечню статей и механизму освобождения. Его политическая цель могла состоять в деэскалации и прекращении преследований, что объясняет широкий охват. Широта не означает парламентского признания каждого обвинения. Напротив, включение подозреваемых показывает, что закон сознательно действовал до окончательного установления вины.',
          ],
          [
            'Article 109 describes a particular offence whose elements must be proved for a person and act. The political word “coup” may be broader, narrower, or metaphorical and is not automatically this offence. Connecting them requires facts, intent, conduct, procedural status, and final decision—not thematic overlap.',
            'The law should be read through persons covered, time and subject limits, listed offences, and release mechanism. A de-escalatory purpose can explain breadth without parliament accepting every allegation. Inclusion of suspects shows deliberate operation before final guilt determination.',
          ],
          [
            'Стаття 109 описує конкретний кримінальний склад, елементи якого треба довести щодо особи й дії. Політичне слово «переворот» може бути ширшим, вужчим або метафоричним і не є автоматично назвою цього складу. Для зв’язку потрібні факти, умисел, дія, процесуальний статус і остаточне рішення, а не лише збіг теми.',
            'Закон треба читати за категоріями осіб, часовими й предметними межами, переліком статей і механізмом звільнення. Деескалаційна мета може пояснювати широкий охват без прийняття парламентом кожного звинувачення. Включення підозрюваних показує свідому дію до остаточного встановлення вини.',
          ],
        ),
      },
      {
        title: L('Признание переворота или прекращение преследования', 'Recognition of a coup or ending prosecutions', 'Визнання перевороту чи припинення переслідувань'),
        paragraphs: P(
          [
            'Одна трактовка считает упоминание статьи 109 прямым признанием насильственного захвата власти самими законодателями. Другая полностью отрывает амнистию от политического конфликта. Первая путает сферу освобождения с вердиктом; вторая недооценивает, что перечень показывает реальные виды обвинений и восприятие протеста правоохранительной системой. Значимый вывод должен оставаться на этом промежуточном уровне.',
            'Документы позволяют установить содержание закона, наличие статьи 109 в перечне и различие статусов охваченных лиц. Они не позволяют объявить весь Майдан доказанным составом, решить конституционность прекращения полномочий президента или установить виновность без судебных материалов. Эта граница защищает презумпцию невиновности и одновременно сохраняет закон как важное свидетельство характера преследований в кризисе.',
          ],
          [
            'One reading treats Article 109’s inclusion as lawmakers admitting a violent seizure. Another severs the release law from political conflict. The first confuses scope with verdict; the second misses that the list shows actual allegation categories and law-enforcement perception. The meaningful conclusion lies at that intermediate level.',
            'The documents establish the law, Article 109’s inclusion, and differing covered procedural statuses. They cannot make all Maidan conduct a proved offence, settle presidential termination, or establish guilt without case materials. This boundary protects presumed innocence while preserving the law as evidence of crisis-era prosecution patterns.',
          ],
          [
            'Одне тлумачення вважає згадку статті 109 прямим визнанням насильницького захоплення самими законодавцями. Інше цілком відриває закон від політичного конфлікту. Перше змішує сферу звільнення з вироком; друге не бачить, що перелік показує реальні категорії звинувачень і сприйняття протесту правоохоронцями. Значущий висновок лишається на цьому проміжному рівні.',
            'Документи встановлюють зміст закону, наявність статті 109 і різні статуси охоплених осіб. Вони не роблять увесь Майдан доведеним складом, не вирішують припинення президентських повноважень і не встановлюють вину без матеріалів справ. Межа захищає презумпцію невинуватості й зберігає закон як свідчення характеру переслідувань у кризі.',
          ],
        ),
      },
    ],
  },

  'threat-rhetoric-and-political-cohesion': {
    lead: L(
      'Образ внешней угрозы способен сплачивать общество, оправдывать оборонные расходы и укреплять власть. Но политическая выгода от угрозовой риторики не доказывает, что опасность вымышлена, как реальная опасность не делает каждое преувеличение правдивым. После вторжения 24 февраля 2022 года НАТО и Европейский союз официально пересмотрели документы безопасности, описав Россию как прямую или долгосрочную угрозу. Эти тексты фиксируют институциональную оценку на основании произошедших действий. Отдельно следует проверять, как эта оценка используется во внутренней политике и насколько конкретные прогнозы подтверждаются возможностями и намерениями.',
      'An external threat image can unite society, justify defence spending, and strengthen government. Political benefit from threat rhetoric does not prove danger invented, just as real danger does not make every exaggeration true. After the invasion of 24 February 2022, NATO and the European Union revised official security documents and described Russia as a direct or long-term threat. These instruments record an institutional assessment following observed conduct. How that assessment serves domestic politics and whether particular forecasts match capabilities and intentions are separate questions.',
      'Образ зовнішньої загрози може згуртовувати суспільство, виправдовувати оборонні витрати й зміцнювати владу. Політична вигода від риторики не доводить вигаданість небезпеки, як реальна небезпека не робить кожне перебільшення правдивим. Після вторгнення 24 лютого 2022 року НАТО та Європейський союз переглянули офіційні документи безпеки й описали Росію як пряму або тривалу загрозу. Ці тексти фіксують інституційну оцінку після спостережуваних дій. Використання оцінки у внутрішній політиці та відповідність конкретних прогнозів можливостям і намірам перевіряються окремо.',
    ),
    sections: [
      {
        title: L('Политическая функция и фактическое содержание', 'Political function and factual content', 'Політична функція та фактичний зміст'),
        paragraphs: P(
          [
            'Речь об угрозе имеет аудиторию и практическую цель: добиться поддержки бюджета, санкций, мобилизации или союза. Анализ функции спрашивает, кому выгодна формулировка и какое действие она облегчает. Анализ содержания отдельно спрашивает, какими возможностями обладает предполагаемый противник, какие намерения подтверждены и какие действия уже совершены. Ответ на первый вопрос не должен заранее решать второй.',
            'Искренняя тревога и инструментальное использование способны сосуществовать. Политик может считать риск реальным и выбирать наиболее мобилизующую форму его описания. Поэтому разоблачение выгоды не является опровержением, а указание на вторжение не подтверждает любой прогноз о следующем нападении. Чем конкретнее и дороже предлагаемая мера, тем конкретнее должны быть факты и временной горизонт.',
          ],
          [
            'Threat speech has an audience and purpose: support for budgets, sanctions, mobilisation, or alliance. Functional analysis asks who benefits and which action becomes easier. Content analysis separately asks about adversary capabilities, evidenced intentions, and completed conduct. The first answer should not decide the second.',
            'Sincere concern and instrumental use can coexist. A politician may perceive real risk while choosing the most mobilising description. Showing benefit is not refutation, and pointing to invasion does not prove every prediction of another attack. More specific and costly measures require more specific facts and horizons.',
          ],
          [
            'Мова загрози має аудиторію й мету: підтримку бюджету, санкцій, мобілізації чи союзу. Аналіз функції питає, кому вигідне формулювання і яку дію воно полегшує. Аналіз змісту окремо оцінює можливості противника, підтверджені наміри й уже вчинені дії. Відповідь на перше питання не має наперед вирішувати друге.',
            'Щира тривога та інструментальне використання можуть співіснувати. Політик здатний вважати ризик реальним і обирати найбільш мобілізаційний опис. Виявлення вигоди не є спростуванням, а посилання на вторгнення не доводить кожний прогноз нового нападу. Що конкретніший і дорожчий захід, то конкретнішими мають бути факти й часовий горизонт.',
          ],
        ),
      },
      {
        title: L('Как вторжение изменило официальную оценку', 'How invasion changed the official assessment', 'Як вторгнення змінило офіційну оцінку'),
        paragraphs: P(
          [
            'До 2022 года европейский спор включал сотрудничество, сдерживание и российское восприятие расширения НАТО. Полномасштабное вторжение дало прямое наблюдаемое основание считать Россию источником военной опасности для Украины и более широкого порядка. Это не означает, что каждое государство имеет одинаковый уровень непосредственного риска, но отличает послевоенную риторику от чисто гипотетической кампании.',
            'Стратегическая концепция НАТО 2022 года и Стратегический компас ЕС являются согласованными официальными документами своих организаций. Они фиксируют общую оценку угроз и направления политики, а не секретное намерение каждого лидера или математическую вероятность нападения. Их принятие подтверждает институциональное изменение, но конкретные меры и национальные мотивы всё равно требуют отдельного анализа.',
          ],
          [
            'Before 2022 European debate combined cooperation, deterrence, and Russian perceptions of NATO enlargement. Full-scale invasion supplied direct observable grounds for treating Russia as a military danger to Ukraine and the wider order. Risk is not equally immediate for every state, but post-invasion rhetoric differs from a purely hypothetical campaign.',
            'NATO’s 2022 Strategic Concept and the EU Strategic Compass are agreed institutional documents. They record shared threat assessment and policy direction, not every leader’s secret intention or a mathematical attack probability. Their adoption confirms institutional change, while particular measures and national motives still require analysis.',
          ],
          [
            'До 2022 року європейський спір поєднував співпрацю, стримування та російське сприйняття розширення НАТО. Повномасштабне вторгнення дало пряме спостережуване підґрунтя вважати Росію військовою небезпекою для України й ширшого порядку. Ризик не є однаково безпосереднім для кожної держави, але післявоєнна риторика відрізняється від суто гіпотетичної кампанії.',
            'Стратегічна концепція НАТО 2022 року та Стратегічний компас ЄС є погодженими офіційними документами організацій. Вони фіксують спільну оцінку загроз і напрям політики, а не таємний намір кожного лідера чи математичну ймовірність нападу. Ухвалення підтверджує інституційну зміну, але конкретні заходи й національні мотиви потребують окремого аналізу.',
          ],
        ),
      },
      {
        title: L('Как читать концепции безопасности', 'How to read security concepts', 'Як читати концепції безпеки'),
        paragraphs: P(
          [
            'Официальный документ нужно читать по определениям угрозы, географии, временной перспективе и предусмотренным инструментам. Слово «угроза» может обозначать существующие возможности, заявленные намерения или уже совершённое действие. Эти основания имеют разный доказательный вес. Документ устанавливает позицию организации на дату принятия, но не гарантирует неизменность оценки и не является независимым отчётом по каждому факту.',
            'Сопоставление с военными возможностями, бюджетами, развертыванием и наблюдаемыми операциями проверяет фактическую сторону. Сопоставление с внутренними дебатами показывает политическое использование. Нельзя считать сам факт роста оборонных расходов доказательством вымышленной угрозы: расход может быть рациональной реакцией. Нельзя и считать расход доказательством неминуемой атаки: политика способна опережать или преувеличивать риск.',
          ],
          [
            'An official instrument should be read through threat definitions, geography, horizon, and tools. “Threat” may refer to capability, stated intention, or completed action, each with different weight. The document establishes an organisation’s dated position, not an immutable assessment or independent report on every fact.',
            'Military capabilities, budgets, deployments, and operations test factual content; domestic debate shows political use. Rising defence spending does not prove an invented threat—it may be rational response. Nor does spending prove imminent attack; policy may anticipate or exaggerate risk.',
          ],
          [
            'Офіційний документ треба читати за визначеннями загрози, географією, часовим горизонтом та інструментами. «Загроза» може означати можливості, заявлений намір або вже вчинену дію з різною доказовою вагою. Документ встановлює датовану позицію організації, а не незмінну оцінку чи незалежний звіт про кожний факт.',
            'Військові можливості, бюджети, розгортання й операції перевіряють фактичний зміст; внутрішні дебати показують політичне використання. Зростання оборонних витрат не доводить вигадану загрозу — це може бути раціональна реакція. Витрати також не доводять неминучий напад; політика може випереджати чи перебільшувати ризик.',
          ],
        ),
      },
      {
        title: L('Пропаганда или ответственное предупреждение', 'Propaganda or responsible warning', 'Пропаганда чи відповідальне попередження'),
        paragraphs: P(
          [
            'Одна трактовка видит в угрозовой рамке только способ сплотить Европу и оправдать расходы. Другая воспринимает официальный документ как достаточное доказательство любой заявленной опасности. Первая игнорирует произошедшее вторжение и военные возможности; вторая отказывается от независимой проверки и различения рисков. Политическая функция и реальная угроза должны быть способны подтверждаться одновременно.',
            'Можно заключить, что образ угрозы имеет мобилизующую функцию и после 2022 года опирается на наблюдаемое крупное применение силы. Нельзя без данных утверждать, что лидеры считают угрозу ложной, что Россия неизбежно нападёт на каждую страну или что любые оборонные меры соразмерны. Равный стандарт требует так же проверять российские заявления об угрозе НАТО, не превращая восприятие в правовое оправдание войны.',
          ],
          [
            'One reading sees only a device to unite Europe and justify spending. Another treats official text as sufficient proof of every danger. The first ignores invasion and military capability; the second abandons independent scrutiny and differentiated risk. Political function and real threat can both be supported.',
            'Threat imagery mobilises and, after 2022, rests on observed large-scale force. Data are still needed before saying leaders know it false, Russia will inevitably attack every country, or every defence measure is proportionate. The same standard tests Russian claims about NATO without turning perception into legal justification for war.',
          ],
          [
            'Одне тлумачення бачить лише спосіб згуртувати Європу й виправдати витрати. Інше вважає офіційний текст достатнім доказом кожної небезпеки. Перше ігнорує вторгнення й військові можливості; друге відмовляється від незалежної перевірки та розрізнення ризиків. Політична функція й реальна загроза можуть підтверджуватися одночасно.',
            'Образ загрози мобілізує й після 2022 року спирається на спостережувану масштабну силу. Однаково потрібні дані, перш ніж казати, що лідери знають про її хибність, Росія неминуче нападе на кожну країну або всі оборонні заходи пропорційні. Той самий стандарт перевіряє російські заяви про НАТО, не роблячи сприйняття правовим виправданням війни.',
          ],
        ),
      },
    ],
  },
  'wartime-elections-and-continuity': {
    lead: L(
      'Вопрос о президентских выборах во время войны нельзя решить одной датой окончания обычного пятилетнего срока. Украинское право одновременно задаёт периодичность выборов, запрещает их проведение при военном положении и требует, чтобы действующий президент исполнял полномочия до вступления в должность избранного преемника. После введения военного положения 24 февраля 2022 года эти правила оказались в одной фактической ситуации. Поэтому проверять нужно не риторическое утверждение о «просроченной власти», а всю правовую цепочку: когда должны были состояться очередные выборы, почему голосование невозможно, как предотвращается вакансия и каким образом избирательный цикл должен возобновиться.',
      'Presidential elections during war cannot be assessed from the expiry date of an ordinary five-year term alone. Ukrainian law simultaneously sets an electoral cycle, bars elections under martial law, and requires the incumbent president to exercise authority until an elected successor takes office. After martial law was introduced on 24 February 2022, all three rules operated in the same situation. The test is therefore not the rhetorical claim of an “expired government,” but the whole legal chain: when an election would normally occur, why voting cannot be held, how a vacancy is prevented, and how the electoral cycle must resume.',
      'Питання президентських виборів під час війни не можна вирішити лише датою завершення звичайного п’ятирічного строку. Українське право водночас установлює періодичність виборів, забороняє їх під час воєнного стану та вимагає, щоб чинний президент здійснював повноваження до вступу на посаду обраного наступника. Після запровадження воєнного стану 24 лютого 2022 року ці правила діють в одній ситуації. Отже, перевіряти слід не риторичну тезу про «прострочену владу», а весь правовий ланцюг: звичайний час виборів, причину неможливості голосування, запобігання вакансії та відновлення виборчого циклу.',
    ),
    sections: [
      {
        title: L('Срок, выборы и непрерывность — разные правила', 'Term, election, and continuity are distinct rules', 'Строк, вибори й безперервність — різні правила'),
        paragraphs: P(
          [
            'Конституционный срок отвечает на вопрос, как долго полномочия обычно предоставляются избирателями. Норма о дате очередных выборов организует периодическое обновление мандата. Норма о продолжении исполнения обязанностей до вступления преемника не создаёт новый избирательный срок, а не допускает институционального вакуума. Эти положения надо читать совместно: окончание календарного периода само по себе не превращает должность в пустующую, если конституционный текст прямо связывает передачу полномочий с появлением избранного преемника.',
            'Военное положение добавляет отдельный порог: выборы запрещены не потому, что результат заранее неудобен, а потому, что специальный режим исключает общенациональное голосование в условиях угрозы, перемещения населения, оккупации территорий и прохождения гражданами военной службы. Юридическая непрерывность не равна политическому одобрению любой меры власти. Она только определяет, кто законно выполняет функции до момента, когда снова возможно сформировать мандат через выборы.',
          ],
          [
            'A constitutional term answers how long voters ordinarily confer authority. The rule fixing regular elections organises periodic renewal. The rule that an incumbent serves until a successor takes office does not create a new electoral term; it prevents an institutional vacuum. These provisions operate together: the end of a calendar period does not itself vacate the office when the constitution expressly links transfer of power to an elected successor.',
            'Martial law adds a separate threshold. Elections are barred not because a result may be inconvenient, but because the special regime excludes a nationwide vote amid danger, displacement, occupation, and citizens’ military service. Legal continuity is not political approval of every government measure. It only identifies who lawfully performs the office until a mandate can again be formed through elections.',
          ],
          [
            'Конституційний строк відповідає на питання, як довго виборці зазвичай надають повноваження. Норма про дату чергових виборів організує періодичне оновлення мандата. Правило про виконання обов’язків до вступу наступника не створює нового виборчого строку, а запобігає інституційному вакууму. Ці положення діють разом: завершення календарного періоду саме по собі не звільняє посаду, якщо Конституція прямо пов’язує передачу влади з обраним наступником.',
            'Воєнний стан додає окремий поріг. Вибори заборонені не через можливу незручність результату, а тому, що спеціальний режим виключає загальнонаціональне голосування за умов небезпеки, переміщення населення, окупації та проходження громадянами військової служби. Юридична безперервність не означає політичного схвалення кожного рішення влади. Вона лише визначає законного виконавця функцій до відновлення виборів.',
          ],
        ),
      },
      {
        title: L('От выборов 2019 года к военному положению', 'From the 2019 election to martial law', 'Від виборів 2019 року до воєнного стану'),
        paragraphs: P(
          [
            'Президент был избран весной 2019 года и вступил в должность 20 мая. При обычном порядке следующий президентский цикл приходился бы на 2024 год. Однако полномасштабное российское вторжение началось 24 февраля 2022 года, и в тот же день было введено военное положение, которое затем продлевалось. К моменту предполагаемого голосования действовал установленный законом запрет на президентские, парламентские и местные выборы.',
            'Практический барьер не сводится к формальной строке закона. Избиратели находятся за границей или перемещены внутри страны, часть округов оккупирована, военнослужащие не могут участвовать в обычной кампании, а инфраструктура подвергается ударам. Эти обстоятельства объясняют смысл запрета, но не отменяют будущую обязанность провести выборы. Возвращение к ним должно быть связано с прекращением военного положения и созданием условий для равного участия, регистрации, агитации, наблюдения и безопасного подсчёта.',
          ],
          [
            'The president was elected in spring 2019 and took office on 20 May. Under ordinary conditions, the next presidential cycle would have fallen in 2024. Russia’s full-scale invasion began on 24 February 2022, however, and martial law was introduced that day and repeatedly extended. By the expected voting period, the statutory prohibition on presidential, parliamentary, and local elections was in force.',
            'The practical obstacle is not merely a line in a statute. Voters are abroad or internally displaced, some districts are occupied, service members cannot join an ordinary campaign, and infrastructure is under attack. These facts explain the prohibition but do not erase the future duty to hold an election. Its return must follow the end of martial law and conditions for equal participation, registration, campaigning, observation, and secure counting.',
          ],
          [
            'Президента обрали навесні 2019 року, а 20 травня він вступив на посаду. За звичайного порядку наступний президентський цикл припадав би на 2024 рік. Однак повномасштабне російське вторгнення почалося 24 лютого 2022 року, і того ж дня запровадили воєнний стан, який надалі продовжували. На час очікуваного голосування діє встановлена законом заборона президентських, парламентських і місцевих виборів.',
            'Практична перешкода не зводиться до одного рядка закону. Виборці перебувають за кордоном або переміщені в країні, частина округів окупована, військовослужбовці не можуть брати участь у звичайній кампанії, а інфраструктуру атакують. Це пояснює сенс заборони, але не скасовує майбутнього обов’язку провести вибори після припинення воєнного стану за умов рівної участі, агітації, спостереження та безпечного підрахунку.',
          ],
        ),
      },
      {
        title: L('Что буквально устанавливают Конституция и закон', 'What the Constitution and statute literally establish', 'Що буквально встановлюють Конституція і закон'),
        paragraphs: P(
          [
            'Конституция устанавливает пятилетний президентский срок и порядок очередных выборов, но также говорит, что президент осуществляет полномочия до вступления на пост новоизбранного президента. Закон о правовом режиме военного положения запрещает проведение выборов в период его действия и не допускает прекращения полномочий ряда ключевых органов только из-за особого режима. Совместное чтение этих норм даёт механизм временной непрерывности, а не бессрочный отказ от выборов.',
            'Документы не устанавливают, что военное положение автоматически дарует действующему президенту новый пятилетний мандат, снимает контроль парламента и судов или делает невозможной политическую критику. Они также не позволяют назначить голосование вопреки прямому запрету простым политическим решением. У Верховной Рады есть собственная конституционная формула продолжения полномочий при военном положении; её нельзя механически переносить на президента, поскольку для каждой институции текст предусматривает отдельный путь непрерывности.',
          ],
          [
            'The Constitution establishes a five-year presidential term and regular-election procedure, while also providing that the president exercises authority until the newly elected president takes office. The martial-law statute prohibits elections while the regime remains in force and protects continuity of key institutions. Read together, these rules create temporary continuity, not an indefinite abandonment of elections.',
            'The documents do not grant the incumbent a fresh five-year mandate, remove parliamentary and judicial checks, or forbid political criticism. Nor can a political decision simply schedule voting contrary to the express prohibition. Parliament has its own constitutional continuity formula during martial law; it cannot be mechanically applied to the president because the text supplies a distinct mechanism for each institution.',
          ],
          [
            'Конституція встановлює п’ятирічний президентський строк і порядок чергових виборів, водночас передбачаючи здійснення повноважень до вступу на посаду новообраного президента. Закон про правовий режим воєнного стану забороняє вибори під час його дії та захищає безперервність ключових органів. Разом ці правила створюють тимчасову наступність, а не безстрокову відмову від голосування.',
            'Документи не надають чинному президентові нового п’ятирічного мандата, не усувають парламентський і судовий контроль та не забороняють політичну критику. Політичне рішення також не може призначити голосування всупереч прямій забороні. Верховна Рада має власну конституційну формулу безперервності; її не можна механічно переносити на президента, бо для кожної інституції передбачено окремий механізм.',
          ],
        ),
      },
      {
        title: L('Легальность сегодня и мандат после войны', 'Legality now and a mandate after war', 'Законність сьогодні та мандат після війни'),
        paragraphs: P(
          [
            'Одна трактовка утверждает, что после обычной даты выборов любые действия президента незаконны. Она вырывает срок из системы и оставляет государство без предусмотренного носителя полномочий. Противоположная трактовка превращает войну в достаточное основание откладывать выборы независимо от закона и реальных условий. Она стирает временный характер исключения и право граждан вновь подтвердить или сменить власть.',
            'Обоснованный вывод уже: при действующем военном положении непроведение выборов соответствует специальному запрету, а продолжение исполнения президентских полномочий опирается на конституционную норму о преемнике. Из этого нельзя вывести новую продолжительность мандата или заранее определить дату послевоенного голосования. Для последнего потребуются прекращение особого режима, избирательные решения и проверяемая оценка безопасности и доступности. Легальность непрерывности и необходимость будущего обновления мандата существуют одновременно.',
          ],
          [
            'One reading says every presidential act becomes unlawful after the ordinary election date. It isolates the term from the constitutional system and leaves the state without a designated officeholder. The opposite reading treats war as sufficient to postpone elections regardless of law or actual conditions. It erases both the temporary nature of the exception and citizens’ right to confirm or replace their government.',
            'The supported conclusion is narrower: while martial law remains in force, non-conduct of elections follows the special prohibition, and continued presidential service rests on the successor clause. This supplies neither a new term length nor a predetermined post-war election date. Ending the special regime, electoral decisions, and a verifiable assessment of safety and access will be required. Legal continuity and future renewal coexist.',
          ],
          [
            'Одне тлумачення оголошує всі дії президента незаконними після звичайної дати виборів. Воно відриває строк від конституційної системи й залишає державу без визначеного носія повноважень. Протилежне тлумачення вважає війну достатньою підставою відкладати вибори незалежно від закону й умов. Воно стирає тимчасовість винятку та право громадян підтвердити або змінити владу.',
            'Обґрунтований висновок вужчий: за чинного воєнного стану непроведення виборів відповідає спеціальній забороні, а продовження президентських повноважень спирається на норму про наступника. Це не створює нового строку й не визначає наперед дату повоєнного голосування. Потрібні припинення особливого режиму, виборчі рішення та перевірна оцінка безпеки й доступності. Безперервність і майбутнє оновлення мандата співіснують.',
          ],
        ),
      },
    ],
  },
  'istanbul-draft-not-concluded-peace': {
    lead: L(
      'Переговоры в Стамбуле весной 2022 года были реальным дипломатическим процессом, но сам факт обмена проектами не равен заключённому миру. После российского вторжения 24 февраля делегации обсуждали прекращение войны, а 29 марта украинская сторона публично изложила предложения о нейтральном статусе и системе гарантий безопасности. Уже 31 марта турецкое посредничество подчёркивало, что согласование отдельных пунктов ещё не означает общего соглашения. Чтобы утверждать, что готовый договор был сорван одним внешним решением, нужны подписанный текст либо надёжная история правок, подтверждение полномочий делегаций и доказательство согласия по оставшимся условиям. Публичная документация такого завершения не показывает.',
      'The Istanbul talks in spring 2022 were a real diplomatic process, but exchanging drafts is not the same as concluding peace. After Russia invaded on 24 February, delegations discussed ending the war, and on 29 March the Ukrainian side publicly presented proposals on neutral status and security guarantees. By 31 March, Turkish mediation stressed that agreement on individual points did not amount to an overall settlement. A claim that one outside decision destroyed a completed treaty requires a signed text or reliable revision history, proof of the delegations’ authority, and evidence of assent to unresolved conditions. The public record does not show that completion.',
      'Стамбульські переговори навесні 2022 року були реальним дипломатичним процесом, але обмін проєктами не дорівнює укладеному миру. Після російського вторгнення 24 лютого делегації обговорювали припинення війни, а 29 березня українська сторона публічно виклала пропозиції щодо нейтрального статусу та гарантій безпеки. Уже 31 березня турецьке посередництво наголошувало, що погодження окремих пунктів ще не є загальною угодою. Теза про зірваний одним зовнішнім рішенням готовий договір потребує підписаного тексту або надійної історії правок, підтвердження повноважень делегацій і згоди щодо невирішених умов. Публічні документи завершення не показують.',
    ),
    sections: [
      {
        title: L('Проект фиксирует переговорную позицию, а не мир', 'A draft records a negotiating position, not peace', 'Проєкт фіксує переговорну позицію, а не мир'),
        paragraphs: P(
          [
            'Переговорный проект может показать, какие варианты сторона была готова обсуждать в конкретный день. Он становится доказательством согласия только в той мере, в какой видны происхождение текста, статус каждой редакции, одобрение спорных положений и намерение связать себя обязательствами. Пометки, скобки и альтернативные формулы имеют принципиальное значение: отсутствие возражения против одного пункта не превращает весь документ в договор.',
            'Порог заявления «мир был согласован» поэтому значительно выше порога «стороны сблизились». Нужно установить согласие по прекращению огня, территориям, гарантиям, военным ограничениям, порядку выполнения и последствиям нарушения. Нужна и процедура вступления в силу. Пока эти элементы оставались предметом переговоров, корректно говорить об окне дипломатии или основе возможного соглашения, но не о мире, который уже существовал юридически и был затем отменён.',
          ],
          [
            'A negotiating draft can show what a party was prepared to discuss on a particular date. It proves agreement only to the extent that provenance, revision status, approval of contested terms, and intent to be bound are visible. Brackets, annotations, and alternative formulations matter: silence on one clause does not transform the entire paper into a treaty.',
            'The threshold for “peace was agreed” is therefore far higher than for “the parties moved closer.” There must be assent on a ceasefire, territory, guarantees, military limits, implementation, breach consequences, and entry into force. While those elements remained under negotiation, it is accurate to describe a diplomatic opening or possible basis, not a legally existing peace later cancelled.',
          ],
          [
            'Переговорний проєкт може показати, що сторона була готова обговорювати певного дня. Він доводить згоду лише тією мірою, якою видно походження, статус редакції, схвалення спірних положень і намір узяти зобов’язання. Дужки, примітки й альтернативні формули мають принципове значення: відсутність заперечення проти одного пункту не перетворює весь документ на договір.',
            'Поріг заяви «мир погоджено» значно вищий за «сторони зблизилися». Потрібна згода щодо припинення вогню, територій, гарантій, військових обмежень, виконання, наслідків порушення та набрання чинності. Поки ці елементи обговорювалися, доречно говорити про дипломатичне вікно або основу можливої угоди, а не про юридично наявний мир, який потім скасували.',
          ],
        ),
      },
      {
        title: L('Март и апрель 2022 года: меняющийся контекст', 'March and April 2022: a changing context', 'Березень і квітень 2022 року: мінливий контекст'),
        paragraphs: P(
          [
            'Стамбульская встреча 29 марта состоялась примерно через месяц после начала полномасштабного вторжения. Украина предложила обсуждать постоянный нейтралитет в обмен на международные гарантии безопасности, тогда как вопросы территории и конкретной конструкции гарантий оставались открытыми. Российская сторона объявила о сокращении активности на киевском и черниговском направлениях, но боевые действия не прекратились, а отвод войск вскоре открыл сведения о массовых убийствах в Буче.',
            '9 апреля Киев посетил британский премьер-министр Борис Джонсон. Эта встреча действительно входит в хронологию и может исследоваться как фактор политических расчётов Украины и её партнёров. Однако последовательность дат сама по себе не доказывает приказ отказаться от готового договора. К этому времени изменились военная обстановка, оценка российских обязательств, сведения о преступлениях и ожидания внешней помощи. Для причинного вывода надо показать содержание решения и то, что именно оно, а не совокупность этих факторов, прекратило согласованный процесс.',
          ],
          [
            'The Istanbul meeting of 29 March occurred about a month after the full-scale invasion began. Ukraine proposed discussing permanent neutrality in exchange for international security guarantees, while territory and the guarantees’ precise design remained open. Russia announced reduced activity around Kyiv and Chernihiv, but hostilities did not end, and the withdrawal soon exposed evidence of mass killings in Bucha.',
            'British Prime Minister Boris Johnson visited Kyiv on 9 April. The meeting belongs in the chronology and may be studied as a factor in calculations by Ukraine and its partners. Sequence alone, however, does not prove an instruction to reject a finished treaty. The military picture, assessment of Russian commitments, evidence of atrocities, and expectations of aid had all changed. Causation requires evidence of the decision’s content and decisive effect.',
          ],
          [
            'Стамбульська зустріч 29 березня відбулася приблизно через місяць після початку повномасштабного вторгнення. Україна запропонувала обговорювати постійний нейтралітет в обмін на міжнародні гарантії безпеки, тоді як території та конкретна конструкція гарантій лишалися відкритими. Росія оголосила про скорочення активності біля Києва й Чернігова, але бойові дії не припинилися, а відведення військ невдовзі відкрило свідчення масових убивств у Бучі.',
            '9 квітня Київ відвідав британський прем’єр-міністр Борис Джонсон. Ця зустріч належить до хронології та може досліджуватися як чинник розрахунків України й партнерів. Однак послідовність дат не доводить наказу відмовитися від готового договору. Змінилися воєнна ситуація, оцінка російських зобов’язань, відомості про злочини й очікування допомоги. Причинний висновок потребує змісту рішення та доказу його вирішального впливу.',
          ],
        ),
      },
      {
        title: L('Что подтверждают публичные документы', 'What the public documents establish', 'Що встановлюють публічні документи'),
        paragraphs: P(
          [
            'Официальное сообщение украинской делегации от 29 марта подтверждает наличие конкретных предложений, а не только абстрактного призыва к миру. Публичные заявления турецких посредников подтверждают продвижение по части вопросов и одновременно сохранявшиеся разногласия. Последующие проекты, о которых сообщали участники и исследователи, помогают реконструировать повестку, но без полной удостоверенной цепочки редакций нельзя считать каждую формулу окончательно принятой обеими столицами.',
            'Ни один опубликованный материал не является подписанным и вступившим в силу мирным договором. Нет публичного документа, где государства-гаранты приняли бы конкретные обязательства в окончательной форме, стороны закрыли бы территориальные разногласия и согласовали бы надёжную последовательность прекращения огня и выполнения. Это не доказывает отсутствия серьёзного шанса. Оно ограничивает утверждение: документы подтверждают содержательные переговоры и частичное сближение, но не юридически завершённый мир.',
          ],
          [
            'The Ukrainian delegation’s official communication of 29 March confirms concrete proposals rather than an abstract call for peace. Public statements by Turkish mediators confirm movement on some issues while acknowledging remaining disagreement. Later drafts described by participants and researchers help reconstruct the agenda, but without a complete authenticated revision chain, every formula cannot be treated as finally accepted by both capitals.',
            'No published material is a signed peace treaty in force. There is no public final instrument in which guarantor states accept defined obligations, the parties close territorial disputes, and a reliable sequence for ceasefire and performance is settled. This does not prove there was no serious opportunity. It confines the claim: substantive negotiations and partial convergence are documented, legal completion is not.',
          ],
          [
            'Офіційне повідомлення української делегації від 29 березня підтверджує конкретні пропозиції, а не лише абстрактний заклик до миру. Публічні заяви турецьких посередників фіксують поступ у частині питань і водночас збережені розбіжності. Пізніші проєкти, описані учасниками й дослідниками, допомагають відновити порядок денний, але без повного засвідченого ланцюга редакцій кожну формулу не можна вважати остаточно прийнятою обома столицями.',
            'Жоден оприлюднений матеріал не є підписаним чинним мирним договором. Немає публічного фінального акта, де держави-гаранти прийняли визначені зобов’язання, сторони закрили територіальні суперечки й погодили надійну послідовність припинення вогню та виконання. Це не заперечує серйозної можливості. Воно обмежує висновок: змістовні переговори й часткове зближення підтверджені, юридичне завершення — ні.',
          ],
        ),
      },
      {
        title: L('Между упущенным шансом и мифом о готовой сделке', 'Between a missed opportunity and the myth of a finished deal', 'Між втраченою можливістю та міфом про готову угоду'),
        paragraphs: P(
          [
            'Одна трактовка описывает Стамбул как почти подписанный мир, который внешние партнёры запретили Украине принять. Она переоценивает согласованность текста и заменяет доказательство причинности совпадением во времени. Другая трактовка объявляет переговоры пустой российской уловкой и тем самым игнорирует конкретные украинские предложения, работу посредников и обсуждение взаимных обязательств. Обе версии превращают незавершённый процесс в удобный однозначный сюжет.',
            'Допустимый вывод состоит в том, что весной 2022 года существовал серьёзный канал и обсуждались возможные параметры соглашения, но ключевые условия и доверие не были сведены в подписанный акт. Можно спорить, достаточные ли усилия приложили стороны и партнёры и был ли шанс утрачен. Нельзя на имеющихся официальных документах утверждать, что мир уже был заключён, что одна поездка единолично его уничтожила или, наоборот, что дипломатической возможности вовсе не существовало.',
          ],
          [
            'One account portrays Istanbul as an almost signed peace that outside partners forbade Ukraine to accept. It overstates textual agreement and substitutes timing for causation. Another dismisses the talks as an empty Russian ruse, ignoring concrete Ukrainian proposals, mediation, and discussion of reciprocal commitments. Both turn an unfinished process into a convenient single story.',
            'The supported conclusion is that a serious channel existed in spring 2022 and possible settlement terms were discussed, but key conditions and trust were never embodied in a signed instrument. Whether the parties and partners made sufficient efforts, and whether an opportunity was lost, remains open to debate. Official documents do not show a concluded peace destroyed by one visit, nor do they show that diplomacy never offered a possibility.',
          ],
          [
            'Одна версія описує Стамбул як майже підписаний мир, який зовнішні партнери заборонили Україні прийняти. Вона перебільшує узгодженість тексту й замінює причинність збігом у часі. Інша оголошує переговори порожньою російською хитрістю, ігноруючи конкретні українські пропозиції, посередництво й обговорення взаємних зобов’язань. Обидві роблять із незавершеного процесу зручний однозначний сюжет.',
            'Обґрунтований висновок такий: навесні 2022 року існував серйозний канал і обговорювалися можливі умови, але ключові питання та довіру не втілили в підписаному акті. Можна сперечатися, чи доклали сторони й партнери достатніх зусиль і чи втратили можливість. Офіційні документи не показують ані укладеного миру, знищеного одним візитом, ані повної відсутності дипломатичного шансу.',
          ],
        ),
      },
    ],
  },
  'control-does-not-equal-recognition': {
    lead: L(
      'Способность государства или вооружённой силы удерживать территорию отвечает на фактический вопрос, но не решает автоматически вопрос о суверенитете. Контроль влияет на жизнь населения, доступ гуманитарных организаций, ответственность за управление и условия переговоров. Признание изменения границы, напротив, совершается другими государствами и международными организациями в правовой и политической плоскости. После захвата Крыма в 2014 году и провозглашённых Россией аннексий четырёх украинских регионов в 2022-м эта разница стала центральной: длительность присутствия создаёт практическую реальность, но сама по себе не обязывает мир принять новый титул. Политика непризнания способна сохраняться столько же, сколько и контроль.',
      'A state’s or armed force’s ability to hold territory answers a factual question but does not automatically settle sovereignty. Control affects residents, humanitarian access, responsibility for administration, and negotiations. Recognition of a border change, by contrast, is a legal and political act by other states and international organisations. After the seizure of Crimea in 2014 and Russia’s claimed annexations of four Ukrainian regions in 2022, this distinction became central: prolonged presence creates a practical reality but does not itself oblige the world to accept a new title. Non-recognition may persist as long as control.',
      'Здатність держави або збройної сили утримувати територію відповідає на фактичне питання, але не вирішує автоматично питання суверенітету. Контроль впливає на населення, гуманітарний доступ, відповідальність за управління й переговори. Визнання зміни кордону, натомість, є правовим і політичним актом інших держав та міжнародних організацій. Після захоплення Криму 2014 року й проголошених Росією анексій чотирьох українських регіонів 2022-го ця різниця стала центральною: тривала присутність створює практичну реальність, але не зобов’язує світ прийняти новий титул. Політика невизнання може тривати стільки ж, скільки контроль.',
    ),
    sections: [
      {
        title: L('Факт управления и юридический титул', 'Administration in fact and legal title', 'Фактичне управління та правовий титул'),
        paragraphs: P(
          [
            'Эффективный контроль устанавливается по наблюдаемым признакам: кто размещает силы, обеспечивает исполнение решений, собирает налоги, регулирует въезд и способен поддерживать порядок. Он важен даже тогда, когда управление возникло незаконно. Из контроля могут следовать обязанности перед населением и необходимость вести практические переговоры, но не право присоединить территорию. Иначе успешное применение силы автоматически переписывало бы границы и поощряло бы сохранение захвата.',
            'Признание требует отдельного поведения третьей стороны: официального решения, договора, дипломатического акта или иной ясной практики. Молчание, торговля, переговоры, выдача документов жителям или решение гуманитарной задачи не обязательно означают признание суверенитета. Порог доказательства зависит от конкретного утверждения, но время не выступает самостоятельным юридическим механизмом. Можно прогнозировать будущую нормализацию, однако прогноз следует отличать от уже состоявшегося изменения статуса.',
          ],
          [
            'Effective control is established through observable signs: who deploys forces, enforces decisions, collects revenue, regulates entry, and maintains order. It matters even where administration arose unlawfully. Control may bring duties toward residents and require practical dealings, but it does not confer a right to annex. Otherwise, successful force would automatically redraw borders and reward persistence in seizure.',
            'Recognition requires separate conduct by a third party: an official decision, treaty, diplomatic act, or other clear practice. Silence, trade, negotiation, documents for residents, or a humanitarian arrangement need not recognise sovereignty. The evidentiary threshold depends on the claim, but time is not an independent legal mechanism. Future normalisation can be forecast; it must not be confused with a status change already completed.',
          ],
          [
            'Ефективний контроль установлюють за спостережуваними ознаками: хто розміщує сили, виконує рішення, збирає доходи, регулює в’їзд і підтримує порядок. Він важливий навіть тоді, коли управління виникло незаконно. Контроль може породжувати обов’язки перед населенням і потребу практичних переговорів, але не право анексувати територію. Інакше успішна сила автоматично переписувала б кордони й винагороджувала тривалість захоплення.',
            'Визнання потребує окремої поведінки третьої сторони: офіційного рішення, договору, дипломатичного акта або іншої ясної практики. Мовчання, торгівля, переговори, документи для мешканців чи гуманітарна домовленість не обов’язково визнають суверенітет. Поріг доказу залежить від твердження, але час не є самостійним правовим механізмом. Прогноз нормалізації слід відрізняти від уже здійсненої зміни статусу.',
          ],
        ),
      },
      {
        title: L('Почему 1991, 2014 и 2022 годы нельзя объединить', 'Why 1991, 2014, and 2022 cannot be merged', 'Чому 1991, 2014 і 2022 роки не можна об’єднати'),
        paragraphs: P(
          [
            'После распада СССР в 1991 году новые государства получили международное признание на основе актов независимости, республиканского согласия, результатов голосований и последующего межгосударственного поведения. Этот пример иногда используют как доказательство того, что любая устойчивая политическая реальность со временем становится правом. Но согласованное прекращение союзного государства и территориальное изменение, созданное военным контролем одного соседа над другим, имеют различное происхождение.',
            'В Крыму российский контроль установился в феврале—марте 2014 года, после чего Россия объявила полуостров своей территорией. В сентябре 2022 года на оккупированных частях Донецкой, Луганской, Херсонской и Запорожской областей были проведены объявленные голосования, а затем провозглашено присоединение регионов. Международная реакция не следовала логике ожидания: Генеральная Ассамблея ООН закрепила непризнание заявленного изменения статуса. Продолжающийся контроль влияет на пути урегулирования, но пока не устраняет эту позицию.',
          ],
          [
            'After the USSR dissolved in 1991, new states gained international recognition through independence acts, republic-level consent, votes, and subsequent interstate conduct. This is sometimes used to argue that any durable political reality eventually becomes law. Yet an agreed dissolution of a union and a territorial change produced by one neighbour’s military control over another have different origins.',
            'Russian control over Crimea was established in February and March 2014, followed by Russia’s claim to the peninsula. In September 2022, announced votes were held in occupied parts of the Donetsk, Luhansk, Kherson, and Zaporizhzhia regions, followed by claimed incorporation. International reaction did not simply wait: the UN General Assembly formalised non-recognition of the alleged status change. Continuing control shapes settlement options but has not erased that position.',
          ],
          [
            'Після розпаду СРСР 1991 року нові держави отримали міжнародне визнання на основі актів незалежності, республіканської згоди, голосувань і подальшої міждержавної поведінки. Це іноді подають як доказ, що будь-яка тривала політична реальність стає правом. Проте погоджене припинення союзної держави й територіальна зміна через військовий контроль одного сусіда над іншим мають різне походження.',
            'Російський контроль над Кримом установився в лютому—березні 2014 року, після чого Росія оголосила півострів своєю територією. У вересні 2022 року на окупованих частинах Донецької, Луганської, Херсонської та Запорізької областей провели оголошені голосування й заявили про приєднання. Генеральна Асамблея ООН закріпила невизнання такої зміни статусу. Тривалий контроль впливає на врегулювання, але не усуває цієї позиції.',
          ],
        ),
      },
      {
        title: L('Резолюции определяют позицию, а не будущее', 'Resolutions define a position, not the future', 'Резолюції визначають позицію, а не майбутнє'),
        paragraphs: P(
          [
            'Декларация о принципах международного права 1970 года связывает территориальную целостность с запретом угрозы силой и её применения и отвергает приобретение территории в результате такого применения. Резолюция Генеральной Ассамблеи ES-11/4 от 12 октября 2022 года заявляет, что так называемые референдумы и последующая попытка аннексии не имеют юридической силы для изменения статуса областей, и призывает государства и организации не признавать это изменение.',
            'Эти документы буквально подтверждают действующую коллективную позицию и правовую оценку заявленных аннексий. Они не возвращают территорию физически, не определяют конкретный формат будущего мирного соглашения и не могут гарантировать, как проголосует каждое государство через десятилетия. Резолюция Генеральной Ассамблеи отличается от решения, которое само принудительно изменяет положение на земле. Но из отсутствия такого принуждения не следует, что её правило о непризнании лишено значения.',
          ],
          [
            'The 1970 Friendly Relations Declaration connects territorial integrity to the prohibition on the threat or use of force and rejects territorial acquisition resulting from force. UN General Assembly resolution ES-11/4 of 12 October 2022 states that the so-called referendums and attempted annexation have no legal effect on the regions’ status and calls on states and organisations not to recognise the change.',
            'These instruments establish the current collective position and legal assessment of the claimed annexations. They do not physically restore territory, prescribe a future peace format, or guarantee how every state will act decades later. A General Assembly resolution is not an order that itself compels change on the ground. The lack of such enforcement does not make its non-recognition position meaningless.',
          ],
          [
            'Декларація про принципи міжнародного права 1970 року пов’язує територіальну цілісність із забороною погрози силою та її застосування й відкидає набуття території внаслідок сили. Резолюція Генеральної Асамблеї ES-11/4 від 12 жовтня 2022 року заявляє, що так звані референдуми та спроба анексії не мають юридичної сили змінювати статус областей, і закликає держави й організації не визнавати цю зміну.',
            'Ці документи встановлюють чинну колективну позицію та правову оцінку заявлених анексій. Вони не повертають територію фізично, не визначають формат майбутнього миру й не гарантують поведінку кожної держави через десятиліття. Резолюція Генеральної Асамблеї не є наказом, який сам примусово змінює становище на землі. Але відсутність такого примусу не позбавляє політику невизнання значення.',
          ],
        ),
      },
      {
        title: L('Реализм без легализации захвата', 'Realism without legalising seizure', 'Реалізм без легалізації захоплення'),
        paragraphs: P(
          [
            'Одна трактовка исходит из того, что многолетний контроль неизбежно будет признан, потому что государства приспосабливаются к фактам. Это возможный политический прогноз, но не правило и не доказательство уже возникшего права. Противоположная трактовка боится, что любое упоминание контроля легитимирует аннексию. Она мешает оценивать гуманитарные обязанности, безопасность жителей, обмены, доступ и реальные возможности соглашения.',
            'Корректная позиция удерживает оба уровня. На подконтрольной России территории существует фактическая власть, которую нельзя игнорировать в защите людей и дипломатии. Одновременно официальные документы не признают переход суверенитета, а продолжительность контроля не содержит встроенного срока превращения факта в право. Нельзя предсказать вечное непризнание, но нельзя и объявить признание автоматическим. Оно потребовало бы новых ясных решений государств либо согласованного урегулирования, которых нынешняя ситуация сама не создаёт.',
          ],
          [
            'One reading assumes years of control will inevitably gain recognition because states adjust to facts. That is a possible political forecast, not a rule or proof of an existing right. The opposite reading fears that mentioning control legitimises annexation. It obstructs analysis of humanitarian duties, residents’ security, exchanges, access, and realistic settlement options.',
            'A sound account retains both levels. Russian-administered territory has a factual authority that cannot be ignored in protection and diplomacy. At the same time, official documents do not recognise a transfer of sovereignty, and control contains no built-in deadline for fact to become law. Neither permanent non-recognition nor automatic recognition can be predicted. A change would require new clear state decisions or an agreed settlement not created by the present situation itself.',
          ],
          [
            'Одне тлумачення вважає, що багаторічний контроль неминуче визнають, бо держави пристосовуються до фактів. Це можливий політичний прогноз, а не правило чи доказ уже наявного права. Протилежне боїться, що сама згадка про контроль легітимізує анексію. Воно заважає оцінювати гуманітарні обов’язки, безпеку мешканців, обміни, доступ і реальні варіанти врегулювання.',
            'Коректний підхід утримує обидва рівні. На території під російським управлінням існує фактична влада, яку не можна ігнорувати в захисті людей і дипломатії. Водночас офіційні документи не визнають переходу суверенітету, а тривалість контролю не має строку перетворення факту на право. Зміна потребувала б нових ясних рішень держав або погодженого врегулювання, яких нинішня ситуація сама не створює.',
          ],
        ),
      },
    ],
  },
  'crimea-transfer-procedure-needs-full-chain': {
    lead: L(
      'Спор о передаче Крымской области из РСФСР в Украинскую ССР нельзя свести к указу от 19 февраля 1954 года или к отсутствию всенародного голосования. Советская процедура состояла из нескольких актов: представлений и согласований на уровне республик, решения Президиума Верховного Совета СССР, утверждения Верховным Советом 26 апреля и изменений конституционных перечней территорий. Действовавшие нормы требовали согласия республик, но из доступных текстов не следует, что референдум был единственно допустимой формой такого согласия. Это не делает закрытую советскую процедуру демократической. Оно лишь разделяет два вопроса: соблюдение тогдашнего формального порядка и качество участия населения по современным представлениям.',
      'The transfer of the Crimean Region from the Russian SFSR to the Ukrainian SSR cannot be assessed from the decree of 19 February 1954 or the absence of a popular vote alone. The Soviet process comprised several acts: submissions and approvals at republic level, a USSR Supreme Soviet Presidium decision, Supreme Soviet approval on 26 April, and amendments to constitutional territorial lists. The applicable rules required republic consent, but the available texts do not make a referendum its only permissible form. That does not make the closed Soviet process democratic. It separates compliance with the formal rules of the time from the quality of popular participation by modern standards.',
      'Спір про передачу Кримської області з РРФСР до Української РСР не можна звести до указу від 19 лютого 1954 року або відсутності всенародного голосування. Радянська процедура складалася з кількох актів: подань і погоджень республік, рішення Президії Верховної Ради СРСР, затвердження Верховною Радою 26 квітня та змін конституційних переліків територій. Чинні норми вимагали згоди республік, але доступні тексти не роблять референдум її єдиною формою. Це не перетворює закриту радянську процедуру на демократичну, а лише розрізняє тодішній формальний порядок і сучасну оцінку участі населення.',
    ),
    sections: [
      {
        title: L('Как проверяется процедурная законность', 'How procedural legality is tested', 'Як перевіряють процедурну законність'),
        paragraphs: P(
          [
            'Для вывода о ничтожности акта нужно назвать норму, действовавшую в момент решения, орган, который её нарушил, и юридическое последствие нарушения. Современное ожидание референдума само по себе не может быть перенесено назад как обязательная процедура. Если конституция требовала согласия республик, исследование должно установить, какие органы тогда выражали такое согласие, были ли приняты их решения и как союзный уровень оформил изменение территории.',
            'Отдельно оценивается демократическая легитимность. В авторитарной системе решения представительных органов не обеспечивали свободного общественного обсуждения, конкурентного волеизъявления или непосредственного участия крымского населения. Это весомая историческая критика. Однако недемократичность всей советской системы ещё не позволяет выборочно объявить один её акт юридически несуществующим, сохранив остальные решения той же системы без самостоятельного критерия.',
          ],
          [
            'A finding of nullity requires an applicable rule, the body that breached it, and the legal consequence. A modern expectation of a referendum cannot simply be projected backwards as a mandatory procedure. If the constitution required republic consent, the inquiry must identify which bodies could express it, whether their decisions were adopted, and how the Union level formalised the territorial change.',
            'Democratic legitimacy is a separate assessment. In an authoritarian system, representative bodies did not provide free public debate, competitive choice, or direct participation by Crimea’s population. That is serious historical criticism. Yet the Soviet system’s general lack of democracy does not by itself make one selected act legally nonexistent while leaving its other decisions intact without an independent criterion.',
          ],
          [
            'Для висновку про нікчемність потрібні чинна на час рішення норма, орган, який її порушив, і юридичний наслідок. Сучасне очікування референдуму не можна просто перенести назад як обов’язкову процедуру. Якщо конституція вимагала згоди республік, слід установити, які органи тоді її висловлювали, чи ухвалили вони рішення і як союзний рівень оформив територіальну зміну.',
            'Демократична легітимність оцінюється окремо. В авторитарній системі представницькі органи не забезпечували вільної дискусії, конкурентного волевиявлення чи прямої участі населення Криму. Це вагома історична критика. Проте загальна недемократичність СРСР сама не дозволяє вибірково оголосити один акт юридично неіснуючим, зберігши решту рішень тієї ж системи без окремого критерію.',
          ],
        ),
      },
      {
        title: L('Февральский указ был не последним документом', 'The February decree was not the final instrument', 'Лютневий указ не був останнім документом'),
        paragraphs: P(
          [
            '19 февраля 1954 года Президиум Верховного Совета СССР утвердил совместное представление РСФСР и Украинской ССР о передаче области. В обосновании использовались хозяйственная общность, территориальная близость и культурные связи. Оценка мотивов, включая политический символизм юбилейного года, не заменяет анализа компетенции. Для него существенно, что процедура не остановилась на президиальном указе и была продолжена союзным законодательным органом.',
            '26 апреля 1954 года Верховный Совет СССР утвердил указ законом и внёс изменения в положения союзной конституции о составе республик. Позднее территориальные перечни республик отражали новую принадлежность области. Российское парламентское постановление 1992 года оспаривало февральский акт, но одновременно учитывало последующее конституционное оформление и предлагало решать вопрос переговорами. Тем самым даже поздний спор не сводил всю цепочку к одному документу или автоматическому возврату территории.',
          ],
          [
            'On 19 February 1954, the USSR Supreme Soviet Presidium approved the joint submission of the Russian SFSR and Ukrainian SSR transferring the region. The stated grounds included economic commonality, territorial proximity, and cultural ties. Assessing motives, including the anniversary year’s political symbolism, does not replace analysis of competence. The process did not end with the presidium decree and continued before the Union legislature.',
            'On 26 April 1954, the USSR Supreme Soviet approved the decree by law and amended Union constitutional provisions on the republics’ composition. Later territorial lists reflected the region’s new position. A 1992 Russian parliamentary resolution challenged the February act but also acknowledged later constitutional formalisation and proposed negotiation. Even that later dispute did not reduce the chain to one paper or create an automatic reversion.',
          ],
          [
            '19 лютого 1954 року Президія Верховної Ради СРСР затвердила спільне подання РРФСР та Української РСР про передачу області. Серед підстав називали господарську спільність, територіальну близькість і культурні зв’язки. Оцінка мотивів, зокрема політичного символізму ювілейного року, не замінює аналізу компетенції. Процедура не завершилася указом президії, а продовжилася на рівні союзного законодавчого органу.',
            '26 квітня 1954 року Верховна Рада СРСР затвердила указ законом і змінила союзні конституційні положення про склад республік. Пізніші територіальні переліки відображали нову належність області. Російська парламентська постанова 1992 року оскаржувала лютневий акт, але враховувала подальше конституційне оформлення й пропонувала переговори. Навіть пізня суперечка не звела ланцюг до одного паперу та не створила автоматичного повернення.',
          ],
        ),
      },
      {
        title: L('Что документы устанавливают и чего в них нет', 'What the instruments establish and omit', 'Що документи встановлюють і чого в них немає'),
        paragraphs: P(
          [
            'Указ от 19 февраля фиксирует союзное одобрение республиканского представления, а закон от 26 апреля — последующее утверждение Верховным Советом и изменение конституционного описания территорий. В совокупности они подтверждают, что передача была проведена как государственная процедура СССР, а не осталась личным устным распоряжением одного руководителя. Конституционные положения о территории дают критерий согласия республик, который надо искать во всей документальной цепочке.',
            'В этих текстах нет свободного крымского референдума и современного механизма общественных консультаций. Но в них нет и прямой нормы, объявляющей референдум единственным способом согласия для межреспубликанского изменения 1954 года. Документы также не отвечают сами по себе на современный вопрос о границе: после распада СССР возникла отдельная система актов независимости, международного признания и двусторонних отношений. Спор о советской процедуре не отменяет автоматически принятые десятилетиями позже межгосударственные обязательства.',
          ],
          [
            'The 19 February decree records Union approval of a republic-level submission; the 26 April law records later Supreme Soviet approval and amendment of the constitutional territorial description. Together they show a USSR state procedure, not a personal oral command by one leader. Constitutional territorial provisions supply a republic-consent criterion that must be traced across the whole chain.',
            'The texts contain no free Crimean referendum or modern public consultation. Nor do they expressly make a referendum the sole form of consent for an inter-republic change in 1954. They also do not alone answer the modern border question: after the USSR dissolved, a separate body of independence acts, international recognition, and bilateral relations arose. A dispute over Soviet procedure does not automatically erase later interstate obligations.',
          ],
          [
            'Указ від 19 лютого фіксує союзне схвалення республіканського подання, а закон від 26 квітня — наступне затвердження Верховною Радою та зміну конституційного опису територій. Разом вони підтверджують державну процедуру СРСР, а не особисте усне розпорядження одного керівника. Конституційні положення про територію дають критерій згоди республік, який треба простежити в усьому документальному ланцюзі.',
            'У текстах немає вільного кримського референдуму чи сучасних консультацій. Але немає й прямої норми, яка робила референдум єдиною формою згоди на міжреспубліканську зміну 1954 року. Вони також самі не вирішують сучасний кордон: після розпаду СРСР виникла окрема система актів незалежності, міжнародного визнання та двосторонніх відносин. Спір про радянську процедуру не скасовує автоматично пізніші міждержавні зобов’язання.',
          ],
        ),
      },
      {
        title: L('Между формальным актом и согласием населения', 'Between formal act and popular consent', 'Між формальним актом і згодою населення'),
        paragraphs: P(
          [
            'Одна трактовка говорит: раз референдума не было, передача никогда не существовала юридически. Ей недостаёт конкретной тогдашней нормы, которая связывала действительность именно с голосованием населения. Другая считает наличие подписей и закона исчерпывающим доказательством полной справедливости решения. Она игнорирует недемократический характер институтов, отсутствие открытого участия крымчан и возможность содержательной критики мотивов и представительства.',
            'Наиболее обоснованный вывод ограничен. Документы показывают многоступенчатое оформление и не подтверждают тезис о единственном произвольном указе. Они также показывают процедуру, далёкую от современных демократических стандартов. Историк может исследовать её мотивы и качество согласия; юрист — соответствие тогдашней компетенции. Ни один из этих ответов сам по себе не легализует захват 2014 года и не аннулирует границу после 1991-го: для современных последствий требуется самостоятельная правовая цепочка.',
          ],
          [
            'One reading says that without a referendum the transfer never existed in law. It lacks a specific rule then in force that conditioned validity on a popular vote. Another treats signatures and legislation as complete proof of fairness. It ignores undemocratic institutions, the absence of open Crimean participation, and legitimate criticism of motives and representation.',
            'The supported conclusion is limited. The documents show multi-stage formalisation and contradict the story of one arbitrary decree. They also reveal a process far from modern democratic standards. Historians may examine motives and the quality of consent; lawyers may test contemporary competence. Neither answer legalises the 2014 seizure or cancels the post-1991 border: modern effects require their own legal chain.',
          ],
          [
            'Одне тлумачення каже: без референдуму передача ніколи не існувала юридично. Йому бракує конкретної тодішньої норми, яка пов’язувала чинність саме з голосуванням населення. Інше вважає підписи й закон вичерпним доказом справедливості. Воно ігнорує недемократичність інституцій, відсутність відкритої участі кримчан і можливість змістовно критикувати мотиви та представництво.',
            'Найобґрунтованіший висновок обмежений. Документи показують багатоступеневе оформлення й спростовують розповідь про один довільний указ. Водночас процедура далека від сучасних демократичних стандартів. Історик може досліджувати мотиви та якість згоди, юрист — тодішню компетенцію. Жодна відповідь сама не легалізує захоплення 2014 року й не скасовує кордон після 1991-го: сучасні наслідки потребують окремого правового ланцюга.',
          ],
        ),
      },
    ],
  },
  'ceasefire-is-not-durable-peace': {
    lead: L(
      'Прекращение огня и устойчивый мир отвечают на два разных, хотя и связанных вопроса. Первое должно быстро уменьшить убийства и разрушения: определить, кто, где и когда останавливает удары, как разводятся силы и кто фиксирует нарушения. Второй требует порядка, при котором пауза не станет подготовкой к следующей войне: исполнимых гарантий безопасности, понятной последовательности политических решений, контроля и последствий несоблюдения. Опыт Минских договорённостей 2014–2015 годов и незавершённых стамбульских переговоров 2022-го показывает обе стороны проблемы. Нельзя требовать идеального решения всех споров до тишины, но нельзя и выдавать неподкреплённое обещание остановить огонь за завершённый мир.',
      'A ceasefire and a durable peace answer two distinct but connected questions. The first must quickly reduce killing and destruction by defining who stops which fire, where and when, how forces separate, and who verifies breaches. The second requires an order in which the pause does not prepare the next war: workable security guarantees, intelligible sequencing of political decisions, verification, and consequences for non-performance. The Minsk arrangements of 2014–2015 and unfinished Istanbul talks of 2022 expose both sides of the problem. Perfect settlement of every dispute cannot be a precondition for silence, but an unsupported promise to stop firing is not completed peace.',
      'Припинення вогню та сталий мир відповідають на два різні, хоча й пов’язані питання. Перше має швидко зменшити вбивства й руйнування: визначити, хто, де й коли припиняє удари, як розводяться сили та хто фіксує порушення. Друге потребує порядку, за якого пауза не готує наступну війну: здійсненних гарантій безпеки, зрозумілої послідовності політичних рішень, контролю й наслідків невиконання. Досвід Мінських домовленостей 2014–2015 років і незавершених стамбульських переговорів 2022-го показує обидві сторони проблеми. Не можна вимагати ідеального вирішення всіх спорів до тиші, але й непідкріплена обіцянка не є завершеним миром.',
    ),
    sections: [
      {
        title: L('Два горизонта проверки соглашения', 'Two horizons for testing an agreement', 'Два горизонти перевірки угоди'),
        paragraphs: P(
          [
            'Краткосрочный тест измеряет непосредственное снижение насилия. Соглашение должно назвать момент начала режима, географию, запрещённые действия, порядок отвода или разведения, связь между командованиями и независимое наблюдение. Важен механизм реакции на инцидент: как отличают случайный выстрел от систематического нарушения и кто возвращает стороны к соблюдению. Даже ограниченная договорённость ценна, если она реально спасает людей и допускает гуманитарный доступ.',
            'Долгосрочный тест спрашивает, почему стороны не возобновят войну после перегруппировки. Здесь нужны распределение рисков, гарантии, проверяемые этапы, политический процесс и цена нарушения. Устойчивость не означает, что все исторические обиды исчезнут или стороны примут один рассказ о причинах. Она означает, что правила делают новое применение силы менее выгодным и более обнаружимым, а спор может продолжаться без массового насилия. Оба теста требуют наблюдаемых показателей, а не только торжественного названия документа.',
          ],
          [
            'The short-term test measures immediate reduction of violence. An agreement should state its start time, geography, prohibited conduct, withdrawal or separation procedures, command communication, and independent observation. It needs an incident process: how an accidental shot is distinguished from a systematic breach and how compliance is restored. Even a limited arrangement is valuable if it actually saves lives and enables humanitarian access.',
            'The long-term test asks why the parties will not regroup and resume war. It requires risk allocation, guarantees, verifiable stages, a political process, and costs for breach. Durability does not mean erasing historical grievances or accepting one causal narrative. It means rules make renewed force less attractive and more detectable while allowing disputes without mass violence. Both tests need observable indicators, not merely a solemn document title.',
          ],
          [
            'Короткострокова перевірка вимірює негайне зниження насильства. Угода має визначити початок режиму, географію, заборонені дії, порядок відведення чи розведення, зв’язок командувань і незалежне спостереження. Потрібен механізм реагування: як відрізняють випадковий постріл від системного порушення та повертають сторони до виконання. Навіть обмежена домовленість цінна, якщо справді рятує людей і забезпечує гуманітарний доступ.',
            'Довгострокова перевірка питає, чому сторони не перегрупуються й не відновлять війну. Потрібні розподіл ризиків, гарантії, перевірні етапи, політичний процес і ціна порушення. Стійкість не означає зникнення історичних образ або єдину розповідь про причини. Вона означає правила, що роблять нову силу менш вигідною та помітнішою, дозволяючи спір без масового насильства. Обидва тести потребують спостережуваних показників.',
          ],
        ),
      },
      {
        title: L('Минск и Стамбул как разные незавершённые попытки', 'Minsk and Istanbul as different unfinished attempts', 'Мінськ і Стамбул як різні незавершені спроби'),
        paragraphs: P(
          [
            'Минский протокол 5 сентября 2014 года ввёл рамку прекращения огня в Донбассе, а Комплекс мер от 12 февраля 2015 года связал немедленную тишину с отводом тяжёлых вооружений, наблюдением ОБСЕ, обменом удерживаемых лиц, местными выборами, конституционными шагами и восстановлением контроля над границей. Стороны по-разному понимали последовательность безопасности и политики. Продолжавшиеся нарушения и спор об исполнении показали, что перечислить этапы недостаточно без доверия, доступа наблюдателей и действенной реакции на срыв.',
            '29 марта 2022 года в Стамбуле украинская делегация представила предложения о нейтральном статусе и международных гарантиях после полномасштабного вторжения 24 февраля. Это был более широкий поиск будущего устройства, но подписанного прекращения огня по итогам встречи не возникло, и боевые действия продолжились. Минск показывает трудность выполнения уже зафиксированной последовательности; Стамбул — дистанцию между предложением о политическом порядке и действующим соглашением. Их нельзя считать одинаковыми, но оба случая требуют проверять исполнение отдельно от текста намерений.',
          ],
          [
            'The Minsk Protocol of 5 September 2014 framed a Donbas ceasefire. The Package of Measures of 12 February 2015 linked immediate silence to heavy-weapons withdrawal, OSCE monitoring, exchanges, local elections, constitutional steps, and restoration of border control. The parties understood the security-political sequence differently. Continuing breaches and implementation disputes showed that listing stages is insufficient without trust, observer access, and an effective response to failure.',
            'On 29 March 2022 in Istanbul, Ukraine’s delegation presented proposals for neutral status and international guarantees after the full-scale invasion of 24 February. This was a broader search for a future order, but no signed ceasefire resulted and hostilities continued. Minsk illustrates difficulty implementing a recorded sequence; Istanbul illustrates the distance between a political-order proposal and an operative agreement. They differ, but each requires performance to be tested separately from stated intent.',
          ],
          [
            'Мінський протокол 5 вересня 2014 року створив рамку припинення вогню на Донбасі, а Комплекс заходів від 12 лютого 2015 року пов’язав тишу з відведенням важких озброєнь, моніторингом ОБСЄ, обмінами, місцевими виборами, конституційними кроками та відновленням контролю над кордоном. Сторони по-різному розуміли послідовність безпеки й політики. Порушення та спір про виконання показали, що переліку етапів недостатньо без довіри, доступу спостерігачів і дієвої реакції.',
            '29 березня 2022 року в Стамбулі українська делегація представила пропозиції про нейтральний статус і міжнародні гарантії після вторгнення 24 лютого. Це був ширший пошук майбутнього устрою, але підписаного припинення вогню не виникло, і бойові дії тривали. Мінськ показує складність виконання зафіксованої послідовності; Стамбул — відстань між пропозицією політичного порядку та чинною угодою. В обох випадках виконання перевіряють окремо від намірів.',
          ],
        ),
      },
      {
        title: L('Как читать перечень обязательств', 'How to read a list of obligations', 'Як читати перелік зобов’язань'),
        paragraphs: P(
          [
            'Комплекс мер буквально задаёт взаимосвязанные военные и политические действия и отводит ОБСЕ роль наблюдения. Он полезен для проверки: можно спросить, состоялся ли отвод, был ли доступ, произошло ли освобождение людей и выполнены ли согласованные политические шаги. Но документ не является самовыполняющимся устройством принуждения. Сам перечень не устраняет разногласия о порядке этапов, участниках конфликта, статусе территорий и ответственности за каждое нарушение.',
            'Стамбульские официальные сообщения буквально подтверждают предложения и предмет переговоров, а не принятую всеми конструкцию гарантий. Они не содержат вступившего в силу механизма, который автоматически останавливал бы огонь и наказывал нарушение. Поэтому документ надо читать по глаголам и статусу: «предложила», «обсудили» и «согласились изучить» слабее, чем «обязуются» в подписанном акте. Даже последнее требует ответов о контроле, сроках, ресурсах и последствиях невыполнения.',
          ],
          [
            'The Package of Measures literally sets interconnected military and political actions and assigns monitoring to the OSCE. It allows concrete checks: whether withdrawal occurred, access was granted, people were released, and agreed political steps were taken. But it is not a self-executing enforcement machine. A list does not eliminate disagreement over sequencing, participants, territorial status, or responsibility for each breach.',
            'Official Istanbul communications establish proposals and negotiating subjects, not a guarantee structure accepted by all. They contain no operative mechanism automatically stopping fire or penalising breach. Documents should therefore be read through verbs and status: “proposed,” “discussed,” and “agreed to examine” are weaker than “shall” in a signed instrument. Even the latter still needs answers on monitoring, time, resources, and consequences.',
          ],
          [
            'Комплекс заходів буквально встановлює взаємопов’язані військові й політичні дії та надає ОБСЄ роль моніторингу. Він дозволяє перевіряти, чи відбулося відведення, чи був доступ, чи звільнили людей і виконали погоджені політичні кроки. Але документ не є самовиконуваним механізмом примусу. Перелік не усуває розбіжностей щодо послідовності, учасників, статусу територій і відповідальності за кожне порушення.',
            'Офіційні стамбульські повідомлення підтверджують пропозиції та предмет переговорів, а не прийняту всіма конструкцію гарантій. Вони не містять чинного механізму автоматичної зупинки вогню та покарання за порушення. Тому слід читати дієслова й статус: «запропонувала», «обговорили» та «погодилися вивчити» слабші за «зобов’язуються» у підписаному акті. Навіть останнє потребує контролю, строків, ресурсів і наслідків.',
          ],
        ),
      },
      {
        title: L('Не выбирать между спасением сегодня и безопасностью завтра', 'Do not choose between lives today and security tomorrow', 'Не обирати між порятунком сьогодні та безпекою завтра'),
        paragraphs: P(
          [
            'Одна позиция требует немедленной остановки огня независимо от долгосрочного устройства: каждый день промедления означает новые жертвы. Это сильный гуманитарный довод, но слабое соглашение может дать время для перегруппировки и увеличить будущий ущерб. Противоположная позиция отказывается от любой паузы, пока не решены территория, гарантии, ответственность и политическое устройство. Требование совершенства способно сделать прекращение насилия практически недостижимым.',
            'Рабочий вывод соединяет два горизонта. Срочное соглашение следует оценивать по реальному снижению огня, наблюдаемости и гуманитарным результатам; параллельно нужен путь к более устойчивому порядку с этапами, гарантиями и пересмотром при нарушении. Из неудачи Минска нельзя вывести бесполезность каждого прекращения огня, а из ценности тишины — достаточность любого предложения. Мирная инициатива заслуживает поддержки не за название, а когда одновременно уменьшает нынешний вред и не скрывает проверку риска новой эскалации.',
          ],
          [
            'One position demands an immediate ceasefire regardless of long-term arrangements because every delay costs lives. That is a powerful humanitarian case, but a weak deal may permit regrouping and magnify later harm. The opposite position rejects any pause until territory, guarantees, accountability, and political order are resolved. A demand for perfection can make reduction of violence unattainable.',
            'A workable conclusion joins both horizons. An urgent agreement should be measured by actual reduction of fire, observability, and humanitarian outcomes, while a path toward durable order adds stages, guarantees, and review after breach. Minsk’s failure does not prove every ceasefire useless; the value of silence does not make every proposal sufficient. A peace initiative merits support when it reduces present harm and openly tests the risk of renewed escalation.',
          ],
          [
            'Одна позиція вимагає негайного припинення вогню незалежно від довгострокового устрою, бо кожен день зволікання коштує життів. Це сильний гуманітарний аргумент, але слабка угода може дати час на перегрупування й збільшити майбутню шкоду. Протилежна позиція відкидає паузу, доки не вирішено території, гарантії, відповідальність і політичний порядок. Вимога досконалості може зробити зниження насильства недосяжним.',
            'Робочий висновок поєднує два горизонти. Термінову угоду слід оцінювати за реальним зменшенням вогню, спостережуваністю й гуманітарними наслідками; паралельно потрібен шлях до сталого порядку з етапами, гарантіями та переглядом після порушення. Невдача Мінська не доводить марність кожного припинення вогню, а цінність тиші — достатність будь-якої пропозиції. Ініціатива варта підтримки, коли зменшує нинішню шкоду й відкрито перевіряє ризик нової ескалації.',
          ],
        ),
      },
    ],
  },
}
