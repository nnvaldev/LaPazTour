# La Paz Tour

Web app MVP: descubre La Paz con rutas, mapa interactivo, filtro de accesibilidad y comercios locales.

## Cómo correr

```bash
npm install
npm run dev
```

Abre la URL que muestre Astro (por defecto `http://localhost:4321`).

## Funcionalidades (Parte 1)

- Mapa interactivo centrado en La Paz (Leaflet / OpenStreetMap — sin API key)
- 15 marcadores con popup (nombre, descripción, accesibilidad)
- Filtro “Solo lugares accesibles”
- 5 rutas turísticas
- Directorio de comercios
- Tabla de aliados
- Reproductor de audio guía

## Audio e imágenes

Coloca MP3 en `public/audio/` (`killi.mp3`, `plaza.mp3`). Las fotos usan placeholders de picsum; puedes reemplazarlas en `src/data/data.js`.

## Build / deploy

```bash
npm run build
```

Sube la carpeta `dist/` a Netlify o GitHub Pages.
