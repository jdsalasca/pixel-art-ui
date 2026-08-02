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

La hoja distribuida se genera exclusivamente desde `packages/pixel-ui/src/styles.scss`.
La entrada compone módulos SCSS por responsabilidad: `tokens`, `foundation`, `controls`,
`feedback`, `assets`, `workflow` y `components`, con `mixins` reutilizables. Los
componentes no usan superclases: cada uno implementa su contrato HTML tipado y compone
clases con `pixelClassNames`. Por ejemplo, `PixelButtonProps` extiende los atributos
nativos de `HTMLButtonElement`; la implementación renderiza un `<button>` real y solo
añade el modificador visual de tono.

## Ejemplo completo

Este ejemplo muestra todos los primitives disponibles en una pantalla pequeña de producción:

```tsx
import { useState } from "react";
import {
  PixelBadge,
  PixelButton,
  PixelCompare,
  PixelDropzone,
  PixelField,
  PixelFrameStrip,
  PixelLogViewer,
  PixelSchemaHint,
  PixelNotice,
  PixelPanel,
  PixelProgress,
  PixelQualityGate,
  PixelSelect,
  PixelTextarea,
  PixelToolCard,
  PixelSlider,
  PixelRadioGroup,
  PixelTabs,
  PixelToast,
  PixelKpi,
  PixelEmptyState,
  PixelConfirmDialog,
  PixelAssetCard,
  PixelCommandBar,
  PixelProgressSteps,
  PixelCheckboxGroup,
  PixelAssetGrid,
  PixelArtifactStrip,
  PixelOperationSummary,
  PixelPaletteStrip,
  PixelContactSheet,
  PixelTimeline,
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

      <PixelCompare
        before="/assets/original.png"
        after="/assets/enhanced.png"
        beforeAlt="Original source"
        afterAlt="Enhanced output"
      />

      <PixelFrameStrip
        frames={[{ src: "/assets/frame-01.png", durationMs: 120 }, { src: "/assets/frame-02.png", durationMs: 120 }]}
        onSelectedIndexChange={(index) => console.log("selected frame", index)}
      />

      <PixelTextarea label="TOOL ARGUMENTS" value='{"filename":"asset.png"}' readOnly />
      <PixelLogViewer entries={[{ id: "run-1", timestamp: new Date().toISOString(), title: "inspect_asset", status: "success", detail: "42ms" }]} />
      <PixelSchemaHint schema={{ type: "object", properties: { filename: { type: "string" } }, required: ["filename"] }} />

      <PixelQualityGate valid={false} violations={["3 isolated pixels", "contrast below threshold"]} />

      <PixelToolCard
        name="water_flow"
        description="Adds deterministic pixel highlights to water surfaces."
        status={<PixelBadge tone="cyan">AVAILABLE</PixelBadge>}
        onRun={() => console.log("run water_flow")}
      />

      <PixelArtifactStrip
        label="VARIANT PREVIEWS"
        items={[{ id: "rain", name: "RAIN", preview: "/assets/rain.gif", detail: "8 FRAMES" }]}
      />
      <PixelOperationSummary label="SCENE STACK" operation="generate_scene_effect_stack" artifactCount={6} deterministic sourcePreserved />
      <PixelPaletteStrip label="HARMONIZED PALETTE" colors={[{ color: "#3155D8", count: 12 }, { color: "#8AA0F0" }]} />
      <PixelContactSheet src="/assets/variants-sheet.png" assets={6} columns={3} rows={2} cellWidth={32} cellHeight={32} manifestUrl="/assets/variants-sheet.json" />
    </main>
  );
}
```

## Componentes disponibles

| Componente | Uso principal |
| --- | --- |
| `PixelBadge` | Estado corto como `READY`, `FAILED` o `AVAILABLE`. |
| `PixelButton` | Acciones con tonos `cyan`, `amber`, `pink`, `danger` y `neutral`. |
| `PixelCompare` | Revisión interactiva antes/después con slider accesible. |
| `PixelDropzone` | Selección y drag-and-drop de archivos. |
| `PixelField` | Input etiquetado y accesible. |
| `PixelFrameStrip` | Navegación de thumbnails y selección de frames con teclado. |
| `PixelLogViewer` | Bitácora accesible de ejecuciones, duración y errores. |
| `PixelSchemaHint` | Visualiza contratos JSON de herramientas sin acoplarse a MCP. |
| `PixelNotice` | Mensajes operativos con `status` o `alert` semántico. |
| `PixelPanel` | Contenedor visual con título y acento pixel art. |
| `PixelProgress` | Progreso normalizado entre 0 y 100. |
| `PixelQualityGate` | Resultado de calidad y lista de violaciones accionables. |
| `PixelSelect` | Selector etiquetado para recetas y opciones. |
| `PixelToolCard` | Catálogo de herramientas con estado y acción opcional. |
| `PixelTextarea` | Área etiquetada para JSON, scripts o parámetros largos. |
| `PixelSlider` | Control range accesible para intensidad, escala y umbrales. |
| `PixelRadioGroup` | Opciones exclusivas con `fieldset` y radios tipados. |
| `PixelTabs` | Navegación compacta de paneles con roles de tabs. |
| `PixelToast` | Feedback breve con estado y dismiss opcional. |
| `PixelKpi` | Métrica compacta para operaciones, frames o latencia. |
| `PixelEmptyState` | Estado vacío con copy y acción opcional. |
| `PixelConfirmDialog` | Confirmación modal accesible para acciones destructivas. |
| `PixelAssetCard` | Preview, metadata y estado de un asset seleccionable. |
| `PixelCommandBar` | Campo de búsqueda/command con acción lateral. |
| `PixelProgressSteps` | Pipeline con estados complete/current/pending/error. |
| `PixelCheckboxGroup` | Selección múltiple tipada para pasos de recetas. |
| `PixelAssetGrid` | Rejilla accesible y reusable para explorar bibliotecas de assets. |
| `PixelArtifactStrip` | Galería horizontal accesible para comparar outputs de una operación o pack. |
| `PixelOperationSummary` | Resumen reutilizable de operación, cantidad de artifacts y garantías deterministas. |
| `PixelPaletteStrip` | Swatches accesibles para visualizar la paleta generada por una operación de armonización. |
| `PixelContactSheet` | Preview pixelado de una rejilla de sprites con cantidad de assets, celdas y manifest. |
| `PixelPresetStrip` | Selector accesible y tipado para presets de escenas. |
| `PixelPaddingControl` | Control compuesto y tipado para padding top/right/bottom/left de mapas. |
| `PixelTimeline` | Timeline accesible para etapas de ciclo, progreso visual y selección humana. |

Todos los props están tipados y los componentes aceptan los atributos HTML relevantes. Los primitives de feedback incluyen roles ARIA; los estilos respetan `prefers-reduced-motion`.

### Nuevos controles de workflow

```tsx
<PixelSlider label="INTENSITY" min={0} max={1} step={0.05} value={0.6} onChange={() => undefined} />
<PixelKpi label="OPERATIONS" value={12} detail="this session" />
<PixelProgressSteps steps={[{ id: "upload", label: "UPLOAD", state: "complete" }, { id: "apply", label: "APPLY", state: "current" }]} />
<PixelCommandBar value={query} onValueChange={setQuery} placeholder="Search tools..." />
<PixelTimeline activeId="sunset" items={[{ id: "day", label: "DAY", state: "complete" }, { id: "sunset", label: "SUNSET", state: "current" }, { id: "night", label: "NIGHT" }]} />
```

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
