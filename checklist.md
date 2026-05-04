# Imprenta Salvador Dalí — Task Checklist

> This file tracks everything done and pending on the website.
> **Rule:** Always read `website.md` before starting work. Always update both `checklist.md` AND `website.md` when finishing.
> Connected to: [website.md](website.md)

---

## ✅ Completed

### Website Build
- [x] React + Vite project scaffolded
- [x] Tailwind CSS configured with custom design tokens (brand, beige, charcoal)
- [x] Google Fonts: Playfair Display + Inter
- [x] React Router DOM — multi-page routing
- [x] ScrollToTop on every route change (`useLocation`)
- [x] GitHub repo created: https://github.com/antaruii122/imprenta-salvadordali

### Pages Built
- [x] Home (`/`) — hero, stats, about, highlights, promo, gallery, testimonials, map
- [x] Portafolio (`/portafolio`) — 21 images, hover overlay
- [x] Tienda (`/tienda`) — category cards + all products
- [x] TiendaCategory (`/tienda/:slug`) — 4 category filters
- [x] Quiénes Somos (`/quienes-somos`) — story, highlights, map
- [x] Blog (`/blog`) — 3 posts listed
- [x] Contacto (`/contacto`) — form + map
- [x] ServicioPage (`/servicios/:slug`) — 4 service hubs (stickers, tarjetas, volantes, pendones)
- [x] ComunaPage (`/imprenta/:slug`) — 12 comunas pages

### Components Built
- [x] Navbar — 4 dropdowns: Nuestro Trabajo / Servicios / Nosotros / Cobertura
- [x] Footer — links to pages, servicios, cobertura, contact
- [x] MapSection — Google Maps embed + dark info panel (on ALL pages)
- [x] ProductCard — hover scale + WhatsApp CTA
- [x] PromoBar — monthly promo banner

### Data Files
- [x] `src/data/products.js` — 10 products with categories
- [x] `src/data/servicios.js` — 4 service hubs with FAQs
- [x] `src/data/comunas.js` — 12 comunas with descriptions

### Fixes & Improvements
- [x] Scroll-to-top on route change
- [x] Hero image changed from DTF shirt → stickers
- [x] DTF Textil removed from service tags; Etiquetas added
- [x] Navbar redesigned: 4 dropdowns, mobile accordion, closes on navigation
- [x] Footer updated with Servicios + Cobertura link sections
- [x] Internal linking: service pages ↔ comunas pages (hub-and-spoke SEO)

### Documentation
- [x] `website.md` — full project guide
- [x] `checklist.md` — this file

---

## 🔴 High Priority — To Do

### SEO — Technical Foundations (Phase 1)
- [ ] Install `react-helmet-async`
- [ ] Add meta title + description to every page
- [ ] Add Open Graph tags (og:title, og:description, og:image) to every page
- [ ] Add alt text to ALL images (portfolio, products, hero, gallery)
- [ ] Add LocalBusiness + PrintShop JSON-LD schema to `index.html`
- [ ] Create `public/sitemap.xml` listing all routes
- [ ] Create `public/robots.txt`

### Contact Form Backend
- [ ] Choose provider: EmailJS (recommended, free) or Supabase or Formspree
- [ ] Connect form in `src/pages/Contacto.jsx` to actually send messages
- [ ] Add success/error handling

### Blog Article Pages
- [ ] Create `src/pages/BlogPost.jsx` template
- [ ] Create `src/data/blogPosts.js` with full content for 3 existing posts
- [ ] Add `/blog/:slug` route to `App.jsx`
- [ ] Fix "Leer más" buttons in `Blog.jsx` to link to article pages

---

## 🟡 Medium Priority — To Do

### SEO — Google Business Profile (Phase 5 — do in parallel with technical SEO)
- [ ] Claim/verify GBP for "Imprenta Salvador Dalí"
- [ ] Set primary category: "Print shop"
- [ ] Add secondary categories: Sticker maker, Business card printing service
- [ ] Upload 10+ photos (storefront, equipment, printed samples)
- [ ] Add all services with descriptions + prices
- [ ] Set hours: Mon–Fri 09:00–18:00
- [ ] Add website URL (new site)
- [ ] Enable Google Messages
- [ ] Get 5+ reviews in first month

### Products
- [ ] Add prices to the 9 products missing them in `src/data/products.js`
- [ ] Add product detail pages (`/tienda/:category/:slug`)

### More SEO Service Hubs (Phase 2 cont.)
- [ ] `/servicios/etiquetas` — Etiquetas Personalizadas hub page
- [ ] Add etiquetas to `src/data/servicios.js`

---

## 🟢 Low Priority — To Do

### SEO — Citations (Phase 6)
- [ ] Submit to Páginas Amarillas Chile
- [ ] Submit to Localizate.online
- [ ] Create/complete Facebook Business Page
- [ ] Create LinkedIn Company Page
- [ ] Submit to Bing Places for Business
- [ ] Submit to Apple Maps (Apple Business Connect)

### Website Improvements
- [ ] Blog archive filtering (date pills are decorative only)
- [ ] Scroll-in animations (Intersection Observer)
- [ ] Image optimization — download WP CDN images, convert to WebP, host locally

### Deployment
- [ ] Deploy to Vercel or Netlify (currently only on GitHub, not live)
- [ ] Add `vercel.json` or `public/_redirects` for SPA routing
- [ ] Point domain (if any) to new deployment

---

## 📋 Session Log

| Date | What was done |
|------|--------------|
| 2026-04-30 | Initial full build — all pages, components, routing |
| 2026-04-30 | GitHub repo created and pushed |
| 2026-05-03 | Scroll-to-top fix, website.md created |
| 2026-05-04 | Hero fixed (stickers), ServicioPage + ComunaPage created, data files, routes |
| 2026-05-04 | Navbar redesigned (4 dropdowns), Footer updated with all new links |
| 2026-05-04 | checklist.md created, website.md updated |
