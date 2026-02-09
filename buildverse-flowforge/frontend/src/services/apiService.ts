/**
 * API service for FlowForge — handles all backend communication.
 *
 * Uses a lightweight Axios-style wrapper over fetch for clean
 * request/response handling with automatic error parsing.
 */

import type { Node, Edge } from 'reactflow';
import type { FlowNodeData } from '../types/flow';

// ─── Config ───────────────────────────────────────────────────
const BASE_URL = '/api';
const TIMEOUT = 30_000;

// ─── Lightweight HTTP client (Axios-style) ────────────────────
interface RequestConfig {
  method?: string;
  body?: string;
  signal?: AbortSignal;
}

class ApiError extends Error {
  status: number;
  data: Record<string, unknown>;

  constructor(message: string, status: number, data: Record<string, unknown> = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

async function request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: config.method || 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: config.body,
      signal: config.signal || controller.signal,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new ApiError(
        data.error || `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        data
      );
    }

    return data as T;
  } catch (err) {
    if (err instanceof ApiError) throw err;
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new ApiError('Request timed out', 408);
    }
    throw new ApiError(
      err instanceof Error ? err.message : 'Network error — is the backend running?',
      0
    );
  } finally {
    clearTimeout(timer);
  }
}

// ─── Response shapes from backend ─────────────────────────────
interface BackendNode {
  id: string;
  label: string;
  type: string;
  data: {
    label: string;
    type: string;
    color: string;
    text?: string;
    attributes?: Record<string, string>;
  };
}

interface BackendEdge {
  id: string;
  source: string;
  target: string;
}

interface ParseXmlBackendResponse {
  nodes: BackendNode[];
  edges: BackendEdge[];
}

// ─── Parse XML → Graph JSON ───────────────────────────────────
export async function parseXml(
  xmlContent: string
): Promise<{ nodes: Node<FlowNodeData>[]; edges: Edge[] }> {
  const data = await request<ParseXmlBackendResponse>('/parse-xml', {
    method: 'POST',
    body: JSON.stringify({ xml: xmlContent }),
  });

  // Convert backend nodes → React Flow nodes
  const nodes: Node<FlowNodeData>[] = data.nodes.map((n) => ({
    id: n.id,
    type: n.type,
    position: { x: 0, y: 0 },
    data: {
      label: n.data.label,
      type: n.data.type,
      color: n.data.color,
      text: n.data.text,
      attributes: n.data.attributes,
    },
  }));

  // Convert backend edges → React Flow edges
  const edges: Edge[] = data.edges.map((e) => ({
    id: e.id,
    source: e.source,
    target: e.target,
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
  }));

  return { nodes, edges };
}

// ─── Health check ─────────────────────────────────────────────
export async function healthCheck(): Promise<boolean> {
  try {
    await request('/health');
    return true;
  } catch {
    return false;
  }
}

export { ApiError };
