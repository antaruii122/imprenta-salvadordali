# Imprenta Salvador Dalí — Website Guide

> Complete reference for the redesigned website. Use this as the source of truth for all future development.

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
    │   ├── Navbar.jsx       ← Sticky nav, dropdown Tienda menu, mobile hamburger
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
| Google Maps | Embedded iframe for Las Condes #10.415, of 25B |
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
