# Ratanakvisal Chhouk — Portfolio (MERN)

A personal portfolio for internship applications.

- **Frontend:** React 18 + Vite, Tailwind CSS v4, plain JavaScript hooks (typewriter, scroll reveal, active nav)
- **Backend:** Node.js + Express REST API (Helmet, CORS, rate limiting)
- **Database:** MongoDB via Mongoose — stores **projects** and **contact-form messages**

```
portfolio/
├── client/                 React + Tailwind app
│   ├── src/data/profile.js ← ALL CV content lives here (edit this!)
│   ├── src/components/     Hero, About, Journey, Projects, Volunteer, Skills, Contact…
│   └── src/hooks.js        useReveal, useActiveSection, useTypewriter
└── server/                 Express API
    ├── models/             Project.js, Message.js
    ├── routes/             /api/projects, /api/contact
    ├── seed.js             fills the projects collection
    └── index.js
```

## 1. Requirements

- Node.js 18+ (20 or 22 recommended)
- MongoDB — either installed locally, or a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas)

## 2. Setup

```bash
cd portfolio
npm run install:all            # installs root, server and client packages
cp server/.env.example server/.env
```

Edit `server/.env` and set `MONGO_URI` (for Atlas it looks like
`mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/portfolio`) and a long random `ADMIN_KEY`.

```bash
npm run seed                   # adds starter projects to MongoDB
npm run dev                    # API on :5000 + React on :5173
```

Open http://localhost:5173.

> The site still works if the API is down — the Projects section falls back to local data and the
> contact form shows your email address instead.

## 3. API

| Method | Endpoint | Description |
|-------|----------|-------------|
| GET  | `/api/health` | Health check |
| GET  | `/api/projects?category=web\|design\|data\|other` | List projects |
| POST | `/api/contact` | Save a message `{ name, email, subject?, message }` (5 per 15 min per IP) |
| GET  | `/api/contact` | Read messages — send header `x-admin-key: <ADMIN_KEY>` |

Read your messages:

```bash
curl -H "x-admin-key: YOUR_ADMIN_KEY" http://localhost:5000/api/contact
```

## 4. Make it yours

1. **`client/src/data/profile.js`** — update the IT Trainee bullet points with what you actually did, add your GitHub/LinkedIn links, and set `resume` if you put your CV PDF in `client/public/`.
2. **`server/seed.js`** — add GitHub / live-demo links to your projects (`repoUrl`, `liveUrl`), then run `npm run seed` again. Keep `fallbackProjects` in `profile.js` in sync.
3. Your photo is in `client/public/images/` (WebP + JPG, two sizes). To change it, replace those files with the same names.
4. Colours and fonts are in `client/src/index.css` under `@theme`.

## 5. Deploy (one service)

Express serves the built React app in production:

```bash
npm run build      # builds client/dist
npm start          # NODE_ENV=production, serves site + API on PORT
```

On **Render** / **Railway**: build command `npm run install:all && npm run build`, start command `npm start`, and add `MONGO_URI`, `ADMIN_KEY` as environment variables. Use MongoDB Atlas for the database (allow access from your host's IP or `0.0.0.0/0`).
