# Arquitectura

`pixel-art-ui` es una librería UX, no un cliente MCP. Su frontera termina en componentes y tokens presentacionales.

```text
contracts/tokens → componentes pequeños → aplicación consumidora
```

No contiene persistencia, controladores HTTP ni nombres concretos de Aseprite. `asset-studio` decide cómo conectar los eventos de los componentes con sus casos de uso.

El lote actual añade `PixelSlider`, `PixelRadioGroup`, `PixelTabs`, `PixelToast`, `PixelKpi`, `PixelEmptyState`, `PixelConfirmDialog`, `PixelAssetCard`, `PixelCommandBar` y `PixelProgressSteps`. Todos son adapters presentacionales: exponen props TypeScript y semántica ARIA, pero no conocen MCP, Aseprite ni filesystem.

## Plan de implementación

### Fase 1 · Foundation — implementada

- cada componente vive en un módulo independiente;
- los tonos y props están tipados y se exportan desde un barrel estable;
- `PixelProgress` normaliza valores finitos y falla cerrado ante `NaN`/`Infinity`;
- `PixelQualityGate` expone estados `status`/`alert` y lista violaciones sin conocer el dominio;
- los estilos incluyen una política `prefers-reduced-motion`;
- build ESM, declaraciones TypeScript y `npm pack --dry-run` están automatizados.

### Fase 2 · Accesibilidad visual

- completar `prefers-reduced-motion` en futuras animaciones específicas;
- completar estados `:focus-visible`, disabled y error con contraste verificable;
- mantener nombres ARIA y roles semánticos en cada primitive;
- cubrir teclado y estados de error con pruebas de interacción.

### Fase 3 · Sistema reusable para Studio

- agregar primitives de comparación, frame strip, quality gate y recipe selector;
- mantenerlas presentacionales: reciben datos y callbacks, nunca conocen MCP ni filesystem;
- publicar tokens de color, spacing y motion como contratos versionables;
- probar la integración desde `asset-studio` sin acoplar la librería a su dominio.

### Fase 4 · Release

- validar tarball limpio en una instalación externa;
- generar changelog y etiquetas semver;
- publicar mediante GitHub Actions usando el secreto `NPM_TOKEN` sin incluir credenciales en el repositorio.
