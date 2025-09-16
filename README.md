# NASA Dashboard

A take-home challenge project that displays a list of the **closest Near-Earth Objects (NEOs)** for a given date using the [NASA NeoWs API](https://api.nasa.gov/).

This project is built with:

- **Next.js 14+** (App Router, React, TypeScript)
- **TailwindCSS** for styling
- **Next.js API Routes** to proxy NASA API calls (with caching)
- **ESLint + Prettier** for clean code

---

## Features

- Date picker to select a specific day
- Fetches data from NASA’s **Asteroids NeoWs API**
- Displays NEO data in a sortable table:
  - Name
  - Estimated Diameter (meters)
  - Closest Approach Distance (km)
  - Relative Velocity (km/s)
- Sorting by:
  - Size
  - Closeness to Earth
  - Relative Velocity
- Search Functionality:
  - Can Search on any parameter
- Next.js API route acts as a backend proxy (hides API key)
- **Caching** for improved performance and reduced API calls

#### Caching Strategy (Fron /lib/cache.ts)

- The /api/neo route uses Next.js fetch caching:

- Results for each date are cached for 1 hour (revalidate: 3600).

- Subsequent requests for the same date within the cache window are served from cache.

- Reduces load on the NASA API and improves performance.

### OpenAPI Schema

- Visit /api/docs to see the schema of OpenAPI

---

## Tech Stack

- **Next.js** (App Router, TypeScript)
- **React**
- **TailwindCSS**
- **ESLint + Prettier**

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nasa-dashboard.git
cd nasa-dashboard
```

### 2. Install Dependencies

```bash
npm install

```

### 3. Environment Variables

#### Create a .env file in the project root

```bash
NASA_API_KEY=DEMO_KEY or Your-API-Key
```

### 4. Run the Dev Server

```bash
npm run dev
```
