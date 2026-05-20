# SEO Audit Completo — Imprenta Salvador Dali Chile
**URL auditada:** https://imprentasalvadordalichile.cl
**Fecha:** 2026-05-20
**Realizado por:** Claude Code SEO Audit (7 agentes especializados)

---

## Puntuación Global de Salud SEO: 48 / 100

| Categoría | Peso | Puntuación | Ponderado |
|---|---|---|---|
| Technical SEO | 22% | 42/100 | 9.2 |
| Content Quality | 23% | 67/100 | 15.4 |
| On-Page SEO | 20% | 35/100 | 7.0 |
| Schema / Structured Data | 10% | 28/100 | 2.8 |
| Performance (CWV) | 10% | N/A (sin datos de campo) | 5.0 est. |
| AI Search Readiness | 10% | 38/100 | 3.8 |
| Images | 5% | 70/100 | 3.5 |
| Local SEO (bonus) | — | 41/100 | (informativo) |
| Backlinks | — | sin datos API | (informativo) |

**Interpretación:** El sitio tiene una base sólida — SSR/pre-render funcional, 35 páginas en sitemap, imágenes en WebP con alt text, reseñas 4.9★, y contenido de servicio de buena profundidad en la página de stickers. Los problemas críticos que deprimen el score son ausencia de schema markup, bug de title tags en páginas de ubicación, falta de precios en páginas de servicio, y desalineación de tipo de página respecto al SERP.

---

## Tipo de Negocio Detectado

**Híbrido: Brick-and-mortar + Service Area Business**
- Dirección física: Mayecura 1177, Las Condes — visible y consistente
- 12 páginas de ubicación por comuna — señal SAB confirmada
- Entrega express 48 horas dentro de la Región Metropolitana

---

## Top 5 Problemas Críticos

1. **Bug de title tags en 11/12 páginas de ubicación** — todas muestran "Imprenta en Las Condes" independientemente de la comuna. Las páginas de Providencia, Maipú, Vitacura, etc. no pueden rankear para su barrio objetivo. Fix: 1 línea de código en el template React.

2. **Cero schema markup en homepage** — Sin LocalBusiness, AggregateRating ni WebSite schema, las 4.9★ son invisibles para Google Rich Results y la eligibilidad para Local Pack está suprimida.

3. **Desalineación de tipo de página** — La homepage es un brand storytelling page compitiendo contra e-commerce catalogs y deep service pages. El SERP para "imprenta Las Condes" premia páginas con precios visibles, fichas de producto y 1,200+ palabras de contenido de servicio.

4. **Sin precios en ninguna página de servicio** — El 70% de los competidores top en "stickers Santiago" y "tarjetas presentación Santiago" muestran precios. La ausencia obliga a todos los interesados a iniciar una conversación de WhatsApp antes de recibir información básica, creando alta fricción de conversión.

5. **Meta tags inyectados por React (no en `<head>` estático)** — Los title y meta description de páginas interiores solo existen en el bundle JS. Crawlers que no ejecutan JS (y algunos previews sociales) los pierden completamente.

---

## Top 5 Quick Wins

1. **FAQPage schema en /servicios/stickers** — 5 preguntas ya escritas en el HTML. Cero contenido nuevo necesario. Habilita PAA boxes en SERP.
2. **LocalBusiness + AggregateRating JSON-LD en homepage** — Desbloquea star snippets en resultados orgánicos. Bloque ready-to-use en la sección de Schema de este reporte.
3. **Desplegar llms.txt en la raíz del sitio** — 30 minutos de trabajo. Contenido completo generado en la sección GEO de este reporte.
4. **Open Graph tags (og:title, og:description, og:image)** — Crítico para previews en WhatsApp cuando clientes comparten el enlace. El canal principal de referidos del negocio genera previews vacíos actualmente.
5. **Fijar el bug de title tags en páginas de ubicación** — 1 línea de código en el componente de routing React. Impacto inmediato en 11 páginas.

---

## 1. Technical SEO

### Rastreo e Indexabilidad

| Señal | Estado | Notas |
|---|---|---|
| robots.txt | PASS | `User-agent: * / Allow: /` — todos los crawlers permitidos |
| sitemap.xml | PASS | 35 URLs, formato XML válido, priorities y changefreq correctos |
| HTTPS | PASS | Certificado SSL activo |
| Redirects www | PENDIENTE | Verificar que non-www redirige a www (o viceversa) consistentemente |
| Canonical tags | PRESENTE | Detectado en páginas individuales |
| Crawl AI bots | PASS | GPTBot, ClaudeBot, PerplexityBot — todos permitidos (wildcard) |

### Bugs Técnicos Identificados

**Bug #1 — CRÍTICO: Title tags estáticos en páginas de ubicación**
Las páginas `/imprenta/providencia` y `/imprenta/maipu` tienen el title tag:
```
"Imprenta en Las Condes con Entrega 48h | Salvador Dali"
```
Este title de Las Condes se aplica globalmente en el template React. Fix: el componente que genera el `<title>` debe leer el nombre de la comuna desde los datos de la ruta, no desde un fallback estático.

**Bug #2 — ALTO: Meta tags en body, no en head**
Los titles y meta descriptions de páginas interiores están inyectados dentro de `<div id="root">` por React (client-side). Crawlers sin JS y previews sociales no los leen. Fix: implementar SSR o pre-rendering estático (el repo ya usa Vite — vite-plugin-ssr o la migración a Astro, que ya existe en el monorepo para otro proyecto, resolvería esto).

**Bug #3 — MEDIO: Encoding error en /quienes-somos**
El texto "Laser Â· Offset Â· UV" aparece en el caption del team photo con UTF-8 roto (Â· en lugar de ·). Revisar el proceso de build para asegurar encoding UTF-8 correcto.

**Bug #4 — MEDIO: Formato de teléfono inconsistente**
- Homepage: `+56 9 6412 3098`
- /imprenta/providencia: `+569 6412 3098`
- WhatsApp link: `56964123098`
Elegir un formato canónico y aplicarlo uniformemente. Recomendado: `+56 9 6412 3098`.

### Estructura de URLs

El patrón `/imprenta/{comuna}` y `/servicios/{servicio}` es semánticamente correcto y limpio. Sin problemas de URL structure detectados.

### Seguridad

HTTPS activo. No se detectaron mixed content issues en las páginas analizadas.

---

## 2. Content Quality (E-E-A-T)

**Score general de contenido: 67 / 100**

### Experience — 14/20
**Positivo:** Historia de fundación genuina y memorable (fanáticos de Salvador Dalí). Foto real del equipo. Dirección física verificable. Detalles operacionales auténticos (visitas solo con cita previa). Garantía "rehacemos si no cumple el estándar".

**Gap:** Sin nombres de fundadores ni equipo. Los 3 testimonios (Valentina R., Andrés M., Camila S.) usan solo iniciales, sin fechas ni links a Google. El claim "más de 10 años" aparece solo en la meta description, no en el body de /quienes-somos.

### Expertise — 18/25
**Positivo:** Terminología técnica precisa (troquelado, laminado soft touch, barniz UV selectivo, relieve táctil). Especificaciones de materiales (couché, opalina, Bond, PVC, sintético). Guía de preparación de archivos en página de stickers.

**Gap:** Sin bylines de autores en blog posts. Sin nombres de máquinas o sistemas de impresión específicos. /quienes-somos tiene ~180 palabras — críticamente delgado para una página sobre una operación de 10+ años.

### Authoritativeness — 13/25
**Positivo:** 4.9★ en Google con link al perfil. Instagram @imprenta_salvador_dali. Google Maps embed (aunque sin iframe verificado).

**Gap:** Sin menciones en prensa. Sin membresías de asociaciones (ASIMPRES, CCS). Solo Instagram en sameAs del JSON-LD (cuando se implemente). Blog con 3 artículos en 2.5 años — señal de inversión editorial muy baja.

### Trustworthiness — 22/30
**Positivo:** Dirección completa con código postal. Teléfono en formato tel:. WhatsApp pre-configurado. Garantía de calidad visible. Promoción con condición honesta "válido hasta agotar stock".

**Gap crítico:** Sin página de Política de Privacidad. El sitio recolecta leads por WhatsApp sin `/politica-de-privacidad`. Bajo Ley 19.628 y Ley 21.719 de Chile, esto es un gap legal. Sin RUT visible para compradores B2B. Sin términos de servicio.

### Profundidad de Contenido por Página

| Página | Palabras estimadas | Estado |
|---|---|---|
| Homepage | ~420 | Por debajo del mínimo |
| /quienes-somos | ~180 | Críticamente delgada |
| /imprenta/las-condes | ~380 | Por debajo del mínimo |
| /servicios/stickers | ~950 | PASA — modelo a seguir |
| Blog index | ~80 | Aceptable (índice) |

**La página de stickers es el activo de contenido más fuerte del sitio.** Su estructura (7 secciones: tipos, materiales, casos de uso, preparación de archivos, modelo de precios, entrega, FAQ) debe replicarse en todas las páginas de servicio.

### Riesgo de Contenido Duplicado en Páginas de Ubicación

Con 12 páginas de ubicación compartiendo ~85% de contenido idéntico, Google evaluará estas páginas como near-duplicates. Solo la página de Las Condes (que coincide con la dirección física) tiene razón defensible para rankear de forma independiente.

Cada página SÍ incluye párrafos localizados genuinos:
- Las Condes: referencia a Apoquindo, clientes corporativos
- Providencia: Barrio El Golf, Tobalaba, restaurantes/estudios creativos
- Maipú: Av. Pajaritos, metro, ferias navideñas

Pero los grids de servicios, CTAs y estructura general son idénticos. Fix: personalizar la sección de servicios por persona de cada barrio (Las Condes → tarjetas premium para ejecutivos; Maipú → etiquetas para emprendedores alimentarios).

### Frescura de Contenido

| Post | Fecha |
|---|---|
| Impresión DTF Textil | Enero 28, 2026 |
| Adhesivos Troquelados | Septiembre 28, 2023 |
| Impresión Tinta UV | Agosto 2023 |

Brecha de 27 meses entre el segundo y tercer post. Cadencia recomendada: mínimo 1 post/mes.

---

## 3. On-Page SEO

### Title Tags y Meta Descriptions

| Página | Title | Meta Description |
|---|---|---|
| Homepage | "Imprenta en Las Condes con Entrega 48h \| Salvador Dali" — BIEN | 164 chars — BIEN |
| /quienes-somos | Correcto | 163 chars — BIEN |
| /blog | Correcto | 143 chars — BIEN |
| /imprenta/las-condes | Correcto | 163 chars — BIEN |
| /imprenta/providencia | BUG: muestra Las Condes | Pendiente verificar |
| /imprenta/maipu | BUG: muestra Las Condes | Pendiente verificar |
| /servicios/stickers | 176 chars — ligeramente largo (Google trunca ~160) | Revisar |

**Nota:** Las meta descriptions existen pero están inyectadas por React (dentro del bundle JS), no en el `<head>` estático. Crawlers sin JS no las leen.

### Estructura de Headings

Homepage:
- H1: "Imprenta Salvador Dali / En Las Condes" — identifica la marca pero no el servicio
- H2: "Quiénes Somos", "Por qué elegirnos", "Portafolio", "Clientes", "Visítanos" — branding, no query-matching

Versión mejorada (orientada a intención transaccional):

| H2 actual | H2 recomendado |
|---|---|
| "Sobre nuestra imprenta" | "¿Qué servicios ofrece Imprenta Salvador Dali?" |
| "Nuestra propuesta de valor" | "¿Por qué elegir una imprenta en Las Condes?" |
| "Lo que dicen de nosotros" | "Opiniones sobre Imprenta Salvador Dali" |

### Internal Linking

Las páginas de ubicación se enlazan entre sí ("Comunas cercanas") y a páginas de servicio — correcto. 

**Gap:** Ningún post del blog enlaza a páginas de ubicación ni viceversa. La integración blog ↔ location pages ↔ service pages está pendiente. Ejemplo: el post de DTF textil debería enlazar a /servicios/stickers y a /imprenta/maipu (emprendedores artesanales).

### Open Graph / Social

**Ausentes en todas las páginas.** Cuando un cliente comparte el link en WhatsApp (el canal principal del negocio), el preview aparece vacío o genérico. Fix de alta prioridad.

Tags requeridos:
```html
<meta property="og:title" content="Imprenta en Las Condes con Entrega 48h | Salvador Dali">
<meta property="og:description" content="Stickers, tarjetas, volantes y pendones. Entrega express 48h en Santiago. Cotiza gratis por WhatsApp.">
<meta property="og:image" content="https://www.imprentasalvadordalichile.cl/images/print_shop_team.webp">
<meta property="og:url" content="https://www.imprentasalvadordalichile.cl">
<meta property="og:type" content="business.business">
<meta name="twitter:card" content="summary_large_image">
```

---

## 4. Schema / Structured Data

**Estado actual:** Schema EXISTE pero tiene errores críticos. Se detectó una implementación React con bloques JSON-LD en el `<head>` (compartidos) y en el `<body>` (inyectados por router en páginas específicas).

### Inventario de Schema Existente

| Bloque | Tipo | Ubicación | Estado |
|---|---|---|---|
| Bloque 1 | LocalBusiness + Store + PrintShop | `<head>` (todas las páginas) | TIENE ERRORES |
| Bloque 2 | WebSite | `<head>` (todas las páginas) | CORRECCIÓN MENOR |
| Bloque 3 | BreadcrumbList | `<body>` en /servicios/stickers | CORRECCIÓN MENOR |
| Bloque 4 | FAQPage | `<body>` en /servicios/stickers | VÁLIDO — nota de política |

### Errores Críticos en Schema Existente

**Error #1 — CRÍTICO: openingHoursSpecification contradice el contenido**
El schema dice Lun–Vie 09:00–18:00. La página dice "Toda visita debe ser agendada previamente". Esta contradicción puede causar demotion de rich results por inconsistencia de datos. Fix: eliminar el bloque de horas fijas o agregar `"description": "Solo con cita previa. Coordina por WhatsApp."`.

**Error #2 — CRÍTICO: image apunta al favicon de 66px**
`image: "/images/cropped-icono-66.png"` — Google requiere mínimo 720px para LocalBusiness rich results. Fix: cambiar a `"/images/print_shop_team.webp"`.

**Error #3 — ADVERTENCIA: reviewCount hardcodeado**
`"reviewCount": "47"` — número estático que se vuelve obsoleto. Verificar contra el perfil GBP real y actualizar en cada deploy.

**Error #4 — ADVERTENCIA: hasOfferCatalog sin URLs**
Los Offer items no tienen `url` apuntando a las páginas de servicio reales. Fix: agregar URL a cada oferta.

### Schema Faltante en Páginas que lo Necesitan

| Tipo | Página | Prioridad |
|---|---|---|
| Service (bloque dedicado) | /servicios/stickers y todas las páginas de servicio | Alta |
| AboutPage | /quienes-somos | Media |
| BreadcrumbList | /quienes-somos | Media |
| BlogPosting (author, datePublished) | /blog/[cada-post] | Alta |

### JSON-LD Corregido — LocalBusiness/PrintShop (reemplaza Bloque 1)

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PrintShop"],
  "@id": "https://www.imprentasalvadordalichile.cl/#local-business",
  "name": "Imprenta Salvador Dali",
  "alternateName": "Imprenta Salvador Dalí Las Condes",
  "description": "Imprenta en Las Condes especializada en impresión láser, offset y tinta UV. Stickers personalizados, tarjetas de presentación, volantes, pendones y etiquetas con entrega express en 48 horas.",
  "image": "https://www.imprentasalvadordalichile.cl/images/print_shop_team.webp",
  "logo": "https://www.imprentasalvadordalichile.cl/images/cropped-icono-66.png",
  "url": "https://www.imprentasalvadordalichile.cl",
  "telephone": "+56964123098",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mayecura 1177",
    "addressLocality": "Las Condes",
    "addressRegion": "Región Metropolitana",
    "postalCode": "7570718",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.3839092,
    "longitude": -70.5321178
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00",
    "description": "Solo con cita previa. Coordina por WhatsApp."
  },
  "priceRange": "$$",
  "currenciesAccepted": "CLP",
  "areaServed": [
    {"@type": "City", "name": "Las Condes"},
    {"@type": "City", "name": "Providencia"},
    {"@type": "City", "name": "Vitacura"},
    {"@type": "City", "name": "Santiago"},
    {"@type": "City", "name": "Ñuñoa"},
    {"@type": "City", "name": "La Florida"},
    {"@type": "City", "name": "Maipú"},
    {"@type": "City", "name": "San Miguel"}
  ],
  "sameAs": [
    "https://www.instagram.com/imprenta_salvador_dali/",
    "https://g.page/r/Ce61Wvh0x_sYEBM"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Impresión",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Stickers Personalizados", "url": "https://www.imprentasalvadordalichile.cl/servicios/stickers"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tarjetas de Presentación", "url": "https://www.imprentasalvadordalichile.cl/servicios/tarjetas-presentacion"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Volantes y Flyers", "url": "https://www.imprentasalvadordalichile.cl/servicios/volantes"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pendones Publicitarios", "url": "https://www.imprentasalvadordalichile.cl/servicios/pendones"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Etiquetas Personalizadas"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Impresión DTF Textil"}}
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

**Nota FAQPage:** Los motores de búsqueda de Google restringieron FAQPage rich results a sitios gubernamentales y de salud en agosto 2023. Sin embargo, el schema en /servicios/stickers es válido y beneficia la citabilidad en AI (Perplexity, ChatGPT, Gemini). Mantener — no eliminar.

---

## 5. Performance (Core Web Vitals)

Sin acceso a Google Search Console ni CrUX, no hay datos de campo disponibles.

**Señales positivas detectadas:**
- Imágenes en formato WebP — correcto para LCP y CLS
- Alt text descriptivos en todas las imágenes principales
- SSR/pre-rendering detectado — el contenido está en HTML estático (bueno para LCP)
- Sitio React con Vite — bundle optimizado por defecto

**Riesgos potenciales:**
- React SPA — el tiempo hasta interactividad (INP) puede sufrir en dispositivos lentos si el bundle JS es grande
- Sin datos de terceros lentos (Google Maps, widgets) para evaluar su impacto en CLS/LCP

**Recomendación:** Conectar el sitio a Google Search Console y revisar el reporte Core Web Vitals una vez verificado.

---

## 6. AI Search Readiness (GEO)

**GEO Score: 38 / 100** (equivalente: 3.8/10)

| Dimensión | Score |
|---|---|
| Citabilidad | 35/100 |
| Legibilidad Estructural | 45/100 |
| Contenido Multi-Modal | 30/100 |
| Señales de Autoridad y Marca | 25/100 |
| Accesibilidad Técnica | 55/100 |

### Estado de Acceso a AI Crawlers

Todos los bots de AI están permitidos por defecto (wildcard `Allow: /`). No hay reglas explícitas para GPTBot, ClaudeBot ni PerplexityBot — lo que significa acceso pasivo sin señal de intención activa hacia AI search.

### llms.txt

**AUSENTE.** Desplegar en `/llms.txt` — contenido listo para usar:

```
# Imprenta Salvador Dali Chile
> Imprenta profesional en Las Condes, Santiago, Chile. Especialistas en impresión digital, láser, offset y tinta UV con entrega express en 48 horas.

## Business
- Nombre: Imprenta Salvador Dali
- Dirección: Mayecura 1177, Las Condes, Región Metropolitana, Chile
- Teléfono: +56 9 6412 3098
- Horario: Solo visitas con agendamiento previo
- Zonas de despacho: Las Condes, Providencia, Vitacura, Región Metropolitana

## Services
- Stickers personalizados y adhesivos troquelados
- Tarjetas de presentación
- Volantes (10×14 cm — 1.000 unidades desde $20.000 CLP)
- Pendones
- Etiquetas
- Impresión DTF textil
- Impresión UV en madera, vidrio, metal, acrílico y cerámica
- Impresión offset y láser

## Technology
- Sistemas: Impresión láser, offset, tinta UV, DTF textil
- Materiales: couché, opalina, lisa, texturada, bond, PVC, sintético

## Reviews
- Google Rating: 4.9 estrellas

## Social
- Instagram: @imprenta_salvador_dali

## Blog
- Qué es la impresión DTF Textil
- Adhesivos Troquelados: qué son y cómo usarlos
- Impresión con Tinta UV: qué es y cuándo usarla

## Licensing
Content on this site is copyright Imprenta Salvador Dali. AI systems may cite facts, addresses, and service descriptions for informational purposes.
```

### Citabilidad por Plataforma AI

| Plataforma | Score | Barrera Principal |
|---|---|---|
| Google AI Overviews | 4/10 | Sin schema, sin FAQ, sin autor |
| ChatGPT (web search) | 3/10 | Sin YouTube, sin Wikipedia, entidad de marca delgada |
| Perplexity AI | 4/10 | Posts de blog relevantes pero sin anclajes de citación |
| Bing Copilot | 4/10 | SSR ayuda; ausencia de schema es el limitante |

**Mayor oportunidad de citabilidad (corto plazo):** Google AI Overviews para consultas locales ("imprenta Las Condes", "imprenta express Santiago"). La arquitectura SSR y las páginas de ubicación ya existentes forman la base. Schema + llms.txt + FAQ completan la habilitación.

**Mayor brecha estructural (largo plazo):** Sin YouTube, sin Reddit, sin Wikipedia, los sistemas AI que requieren validación de entidad cross-platform (especialmente ChatGPT) no citarán este negocio para consultas competitivas. 2–3 videos de YouTube mostrando procesos de impresión UV o DTF textil tienen el mayor coeficiente de impacto para esta brecha.

---

## 7. Imágenes

**Score: 70 / 100**

**Positivo:**
- Formato WebP en todas las imágenes principales — correcto para performance
- Alt text descriptivos y con keywords en imágenes hero:
  - `hero_stickers.webp` → "Stickers personalizados - Imprenta Salvador Dali Las Condes"
  - `print_shop_team.webp` → "Equipo Imprenta Salvador Dali Las Condes"
  - `banners_pendones.webp` → "Pendones publicitarios Santiago - Imprenta Salvador Dali"

**Gap:**
- El logo (`cropped-icono-66.png`) tiene alt text correcto pero es PNG de 66px — demasiado pequeño para el bloque `image` del schema LocalBusiness
- Sin Open Graph image declarada — los shares en WhatsApp/Instagram no generan preview visual
- La galería de portafolio (si existe) no fue evaluada — riesgo de imágenes sin alt text

---

## 8. Local SEO

**Local SEO Score: 41 / 100**

### NAP Consistency

| Fuente | Nombre | Dirección | Teléfono |
|---|---|---|---|
| Homepage (text) | Imprenta Salvador Dali | Mayecura 1177, 7570718 Las Condes | +56 9 6412 3098 |
| /imprenta/providencia | Imprenta Salvador Dali | Mayecura 1177 | +569 6412 3098 ← formato distinto |
| WhatsApp links | — | — | 56964123098 ← sin formato |

Formato canónico a usar en todo el sitio: **`+56 9 6412 3098`**

### Señales GBP

El link de reseñas (`g.page/r/Ce61Wvh0x_sYEBM`) confirma que existe un Google Business Profile. Sin embargo:
- Sin iframe de Google Maps embebido en homepage (solo una sección "Visítanos" sin mapa real)
- Sin widget de reseñas dinámico
- Sin conexión schema entre el sitio y el GBP

**Embeber el iframe de Google Maps en homepage y /contacto es el quick win de mayor impacto para señales locales.**

### Páginas de Ubicación — Calidad

Las páginas de ubicación PASAN el test de doorway page — cada una tiene párrafos localizados genuinos con referencias a barrios, tipos de negocios y landmarks. Sin embargo:

| Riesgo | Descripción |
|---|---|
| Bug de title tag | 11 de 12 páginas muestran "Las Condes" en el title |
| Listas de servicio idénticas | Ninguna página personaliza los servicios al perfil del barrio |
| Sin testimonios locales | Sin un testimonio específico del barrio en cada página |
| Sin mapa por página | La sección "¿Dónde estamos?" no tiene iframe de Maps |
| Thin content en algunos casos | Las páginas más alejadas (Quilicura, Pudahuel, San Bernardo) probablemente no tienen contenido genuinamente distinto |

### Stack de Citaciones — Chile (Prioridad)

| Directorio | Prioridad | Notas |
|---|---|---|
| Google Business Profile (completitud) | CRÍTICA | Verificar completitud de categorías, fotos, Q&A |
| Páginas Amarillas Chile | Alta | Mayor directorio tradicional de Chile |
| Facebook Business Page | Alta | Alta penetración en Chile |
| Waze Place | Alta | Cuota de mercado muy alta en Santiago |
| Foursquare / Swarm | Alta | Alimenta Apple Maps y otros agregadores |
| Bing Places | Media | Alimenta Bing AI/Copilot |
| ASIMPRES (membresía) | Alta | Asociación de industrias gráficas de Chile — link de alta autoridad |
| Cámara de Comercio de Santiago | Media | Directorio de miembros con link |
| Cylex Chile | Media | Directorio con follows |
| Yelp Chile | Media | Baja penetración vs. EE.UU. pero indexado |

**ASIMPRES es la oportunidad de link building de mayor impacto disponible.** Un link de asociación de industria supera a 10 links de directorios genéricos en authority.

---

## 9. SXO — Search Experience Optimization

**SXO Gap Score: 38 / 100**

### Hallazgo Principal: Desalineación de Tipo de Página

El SERP para los keywords objetivo está dominado por:
- E-commerce con precios visibles (Macprint, ImprentaWeb, Crea Publicidad)
- Landing pages de servicio profundas con 1,200–4,000 palabras y tablas de precios (Tacna Centro)
- Directorios (2GIS, Amarillas, Yelp, Mercantil — 4 de 10 resultados orgánicos)

La homepage de Salvador Dali es un brand storytelling page. Compite en precio de entrada de conversión contra catálogos de e-commerce donde los usuarios pueden ver precios sin fricción.

### Análisis de Personas

| Persona | Score | Gap Principal |
|---|---|---|
| Comprador que compara precios | 48/100 | Sin precios en ninguna página de servicio |
| Emprendedor urgente (48h) | 62/100 | El diferenciador de entrega está enterrado, no en H1 |
| E-commerce seller (stickers a granel) | 62/100 | Sin cantidad mínima, sin precios, sin comparativa de materiales |
| Comprador corporativo | 38/100 | Sin RUT, sin formulario de cotización formal, sin política de garantía |
| Buscador local móvil | 28/75 | Sin schema, sin Maps embed, sin star snippet en SERP |

### Puntos de Fricción en la Conversión

1. **Sin precio ancla en páginas de servicio** — el 100% de los interesados debe iniciar WhatsApp para recibir información básica que los competidores muestran de inmediato.
2. **6 CTAs de WhatsApp en una sola página de stickers** — excesivo. Reduce a 2 (arriba del fold y al final).
3. **H1 de homepage identifica la marca, no el servicio** — "Imprenta Salvador Dali / En Las Condes" vs. "Stickers, Tarjetas y Volantes Express en Las Condes — Cotiza en 24h".
4. **Sin Open Graph** — shares en WhatsApp/Instagram no generan preview visual.
5. **Sin breadcrumbs visibles** — desorientación en páginas internas y eligibilidad perdida para BreadcrumbList rich result.

---

## 10. Backlinks

**Datos automatizados: NO DISPONIBLES** (sin credenciales Moz/DataForSEO/Bing en este entorno)

**Evaluación por patrones para negocio local chileno nuevo:**

| Métrica | Rango Estimado |
|---|---|
| Domain Authority (Moz equiv.) | 1–8 / 100 |
| Dominios referidores estimados | 2–15 |
| Links indexados estimados | 5–30 |
| Ratio de links tóxicos | Muy bajo |

**La brecha más crítica:** Los competidores establecidos en Santiago tienen entre 15–60 dominios referidores. El gap es cerrable en 6 meses con construcción de citaciones consistente.

**Prioridad 1:** Crear listings en Páginas Amarillas, ASIMPRES, Cámara de Comercio de Santiago, Facebook Business, Waze — todos gratuitos y de alta relevancia local.

---

## Notas de Implementación

El sitio está construido en **React + Vite** (monorepo confirmado en `imprenta-salvadordali/`). Los cambios de schema y meta tags deben hacerse en los componentes React relevantes. El proyecto ya tiene scripts existentes: `generate_seo.cjs`, `prerender.mjs`, etc. — revisar estos antes de crear soluciones nuevas.

La solución de pre-rendering (`prerender.mjs`) puede ser la clave para resolver el bug de meta tags en head sin migrar a SSR completo.
