import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  Background,
  BackgroundVariant,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from '@xyflow/react'
import { articleNumberById, articlePath, articleRelations, articlesById, articlesData } from '../data/articles'
import { useAppStore } from '../store/useAppStore'
import { languageLocale, local, translate } from '../utils/i18n'
import { SearchIcon } from '../components/Icons'

type Article = (typeof articlesData)[number]
type ArticleRelation = (typeof articleRelations)[number]

interface FlowNodeData extends Record<string, unknown> {
  article: Article
  active: boolean
  language: ReturnType<typeof useAppStore.getState>['language']
}

type PravdaNode = Node<FlowNodeData, 'pravda'>

function formatArticleDate(date: string, language: FlowNodeData['language']): string {
  return new Intl.DateTimeFormat(languageLocale(language), {
    month: 'short', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(date))
}

function PravdaArticleNode({ data }: NodeProps<PravdaNode>) {
  const { article, active, language } = data
  return (
    <article className={`knowledge-node${active ? ' is-active' : ''}`}>
      <Handle type="target" position={Position.Left} className="knowledge-handle" />
      <div className="knowledge-node-meta">
        <span>{translate(language, 'article')} № {String(articleNumberById.get(article.id) ?? article.number).padStart(2, '0')}</span>
        <span>{formatArticleDate(article.chronologyDate, language)}</span>
      </div>
      <h3>{local(article.title, language)}</h3>
      <p>{local(article.summary, language)}</p>
      <Handle type="source" position={Position.Right} className="knowledge-handle" />
    </article>
  )
}

const nodeTypes = { pravda: PravdaArticleNode }

function edgeFor(relation: ArticleRelation, language: FlowNodeData['language'], dimmed = false): Edge {
  return {
    id: relation.id,
    source: relation.source,
    target: relation.target,
    type: 'smoothstep',
    label: local(relation.label, language),
    markerEnd: { type: MarkerType.ArrowClosed, width: 14, height: 14 },
    className: `knowledge-edge${dimmed ? ' is-secondary' : ''}`,
    labelStyle: { fontSize: 10, fontWeight: 540 },
    labelBgPadding: [5, 3],
    labelBgBorderRadius: 3,
  }
}

function spread(index: number, count: number, gap: number): number {
  return (index - (count - 1) / 2) * gap
}

function buildArticleGraph(focus: Article, depth: 1 | 2, language: FlowNodeData['language']) {
  const incoming = articleRelations.filter((relation) => relation.target === focus.id)
  const outgoing = articleRelations.filter((relation) => relation.source === focus.id)
  const nodes: PravdaNode[] = [{
    id: focus.id,
    type: 'pravda',
    position: { x: 0, y: 0 },
    data: { article: focus, active: true, language },
    zIndex: 5,
  }]
  const relations: Array<{ relation: ArticleRelation; secondary: boolean }> = []
  const included = new Set([focus.id])

  const addNode = (article: Article, x: number, y: number, secondary = false) => {
    if (included.has(article.id)) return
    included.add(article.id)
    nodes.push({
      id: article.id,
      type: 'pravda',
      position: { x, y },
      data: { article, active: false, language },
      className: secondary ? 'secondary-node' : undefined,
    })
  }

  incoming.forEach((relation, index) => {
    const article = articlesById.get(relation.source)
    if (!article) return
    addNode(article, -440, spread(index, incoming.length, 176))
    relations.push({ relation, secondary: false })
  })

  outgoing.forEach((relation, index) => {
    const article = articlesById.get(relation.target)
    if (!article) return
    addNode(article, 440, spread(index, outgoing.length, 176))
    relations.push({ relation, secondary: false })
  })

  if (depth === 2) {
    incoming.forEach((parentRelation, parentIndex) => {
      const candidates = articleRelations
        .filter((relation) => relation.target === parentRelation.source && !included.has(relation.source))
        .slice(0, 3)
      candidates.forEach((relation, childIndex) => {
        const article = articlesById.get(relation.source)
        if (!article) return
        addNode(article, -850, spread(parentIndex, incoming.length, 176) + spread(childIndex, candidates.length, 138), true)
        relations.push({ relation, secondary: true })
      })
    })

    outgoing.forEach((parentRelation, parentIndex) => {
      const candidates = articleRelations
        .filter((relation) => relation.source === parentRelation.target && !included.has(relation.target))
        .slice(0, 3)
      candidates.forEach((relation, childIndex) => {
        const article = articlesById.get(relation.target)
        if (!article) return
        addNode(article, 850, spread(parentIndex, outgoing.length, 176) + spread(childIndex, candidates.length, 138), true)
        relations.push({ relation, secondary: true })
      })
    })
  }

  return { nodes, edges: relations.map((item) => edgeFor(item.relation, language, item.secondary)) }
}

function GraphViewport({ nodes, edges, onOpenArticle }: { nodes: PravdaNode[]; edges: Edge[]; onOpenArticle: (id: string) => void }) {
  const { fitView } = useReactFlow()

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      void fitView({ padding: 0.25, duration: 420, minZoom: 0.46, maxZoom: 1.15 })
    })
    return () => cancelAnimationFrame(frame)
  }, [edges, fitView, nodes])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodeClick={(_, node) => onOpenArticle(node.id)}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable
      minZoom={0.2}
      maxZoom={1.8}
      proOptions={{ hideAttribution: false }}
      fitView
    >
      <Background variant={BackgroundVariant.Dots} gap={28} size={1} className="knowledge-background" />
    </ReactFlow>
  )
}

function relationOtherArticle(relation: ArticleRelation, focusId: string): Article | undefined {
  return articlesById.get(relation.source === focusId ? relation.target : relation.source)
}

export function ConnectionsView() {
  const navigate = useNavigate()
  const language = useAppStore((state) => state.language)
  const focusId = useAppStore((state) => state.mapFocusId)
  const depth = useAppStore((state) => state.mapDepth)
  const setFocusId = useAppStore((state) => state.setMapFocusId)
  const setDepth = useAppStore((state) => state.setMapDepth)
  const [search, setSearch] = useState('')
  const t = (key: Parameters<typeof translate>[1]) => translate(language, key)

  const focus = articlesById.get(focusId) ?? articlesData[0]
  const graph = useMemo(
    () => focus ? buildArticleGraph(focus, depth, language) : { nodes: [], edges: [] },
    [depth, focus, language],
  )
  const incoming = focus ? articleRelations.filter((relation) => relation.target === focus.id) : []
  const outgoing = focus ? articleRelations.filter((relation) => relation.source === focus.id) : []

  const searchResults = useMemo(() => {
    const query = search.trim().toLocaleLowerCase()
    if (!query) return []
    return articlesData
      .filter((article) => `${local(article.title, language)} ${local(article.summary, language)}`.toLocaleLowerCase().includes(query))
      .slice(0, 8)
  }, [language, search])

  const selectArticle = (id: string) => {
    setFocusId(id)
    setSearch('')
  }

  const openArticle = (id: string) => navigate(articlePath(id))

  if (!focus) return null

  return (
    <section className="connections-view">
      <div className="connections-canvas-column">
        <div className="connections-heading">
          <div>
            <span className="section-kicker">PRAVDA / {t('connections')}</span>
            <h1>{t('connectionTitle')}</h1>
            <p>{t('connectionIntro')}</p>
          </div>
          <div className="connections-toolbar">
            <div className="graph-search-wrap">
              <SearchIcon />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t('findArticle')}
                aria-label={t('findArticle')}
              />
              {searchResults.length > 0 && (
                <div className="graph-search-results">
                  {searchResults.map((article) => (
                    <button type="button" key={article.id} onClick={() => selectArticle(article.id)}>
                      <span>{t('article')} № {String(article.number).padStart(2, '0')}</span>
                      <strong>{local(article.title, language)}</strong>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="segmented-control" aria-label={t('graphDepth')}>
              <button type="button" className={depth === 1 ? 'is-active' : ''} onClick={() => setDepth(1)}>{t('oneStep')}</button>
              <button type="button" className={depth === 2 ? 'is-active' : ''} onClick={() => setDepth(2)}>{t('twoSteps')}</button>
            </div>
          </div>
        </div>

        <div className="connections-graph" aria-label={t('connectionTitle')}>
          <ReactFlowProvider>
            <GraphViewport nodes={graph.nodes} edges={graph.edges} onOpenArticle={openArticle} />
          </ReactFlowProvider>
          <div className="graph-axis-label graph-axis-left">← {t('incoming')}</div>
          <div className="graph-axis-label graph-axis-right">{t('outgoing')} →</div>
        </div>
      </div>

      <aside className="connection-inspector">
        <div className="inspector-scroll">
          <div className="inspector-kicker">
            <span>{t('article')} № {String(focus.number).padStart(2, '0')}</span>
            <span>{formatArticleDate(focus.chronologyDate, language)}</span>
          </div>
          <h2>{local(focus.title, language)}</h2>
          <p className="inspector-summary">{local(focus.summary, language)}</p>

          <button className="primary-outline-button" type="button" onClick={() => openArticle(focus.id)}>
            {t('openArticle')}
          </button>

          <div className="inspector-section">
            <h3>{t('incoming')}</h3>
            <div className="relation-list">
              {incoming.length === 0 && <p>—</p>}
              {incoming.map((relation) => {
                const other = relationOtherArticle(relation, focus.id)
                if (!other) return null
                return (
                  <button type="button" key={relation.id} onClick={() => selectArticle(other.id)}>
                    <span>
                      <small>{local(relation.label, language)}</small>
                      <strong>{local(other.title, language)}</strong>
                      <em>{local(relation.note, language)}</em>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="inspector-section">
            <h3>{t('outgoing')}</h3>
            <div className="relation-list">
              {outgoing.length === 0 && <p>—</p>}
              {outgoing.map((relation) => {
                const other = relationOtherArticle(relation, focus.id)
                if (!other) return null
                return (
                  <button type="button" key={relation.id} onClick={() => selectArticle(other.id)}>
                    <span>
                      <small>{local(relation.label, language)}</small>
                      <strong>{local(other.title, language)}</strong>
                      <em>{local(relation.note, language)}</em>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}
