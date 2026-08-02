# @jdsalasc/pixel-ui

Componentes React + TypeScript tipados para interfaces de herramientas de pixel art. La librería es presentacional: no conoce MCP, Aseprite, HTTP ni el sistema de archivos.

## Instalación

```bash
npm install @jdsalasc/pixel-ui react react-dom
```

Importa los estilos una sola vez en la entrada de tu aplicación:

```tsx
import "@jdsalasc/pixel-ui/styles.css";
```

## Ejemplo completo

Este ejemplo muestra todos los primitives disponibles en una pantalla pequeña de producción:

```tsx
import { useState } from "react";
import {
  PixelBadge,
  PixelButton,
  PixelDropzone,
  PixelField,
  PixelNotice,
  PixelPanel,
  PixelProgress,
  PixelQualityGate,
  PixelSelect,
  PixelToolCard,
} from "@jdsalasc/pixel-ui";
import "@jdsalasc/pixel-ui/styles.css";

export function PixelUiShowcase() {
  const [recipe, setRecipe] = useState("pixel_art");

  return (
    <main>
      <PixelPanel title="ASSET WORKBENCH" accent="pink">
        <PixelBadge tone="cyan">READY</PixelBadge>
        <PixelField label="ASSET NAME" placeholder="coastal-map.png" />
        <PixelSelect label="RECIPE" value={recipe} onChange={(event) => setRecipe(event.target.value)}>
          <option value="pixel_art">PIXEL ART</option>
          <option value="gif">GIF</option>
          <option value="atlas">ATLAS</option>
        </PixelSelect>
        <PixelDropzone onFiles={(files) => console.log(files)} />
        <PixelButton tone="amber" onClick={() => console.log("run", recipe)}>RUN RECIPE</PixelButton>
      </PixelPanel>

      <PixelNotice tone="cyan" title="LATEST EVENT">
        Plan determinista listo para revisión.
      </PixelNotice>

      <PixelProgress value={72} label="PROCESSING" />

      <PixelQualityGate valid={false} violations={["3 isolated pixels", "contrast below threshold"]} />

      <PixelToolCard
        name="water_flow"
        description="Adds deterministic pixel highlights to water surfaces."
        status={<PixelBadge tone="cyan">AVAILABLE</PixelBadge>}
        onRun={() => console.log("run water_flow")}
      />
    </main>
  );
}
```

## Componentes disponibles

| Componente | Uso principal |
| --- | --- |
| `PixelBadge` | Estado corto como `READY`, `FAILED` o `AVAILABLE`. |
| `PixelButton` | Acciones con tonos `cyan`, `amber`, `pink`, `danger` y `neutral`. |
| `PixelDropzone` | Selección y drag-and-drop de archivos. |
| `PixelField` | Input etiquetado y accesible. |
| `PixelNotice` | Mensajes operativos con `status` o `alert` semántico. |
| `PixelPanel` | Contenedor visual con título y acento pixel art. |
| `PixelProgress` | Progreso normalizado entre 0 y 100. |
| `PixelQualityGate` | Resultado de calidad y lista de violaciones accionables. |
| `PixelSelect` | Selector etiquetado para recetas y opciones. |
| `PixelToolCard` | Catálogo de herramientas con estado y acción opcional. |

Todos los props están tipados y los componentes aceptan los atributos HTML relevantes. Los primitives de feedback incluyen roles ARIA; los estilos respetan `prefers-reduced-motion`.

## Desarrollo y publicación

```bash
npm install
npm test
npm run typecheck
npm run build
npm run pack:check
npm run publish:public
```

La publicación requiere una sesión con `npm whoami` y, si la cuenta tiene 2FA para escrituras, el código OTP interactivo. Para CI, configura el secreto `NPM_TOKEN` en GitHub y ejecuta el workflow `pixel-ui-release` o crea el tag `v0.1.0`.
