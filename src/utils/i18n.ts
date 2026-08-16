import type { Language, Localized } from '../domain/types'

export const ui = {
  ru: {
    chrono: 'Хроно',
    connections: 'Связи',
    ai: 'AI',
    pro: 'PRO',
    theme: 'Переключить тему',
    language: 'Язык',
    dragHint: 'Тяните, чтобы двигаться во времени',
    zoomHint: '⌘ / Ctrl + колесо — масштаб',
    openEvent: 'Открыть событие',
    event: 'Событие',
    back: 'Назад',
    backToChrono: 'Вернуться в Хроно',
    openConnections: 'Показать связи',
    context: 'Контекст',
    dispute: 'Почему это узел спора',
    verify: 'Что проверять',
    sources: 'Первичные источники',
    media: 'Медиа',
    date: 'Дата',
    place: 'Место / уровень',
    actors: 'Участники',
    status: 'Статус',
    previous: 'Предыдущее',
    next: 'Следующее',
    connectionTitle: 'Карта причин, документов и интерпретаций',
    connectionIntro: 'Выберите узел. Слева показано, что к нему ведёт; справа — что из него следует или с чем его связывают.',
    oneStep: '1 шаг',
    twoSteps: '2 шага',
    incoming: 'Что ведёт к узлу',
    outgoing: 'Что следует дальше',
    relationDirect: 'Прямая связь в документе или хронологии',
    relationDocumented: 'Документированная историческая связь',
    relationInterpretive: 'Спорная интерпретация — требует аргументации',
    focusInGraph: 'Открыть в центре карты',
    aiTitle: 'Помощник живого разговора',
    aiIntro: 'Транскрипт → темы → карта тезисов → варианты аккуратного ответа с источниками.',
    consent: 'Все участники уведомлены о записи и анализе разговора',
    listen: 'Слушать',
    stop: 'Остановить',
    demo: 'Запустить демо',
    clear: 'Очистить',
    transcript: 'Транскрипт',
    transcriptPlaceholder: 'Речь появится здесь. Можно также вставить текст вручную…',
    live: 'Эфир',
    idle: 'Готов',
    listening: 'Слушаю',
    unsupported: 'Распознавание речи недоступно в этом браузере',
    aiPrototype: 'Frontend-прототип',
    aiPrototypeNote: 'В этой версии анализ выполняется локальными правилами. Потоковый STT, поиск по базе и LLM подключаются через backend.',
    conversationMap: 'Карта разговора',
    detectedTopics: 'Обнаруженные темы',
    noTopics: 'Начните разговор или включите демонстрацию — здесь появятся связанные темы.',
    responseOptions: 'Варианты ответа',
    copy: 'Копировать',
    copied: 'Скопировано',
    privacyTitle: 'Перед включением',
    privacyText: 'Не записывайте людей скрытно. Браузерный прототип слышит только микрофон; захват вкладки и разделение голосов требуют отдельной реализации.',
    freeText: 'Можно редактировать транскрипт вручную',
    sourceCount: 'источников',
    relationCount: 'связей',
    noMedia: 'Медиаматериалы будут добавлены редакцией.',
  },
  en: {
    chrono: 'Chrono', connections: 'Connections', ai: 'AI', pro: 'PRO', theme: 'Toggle theme', language: 'Language',
    dragHint: 'Drag to move through time', zoomHint: '⌘ / Ctrl + wheel — zoom', openEvent: 'Open event', event: 'Event', back: 'Back',
    backToChrono: 'Back to Chrono', openConnections: 'Show connections', context: 'Context', dispute: 'Why this is contested', verify: 'What to verify',
    sources: 'Primary sources', media: 'Media', date: 'Date', place: 'Place / level', actors: 'Actors', status: 'Status', previous: 'Previous', next: 'Next',
    connectionTitle: 'Map of causes, documents and interpretations',
    connectionIntro: 'Choose a node. The left side shows what leads to it; the right side shows what follows or is linked to it.', oneStep: '1 step', twoSteps: '2 steps',
    incoming: 'What leads here', outgoing: 'What follows', relationDirect: 'Direct link in a document or chronology', relationDocumented: 'Documented historical link',
    relationInterpretive: 'Contested interpretation — requires argument', focusInGraph: 'Center in graph', aiTitle: 'Live conversation assistant',
    aiIntro: 'Transcript → topics → claim map → careful response options with sources.', consent: 'Everyone has been informed about recording and analysis',
    listen: 'Listen', stop: 'Stop', demo: 'Run demo', clear: 'Clear', transcript: 'Transcript', transcriptPlaceholder: 'Speech appears here. You can also paste text…',
    live: 'Live', idle: 'Ready', listening: 'Listening', unsupported: 'Speech recognition is unavailable in this browser', aiPrototype: 'Frontend prototype',
    aiPrototypeNote: 'This version uses local rules. Streaming STT, retrieval and an LLM are connected through the backend.', conversationMap: 'Conversation map',
    detectedTopics: 'Detected topics', noTopics: 'Start speaking or run the demo to reveal connected topics.', responseOptions: 'Response options', copy: 'Copy', copied: 'Copied',
    privacyTitle: 'Before listening', privacyText: 'Do not record people covertly. The browser prototype hears the microphone only; tab capture and speaker separation need a separate implementation.',
    freeText: 'The transcript can be edited manually', sourceCount: 'sources', relationCount: 'connections', noMedia: 'Media will be added by the editorial team.',
  },
  uk: {
    chrono: 'Хроно', connections: 'Зв’язки', ai: 'AI', pro: 'PRO', theme: 'Перемкнути тему', language: 'Мова',
    dragHint: 'Тягніть, щоб рухатися в часі', zoomHint: '⌘ / Ctrl + колесо — масштаб', openEvent: 'Відкрити подію', event: 'Подія', back: 'Назад',
    backToChrono: 'Повернутися до Хроно', openConnections: 'Показати зв’язки', context: 'Контекст', dispute: 'Чому це вузол суперечки', verify: 'Що перевіряти',
    sources: 'Первинні джерела', media: 'Медіа', date: 'Дата', place: 'Місце / рівень', actors: 'Учасники', status: 'Статус', previous: 'Попередня', next: 'Наступна',
    connectionTitle: 'Мапа причин, документів та інтерпретацій',
    connectionIntro: 'Оберіть вузол. Ліворуч показано, що до нього веде; праворуч — що з нього випливає або з чим його пов’язують.', oneStep: '1 крок', twoSteps: '2 кроки',
    incoming: 'Що веде до вузла', outgoing: 'Що далі', relationDirect: 'Прямий зв’язок у документі або хронології', relationDocumented: 'Документований історичний зв’язок',
    relationInterpretive: 'Спірна інтерпретація — потребує аргументації', focusInGraph: 'Відкрити в центрі мапи', aiTitle: 'Помічник живої розмови',
    aiIntro: 'Транскрипт → теми → мапа тез → варіанти обережної відповіді з джерелами.', consent: 'Усі учасники повідомлені про запис та аналіз',
    listen: 'Слухати', stop: 'Зупинити', demo: 'Запустити демо', clear: 'Очистити', transcript: 'Транскрипт', transcriptPlaceholder: 'Мовлення з’явиться тут. Також можна вставити текст…',
    live: 'Ефір', idle: 'Готово', listening: 'Слухаю', unsupported: 'Розпізнавання мовлення недоступне в цьому браузері', aiPrototype: 'Frontend-прототип',
    aiPrototypeNote: 'У цій версії аналіз виконують локальні правила. Потоковий STT, пошук у базі та LLM підключаються через backend.', conversationMap: 'Мапа розмови',
    detectedTopics: 'Виявлені теми', noTopics: 'Почніть говорити або запустіть демонстрацію — тут з’являться пов’язані теми.', responseOptions: 'Варіанти відповіді', copy: 'Копіювати', copied: 'Скопійовано',
    privacyTitle: 'Перед увімкненням', privacyText: 'Не записуйте людей приховано. Браузерний прототип чує лише мікрофон; захоплення вкладки та поділ голосів потребують окремої реалізації.',
    freeText: 'Транскрипт можна редагувати вручну', sourceCount: 'джерел', relationCount: 'зв’язків', noMedia: 'Медіаматеріали додасть редакція.',
  },
} as const

export type UIKey = keyof typeof ui.ru

export function translate(language: Language, key: UIKey): string {
  return ui[language][key] ?? ui.ru[key]
}

export function local<T>(value: Localized<T>, language: Language): T {
  return value[language] ?? value.ru
}

export function languageLocale(language: Language): string {
  if (language === 'uk') return 'uk-UA'
  if (language === 'en') return 'en-GB'
  return 'ru-RU'
}
