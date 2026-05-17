# Plan de Acción SEO — Imprenta Salvador Dali Chile
**Generado:** 2026-05-17  
**Puntaje actual:** 47/100 | **Puntaje potencial (90 días):** 72/100

---

## CRÍTICO — Resolver esta semana

### 1. Resolver la bifurcación de dominio (Impacto: +15 puntos)
**Problema:** `imprentasalvadordalichile.cl` y `imprentasalvadordali.cl` coexisten sin canonicals. Google solo indexa el segundo.

**Decisión a tomar primero:**
- ¿Cuál es el dominio principal del negocio?
- Opción A: `imprentasalvadordali.cl` es el canónico → redirigir `.chile.cl` con 301 permanente hacia `.cl`
- Opción B: `imprentasalvadordalichile.cl` es el canónico → redirigir `.cl` hacia `.chile.cl`

**Acción inmediata:**
1. Verificar en el panel de hosting cuál dominio está configurado como primario
2. Configurar redirect 301 del dominio secundario al primario a nivel de servidor (Nginx/Apache/.htaccess)
3. Agregar `<link rel="canonical" href="https://www.dominio-principal.cl/[ruta]">` en el `<head>` de cada página
4. Actualizar robots.txt para que el `Sitemap:` apunte al dominio correcto
5. Registrar el dominio principal en Google Search Console

**Esfuerzo:** 2-4 horas técnicas | **Impacto:** Muy alto — actualmente el sitio es invisible en Google

---

### 2. Corregir page titles duplicados (Impacto: +8 puntos)
**Problema:** "Imprenta en Las Condes con Entrega 48h | Salvador Dali" aparece en homepage, stickers, about, blog y location pages.

**Títulos recomendados:**
| Página | Title propuesto |
|--------|----------------|
| Homepage | Imprenta en Las Condes con Entrega 48h \| Salvador Dali *(mantener)* |
| /servicios/stickers | Stickers Personalizados en Santiago — Entrega 48h \| Salvador Dali |
| /servicios/volantes | Volantes y Flyers en Santiago con Entrega Express \| Salvador Dali |
| /servicios/pendones | Pendones Publicitarios en Santiago \| Imprenta Salvador Dali |
| /servicios/tarjetas-presentacion | Tarjetas de Presentación Las Condes — Acabados Premium \| Salvador Dali *(ya ok)* |
| /quienes-somos | Quiénes Somos \| Imprenta Salvador Dali Las Condes |
| /blog | Blog de Impresión — Tips y Guías \| Imprenta Salvador Dali |
| /portafolio | Portafolio de Trabajos — Stickers, Volantes, Tarjetas \| Salvador Dali |
| /contacto | Contacto y Cotización — Imprenta Salvador Dali Las Condes |

**Esfuerzo:** 1-2 horas | **Impacto:** Alto — Google no puede diferenciar páginas sin títulos únicos

---

### 3. Implementar schema LocalBusiness (Impacto: +10 puntos)
**Agregar en el `<head>` de la homepage:**

```html
<script type="application/ld+json">
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50"
  },
  "sameAs": [
    "https://www.instagram.com/imprenta_salvador_dali/"
  ],
  "priceRange": "$$",
  "currenciesAccepted": "CLP",
  "paymentAccepted": "Cash, Credit Card, Transfer"
}
</script>
```

**Esfuerzo:** 30 minutos | **Impacto:** Alto — activa Knowledge Panel y Local Pack

---

### 4. Agregar meta descriptions en todas las páginas (Impacto: +5 puntos)

**Meta descriptions propuestas:**

| Página | Meta Description |
|--------|-----------------|
| Homepage | Imprenta express en Las Condes con entrega en 48 horas. Stickers, tarjetas, volantes y pendones con acabados premium. Cotiza por WhatsApp. |
| /servicios/stickers | Stickers personalizados en Santiago con entrega express. Todos los formatos y materiales: vinilo, transparente, kraft. Desde 500 unidades. |
| /servicios/tarjetas-presentacion | Tarjetas de presentación con acabados premium en Las Condes. Laminado mate, UV selectivo, soft touch. Entrega en 48h. Pide cotización. |
| /servicios/volantes | Volantes y flyers en Santiago desde $20.000 el millar. Entrega express 48h a toda la Región Metropolitana. Cotiza ahora por WhatsApp. |
| /servicios/pendones | Pendones publicitarios en Santiago con impresión de alta definición. Medidas personalizadas, entrega en 48h. Imprenta Salvador Dali. |
| /quienes-somos | Conoce a Imprenta Salvador Dali, tu imprenta de confianza en Las Condes. Impresión láser, offset y UV con 15 años de experiencia. |
| /imprenta/las-condes | Imprenta profesional en Las Condes con retiro en el local y despacho express. Stickers, tarjetas, flyers y más. Agenda tu visita. |

**Esfuerzo:** 1 hora | **Impacto:** Medio-alto — mejora CTR en SERPs directamente

---

## ALTO — Resolver en los próximos 7 días

### 5. Agregar Article/BlogPosting schema en cada post del blog

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Qué es la impresión DTF Textil y para qué sirve",
  "datePublished": "2026-01-28",
  "dateModified": "2026-01-28",
  "author": {
    "@type": "Organization",
    "name": "Imprenta Salvador Dali"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Imprenta Salvador Dali",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.imprentasalvadordalichile.cl/images/cropped-icono-66.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.imprentasalvadordalichile.cl/blog/que-es-impresion-dtf-textil"
  }
}
</script>
```

**Esfuerzo:** 45 minutos (x3 artículos) | **Impacto:** Alto para AI citation readiness

---

### 6. Agregar FAQPage schema en páginas de servicio

Cada página de servicio (stickers, tarjetas, volantes, pendones) ya contiene preguntas implícitas en sus H2s. Convertirlas a FAQPage schema activa rich results en Google y mejora visibilidad en AI Overviews.

**Ejemplo para /servicios/stickers:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué tipos de stickers fabrican?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fabricamos stickers en vinilo, transparente, kraft y papel couché, en todos los formatos: circulares, cuadrados, rectangulares y troquelados a medida."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto demoran en entregar los stickers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El plazo de entrega estándar es de 48 horas hábiles desde aprobado el diseño."
      }
    }
  ]
}
```

**Esfuerzo:** 2 horas | **Impacto:** Alto — FAQ rich results son muy visibles en SERPs

---

### 7. Verificar y unificar la dirección física

**Discrepancia detectada:**
- Sitio web: `Mayecura 1177, 7570718 Las Condes`
- Google Search: `Las Condes #10.415 - of 25B`
- WhatsApp link usa número `+56964123098`

**Acción:** Unificar la dirección en:
1. Google Business Profile
2. Sitio web (footer, /contacto, schema)
3. Redes sociales (Instagram, Facebook, TikTok)

**Esfuerzo:** 30 minutos | **Impacto:** Alto para Local SEO — NAP inconsistente daña rankings locales

---

### 8. Agregar BreadcrumbList schema + HTML visible

**Ejemplo para /servicios/stickers:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.imprentasalvadordalichile.cl"},
    {"@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://www.imprentasalvadordalichile.cl/servicios"},
    {"@type": "ListItem", "position": 3, "name": "Stickers", "item": "https://www.imprentasalvadordalichile.cl/servicios/stickers"}
  ]
}
```

**Esfuerzo:** 1 hora | **Impacto:** Medio — mejora presentación en SERPs y UX

---

## MEDIO — Resolver en el próximo mes

### 9. Reforzar página /quienes-somos (E-E-A-T)

La página tiene solo ~450 palabras y ningún nombre de persona. Para mejorar E-E-A-T:
- Agregar nombres y fotos del equipo
- Mencionar años de experiencia con hitos concretos
- Agregar certificaciones de equipos o proveedores
- Incluir testimonios con nombre + empresa
- Meta: llegar a 800-1,000 palabras con contenido genuino

**Esfuerzo:** 3-4 horas | **Impacto:** Medio-alto para E-E-A-T y confianza

---

### 10. Plan de contenido para el blog (al menos 1 post/mes)

El blog tiene solo 3 artículos. Ideas con volumen de búsqueda local:
- "Cómo hacer stickers para tu negocio en Chile"
- "Impresión de volantes en Las Condes: guía de precios 2026"
- "Qué es el acabado soft touch y cuándo usarlo en tarjetas"
- "Cómo preparar un archivo PDF para imprenta correctamente"
- "Diferencia entre impresión digital y offset"

**Esfuerzo:** 2-3 horas por artículo | **Impacto:** Alto a largo plazo — tráfico orgánico informacional

---

### 11. Agregar autor a los artículos del blog

Añadir un autor (puede ser el fundador o un perfil de empresa) con:
- Nombre
- Foto
- Bio corta
- `author` schema

**Esfuerzo:** 1 hora | **Impacto:** Medio — E-E-A-T y AI citation readiness

---

### 12. Crear /llms.txt para AI crawlers

Archivo simple en la raíz que describe el sitio para AI:

```text
# Imprenta Salvador Dali

> Imprenta profesional en Las Condes, Santiago de Chile. Especialistas en stickers personalizados, tarjetas de presentación, volantes y pendones con entrega en 48 horas.

## Services
- Stickers personalizados: /servicios/stickers
- Tarjetas de presentación: /servicios/tarjetas-presentacion
- Volantes y flyers: /servicios/volantes
- Pendones: /servicios/pendones

## Coverage
Entrega express en toda la Región Metropolitana.

## Contact
WhatsApp: +56 9 6412 3098
```

**Esfuerzo:** 15 minutos | **Impacto:** Medio para AI search readiness

---

### 13. Optimizar imágenes below-fold con lazy loading

Agregar `loading="lazy"` a imágenes que no son above-the-fold y verificar que el logo tenga `width` y `height` explícitos para evitar CLS.

**Esfuerzo:** 30 minutos (técnico) | **Impacto:** Medio para Core Web Vitals

---

## BAJO — Backlog

### 14. Agregar Open Graph y Twitter Card tags
Mejora la apariencia al compartir en redes sociales. Incluir `og:title`, `og:description`, `og:image` en todas las páginas.

### 15. Implementar hreflang si se planea versión en inglés
No es prioridad hoy, pero si el negocio atiende a extranjeros en Las Condes (hay comunidad expat alta), considerar versión en inglés.

### 16. Verificar velocidad de carga con PageSpeed Insights
Correr `https://pagespeed.web.dev/` para obtener CWV reales (LCP, INP, CLS) y actuar sobre los puntos rojos.

### 17. Aumentar reseñas en Google Business Profile
4.9★ es excelente. Mantener el volumen pidiendo reseñas a clientes satisfechos — el volumen importa además del puntaje.

---

## Resumen de impacto estimado

| Acción | Esfuerzo | Impacto SEO | Prioridad |
|--------|----------|-------------|-----------|
| Resolver bifurcación de dominio | 4h | +15 pts | 🔴 CRÍTICO |
| LocalBusiness schema | 30 min | +10 pts | 🔴 CRÍTICO |
| Corregir page titles | 2h | +8 pts | 🔴 CRÍTICO |
| Meta descriptions | 1h | +5 pts | 🔴 CRÍTICO |
| Article/Blog schema | 45 min | +4 pts | 🟡 ALTO |
| FAQPage schema | 2h | +5 pts | 🟡 ALTO |
| Unificar dirección/NAP | 30 min | +3 pts | 🟡 ALTO |
| BreadcrumbList | 1h | +2 pts | 🟡 ALTO |
| Mejorar /quienes-somos | 4h | +3 pts | 🟠 MEDIO |
| Blog (1 post/mes) | 3h/mes | +5 pts (90d) | 🟠 MEDIO |
| llms.txt | 15 min | +1 pt | 🟠 MEDIO |
| Lazy loading + CLS fix | 30 min | +2 pts | 🟠 MEDIO |
