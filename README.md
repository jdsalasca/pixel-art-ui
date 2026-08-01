# pixel-art-ui

Componentes React + TypeScript tipados para herramientas de creación de pixel art.

## Desarrollo

```text
npm install
npm test
npm run typecheck
npm run build
```

El paquete es presentacional: no conoce MCP, Aseprite ni el sistema de archivos. `asset-studio` consume sus componentes y mantiene la lógica en su propio gateway.

La publicación debe ejecutarse tras `npm whoami`, `npm test`, `npm run build` y `npm pack --dry-run`. El workflow de GitHub valida automáticamente estas puertas.
