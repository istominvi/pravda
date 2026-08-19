# PRAVDA — подробный план развития

**Статус документа:** рабочая спецификация для Codex и разработчиков  
**Версия:** 0.2  
**Дата:** 16 августа 2026 года

---

## 1. Видение продукта

PRAVDA должна быть вторым экраном во время живого политического разговора. Пользователь не читает длинный доклад заранее: он слышит тезис, за несколько секунд находит нужный узел, видит первичный документ, возможные продолжения разговора и границы корректного вывода.

Продукт состоит из трёх взаимосвязанных режимов:

1. **Хроно** отвечает на вопрос «что и когда произошло?».
2. **Связи** отвечает на вопрос «что с чем связано, что чему предшествует и где начинается интерпретация?».
3. **AI** отвечает на вопрос «что сейчас утверждает собеседник, что нужно уточнить и какие документы релевантны?».

Основное обещание продукта: **быстро довести пользователя от устной реплики до проверяемого источника, не подменяя факт политической интерпретацией**.

---

## 2. Продуктовые принципы

### 2.1. Evidence first

Каждое существенное утверждение должно приводить к одному или нескольким фрагментам первичного источника. Ссылка на главную страницу организации недостаточна: нужен документ, раздел, статья, пункт и, когда возможно, точная цитируемая строка.

### 2.2. Факт и интерпретация визуально различаются

В интерфейсе должны существовать отдельные типы:

- `document_text` — буквальный текст документа;
- `verified_fact` — факт с подтверждающими источниками;
- `documented_relation` — связь, прямо подтверждаемая документами или хронологией;
- `interpretive_relation` — причинная или политическая интерпретация;
- `counterargument` — сильное возражение;
- `open_question` — вопрос, для которого доказательств недостаточно.

Пунктирная линия в графе уже используется для интерпретационной связи. Это правило необходимо сохранить во всех будущих представлениях.

### 2.3. Никаких вымышленных цитат

LLM не должна формировать цитату по памяти. Цитата появляется только из retrieval-результата, содержащего:

- `source_id`;
- `document_version_id`;
- `chunk_id`;
- диапазон символов или строк;
- URL или внутренний файл;
- дату получения и контрольную сумму.

### 2.4. Сильное возражение обязательно

Для каждого спорного тезиса хранить:

- аккуратную версию тезиса;
- документы в его пользу;
- сильнейшее возражение;
- документы в пользу возражения;
- минимальный безопасный вывод;
- формулировки, которые база не поддерживает.

### 2.5. Причина не равна оправданию

AI должен различать:

- причинное объяснение решения;
- заявленное юридическое основание;
- оценку законности;
- моральную оценку;
- оценку последствий.

Это критически важно для разговоров о 2014 и 2022 годах.

### 2.6. Никакой скрытой записи

Кнопка «Слушать» активируется только после явного подтверждения уведомления участников. В production понадобятся:

- отдельный consent screen;
- видимый индикатор записи;
- кнопка немедленного удаления сессии;
- понятный срок хранения;
- журнал согласия без хранения лишних персональных данных;
- настройка «не сохранять аудио, обрабатывать поток и сразу удалять».

### 2.7. Помощник, а не автопилот

PRAVDA предлагает варианты, но не публикует сообщения и не говорит вместо пользователя. Желательные режимы ответа:

1. уточнить;
2. проверить определение;
3. открыть документ;
4. ответить кратко;
5. признать ограничение;
6. деэскалировать;
7. отложить тезис как непроверенный.

---

## 3. Что реализовано в версии 0.2

### 3.1. Общая оболочка

- React + TypeScript + Vite;
- `HashRouter` для совместимости с GitHub Pages;
- общий минималистичный header;
- вкладки `Хроно`, `Связи`, `AI`;
- RU / EN / UA;
- светлая и тёмная темы;
- сохранение UI-состояния через Zustand persist.

### 3.2. Хроно

- перенос поведения прежней HTML-шкалы в React;
- drag, инерция, горизонтальный scroll;
- `Cmd/Ctrl + wheel` zoom относительно курсора;
- авторазводка карточек по дорожкам;
- страницы событий с источниками;
- переход от события в граф связей.

### 3.3. Связи

- кастомные узлы React Flow;
- выбранный узел в центре;
- входящие связи слева;
- исходящие связи справа;
- один и два шага глубины;
- поиск;
- инспектор;
- три уровня уверенности связи.

Seed-данные: 13 событий, 13 концептов, 34 связи.

### 3.4. AI

- browser Speech Recognition, когда API доступен;
- ручной транскрипт;
- демо-сессия;
- локальный keyword detector;
- выделение до четырёх тем;
- связанные документы и события;
- три варианта ответа;
- копирование;
- обязательный consent checkbox.

Ограничение: это rule-based frontend demo. Нет backend, потокового STT, RAG, LLM, биллинга и аккаунтов.

---

## 4. Информационная архитектура

### 4.1. Маршруты frontend

```text
/#/chrono
/#/connections
/#/articles
/#/articles/:articleId
/#/ai
```

Будущие маршруты:

```text
/#/document/:documentId
/#/claim/:claimId
/#/session/:sessionId
/#/library
/#/search?q=...
/#/settings
/#/billing
/#/admin/content
```

### 4.2. Названия представлений

- **Хроно** — короткое, легко произносится, не перегружает header.
- **Связи** — понятнее русскому пользователю, чем Mind Map, и не обещает только иерархическое дерево.
- **AI** — краткое международное обозначение; рядом допустим небольшой `PRO`.

Внутреннее техническое имя `connections` лучше сохранить: граф будет включать не только аргументы, но документы, события, понятия, причинные гипотезы и возражения.

### 4.3. Переходы между режимами

Каждый объект должен иметь контекстные переходы:

- событие → связи;
- событие Хроно → статья того же узла;
- любой узел графа → статья того же узла;
- статья → тот же узел в графе и соседние статьи;
- AI-тема → узел графа;
- AI-источник → конкретный фрагмент документа;
- документ → события, где он был применён или процитирован;
- тезис → контраргумент;
- контраргумент → ответ и источники.

---

## 5. Рекомендуемый стек

### 5.1. Уже включено

| Слой | Решение | Причина |
|---|---|---|
| UI | React 19 | компонентная модель и зрелая экосистема |
| Язык | TypeScript | строгие схемы контента и realtime-событий |
| Сборка | Vite | быстрый dev server и статическая сборка |
| Навигация | React Router | URL для событий, документов и сессий |
| Граф | `@xyflow/react` | pan, zoom, edges, custom nodes, viewport API |
| Client state | Zustand | малый объём boilerplate, persist middleware |
| Unit tests | Vitest | интеграция с Vite |

### 5.2. Добавить в ближайших фазах

| Задача | Рекомендуемое решение | Когда |
|---|---|---|
| Runtime-схемы | Zod | до первого backend API |
| Server state | TanStack Query либо loaders React Router | при подключении API |
| Полноценная i18n | i18next + react-i18next | до массового расширения словаря |
| E2E | Playwright | до закрытой beta |
| Компонентные тесты | Vitest Browser Mode | для графа и аудио UI |
| IndexedDB | Dexie | локальные черновики и offline cache |
| Форматирование | Prettier | при работе нескольких разработчиков |
| UI-accessibility | axe-core в тестах | до beta |
| Error tracking | Sentry или совместимый сервис | перед production |
| Product analytics | PostHog self-hosted либо privacy-friendly аналог | после consent-дизайна |

### 5.3. Backend

Рекомендуемый начальный вариант:

- Node.js + TypeScript;
- Fastify или Hono для HTTP API;
- нативный WebSocket или специализированный realtime gateway;
- PostgreSQL;
- `pgvector` для небольшого старта либо отдельный vector store позднее;
- объектное хранилище S3-compatible;
- Redis только после появления реальной потребности в ephemeral state и очередях;
- background workers для транскрибации, индексации и импорта.

Не добавлять микросервисы заранее. Для первой beta достаточно modular monolith с отдельным realtime process.

---

## 6. Целевая архитектура

```text
Browser
  ├─ React SPA
  ├─ Audio capture
  ├─ Local session state
  └─ WebSocket client
          │
          ▼
API / Realtime Gateway
  ├─ Authentication and entitlements
  ├─ Session lifecycle
  ├─ Rate limits
  └─ WebSocket protocol
          │
          ├────────► STT adapter
          │            ├─ partial transcript
          │            ├─ final transcript
          │            └─ speaker hints
          │
          ├────────► Dialogue orchestrator
          │            ├─ turn segmentation
          │            ├─ claim extraction
          │            ├─ topic routing
          │            └─ suggestion generation
          │
          ├────────► Retrieval service
          │            ├─ lexical search
          │            ├─ vector search
          │            ├─ reranking
          │            └─ citation spans
          │
          └────────► Session store
                       ├─ PostgreSQL
                       ├─ optional Redis
                       └─ object storage
```

### 6.1. Почему нужен provider adapter

STT и LLM нельзя жёстко привязывать к одному поставщику. Интерфейсы:

```ts
interface StreamingSttProvider {
  startSession(config: SttConfig): Promise<SttSession>
}

interface SttSession {
  pushAudio(chunk: Uint8Array): Promise<void>
  close(): Promise<void>
  events(): AsyncIterable<TranscriptEvent>
}

interface DialogueModelProvider {
  streamSuggestions(input: DialogueInput): AsyncIterable<SuggestionDelta>
}
```

Провайдер выбирается конфигурацией backend. Секретные ключи никогда не попадают в `VITE_*`.

---

## 7. Аудио: реальные ограничения и варианты

### 7.1. Микрофон

`getUserMedia({ audio: true })` получает микрофон пользователя после разрешения. Он может слышать обоих собеседников только если удалённый голос физически воспроизводится динамиками и снова попадает в микрофон, что создаёт плохое качество и эхо.

### 7.2. Аудио вкладки

Для захвата звука конкретной вкладки использовать добровольный `getDisplayMedia` с включённым audio track. Поддержка и UX различаются по браузерам. Нельзя запускать такой захват скрытно.

### 7.3. Два чистых канала

Лучший web-вариант — иметь:

- канал микрофона пользователя;
- канал аудио выбранной вкладки;
- отдельную маркировку speaker A / speaker B без сложной диаризации.

Если чат-рулетка находится в другом приложении и браузер не даёт её аудио, понадобится:

- browser extension;
- desktop companion на Electron/Tauri;
- виртуальное аудиоустройство;
- официальная интеграция с платформой.

### 7.4. Формат потока

Для realtime желательно:

- захват PCM через AudioWorklet;
- mono, 16 kHz или формат, который ожидает STT;
- пакеты 20–100 ms;
- sequence number;
- клиентский timestamp;
- voice activity indicator;
- reconnect buffer не более нескольких секунд.

MediaRecorder проще для MVP, но даёт менее предсказуемые chunks и кодеки.

### 7.5. Целевые задержки

Это продуктовые цели, а не гарантии:

- UI-индикатор аудио: < 100 ms;
- partial transcript: 300–900 ms;
- final turn: до 1.5 s после паузы;
- первая найденная тема: до 1.2 s;
- первая полезная подсказка: до 2.5 s;
- полная карта с источниками: до 4 s.

---

## 8. Realtime pipeline AI

### 8.1. Этап 1 — захват

Клиент формирует `audio.chunk` с:

- session id;
- track id;
- speaker hint;
- sequence;
- timestamp;
- codec / sample rate;
- binary payload.

### 8.2. Этап 2 — STT

Backend отправляет:

- `transcript.partial`;
- `transcript.final`;
- confidence;
- start/end timestamps;
- speaker id или hint;
- language.

### 8.3. Этап 3 — turn segmentation

Turn завершается по комбинации:

- пауза;
- смена speaker;
- пунктуация STT;
- максимальная длина;
- semantic completion от лёгкой модели.

### 8.4. Этап 4 — claim extraction

Каждый законченный turn преобразуется в структуру:

```json
{
  "claim_id": "clm_...",
  "speaker_id": "remote",
  "original_text": "...",
  "normalised_claim": "...",
  "claim_type": "legal|historical|causal|moral|definition|prediction",
  "entities": ["Budapest Memorandum", "Ukraine"],
  "time_range": ["1994-12-05", null],
  "stance": "asserts|questions|denies",
  "confidence": 0.82
}
```

### 8.5. Этап 5 — retrieval

Поиск выполняется не по всему интернету во время разговора, а по редакционно подготовленной базе.

Рекомендуемый pipeline:

1. нормализация запроса;
2. entity lookup;
3. BM25 / full-text search;
4. vector search;
5. объединение результатов;
6. cross-encoder или LLM rerank;
7. фильтр по типу источника и языку;
8. выдача точных spans;
9. проверка достаточности evidence.

### 8.6. Этап 6 — обновление карты

AI не должен каждый раз пересоздавать весь граф. Он посылает операции:

- `node.upsert`;
- `edge.upsert`;
- `node.deactivate`;
- `focus.set`;
- `suggestions.replace`.

Клиент применяет diff и анимирует только изменившуюся часть.

### 8.7. Этап 7 — варианты ответа

Минимум три стратегии:

- **Clarify** — вопрос, который уменьшает двусмысленность;
- **Evidence** — короткий ответ с документом;
- **Boundary** — признание того, что доказательства не позволяют утверждать больше.

Позднее добавить:

- `counterexample`;
- `timeline-reset`;
- `definition-check`;
- `de-escalate`;
- `park-and-return`.

---

## 9. Retrieval и источники

### 9.1. Иерархия качества

1. международные договоры и официальные документы;
2. законодательство и судебные решения;
3. официальные стенограммы и заявления;
4. архивные документы;
5. академические исследования;
6. крупные СМИ;
7. вторичные комментарии;
8. пользовательские материалы.

Тип источника должен отображаться рядом с каждой подсказкой.

### 9.2. Chunking документов

Документ разбивается не только по токенам, но и по структуре:

```text
Document
  ├─ Preamble
  ├─ Article
  │   ├─ Paragraph
  │   └─ Subparagraph
  ├─ Annex
  └─ Signature block
```

Каждый chunk хранит parent path: `Article 2 → paragraph 4`.

### 9.3. Версионирование

Нужны таблицы:

- `documents` — логическая сущность;
- `document_versions` — конкретная редакция или полученный файл;
- `document_chunks` — поисковые фрагменты;
- `source_snapshots` — сохранённая копия и hash;
- `citations` — привязка утверждения к диапазону chunk.

Нельзя молча заменять текст документа новой версией.

### 9.4. Цитирование видео

Для роликов канала хранить:

- video id;
- URL;
- название;
- дата публикации;
- язык;
- transcript version;
- start/end timecode;
- speaker;
- точная цитата;
- соседний контекст;
- статус ручной проверки.

Заголовок видео не считается доказательством позиции автора.

---

## 10. Модель контента

Основные сущности:

```text
Event
Document
DocumentVersion
SourceChunk
Person
Organisation
Place
Concept
Claim
Counterclaim
Relation
Citation
MediaItem
TranscriptSegment
NarrativePattern
ConversationSession
ConversationTurn
Suggestion
```

### 10.1. Event

Событие — датированный узел. Оно может ссылаться на документы, места, участников, claims и media.

### 10.2. Claim

Claim должен быть атомарным. Плохой claim: «Запад спровоцировал войну». Хороший набор:

- Бухарестская декларация заявила о будущем членстве Украины;
- российское руководство воспринимало расширение как угрозу;
- эта угроза была одним из факторов решения;
- вес фактора по отношению к другим мотивам является интерпретацией.

### 10.3. Relation

Relation хранит:

```ts
interface Relation {
  id: string
  sourceId: string
  targetId: string
  kind: RelationKind
  direction: 'directed' | 'undirected'
  confidence: 'direct' | 'documented' | 'interpretive'
  validFrom?: string
  validTo?: string
  note: Localized<string>
  citationIds: string[]
  counterRelationIds: string[]
  editorialStatus: 'draft' | 'reviewed' | 'published' | 'disputed'
}
```

Подробности находятся в `CONTENT_MODEL.md`.

---

## 11. UX режима «Связи»

### 11.1. Текущая модель

Selected node располагается в центре. Incoming — слева, outgoing — справа. Это быстрее читается в живом разговоре, чем свободная radial mind map.

### 11.2. Следующие улучшения

- закрепление узлов;
- режим «только документы»;
- режим «только причинные связи»;
- фильтр по уверенности;
- фильтр по периоду;
- minimap только для больших графов;
- breadcrumbs выбранного пути;
- кнопка «почему показана эта связь?»;
- раскрытие citation drawer;
- сравнение двух узлов;
- режим «позиция / контраргумент»;
- сохранённые пользовательские маршруты.

### 11.3. Автолэйаут

Текущий seed layout вычисляется вручную по уровням. Когда граф вырастет:

- попробовать ELK.js для направленного layered layout;
- Dagre допустим для простых DAG;
- не запускать тяжёлый layout на каждую partial AI-реплику;
- расчёт делать в Web Worker;
- сохранять стабильность позиций, чтобы карта не прыгала.

### 11.4. Семантика линий

- сплошная тёмная: прямая связь;
- сплошная светлая: документированная связь;
- пунктир: интерпретация;
- красная или предупреждающая: противоречие;
- двусторонняя: взаимное влияние, использовать редко;
- толщина линии не должна автоматически означать истинность.

---

## 12. UX режима AI

### 12.1. Основной экран

Desktop:

```text
┌───────────────────┬────────────────────────────┐
│ transcript        │ live argument map          │
│ consent           │ detected topics            │
│ listen controls   │ source nodes               │
└───────────────────┴────────────────────────────┘
┌──────────────┬──────────────┬───────────────────┐
│ clarify      │ evidence     │ boundary          │
└──────────────┴──────────────┴───────────────────┘
```

### 12.2. Режимы

- `Idle` — разрешения ещё не запрошены;
- `Listening` — видимый live-индикатор;
- `Processing` — turn закончен, идёт retrieval;
- `Ready` — ответы обновлены;
- `Low evidence` — найдено недостаточно источников;
- `Disconnected` — WebSocket потерян;
- `Quota reached` — лимит плана исчерпан.

### 12.3. Не перекрывать разговор

Подсказки должны быть короткими:

- заголовок до 4 слов;
- быстрый ответ до 260 символов;
- одна главная ссылка;
- подробности раскрываются по клику.

### 12.4. Confidence UX

Не показывать псевдоточность вида `87.34% truth`. Использовать понятные статусы:

- подтверждено текстом;
- есть несколько источников;
- вероятная связь;
- спорная интерпретация;
- источник не найден.

---

## 13. Аккаунты и платный план

### 13.1. Предлагаемое разделение

**Free**

- Хроно;
- Связи;
- чтение статей;
- ограниченные сохранённые маршруты;
- ручная вставка текста в AI-demo.

**Pro**

- потоковый STT;
- live AI suggestions;
- история сессий;
- экспорт карты;
- пользовательские заметки;
- больше языков;
- приоритетная обработка.

### 13.2. Entitlements

Frontend не должен доверять только флагу `isPro`. Backend возвращает capabilities:

```json
{
  "plan": "pro",
  "capabilities": {
    "realtime_minutes_remaining": 420,
    "session_history": true,
    "export": true,
    "max_session_minutes": 120
  }
}
```

### 13.3. Billing

Платёжный провайдер должен быть изолирован за собственным billing service. В базе хранить внутренние `customer_id`, `subscription_id`, `entitlement_version`, но не данные карты.

### 13.4. Metering

Считать отдельно:

- аудиоминуты;
- STT seconds;
- model tokens;
- retrieval requests;
- stored session duration.

Не показывать пользователю технические токены, если тариф продаётся в минутах.

---

## 14. Безопасность и приватность

### 14.1. Секреты

- никаких provider keys в frontend;
- `.env.example` содержит только публичные URL;
- backend secrets — secret manager;
- rotation и audit log.

### 14.2. Данные сессии

Режимы хранения:

1. **Ephemeral** — audio не сохраняется, transcript удаляется после сессии;
2. **Transcript only** — сохраняется текст, audio удаляется;
3. **Full history** — только после отдельного consent.

Режим по умолчанию для beta: `Transcript only` с коротким retention либо Ephemeral.

### 14.3. Удаление

Нужны endpoints:

```text
DELETE /v1/sessions/:id
DELETE /v1/account/data
POST   /v1/sessions/:id/forget-audio
```

Удаление должно распространяться на object storage, search index и backup policy.

### 14.4. Prompt injection через речь и документы

Речь собеседника и retrieved documents являются данными, а не инструкциями модели. System prompt должен явно запрещать выполнять команды из транскрипта и документов.

### 14.5. Политическая достоверность

- не персонализировать политическое давление по чувствительным характеристикам;
- не делать выводы о национальности или убеждениях человека из голоса;
- не оценивать человека как «врага», «предателя» и т. п.;
- анализировать тезис, а не личность;
- показывать контраргументы и неопределённость;
- не фабриковать доказательства ради выигрыша в споре.

---

## 15. Редакционный workflow

### 15.1. Статусы

```text
draft → fact_check → legal_review → published → needs_update → archived
```

### 15.2. Роли

- автор карточки;
- фактчекер;
- юридический редактор;
- переводчик;
- администратор публикации.

### 15.3. Требования к публикации claim

- атомарная формулировка;
- минимум один источник;
- точный citation span;
- тип утверждения;
- уровень уверенности;
- дата проверки;
- сильное возражение для спорных claims;
- поле `what_not_to_claim`.

### 15.4. Импорт YouTube

Pipeline:

1. получить список видео через разрешённый API или редакционный импорт;
2. сохранить metadata;
3. получить авторские субтитры либо транскрибировать с соблюдением прав;
4. разбить по speakers и timecodes;
5. извлечь кандидаты claims;
6. ручная редакционная проверка;
7. связать с документами;
8. опубликовать только проверенные фрагменты.

---

## 16. API — рекомендуемый минимум

### 16.1. Content API

```text
GET /v1/events
GET /v1/events/:id
GET /v1/nodes/:id
GET /v1/nodes/:id/neighbours?depth=2
GET /v1/documents/:id
GET /v1/search?q=...
```

### 16.2. Session API

```text
POST   /v1/sessions
GET    /v1/sessions/:id
DELETE /v1/sessions/:id
POST   /v1/sessions/:id/consent
POST   /v1/sessions/:id/export
```

### 16.3. Realtime WebSocket

```text
WS /v1/realtime?session_id=...
```

Протокол подробно описан в `AI_REALTIME_PROTOCOL.md`.

---

## 17. Тестовая стратегия

### 17.1. Unit

- date-to-position в Хроно;
- clamp pan и zoom anchor;
- topic detector;
- graph neighbourhood builder;
- relation validation;
- i18n fallback;
- entitlement rules.

### 17.2. Component

- header и active tab;
- consent блокирует «Слушать»;
- demo transcript создаёт темы;
- клик на topic открывает Connections;
- node inspector меняется после клика;
- event source links доступны с клавиатуры.

### 17.3. E2E

Критические сценарии:

1. открыть Хроно → приблизить → открыть событие → перейти в Связи;
2. найти «Будапешт» в графе → открыть источник;
3. открыть AI → consent → demo → скопировать ответ;
4. сменить тему и язык → перезагрузить → настройки сохранились;
5. мобильная навигация;
6. GitHub Pages deep link через hash.

### 17.4. Realtime tests

- out-of-order audio chunks;
- reconnect;
- duplicate events;
- partial transcript replacement;
- session deletion;
- provider timeout;
- low-evidence response;
- prompt injection in transcript.

---

## 18. Наблюдаемость

Метрики backend:

- WebSocket connection success;
- partial transcript latency p50/p95;
- final transcript latency;
- retrieval latency;
- suggestion latency;
- STT error rate;
- reconnect rate;
- low-evidence rate;
- citation click-through;
- user deletion success.

Логи не должны по умолчанию содержать полный transcript. Использовать session id, event type, latency и redacted error.

---

## 19. Производительность frontend

### 19.1. Граф

- virtualise или фильтровать большие графы;
- не рендерить тысячи nodes одновременно;
- layout в Worker;
- memo custom nodes;
- применять realtime diff;
- debounce fitView;
- не перестраивать граф на каждый символ partial transcript.

### 19.2. Хроно

- при > 1000 событиях перейти к windowing;
- DOM-карточки только для видимой области плюс overscan;
- ticks через canvas либо SVG при очень большом диапазоне;
- группировка событий на малом zoom.

### 19.3. AI

- ограничить transcript DOM;
- старые turns сворачивать;
- responses стримить;
- отменять устаревший retrieval при новом turn;
- deduplicate claims.

---

## 20. Accessibility

- все функции доступны клавиатурой;
- граф имеет альтернативный линейный список связей;
- live transcript использует осторожный `aria-live`, чтобы не спамить screen reader;
- visible recording status;
- контраст проверяется для обеих тем;
- цвет не является единственным признаком confidence;
- prefers-reduced-motion уже учитывается;
- zoom интерфейса не должен ломать layout на 200%.

---

## 21. Фазы реализации

### Фаза 0 — React foundation

Статус: **выполнено в текущем архиве**.

- [x] Vite + React + TypeScript;
- [x] общий header;
- [x] Хроно;
- [x] Связи;
- [x] AI-demo;
- [x] страницы событий;
- [x] seed data validation;
- [x] GitHub Pages workflow;
- [x] документация.

### Фаза 1 — укрепление frontend

- [ ] установить зависимости и создать `package-lock.json`;
- [ ] устранить все lint/type errors на реальных typings;
- [x] добавить базовые Vitest unit tests для topic detection, graph layout и целостности данных;
- [ ] расширить unit-тесты и добавить component tests;
- [ ] добавить Playwright smoke tests;
- [ ] вынести UI-словарь в i18next;
- [ ] добавить error boundary;
- [ ] добавить loading / empty / offline states;
- [ ] добавить mobile graph inspector drawer;
- [ ] исправить все accessibility issues после axe audit;
- [ ] добавить Storybook только если появится реальная библиотека компонентов.

Критерий готовности: `npm ci && npm run build && npm test` проходят в CI.

### Фаза 2 — Content API и CMS

- [ ] PostgreSQL schema;
- [ ] Zod DTO;
- [ ] migration tool;
- [ ] read-only content API;
- [ ] admin authentication;
- [ ] CRUD документов, событий, claims, relations;
- [ ] citation span editor;
- [ ] editorial statuses;
- [ ] preview unpublished content;
- [ ] import/export JSON;
- [ ] version history.

Критерий: весь seed-контент загружается через API, а не bundle.

### Фаза 3 — Поиск и retrieval

- [ ] document ingestion;
- [ ] structure-aware chunking;
- [ ] PostgreSQL full-text search;
- [ ] embeddings;
- [ ] hybrid ranking;
- [ ] citation spans;
- [ ] search quality benchmark;
- [ ] admin feedback «релевантно / нерелевантно».

Критерий: для тестового набора вопросов top-3 содержит нужный документ не менее чем в заранее установленной доле benchmark.

### Фаза 4 — AI text MVP

- [ ] endpoint анализа вставленного текста;
- [ ] claim extraction;
- [ ] topic linking;
- [ ] RAG suggestions;
- [ ] обязательные citations;
- [ ] counterargument field;
- [ ] low-evidence refusal;
- [ ] session draft state;
- [ ] usage limits.

Критерий: AI не выдаёт документальную формулировку без citation id.

### Фаза 5 — Realtime audio beta

- [ ] consent flow;
- [ ] mic capture;
- [ ] optional tab audio capture;
- [ ] AudioWorklet;
- [ ] WebSocket protocol;
- [ ] STT adapter;
- [ ] partial/final transcript reducer;
- [ ] turn segmentation;
- [ ] realtime map diff;
- [ ] reconnect;
- [ ] deletion controls;
- [ ] latency dashboard.

Критерий: 30-минутная сессия переживает краткий reconnect без потери согласованности transcript.

### Фаза 6 — Pro и production

- [ ] accounts;
- [ ] email / OAuth login;
- [ ] billing adapter;
- [ ] entitlements;
- [ ] metering;
- [ ] quotas;
- [ ] abuse prevention;
- [ ] privacy policy;
- [ ] terms;
- [ ] data export and deletion;
- [ ] monitoring and incident runbook;
- [ ] security review.

---

## 22. Точный порядок задач для Codex

1. Открыть `docs/CODEX_HANDOFF.md`.
2. Выполнить `npm install` и зафиксировать lockfile.
3. Запустить `npm run verify:data`.
4. Запустить `npm run typecheck`.
5. Исправить реальные type errors, не ослабляя `strict`.
6. Запустить `npm run lint`.
7. Запустить приложение и проверить три маршрута.
8. Запустить и при необходимости исправить уже добавленные unit tests для `topicDetection`, graph layout и целостности данных.
9. Добавить component tests для AI-demo и consent gating.
10. Добавить Playwright smoke test.
11. Сделать screenshots desktop/mobile и положить в `docs/screenshots`.
12. Только после стабилизации frontend начинать backend.

---

## 23. Definition of Done для ближайшего релиза 0.3

- чистая установка на Node 22.12+;
- lockfile в репозитории;
- build, lint, unit и smoke tests в GitHub Actions;
- Хроно не теряет drag/zoom;
- Связи работают на keyboard и mobile;
- AI-demo работает без микрофона;
- реальный микрофон корректно показывает unsupported/error state;
- ни один источник не имеет битой внутренней ссылки;
- нет секретов в frontend;
- README соответствует фактическим командам;
- Lighthouse accessibility без критических ошибок;
- документация описывает известные ограничения.

---

## 24. Что не нужно делать сейчас

- не переносить проект в Next.js только ради моды;
- не строить микросервисы до working beta;
- не добавлять Redux поверх Zustand без проблемы, которую он решает;
- не хранить audio «на всякий случай»;
- не позволять LLM генерировать ссылки из памяти;
- не загружать весь knowledge graph в DOM;
- не автоматизировать скрытую запись;
- не обещать объективную «истину» в процентах;
- не публиковать извлечённые из видео claims без ручной проверки;
- не превращать AI в генератор агрессивных или унижающих реплик.

---

## 25. Итоговая целевая формула

```text
Реплика собеседника
  → атомарный тезис
  → тип тезиса
  → связанные события и понятия
  → первичные документы и точные фрагменты
  → сильное возражение
  → три коротких варианта ответа
  → переход в Хроно или Связи
```

Когда эта цепочка работает с низкой задержкой и проверяемыми citations, PRAVDA превращается из справочника в полноценный рабочий инструмент живого разговора.
