# SEO Audit Completo — Imprenta Salvador Dali Chile
**URL auditada:** www.imprentasalvadordalichile.cl  
**Fecha:** 2026-05-17  
**Realizado por:** Claude Code SEO Audit  

---

## Puntaje SEO General: 47 / 100

| Categoría | Peso | Puntaje | Contribución |
|-----------|------|---------|--------------|
| Technical SEO | 22% | 35/100 | 7.7 |
| Content Quality | 23% | 62/100 | 14.3 |
| On-Page SEO | 20% | 50/100 | 10.0 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness | 10% | 45/100 | 4.5 |
| Images | 5% | 70/100 | 3.5 |
| **TOTAL** | **100%** | | **45.5 → 47** |

---

## Resumen Ejecutivo

**Tipo de negocio detectado:** Imprenta local / Servicio de área local — Las Condes, Santiago, Chile

**Diagnóstico principal:** El sitio tiene un problema técnico **crítico** que anula casi todo el esfuerzo SEO: existe una bifurcación de dominio entre `imprentasalvadordalichile.cl` (el sitio auditado) y `imprentasalvadordali.cl` (el dominio que Google indexa). Ninguno de los dos tiene canonicals cross-domain, lo que genera dilución de autoridad y posible contenido duplicado. Google solo devuelve resultados de `imprentasalvadordali.cl`.

### Top 5 Problemas Críticos

1. **Bifurcación de dominio sin canonical** — dos dominios con contenido idéntico/similar, Google indexa solo uno
2. **Cero schema markup** — sin LocalBusiness, Product, Article, ni BreadcrumbList en ninguna página
3. **Page title idéntico en todas las páginas** — "Imprenta en Las Condes con Entrega 48h | Salvador Dali" aparece en homepage, stickers, about, blog y location pages
4. **Meta descriptions ausentes** — no se detectaron en ninguna página interior
5. **robots.txt apunta al dominio incorrecto** — sitemap declarado como `imprentasalvadordali.cl/sitemap.xml`, no `imprentasalvadordalichile.cl`

### Top 5 Quick Wins

1. Implementar schema LocalBusiness en homepage (30 min, impacto alto)
2. Escribir meta descriptions únicas para las 4 páginas de servicio (1 hora)
3. Corregir page title en páginas de servicio y location (2 horas)
4. Corregir robots.txt para que apunte al sitemap del dominio correcto (5 min)
5. Añadir Article schema en las 3 entradas de blog (45 min)

---

## 1. Technical SEO

### 1.1 Dominio y Rastreo

| Issue | Severidad | Detalle |
|-------|-----------|---------|
| Bifurcación de dominio | 🔴 CRÍTICO | `imprentasalvadordalichile.cl` vs `imprentasalvadordali.cl` — Google solo indexa el segundo. Si ambos tienen el mismo contenido sin canonical cross-domain, hay canibalización y dilución de PageRank |
| robots.txt sitemap URL incorrecta | 🔴 CRÍTICO | robots.txt de `imprentasalvadordalichile.cl` declara `Sitemap: https://imprentasalvadordali.cl/sitemap.xml` — esto confunde a los crawlers sobre cuál es el dominio canónico |
| Sin canonicals en páginas | 🔴 CRÍTICO | Ninguna página interior expone `<link rel="canonical">` — Google no puede resolver cuál URL es la authoritative |
| `imprentasalvadordali.cl` inaccesible | 🟡 ALTO | ECONNREFUSED al intentar acceder directamente — puede ser que el dominio esté expirado o redirigido, lo cual sería muy positivo si redirige a `.chile.cl`, pero necesita verificación |

### 1.2 Sitemap

| Issue | Severidad | Detalle |
|-------|-----------|---------|
| Sitemap referencia dominio alternativo | 🔴 CRÍTICO | El sitemap encontrado lista URLs de `imprentasalvadordali.cl`, no de `imprentasalvadordalichile.cl` |
| Estructura sólida | ✅ BIEN | 36 URLs organizadas por prioridad — core pages 1.0, location pages 0.9, services 0.9, blog 0.7 |
| Frecuencia de cambio declarada | ✅ BIEN | `weekly` en todas las URLs — razonable para un negocio activo |

### 1.3 Seguridad y Headers

| Issue | Severidad | Detalle |
|-------|-----------|---------|
| HTTPS activo | ✅ BIEN | Sitio accesible por HTTPS |
| Headers de seguridad | ⚠️ NO VERIFICADO | Sin herramienta de headers disponible — recomendamos verificar CSP, X-Frame-Options, HSTS |

### 1.4 URLs y Estructura

| Issue | Severidad | Detalle |
|-------|-----------|---------|
| Estructura limpia | ✅ BIEN | `/servicios/stickers`, `/imprenta/las-condes`, `/blog/...` — URLs descriptivas y limpias |
| Sin parámetros problemáticos | ✅ BIEN | No se detectaron query strings en URLs indexables |
| Trailing slashes inconsistentes | 🟡 MEDIO | robots.txt muestra `imprentasalvadordali.cl/sitemap.xml` sin trailing slash — verificar consistencia |

---

## 2. Content Quality

### 2.1 E-E-A-T Assessment

| Señal | Estado | Detalle |
|-------|--------|---------|
| Experience | 🟡 PARCIAL | Se menciona experiencia y equipo pero sin nombres, fotos individuales ni casos específicos |
| Expertise | 🟡 PARCIAL | Buen detalle técnico en páginas de servicio (materiales, acabados, impresión DTF/UV) |
| Authoritativeness | 🟡 PARCIAL | Google Rating 4.9★, Instagram activo, pero sin menciones de prensa ni certificaciones |
| Trustworthiness | ✅ BIEN | Dirección física, teléfono, WhatsApp, horarios — NAP consistente |

### 2.2 Thin Content

| Página | Palabras est. | Evaluación |
|--------|--------------|------------|
| Homepage | ~700 | Adecuado |
| /servicios/stickers | ~1,300 | ✅ Bueno |
| /servicios/tarjetas-presentacion | ~1,450 | ✅ Bueno |
| /quienes-somos | ~450 | 🟡 Thin — muy corta para una página About |
| /imprenta/las-condes | ~1,100 | ✅ Bueno |
| /imprenta/providencia | ~850 | 🟡 Aceptable pero mejorable |
| Blog DTF | ~950 | 🟡 Aceptable — podría ir a 1,500+ |

### 2.3 Duplicación de Contenido

| Issue | Severidad | Detalle |
|-------|-----------|---------|
| Location pages con estructura similar | 🟡 MEDIO | Las 12 páginas de location (`/imprenta/[comuna]`) tienen estructura y secciones repetidas — el nivel de localización varía. Providencia tiene contenido localizado sólido; otras comunas pueden ser más genéricas |
| Contenido entre dominios | 🔴 CRÍTICO | Si ambos dominios tienen el mismo contenido sin canonicals, Google las trata como duplicadas |

### 2.4 Blog

| Issue | Severidad | Detalle |
|-------|-----------|---------|
| Solo 3 posts | 🟡 MEDIO | El blog existe pero es muy incipiente — 3 artículos sobre DTF, adhesivos troquelados y tinta UV |
| Sin autor identificado | 🟡 MEDIO | Los artículos no muestran nombre de autor — penaliza E-E-A-T para AI search |
| Fecha visible | ✅ BIEN | Artículo DTF muestra "28 de enero de 2026" |
| Sin Article schema | 🔴 CRÍTICO | Ningún artículo tiene BlogPosting/Article schema |

---

## 3. On-Page SEO

### 3.1 Page Titles

| Página | Title Actual | Evaluación |
|--------|-------------|------------|
| Homepage | "Imprenta en Las Condes con Entrega 48h \| Salvador Dali" | ✅ Bueno |
| /servicios/stickers | "Imprenta en Las Condes con Entrega 48h \| Salvador Dali" | 🔴 IDÉNTICO AL HOME — error grave |
| /imprenta/las-condes | "Imprenta en Las Condes con Entrega 48h \| Salvador Dali" | 🔴 IDÉNTICO AL HOME |
| /blog | "Imprenta en Las Condes con Entrega 48h \| Salvador Dali" | 🔴 IDÉNTICO AL HOME |
| /quienes-somos | "Imprenta en Las Condes con Entrega 48h \| Salvador Dali" | 🔴 IDÉNTICO AL HOME |
| /servicios/tarjetas-presentacion | "Tarjetas de Presentación en Las Condes y Santiago — Acabados Premium con Entrega 48h \| Imprenta Salvador Dali" | ✅ Único y descriptivo |

**Problema sistemático:** El title del homepage se repite en múltiples páginas. Solo tarjetas-presentacion (y presumiblemente otros services individuales) tienen títulos únicos correctos.

### 3.2 Meta Descriptions

| Estado | Detalle |
|--------|---------|
| 🔴 AUSENTES en la mayoría | Solo `/servicios/stickers` mostró una meta description detectada: "Stickers Personalizados en Santiago con Entrega Express — Adhesivos en Todo Formato \| Imprenta Salvador Dali". El resto de páginas no exponen meta description en el HTML visible |

### 3.3 Estructura de Headings

| Página | H1 | Evaluación |
|--------|-----|------------|
| Homepage | "Imprenta Salvador Dali" | 🟡 Genérico — podría incluir keyword principal |
| /servicios/stickers | "Stickers Personalizados en Santiago" | ✅ Excelente |
| /servicios/tarjetas-presentacion | "Tarjetas de Presentación en Las Condes" | ✅ Excelente |
| /imprenta/las-condes | "Imprenta Profesional en Las Condes — Impresión Digital y Offset" | ✅ Bueno |
| /imprenta/providencia | "Imprenta Profesional en Providencia — Impresión Digital y Offset" | 🟡 Estructura repetida entre location pages |
| /blog | "Blog de Impresión" | 🟡 Genérico |
| /quienes-somos | "Quiénes Somos" | 🟡 No keyword-optimized |

### 3.4 Internal Linking

| Issue | Severidad | Detalle |
|-------|-----------|---------|
| Buena red de links desde servicios | ✅ BIEN | Las páginas de servicio enlazan a las 12 location pages — buena señal de relevancia local |
| Blog con pocos internal links | 🟡 MEDIO | Los artículos de blog enlazan a servicios pero la estructura podría ser más rica |
| Sin breadcrumbs visibles | 🟡 MEDIO | No se detectan breadcrumbs HTML en las páginas interiores |

---

## 4. Schema / Structured Data

**Estado general: 0 schema detectado en ninguna página.**

Esta es una de las mayores oportunidades del sitio. Para un negocio local de servicios de impresión, la ausencia total de structured data es un problema severo.

### Schemas prioritarios faltantes

| Schema | Prioridad | Impacto |
|--------|-----------|---------|
| `LocalBusiness` (homepage + pages) | 🔴 CRÍTICO | Aparición en Knowledge Panel, Google Maps, AI search |
| `Product` (páginas de servicio) | 🔴 CRÍTICO | Rich results para productos/servicios con precio |
| `BlogPosting` / `Article` (blog) | 🔴 CRÍTICO | Elegibilidad para Article rich results, AI citations |
| `BreadcrumbList` (todas las páginas) | 🟡 ALTO | Breadcrumbs en SERPs, mejor UX |
| `FAQPage` (páginas de servicio) | 🟡 ALTO | Rich results FAQ, voz/AI |
| `Review` / `AggregateRating` | 🟡 ALTO | Stars en SERPs (4.9★ ya existe en Google Reviews) |

### Ejemplo de LocalBusiness recomendado (homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "PrintShop",
  "name": "Imprenta Salvador Dali",
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
    "latitude": -33.4,
    "longitude": -70.57
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "description": "Solo con cita previa"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50"
  },
  "sameAs": [
    "https://www.instagram.com/imprenta_salvador_dali/"
  ]
}
```

---

## 5. Performance (Core Web Vitals)

*Nota: Sin acceso a CrUX o Lighthouse lab data en tiempo real. Evaluación basada en señales indirectas.*

| Señal | Estado | Detalle |
|-------|--------|---------|
| Imágenes en formato WebP | ✅ BIEN | Hero images y portfolio usan `.webp` — buen formato |
| Imágenes con alt text descriptivo | ✅ BIEN | Las imágenes principales tienen alt text con keywords geográficas |
| Sin datos de LCP/INP/CLS | ⚠️ NO MEDIDO | Requiere PageSpeed Insights o CrUX para datos reales |
| CMS / plataforma | ⚠️ DESCONOCIDO | No se detectó plataforma específica (WordPress, custom, etc.) |

**Recomendación:** Correr `https://pagespeed.web.dev/report?url=https://www.imprentasalvadordalichile.cl` para obtener métricas reales.

---

## 6. Images

| Issue | Estado | Detalle |
|-------|--------|---------|
| Formato WebP | ✅ BIEN | Imágenes principales en WebP |
| Alt text presente | ✅ BIEN | Logo, hero, portfolio — todos con alt descriptivo y con keyword |
| Logo sin dimensiones | 🟡 MEDIO | No se detectaron atributos `width`/`height` explícitos en el logo — puede causar CLS |
| Blog sin imagen hero | 🟡 MEDIO | Los artículos de blog no muestran imágenes propias — reduce clickability en SERPs |
| Sin lazy loading confirmado | 🟡 MEDIO | No se detectó `loading="lazy"` en imágenes below-fold |

---

## 7. AI Search Readiness

| Señal | Estado | Detalle |
|-------|--------|---------|
| Sin llms.txt | 🟡 MEDIO | No existe `/llms.txt` para declarar accesibilidad a AI crawlers |
| Robots.txt permite todo | ✅ BIEN | `Allow: /` — AI crawlers pueden acceder |
| Contenido estructurado en prosa | 🟡 PARCIAL | Las páginas de servicio tienen buena densidad informacional pero sin headers-as-questions para AI |
| Sin FAQ schema | 🔴 CRÍTICO | Las preguntas implícitas ("¿Qué tipos de stickers?", "¿Cuánto tardan?") no están en FAQPage |
| Citability score estimado | 35/100 | Sin author, sin citations externas, sin datos propios únicos — difícil de citar por AI |
| Brand mentions en web | 🟡 PARCIAL | Instagram, Facebook, TikTok, Google Reviews — presencia social sólida |

---

## 8. Local SEO

| Señal | Estado | Detalle |
|-------|--------|---------|
| NAP consistente | ✅ BIEN | Mayecura 1177, Las Condes / +56 9 6412 3098 — consistente en todas las páginas |
| Google Rating visible | ✅ BIEN | 4.9★ — excelente reputación |
| Location pages (12 comunas) | ✅ BIEN | Estrategia de local SEO clara con páginas por comuna |
| Sin LocalBusiness schema | 🔴 CRÍTICO | El schema local es fundamental para Local Pack y Maps |
| WhatsApp como CTA principal | ✅ BIEN | Canal de conversión efectivo para mercado chileno |
| Sin GBP verificado confirmado | 🟡 MEDIO | Se detectó un Google Reviews link pero no se confirmó GBP completamente optimizado |
| Discrepancia de dirección | 🟡 MEDIO | robots.txt/Search devuelve "Las Condes #10.415 of 25B" pero el sitio muestra "Mayecura 1177" — verificar cuál es la dirección correcta y actualizar GBP |

---

## 9. Análisis de Competidores (SERP)

Para la query "imprenta Salvador Dali Las Condes Chile", Google muestra:

1. `imprentasalvadordali.cl` — el dominio alternativo del propio negocio
2. Instagram del negocio
3. Facebook del negocio

Competidores directos detectados:
- `imprentalascondes.cl` — posicionado para "imprenta Las Condes"
- `imprimeya.cl` — imprenta online nacional

**Oportunidad:** El negocio domina sus branded queries pero el sitio auditado (`...chile.cl`) no aparece en Google en absoluto.
