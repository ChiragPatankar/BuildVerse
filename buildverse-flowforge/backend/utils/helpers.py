"""
Utility helper functions for FlowForge backend.
"""

import uuid
from datetime import datetime, timezone


def generate_id(prefix: str = "ff") -> str:
    """Generate a short unique ID with an optional prefix."""
    return f"{prefix}_{uuid.uuid4().hex[:8]}"


def timestamp() -> str:
    """Return current UTC timestamp in ISO format."""
    return datetime.now(timezone.utc).isoformat()


def safe_get(data: dict, *keys, default=None):
    """Safely navigate nested dictionaries."""
    current = data
    for key in keys:
        if isinstance(current, dict):
            current = current.get(key, default)
        else:
            return default
    return current

