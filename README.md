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
  PixelBackgroundRemoval,
  PixelCleanupControls,
  PixelGlowControls,
  PixelRimLightControls,
  PixelAmbientOcclusionControls,
  PixelSpecularHighlightControls,
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
  PixelQualityMatrix,
  PixelEnhancementBatch,
  PixelAnimationAudit,
  PixelSpriteNormalization,
  PixelAnimationSheet,
  PixelSpriteGeometry,
  PixelSpriteHitboxes,
  PixelSpriteRuntimeBundle,
  PixelSpriteAnchors,
  PixelLibraryAudit,
  PixelLibrarySummary,
  PixelScenePlan,
  PixelSceneComposition,
  PixelSceneAnimation,
  PixelLibraryVariantPack,
  PixelManifestAudit,
  PixelSceneRecommendations,
  PixelSceneBundle,
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

      <PixelBackgroundRemoval
        color="#142850"
        tolerance={12}
        connectedOnly
        onColorChange={(nextColor) => console.log("background", nextColor)}
        onToleranceChange={(nextTolerance) => console.log("tolerance", nextTolerance)}
        onConnectedOnlyChange={(nextMode) => console.log("connected only", nextMode)}
      />
      <PixelCleanupControls minNeighbors={1} iterations={2} onMinNeighborsChange={(value) => console.log("neighbors", value)} onIterationsChange={(value) => console.log("iterations", value)} />
      <PixelGlowControls color="#FFD166" radius={2} opacity={0.8} onColorChange={(value) => console.log("glow", value)} onRadiusChange={(value) => console.log("radius", value)} onOpacityChange={(value) => console.log("opacity", value)} />

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
      <PixelQualityMatrix assets={[{ filename: "hero.png", valid: true }, { filename: "hero-rain.gif", valid: false, violations: ["4 isolated pixels"] }]} summary={{ total: 2, valid: 1, invalid: 1, failed: 0 }} />
      <PixelAnimationAudit frameCount={8} duplicateFrames={[3]} loopClosed={false} loopChangedPixels={4} timingConsistent={false} paletteStable={true} valid={false} violations={["duplicate frames: 3"]} />
      <PixelSpriteNormalization width={24} height={28} frames={8} padding={2} bounds={{ x: 2, y: 3, width: 20, height: 24 }} pivot={{ mode: "bottom_center", x: 12, y: 26 }} />
      <PixelAnimationSheet src="/assets/hero-sheet.png" frames={8} columns={4} rows={2} width={132} height={66} cellWidth={32} cellHeight={32} padding={1} manifestUrl="/assets/hero-sheet.json" />
      <PixelSpriteGeometry frameCount={8} width={32} height={32} stableBounds={false} baselineDrift={2} valid frames={[{ index: 0, bounds: { x: 4, y: 8, width: 20, height: 22 }, baselineY: 29, pivot: { x: 16, y: 29 }, componentCount: 2 }]} />
      <PixelSpriteHitboxes frameCount={8} mode="components" padding={1} hitboxes={24} manifestUrl="/assets/hero-hitboxes.json" />
      <PixelSpriteRuntimeBundle frameCount={8} artifactCount={2} sourceFilename="hero.gif" manifestUrl="/assets/hero-runtime.json" />
      <PixelSpriteAnchors frameCount={8} anchorTypes={6} baselineDrift={2} manifestUrl="/assets/hero-anchors.json" />
      <PixelLibraryAudit totalItems={339} totalCategories={24} totalPresets={12} totalFolders={339} readmePaths={339} previewPaths={339} spritePaths={339} valid />
      <PixelLibrarySummary totalItems={339} totalCategories={24} totalPresets={12} categories={[{ id: "flora", title: "Flora", itemCount: 42, examples: ["oak", "pine"] }]} presets={[{ id: "grove", title: "Living grove", category: "flora", itemCount: 8 }]} />
      <PixelScenePlan libraryVersion="catalog-scene-v1" layers={[{ id: "scene-oak", assetId: "oak", title: "Oak", role: "background", order: 0 }]} />
      <PixelSceneComposition src="/assets/scene.png" manifestUrl="/assets/scene.json" width={64} height={64} layers={[{ assetId: "oak", title: "Oak", role: "background", order: 0, x: 2, y: 2, width: 60, height: 60 }]} />
      <PixelSceneAnimation src="/assets/scene.gif" manifestUrl="/assets/scene-animation.json" width={64} height={64} frames={8} delayMs={90} layers={[{ assetId: "rain", title: "Rain", role: "effect", order: 0, x: 2, y: 2, width: 60, height: 60 }]} />
      <PixelLibraryVariantPack manifestUrl="/assets/library-variants.json" frames={6} seed={9} assets={[{ assetId: "oak", title: "Oak", outputPrefix: "out/oak", variants: ["rain", "walk"] }]} />
      <PixelManifestAudit manifest="out/scene.json" valid={false} missingArtifacts={1} emptyArtifacts={0} artifacts={[{ filename: "out/scene.png", status: "ok", sizeBytes: 2048, format: "png", sha256: "abcdef123456" }, { filename: "out/scene.gif", status: "missing", sizeBytes: 0, format: "gif", sha256: null }]} />
      <PixelSceneRecommendations libraryVersion="catalog-v1" suggestedItemIds={["ocean", "palm"]} coveredKinds={["scene", "sprite"]} coveredTags={["water", "tropical"]} coveredVariants={["water_reflection", "rain"]} recommendations={[{ assetId: "ocean", title: "Ocean Waves", category: "coast", kind: "scene", score: 21, reasons: ["prompt:water", "variant:water_reflection"], tags: ["water"], variants: ["water_reflection"] }]} />
      <PixelSceneBundle staticSrc="/assets/scene.png" staticManifestUrl="/assets/scene.json" animationSrc="/assets/scene.gif" animationManifestUrl="/assets/scene-animation.json" width={64} height={48} frames={8} delayMs={90} />
    </main>
  );
}
```

## Componentes disponibles

| Componente | Uso principal |
| --- | --- |
| `PixelBadge` | Estado corto como `READY`, `FAILED` o `AVAILABLE`. |
| `PixelButton` | Acciones con tonos `cyan`, `amber`, `pink`, `danger` y `neutral`. |
| `PixelBackgroundRemoval` | Control tipado para color de fondo, tolerancia y modo conectado para eliminación determinista. |
| `PixelCleanupControls` | Umbral e iteraciones para eliminar píxeles aislados preservando grupos conectados. |
| `PixelGlowControls` | Color, radio y opacidad para auras deterministas alrededor de sprites. |
| `PixelRimLightControls` | Color, dirección y fuerza para iluminación de borde direccional en sprites. |
| `PixelAmbientOcclusionControls` | Color, radio y fuerza para sombrear cavidades y bordes internos de sprites. |
| `PixelSpecularHighlightControls` | Color, dirección, radio y fuerza para una banda de brillo especular hacia el interior del sprite. |
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
| `PixelQualityMatrix` | Matriz compacta para revisar pass/review/failed de una colección completa. |
| `PixelEnhancementBatch` | Resultado compacto de mejoras batch, fallos aislados y garantías de determinismo/preservación. |
| `PixelAnimationAudit` | Checks visuales de frames duplicados, timing, paleta y costura de loop. |
| `PixelSpriteNormalization` | Resultado compacto de crop por alfa, padding, pivote y garantías de exportación. |
| `PixelAnimationSheet` | Preview y metadata de una rejilla de frames con navegación al manifest. |
| `PixelSpriteGeometry` | Reporte visual de bounds, baseline, pivotes y componentes conectados por frame. |
| `PixelSpriteHitboxes` | Resumen de hitboxes por componentes o unión, padding, manifest y garantías deterministas. |
| `PixelSpriteRuntimeBundle` | Resumen compacto de sheet, hitboxes, frames, manifest y garantías de exportación runtime. |
| `PixelSpriteAnchors` | Resumen de puntos de placement, drift de baseline, manifest y garantías deterministas. |
| `PixelLibraryAudit` | Métricas compactas de integridad del catálogo y lista acotada de referencias rotas. |
| `PixelLibrarySummary` | Mapa compacto de categorías, ejemplos y presets para navegar bibliotecas con menos tokens. |
| `PixelScenePlan` | Capas ordenadas de una escena seleccionada con roles y garantías deterministas. |
| `PixelSceneComposition` | Preview PNG pixelado, placements por capa y enlace al manifest generado por el compositor. |
| `PixelSceneAnimation` | Preview GIF pixelado con frames, delay, capas y enlace al manifest por frame. |
| `PixelLibraryVariantPack` | Resumen compacto de variantes generadas para múltiples assets de la biblioteca. |
| `PixelManifestAudit` | Integridad de manifests: faltantes, archivos vacíos, formato y hash SHA-256. |
| `PixelSceneRecommendations` | Selección explicable de assets compatibles, tags cubiertos y efectos sugeridos para una escena. |
| `PixelSceneBundle` | Preview unificado de PNG, GIF y los dos manifests de una escena generada. |
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
<PixelBackgroundRemoval color="#142850" tolerance={12} connectedOnly onColorChange={() => undefined} onToleranceChange={() => undefined} onConnectedOnlyChange={() => undefined} />
<PixelCleanupControls minNeighbors={1} iterations={2} onMinNeighborsChange={() => undefined} onIterationsChange={() => undefined} />
<PixelGlowControls color="#FFD166" radius={2} opacity={0.8} onColorChange={() => undefined} onRadiusChange={() => undefined} onOpacityChange={() => undefined} />
<PixelRimLightControls color="#FFD166" direction="north_east" strength={0.75} onColorChange={() => undefined} onDirectionChange={() => undefined} onStrengthChange={() => undefined} />
<PixelAmbientOcclusionControls color="#000000" radius={1} strength={0.6} onColorChange={() => undefined} onRadiusChange={() => undefined} onStrengthChange={() => undefined} />
<PixelSpecularHighlightControls color="#FFFFFF" direction="north" radius={2} strength={0.8} onColorChange={() => undefined} onDirectionChange={() => undefined} onRadiusChange={() => undefined} onStrengthChange={() => undefined} />
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
