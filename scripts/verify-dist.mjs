import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = path.resolve(new URL('..', import.meta.url).pathname)
const dist = path.join(root, 'dist')
const forbidden = /(?:Александр|Олександр|Alexander|VIDEO_ID|youtube\.com|youtu\.be|github\.com\/[^"']*transcripts?|Видеоформат|відеодискус|The videos distinguish|Рассматриваемая позиция|Розглянута позиція|The examined position|nodeIds|sourceEventIds|argumentIds|["']\/(?:event|argument)\/|\b19:26\b)/i
const forbiddenAIResearchText = /(?:Из ролика|З відео|The video frames|В интервью отмечается|The interview explicitly says|В диалоге (?:с|звучит)|У діалозі звучить|У розмові (?:проводиться|згадувались)|The exchange explicitly says|In the 225th example|В его (?:нарративе|трактовке)|His points include|He (?:explicitly says|repeatedly notes|also frames|uses a broader profession analogy|places Minsk|often (?:de-escalates|asks|stresses|references))|Он (?:сравнивал|подчёркивал|доводил|часто)|Він (?:прямо каже|також описував|акцентує|проводив|описує|часто))/i

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name)
    return entry.isDirectory() ? filesUnder(target) : [target]
  }))
  return nested.flat()
}

const publicFiles = await filesUnder(dist)
for (const file of publicFiles) {
  if (!/\.(?:html|css|js|map|json|txt)$/.test(file)) continue
  const content = await readFile(file, 'utf8')
  const match = content.match(forbidden) ?? content.match(forbiddenAIResearchText)
  if (match) {
    console.error(`Published artifact ${path.relative(root, file)} contains forbidden research trace: ${match[0]}`)
    process.exit(1)
  }
}

console.log(`Published artifact is clean: ${publicFiles.length} files checked.`)
