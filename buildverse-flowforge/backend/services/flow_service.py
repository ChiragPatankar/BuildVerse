"""
Flow validation and analysis service.
"""


def validate_flow(nodes: list[dict], edges: list[dict]) -> dict:
    """
    Validate a workflow structure and return results with any errors/warnings.
    """
    errors: list[str] = []
    warnings: list[str] = []

    # Check for empty flow
    if not nodes:
        errors.append("Flow has no nodes.")
        return {"valid": False, "errors": errors, "warnings": warnings}

    # Count node types
    node_types = {}
    node_ids = set()
    for node in nodes:
        ntype = node.get("type", "unknown")
        node_types[ntype] = node_types.get(ntype, 0) + 1
        node_ids.add(node.get("id", ""))

    # Check for trigger
    if node_types.get("trigger", 0) == 0:
        warnings.append("Flow has no trigger node. Consider adding a trigger to start the workflow.")

    # Check for output
    if node_types.get("output", 0) == 0:
        warnings.append("Flow has no output node. Consider adding an output to complete the workflow.")

    # Check for orphan nodes
    connected_ids = set()
    for edge in edges:
        source = edge.get("source", "")
        target = edge.get("target", "")

        # Validate edge references
        if source and source not in node_ids:
            errors.append(f"Edge references non-existent source node: {source}")
        if target and target not in node_ids:
            errors.append(f"Edge references non-existent target node: {target}")

        connected_ids.add(source)
        connected_ids.add(target)

    orphans = node_ids - connected_ids
    if orphans and len(nodes) > 1:
        warnings.append(f"{len(orphans)} node(s) are not connected to any edge.")

    # Check for duplicate edges
    edge_keys = []
    for edge in edges:
        key = f"{edge.get('source', '')}->{edge.get('target', '')}"
        if key in edge_keys:
            warnings.append(f"Duplicate edge found: {key}")
        edge_keys.append(key)

    # Check for self-loops
    for edge in edges:
        if edge.get("source") == edge.get("target"):
            errors.append(f"Self-loop detected on node: {edge.get('source')}")

    valid = len(errors) == 0
    return {"valid": valid, "errors": errors, "warnings": warnings}

