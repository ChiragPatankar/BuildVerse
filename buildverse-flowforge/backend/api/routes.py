"""
API route definitions for FlowForge.
"""

from flask import Blueprint, request, jsonify
from services.xml_parser import parse_xml_hierarchy, parse_xml_to_flow, flow_to_xml
from services.flow_service import validate_flow

api_bp = Blueprint("api", __name__)


# ──────────────────────────────────────────────────────────────────
# Health
# ──────────────────────────────────────────────────────────────────

@api_bp.route("/health", methods=["GET"])
def health_check():
    """Health check endpoint."""
    return jsonify({"status": "ok", "service": "FlowForge API", "version": "1.0.0"})


# ──────────────────────────────────────────────────────────────────
# Parse XML  →  generic hierarchy graph
# ──────────────────────────────────────────────────────────────────

@api_bp.route("/parse-xml", methods=["POST"])
def parse_xml():
    """
    POST /api/parse-xml

    Accept a raw XML string and convert the full XML hierarchy into a
    graph of nodes and edges.

    Request body (JSON):
        { "xml": "<root><child>...</child></root>" }

    Response (JSON):
        {
          "nodes": [
            { "id": "1", "label": "root", "type": "default", "data": { ... } }
          ],
          "edges": [
            { "id": "edge_1_2", "source": "1", "target": "2" }
          ]
        }

    Node type is "decision" when the tag name contains:
    'if', 'condition', or 'switch'.

    Returns 400 with { "error": "..." } on invalid input.
    """
    # ── Validate request ──────────────────────────────────────────
    if not request.is_json:
        return jsonify({
            "error": "Content-Type must be application/json"
        }), 400

    data = request.get_json(silent=True)

    if data is None:
        return jsonify({
            "error": "Request body must be valid JSON"
        }), 400

    xml_string = data.get("xml")

    if not xml_string or not isinstance(xml_string, str):
        return jsonify({
            "error": "Missing or invalid 'xml' field — must be a non-empty string"
        }), 400

    # ── Parse ─────────────────────────────────────────────────────
    try:
        result = parse_xml_hierarchy(xml_string)
        return jsonify(result), 200
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as exc:
        return jsonify({"error": f"Unexpected error: {str(exc)}"}), 500


# ──────────────────────────────────────────────────────────────────
# Parse structured <workflow> XML  →  React Flow
# ──────────────────────────────────────────────────────────────────

@api_bp.route("/parse-workflow", methods=["POST"])
def parse_workflow():
    """
    POST /api/parse-workflow

    Parse a structured <workflow> XML (with explicit <node> / <edge>
    elements) into React Flow format.
    """
    if not request.is_json:
        return jsonify({"error": "Content-Type must be application/json"}), 400

    data = request.get_json(silent=True)
    if data is None or not data.get("xml"):
        return jsonify({"error": "Missing 'xml' field in request body"}), 400

    try:
        result = parse_xml_to_flow(data["xml"])
        return jsonify(result), 200
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as exc:
        return jsonify({"error": f"Unexpected error: {str(exc)}"}), 500


# ──────────────────────────────────────────────────────────────────
# Export graph  →  XML
# ──────────────────────────────────────────────────────────────────

@api_bp.route("/export-xml", methods=["POST"])
def export_xml():
    """Convert flow nodes and edges to an XML string."""
    if not request.is_json:
        return jsonify({"error": "Content-Type must be application/json"}), 400

    data = request.get_json(silent=True)
    if data is None or "nodes" not in data or "edges" not in data:
        return jsonify({"error": "Missing 'nodes' or 'edges' in request body"}), 400

    try:
        xml_str = flow_to_xml(data["nodes"], data["edges"])
        return jsonify({"xml": xml_str}), 200
    except Exception as exc:
        return jsonify({"error": f"Failed to export XML: {str(exc)}"}), 500


# ──────────────────────────────────────────────────────────────────
# Validate flow
# ──────────────────────────────────────────────────────────────────

@api_bp.route("/validate", methods=["POST"])
def validate():
    """Validate a flow structure."""
    if not request.is_json:
        return jsonify({"error": "Content-Type must be application/json"}), 400

    data = request.get_json(silent=True)
    if data is None or "nodes" not in data or "edges" not in data:
        return jsonify({"error": "Missing 'nodes' or 'edges' in request body"}), 400

    try:
        result = validate_flow(data["nodes"], data["edges"])
        return jsonify(result), 200
    except Exception as exc:
        return jsonify({"error": f"Validation error: {str(exc)}"}), 500
