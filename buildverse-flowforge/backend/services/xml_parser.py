"""
XML parsing and generation service using lxml.

Two parsing modes:
  1. parse_xml_hierarchy  — Generic: every XML tag → node, parent-child → edge.
     Auto-detects: decision, start, end node types.
  2. parse_xml_to_flow    — Structured: expects <workflow>/<node>/<edge> format.
  3. flow_to_xml          — Exports React Flow graph back to XML.
"""

import re
from lxml import etree
from typing import Any


# ──────────────────────────────────────────────────────────────────
# Node type detection keywords
# ──────────────────────────────────────────────────────────────────

DECISION_KEYWORDS = {"if", "condition", "switch"}
START_KEYWORDS = {"start", "begin", "init", "trigger", "entry"}
END_KEYWORDS = {"end", "finish", "stop", "terminate", "exit", "complete"}


def _tag_has_keyword(tag_lower: str, keywords: set[str]) -> bool:
    """
    Check if any keyword appears as a distinct word-part in the tag.
    We split on underscores, hyphens, and camelCase boundaries so that
    'send_confirmation' does NOT match 'end', but 'end_process' does.
    """
    parts = set(re.split(r"[_\-]+", tag_lower))
    return bool(parts & keywords)


def _classify_tag(tag_name: str) -> str:
    """Classify an XML tag into a node type."""
    tag_lower = tag_name.lower()

    if _tag_has_keyword(tag_lower, DECISION_KEYWORDS):
        return "decision"
    if _tag_has_keyword(tag_lower, START_KEYWORDS):
        return "start"
    if _tag_has_keyword(tag_lower, END_KEYWORDS):
        return "end"
    return "default"


def _get_color_for_type(node_type: str) -> str:
    """Return the theme color for a node type."""
    colors = {
        "default":  "#3b82f6",
        "decision": "#f59e0b",
        "start":    "#10b981",
        "end":      "#ef4444",
    }
    return colors.get(node_type, "#3b82f6")


# ──────────────────────────────────────────────────────────────────
# 1.  Generic XML hierarchy → graph
# ──────────────────────────────────────────────────────────────────

def parse_xml_hierarchy(xml_string: str) -> dict:
    """
    Convert *any* XML document into a graph of nodes and edges.

    Rules
    -----
    - Every XML element becomes a node.
    - The node label is the tag name (namespace stripped).
    - Parent → child relationships become directed edges.
    - Tag classification:
        * Contains "if", "condition", or "switch" → type: "decision"
        * Contains "start", "begin", "init", "trigger" → type: "start"
        * Contains "end", "finish", "stop", "terminate" → type: "end"
        * Everything else → type: "default"
    - XML attributes are stored in ``node.data.attributes``.
    - Direct text content is stored in ``node.data.text``.

    Parameters
    ----------
    xml_string : str
        Raw XML document as a string.

    Returns
    -------
    dict  ``{ "nodes": [...], "edges": [...] }``

    Raises
    ------
    ValueError
        If the XML is malformed or empty.
    """
    if not xml_string or not xml_string.strip():
        raise ValueError("XML string is empty")

    try:
        root = etree.fromstring(xml_string.encode("utf-8"))
    except etree.XMLSyntaxError as exc:
        raise ValueError(f"Invalid XML syntax: {exc}")

    nodes: list[dict[str, Any]] = []
    edges: list[dict[str, str]] = []
    counter = {"id": 0}

    def _next_id() -> str:
        counter["id"] += 1
        return str(counter["id"])

    def _walk(element: etree._Element, parent_id: str | None = None) -> None:
        node_id = _next_id()

        # Strip namespace prefix
        tag_name = etree.QName(element).localname
        node_type = _classify_tag(tag_name)

        # Collect attributes
        attributes = dict(element.attrib) if element.attrib else {}

        # Collect direct text
        text = (element.text or "").strip()

        node: dict[str, Any] = {
            "id": node_id,
            "label": tag_name,
            "type": node_type,
            "data": {
                "label": tag_name,
                "type": node_type,
                "color": _get_color_for_type(node_type),
            },
        }

        if attributes:
            node["data"]["attributes"] = attributes
        if text:
            node["data"]["text"] = text

        nodes.append(node)

        if parent_id is not None:
            edges.append({
                "id": f"edge_{parent_id}_{node_id}",
                "source": parent_id,
                "target": node_id,
            })

        for child in element:
            _walk(child, parent_id=node_id)

    _walk(root)

    return {"nodes": nodes, "edges": edges}


# ──────────────────────────────────────────────────────────────────
# 2.  Structured <workflow> format → React Flow
# ──────────────────────────────────────────────────────────────────

def parse_xml_to_flow(xml_string: str) -> dict:
    """
    Parse a structured ``<workflow>`` XML definition into React Flow
    nodes and edges.
    """
    if not xml_string or not xml_string.strip():
        raise ValueError("XML string is empty")

    try:
        root = etree.fromstring(xml_string.encode("utf-8"))
    except etree.XMLSyntaxError as exc:
        raise ValueError(f"Invalid XML syntax: {exc}")

    nodes: list[dict[str, Any]] = []
    edges: list[dict[str, Any]] = []

    for node_elem in root.findall(".//node"):
        node_id = node_elem.get("id", _auto_id())
        node_type = node_elem.get("type", "action")
        label = node_elem.get("label", "Untitled")
        x = float(node_elem.get("x", "0"))
        y = float(node_elem.get("y", "0"))

        desc_elem = node_elem.find("description")
        description = desc_elem.text if desc_elem is not None else ""

        config: dict[str, str] = {}
        for cfg in node_elem.findall("config"):
            key = cfg.get("key", "")
            if key:
                config[key] = cfg.text or ""

        node_data: dict[str, Any] = {
            "label": label,
            "description": description,
            "color": _get_color_for_type(node_type),
        }
        if config:
            node_data["config"] = config

        nodes.append({
            "id": node_id,
            "type": node_type,
            "position": {"x": x, "y": y},
            "data": node_data,
        })

    for edge_elem in root.findall(".//edge"):
        source = edge_elem.get("source", "")
        target = edge_elem.get("target", "")
        if source and target:
            edges.append({
                "id": f"edge_{source}_{target}",
                "source": source,
                "target": target,
                "type": "smoothstep",
                "animated": True,
                "style": {"stroke": "#3b82f6", "strokeWidth": 2},
            })

    return {"nodes": nodes, "edges": edges}


# ──────────────────────────────────────────────────────────────────
# 3.  React Flow graph → XML export
# ──────────────────────────────────────────────────────────────────

def flow_to_xml(nodes: list[dict], edges: list[dict]) -> str:
    """Convert React Flow nodes and edges to a ``<workflow>`` XML string."""
    root = etree.Element("workflow")
    root.set("name", "FlowForge Export")
    root.set("version", "1.0")

    for node in nodes:
        elem = etree.SubElement(root, "node")
        elem.set("id", node.get("id", ""))
        elem.set("type", node.get("type", "action"))

        data = node.get("data", {})
        elem.set("label", data.get("label", ""))

        position = node.get("position", {})
        elem.set("x", str(position.get("x", 0)))
        elem.set("y", str(position.get("y", 0)))

        if data.get("description"):
            desc = etree.SubElement(elem, "description")
            desc.text = data["description"]

        config = data.get("config", {})
        if isinstance(config, dict):
            for key, value in config.items():
                cfg = etree.SubElement(elem, "config")
                cfg.set("key", key)
                cfg.text = str(value)

    for edge in edges:
        elem = etree.SubElement(root, "edge")
        elem.set("source", edge.get("source", ""))
        elem.set("target", edge.get("target", ""))

    return etree.tostring(
        root, pretty_print=True, xml_declaration=True, encoding="UTF-8"
    ).decode("utf-8")


# ──────────────────────────────────────────────────────────────────
# Helpers
# ──────────────────────────────────────────────────────────────────

_counter = 0

def _auto_id() -> str:
    """Simple auto-incrementing fallback ID generator."""
    global _counter
    _counter += 1
    return f"auto_{_counter}"
