# Imprenta Salvador Dalí — Website Guide

> Complete reference for the redesigned website. Use this as the source of truth for all future development.
>
> **RULE:** Always read this file before starting work. Always update this file AND [checklist.md](checklist.md) when finishing any task.
> **Task tracking:** See [checklist.md](checklist.md) for what's done, in progress, and pending.

---

## Project Overview

**Client:** Imprenta Salvador Dalí — Chilean print shop, Las Condes, Santiago  
**Original site:** https://imprentasalvadordali.cl/  
**Stack:** React + Vite SPA with React Router + Tailwind CSS  
**GitHub:** https://github.com/antaruii122/imprenta-salvadordali  
**Local path:** `c:\Users\rcgir\Desktop\Antigravity Pojects\Ricardo Main Usage\imprenta-salvadordali\`

---

## How to Run

```bash
cd imprenta-salvadordali
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → /dist
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | ^19.2.5 | UI framework |
| React Router DOM | ^7.1.4 | Multi-page routing |
| Vite | ^8.0.10 | Build tool / dev server |
| Tailwind CSS | ^3.4.19 | Utility-first styling |
| PostCSS + Autoprefixer | latest | CSS processing |

---

## File Structure

```
imprenta-salvadordali/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── App.jsx              ← Router + ScrollToTop
    ├── main.jsx             ← Entry point
    ├── index.css            ← Tailwind + custom component classes
    ├── components/
    │   ├── Navbar.jsx       ← Sticky nav, 4 click-to-toggle dropdowns, Escape to close, mobile accordion
    │   ├── Footer.jsx       ← CTA strip + dark footer with services/links/contact
    │   ├── MapSection.jsx   ← Google Maps iframe + dark contact panel
    │   ├── ProductCard.jsx  ← Reusable product tile (image + name + price + WA button)
    │   └── PromoBar.jsx     ← "1000 volantes $20.000" promo banner
    ├── data/
    │   └── products.js      ← 10 products with id, name, image, price, categories[]
    └── pages/
        ├── Home.jsx
        ├── Portafolio.jsx
        ├── Tienda.jsx
        ├── TiendaCategory.jsx
        ├── QuienesSomos.jsx
        ├── Blog.jsx
        └── Contacto.jsx
```

---

## Routes

| URL | Component | Description |
|-----|-----------|-------------|
| `/` | Home | Landing page |
| `/portafolio` | Portafolio | 21-image portfolio gallery |
| `/tienda` | Tienda | Shop — all products + category cards |
| `/tienda/stickers` | TiendaCategory | Filtered: stickers |
| `/tienda/tarjeteria` | TiendaCategory | Filtered: business cards |
| `/tienda/publicidad` | TiendaCategory | Filtered: advertising |
| `/tienda/utiles-escolares` | TiendaCategory | Filtered: school supplies |
| `/quienes-somos` | QuienesSomos | About the company |
| `/blog` | Blog | Blog listing (3 articles) |
| `/contacto` | Contacto | Contact form + map |

**ScrollToTop** — `App.jsx` uses `useLocation` to auto-scroll to top on every route change.

---

## Design Tokens

### Colors (`tailwind.config.js`)

| Name | Hex | Use |
|------|-----|-----|
| `beige` | #f5f0e8 | Page backgrounds, card fills |
| `beige-dark` | #e8ddd0 | Borders, hover states |
| `brand` | #8B7355 | Primary accent — buttons, labels, dividers |
| `brand-light` | #a8896a | Hover states |
| `brand-dark` | #6b5840 | Active/pressed states |
| `charcoal` | #1a1a2e | Dark sections, footer, headings |

### Typography

- **Headings:** Playfair Display (serif) — loaded via Google Fonts in `index.html`
- **Body:** Inter (sans-serif) — loaded via Google Fonts in `index.html`

### Custom CSS Classes (`src/index.css`)

| Class | Description |
|-------|-------------|
| `.btn-wsp` | Green WhatsApp CTA button (small) |
| `.btn-wsp-lg` | Green WhatsApp CTA button (large) |
| `.btn-outline` | Brand-colored outline button |
| `.btn-dark` | Charcoal filled button |
| `.section-label` | Tiny uppercase label above section titles |
| `.section-title` | Large bold section heading |
| `.section-divider` | Brown horizontal rule |
| `.card` | White card with shadow + hover lift |
| `.page-header` | Beige gradient banner used at top of all inner pages |
| `.product-card` | Product tile with hover scale animation |

---

## Pages — Section Breakdown

### Home (`/`)
1. **Hero** — "SALVADOR DALÍ" headline, service tags, WhatsApp + Portafolio CTAs, DTF T-shirt image with floating badge
2. **Stats bar** — 48hrs delivery · 3 print systems · 10+ products · 4.9★
3. **About split** — company story text + photo (2 columns)
4. **Highlights** — ⚡ Express · 🖨️ Quality · 💰 Price (dark charcoal cards)
5. **Promo banner** — "1000 volantes $20.000" with WhatsApp CTA
6. **Gallery** — 4 images with hover overlay labels
7. **Testimonials** — 3 customer quotes with star ratings
8. **MapSection** — Google Maps embed + contact info panel

### Portafolio (`/portafolio`)
- 21 product images in responsive grid (first image spans 2×2)
- Hover overlay reveals product label
- Broken images hidden via `onError`

### Tienda (`/tienda`)
- 4 category cards: Stickers · Tarjetería · Publicidad · Útiles Escolares
- PromoBar component
- Full 10-product grid

### TiendaCategory (`/tienda/:slug`)
- Breadcrumb nav (Tienda → Category)
- Sticky category tab bar
- WhatsApp CTA strip
- Products filtered by category
- "También podría interesarte" — other category products at the bottom

### Quiénes Somos (`/quienes-somos`)
- Company history (split layout with team photo)
- Badge: Laser · Offset · UV
- Highlights section (same 3 cards as Home)
- CTA section → WhatsApp
- MapSection

### Blog (`/blog`)
- 3 articles: DTF Textil · Adhesivos Troquelados · Tinta UV
- Each card shows: emoji, tag, date, excerpt, "Leer más" button
- Archive section (visual pills — currently decorative only)

### Contacto (`/contacto`)
- Contact info cards: 📍 address · 📞 phone · 💬 WhatsApp
- Contact form: nombre, email, mensaje → shows ✅ success state on submit
- Contact photo
- MapSection

---

## Product Catalog (`src/data/products.js`)

| Product | Categories | Price |
|---------|-----------|-------|
| Afiche | publicidad | — |
| Etiqueta | stickers, publicidad | — |
| Etiquetas Bolsas | stickers, publicidad | — |
| Etiquetas DTF Textil | stickers, utiles-escolares | — |
| Marca Libro | tarjeteria, publicidad | — |
| Pendón Colgante | publicidad | — |
| Stickers Circulares | stickers | — |
| Stickers Útiles Escolares | stickers, utiles-escolares | — |
| Tags | tarjeteria, publicidad | — |
| Tarjetas Presentación | tarjeteria | Desde $5.000 |

All images pulled from WordPress CDN: `https://imprentasalvadordali.cl/wp-content/uploads/`

To add a product: edit `src/data/products.js` — add an object with `id`, `name`, `img`, `price` (optional), `categories[]`.

---

## Key External Links

| Purpose | URL / Value |
|---------|------------|
| WhatsApp | `https://wa.me/56964123098?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar` |
| Phone | `+569 6412 3098` |
| Instagram | `https://www.instagram.com/imprenta_salvador_dali/` |
| Google Maps | Embedded iframe for Mayecura 1177, Las Condes |
| Logo (color) | `https://imprentasalvadordali.cl/wp-content/uploads/2023/08/logo-04.jpg` |
| Logo (footer/beige) | `https://imprentasalvadordali.cl/wp-content/uploads/2023/09/logo-beige-60.png` |

---

## Changelog

| Date | Change |
|------|--------|
| 2026-04-30 | Initial build — all 9 routes, 5 components, 10 products |
| 2026-04-30 | GitHub repo created and initial commit pushed |
| 2026-05-03 | Fixed scroll-to-top on route navigation (`useLocation` hook) |
| 2026-05-03 | Created this `website.md` documentation file |
| 2026-05-04 | Removed DTF/shirt from hero — replaced with stickers image |
| 2026-05-04 | Created `ServicioPage.jsx` — reusable service hub template (4 services) |
| 2026-05-04 | Created `ComunaPage.jsx` — reusable area page template (12 comunas) |
| 2026-05-04 | Created `src/data/servicios.js` and `src/data/comunas.js` |
| 2026-05-04 | Added `/servicios/:slug` and `/imprenta/:slug` routes to App.jsx |
| 2026-05-04 | MapSection present on all service and comunas pages |
| 2026-05-04 | Navbar redesigned — 4 dropdowns: Nuestro Trabajo / Servicios / Nosotros / Cobertura |
| 2026-05-04 | Footer updated — Servicios + Cobertura link sections added |
| 2026-05-04 | Created `checklist.md` — task tracking file linked to website.md |
| 2026-05-04 | Navbar dropdowns: switched from hover to click-to-toggle — Escape key + aria-expanded added |
| 2026-05-04 | ComunaPage.jsx: new H1 format, two-paragraph intro (intro+body), service bullet links, neighbors cross-links |
| 2026-05-04 | comunas.js: added `body` (keyword-dense per-comuna paragraph), `keywords` array, `neighbors` array for all 12 |
| 2026-05-04 | Fixed navbar navigation: migrated from BrowserRouter to createBrowserRouter + RouterProvider + layout route for React Router v7 compatibility |
| 2026-05-05 | Installed react-helmet-async — HelmetProvider wraps RouterProvider in App.jsx |
| 2026-05-05 | Added per-page Helmet meta tags + OG tags to all 10 page components |
| 2026-05-05 | Home H1 changed to keyword-dense "Imprenta en Las Condes" with brand name as subtitle |
| 2026-05-05 | index.html: title updated with Trenbolone formula + full JSON-LD LocalBusiness+PrintShop schema added |
| 2026-05-05 | Created BlogPost.jsx (sidebar layout, related services, related comunas, other posts) |
| 2026-05-05 | Created src/data/blogPosts.js — 3 full articles with H2 sections, CTA blocks, relatedServices + relatedComuna fields |
| 2026-05-05 | Redesigned Blog.jsx — featured post dark card + 2-col grid for rest, tag strip |
| 2026-05-05 | Added /blog/:slug route to App.jsx — "Leer más" now navigates to BlogPost |
| 2026-05-05 | Expanded servicios.js — intro + body array (6 sections each, 1,200+ words per service) — ServicioPage now renders full body content |
| 2026-05-05 | All 4 services now link to all 12 comunas (was only 4) |
| 2026-05-05 | Expanded comunas.js — 600-800 word body per comuna with local landmarks and commercial context |
| 2026-05-05 | Fixed ServicioPage breadcrumb: Inicio / Servicios / [service] (was /Tienda) |
| 2026-05-05 | Created public/sitemap.xml (34 URLs) and public/robots.txt |

---

## Pending / Future Work

### High Priority

| Feature | File to edit | Notes |
|---------|-------------|-------|
| Contact form backend | `src/pages/Contacto.jsx` | Currently shows ✅ but sends nothing. Use EmailJS (free, no backend) or Supabase |
| Blog article pages | `src/App.jsx` + new `src/pages/BlogPost.jsx` | Add `/blog/:slug` route + content for the 3 existing posts |

### Medium Priority

| Feature | File to edit | Notes |
|---------|-------------|-------|
| Product prices | `src/data/products.js` | Add `price` field to the 9 products that are missing it |
| SEO meta tags | `index.html` + pages | Add per-page `<meta>` descriptions and OG tags with `react-helmet-async` |
| Product detail pages | `src/App.jsx` + new `src/pages/ProductDetail.jsx` | `/tienda/:category/:slug` with full description and quote form |

### Low Priority

| Feature | Notes |
|---------|-------|
| Blog archive filtering | Pills in Blog.jsx are decorative — wire them to filter by date |
| Scroll animations | Fade-in on scroll using Intersection Observer API |
| Image hosting | Download WP CDN images and host locally as WebP for better performance |

---

## Local SEO Strategy

> **Goal:** Rank #1 in Google Maps and organic search across Santiago comunas for queries like "imprenta Las Condes", "stickers personalizados Santiago", "tarjetas de presentación cerca de mí".
>
> Google Maps ranking has 3 pillars: **Relevance** (does your profile match the search?), **Distance** (how close are you?), **Prominence** (how well-known/reviewed are you?). The website directly impacts Relevance and Prominence.

---

### How Chileans Search (Keywords to Target)

**High-intent commercial searches (want to buy NOW):**
- "imprenta Las Condes" / "imprenta cerca de mí"
- "stickers personalizados Santiago"
- "tarjetas de presentación Las Condes"
- "volantes publicitarios Santiago"
- "pendones Santiago"
- "imprenta rápida Providencia"
- "impresión DTF textil Santiago"

**Informational searches (educate → convert):**
- "¿cuánto cuesta imprimir tarjetas en Santiago?"
- "diferencia impresión láser offset UV"
- "cómo diseñar stickers para mi negocio"
- "qué es impresión DTF textil"

---

### Current SEO Status

**Technical:**
- ❌ No `<meta>` description tags on any page
- ❌ No Open Graph / Twitter Card tags
- ❌ No structured data (LocalBusiness + PrintShop schema)
- ❌ No `sitemap.xml`
- ❌ No `robots.txt`
- ❌ No alt text on any images (portfolio, products)
- ✅ Google Maps embedded (positive local signal)
- ✅ Address visible on multiple pages
- ✅ Phone number in footer + contact page
- ✅ NAP consistent across pages (good — must stay consistent everywhere)

**Páginas:**
- ❌ `/` — H1 "SALVADOR DALÍ" no está keyword-optimizado. Sin meta tags.
- ❌ `/portafolio` — Solo imágenes, sin texto, sin alt text. Invisible para Google.
- ❌ `/tienda` — Sin meta. Imágenes de productos sin alt text.
- ❌ `/tienda/stickers` — Sin copy descriptivo. Sin meta.
- ❌ `/tienda/tarjeteria` — Sin copy descriptivo. Sin meta.
- ❌ `/tienda/publicidad` — Sin copy descriptivo. Sin meta.
- ❌ `/tienda/utiles-escolares` — Sin copy descriptivo. Sin meta.
- ❌ `/quienes-somos` — Tiene buen copy pero no está keyword-optimizado. Sin meta.
- ❌ `/blog` — Sin meta. "Leer más" no va a ningún lado — no existen páginas individuales de artículos.
- ❌ `/contacto` — Dirección presente pero no en schema markup. Sin meta.
- ✅ `/servicios/:slug` — 4 service hubs activos (stickers, tarjetas, volantes, pendones)
- ✅ `/imprenta/:slug` — 12 páginas de comunas activas con H1 keyword-dense, 2 párrafos de copy, links a servicios y comunas vecinas
- ✅ MapSection en todas las páginas de servicios y comunas
- ✅ Links internos: páginas de servicios ↔ comunas (hub-and-spoke) + comunas vecinas entre sí

---

### Site Architecture for SEO

The correct internal linking structure — Google follows these links to understand topical authority:

```
Homepage (/)
│  Links to → all Service Hubs + all Comunas pages
│
├── Service Hubs (/servicios/*)           [1,200–1,500 words each]
│   ├── /servicios/stickers              → links to stickers comunas pages + /tienda/stickers
│   ├── /servicios/tarjetas-presentacion → links to tarjetas comunas pages + /tienda/tarjeteria
│   ├── /servicios/volantes              → links to publicidad comunas pages
│   ├── /servicios/pendones              → links to publicidad comunas pages
│   ├── /servicios/etiquetas             → links to stickers comunas pages
│   └── /servicios/dtf-textil            → links to all comunas pages
│
├── Comunas Pages (/imprenta/*)           [600–800 words each]
│   ├── /imprenta/las-condes             → links to ALL service hubs
│   ├── /imprenta/providencia            → links to ALL service hubs
│   ├── /imprenta/vitacura               → links to ALL service hubs
│   ├── /imprenta/santiago-centro        → links to ALL service hubs
│   ├── /imprenta/nunoa                  → links to ALL service hubs
│   └── ... (12 comunas total)
│
├── Existing Pages (optimized)
│   ├── /tienda/stickers                 → links to /servicios/stickers hub
│   ├── /tienda/tarjeteria               → links to /servicios/tarjetas hub
│   ├── /tienda/publicidad               → links to /servicios/volantes + /servicios/pendones
│   ├── /quienes-somos                   → links to /imprenta/las-condes
│   └── /contacto                        → links to /imprenta/las-condes
│
└── Blog (/blog/*)                        [800–1,500 words each]
    ├── /blog/precio-tarjetas-santiago   → links to /servicios/tarjetas + /imprenta/santiago-centro
    ├── /blog/impresion-laser-offset-uv  → links to /quienes-somos + all service hubs
    └── ... (1 post/week target)
```

**Rule:** Every page must link UP to its parent hub, and every hub must link DOWN to its location pages. No orphan pages.

---

### Phase 1 — Technical Foundations
*Do this first. Everything else depends on it.*

| Task | File | Notes |
|------|------|-------|
| ✅ Install `react-helmet-async` | `App.jsx` | Done — HelmetProvider wraps RouterProvider |
| Meta title + description per page | All `src/pages/*.jsx` | Use "Trenbolone" formula — see below |
| Open Graph tags | All `src/pages/*.jsx` | og:title, og:description, og:image |
| Alt text en TODAS las imágenes | All pages + ProductCard + Portafolio | Formato: "Stickers personalizados Las Condes - Imprenta Salvador Dalí" |
| `sitemap.xml` | `public/sitemap.xml` | Listar todas las rutas incluyendo /servicios/* e /imprenta/* |
| `robots.txt` | `public/robots.txt` | `Allow: /` + puntero a `Sitemap:` |
| LocalBusiness + PrintShop JSON-LD | `index.html` | Ver schema abajo |
| NAP en footer (HTML visible) | `Footer.jsx` | Ya existe — mantener idéntico en todos lados |

**Fórmula de Title Tag ("Trenbolone") — apuntar a ~200 caracteres, no 60:**
- Home: `MEJOR Imprenta en Las Condes, Santiago — Stickers, Tarjetas de Presentación, Volantes y Pendones | Imprenta Salvador Dalí`
- Servicio: `Stickers Personalizados en Las Condes y Santiago — Adhesivos en Todo Formato con Entrega Express | Imprenta Salvador Dalí`
- Comuna: `Imprenta Profesional en Providencia — Stickers, Tarjetas, Volantes y Pendones con Entrega en 48h | Imprenta Salvador Dalí`
- Tienda: `Tienda de Impresión en Las Condes — Stickers, Tarjetas, Volantes y más | Imprenta Salvador Dalí`
- Blog post: incluir keyword principal + "Santiago" o "Chile" en el título

**Schema JSON-LD for `index.html`:**
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PrintShop"],
  "name": "Imprenta Salvador Dalí",
  "image": "https://imprentasalvadordali.cl/wp-content/uploads/2023/08/logo-04.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mayecura 1177, Las Condes",
    "addressLocality": "Las Condes",
    "addressRegion": "Región Metropolitana",
    "postalCode": "7591538",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.383511,
    "longitude": -70.537223
  },
  "telephone": "+56964123098",
  "url": "https://imprentasalvadordali.cl",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    "Las Condes","Providencia","Vitacura","Santiago","Ñuñoa",
    "San Miguel","La Florida","Maipú","Quilicura","Pudahuel"
  ],
  "sameAs": [
    "https://www.instagram.com/imprenta_salvador_dali/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Impresión",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Stickers Personalizados"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tarjetas de Presentación"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Volantes y Flyers"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pendones Publicitarios"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Impresión DTF Textil"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Etiquetas Personalizadas"}}
    ]
  }
}
```

**Meta title format per page:**
- Home: `Imprenta Las Condes — Stickers, Tarjetas y Volantes | Imprenta Salvador Dalí`
- Tienda: `Tienda de Productos de Impresión | Imprenta Salvador Dalí`
- Contacto: `Contacto — Imprenta en Las Condes, Santiago | Imprenta Salvador Dalí`
- Service hub: `Stickers Personalizados en Santiago | Imprenta Salvador Dalí`
- Comuna page: `Imprenta en Providencia — Entrega Express 48h | Imprenta Salvador Dalí`

---

### Phase 2 — Service Hub Pages
*Hub pages = deep, educational, 1,200–1,500 words. These rank for commercial keywords.*

| Route | H1 | Target keyword | Status |
|-------|----|---------------|--------|
| `/servicios/stickers` | "Stickers Personalizados en Santiago" | stickers personalizados Santiago | ❌ |
| `/servicios/tarjetas-presentacion` | "Tarjetas de Presentación en Las Condes" | tarjetas de presentación Las Condes | ❌ |
| `/servicios/volantes` | "Impresión de Volantes en Santiago" | volantes publicitarios Santiago | ❌ |
| `/servicios/pendones` | "Pendones Publicitarios en Santiago" | pendones publicitarios Santiago | ❌ |
| `/servicios/etiquetas` | "Etiquetas Personalizadas en Santiago" | etiquetas personalizadas Santiago | ❌ |
| `/servicios/dtf-textil` | "Impresión DTF Textil en Santiago" | impresión DTF textil Santiago | ❌ |

**Each service hub must contain:**
- H1 with primary keyword
- 1,200–1,500 words of original content (not filler)
- What the service is + benefits + materials/finishes available
- Turnaround times and pricing range
- Gallery of real examples (from existing product images)
- 3–5 FAQ items (Google loves FAQ schema)
- Links to 3–4 relevant comunas pages ("¿Estás en Providencia? También trabajamos contigo")
- Link to the corresponding `/tienda/` category
- WhatsApp CTA + MapSection

**Files to create:**
- `src/pages/ServicioPage.jsx` — reusable template
- `src/data/servicios.js` — `{ slug, title, h1, keyword, description, longContent, images[], faqs[] }`
- Routes in `src/App.jsx`: `/servicios/:slug`

---

### Phase 3 — Comunas Pages
*Location pages = lean, conversion-focused, 600–800 words. These rank for "[service] [city]" searches.*

| Route | H1 | Target keyword | Priority |
|-------|----|---------------|---------|
| `/imprenta/las-condes` | "Imprenta en Las Condes" | imprenta Las Condes | 🔴 Our location |
| `/imprenta/providencia` | "Imprenta en Providencia" | imprenta Providencia | 🔴 High |
| `/imprenta/vitacura` | "Imprenta en Vitacura" | imprenta Vitacura | 🔴 High |
| `/imprenta/santiago-centro` | "Imprenta en Santiago Centro" | imprenta Santiago | 🔴 High |
| `/imprenta/nunoa` | "Imprenta en Ñuñoa" | imprenta Ñuñoa | 🟡 Medium |
| `/imprenta/la-florida` | "Imprenta en La Florida" | imprenta La Florida | 🟡 Medium |
| `/imprenta/maipu` | "Imprenta en Maipú" | imprenta Maipú | 🟡 Medium |
| `/imprenta/san-miguel` | "Imprenta en San Miguel" | imprenta San Miguel | 🟡 Medium |
| `/imprenta/macul` | "Imprenta en Macul" | imprenta Macul | 🟡 Medium |
| `/imprenta/quilicura` | "Imprenta en Quilicura" | imprenta Quilicura | 🟢 Low |
| `/imprenta/pudahuel` | "Imprenta en Pudahuel" | imprenta Pudahuel | 🟢 Low |
| `/imprenta/san-bernardo` | "Imprenta en San Bernardo" | imprenta San Bernardo | 🟢 Low |

**Each comuna page must contain:**
- H1: "Imprenta en [Comuna] — Entrega Express 48 horas"
- Intro mentioning the commune + proximity to Las Condes + delivery area
- Services list — each service name links to its Service Hub
- "Trabajamos con clientes de [Comuna]" trust section
- 1–2 customer testimonials referencing that area (if available)
- WhatsApp CTA with pre-filled message: "Hola, soy de [Comuna] y me gustaría cotizar"
- MapSection

**Files to create:**
- `src/pages/ComunaPage.jsx` — reusable template
- `src/data/comunas.js` — `{ slug, name, description, distance, waText }`
- Routes in `src/App.jsx`: `/imprenta/:comuna`

---

### Phase 4 — Blog (Long-tail SEO)
*Blog = informational content that educates → converts. Target 1 post/week.*

| Route | Title | Target keyword | Priority |
|-------|-------|---------------|---------|
| `/blog/precio-tarjetas-presentacion-santiago` | "¿Cuánto cuesta imprimir tarjetas de presentación en Santiago?" | precio tarjetas presentación Chile | 🔴 |
| `/blog/diferencia-impresion-laser-offset-uv` | "Impresión láser, offset y UV: ¿cuál es la diferencia?" | tipos de impresión Chile | 🔴 |
| `/blog/stickers-para-negocio-santiago` | "Cómo usar stickers para hacer crecer tu negocio en Santiago" | stickers para negocio Santiago | 🟡 |
| `/blog/pendones-eventos-santiago` | "Pendones para eventos en Santiago: guía completa" | pendones para eventos Santiago | 🟡 |
| `/blog/dtf-textil-que-es` | "Qué es la impresión DTF textil y para qué sirve" | DTF textil Chile | 🟢 Expand existing |

**Each blog post must:**
- Be 800–1,500 words (original, not filler)
- Link to 1–2 Service Hubs using keyword anchor text
- Link to 1 Comuna page naturally in the text
- Have its own `<Helmet>` meta title + description
- Be listed on `/blog` index with a working "Leer más" link

**Files to create:**
- `src/pages/BlogPost.jsx` — single post template
- `src/data/blogPosts.js` — full post content array
- Route in `src/App.jsx`: `/blog/:slug`

---

### Phase 5 — Google Business Profile
*El impacto más alto para ranking en Google Maps. Hacer en paralelo con Fase 1.*

**Categorías:**
- Principal: **"Imprenta"** — la más importante, no tocar sin razón
- Secundarias (máx 2–3): Fabricante de adhesivos, Servicio de impresión de tarjetas de presentación
- Regla: menos categorías = más fuerza por categoría. No agregar categorías que se alejen del negocio.

**Perfil completo:**
- Completar al 100% — dirección, teléfono, web, horario (mínimo 3/5 funciones activas)
- Activar "Reservas" → enlazar a `/contacto` (suma punto de perfil)
- Activar Google Messages — responder en menos de 1 hora

**Servicios (campo clave para long-tail):**
- Meta: 30+ servicios, máximo 99
- Prompt para generar la lista: usar AI con "lista de servicios de una imprenta en Santiago, Chile" → cliente confirma cuáles NO ofrece → agregar todos los demás
- Escribir descripción de máx 300 caracteres para los 20 principales servicios
- Si hay múltiples categorías, pedir a AI que los categorice y agregarlos bajo la categoría correcta

**Fotos y Geotagging:**
- Subir 10+ fotos: local, equipo, trabajos terminados, stickers, tarjetas impresas
- **IMPORTANTE:** antes de subir cada foto, geoetiquetar con coordenadas GPS usando tool.geoimgr.com
- Si no hay fotos reales: generar con AI, tomar screenshot (borra metadata), luego geoetiquetar
- Estrategia: si heatmap muestra ranking débil en Providencia → subir foto con coordenadas de Providencia para dar señal a Google
- Seguir subiendo 1 foto geoetiquetada por semana — enfocar en comunas con ranking débil

**FAQ en GBP:**
- Agregar 6–8 preguntas frecuentes directamente en el perfil
- Ejemplos para imprenta chilena: "¿Hacen despacho a domicilio?", "¿Cuánto demora la entrega?", "¿Trabajan con empresas?", "¿Hacen diseño gráfico?", "¿Tienen mínimo de pedido?"

**Reseñas:**
- Meta: 5+ reseñas en el primer mes
- Pedir por WhatsApp a cada cliente después de entregar el pedido — hacerlo rutina
- Responder TODAS las reseñas (positivas y negativas) en español — señal de actividad

**Google Posts semanales:**
- Publicar 1–2 veces por semana: trabajo terminado, promo del mes, tip de impresión
- Usar AI para redactar en español, editar levemente antes de publicar
- Fotos en los posts también se pueden geoetiquetar

**NAP en GBP — idéntico al sitio:**
- Nombre: `Imprenta Salvador Dalí`
- Dirección: `Mayecura 1177, Las Condes`
- Teléfono: `+56 9 6412 3098`
- Horario: Lunes–Viernes 09:00–18:00

---

### Phase 6 — Citaciones (Directorios Chile)
*Citaciones = menciones online de tu NAP. Google las usa para verificar que el negocio es real. Una citación fuerte vale más que 50 débiles.*

**Tier 1 — Alta autoridad (hacer primero):**
- Bing Places for Business — bing.com/forbusiness — gratuito
- Apple Maps — businessconnect.apple.com — gratuito, aparece en Siri y Maps de iPhone (muy usado en Chile)

**Tier 2 — Directorios relevantes en Chile:**
- Páginas Amarillas Chile — paginasamarillas.cl — el más conocido en Chile
- Guialocal.com — directorio de empresas chilenas
- Mipymes.cl — portal PYME del gobierno, alta confianza
- Chileempresas.cl — directorio empresarial
- Foursquare — distribuye a Waze, Uber, Apple Maps (cuesta ~$20 USD pero vale)
- Facebook Página de Empresa — citación + señal social
- LinkedIn Página de Empresa — citación + autoridad de dominio

**Cómo encontrar directorios de nicho (Chile específico):**
1. Buscar "imprenta Santiago" en Google
2. Anotar qué directorios o listas aparecen en página 1
3. Registrarse en esos — Google ya los considera relevantes para este nicho en Chile
4. Repetir con "stickers personalizados Santiago", "tarjetas presentación Chile"

**Cómo encontrar citaciones de competidores:**
1. Buscar "imprenta Las Condes" en Google Maps
2. Hacer clic en un competidor top → "Más sobre este lugar"
3. Google muestra sitios que apuntan a ese negocio
4. Registrarse en los mismos sitios donde ellos están listados

**Regla NAP — idéntico en ABSOLUTAMENTE TODOS:**
- Nombre: `Imprenta Salvador Dalí` (con tilde en ó y diéresis en ï)
- Dirección: `Mayecura 1177, Las Condes, Las Condes, Región Metropolitana, Chile`
- Teléfono: `+56 9 6412 3098`

---

### Mantenimiento Semanal (Ongoing)
*SEO local no es "set and forget" — la actividad continua es señal de ranking.*

| Tarea | Frecuencia | Notas |
|-------|-----------|-------|
| Google Post en GBP | 1–2/semana | Trabajo terminado, promo, tip — AI redacta, tú editas |
| Foto geoetiquetada al GBP | 1/semana | Enfocar coordenadas en comunas con ranking débil |
| Pedir reseña a cliente | Cada entrega | Por WhatsApp, después de confirmar que quedó conforme |
| Responder reseñas | Inmediato | En español, todas — positivas y negativas |
| Revisar heatmap | 1/mes | Comparar con benchmark inicial para medir progreso |

---

### Hoja de Ruta SEO — Timeline Chile

| Semana | Acción |
|--------|--------|
| Semana 1 | Benchmarking: heatmap "imprenta Las Condes", revisar top 10 competidores, correr `site:` en Google |
| Semana 1–2 | Fase 1: Fundaciones técnicas — meta tags (fórmula Trenbolone), schema JSON-LD, alt text, sitemap.xml, robots.txt |
| Semana 2–3 | Fase 5: GBP — reclamar, categorías, servicios (30+), horario, fotos geoetiquetadas, FAQ, primera reseña |
| Semana 3–5 | Fase 2: Construir 3 service hubs prioritarios con contenido extenso (stickers, tarjetas, volantes) |
| Semana 4–6 | Fase 4: Blog — crear BlogPost.jsx, conectar "Leer más", escribir primeros 2 artículos en español |
| Semana 5–8 | Fase 6: Citaciones — Bing Places, Apple Maps, Páginas Amarillas, Facebook, LinkedIn |
| Semana 7–9 | Fase 6 cont: Encontrar directorios de nicho ("imprenta Santiago" → page 1) + citaciones de competidores |
| Semana 8+ | Fase 2 cont: Hubs restantes (pendones, etiquetas) |
| Continuo | 1–2 Google Posts/semana + 1 foto geoetiquetada/semana + pedir reseña por WhatsApp a cada cliente |

---

### SEO Changelog

| Date | SEO Action |
|------|-----------|
| 2026-05-03 | Local SEO strategy planned and documented in website.md |

---

## Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Netlify
1. `npm run build` → creates `dist/` folder
2. Drag & drop `dist/` at netlify.com
3. Add `public/_redirects` file:
   ```
   /* /index.html 200
   ```

### GitHub Pages
Add to `vite.config.js`:
```js
base: '/imprenta-salvadordali/'
```
Then use `gh-pages` npm package to deploy the `dist/` folder.
