# Parenti Digital

Marketing site for Parenti Digital, a media consultancy covering web development, AV and streaming systems, and audio engineering. It lists the service catalog with fixed and quoted pricing, and sends quote requests from the contact form into a `ServiceRequest` backend that the owner reviews in a private admin console.

Built with TanStack Start (React 19, JavaScript), Tailwind CSS, and the Base44 backend (auth, database, hosting).

## Requirements

- Node.js 20 or newer
- A Base44 account, plus the Base44 CLI: `npm install -g base44`

## Run it locally

```bash
npm ci
base44 login   # once per machine
base44 link    # once per clone, links this folder to the Base44 app
base44 dev     # local backend + app together
```

`base44 dev` prints the local URL (usually http://localhost:3000) and serves the app with the real database, auth, and file storage, so the contact form and admin console work against your app's data.

If you only need the frontend against the hosted backend:

```bash
npm run dev
```

## Build

```bash
npm run build     # dist/client (assets) + dist/server (the Worker)
npm run preview   # serve the production build locally
```

Publishing is done from the Base44 builder (the Publish button), or with `base44 deploy`.

## Where things live

- `src/routes/` — pages. Public site pages are under `src/routes/_site/`; the owner console is `src/routes/_authed/admin.jsx`.
- `src/components/` — UI, grouped by area (`home/`, `site/`, `services/`, `contact/`, `auth/`).
- `src/lib/services-data.js` — brand details (phone, email) and the whole service catalog with prices.
- `base44/entities/` — data schemas, including `ServiceRequest`.
- `src/index.css` + `tailwind.config.js` — colors, fonts, and design tokens.
