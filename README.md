# FakeaZon

An e-commerce website (React + Vite frontend, Express + MongoDB backend) built for the BIT 417 E-Commerce lab.

## Data sources

- **Product catalog** (`/products`, `/products/:id`, categories) — [DummyJSON](https://dummyjson.com), a third-party API. Falls back to a local JSON snapshot (`src/data/`) if DummyJSON is ever unreachable.
- **Login / signup** — [Platzi Fake Store API](https://api.escuelajs.co).
- **Admin product CRUD, coupons/offers, orders** — our own backend in `backend/` (Express + MongoDB).

## One-time setup

```bash
# Frontend deps
npm install

# Backend deps
cd backend
npm install
cd ..
```

### Environment files

`.env` files are gitignored (they hold local config / secrets), so create your own from the templates:

```bash
cp .env.example .env
cp backend/.env.example backend/.env
```

The defaults work out of the box for local dev — no editing needed.

### MongoDB

The project uses a shared **MongoDB Atlas** cluster (cloud-hosted). Ask a teammate for the connection string and put it in `backend/.env` as `MONGO_URI` — don't commit it, `.env` is gitignored.

Prefer to run fully locally instead? Point `MONGO_URI` at a local MongoDB install:

```bash
# macOS, one-time install
brew tap mongodb/brew
brew install mongodb-community@8.0
brew services start mongodb-community@8.0
# then set MONGO_URI=mongodb://127.0.0.1:27017/fakeazon in backend/.env
```

On Windows, install MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community) instead.

### Seed sample data (optional, one-time)

```bash
cd backend
npm run seed
```

This also creates one admin account and one customer account for testing login/RBAC (`/admin/login`) — the script prints both sets of credentials to the console after it runs.

## Running it

Two terminals — start the backend first:

```bash
# Terminal 1 — backend (http://localhost:5050)
cd backend
npm run server

# Terminal 2 — frontend (http://localhost:5173)
npm run dev
```

Then open http://localhost:5173.

If you're only working on the catalog/cart/login side of things, you can skip the backend terminal entirely — only the Admin products page (`/admin/products`), order history (`/orders`), and coupon codes at checkout need it.

## Project structure

```
src/
  api/            # API clients (DummyJSON, Platzi auth, our own backend)
  components/      # Shared UI components
  context/        # Cart / wishlist / login React contexts
  data/           # Local product/category snapshot (fallback if DummyJSON is down)
  pages/          # Route-level pages
backend/
  models/         # Mongoose schemas (Product, Offer, Order)
  controllers/    # Route handlers
  routes/         # Express routers
  middleware/     # Error handling, logging
  server.js
  seed.js         # Populates sample products, offers, and admin/customer users
```
