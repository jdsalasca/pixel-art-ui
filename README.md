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

La publicación debe ejecutarse tras `npm whoami`, `npm test`, `npm run build` y `npm pack --dry-run`. El workflow de GitHub valida automáticamente estas puertas. Para publicar desde GitHub, configura el secreto `NPM_TOKEN` del repositorio y ejecuta manualmente `pixel-ui-release` o crea un tag `v0.1.0`; el tag debe coincidir con `package.json`.
