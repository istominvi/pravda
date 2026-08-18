import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = path.resolve(new URL('..', import.meta.url).pathname)
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8')

const eventsSource = read('src/data/events.ts')
const knowledgeSource = read('src/data/knowledge.ts')
const aiSource = read('src/data/aiKnowledge.ts')
const argumentsSource = read('src/data/arguments.ts')

const eventIds = [...eventsSource.matchAll(/^    "id": "([^"]+)"/gm)].map((match) => match[1])
const conceptBlock = knowledgeSource.split('const conceptNodes:')[1]?.split('export const knowledgeNodes')[0] ?? ''
const conceptIds = [...conceptBlock.matchAll(/\bid:\s*'([^']+)'/g)].map((match) => match[1])
const argumentBlock = argumentsSource.split('export const argumentsData:')[1]?.split('export const argumentsById')[0] ?? ''
const argumentIds = [...argumentBlock.matchAll(/^    id: '([^']+)'/gm)].map((match) => match[1])
const videoIdBlock = argumentsSource.split('export const argumentVideoIds')[1]?.split('] as const')[0] ?? ''
const videoIds = [...videoIdBlock.matchAll(/'([^']+)'/g)].map((match) => match[1])
const nodeIds = new Set([...eventIds, ...conceptIds, ...argumentIds])
const relations = [...knowledgeSource.matchAll(/\{ id:'([^']+)', source:'([^']+)', target:'([^']+)'/g)]
  .map((match) => ({ id: match[1], source: match[2], target: match[3] }))

const errors = []
const duplicateValues = (values) => values.filter((value, index) => values.indexOf(value) !== index)

for (const duplicate of duplicateValues(eventIds)) errors.push(`Duplicate event id: ${duplicate}`)
for (const duplicate of duplicateValues(conceptIds)) errors.push(`Duplicate concept id: ${duplicate}`)
for (const duplicate of duplicateValues(argumentIds)) errors.push(`Duplicate argument id: ${duplicate}`)
for (const duplicate of duplicateValues(videoIds)) errors.push(`Duplicate transcript video id: ${duplicate}`)
for (const duplicate of duplicateValues(relations.map((relation) => relation.id))) errors.push(`Duplicate relation id: ${duplicate}`)

for (const relation of relations) {
  if (!nodeIds.has(relation.source)) errors.push(`Relation ${relation.id}: missing source ${relation.source}`)
  if (!nodeIds.has(relation.target)) errors.push(`Relation ${relation.id}: missing target ${relation.target}`)
  if (relation.source === relation.target) errors.push(`Relation ${relation.id}: self-loop is not allowed in the seed graph`)
}

for (const match of aiSource.matchAll(/nodeIds:\s*\[([^\]]*)\]/g)) {
  const ids = [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
  for (const id of ids) if (!nodeIds.has(id)) errors.push(`AI topic references missing node: ${id}`)
}

for (const match of aiSource.matchAll(/sourceEventIds:\s*\[([^\]]*)\]/g)) {
  const ids = [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
  for (const id of ids) if (!eventIds.includes(id)) errors.push(`AI topic references missing event: ${id}`)
}

for (const match of aiSource.matchAll(/argumentIds:\s*\[([^\]]*)\]/g)) {
  const ids = [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
  for (const id of ids) if (!argumentIds.includes(id)) errors.push(`AI topic references missing argument: ${id}`)
}

for (const match of argumentBlock.matchAll(/relatedNodeIds:\s*\[([^\]]*)\]/g)) {
  const ids = [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
  for (const id of ids) if (!nodeIds.has(id)) errors.push(`Argument references missing node: ${id}`)
}

for (const match of argumentBlock.matchAll(/relatedEventIds:\s*\[([^\]]*)\]/g)) {
  const ids = [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
  for (const id of ids) if (!eventIds.includes(id)) errors.push(`Argument references missing event: ${id}`)
}

for (const match of argumentBlock.matchAll(/relatedArgumentIds:\s*\[([^\]]*)\]/g)) {
  const ids = [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1])
  for (const id of ids) if (!argumentIds.includes(id)) errors.push(`Argument references missing argument: ${id}`)
}

for (const match of argumentBlock.matchAll(/citation\('([^']+)',\s*'(\d{2}:\d{2}:\d{2})',\s*'(\d{2}:\d{2}:\d{2})'/g)) {
  const [, videoId, start, end] = match
  if (!videoIds.includes(videoId)) errors.push(`Citation references unknown video: ${videoId}`)
  if (start >= end) errors.push(`Citation ${videoId} has invalid range: ${start}–${end}`)
}

for (const videoId of videoIds) {
  const transcriptPath = path.join(root, 'transcripts/vzglyad-iz-chetvertogo-izmereniya', `${videoId}.md`)
  if (!fs.existsSync(transcriptPath)) errors.push(`Missing canonical transcript: ${videoId}.md`)
}

const urls = [...eventsSource.matchAll(/"url": "([^"]+)"/g)].map((match) => match[1])
for (const url of urls) if (!/^https:\/\//.test(url)) errors.push(`Non-HTTPS source URL: ${url}`)
const argumentUrls = [...argumentsSource.matchAll(/url:\s*'([^']+)'/g)].map((match) => match[1])
for (const url of argumentUrls) if (!/^https:\/\//.test(url)) errors.push(`Non-HTTPS argument source URL: ${url}`)

if (eventIds.length < 10) errors.push(`Expected at least 10 events, found ${eventIds.length}`)
if (relations.length < 20) errors.push(`Expected at least 20 relations, found ${relations.length}`)
if (argumentIds.length < 10) errors.push(`Expected at least 10 arguments, found ${argumentIds.length}`)

if (errors.length) {
  console.error('PRAVDA data verification failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`PRAVDA data OK: ${eventIds.length} events, ${conceptIds.length} concepts, ${argumentIds.length} arguments, ${relations.length} explicit relations.`)
