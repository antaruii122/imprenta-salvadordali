# Plan de Acción SEO — Imprenta Salvador Dali Chile
**Actualizado:** 2026-05-20
**Score actual:** 48 / 100 → **Score objetivo (90 días):** 68–72 / 100

> Las implementaciones las hace Claude Code, no Ricardo. Este plan es para saber qué viene próximo y en qué orden trabajar.

---

## ✅ YA IMPLEMENTADO (2026-05-20)

- [x] **Schema LocalBusiness + PrintShop corregido** en Homepage — imagen cambiada de favicon a foto del equipo, horas marcadas como "solo con cita previa", URLs agregadas a los offer items
- [x] **Schema WebSite** con @id y publisher añadido al Homepage
- [x] **Open Graph tags completos** en Homepage — og:image ahora apunta a print_shop_team.webp (antes apuntaba a og-preview.jpg inexistente)
- [x] **Twitter Card** añadida al Homepage
- [x] **llms.txt** creado en `/public/llms.txt` — desplegable en `imprentasalvadordalichile.cl/llms.txt`
- [x] **og:image corregida** en ComunaPage, TiendaCategory y Tienda — todas apuntaban al favicon de 66px
- [x] **Teléfono unificado** en MapSection — formato canónico `+56 9 6412 3098`
- [x] **"Útiles Escolares" eliminado completamente** del sitio:
  - Ruta `/tienda/utiles-escolares` removida de App.jsx
  - Categoría eliminada de Navbar (desktop y móvil)
  - Categoría eliminada de Tienda.jsx y TiendaCategory.jsx
  - Productos reasignados en products.js (a `stickers` y `publicidad`)
  - Meta description de Tienda actualizada
  - Ruta eliminada de prerender.mjs
  - Service tag "Útiles Escolares" eliminado del hero de Homepage

---

## 🔴 CRÍTICO — Próxima sesión

### 1. Fix del bug de title tags en páginas de ubicación
**Problema:** Las páginas `/imprenta/providencia`, `/imprenta/maipu`, etc. muestran "Imprenta en Las Condes" en el title tag. Esto impide que rankeen para sus comunas objetivo.

**Dónde está el bug:** El `metaTitle` de cada comuna está definido correctamente en `src/data/comunas.js` (cada una tiene el nombre correcto). El problema está en `ComunaPage.jsx` que **sí lo usa correctamente** (`{comuna.metaTitle}`). El bug ocurre si el prerenderizado no está ejecutando el SSR correctamente para cada ruta.

**Diagnóstico pendiente:** Verificar si el prerender.mjs genera HTML con el title correcto para `/imprenta/providencia`. Correr `npm run build` + `node prerender.mjs` y revisar `dist/imprenta/providencia/index.html` — si el title sigue siendo "Las Condes", el problema está en cómo `react-helmet-async` pasa el helmet al template durante SSR.

**Fix probable:** En `prerender.mjs` línea 67-71, verificar que `helmet.title.toString()` retorna el title de la ruta específica y no el fallback del template.

---

### 2. Verificar que el schema LocalBusiness nuevo se pre-renderiza correctamente
Después del fix del punto 1, hacer `node prerender.mjs` y verificar que el JSON-LD del LocalBusiness aparece en el `<head>` del HTML estático de la homepage en `dist/index.html`.

---

## 🟠 ALTO — Sesión siguiente

### 3. Agregar Twitter Card y og:url a ComunaPage y ServicioPage
ComunaPage ya tiene og:image corregida pero le falta:
```jsx
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://www.imprentasalvadordalichile.cl/images/print_shop_team.webp" />
<meta property="og:url" content={`https://www.imprentasalvadordalichile.cl/imprenta/${comuna.slug}`} />
```
ServicioPage tiene `og:image` dinámico apuntando a `servicio.heroImg` (correcto), pero le falta Twitter Card y og:url.

---

### 4. Agregar BlogPosting schema a los 3 posts
En `src/pages/BlogPost.jsx` ya existe un bloque `Article` schema. Verificar que incluye `datePublished`, `author`, y `headline` correctamente. Si le falta alguno, completarlo.

---

### 5. Agregar Service schema a /servicios/stickers (y demás páginas de servicio)
En `ServicioPage.jsx` ya existen BreadcrumbList y FAQPage. Agregar un bloque adicional:
```json
{
  "@type": "Service",
  "@id": "https://www.imprentasalvadordalichile.cl/servicios/{slug}#service",
  "name": "{servicio.h1}",
  "provider": {"@id": "https://www.imprentasalvadordalichile.cl/#local-business"},
  "areaServed": {"@type": "State", "name": "Región Metropolitana de Santiago"}
}
```

---

### 6. Agregar BreadcrumbList + AboutPage schema a /quienes-somos
Actualmente `/quienes-somos` no tiene ningún schema. Agregar en `QuienesSomos.jsx`.

---

### 7. Embeber Google Maps iframe en /contacto (ya está en MapSection — verificar)
El `MapSection.jsx` ya tiene el iframe de Google Maps embebido correctamente. Solo confirmar que `/contacto` usa `MapSection` al final de la página (ya lo hace según el código). Este ítem puede marcarse como resuelto si se confirma que Contacto.jsx incluye `<MapSection />`.

---

## 🟡 MEDIO — Este trimestre

### 8. Precio ancla en páginas de servicio
Agregar "desde $X CLP" en el hero de cada ServicioPage. El precio de tarjetas ya existe en TiendaCategory (`metaDesc: 'Desde $5.000'`). Extender a ServicioPage renderizando el precio dentro del componente de forma visible, justo antes del CTA de WhatsApp.

Datos de referencia:
- Tarjetas: desde $5.000
- Volantes: 1.000 unidades desde $20.000
- Stickers: cotizar (rango variable — agregar "Cotiza y recibe precio en minutos")
- Pendones: cotizar

---

### 9. Expandir /quienes-somos
El archivo `QuienesSomos.jsx` tiene ~180 palabras de body. Expandir a 500+ palabras agregando:
- Claim "más de 10 años" en el body (no solo en la meta)
- Descripción del proceso de producción
- Tipos de clientes atendidos
- Política de calidad (la garantía ya mencionada en Homepage)

---

### 10. Reducir CTAs de WhatsApp en ServicioPage de 6 a 2
En `ServicioPage.jsx` hay CTAs de WhatsApp en: hero split, final del body content, why us strip, CTA section final, y MapSection. Dejar solo el del hero split y el CTA section final.

---

### 11. Crear /politica-de-privacidad
Nueva página sencilla en `src/pages/PrivacidadPage.jsx` + ruta en `App.jsx` + ruta en `prerender.mjs`. Contenido: política básica de manejo de datos de contacto vía WhatsApp y formularios.

---

### 12. Personalizar secciones de servicio en páginas de ubicación por perfil de barrio
En `ComunaPage.jsx`, el `serviceLinks` array es estático e idéntico para todas las comunas. Agregar un campo `featuredService` o `serviceHighlight` en `comunas.js` para cada una y renderizarlo destacado en la sección de servicios.

Ejemplo en `comunas.js`:
- Las Condes: `serviceHighlight: 'tarjetas-presentacion'` (corporativos)
- Providencia: `serviceHighlight: 'volantes'` (restaurantes y eventos)
- Maipú: `serviceHighlight: 'stickers'` (emprendedores de alimentos)

---

## 🟢 BAJO — Backlog

### 13. Blog: aumentar cadencia a 1 post/mes
Temas de alta intención:
- "¿Cuánto cuestan las tarjetas de presentación en Santiago?"
- "Diferencia entre impresión offset y digital"
- "Cómo preparar un archivo para imprenta (guía para emprendedores chilenos)"

### 14. Interlinear blog posts con páginas de ubicación y servicio
En `blogPosts.js`, agregar links internos al final de cada post hacia la página de servicio relevante y 2–3 páginas de ubicación.

### 15. Listings en directorios de alta prioridad (acción externa, no código)
Orden: Facebook Business → Waze Place → Bing Places → Foursquare → Páginas Amarillas Chile → Cylex

NAP canónico: `Imprenta Salvador Dali | Mayecura 1177, Las Condes | +56 9 6412 3098 | imprentasalvadordalichile.cl`

### 16. Contactar ASIMPRES y Cámara de Comercio de Santiago (acción externa)
Links de asociaciones = mayor retorno que 10 directorios genéricos.

### 17. Secuencia de reseñas post-entrega (acción operacional)
Template WhatsApp post-entrega: "Gracias por tu pedido. Si quedaste conforme, nos ayudaría mucho una reseña en Google: https://g.page/r/Ce61Wvh0x_sYEBM/review — toma menos de 1 minuto."

---

## Resumen de estado

| Categoría | Estado | Próximo paso |
|---|---|---|
| Schema LocalBusiness | ✅ Implementado | Verificar prerenderizado |
| OG tags | ✅ Implementado (homepage + tienda + comunas) | Completar ServicioPage |
| llms.txt | ✅ Creado | Deploy |
| Útiles escolares | ✅ Eliminado completamente | — |
| Bug title tags ubicación | 🔴 Pendiente diagnóstico | Próxima sesión |
| Service schema | 🟠 Pendiente | Sesión siguiente |
| QuienesSomos schema | 🟠 Pendiente | Sesión siguiente |
| Precios en servicio | 🟡 Pendiente | Este trimestre |
| Blog cadencia | 🟢 Backlog | Cuando haya tiempo |
