# Jaagran Patra (जागरण पत्र)

> **Citizen Issue Management & Civic Engagement Platform**  
> Connecting citizens, elected representatives (MLAs), administrative body members, and administrators to report, track, and resolve local constituency issues with real-time analytics, interactive election mapping, and video conferencing.

---

## 🏛️ Project Overview

**Jaagran Patra** is an enterprise-grade civic technology platform built to bridge the gap between citizens and government officials. It empowers:
- **Citizens**: To report local issues (with photos/videos/audio), track resolution progress, view constituency updates, participate in community discussions, and schedule meetings with elected representatives.
- **MLAs (Members of Legislative Assembly)**: To oversee constituency issues, assign tasks to ground-level administrative members, conduct live Zoom meetings, broadcast news, and monitor performance analytics.
- **Administrative Members**: To receive assigned issues, provide on-ground progress updates, upload completion media, and communicate within hierarchical administrative units (Shakti Kendra, Panna Pramukh, Ward, Block, etc.).
- **System Administrators**: To manage user roles, oversee system-wide analytics, configure electoral boundaries, and maintain platform security.

---

## 📁 Repository Structure

```
JaagranPatra-main/
├── backend/               # Node.js + Express + TypeScript + Prisma API server
│   ├── docs/              # In-depth architectural & API documentation
│   ├── form20/            # GeoJSON electoral boundaries and Form 20 booth data
│   ├── prisma/            # Database schema & migrations (PostgreSQL)
│   ├── scripts/           # Database seeding scripts
│   ├── src/
│   │   ├── config/        # Environment & database configuration
│   │   ├── controllers/   # Request handlers (Auth, Issues, Zoom, Chat, Admin, Map)
│   │   ├── middleware/    # Security, JWT auth, rate limiting, multer uploads
│   │   ├── routes/        # Express REST API route definitions
│   │   ├── services/      # Business logic (Email, Zoom OAuth, Meeting Reminders)
│   │   ├── utils/         # Cloudinary, Geocoding, Email templates
│   │   └── ws/            # WebSocket / Socket.IO real-time chat service
│   ├── Dockerfile         # Backend container definition
│   └── docker-compose.yml # PostgreSQL + Backend multi-container setup
│
├── frontend/              # Citizen, MLA & Member Web Application (React + Vite + Tailwind)
│   ├── public/            # Static assets and manifest
│   └── src/
│       ├── assets/        # Visual assets, maps, and fonts
│       ├── components/    # Reusable UI modals, navigation, media viewers
│       ├── pages/         # Citizen/MLA portals, Interactive Map, Chat, Issues
│       ├── redux/         # Redux Toolkit store & user/language slices
│       ├── routes/        # React Router 7 route hierarchy & Role guards
│       └── utils/         # API clients, Cloudinary uploader, Socket client
│
└── admin-frontend/        # Administrative Backoffice Portal (React + Vite + Tailwind)
    ├── public/            # Static assets
    └── src/
        ├── components/    # Layout, Auth, Rich text editor components
        ├── contexts/      # AuthContext & APIContext
        ├── pages/         # Dashboard, User/MLA/Issue/News CRUD management
        └── utils/         # Axios interceptor API client
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Backend API** | Node.js, Express 5, TypeScript 5.8, Prisma ORM 6.12, Socket.IO, Nodemailer, Zoom REST API |
| **Database** | PostgreSQL with PostGIS / GeoJSON mapping support |
| **Citizen & MLA Frontend** | React 19, Vite 7, Tailwind CSS 4, Redux Toolkit, React Leaflet, Recharts, Lucide Icons |
| **Admin Portal** | React 19, Vite 7, Tailwind CSS 4, React Context API, React Hook Form, Recharts |
| **Media Storage** | Cloudinary & Local Multi-part Storage |
| **DevOps & Deployment** | Docker, Docker Compose, Vercel ready |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **PostgreSQL**: v14 or higher
- **Package Manager**: `npm` or `yarn`

---

### 1. Backend Setup

```bash
cd backend

# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env
# Edit .env and supply your DATABASE_URL, JWT_SECRET, and other credentials

# 3. Generate Prisma client & apply database migrations
npx prisma generate
npx prisma migrate dev

# 4. (Optional) Seed the database with sample data
node scripts/seed.js

# 5. Start the backend development server
npm run dev
# Server will run at http://localhost:3001
```

---

### 2. Citizen / MLA Frontend Setup

```bash
cd frontend

# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env

# 3. Start development server
npm run dev
# App will run at http://localhost:5173
```

---

### 3. Admin Portal Setup

```bash
cd admin-frontend

# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env

# 3. Start development server
npm run dev
# Admin dashboard will run at http://localhost:5174 (or next available port)
```

---

## 🐳 Docker Deployment

To launch the full backend database and API server stack via Docker:

```bash
cd backend
docker-compose up --build
```

---

## 📖 In-Depth Documentation

Detailed guides and API specifications are available in `backend/docs/`:
- [System Architecture](file:///backend/docs/SYSTEM_ARCHITECTURE.md)
- [Setup Guide](file:///backend/docs/SETUP_GUIDE.md)
- [Authentication API](file:///backend/docs/AUTH_API.md)
- [Issue Management API](file:///backend/docs/ISSUE_API.md)
- [Zoom Integration Guide](file:///backend/docs/ZOOM_API.md)
- [API Usage Examples](file:///backend/docs/API_USAGE_EXAMPLES.md)

---

## 📄 License

This project is licensed under the [MIT License](file:///backend/package.json).
