# Pendiente antes de publicar y solicitar el alta en Amazon Afiliados

## Store ID / tag de afiliado: PLACEHOLDER, hay que sustituirlo

- `SITE.amazonTag` en `_build/nav.js` está fijado a `bebelisto0a-21`, que es
  un **valor de relleno**: todavía no se ha creado el Store ID real de este
  sitio en el panel de Amazon Afiliados España.
- En cuanto exista el Store ID real, sustituir ese valor en `_build/nav.js`
  y ejecutar `node build.js` para regenerar todos los enlaces de producto
  (`https://www.amazon.es/dp/<ASIN>?tag=<SITE.amazonTag>`) con el tag
  correcto. Con el tag provisional puesto, cualquier clic de prueba no
  atribuirá comisión a ninguna cuenta real.

## Datos que faltan (obligatorios para legal/privacidad)

- **NIF/NIE y nombre o razón social** del titular: hoy son placeholders
  `[PENDIENTE: ...]` en `_build/nav.js` (`SITE.legal`). Se usan en
  [`legal/aviso-legal.html`](legal/aviso-legal.html) y
  [`legal/politica-privacidad.html`](legal/politica-privacidad.html).
- **Domicilio fiscal completo**: mismo sitio.
- **Correo real**: `hola@bebelisto.es` es un placeholder — hoy ese
  dominio no existe. Cambiar `SITE.email` en `_build/nav.js` por un correo
  que sí puedas leer (puede ser un Gmail mientras no haya dominio propio).

Después de rellenar `_build/nav.js`, ejecutar `node build.js` para
regenerar las páginas con los datos correctos.

## Dominio

No hay dominio comprado. `SITE.domain` en `_build/nav.js` apunta a un
subdominio provisional de Vercel (`bebelisto.vercel.app`) — todavía sin
desplegar. Para la solicitud de afiliados sirve un subdominio de Vercel,
pero un dominio propio (`.es` o `.com`) da más credibilidad en la revisión
manual de Amazon.

## Cuenta de Amazon Afiliados

Esta web puede usar la MISMA cuenta de Afiliados que los otros sitios de
este directorio (Amazon permite hasta 50 sitios por cuenta), pero necesita
su propio Store ID real para medir resultados por separado y para que los
enlaces de producto funcionen de verdad:

1. **Pendiente**: crear el Store ID real para BebeListo en
   `afiliados.amazon.es` y sustituir el placeholder `bebelisto0a-21` en
   `SITE.amazonTag` (`_build/nav.js`).
2. **Pendiente**: publicar este sitio en Vercel (nuevo proyecto, distinto
   de los otros) y añadir la URL publicada en `afiliados.amazon.es` →
   "Tus páginas web o apps".
3. Las 3 ventas cualificadas en 180 días son **por cuenta**, no por sitio:
   si ya corre ese plazo por otros sitios de la misma cuenta, esta web solo
   suma tráfico y ventas potenciales a la misma cuenta.

## Contenido para llegar y mantener el mínimo de Amazon

Hay 143 páginas generadas (10 guías + 110 fichas de producto individuales +
10 comparativas + 5 artículos de blog + inicio + guías-índice +
productos-índice + blog-índice + 3 legales + 404 sin indexar), muy por
encima del mínimo de 10 páginas de contenido real que exige el programa.

Ideas ya identificadas y no escritas todavía:
- Guía de biberones y tetinas: materiales, formas y ritmo de flujo.
- Guía de sillas de paseo tipo "buggy" ultraligero para viajar en avión.
- Artículo: cómo montar la maleta del hospital (qué llevar el día del parto).

## Enlaces de afiliado (mínimo viable, sin PA-API)

Cada guía tiene una sección de productos con 10-12 productos reales por
guía (`products` en `_build/data.js`, 110 productos en total), enlazados
con `https://www.amazon.es/dp/<ASIN>?tag=<SITE.amazonTag>` (con el tag
placeholder mencionado arriba). Todas las páginas del sitio muestran además
un bloque "Lo más recomendado de BebeListo" con un producto por categoría.

Los precios, valoraciones e imágenes mostrados son una foto fija tomada al
añadir cada producto (verificados en Amazon.es en septiembre de 2026: ASIN,
título, precio, valoración e imagen reales, extraídos directamente de los
resultados de búsqueda), no datos en vivo — hay que revisarlos de vez en
cuando a mano, sobre todo en categorías con mucha rotación de modelos
(vigilabebés, carritos). El campo `note` de cada producto se generó de
forma semiautomática a partir del precio relativo dentro de la categoría y
de palabras clave del título (Isofix, 360°, WiFi, evolutivo, etc.): conviene
revisar y personalizar esas notas con más detalle cuando haya tiempo, sobre
todo en los productos que vayan a destacarse en `FEATURED`. Siguiente paso
cuando haya PA-API: sustituir esos datos estáticos por una consulta
automática en tiempo de build.

## Otras cosas menores

- `SITE.social` (Instagram/Pinterest) está vacío.
- No hay fotografías propias: el sitio usa solo iconos SVG a propósito,
  salvo las fotos de producto que vienen directamente de Amazon.
- Analítica: no hay ningún script de analítica instalado todavía.
- No tiene páginas "Sobre mí" ni "Contacto" (misma decisión que en los
  sitios hermanos): el correo de contacto vive solo en las páginas legales.
- El logo de la cabecera/pie sigue usando el icono SVG "shield" heredado de
  la plantilla base (HogarSeguro): no rompe nada porque es solo un icono
  decorativo, pero convendría cambiarlo por un icono más propio del nicho
  de bebé (por ejemplo, un biberón o una estrella) en `_build/lib.js`
  (función `icon`) y `_build/layout.js` (donde se usa `icon("shield")`).
- Nicho no sensible: puericultura y artículos de bebé no están en la lista
  de categorías restringidas de Amazon Afiliados España, pero conviene
  revisar las políticas del programa antes de publicar por si cambian.
