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
- Уже обработаны и проанализированы первые сорок самых старых роликов вплоть до `dLv5SUB9x6A`.
  Следующий проход начинается с ролика сразу после него в актуальном порядке канала.
- Редакционный анализ выполняется после формирования канонического транскрипта:
  во внутренней памяти сохранять смысловые линии, встречные позиции, `VIDEO_ID` и
  таймкоды, затем проверять факты по официальным документам и дополнять единый
  корпус через `src/data/articleBuilder.ts` и `src/data/articleEditorial*.ts`, после
  чего выполнять `npm run generate:data`. AI связывается с корпусом только через `articleIds`.
- Александр, видео и транскрипты служат только внутренним материалом для построения
  нарратива. В публичных статьях не должно быть атрибуции Александру, фрагментов
  транскрипта, `VIDEO_ID`, ссылок на YouTube или GitHub-копии транскриптов.

### 3) Принятый рабочий шаблон после каждой сессии с видео

Чтобы избежать повторения прошлых ошибок, в конце сессии всегда фиксировать:

- `VIDEO_ID` и путь к каноническому Markdown и локальному техническому JSONL,
- что было добавлено (конкретные темы/критические точки),
- почему это дополняет существующее, а не дублирует,
- результаты цепочки `generate:data` → `verify:data` → `test` → `typecheck` → `lint` → `build`,
  команды `git add`, `git commit`, `git push` и состояние `main` после пуша.

Если задача завершена — ничего больше не оставляем до следующего запуска, кроме следующей задачи:
  generate:data → verify:data → test → typecheck → lint → build → push → GitHub Actions → Pages.

## Текущее состояние

Первые сорок канонических транскриптов проанализированы как внутренний редакционный материал и использованы для построения нарратива корпуса. Публичная модель содержит ровно 85 статей. Это один и тот же набор в трёх представлениях: Хроно размещает статьи на шкале времени, Связи соединяют те же статьи стрелками, а Статьи показывают их в хронологически отсортированном и пронумерованном списке. Все представления ведут на `/articles/:id`. `package-lock.json` и зависимости установлены, строгая проверка TypeScript работает.

### Единая архитектура представлений

- Единственная публичная сущность — `ArticleRecord`; граф не поддерживает отдельный набор узлов. Браузерная обёртка `src/data/articles.ts` импортирует только чистый generated-файл `src/data/articles.public.ts`.
- Все 85 статей написаны индивидуально, имеют `chronologyDate`, содержательный вводный текст, четыре развёрнутых раздела, официальные HTTPS-источники и связи с другими статьями. Общий шаблон не считается редакционным расширением.
- Хроно, Связи и каталог импортируют один `articlesData`; `articleRelations` хранит только стрелки между идентификаторами статей.
- Отображаемый номер — вычисляемая позиция в отсортированном общем реестре, а не постоянный ключ. Вставка более ранней статьи пересчитывает последующие номера, но URL `/articles/:id` не меняется.
- Статья не помечается публичным типом «событие», «понятие», «документ» или «аргумент». Она может раскрывать событие, правовой вопрос и несколько конкурирующих объяснений внутри одного редакционного материала.
- Публичная страница не показывает теги, уровень уверенности интерпретации, количество связей/источников, диалог «возражение — ответ» или технические доказательства из транскрипта.
- Официальные документы привязываются к соответствующим разделам статьи и могут дополнительно собираться в список источников внизу; YouTube и транскрипты не входят в публичные `sources`.
- AI-темы используют один массив `articleIds`; прежние отдельные пространства идентификаторов не являются частью публичного контракта.
- Legacy-данные загружаются только Node-side builder-файлом `src/data/articleBuilder.ts`. После их или editorial-файлов изменения нужно выполнить `npm run generate:data`; `verify:data` проверит актуальность проекции, а production `build` дополнительно выполнит `verify:dist`.
- Публичные материалы открываются только по `/articles/:id`; старые маршруты
  отдельных сущностей удалены и не должны возвращаться.

### Внутренний проанализированный корпус (не источник сайта)

Таблица нужна только для воспроизводимости редакционного процесса. Эти пути и
`VIDEO_ID` не переносятся в публичные статьи и не используются для атрибуции.

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
| `R0EoG5eVsOo` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/R0EoG5eVsOo.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/R0EoG5eVsOo/R0EoG5eVsOo.speaker-identified.jsonl` |
| `lapcK0stuxA` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/lapcK0stuxA.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/lapcK0stuxA/lapcK0stuxA.speaker-identified.jsonl` |
| `KxBa0Lt-Mok` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/KxBa0Lt-Mok.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/KxBa0Lt-Mok/KxBa0Lt-Mok.speaker-identified.jsonl` |
| `Q-iePxBnNTQ` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/Q-iePxBnNTQ.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/Q-iePxBnNTQ/Q-iePxBnNTQ.speaker-identified.jsonl` |
| `_gO2fCj04xU` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/_gO2fCj04xU.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/_gO2fCj04xU/_gO2fCj04xU.speaker-identified.jsonl` |
| `sf52Mzd6sss` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/sf52Mzd6sss.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/sf52Mzd6sss/sf52Mzd6sss.speaker-identified.jsonl` |
| `FzMfd4Y0FY8` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/FzMfd4Y0FY8.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/FzMfd4Y0FY8/FzMfd4Y0FY8.speaker-identified.jsonl` |
| `L-S-zI9CGOs` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/L-S-zI9CGOs.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/L-S-zI9CGOs/L-S-zI9CGOs.speaker-identified.jsonl` |
| `UiyzcTNxSho` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/UiyzcTNxSho.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/UiyzcTNxSho/UiyzcTNxSho.speaker-identified.jsonl` |
| `KhamiqPbdHA` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/KhamiqPbdHA.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/KhamiqPbdHA/KhamiqPbdHA.speaker-identified.jsonl` |
| `iqJaKlLyg1k` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/iqJaKlLyg1k.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/iqJaKlLyg1k/iqJaKlLyg1k.speaker-identified.jsonl` |
| `h1g_8rzhqps` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/h1g_8rzhqps.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/h1g_8rzhqps/h1g_8rzhqps.speaker-identified.jsonl` |
| `url6SajVXEg` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/url6SajVXEg.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/url6SajVXEg/url6SajVXEg.speaker-identified.jsonl` |
| `JKo3cmvTaNw` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/JKo3cmvTaNw.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/JKo3cmvTaNw/JKo3cmvTaNw.speaker-identified.jsonl` |
| `nHsb1-k5M8o` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/nHsb1-k5M8o.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/nHsb1-k5M8o/nHsb1-k5M8o.speaker-identified.jsonl` |
| `LMXxNA8cWEM` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/LMXxNA8cWEM.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/LMXxNA8cWEM/LMXxNA8cWEM.speaker-identified.jsonl` |
| `d5rh2vhGNyE` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/d5rh2vhGNyE.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/d5rh2vhGNyE/d5rh2vhGNyE.speaker-identified.jsonl` |
| `hchsw5sDcfg` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/hchsw5sDcfg.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/hchsw5sDcfg/hchsw5sDcfg.speaker-identified.jsonl` |
| `YIB-Z9HBA8w` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/YIB-Z9HBA8w.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/YIB-Z9HBA8w/YIB-Z9HBA8w.speaker-identified.jsonl` |
| `Hq6QtPJ2YxE` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/Hq6QtPJ2YxE.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/Hq6QtPJ2YxE/Hq6QtPJ2YxE.speaker-identified.jsonl` |
| `8ztj33M8BSg` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/8ztj33M8BSg.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/8ztj33M8BSg/8ztj33M8BSg.speaker-identified.jsonl` |
| `xwoJAY30GsQ` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/xwoJAY30GsQ.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/xwoJAY30GsQ/xwoJAY30GsQ.speaker-identified.jsonl` |
| `fH3e1-7hy5M` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/fH3e1-7hy5M.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/fH3e1-7hy5M/fH3e1-7hy5M.speaker-identified.jsonl` |
| `IKGHlmzezvs` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/IKGHlmzezvs.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/IKGHlmzezvs/IKGHlmzezvs.speaker-identified.jsonl` |
| `a0hkd6WG9T8` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/a0hkd6WG9T8.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/a0hkd6WG9T8/a0hkd6WG9T8.speaker-identified.jsonl` |
| `7k6eI7PEg7M` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/7k6eI7PEg7M.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/7k6eI7PEg7M/7k6eI7PEg7M.speaker-identified.jsonl` |
| `gXue12vfGxA` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/gXue12vfGxA.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/gXue12vfGxA/gXue12vfGxA.speaker-identified.jsonl` |
| `nbJBJmPJ88Y` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/nbJBJmPJ88Y.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/nbJBJmPJ88Y/nbJBJmPJ88Y.speaker-identified.jsonl` |
| `Gd5k8CbKi2Q` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/Gd5k8CbKi2Q.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/Gd5k8CbKi2Q/Gd5k8CbKi2Q.speaker-identified.jsonl` |
| `dLv5SUB9x6A` | `transcripts/vzglyad-iz-chetvertogo-izmereniya/dLv5SUB9x6A.md` | `.local/transcription-cache/vzglyad-iz-chetvertogo-izmereniya/dLv5SUB9x6A/dLv5SUB9x6A.speaker-identified.jsonl` |

`4x8stl4ZzdE` просмотрен полностью, но самостоятельная статья по нему не создавалась: ролик состоит преимущественно из бытовой полемики, иронии и обрывочных формулировок. Это осознанное ограничение, а не пропуск.

`ZCO6n5SsXwQ` также просмотрен полностью без создания самостоятельной статьи: тезис о зеркальном отводе войск является чтением прямой речи Зеленского, а версия о «надувании ВВП» дана как одиночная личная оценка без доказательной цепочки.

В диапазоне 11–30 отдельные статьи не создавались для `KxBa0Lt-Mok` и `iqJaKlLyg1k`: содержательные фрагменты повторяют уже раскрытые линии без нового проверяемого шага. Темы из `Q-iePxBnNTQ` о Львове и из `YIB-Z9HBA8w` о реакциях в соцсетях также не вынесены в самостоятельные статьи из-за недостаточной доказательной базы. Полезные повторы из остальных роликов использованы только во внутреннем редакционном анализе и помогли уточнить уже существующие статьи.

Диапазон 31–40 полностью прочитан без создания новых статей: обсуждения продолжают уже существующие линии о Минске, Крыме, Будапештском меморандуме, смене власти 2014 года и стандартах доказательства. Проверяемые новые шаги добавлены в релевантные материалы, а повторяющиеся оценки военного исхода, мобилизации и внешней поддержки не вынесены в отдельные сущности.

### Смысловые линии, интегрированные в статьи

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
- действительное согласие на ввод иностранных сил: полномочия автора, хронология и пределы;
- различие закона об амнистии и судебного установления состава государственного переворота;
- политическая функция риторики угрозы без вывода о вымышленности самой угрозы;
- непрерывность президентских полномочий и запрет выборов во время военного положения;
- стамбульские предложения 2022 года как переговорный проект, а не подписанный мирный договор;
- различие фактического контроля и международно-правового признания территории;
- полная цепочка актов передачи Крыма 1954 года и отдельный вопрос демократического участия;
- различие прекращения огня и устойчивого мирного порядка.
- точная география Минского комплекса мер: отдельные районы Донецкой и Луганской областей, а не Крым, Херсонская или Запорожская области;
- отсутствие наблюдения в отчёте миссии как ограниченный факт, а не автоматическое доказательство отсутствия вообще;
- военный контроль и устройство кампании как элементы свободы голосования даже без записи прямого принуждения конкретного избирателя;
- соглашение 21 февраля 2014 года как отдельный политический график, который нужно отличать от Конституции и постановления Рады 22 февраля;
- Будапештские заверения Украине как государству без условия об неизменности президента, правительства, Конституции или внешнеполитического курса.

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
- гипотезу о непубличном согласии Януковича до 1 марта 2014 года без отдельного источника;
- включение статьи 109 УК в закон № 743-VII как судебное доказательство государственного переворота;
- политическую выгоду от образа внешней угрозы как доказательство её заведомой ложности;
- тезис об автоматическом прекращении полномочий президента по истечении пяти лет без учёта статей 103/108 Конституции и запрета выборов при военном положении;
- стамбульский проект как подписанный договор и визит Бориса Джонсона как единственную доказанную причину прекращения переговоров;
- фактический территориальный контроль как автоматическое международное признание;
- отсутствие референдума 1954 года как достаточное доказательство ничтожности передачи без указания обязательной на тот момент нормы;
- тезисы о «фашистской ориентации Львова» и выводы из лайков/дизлайков без репрезентативных данных.
- отсутствие зафиксированных СММ ОБСЕ регулярных российских частей как доказательство полного отсутствия российского военного участия;
- позднейшие заявления Порошенко о функции Минска как достаточное доказательство первоначального единого замысла всех участников;
- Минские соглашения как документ о Запорожской, Херсонской областях или Крыме;
- смену власти или внешнеполитического курса Украины как автоматическое прекращение Будапештских заверений;
- отсутствие видеозаписи прямого принуждения избирателя как достаточное доказательство свободных условий крымского голосования;
- ресурсное соглашение США и Украины как «контрибуцию» без анализа текста, структуры фонда и обязательств сторон;
- утверждения об исключительно добровольном комплектовании российских сил и полностью тождественные сравнения мобилизационных практик без официальных сопоставимых данных;
- оценки поражения Европы, неизбежного обвала фронта или стоимости войны как установленные факты без метрик, периода и проверяемой модели.

Следующий видео-проход начинается с ролика сразу после `dLv5SUB9x6A` по актуальному порядку канала. Диапазоны 11–30 и 31–40 полностью прочитаны; продолжение нужно сверить с текущим списком YouTube, поскольку порядок канала может измениться.

## Приоритет P0

- [x] `npm run generate:data`
- [x] `npm run verify:data`
- [x] `npm test`
- [x] `npm run typecheck`
- [x] `npm run lint`
- [x] `npm run build`
- [ ] визуально проверить единый корпус во всех трёх представлениях после публикации GitHub Pages

## Приоритет P1 — тесты

Уже добавлены pure unit-тесты для graph layout, целостности данных и `detectTopics` на RU / EN / UA. После установки зависимостей сначала запустить их и исправить возможные расхождения актуальных typings/runtime.

- [x] вынести graph layout в `src/utils/buildFocusedGraph.ts`;
- [x] unit test: статья всегда один раз в графе;
- [x] unit test: depth 1 не содержит second-order nodes;
- [x] unit test: все edges имеют существующие endpoints;
- [x] unit test: `detectTopics` на RU / EN / UA;
- [ ] component test: AI-demo показывает Budapest topic;
- [ ] component test: consent блокирует listen;
- [ ] Playwright: Chrono → Article → Connections;
- [ ] Playwright: AI demo → copy response;

## Приоритет P2 — UI polishing

- [ ] визуально проверить 1440×900, 1280×720, 390×844;
- [ ] добавить screenshots в `docs/screenshots`;
- [ ] проверить drag статей на touch;
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

- `BrowserRouter` и `public/404.html`: вместе они сохраняют прямые маршруты на GitHub Pages;
- направление графа left → center → right;
- consent checkbox перед записью;
- три стратегии ответа: clarify / evidence / boundary;
- разделение причины и оправдания;
- запрет на evidence-response без официальных источников в production.

## Acceptance criteria 0.3

```bash
npm ci
npm run generate:data
npm run verify:data
npm test
npm run typecheck
npm run lint
npm run build
```

Все команды завершаются успешно. GitHub Pages workflow публикует приложение. Демо работает без API-ключей. В репозитории нет секретов.
