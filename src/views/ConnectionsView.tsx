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
import { knowledgeNodes, knowledgeNodesById, knowledgeRelations } from '../data/knowledge'
import type { KnowledgeNode, KnowledgeRelation } from '../domain/types'
import { useAppStore } from '../store/useAppStore'
import { buildFocusedKnowledgeGraph } from '../utils/buildFocusedGraph'
import { languageLocale, local, translate } from '../utils/i18n'
import { ExternalIcon, SearchIcon } from '../components/Icons'

interface FlowNodeData extends Record<string, unknown> {
  knowledgeNode: KnowledgeNode
  active: boolean
  relationCount: number
  language: ReturnType<typeof useAppStore.getState>['language']
}

type PravdaNode = Node<FlowNodeData, 'pravda'>

function formatNodeDate(date: string | undefined, language: FlowNodeData['language']): string | null {
  if (!date) return null
  return new Intl.DateTimeFormat(languageLocale(language), {
    month: 'short', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(date))
}

function PravdaKnowledgeNode({ data }: NodeProps<PravdaNode>) {
  const { knowledgeNode, active, relationCount, language } = data
  const date = formatNodeDate(knowledgeNode.date, language)
  return (
    <article className={`knowledge-node type-${knowledgeNode.type}${active ? ' is-active' : ''}`}>
      <Handle type="target" position={Position.Left} className="knowledge-handle" />
      <div className="knowledge-node-meta">
        <span>{local(knowledgeNode.eyebrow, language)}</span>
        {date && <span>{date}</span>}
      </div>
      <h3>{local(knowledgeNode.title, language)}</h3>
      <p>{local(knowledgeNode.summary, language)}</p>
      <div className="knowledge-node-footer">
        <span>{relationCount}</span>
        <span className="node-type-dot" aria-hidden="true" />
      </div>
      <Handle type="source" position={Position.Right} className="knowledge-handle" />
    </article>
  )
}

const nodeTypes = { pravda: PravdaKnowledgeNode }

function edgeFor(relation: KnowledgeRelation, language: FlowNodeData['language'], dimmed = false): Edge {
  const interpretive = relation.confidence === 'interpretive'
  return {
    id: relation.id,
    source: relation.source,
    target: relation.target,
    type: 'smoothstep',
    label: local(relation.label, language),
    markerEnd: { type: MarkerType.ArrowClosed, width: 14, height: 14 },
    className: `knowledge-edge confidence-${relation.confidence}${dimmed ? ' is-secondary' : ''}`,
    style: interpretive ? { strokeDasharray: '5 5' } : undefined,
    labelStyle: { fontSize: 10, fontWeight: 540 },
    labelBgPadding: [5, 3],
    labelBgBorderRadius: 3,
  }
}

function GraphViewport({ nodes, edges, onFocus }: { nodes: PravdaNode[]; edges: Edge[]; onFocus: (id: string) => void }) {
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
      onNodeClick={(_, node) => onFocus(node.id)}
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

function relationOtherNode(relation: KnowledgeRelation, focusId: string): KnowledgeNode | undefined {
  return knowledgeNodesById.get(relation.source === focusId ? relation.target : relation.source)
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

  const focus = knowledgeNodesById.get(focusId) ?? knowledgeNodesById.get('budapest')!
  const graph = useMemo(() => {
    const layout = buildFocusedKnowledgeGraph(focus.id, depth)
    const nodes: PravdaNode[] = layout.nodes.map((item) => ({
      id: item.id,
      type: 'pravda',
      position: item.position,
      data: {
        knowledgeNode: item.knowledgeNode,
        active: item.active,
        relationCount: item.relationCount,
        language,
      },
      zIndex: item.active ? 5 : undefined,
      className: item.secondary ? 'secondary-node' : undefined,
    }))
    const edges = layout.relations.map((item) => edgeFor(item.relation, language, item.secondary))
    return { nodes, edges }
  }, [depth, focus.id, language])
  const incoming = knowledgeRelations.filter((relation) => relation.target === focus.id)
  const outgoing = knowledgeRelations.filter((relation) => relation.source === focus.id)

  const searchResults = useMemo(() => {
    const query = search.trim().toLocaleLowerCase()
    if (!query) return []
    return knowledgeNodes
      .filter((node) => `${local(node.title, language)} ${node.tags.join(' ')}`.toLocaleLowerCase().includes(query))
      .slice(0, 8)
  }, [language, search])

  const selectNode = (id: string) => {
    setFocusId(id)
    setSearch('')
  }

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
                placeholder={language === 'en' ? 'Find a node' : language === 'uk' ? 'Знайти вузол' : 'Найти узел'}
                aria-label="Search nodes"
              />
              {searchResults.length > 0 && (
                <div className="graph-search-results">
                  {searchResults.map((node) => (
                    <button type="button" key={node.id} onClick={() => selectNode(node.id)}>
                      <span>{local(node.eyebrow, language)}</span>
                      <strong>{local(node.title, language)}</strong>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="segmented-control" aria-label="Graph depth">
              <button type="button" className={depth === 1 ? 'is-active' : ''} onClick={() => setDepth(1)}>{t('oneStep')}</button>
              <button type="button" className={depth === 2 ? 'is-active' : ''} onClick={() => setDepth(2)}>{t('twoSteps')}</button>
            </div>
          </div>
        </div>

        <div className="connections-graph" aria-label="Knowledge graph">
          <ReactFlowProvider>
            <GraphViewport nodes={graph.nodes} edges={graph.edges} onFocus={selectNode} />
          </ReactFlowProvider>
          <div className="graph-axis-label graph-axis-left">← {t('incoming')}</div>
          <div className="graph-axis-label graph-axis-right">{t('outgoing')} →</div>
          <div className="graph-legend">
            <span><i className="legend-line direct" />{t('relationDirect')}</span>
            <span><i className="legend-line documented" />{t('relationDocumented')}</span>
            <span><i className="legend-line interpretive" />{t('relationInterpretive')}</span>
          </div>
        </div>
      </div>

      <aside className="connection-inspector">
        <div className="inspector-scroll">
          <div className="inspector-kicker">
            <span>{local(focus.eyebrow, language)}</span>
            {focus.date && <span>{formatNodeDate(focus.date, language)}</span>}
          </div>
          <h2>{local(focus.title, language)}</h2>
          <p className="inspector-summary">{local(focus.summary, language)}</p>

          <div className="inspector-stats">
            <div><strong>{incoming.length}</strong><span>{t('incoming')}</span></div>
            <div><strong>{outgoing.length}</strong><span>{t('outgoing')}</span></div>
          </div>

          {focus.eventId && (
            <button className="primary-outline-button" type="button" onClick={() => navigate(`/event/${focus.eventId}`)}>
              {t('openEvent')}
            </button>
          )}

          <div className="inspector-section">
            <h3>{t('incoming')}</h3>
            <div className="relation-list">
              {incoming.length === 0 && <p>—</p>}
              {incoming.map((relation) => {
                const other = relationOtherNode(relation, focus.id)
                if (!other) return null
                return (
                  <button type="button" key={relation.id} onClick={() => selectNode(other.id)}>
                    <span className={`relation-confidence confidence-${relation.confidence}`} />
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
                const other = relationOtherNode(relation, focus.id)
                if (!other) return null
                return (
                  <button type="button" key={relation.id} onClick={() => selectNode(other.id)}>
                    <span className={`relation-confidence confidence-${relation.confidence}`} />
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

          {focus.sourceUrls && focus.sourceUrls.length > 0 && (
            <div className="inspector-section">
              <h3>{t('sources')}</h3>
              <div className="compact-source-list">
                {focus.sourceUrls.map((url, index) => (
                  <a href={url} target="_blank" rel="noreferrer" key={url}>
                    <span>{index + 1}. {new URL(url).hostname}</span><ExternalIcon />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="tag-row">
            {focus.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </aside>
    </section>
  )
}
