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
- [x] Navbar dropdowns switched from hover to click-to-toggle (+ Escape key, aria-expanded)
- [x] ComunaPage improved: keyword-dense H1, 2-paragraph intro, services bullet links, neighbors cross-links
- [x] comunas.js enriched: `body`, `keywords`, `neighbors` fields for all 12 comunas

### Documentation
- [x] `website.md` — full project guide
- [x] `checklist.md` — this file

---

## 🔴 High Priority — To Do

### SEO — Technical Foundations (Phase 1)
- [x] Install `react-helmet-async`
- [x] Add meta title + description to every page (all pages: Home, Portafolio, Tienda, TiendaCategory, QuienesSomos, Blog, BlogPost, Contacto, ServicioPage, ComunaPage)
- [x] Add Open Graph tags (og:title, og:description, og:image) to every page
- [ ] Add alt text to ALL images (portfolio, products, hero, gallery)
- [x] Add LocalBusiness + PrintShop JSON-LD schema to `index.html`
- [x] Create `public/sitemap.xml` listing all routes (34 URLs)
- [x] Create `public/robots.txt`

### Contact Form Backend
- [ ] Choose provider: EmailJS (recommended, free) or Supabase or Formspree
- [ ] Connect form in `src/pages/Contacto.jsx` to actually send messages
- [ ] Add success/error handling

### Blog Article Pages
- [x] Create `src/pages/BlogPost.jsx` template (with sidebar, CTA, related posts, related services)
- [x] Create `src/data/blogPosts.js` with full content for 3 existing posts
- [x] Add `/blog/:slug` route to `App.jsx`
- [x] Fix "Leer más" buttons in `Blog.jsx` to link to article pages
- [x] Redesigned Blog.jsx — featured post card (dark), grid for rest, tag strip

---

## 🟡 Medium Priority — To Do

### SEO — Benchmarking (hacer ANTES de tocar el GBP)
- [ ] Buscar "imprenta Las Condes" en Google Maps y anotar: cuántas reseñas, fotos y categorías tienen los top 10
- [ ] Correr heatmap con GMB Everywhere o Leadsnap sobre "imprenta Las Condes" — guarda screenshot como punto de partida
- [ ] Revisar si hay competidores con nombre keyword-stuffed o dirección falsa (ej: "IMPRENTA STICKERS TARJETAS LAS CONDES") → reportar con "Sugerir un cambio" en Google Maps
- [ ] Buscar `site:imprentasalvadordali.cl` en Google → ver cuántas páginas están indexadas (meta: 30+)
- [ ] Validar schema en validator.schema.org cuando esté el JSON-LD agregado

### SEO — Google Business Profile (Fase 5 — hacer en paralelo con técnico)
- [ ] Reclamar/verificar GBP de "Imprenta Salvador Dalí" en Las Condes #10.415
- [ ] Categoría principal: **"Imprenta"** — la más importante, no cambiar sin razón
- [ ] Categorías secundarias: Fabricante de adhesivos, Servicio de impresión de tarjetas de presentación (máx 2–3 total)
- [ ] Completar perfil al 100% — dirección, teléfono, web, horario (mínimo 3/5 funciones activas)
- [ ] Agregar servicios: meta 30+ servicios, máx 99. Usar AI para generar lista de servicios de imprenta → cliente confirma cuáles NO ofrece → agregar todos los demás. Escribir descripción de 300 caracteres para los 20 principales.
- [ ] Subir 10+ fotos (local, equipos, trabajos terminados) — GEOETIQUETAR antes de subir (ver sección Geotagging)
- [ ] Configurar horario: Lunes–Viernes 09:00–18:00
- [ ] Agregar URL del sitio nuevo (URL de Vercel una vez desplegado)
- [ ] Activar función "Reservas" → enlazar a la página `/contacto` (suma un punto de perfil)
- [ ] Agregar sección de Preguntas Frecuentes en GBP — 6–8 preguntas, generar con AI en español
- [ ] Activar Google Messages — responder en menos de 1 hora (señal de ranking)
- [ ] Publicar Google Post semanal: promos, trabajos terminados, tips de impresión — mínimo 1 por semana
- [ ] Meta: 5+ reseñas en el primer mes — pedir a cada cliente por WhatsApp después de entrega
- [ ] NAP en GBP idéntico al sitio: `Imprenta Salvador Dalí · Las Condes #10.415, of 25B · +56 9 6412 3098`

### SEO — Geotagging de Fotos
- [ ] Usar tool.geoimgr.com para incrustar coordenadas GPS en fotos antes de subirlas al GBP
- [ ] Si no hay fotos reales: generar imagen con AI, tomar screenshot (borra metadata original), geoetiquetar
- [ ] Estrategia: si el heatmap muestra ranking bajo en Providencia o Vitacura → geoetiquetar foto con coordenadas de esa comuna para dar señal a Google de que se trabaja ahí

### Products
- [ ] Agregar precios a los 9 productos sin precio en `src/data/products.js`
- [ ] Agregar páginas de detalle de producto (`/tienda/:category/:slug`)

### SEO — Content Improvements (done 2026-05-05)
- [x] Home H1 changed from brand-name to keyword-dense: "Imprenta en Las Condes"
- [x] index.html title updated with Trenbolone formula
- [x] ServicioPage breadcrumb fixed: now shows Inicio / Servicios / [Service]
- [x] servicios.js expanded: 6 body sections per service (~1,200+ words each), all 12 comunas linked
- [x] comunas.js expanded: 600-800 word body per comuna with local landmarks and context
- [x] blogPosts.js: 3 full articles with H2 structure, 600-800 words each, CTA blocks

### Más Service Hubs SEO (Fase 2 cont.)
- [ ] `/servicios/etiquetas` — página hub de Etiquetas Personalizadas
- [ ] Agregar etiquetas a `src/data/servicios.js`

---

## 🟢 Low Priority — To Do

### SEO — Citaciones (Fase 6) — Chile específico
*Una citación fuerte vale más que 50 débiles. NAP idéntico en todas.*

**Tier 1 — Alta autoridad (hacer primero):**
- [ ] Bing Places for Business — bing.com/forbusiness — gratuito, alta autoridad
- [ ] Apple Maps — businessconnect.apple.com — gratuito, aparece en Siri y Maps iOS
- [ ] Google Maps ya cubierto por GBP

**Tier 2 — Directorios Chile relevantes:**
- [ ] Páginas Amarillas Chile — paginasamarillas.cl — el directorio más conocido en Chile
- [ ] Guialocal.com — directorio de empresas Chile
- [ ] Mipymes.cl — portal PYME del gobierno chileno, alta confianza
- [ ] Chileempresas.cl — directorio empresarial chileno
- [ ] Foursquare — foursquare.com (distribuye a Waze, Uber, Apple Maps) — cuesta ~$20 USD
- [ ] Facebook Página de Empresa — también es citación + señal social
- [ ] LinkedIn Página de Empresa — también es citación + señal de autoridad

**Tier 3 — Encontrar directorios de nicho:**
- [ ] Buscar "imprenta Santiago" en Google → anotar qué directorios aparecen en página 1 → registrarse en esos (Google los considera relevantes para el nicho)
- [ ] Revisar backlinks de los top 3 competidores via sección "Más sobre este lugar" en Google Maps → registrarse en los mismos sitios

**Regla NAP — idéntico en TODOS:**
- Nombre: `Imprenta Salvador Dalí` (con tilde y ï)
- Dirección: `Las Condes #10.415, of 25B, Las Condes, Región Metropolitana, Chile`
- Teléfono: `+56 9 6412 3098`

### SEO — Tareas Semanales Recurrentes (una vez el sitio y GBP estén activos)
- [ ] Publicar 1–2 Google Posts por semana: trabajo terminado, promoción del mes, tip de impresión — usar AI para redactar, editar levemente
- [ ] Subir 1 foto geoetiquetada por semana al GBP — enfocada en comunas con ranking débil según heatmap
- [ ] Pedir reseña a cada cliente por WhatsApp después de entregar el pedido — hacer esto un hábito de rutina

### Mejoras del Sitio
- [ ] Filtrado del blog por fecha (los pills de archivo son decorativos por ahora)
- [ ] Animaciones de scroll (Intersection Observer)
- [ ] Optimización de imágenes — descargar imágenes del CDN de WordPress, convertir a WebP, hospedar localmente

### Despliegue
- [x] `vercel.json` agregado para SPA routing — hecho
- [ ] Desplegar en Vercel (conectar repo GitHub en vercel.com — 2 min)
- [ ] Apuntar dominio (si existe) al despliegue en Vercel

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
| 2026-05-04 | Navbar: hover → click-to-toggle dropdowns; ComunaPage: keyword-rich H1/body/neighbors; comunas.js: body+keywords+neighbors for all 12 |
| 2026-05-04 | Fixed navbar navigation: migrated App.jsx from BrowserRouter to createBrowserRouter + RouterProvider (React Router v7 compat) |
| 2026-05-04 | Fixed navbar dropdown links canceling SPA navigation on click. Switched to an invisible overlay for clicking outside. |
| 2026-05-05 | Installed react-helmet-async. Added Helmet meta tags + OG tags to ALL 10 page components. |
| 2026-05-05 | Fixed Home H1 to keyword-dense "Imprenta en Las Condes". Updated index.html title (Trenbolone formula) + added full JSON-LD LocalBusiness+PrintShop schema. |
| 2026-05-05 | Created BlogPost.jsx with sidebar, CTA card, related posts, related service links. Created blogPosts.js with 3 full articles (600-800 words each, H2 structure). Redesigned Blog.jsx with featured post dark card + grid layout. Fixed "Leer más" to navigate to /blog/:slug. |
| 2026-05-05 | Expanded servicios.js: intro + 6 body sections per service (~1,200+ words each). All 4 services now link to all 12 comunas. Added ServicioPage long-form content rendering section. |
| 2026-05-05 | Expanded comunas.js: 600-800 word body per comuna with local context, landmarks and commercial activity description. |
| 2026-05-05 | Fixed ServicioPage breadcrumb: was Inicio/Tienda/[service], now correctly Inicio/Servicios/[service]. |
| 2026-05-05 | Created public/sitemap.xml (34 URLs, priorities set) and public/robots.txt. |
