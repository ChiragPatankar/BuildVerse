import dagre from 'dagre';
import type { Node, Edge } from 'reactflow';
import { Position } from 'reactflow';

const NODE_WIDTH = 240;
const NODE_HEIGHT = 80;
const DECISION_SIZE = 140;

/**
 * Auto-layout nodes using dagre — top-to-bottom (TB).
 *
 * - Recalculates positions from scratch each time.
 * - Decision nodes get extra size so diamonds don't overlap.
 * - Proper spacing to prevent any overlaps.
 */
export function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  direction: 'TB' | 'LR' = 'TB'
): { nodes: Node[]; edges: Edge[] } {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));

  const isHorizontal = direction === 'LR';

  g.setGraph({
    rankdir: direction,
    nodesep: 80,
    ranksep: 120,
    edgesep: 40,
    marginx: 50,
    marginy: 50,
  });

  // Add nodes with appropriate sizes
  nodes.forEach((node) => {
    const isDiamond = node.type === 'decision';
    g.setNode(node.id, {
      width: isDiamond ? DECISION_SIZE : NODE_WIDTH,
      height: isDiamond ? DECISION_SIZE : NODE_HEIGHT,
    });
  });

  // Add edges
  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  // Compute layout
  dagre.layout(g);

  // Map computed positions back to React Flow
  const layoutedNodes = nodes.map((node) => {
    const pos = g.node(node.id);
    const isDiamond = node.type === 'decision';
    const w = isDiamond ? DECISION_SIZE : NODE_WIDTH;
    const h = isDiamond ? DECISION_SIZE : NODE_HEIGHT;

    return {
      ...node,
      targetPosition: isHorizontal ? Position.Left : Position.Top,
      sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
      position: {
        x: pos.x - w / 2,
        y: pos.y - h / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}
