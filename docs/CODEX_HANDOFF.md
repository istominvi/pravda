# Передача PRAVDA в Codex

## Сначала прочитать

1. `README.md`
2. `AGENTS.md`
3. `docs/TRANSCRIPTION_PIPELINE.md`
4. `docs/PLAN.md`
5. `docs/AI_REALTIME_PROTOCOL.md`
6. `docs/CONTENT_MODEL.md`

## Процедурная память проекта (обязательно)

### 1) Деплой после изменений

- **Запрещено оставлять изменения без публикации:** после любого изменения кода или контента выполняется ровно один обязательный цикл `git add` → `git commit` → `git push` в `main` в том же сеансе.
- **Никаких промежуточных пауз:** пока изменения не закоммичены и не запушены, пользовательский результат на https://istominvi.github.io/pravda/ считается неполным.
- Режим работы для этого репозитория: любые кодовые или контентные изменения сразу фиксируются, коммитятся и пушатся в `main`.
- `GitHub Pages` запускается автоматически по push в `main` через `.github/workflows/pages.yml`.
- Не ожидать отдельного запроса на деплой: после `git push` процесс уходит в Actions автоматически.

### 2) Транскрибация и анализ видео

- Актуальный и обязательный регламент: `docs/TRANSCRIPTION_PIPELINE.md`.
- Старый контур на базе `youtube-transcript.ai` отменен. Он допустим только для
  необязательной сверки, но не как источник канонического корпуса.
- Каноническая расшифровка строится локально из оригинального YouTube-аудио полной
  `faster-whisper large-v3`, затем каждый сегмент независимо классифицируется как
  `Александр`, `Другой голос` или `Не уверен`.
- Технические данные и голосовой банк остаются в `.local/`. В репозиторий попадает
  только `transcripts/vzglyad-iz-chetvertogo-izmereniya/<VIDEO_ID>.md`.
- Постоянный голосовой банк заморожен на 108 подтвержденных примерах Александра и
  20 чистых отрицательных примерах. Не переобучать его на автоматически размеченных
  роликах.
- Уже обработаны и проанализированы первые десять самых старых роликов вплоть до `rVX-YnJht-4`.
  Следующий проход начинается с ролика сразу после него в актуальном порядке канала.
- Анализ аргументов выполняется после формирования канонического транскрипта:
  выписывать тезисы Александра с `VIDEO_ID` и таймкодами, проверять контекст и только
  затем обновлять `src/data/aiKnowledge.ts`, `src/data/knowledge.ts` и при
  необходимости `src/views/AIAssistantView.tsx`.

### 3) Принятый рабочий шаблон после каждой сессии с видео

Чтобы избежать повторения прошлых ошибок, в конце сессии всегда фиксировать:

- `VIDEO_ID` и путь к каноническому Markdown и локальному техническому JSONL,
- что было добавлено (конкретные темы/критические точки),
- почему это дополняет существующее, а не дублирует,
- команда(ы) `git add`, `git commit`, `git push` и состояние `main` после пуша.

Если задача завершена — ничего больше не оставляем до следующего запуска, кроме следующей задачи:
  push → GitHub Actions (verify:data/test/lint/build) → Pages.

## Текущее состояние

Первые десять канонических транскриптов проанализированы и интегрированы в пользовательский интерфейс. В проекте есть 17 событий/документов, 37 понятий и 14 структурированных аргументов — всего 68 узлов и 68 статей с одинаковыми идентификаторами. Вкладка «Аргументы» заменена единым каталогом «Статьи» с поиском, фильтром и пагинацией. Хроно, граф и AI ведут на `/articles/:id`; каждая статья открывает тот же узел в Связях. `package-lock.json` и зависимости установлены, строгая проверка TypeScript работает.

### Единая архитектура представлений

- `src/data/articles.ts` автоматически проецирует все `knowledgeNodes` в статьи и не содержит отдельной копии редакционного текста.
- События и документы рендерятся из `EventRecord`, аргументы — из `ArgumentRecord`, понятия — из описания узла, его связей и источников соседних материалов.
- Множество Статей полностью совпадает с множеством узлов Связей.
- Хроно показывает только датированные статьи, чтобы не приписывать понятиям и аргументам вымышленные даты; каждый его элемент входит и в Статьи, и в Связи.
- Старые маршруты `/event/:id`, `/argument/:id` и `/arguments` оставлены как перенаправления на новый каталог.

### Проанализированный корпус

| VIDEO_ID | Канонический Markdown | Технический JSONL |
|---|---|---|
| `4x8stl4ZzdE` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/4x8stl4ZzdE.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/4x8stl4ZzdE/4x8stl4ZzdE.speaker-identified.jsonl` |
| `LkHavUQ4nwc` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/LkHavUQ4nwc.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/LkHavUQ4nwc/LkHavUQ4nwc.speaker-identified.jsonl` |
| `Ol0ue_sDD48` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/Ol0ue_sDD48.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/Ol0ue_sDD48/Ol0ue_sDD48.speaker-identified.jsonl` |
| `wsqPJMI6noM` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/wsqPJMI6noM.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/wsqPJMI6noM/wsqPJMI6noM.speaker-identified.jsonl` |
| `g0wrgfZqVm4` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/g0wrgfZqVm4.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/g0wrgfZqVm4/g0wrgfZqVm4.speaker-identified.jsonl` |
| `-GlUMn0YE1Q` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/-GlUMn0YE1Q.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/-GlUMn0YE1Q/-GlUMn0YE1Q.speaker-identified.jsonl` |
| `QJaaNbt62EA` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/QJaaNbt62EA.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/QJaaNbt62EA/QJaaNbt62EA.speaker-identified.jsonl` |
| `XzvQa4nB5LE` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/XzvQa4nB5LE.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/XzvQa4nB5LE/XzvQa4nB5LE.speaker-identified.jsonl` |
| `ZCO6n5SsXwQ` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/ZCO6n5SsXwQ.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/ZCO6n5SsXwQ/ZCO6n5SsXwQ.speaker-identified.jsonl` |
| `rVX-YnJht-4` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/rVX-YnJht-4.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/rVX-YnJht-4/rVX-YnJht-4.speaker-identified.jsonl` |

`4x8stl4ZzdE` просмотрен полностью, но отдельный аргумент из него не создан: ролик состоит преимущественно из бытовой полемики, иронии и обрывочных формулировок. Это осознанное ограничение, а не пропуск.

`ZCO6n5SsXwQ` также просмотрен полностью без создания отдельного аргумента: тезис о зеркальном отводе войск является чтением прямой речи Зеленского, а версия о «надувании ВВП» дана как одиночная личная оценка без доказательной цепочки.

### Добавленные аргументы

- тактический/медийный эффект операции против стратегического результата;
- военные цели в городе, риск для гражданских и сохраняющиеся обязанности сторон;
- конституционная процедура февраля 2014 года и полномочие на начало АТО;
- общая история без автоматического отрицания отдельной государственности;
- война как ресурсный инструмент политической цели;
- Будапештские заверения и отсутствие автоматического механизма коллективной обороны;
- дилемма безопасности и причинная цепочка эскалации с отдельной юридической оценкой;
- формальные дефекты распада СССР против восстановления без нынешнего согласия;
- правопродолжательство государства против сохранения идеологии;
- единичный автор или памятник против доказательства общественной распространённости идеологии;
- экономика и институты как основа военной и государственной способности.
- избирательный мандат против подмены процедуры моральной оценкой президента;
- многоакторная причинность эскалации 2014 года вместо сведения войны к Гиркину или одному решению;
- единые критерии для сопоставления самоопределения Украины и притязаний Донбасса.

### Что не использовать как установленный факт

- гипотезу о британском управлении операцией «Паутина» и юридический ярлык «терроризм»;
- версию об ударах по Хиросиме и Нагасаки как доказанный мотив;
- слова о том, что независимость Украины была признана именно «на основе» нейтральности;
- Мюнхенскую речь как прямое объявление о создании ядерного оружия;
- утверждение, что украинский ленд-лиз был принят до вторжения: законопроект внесён до, но законом стал после 24 февраля 2022 года;
- единоличную ответственность одной стороны за невыполнение Минска;
- даты «2003» для отзыва ратификации Беловежского соглашения: постановление было принято Госдумой в 1996 году;
- цитаты Ивана Ильина и пересказы других авторов как собственную позицию Александра;
- широкие сравнения России и Украины без метрик.
- число «52 человека» в группе Гиркина без отдельного подтверждения;
- формулу об объявлении АТО 7 апреля как дату юридического решения: решение СНБО датировано 13 апреля и введено в действие указом 14 апреля;
- статус ДНР как уже признанного независимого государства и квалификацию действий Украины как внешней «агрессии»;
- цитату Зеленского о зеркальном отводе войск как собственную позицию Александра;
- предположение о намеренном «надувании ВВП» и прибыли неназванных лиц;
- прогноз о переговорах Трампа без названного предложения, документа и проверяемых условий.

Следующий видео-проход начинается с ролика сразу после `rVX-YnJht-4` по актуальному порядку канала. Локальные незакоммиченные транскрипты более поздних роликов не входили в анализ 6–10; их нужно сверить с порядком канала и рассматривать отдельным следующим диапазоном.

## Приоритет P0

- [x] `npm run verify:data`
- [x] `npm run typecheck`
- [x] `npm test`
- [x] `npm run lint`
- [x] `npm run build`
- [ ] визуально проверить каталог и три типа статей после публикации GitHub Pages

## Приоритет P1 — тесты

Уже добавлены pure unit-тесты для graph layout, целостности данных и `detectTopics` на RU / EN / UA. После установки зависимостей сначала запустить их и исправить возможные расхождения актуальных typings/runtime.

- [x] вынести graph layout в `src/utils/buildFocusedGraph.ts`;
- [x] unit test: узел всегда один раз в графе;
- [x] unit test: depth 1 не содержит second-order nodes;
- [x] unit test: все edges имеют существующие endpoints;
- [x] unit test: `detectTopics` на RU / EN / UA;
- [ ] component test: AI-demo показывает Budapest topic;
- [ ] component test: consent блокирует listen;
- [ ] Playwright: Chrono → Event → Connections;
- [ ] Playwright: AI demo → copy response;

## Приоритет P2 — UI polishing

- [ ] визуально проверить 1440×900, 1280×720, 390×844;
- [ ] добавить screenshots в `docs/screenshots`;
- [ ] проверить drag событий на touch;
- [ ] проверить граф при 200% browser zoom;
- [ ] сделать mobile inspector drawer вместо длинного блока;
- [ ] добавить keyboard navigation списка relations;
- [ ] добавить React Flow controls только если они не нарушают минимализм;
- [ ] убрать или купить attribution только в соответствии с лицензией React Flow.

## Приоритет P3 — архитектурная уборка

- [ ] разделить `styles.css` по feature-файлам либо CSS Layers;
- [ ] вынести форматирование дат;
- [ ] заменить самописный UI dictionary на i18next до роста количества строк;
- [ ] добавить Zod для будущих API payloads;
- [ ] добавить ErrorBoundary;
- [ ] добавить query/error state interfaces;
- [ ] добавить `src/test` setup.

## Не менять без причины

- `HashRouter`: он выбран для GitHub Pages без rewrite;
- направление графа left → center → right;
- три confidence-состояния;
- consent checkbox перед записью;
- три стратегии ответа: clarify / evidence / boundary;
- разделение причины и оправдания;
- запрет на evidence-response без citations в production.

## Acceptance criteria 0.3

```bash
npm ci
npm run verify:data
npm run typecheck
npm run lint
npm test
npm run build
```

Все команды завершаются успешно. GitHub Pages workflow публикует приложение. Демо работает без API-ключей. В репозитории нет секретов.
