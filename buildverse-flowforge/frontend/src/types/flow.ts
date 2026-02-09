import type { Node, Edge } from 'reactflow';

// ─── Node Data ─────────────────────────────────────────────────
export interface FlowNodeData {
  label: string;
  type?: string;
  color?: string;
  text?: string;
  attributes?: Record<string, string>;
}

// ─── API Response ──────────────────────────────────────────────
export interface GraphResponse {
  nodes: Array<{
    id: string;
    label: string;
    type: string;
    data: FlowNodeData;
  }>;
  edges: Array<{
    id: string;
    source: string;
    target: string;
  }>;
}

// ─── Flow State ────────────────────────────────────────────────
export interface FlowState {
  nodes: Node<FlowNodeData>[];
  edges: Edge[];
  loading: boolean;
  error: string | null;
}

// ─── Export ────────────────────────────────────────────────────
export interface FlowData {
  id: string;
  name: string;
  nodes: Node<FlowNodeData>[];
  edges: Edge[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ParseXmlResponse {
  nodes: Node<FlowNodeData>[];
  edges: Edge[];
}
