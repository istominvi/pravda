import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = path.resolve(new URL('..', import.meta.url).pathname)
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8')

const eventsSource = read('src/data/events.ts')
const knowledgeSource = read('src/data/knowledge.ts')
const aiSource = read('src/data/aiKnowledge.ts')

const eventIds = [...eventsSource.matchAll(/^    "id": "([^"]+)"/gm)].map((match) => match[1])
const conceptBlock = knowledgeSource.split('const conceptNodes:')[1]?.split('export const knowledgeNodes')[0] ?? ''
const conceptIds = [...conceptBlock.matchAll(/\bid:\s*'([^']+)'/g)].map((match) => match[1])
const nodeIds = new Set([...eventIds, ...conceptIds])
const relations = [...knowledgeSource.matchAll(/\{ id:'([^']+)', source:'([^']+)', target:'([^']+)'/g)]
  .map((match) => ({ id: match[1], source: match[2], target: match[3] }))

const errors = []
const duplicateValues = (values) => values.filter((value, index) => values.indexOf(value) !== index)

for (const duplicate of duplicateValues(eventIds)) errors.push(`Duplicate event id: ${duplicate}`)
for (const duplicate of duplicateValues(conceptIds)) errors.push(`Duplicate concept id: ${duplicate}`)
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

const urls = [...eventsSource.matchAll(/"url": "([^"]+)"/g)].map((match) => match[1])
for (const url of urls) if (!/^https:\/\//.test(url)) errors.push(`Non-HTTPS source URL: ${url}`)

if (eventIds.length < 10) errors.push(`Expected at least 10 events, found ${eventIds.length}`)
if (relations.length < 20) errors.push(`Expected at least 20 relations, found ${relations.length}`)

if (errors.length) {
  console.error('PRAVDA data verification failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`PRAVDA data OK: ${eventIds.length} events, ${conceptIds.length} concepts, ${relations.length} relations.`)
