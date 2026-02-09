# FlowForge by BuildVerse

A visual workflow builder for designing, connecting, and exporting automation flows. Built with React Flow, Flask, and TailwindCSS.

**Live at:** [flowforge.buildverse.studio](https://flowforge.buildverse.studio)

---

## Tech Stack

| Layer    | Technology                                      |
| -------- | ----------------------------------------------- |
| Frontend | React 18, TypeScript, Vite, TailwindCSS, React Flow |
| Backend  | Python 3.11+, Flask, flask-cors, lxml           |
| Layout   | dagre (auto-layout algorithm)                   |
| Export   | html-to-image (PNG/SVG), JSON, XML              |

---

## Project Structure

```
buildverse-flowforge/
├── frontend/
│   ├── src/
│   │   ├── components/       # React components (FlowCanvas, Sidebar, Toolbar, NodeTypes)
│   │   ├── services/         # API client & flow business logic
│   │   ├── utils/            # Layout (dagre) & export (html-to-image) utilities
│   │   └── types/            # TypeScript type definitions
│   ├── public/               # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
├── backend/
│   ├── api/                  # Flask route blueprints
│   ├── services/             # XML parser, flow validation
│   ├── utils/                # Helper functions
│   ├── app.py                # Flask application entry point
│   └── requirements.txt
└── README.md
```

---

## Setup Instructions

### Prerequisites

- **Node.js** 18+ and **npm**
- **Python** 3.11+ and **pip**

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The dev server starts at **http://localhost:5173**. API requests are proxied to the Flask backend on port 5000.

### Backend

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python app.py
```

The Flask API starts at **http://localhost:5000**.

---

## Features

- **Drag & Drop** — Drag node components from the sidebar onto the canvas
- **Custom Node Types** — Trigger, Action, Condition, Output with distinct visual styles
- **Auto Layout** — One-click vertical or horizontal layout via dagre
- **Flow Validation** — Check for missing triggers, orphan nodes, self-loops
- **Export** — PNG, SVG, JSON, or XML
- **Import** — Load flows from JSON files
- **XML Parsing** — Backend converts XML workflow definitions into visual flows
- **Dark UI** — Professional dark theme with smooth transitions

---

## API Endpoints

| Method | Endpoint         | Description                          |
| ------ | ---------------- | ------------------------------------ |
| GET    | `/api/health`    | Health check                         |
| POST   | `/api/parse-xml` | Parse XML → flow nodes & edges       |
| POST   | `/api/export-xml`| Convert flow nodes & edges → XML     |
| POST   | `/api/validate`  | Validate flow structure              |

---

## Build for Production

```bash
cd frontend
npm run build
```

The production build outputs to `frontend/dist/`.

---

## License

Proprietary — BuildVerse Studio © 2026

