# Передача PRAVDA в Codex

## Сначала прочитать

1. `README.md`
2. `docs/PLAN.md`
3. `docs/AI_REALTIME_PROTOCOL.md`
4. `docs/CONTENT_MODEL.md`

## Текущее состояние

Исходники версии 0.2 готовы. В среде, где архив был собран, реестр npm был недоступен (`EAI_AGAIN`), поэтому `node_modules` и `package-lock.json` намеренно отсутствуют. Синтаксис TypeScript/TSX проверен локальным компилятором в режиме `--noCheck`, а ссылочная целостность seed-данных проверена `scripts/verify-data.mjs`. GitHub Pages workflow временно умеет использовать `npm install`, когда lockfile отсутствует; после первой успешной установки lockfile нужно закоммитить, после чего workflow автоматически перейдёт на `npm ci`.

Первое действие Codex — выполнить реальную установку и строгую проверку типов.

## Приоритет P0

- [ ] `npm install`
- [ ] закоммитить `package-lock.json`
- [ ] `npm run verify:data`
- [ ] `npm run typecheck`
- [ ] исправить ошибки typings без отключения `strict`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] открыть `dist` через `npm run preview`

Возможные места первого внимания:

- generics `NodeProps` / `Node` в `ConnectionsView.tsx` для актуальной версии `@xyflow/react`;
- типы Web Speech API в `useSpeechRecognition.ts`;
- совместимость TypeScript 7 с текущей версией typescript-eslint;
- актуальные minor-версии Vite и React plugin.

Не понижать версии автоматически. Сначала проверить официальные migration notes.

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
