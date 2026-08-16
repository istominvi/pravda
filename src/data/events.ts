import type { EventRecord } from '../domain/types'

export const events = [
  {
    "id": "un-charter",
    "date": "1945-06-26",
    "lane": 0,
    "title": {
      "ru": "Устав ООН",
      "en": "UN Charter",
      "uk": "Статут ООН"
    },
    "short": {
      "ru": "Базовые правила о силе, суверенитете и самообороне.",
      "en": "Core rules on force, sovereignty and self-defence.",
      "uk": "Базові правила щодо сили, суверенітету та самооборони."
    },
    "lead": {
      "ru": "Точка отсчёта для большинства международно-правовых споров о войне: запрет угрозы силой, суверенное равенство государств и право на самооборону.",
      "en": "The baseline for most legal disputes about war: the prohibition on the threat or use of force, sovereign equality and the right of self-defence.",
      "uk": "Точка відліку для більшості міжнародно-правових суперечок про війну: заборона погрози силою, суверенна рівність і право на самооборону."
    },
    "context": {
      "ru": [
        "Устав был подписан 26 июня 1945 года и вступил в силу 24 октября 1945 года. Его нормы задают общий каркас, внутри которого оцениваются последующие договоры, решения и действия государств."
      ],
      "en": [
        "The Charter was signed on 26 June 1945 and entered into force on 24 October 1945. It provides the general framework for assessing later treaties, decisions and state conduct."
      ],
      "uk": [
        "Статут підписали 26 червня 1945 року, а чинності він набув 24 жовтня 1945 року. Його норми задають рамку для оцінки наступних договорів, рішень і дій держав."
      ]
    },
    "dispute": {
      "ru": [
        "В споре стороны часто ссылаются на отдельный принцип — самоопределение, самооборону или безопасность — не показывая, как он соотносится с запретом применения силы и территориальной целостностью."
      ],
      "en": [
        "Debaters often isolate one principle—self-determination, self-defence or security—without showing how it fits with the prohibition on force and territorial integrity."
      ],
      "uk": [
        "У суперечці сторони часто відокремлюють один принцип — самовизначення, самооборону чи безпеку — не пояснюючи його співвідношення із забороною сили та територіальною цілісністю."
      ]
    },
    "checks": {
      "ru": [
        "Какую именно статью цитирует собеседник.",
        "Идёт ли речь о юридическом исключении или политическом объяснении.",
        "Признаёт ли аргумент одинаковый стандарт для всех государств."
      ],
      "en": [
        "Which article is actually being cited.",
        "Whether the claim is a legal exception or a political explanation.",
        "Whether the same standard is applied to every state."
      ],
      "uk": [
        "Яку саме статтю цитує співрозмовник.",
        "Чи йдеться про юридичний виняток, чи про політичне пояснення.",
        "Чи застосовується однаковий стандарт до всіх держав."
      ]
    },
    "meta": {
      "place": {
        "ru": "Сан-Франциско / международный уровень",
        "en": "San Francisco / international",
        "uk": "Сан-Франциско / міжнародний рівень"
      },
      "actors": {
        "ru": "Государства — члены ООН",
        "en": "UN member states",
        "uk": "Держави — члени ООН"
      },
      "status": {
        "ru": "Действующий учредительный договор",
        "en": "Founding treaty in force",
        "uk": "Чинний установчий договір"
      }
    },
    "tags": [
      "международное право",
      "сила",
      "суверенитет"
    ],
    "sources": [
      {
        "title": "Устав Организации Объединённых Наций",
        "institution": "ООН",
        "url": "https://www.un.org/en/about-us/un-charter/full-text"
      }
    ],
    "media": []
  },
  {
    "id": "budapest",
    "date": "1994-12-05",
    "lane": 0,
    "title": {
      "ru": "Будапештский меморандум",
      "en": "Budapest Memorandum",
      "uk": "Будапештський меморандум"
    },
    "short": {
      "ru": "Заверения Украине после отказа от ядерного оружия.",
      "en": "Assurances to Ukraine after nuclear disarmament.",
      "uk": "Запевнення Україні після відмови від ядерної зброї."
    },
    "lead": {
      "ru": "Документ, вокруг которого спорят о разнице между политическими заверениями, юридическими обязательствами и автоматической военной гарантией.",
      "en": "A document at the centre of disputes over political assurances, legal obligations and automatic military guarantees.",
      "uk": "Документ у центрі суперечки про різницю між політичними запевненнями, юридичними зобов’язаннями та автоматичною військовою гарантією."
    },
    "context": {
      "ru": [
        "5 декабря 1994 года Украина, Россия, США и Великобритания подписали меморандум в связи с присоединением Украины к Договору о нераспространении ядерного оружия.",
        "В тексте есть заверения уважать независимость, суверенитет и существующие границы Украины, воздерживаться от угрозы силой и проводить консультации."
      ],
      "en": [
        "On 5 December 1994 Ukraine, Russia, the United States and the United Kingdom signed the memorandum in connection with Ukraine joining the Nuclear Non-Proliferation Treaty.",
        "Its text includes assurances to respect Ukraine’s independence, sovereignty and existing borders, refrain from the threat or use of force, and consult."
      ],
      "uk": [
        "5 грудня 1994 року Україна, Росія, США та Велика Британія підписали меморандум у зв’язку з приєднанням України до Договору про нерозповсюдження ядерної зброї.",
        "Текст містить запевнення поважати незалежність, суверенітет і чинні кордони України, утримуватися від погрози силою та проводити консультації."
      ]
    },
    "dispute": {
      "ru": [
        "Одна крайность превращает меморандум в аналог статьи 5 НАТО. Другая объявляет его «просто бумажкой». Текст не содержит автоматического механизма ввода войск, но это не отменяет записанных заверений."
      ],
      "en": [
        "One extreme treats the memorandum as NATO Article 5; the other calls it meaningless paper. It contains no automatic troop-deployment mechanism, but that does not erase the assurances it records."
      ],
      "uk": [
        "Одна крайність прирівнює меморандум до статті 5 НАТО, інша називає його «просто папірцем». Автоматичного механізму введення військ немає, але записані запевнення від цього не зникають."
      ]
    },
    "checks": {
      "ru": [
        "Какой конкретный пункт считается нарушенным.",
        "Утверждается ли обязанность воевать или обязанность соблюдать записанное заверение.",
        "Не смешиваются ли регистрация документа, его политический вес и механизм принуждения."
      ],
      "en": [
        "Which specific paragraph is alleged to have been breached.",
        "Whether the claim concerns a duty to fight or a duty to honour a recorded assurance.",
        "Whether registration, political weight and enforcement are being conflated."
      ],
      "uk": [
        "Який конкретний пункт вважають порушеним.",
        "Чи йдеться про обов’язок воювати, чи про обов’язок дотримуватися записаного запевнення.",
        "Чи не змішують реєстрацію, політичну вагу та механізм примусу."
      ]
    },
    "meta": {
      "place": {
        "ru": "Будапешт / международный уровень",
        "en": "Budapest / international",
        "uk": "Будапешт / міжнародний рівень"
      },
      "actors": {
        "ru": "Украина, Россия, США, Великобритания",
        "en": "Ukraine, Russia, United States, United Kingdom",
        "uk": "Україна, Росія, США, Велика Британія"
      },
      "status": {
        "ru": "Подписанный меморандум",
        "en": "Signed memorandum",
        "uk": "Підписаний меморандум"
      }
    },
    "tags": [
      "гарантии",
      "ядерное разоружение",
      "границы"
    ],
    "sources": [
      {
        "title": "Будапештский меморандум — запись и текст",
        "institution": "UN Treaty Collection",
        "url": "https://treaties.un.org/Pages/showDetails.aspx?objid=0800000280401fbb"
      },
      {
        "title": "Будапештский меморандум — карточка документа",
        "institution": "UN Digital Library",
        "url": "https://digitallibrary.un.org/record/169471"
      }
    ],
    "media": [
      {
        "type": "channelVideo",
        "title": "США являются гарантом территориальной целостности Украины?",
        "url": "https://rutube.ru/video/bc3ab6d8a9b0abbf61f92e76be6d4fa9/"
      },
      {
        "type": "channelVideo",
        "title": "Можно ли доверять договорам с Москвой?",
        "url": "https://rutube.ru/video/9b9b9e2d85ea75c63073102cf7ff7f0a/"
      }
    ]
  },
  {
    "id": "nato-russia-act",
    "date": "1997-05-27",
    "lane": 1,
    "title": {
      "ru": "Основополагающий акт Россия — НАТО",
      "en": "NATO–Russia Founding Act",
      "uk": "Основоположний акт Росія — НАТО"
    },
    "short": {
      "ru": "Попытка оформить отношения и общую безопасность после холодной войны.",
      "en": "An attempt to frame relations and common security after the Cold War.",
      "uk": "Спроба оформити відносини та спільну безпеку після холодної війни."
    },
    "lead": {
      "ru": "Документ фиксировал намерение строить отношения без конфронтации и создавал механизмы консультаций между Россией и НАТО.",
      "en": "The document recorded an intention to build a non-confrontational relationship and created consultation mechanisms between Russia and NATO.",
      "uk": "Документ фіксував намір будувати відносини без конфронтації та створював механізми консультацій між Росією і НАТО."
    },
    "context": {
      "ru": [
        "Акт был подписан в Париже 27 мая 1997 года. Он говорил о сотрудничестве, консультациях и принципах безопасности в Европе."
      ],
      "en": [
        "The Act was signed in Paris on 27 May 1997. It addressed cooperation, consultation and principles of European security."
      ],
      "uk": [
        "Акт підписали в Парижі 27 травня 1997 року. Він стосувався співпраці, консультацій і принципів європейської безпеки."
      ]
    },
    "dispute": {
      "ru": [
        "Его используют и как доказательство обещанной модели общей безопасности, и как пример того, что политические формулы не остановили последующее ухудшение отношений."
      ],
      "en": [
        "It is cited both as evidence of a promised common-security model and as proof that political formulas failed to prevent later deterioration."
      ],
      "uk": [
        "Його використовують і як доказ обіцяної моделі спільної безпеки, і як приклад того, що політичні формули не зупинили подальше погіршення відносин."
      ]
    },
    "checks": {
      "ru": [
        "Какая формулировка документа приводится дословно.",
        "Было ли заявлено юридическое вето на расширение НАТО.",
        "Какие последующие решения изменили политический контекст."
      ],
      "en": [
        "Which wording is being quoted verbatim.",
        "Whether the text created a legal veto over NATO enlargement.",
        "Which later decisions changed the political context."
      ],
      "uk": [
        "Яке формулювання документа цитують дослівно.",
        "Чи створював текст юридичне вето на розширення НАТО.",
        "Які наступні рішення змінили політичний контекст."
      ]
    },
    "meta": {
      "place": {
        "ru": "Париж / Россия — НАТО",
        "en": "Paris / NATO–Russia",
        "uk": "Париж / Росія — НАТО"
      },
      "actors": {
        "ru": "Российская Федерация и НАТО",
        "en": "Russian Federation and NATO",
        "uk": "Російська Федерація та НАТО"
      },
      "status": {
        "ru": "Политико-правовой рамочный акт",
        "en": "Political and legal framework act",
        "uk": "Політико-правовий рамковий акт"
      }
    },
    "tags": [
      "НАТО",
      "Россия",
      "безопасность"
    ],
    "sources": [
      {
        "title": "Founding Act on Mutual Relations, Cooperation and Security between NATO and the Russian Federation",
        "institution": "NATO",
        "url": "https://www.nato.int/en/about-us/official-texts-and-resources/official-texts/1997/05/27/founding-act"
      }
    ],
    "media": []
  },
  {
    "id": "bucharest",
    "date": "2008-04-03",
    "lane": 0,
    "title": {
      "ru": "Бухарестский саммит НАТО",
      "en": "NATO Bucharest Summit",
      "uk": "Бухарестський саміт НАТО"
    },
    "short": {
      "ru": "Формула о будущем членстве Украины и Грузии.",
      "en": "The formula on future membership for Ukraine and Georgia.",
      "uk": "Формула про майбутнє членство України та Грузії."
    },
    "lead": {
      "ru": "В декларации саммита союзники заявили, что Украина и Грузия станут членами НАТО, не установив дату и не предоставив план действий по членству.",
      "en": "The summit declaration stated that Ukraine and Georgia would become NATO members, without setting a date or granting a Membership Action Plan.",
      "uk": "У декларації саміту союзники заявили, що Україна та Грузія стануть членами НАТО, не встановивши дату й не надавши План дій щодо членства."
    },
    "context": {
      "ru": [
        "Саммит прошёл 2–4 апреля 2008 года. Формула о будущем членстве стала важной частью последующих споров о расширении НАТО и безопасности России."
      ],
      "en": [
        "The summit took place on 2–4 April 2008. Its future-membership formula became central to later disputes over NATO enlargement and Russian security."
      ],
      "uk": [
        "Саміт відбувся 2–4 квітня 2008 року. Формула про майбутнє членство стала важливою для подальших суперечок щодо розширення НАТО та безпеки Росії."
      ]
    },
    "dispute": {
      "ru": [
        "Для одной стороны это подтверждение суверенного права выбирать союз. Для другой — закрепление стратегической траектории, воспринимавшейся как угроза. Восприятие угрозы объясняет мотивацию, но само по себе не создаёт юридического права применять силу."
      ],
      "en": [
        "For one side it confirms a sovereign right to choose alliances; for the other it fixed a strategic trajectory perceived as threatening. Perceived threat may explain motivation but does not by itself create a legal right to use force."
      ],
      "uk": [
        "Для однієї сторони це підтвердження суверенного права обирати союз. Для іншої — закріплення стратегічної траєкторії, сприйнятої як загроза. Сприйняття загрози пояснює мотивацію, але саме по собі не створює юридичного права застосовувати силу."
      ]
    },
    "checks": {
      "ru": [
        "Была ли указана дата вступления.",
        "Чем политическое обещание отличается от гарантии безопасности.",
        "Как соотносятся право выбирать союз и принцип неделимой безопасности."
      ],
      "en": [
        "Whether an accession date was set.",
        "How a political promise differs from a security guarantee.",
        "How alliance choice relates to the principle of indivisible security."
      ],
      "uk": [
        "Чи була визначена дата вступу.",
        "Чим політична обіцянка відрізняється від гарантії безпеки.",
        "Як співвідносяться право обирати союз і принцип неподільної безпеки."
      ]
    },
    "meta": {
      "place": {
        "ru": "Бухарест / НАТО",
        "en": "Bucharest / NATO",
        "uk": "Бухарест / НАТО"
      },
      "actors": {
        "ru": "Государства — члены НАТО, Украина, Грузия",
        "en": "NATO members, Ukraine, Georgia",
        "uk": "Держави — члени НАТО, Україна, Грузія"
      },
      "status": {
        "ru": "Декларация саммита",
        "en": "Summit declaration",
        "uk": "Декларація саміту"
      }
    },
    "tags": [
      "НАТО",
      "расширение",
      "безопасность"
    ],
    "sources": [
      {
        "title": "Bucharest Summit Declaration",
        "institution": "NATO",
        "url": "https://www.nato.int/en/about-us/official-texts-and-resources/official-texts/2008/04/03/bucharest-summit-declaration"
      }
    ],
    "media": []
  },
  {
    "id": "astana",
    "date": "2010-12-03",
    "lane": 1,
    "title": {
      "ru": "Астанинская декларация ОБСЕ",
      "en": "OSCE Astana Declaration",
      "uk": "Астанинська декларація ОБСЄ"
    },
    "short": {
      "ru": "Свободный выбор союзов и неделимая безопасность в одном тексте.",
      "en": "Alliance choice and indivisible security in one text.",
      "uk": "Вільний вибір союзів і неподільна безпека в одному тексті."
    },
    "lead": {
      "ru": "Декларация объединяет два принципа, которые в политических спорах часто цитируют по отдельности: право государств выбирать механизмы безопасности и обязанность не укреплять свою безопасность за счёт других.",
      "en": "The declaration combines two principles often quoted separately: a state’s right to choose its security arrangements and the duty not to strengthen security at others’ expense.",
      "uk": "Декларація поєднує два принципи, які в політичних суперечках часто цитують окремо: право держав обирати механізми безпеки та обов’язок не зміцнювати свою безпеку коштом інших."
    },
    "context": {
      "ru": [
        "Документ принят на саммите ОБСЕ 3 декабря 2010 года и подтверждает комплекс принципов общеевропейской безопасности."
      ],
      "en": [
        "The document was adopted at the OSCE summit on 3 December 2010 and reaffirmed a set of principles for Euro-Atlantic and Eurasian security."
      ],
      "uk": [
        "Документ ухвалили на саміті ОБСЄ 3 грудня 2010 року; він підтвердив комплекс принципів загальноєвропейської безпеки."
      ]
    },
    "dispute": {
      "ru": [
        "Спор возникает, когда одна сторона цитирует только свободу выбора союзов, а другая — только неделимость безопасности. Для аккуратного анализа нужны обе части и вопрос о том, как они реализуются на практике."
      ],
      "en": [
        "The dispute arises when one side cites only alliance choice and the other only indivisible security. Careful analysis requires both and a practical account of how they interact."
      ],
      "uk": [
        "Суперечка виникає, коли одна сторона цитує лише свободу вибору союзів, а інша — лише неподільність безпеки. Коректний аналіз потребує обох частин і пояснення їх практичної взаємодії."
      ]
    },
    "checks": {
      "ru": [
        "Цитируется ли весь связанный абзац.",
        "Юридический или политический характер имеет декларация.",
        "Какие действия стороны считают нарушением принципа неделимой безопасности."
      ],
      "en": [
        "Whether the full connected paragraph is quoted.",
        "Whether the declaration is being treated as legal or political.",
        "Which acts are alleged to violate indivisible security."
      ],
      "uk": [
        "Чи цитують увесь пов’язаний абзац.",
        "Який характер має декларація — юридичний чи політичний.",
        "Які дії сторони вважають порушенням принципу неподільної безпеки."
      ]
    },
    "meta": {
      "place": {
        "ru": "Астана / ОБСЕ",
        "en": "Astana / OSCE",
        "uk": "Астана / ОБСЄ"
      },
      "actors": {
        "ru": "Государства — участники ОБСЕ",
        "en": "OSCE participating States",
        "uk": "Держави — учасниці ОБСЄ"
      },
      "status": {
        "ru": "Политическая декларация",
        "en": "Political declaration",
        "uk": "Політична декларація"
      }
    },
    "tags": [
      "ОБСЕ",
      "альянсы",
      "неделимая безопасность"
    ],
    "sources": [
      {
        "title": "Astana Commemorative Declaration: Towards a Security Community",
        "institution": "OSCE",
        "url": "https://www.osce.org/cio/74236"
      }
    ],
    "media": []
  },
  {
    "id": "power-2014",
    "date": "2014-02-22",
    "lane": 0,
    "title": {
      "ru": "Смена власти в Киеве",
      "en": "Change of power in Kyiv",
      "uk": "Зміна влади в Києві"
    },
    "short": {
      "ru": "Постановление Рады, прекращение исполнения полномочий Януковичем и досрочные выборы.",
      "en": "The Rada resolution, Yanukovych ceasing to perform his duties and an early election.",
      "uk": "Постанова Ради, припинення виконання повноважень Януковичем і дострокові вибори."
    },
    "lead": {
      "ru": "Один из главных узлов хронологии 2014 года: была ли смена власти конституционной процедурой, революционным переходом или государственным переворотом.",
      "en": "A central node in the chronology of 2014: whether the transfer of power was a constitutional procedure, a revolutionary transition or a coup.",
      "uk": "Один із головних вузлів хронології 2014 року: чи була зміна влади конституційною процедурою, революційним переходом або державним переворотом."
    },
    "context": {
      "ru": [
        "22 февраля 2014 года Верховная Рада приняла постановление, в котором указала, что Виктор Янукович неконституционным образом самоустранился от исполнения полномочий, и назначила досрочные президентские выборы.",
        "Спор о юридической форме этого решения необходимо отделять от вопроса о фактической непрерывности институтов и последующей электоральной легитимации."
      ],
      "en": [
        "On 22 February 2014 the Verkhovna Rada adopted a resolution stating that Viktor Yanukovych had withdrawn from performing his constitutional duties and scheduled an early presidential election.",
        "The dispute over the legal form of that decision should be separated from institutional continuity and later electoral legitimation."
      ],
      "uk": [
        "22 лютого 2014 року Верховна Рада ухвалила постанову, в якій зазначила, що Віктор Янукович самоусунувся від виконання конституційних повноважень, і призначила дострокові президентські вибори.",
        "Суперечку про юридичну форму рішення слід відокремлювати від фактичної безперервності інститутів і подальшої електоральної легітимації."
      ]
    },
    "dispute": {
      "ru": [
        "Термины «революция», «переворот» и «конституционная смена власти» описывают разные уровни события. Один вопрос — соблюдена ли предусмотренная Конституцией процедура прекращения полномочий; другой — существовало ли государство и были ли последующие выборы признаны."
      ],
      "en": [
        "“Revolution,” “coup” and “constitutional transfer” address different levels of the event. One question is whether the constitutional removal procedure was followed; another is whether state institutions continued and later elections were recognised."
      ],
      "uk": [
        "Терміни «революція», «переворот» і «конституційна зміна влади» описують різні рівні події. Одне питання — чи дотрималися конституційної процедури припинення повноважень; інше — чи зберігалася держава і чи були визнані наступні вибори."
      ]
    },
    "checks": {
      "ru": [
        "Какая статья Конституции применялась или не применялась.",
        "Что именно установило постановление № 757-VII.",
        "Не подменяется ли юридический вопрос политической оценкой протестов."
      ],
      "en": [
        "Which constitutional article was or was not applied.",
        "What Resolution No. 757-VII actually stated.",
        "Whether a legal question is being replaced by a political judgement about the protests."
      ],
      "uk": [
        "Яку статтю Конституції застосували або не застосували.",
        "Що саме встановила постанова № 757-VII.",
        "Чи не підміняють юридичне питання політичною оцінкою протестів."
      ]
    },
    "meta": {
      "place": {
        "ru": "Киев / государственная власть",
        "en": "Kyiv / state power",
        "uk": "Київ / державна влада"
      },
      "actors": {
        "ru": "Верховная Рада, Виктор Янукович, органы власти",
        "en": "Verkhovna Rada, Viktor Yanukovych, state institutions",
        "uk": "Верховна Рада, Віктор Янукович, органи влади"
      },
      "status": {
        "ru": "Постановление и переходный период",
        "en": "Resolution and transitional period",
        "uk": "Постанова та перехідний період"
      }
    },
    "tags": [
      "2014",
      "Майдан",
      "Конституция"
    ],
    "sources": [
      {
        "title": "Постановление Верховной Рады № 757-VII",
        "institution": "Верховная Рада Украины",
        "url": "https://zakon.rada.gov.ua/laws/show/757-18?lang=en"
      },
      {
        "title": "Конституция Украины",
        "institution": "Верховная Рада Украины",
        "url": "https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80?lang=en"
      }
    ],
    "media": []
  },
  {
    "id": "crimea",
    "date": "2014-03-16",
    "lane": 1,
    "title": {
      "ru": "Крымский референдум",
      "en": "Crimea referendum",
      "uk": "Кримський референдум"
    },
    "short": {
      "ru": "Самоопределение, конституционная процедура и статус территории.",
      "en": "Self-determination, constitutional procedure and territorial status.",
      "uk": "Самовизначення, конституційна процедура та статус території."
    },
    "lead": {
      "ru": "Событие, где необходимо разделять мнение населения, условия голосования, украинскую конституционную процедуру и международно-правовой статус территории.",
      "en": "An event requiring separation of public preference, voting conditions, Ukrainian constitutional procedure and the territory’s international legal status.",
      "uk": "Подія, де потрібно розділяти думку населення, умови голосування, українську конституційну процедуру та міжнародно-правовий статус території."
    },
    "context": {
      "ru": [
        "16 марта 2014 года в Крыму провели голосование о статусе полуострова. 18 марта Россия подписала договор о принятии Крыма и Севастополя.",
        "Венецианская комиссия заключила, что местный референдум об изменении территории не соответствовал Конституции Украины и что обстоятельства не позволяли провести голосование по демократическим стандартам."
      ],
      "en": [
        "A vote on Crimea’s status was held on 16 March 2014. On 18 March Russia signed a treaty admitting Crimea and Sevastopol.",
        "The Venice Commission concluded that a local referendum altering territory was incompatible with Ukraine’s Constitution and that the circumstances did not allow a vote meeting democratic standards."
      ],
      "uk": [
        "16 березня 2014 року в Криму провели голосування щодо статусу півострова. 18 березня Росія підписала договір про прийняття Криму та Севастополя.",
        "Венеційська комісія дійшла висновку, що місцевий референдум про зміну території не відповідав Конституції України, а обставини не дозволяли провести голосування за демократичними стандартами."
      ]
    },
    "dispute": {
      "ru": [
        "Ссылка только на волю населения не отвечает на вопросы о применении силы и процедуре. Ссылка только на процедуру не отвечает на вопрос о политических настроениях населения. Эти уровни связаны, но не взаимозаменяемы."
      ],
      "en": [
        "Public will alone does not answer questions about force and procedure; procedure alone does not answer questions about public attitudes. The levels are connected but not interchangeable."
      ],
      "uk": [
        "Посилання лише на волю населення не відповідає на питання про застосування сили й процедуру. Посилання лише на процедуру не відповідає на питання про політичні настрої. Ці рівні пов’язані, але не взаємозамінні."
      ]
    },
    "checks": {
      "ru": [
        "Какой орган имел полномочия менять территорию Украины.",
        "В каких условиях проходило голосование.",
        "Что именно признала или не признала Генеральная Ассамблея ООН.",
        "Не заменяется ли юридический статус сравнением с другим прецедентом."
      ],
      "en": [
        "Which body had authority to alter Ukraine’s territory.",
        "Under what conditions the vote was held.",
        "What the UN General Assembly did and did not recognise.",
        "Whether a legal status question is being replaced by analogy to another precedent."
      ],
      "uk": [
        "Який орган мав повноваження змінювати територію України.",
        "За яких умов відбувалося голосування.",
        "Що саме визнала або не визнала Генеральна Асамблея ООН.",
        "Чи не підмінюють юридичний статус аналогією з іншим прецедентом."
      ]
    },
    "meta": {
      "place": {
        "ru": "Крым / Украина — Россия",
        "en": "Crimea / Ukraine–Russia",
        "uk": "Крим / Україна — Росія"
      },
      "actors": {
        "ru": "Россия, Украина, власти Крыма, население полуострова",
        "en": "Russia, Ukraine, Crimean authorities, peninsula residents",
        "uk": "Росія, Україна, влада Криму, населення півострова"
      },
      "status": {
        "ru": "Территориальный спор; аннексия не признана большинством государств",
        "en": "Territorial dispute; annexation not recognised by most states",
        "uk": "Територіальна суперечка; анексію не визнала більшість держав"
      }
    },
    "tags": [
      "Крым",
      "референдум",
      "самоопределение",
      "территория"
    ],
    "sources": [
      {
        "title": "Opinion on whether the decision taken by the Supreme Council of the Autonomous Republic of Crimea to organise a referendum is compatible with constitutional principles",
        "institution": "Venice Commission",
        "url": "https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD%282014%29002-e"
      },
      {
        "title": "Резолюция Генеральной Ассамблеи ООН 68/262",
        "institution": "UN Digital Library",
        "url": "https://digitallibrary.un.org/record/767565"
      },
      {
        "title": "Конституция Украины",
        "institution": "Верховная Рада Украины",
        "url": "https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80?lang=en"
      }
    ],
    "media": []
  },
  {
    "id": "ato",
    "date": "2014-04-14",
    "lane": 2,
    "title": {
      "ru": "Начало АТО",
      "en": "Start of the ATO",
      "uk": "Початок АТО"
    },
    "short": {
      "ru": "Решение о начале антитеррористической операции на востоке Украины.",
      "en": "The decision to launch the Anti-Terrorist Operation in eastern Ukraine.",
      "uk": "Рішення про початок антитерористичної операції на сході України."
    },
    "lead": {
      "ru": "Ключевой узел для спора о том, где начинать хронологию войны в Донбассе и как описывать участников первых месяцев конфликта.",
      "en": "A key node in disputes over where the Donbas war chronology begins and how to describe the actors in its first months.",
      "uk": "Ключовий вузол суперечки про те, звідки починати хронологію війни на Донбасі та як описувати учасників перших місяців конфлікту."
    },
    "context": {
      "ru": [
        "14 апреля 2014 года был введён в действие принятый Советом национальной безопасности и обороны Украины комплекс мер по преодолению террористической угрозы и сохранению территориальной целостности.",
        "В тот же период Специальная мониторинговая миссия ОБСЕ фиксировала захваты административных зданий и быстро меняющуюся обстановку."
      ],
      "en": [
        "On 14 April 2014 a decision of Ukraine’s National Security and Defence Council on measures to overcome the terrorist threat and preserve territorial integrity was put into effect.",
        "At the same time the OSCE Special Monitoring Mission was recording seizures of administrative buildings and a rapidly changing situation."
      ],
      "uk": [
        "14 квітня 2014 року ввели в дію рішення Ради національної безпеки і оборони України про заходи з подолання терористичної загрози та збереження територіальної цілісності.",
        "У той самий період Спеціальна моніторингова місія ОБСЄ фіксувала захоплення адміністративних будівель і швидку зміну ситуації."
      ]
    },
    "dispute": {
      "ru": [
        "Формула «Киев начал войну против Донбасса» пропускает предшествующие захваты зданий и вооружённые действия. Формула «это была только внешняя агрессия» может пропускать локальную мобилизацию и внутренние причины. Хронология должна включать оба уровня и проверяемых участников."
      ],
      "en": [
        "“Kyiv started a war against Donbas” omits preceding seizures and armed action. “It was only external aggression” can omit local mobilisation and internal causes. A sound chronology has to include both levels and identify verifiable actors."
      ],
      "uk": [
        "Формула «Київ почав війну проти Донбасу» пропускає попередні захоплення будівель і збройні дії. Формула «це була лише зовнішня агресія» може пропускати місцеву мобілізацію та внутрішні причини. Хронологія має охоплювати обидва рівні й перевірюваних учасників."
      ]
    },
    "checks": {
      "ru": [
        "Какие события предшествовали указу 14 апреля.",
        "Кто контролировал конкретные здания и вооружённые группы.",
        "Различаются ли политический протест, вооружённое восстание и внешнее участие."
      ],
      "en": [
        "Which events preceded the decree of 14 April.",
        "Who controlled specific buildings and armed groups.",
        "Whether political protest, armed uprising and external involvement are distinguished."
      ],
      "uk": [
        "Які події передували указу 14 квітня.",
        "Хто контролював конкретні будівлі та збройні групи.",
        "Чи розрізняють політичний протест, збройне повстання та зовнішню участь."
      ]
    },
    "meta": {
      "place": {
        "ru": "Донецкая и Луганская области",
        "en": "Donetsk and Luhansk regions",
        "uk": "Донецька та Луганська області"
      },
      "actors": {
        "ru": "Украинские органы власти, вооружённые группы, местные участники, Россия",
        "en": "Ukrainian authorities, armed groups, local actors, Russia",
        "uk": "Українські органи влади, збройні групи, місцеві учасники, Росія"
      },
      "status": {
        "ru": "Начало длительного вооружённого конфликта",
        "en": "Beginning of a prolonged armed conflict",
        "uk": "Початок тривалого збройного конфлікту"
      }
    },
    "tags": [
      "Донбасс",
      "АТО",
      "хронология"
    ],
    "sources": [
      {
        "title": "Указ Президента Украины № 405/2014",
        "institution": "Верховная Рада Украины",
        "url": "https://zakon.rada.gov.ua/laws/show/405/2014?lang=en"
      },
      {
        "title": "Daily report of the OSCE Special Monitoring Mission, 14 April 2014",
        "institution": "OSCE",
        "url": "https://www.osce.org/ukraine-smm/117777"
      }
    ],
    "media": []
  },
  {
    "id": "minsk",
    "date": "2015-02-12",
    "lane": 0,
    "title": {
      "ru": "Минский комплекс мер",
      "en": "Minsk Package of Measures",
      "uk": "Мінський комплекс заходів"
    },
    "short": {
      "ru": "Прекращение огня, политические шаги, граница и последовательность выполнения.",
      "en": "Ceasefire, political steps, the border and sequencing.",
      "uk": "Припинення вогню, політичні кроки, кордон і послідовність виконання."
    },
    "lead": {
      "ru": "Тринадцать пунктов, которые превратились в многолетний спор о последовательности: сначала безопасность или сначала политическая часть.",
      "en": "Thirteen points that became a years-long dispute over sequencing: security first or political steps first.",
      "uk": "Тринадцять пунктів, що перетворилися на багаторічну суперечку про послідовність: спочатку безпека чи спочатку політична частина."
    },
    "context": {
      "ru": [
        "12 февраля 2015 года участники Трёхсторонней контактной группы подписали Комплекс мер по выполнению Минских соглашений. 17 февраля Совет Безопасности ООН одобрил резолюцию 2202, поддержавшую документ.",
        "Комплекс мер соединял прекращение огня и отвод вооружений с выборами, особым порядком местного самоуправления, амнистией, конституционной реформой, восстановлением контроля над границей и выводом иностранных вооружённых формирований."
      ],
      "en": [
        "On 12 February 2015 the Trilateral Contact Group signed the Package of Measures for the Implementation of the Minsk Agreements. On 17 February the UN Security Council adopted Resolution 2202 endorsing it.",
        "The Package linked ceasefire and withdrawal of heavy weapons with elections, special local-government arrangements, amnesty, constitutional reform, restoration of border control and withdrawal of foreign armed formations."
      ],
      "uk": [
        "12 лютого 2015 року учасники Тристоронньої контактної групи підписали Комплекс заходів щодо виконання Мінських угод. 17 лютого Рада Безпеки ООН ухвалила резолюцію 2202 на підтримку документа.",
        "Комплекс поєднував припинення вогню й відведення озброєнь із виборами, особливим порядком місцевого самоврядування, амністією, конституційною реформою, відновленням контролю над кордоном і виведенням іноземних збройних формувань."
      ]
    },
    "dispute": {
      "ru": [
        "Фраза «Минск не выполнила сторона X» слишком общая. Для проверки нужен пункт, ответственный актор, срок, взаимозависимость с другими пунктами и фактическое действие."
      ],
      "en": [
        "“Side X failed to implement Minsk” is too general. Verification requires a paragraph, responsible actor, deadline, links to other paragraphs and the actual conduct."
      ],
      "uk": [
        "Фраза «Мінськ не виконала сторона X» надто загальна. Для перевірки потрібні пункт, відповідальний актор, строк, зв’язок з іншими пунктами та фактична дія."
      ]
    },
    "checks": {
      "ru": [
        "Какой из 13 пунктов обсуждается.",
        "Кому текст адресует конкретное действие.",
        "Задана ли последовательность прямо или выводится политически.",
        "Какие нарушения прекращения огня зафиксированы наблюдателями."
      ],
      "en": [
        "Which of the 13 points is at issue.",
        "To whom the text assigns the action.",
        "Whether sequencing is explicit or politically inferred.",
        "Which ceasefire violations were recorded by monitors."
      ],
      "uk": [
        "Який із 13 пунктів обговорюють.",
        "Кому текст адресує конкретну дію.",
        "Чи задана послідовність прямо, чи її політично виводять.",
        "Які порушення припинення вогню зафіксували спостерігачі."
      ]
    },
    "meta": {
      "place": {
        "ru": "Минск / Донбасский конфликт",
        "en": "Minsk / Donbas conflict",
        "uk": "Мінськ / конфлікт на Донбасі"
      },
      "actors": {
        "ru": "Украина, Россия, ОБСЕ, представители отдельных районов",
        "en": "Ukraine, Russia, OSCE, representatives of certain areas",
        "uk": "Україна, Росія, ОБСЄ, представники окремих районів"
      },
      "status": {
        "ru": "Соглашение, не реализованное полностью",
        "en": "Agreement not fully implemented",
        "uk": "Угода, не реалізована повністю"
      }
    },
    "tags": [
      "Минск",
      "перемирие",
      "выборы",
      "граница"
    ],
    "sources": [
      {
        "title": "Комплекс мер по выполнению Минских соглашений",
        "institution": "OSCE",
        "url": "https://www.osce.org/sites/default/files/f/documents/5/b/140221.pdf"
      },
      {
        "title": "Резолюция Совета Безопасности ООН 2202 (2015)",
        "institution": "United Nations",
        "url": "https://docs.un.org/en/S/RES/2202(2015)"
      }
    ],
    "media": []
  },
  {
    "id": "language-law",
    "date": "2019-04-25",
    "lane": 1,
    "title": {
      "ru": "Закон о государственном языке",
      "en": "State language law",
      "uk": "Закон про державну мову"
    },
    "short": {
      "ru": "Расширение обязательного использования украинского языка в публичной сфере.",
      "en": "Expanded mandatory use of Ukrainian in the public sphere.",
      "uk": "Розширення обов’язкового використання української мови в публічній сфері."
    },
    "lead": {
      "ru": "Правовой узел споров о государственном строительстве, правах русскоязычных граждан и границе между интеграционной политикой и дискриминацией.",
      "en": "A legal node in disputes over nation-building, the rights of Russian-speaking citizens and the line between integration policy and discrimination.",
      "uk": "Правовий вузол суперечок про державотворення, права російськомовних громадян і межу між інтеграційною політикою та дискримінацією."
    },
    "context": {
      "ru": [
        "25 апреля 2019 года Верховная Рада приняла закон об обеспечении функционирования украинского языка как государственного. Он регулирует использование государственного языка в публичных сферах и содержит исключения для частного общения и религиозных обрядов."
      ],
      "en": [
        "On 25 April 2019 the Verkhovna Rada adopted the law on ensuring the functioning of Ukrainian as the state language. It regulates public-sphere use and contains exceptions for private communication and religious rites."
      ],
      "uk": [
        "25 квітня 2019 року Верховна Рада ухвалила закон про забезпечення функціонування української мови як державної. Він регулює використання державної мови в публічних сферах і містить винятки для приватного спілкування та релігійних обрядів."
      ]
    },
    "dispute": {
      "ru": [
        "Для оценки недостаточно лозунгов «русский запретили» или «никаких ограничений нет». Нужно смотреть конкретную сферу, адресата обязанности, исключения и практику применения."
      ],
      "en": [
        "Neither “Russian was banned” nor “there are no restrictions” is sufficient. The relevant sphere, duty-holder, exceptions and enforcement practice have to be identified."
      ],
      "uk": [
        "Для оцінки недостатньо гасел «російську заборонили» або «жодних обмежень немає». Потрібно визначити конкретну сферу, адресата обов’язку, винятки та практику застосування."
      ]
    },
    "checks": {
      "ru": [
        "О какой сфере идёт речь: образование, услуги, медиа, работа органов власти или частное общение.",
        "Какая редакция закона действовала на нужную дату.",
        "Есть ли документированная практика применения, а не только формальная норма."
      ],
      "en": [
        "Which sphere is at issue: education, services, media, public authorities or private communication.",
        "Which version of the law applied on the relevant date.",
        "Whether there is documented enforcement practice, not just a formal rule."
      ],
      "uk": [
        "Про яку сферу йдеться: освіта, послуги, медіа, робота органів влади чи приватне спілкування.",
        "Яка редакція закону діяла на потрібну дату.",
        "Чи є документована практика застосування, а не лише формальна норма."
      ]
    },
    "meta": {
      "place": {
        "ru": "Украина / внутренняя политика",
        "en": "Ukraine / domestic policy",
        "uk": "Україна / внутрішня політика"
      },
      "actors": {
        "ru": "Верховная Рада, органы власти, граждане и организации",
        "en": "Verkhovna Rada, public authorities, citizens and organisations",
        "uk": "Верховна Рада, органи влади, громадяни та організації"
      },
      "status": {
        "ru": "Действующий закон с изменениями",
        "en": "Law in force, as amended",
        "uk": "Чинний закон зі змінами"
      }
    },
    "tags": [
      "язык",
      "идентичность",
      "права"
    ],
    "sources": [
      {
        "title": "Закон Украины «Об обеспечении функционирования украинского языка как государственного»",
        "institution": "Верховная Рада Украины",
        "url": "https://zakon.rada.gov.ua/laws/show/2704-19?lang=en"
      }
    ],
    "media": []
  },
  {
    "id": "full-invasion",
    "date": "2022-02-24",
    "lane": 0,
    "title": {
      "ru": "Полномасштабное вторжение",
      "en": "Full-scale invasion",
      "uk": "Повномасштабне вторгнення"
    },
    "short": {
      "ru": "Начало полномасштабной войны России против Украины.",
      "en": "The beginning of Russia’s full-scale war against Ukraine.",
      "uk": "Початок повномасштабної війни Росії проти України."
    },
    "lead": {
      "ru": "24 февраля 2022 года Россия начала полномасштабное военное вторжение на территорию Украины, радикально изменив масштаб конфликта, международную реакцию и правовую повестку.",
      "en": "On 24 February 2022 Russia launched a full-scale military invasion of Ukraine, radically changing the scale of the conflict, the international response and the legal agenda.",
      "uk": "24 лютого 2022 року Росія розпочала повномасштабне військове вторгнення на територію України, радикально змінивши масштаб конфлікту, міжнародну реакцію та правовий порядок денний."
    },
    "context": {
      "ru": [
        "Военные действия начались по нескольким направлениям. Украина ввела военное положение и объявила общую мобилизацию. Генеральная Ассамблея ООН 2 марта 2022 года приняла резолюцию ES-11/1, потребовав прекратить применение силы и вывести российские войска."
      ],
      "en": [
        "Military operations began on several axes. Ukraine imposed martial law and announced general mobilisation. On 2 March 2022 the UN General Assembly adopted Resolution ES-11/1 demanding an end to the use of force and withdrawal of Russian troops."
      ],
      "uk": [
        "Бойові дії розпочалися на кількох напрямках. Україна запровадила воєнний стан і оголосила загальну мобілізацію. 2 березня 2022 року Генеральна Асамблея ООН ухвалила резолюцію ES-11/1 з вимогою припинити застосування сили та вивести російські війська."
      ]
    },
    "dispute": {
      "ru": [
        "Причинные объяснения — НАТО, Донбасс, провал дипломатии, внутренние решения Украины — не заменяют отдельный вопрос о юридической оценке начала вторжения. Причина, повод, мотивация и правомерность — разные категории."
      ],
      "en": [
        "Causal accounts—NATO, Donbas, failed diplomacy or Ukrainian domestic choices—do not replace the separate legal assessment of launching the invasion. Cause, pretext, motivation and legality are different categories."
      ],
      "uk": [
        "Причинні пояснення — НАТО, Донбас, провал дипломатії чи внутрішні рішення України — не замінюють окремого питання про юридичну оцінку початку вторгнення. Причина, привід, мотивація та правомірність — різні категорії."
      ]
    },
    "checks": {
      "ru": [
        "Какую точку начала хронологии выбирает аргумент и почему.",
        "Отделяется ли объяснение мотивации от юридического оправдания.",
        "Какие официальные цели заявлялись и как они менялись.",
        "Какие действия и последствия подтверждаются независимыми источниками."
      ],
      "en": [
        "Which starting point the argument chooses and why.",
        "Whether motivation is separated from legal justification.",
        "Which official aims were stated and how they changed.",
        "Which actions and consequences are independently documented."
      ],
      "uk": [
        "Яку точку початку хронології обирає аргумент і чому.",
        "Чи відокремлюють пояснення мотивації від юридичного виправдання.",
        "Які офіційні цілі заявлялися та як вони змінювалися.",
        "Які дії та наслідки підтверджені незалежними джерелами."
      ]
    },
    "meta": {
      "place": {
        "ru": "Украина / международный конфликт",
        "en": "Ukraine / international conflict",
        "uk": "Україна / міжнародний конфлікт"
      },
      "actors": {
        "ru": "Россия, Украина, международные партнёры",
        "en": "Russia, Ukraine, international partners",
        "uk": "Росія, Україна, міжнародні партнери"
      },
      "status": {
        "ru": "Продолжающийся международный вооружённый конфликт",
        "en": "Ongoing international armed conflict",
        "uk": "Триваючий міжнародний збройний конфлікт"
      }
    },
    "tags": [
      "2022",
      "война",
      "ООН"
    ],
    "sources": [
      {
        "title": "Резолюция Генеральной Ассамблеи ООН ES-11/1 «Агрессия против Украины»",
        "institution": "United Nations",
        "url": "https://docs.un.org/en/A/RES/ES-11/1"
      },
      {
        "title": "Устав Организации Объединённых Наций",
        "institution": "United Nations",
        "url": "https://www.un.org/en/about-us/un-charter/full-text"
      }
    ],
    "media": []
  },
  {
    "id": "martial-law",
    "date": "2022-02-24T05:30:00Z",
    "lane": 1,
    "title": {
      "ru": "Военное положение и мобилизация",
      "en": "Martial law and mobilisation",
      "uk": "Воєнний стан і мобілізація"
    },
    "short": {
      "ru": "Правовой режим войны, выборы, ограничения и обязанности граждан.",
      "en": "The wartime legal regime, elections, restrictions and civic duties.",
      "uk": "Правовий режим війни, вибори, обмеження та обов’язки громадян."
    },
    "lead": {
      "ru": "Правовой режим, к которому привязаны споры о президентских и парламентских выборах, мобилизации, выезде граждан и ограничении отдельных прав.",
      "en": "The legal regime underlying disputes over presidential and parliamentary elections, mobilisation, departure from the country and restrictions on certain rights.",
      "uk": "Правовий режим, до якого прив’язані суперечки про президентські й парламентські вибори, мобілізацію, виїзд громадян та обмеження окремих прав."
    },
    "context": {
      "ru": [
        "Военное положение было введено 24 февраля 2022 года и затем многократно продлевалось. Закон определяет полномочия государства, временные ограничения и особенности функционирования органов власти.",
        "Оценка конкретной меры требует смотреть не только Конституцию, но и профильный закон, указ, срок действия и практику применения."
      ],
      "en": [
        "Martial law was introduced on 24 February 2022 and repeatedly extended. The law defines state powers, temporary restrictions and the operation of public institutions.",
        "Assessing a particular measure requires the Constitution, the relevant statute, the decree, its time period and enforcement practice."
      ],
      "uk": [
        "Воєнний стан запровадили 24 лютого 2022 року й надалі неодноразово продовжували. Закон визначає повноваження держави, тимчасові обмеження та особливості роботи органів влади.",
        "Оцінка конкретного заходу потребує аналізу Конституції, профільного закону, указу, строку дії та практики застосування."
      ]
    },
    "dispute": {
      "ru": [
        "Фраза «власть нелегитимна, потому что нет выборов» должна проверяться по конкретному виду выборов, конституционной норме, запрету в условиях военного положения и правилам продолжения полномочий."
      ],
      "en": [
        "“The government is illegitimate because there are no elections” must be tested against the type of election, the constitutional rule, wartime prohibitions and continuity-of-office provisions."
      ],
      "uk": [
        "Фразу «влада нелегітимна, бо немає виборів» треба перевіряти за конкретним видом виборів, конституційною нормою, забороною в умовах воєнного стану та правилами продовження повноважень."
      ]
    },
    "checks": {
      "ru": [
        "О каком органе и каком виде выборов идёт речь.",
        "Какая норма регулирует продолжение полномочий.",
        "Какой указ и срок военного положения действовали на конкретную дату.",
        "Отделяется ли критика практики мобилизации от содержания закона."
      ],
      "en": [
        "Which institution and election are being discussed.",
        "Which rule governs continuity of office.",
        "Which decree and martial-law period applied on the date.",
        "Whether criticism of mobilisation practice is separated from the statute itself."
      ],
      "uk": [
        "Про який орган і який вид виборів ідеться.",
        "Яка норма регулює продовження повноважень.",
        "Який указ і строк воєнного стану діяли на конкретну дату.",
        "Чи відокремлюють критику практики мобілізації від змісту закону."
      ]
    },
    "meta": {
      "place": {
        "ru": "Украина / национальный уровень",
        "en": "Ukraine / national level",
        "uk": "Україна / національний рівень"
      },
      "actors": {
        "ru": "Президент, Верховная Рада, военное командование, граждане",
        "en": "President, Verkhovna Rada, military command, citizens",
        "uk": "Президент, Верховна Рада, військове командування, громадяни"
      },
      "status": {
        "ru": "Особый правовой режим",
        "en": "Special legal regime",
        "uk": "Особливий правовий режим"
      }
    },
    "tags": [
      "военное положение",
      "выборы",
      "мобилизация"
    ],
    "sources": [
      {
        "title": "Закон Украины «О правовом режиме военного положения»",
        "institution": "Верховная Рада Украины",
        "url": "https://zakon.rada.gov.ua/laws/show/389-19?lang=en"
      },
      {
        "title": "Закон Украины «О мобилизационной подготовке и мобилизации»",
        "institution": "Верховная Рада Украины",
        "url": "https://zakon.rada.gov.ua/laws/show/3543-12?lang=en"
      },
      {
        "title": "Конституция Украины",
        "institution": "Верховная Рада Украины",
        "url": "https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80?lang=en"
      }
    ],
    "media": []
  },
  {
    "id": "annexation-2022",
    "date": "2022-09-30",
    "lane": 2,
    "title": {
      "ru": "Объявление об аннексии четырёх областей",
      "en": "Claimed annexation of four regions",
      "uk": "Оголошення про анексію чотирьох областей"
    },
    "short": {
      "ru": "Заявленное включение оккупированных территорий после проведённых голосований.",
      "en": "Claimed incorporation of occupied territories after organised votes.",
      "uk": "Заявлене включення окупованих територій після проведених голосувань."
    },
    "lead": {
      "ru": "После организованных Россией голосований были подписаны договоры о принятии Донецкой, Луганской, Запорожской и Херсонской областей в состав Российской Федерации.",
      "en": "Following votes organised by Russia, treaties were signed claiming the admission of the Donetsk, Luhansk, Zaporizhzhia and Kherson regions into the Russian Federation.",
      "uk": "Після організованих Росією голосувань підписали договори про прийняття Донецької, Луганської, Запорізької та Херсонської областей до складу Російської Федерації."
    },
    "context": {
      "ru": [
        "30 сентября 2022 года Россия объявила о включении четырёх украинских областей, не контролируя полностью ни одну из них. 12 октября Генеральная Ассамблея ООН приняла резолюцию ES-11/4, осудив попытку незаконной аннексии."
      ],
      "en": [
        "On 30 September 2022 Russia claimed to incorporate four Ukrainian regions without fully controlling any of them. On 12 October the UN General Assembly adopted Resolution ES-11/4 condemning the attempted illegal annexation."
      ],
      "uk": [
        "30 вересня 2022 року Росія оголосила про включення чотирьох українських областей, не контролюючи повністю жодної з них. 12 жовтня Генеральна Асамблея ООН ухвалила резолюцію ES-11/4, засудивши спробу незаконної анексії."
      ]
    },
    "dispute": {
      "ru": [
        "Как и в споре о Крыме, нужно разделять заявленные результаты голосований, условия оккупации, внутренние акты России и международно-правовое признание. Внутренний закон одного государства не меняет автоматически международный статус территории."
      ],
      "en": [
        "As with Crimea, claimed vote results, occupation conditions, Russian domestic acts and international legal recognition must be separated. One state’s domestic law does not automatically change a territory’s international status."
      ],
      "uk": [
        "Як і в суперечці про Крим, потрібно розділяти заявлені результати голосувань, умови окупації, внутрішні акти Росії та міжнародно-правове визнання. Внутрішній закон однієї держави не змінює автоматично міжнародний статус території."
      ]
    },
    "checks": {
      "ru": [
        "Кто организовал голосование и в каких условиях.",
        "Какая территория фактически контролировалась на дату объявления.",
        "Какие государства признали изменение статуса.",
        "Не смешивается ли внутреннее оформление с международным признанием."
      ],
      "en": [
        "Who organised the votes and under what conditions.",
        "Which territory was actually controlled on the date of the claim.",
        "Which states recognised a change of status.",
        "Whether domestic formalisation is being conflated with international recognition."
      ],
      "uk": [
        "Хто організував голосування і за яких умов.",
        "Яку територію фактично контролювали на дату оголошення.",
        "Які держави визнали зміну статусу.",
        "Чи не змішують внутрішнє оформлення з міжнародним визнанням."
      ]
    },
    "meta": {
      "place": {
        "ru": "Донецкая, Луганская, Запорожская и Херсонская области",
        "en": "Donetsk, Luhansk, Zaporizhzhia and Kherson regions",
        "uk": "Донецька, Луганська, Запорізька та Херсонська області"
      },
      "actors": {
        "ru": "Россия, Украина, жители оккупированных территорий, ООН",
        "en": "Russia, Ukraine, residents of occupied territories, UN",
        "uk": "Росія, Україна, мешканці окупованих територій, ООН"
      },
      "status": {
        "ru": "Заявленная аннексия, не признанная большинством государств",
        "en": "Claimed annexation not recognised by most states",
        "uk": "Заявлена анексія, не визнана більшістю держав"
      }
    },
    "tags": [
      "аннексия",
      "референдумы",
      "ООН",
      "территория"
    ],
    "sources": [
      {
        "title": "Резолюция Генеральной Ассамблеи ООН ES-11/4 «Территориальная целостность Украины»",
        "institution": "United Nations",
        "url": "https://docs.un.org/en/A/RES/ES-11/4"
      }
    ],
    "media": []
  }
] satisfies EventRecord[]

export const eventsById = new Map(events.map((event) => [event.id, event]))
