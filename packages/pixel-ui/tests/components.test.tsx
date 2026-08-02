import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { PixelAnimationAudit, PixelAnimationSheet, PixelArtifactStrip, PixelAssetCard, PixelAssetGrid, PixelButton, PixelCheckboxGroup, PixelCommandBar, PixelCompare, PixelConfirmDialog, PixelContactSheet, PixelEmptyState, PixelFrameStrip, PixelKpi, PixelLibraryAudit, PixelLibrarySummary, PixelLibraryVariantPack, PixelLogViewer, PixelManifestAudit, PixelNotice, PixelOperationSummary, PixelPaddingControl, PixelPaletteStrip, PixelPresetStrip, PixelProgress, PixelProgressSteps, PixelQualityGate, PixelQualityMatrix, PixelRadioGroup, PixelSchemaHint, PixelSceneAnimation, PixelSceneComposition, PixelScenePlan, PixelSceneRecommendations, PixelSelect, PixelSlider, PixelSpriteAnchors, PixelSpriteGeometry, PixelSpriteHitboxes, PixelSpriteNormalization, PixelSpriteRuntimeBundle, PixelTabs, PixelTextarea, PixelTimeline, PixelToast, pixelClassNames } from "../src/components.js";

describe("pixel-ui primitives", () => {
  it("renders a typed accessible timeline without inheritance coupling", () => {
    const markup = renderToStaticMarkup(<PixelTimeline aria-label="Time of day" activeId="sunset" items={[{ id: "day", label: "DAY", state: "complete" }, { id: "sunset", label: "SUNSET", state: "current", detail: "warm light" }, { id: "night", label: "NIGHT", state: "pending" }]} onSelect={() => undefined} />);
    expect(markup).toContain('aria-label="Time of day"');
    expect(markup).toContain("SUNSET");
    expect(markup).toContain("warm light");
    expect(markup).toContain('aria-current="step"');
  });

  it("composes native button attributes without a component superclass", () => {
    const result = PixelButton({ tone: "amber", type: "submit", className: "custom-action" });
    expect(result.type).toBe("button");
    expect(result.props.type).toBe("submit");
    expect(result.props.className).toBe("pixel-button pixel-button--amber custom-action");
    expect(pixelClassNames("base", false, "", "modifier")).toBe("base modifier");
  });

  it("clamps progress values so visual state cannot overflow", () => {
    const result = PixelProgress({ value: 140, label: "JOB" });
    expect(result.props.children[1].props.children.props.style.width).toBe("100%");
    expect(result.props.children[1].props["aria-valuenow"]).toBe(100);
  });

  it("fails closed for non-finite progress values", () => {
    const result = PixelProgress({ value: Number.NaN });
    expect(result.props.children[1].props["aria-valuenow"]).toBe(0);
    expect(result.props.children[1].props.children.props.style.width).toBe("0%");
  });

  it("exposes accessible semantics for operational feedback", () => {
    const result = PixelNotice({ tone: "danger", title: "GATEWAY", children: "No se pudo iniciar" });
    expect(result.props.role).toBe("alert");
    expect(result.props["aria-live"]).toBe("assertive");
    expect(result.props.className).toContain("pixel-notice--danger");
  });

  it("renders quality violations as an accessible alert", () => {
    const result = PixelQualityGate({ valid: false, violations: ["3 isolated pixels", "contrast below threshold"] });
    expect(result.props.role).toBe("alert");
    expect(result.props["aria-live"]).toBe("assertive");
    expect(result.props.children[1].props.children).toHaveLength(2);
  });

  it("associates select labels with their generated control id", () => {
    const markup = renderToStaticMarkup(<PixelSelect label="RECIPE" id="recipe-input">options</PixelSelect>);
    expect(markup).toContain('for="recipe-input"');
    expect(markup).toContain('id="recipe-input"');
  });

  it("clamps compare position and exposes an accessible range control", () => {
    const markup = renderToStaticMarkup(<PixelCompare before="before.png" after="after.png" position={140} />);
    expect(markup).toContain('aria-valuenow="100"');
    expect(markup).toContain('aria-label="Compare original and output"');
    expect(markup).toContain("pixel-compare__after");
  });

  it("clamps frame selection and exposes keyboard-friendly pressed state", () => {
    const markup = renderToStaticMarkup(<PixelFrameStrip selectedIndex={99} frames={[{ src: "one.png" }, { src: "two.png", durationMs: 120 }]} />);

    expect(markup).toContain('aria-label="Frame 2"');
    expect(markup).toContain('aria-pressed="true"');
    expect(markup).toContain("120ms");
  });

  it("keeps JSON arguments labeled and operation logs live", () => {
    const markup = renderToStaticMarkup(<><PixelTextarea label="ARGUMENTS JSON" value="{}" readOnly /><PixelLogViewer entries={[{ id: "1", timestamp: "2026-08-01T00:00:00.000Z", title: "inspect_asset", status: "success", detail: "12ms" }]} /></>);

    expect(markup).toContain('for="');
    expect(markup).toContain('aria-label="Operation log"');
    expect(markup).toContain("inspect_asset");
  });

  it("renders a compact contract for tool arguments", () => {
    const markup = renderToStaticMarkup(<PixelSchemaHint schema={{ type: "object", properties: { filename: { type: "string", description: "Input asset" }, seed: { type: "integer" } }, required: ["filename"] }} />);

    expect(markup).toContain("ARGUMENT CONTRACT");
    expect(markup).toContain("filename");
    expect(markup).toContain("string · required");
  });

  it("renders the ten workflow primitives with typed accessible contracts", () => {
    const markup = renderToStaticMarkup(<>
      <PixelSlider label="INTENSITY" min={0} max={1} step={0.1} value={0.5} onChange={() => undefined} />
      <PixelRadioGroup label="MATERIAL" options={[{ value: "water", label: "WATER" }]} value="water" onChange={() => undefined} />
      <PixelTabs tabs={[{ id: "one", label: "ONE", content: "content" }]} />
      <PixelToast title="DONE">Saved</PixelToast>
      <PixelKpi label="OPS" value={4} />
      <PixelEmptyState title="NO ASSETS" />
      <PixelConfirmDialog open title="CONFIRM" onConfirm={() => undefined} onCancel={() => undefined}>Delete?</PixelConfirmDialog>
      <PixelAssetCard name="hero.png" detail="32×32" />
      <PixelCommandBar value="lighting" onValueChange={() => undefined} />
      <PixelProgressSteps steps={[{ id: "a", label: "UPLOAD", state: "complete" }, { id: "b", label: "APPLY", state: "current" }]} />
      <PixelCheckboxGroup label="PASSES" options={[{ value: "outline", label: "OUTLINE" }]} values={["outline"]} onChange={() => undefined} />
      <PixelAssetGrid items={[{ id: "oak", name: "OAK" }]} onSelect={() => undefined} />
    </>);
    expect(markup).toContain('type="range"');
    expect(markup).toContain('type="radio"');
    expect(markup).toContain('role="tablist"');
    expect(markup).toContain('role="status"');
    expect(markup).toContain("OPS");
    expect(markup).toContain("NO ASSETS");
    expect(markup).toContain('role="dialog"');
    expect(markup).toMatch(/aria-labelledby="[^"]+"/);
    expect(markup).toContain("hero.png");
    expect(markup).toContain('aria-label="Command search"');
    expect(markup).toContain("UPLOAD");
    expect(markup).toContain("PASSES");
    expect(markup).toContain("OAK");
    expect(markup).toContain('aria-label="Asset library"');
  });

  it("exposes typed selection semantics for preset strips", () => {
    const markup = renderToStaticMarkup(<PixelPresetStrip label="Scene presets" options={[{ id: "forest", title: "FOREST", description: "Living forest" }]} selectedId="forest" onSelect={() => undefined} />);
    expect(markup).toContain("Scene presets");
    expect(markup).toContain("FOREST");
    expect(markup).toContain('aria-selected="true"');
  });

  it("renders typed accessible scene padding controls", () => {
    const markup = renderToStaticMarkup(<PixelPaddingControl label="Scene padding" value={{ top: 2, right: 8, bottom: 1, left: 4 }} onChange={() => undefined} />);
    expect(markup).toContain("Scene padding");
    expect(markup).toContain('aria-label="Scene padding"');
    expect(markup).toContain("TOP");
    expect(markup).toContain('value="8"');
  });

  it("renders artifact previews as a reusable accessible strip", () => {
    const markup = renderToStaticMarkup(<PixelArtifactStrip label="Variant previews" items={[{ id: "rain", name: "RAIN", preview: "rain.gif", detail: "8 FRAMES" }]} />);
    expect(markup).toContain("Variant previews");
    expect(markup).toContain("RAIN");
    expect(markup).toContain('aria-label="Variant previews"');
  });

  it("renders deterministic operation guarantees as a reusable summary", () => {
    const markup = renderToStaticMarkup(<PixelOperationSummary label="SCENE STACK" operation="generate_scene_effect_stack" artifactCount={6} deterministic sourcePreserved />);
    expect(markup).toContain("SCENE STACK");
    expect(markup).toContain("generate_scene_effect_stack");
    expect(markup).toContain("6 ARTIFACTS");
    expect(markup).toContain("SOURCE PRESERVED");
  });

  it("renders accessible palette swatches for a harmonization result", () => {
    const markup = renderToStaticMarkup(<PixelPaletteStrip label="HARMONIZED PALETTE" colors={[{ color: "#3155D8", count: 12 }, { color: "#8AA0F0" }]} />);
    expect(markup).toContain("HARMONIZED PALETTE");
    expect(markup).toContain('aria-label="#3155D8 · 12 pixels"');
    expect(markup).toContain('style="background-color:#3155D8"');
  });

  it("renders a contact sheet with compact navigation metadata", () => {
    const markup = renderToStaticMarkup(<PixelContactSheet src="preview-sheet.png" assets={6} columns={3} rows={2} cellWidth={32} cellHeight={32} manifestUrl="preview-sheet.json" />);
    expect(markup).toContain("CONTACT SHEET");
    expect(markup).toContain('aria-label="Contact sheet preview"');
    expect(markup).toContain("6 ASSETS");
    expect(markup).toContain("3 × 2");
    expect(markup).toContain("preview-sheet.json");
  });

  it("renders a compact batch quality matrix with pass and failure counts", () => {
    const markup = renderToStaticMarkup(<PixelQualityMatrix assets={[{ filename: "hero.png", valid: true }, { filename: "broken.png", valid: false, violations: ["too many colors"] }]} summary={{ total: 2, valid: 1, invalid: 1, failed: 0 }} />);
    expect(markup).toContain('aria-label="Batch quality report"');
    expect(markup).toContain("1 PASS");
    expect(markup).toContain("broken.png");
    expect(markup).toContain("1 ISSUE(S)");
  });

  it("renders animation audit checks without coupling to a provider", () => {
    const markup = renderToStaticMarkup(<PixelAnimationAudit frameCount={8} duplicateFrames={[3]} loopClosed={false} loopChangedPixels={4} timingConsistent={false} paletteStable={true} valid={false} violations={["duplicate frames: 3"]} />);
    expect(markup).toContain('aria-label="Animation quality audit"');
    expect(markup).toContain("8 FRAMES");
    expect(markup).toContain("1 DUPLICATE");
    expect(markup).toContain("TIMING REVIEW");
  });

  it("renders deterministic sprite normalization metadata without a domain dependency", () => {
    const markup = renderToStaticMarkup(<PixelSpriteNormalization width={24} height={28} frames={8} padding={2} bounds={{ x: 2, y: 3, width: 20, height: 24 }} pivot={{ mode: "bottom_center", x: 12, y: 26 }} />);
    expect(markup).toContain('aria-label="Sprite normalization result"');
    expect(markup).toContain("24×28");
    expect(markup).toContain("bottom_center");
    expect(markup).toContain("SOURCE PRESERVED");
  });

  it("renders animation sheet geometry and manifest navigation", () => {
    const markup = renderToStaticMarkup(<PixelAnimationSheet src="hero-sheet.png" frames={8} columns={4} rows={2} width={132} height={66} cellWidth={32} cellHeight={32} padding={1} manifestUrl="hero-sheet.json" />);
    expect(markup).toContain('aria-label="Animation sheet preview"');
    expect(markup).toContain("8 FRAMES");
    expect(markup).toContain("4 × 2");
    expect(markup).toContain("hero-sheet.json");
  });

  it("renders sprite geometry metrics and connected component counts", () => {
    const markup = renderToStaticMarkup(<PixelSpriteGeometry frameCount={8} width={32} height={32} stableBounds={false} baselineDrift={2} valid frames={[{ index: 0, bounds: { x: 4, y: 8, width: 20, height: 22 }, baselineY: 29, pivot: { x: 16, y: 29 }, componentCount: 2 }]} violations={[]} />);
    expect(markup).toContain('aria-label="Sprite geometry report"');
    expect(markup).toContain("BASELINE DRIFT 2PX");
    expect(markup).toContain("2 COMPONENT(S)");
    expect(markup).toContain("BOUNDS REVIEW");
  });

  it("renders a compact deterministic sprite hitbox manifest summary", () => {
    const markup = renderToStaticMarkup(<PixelSpriteHitboxes frameCount={8} mode="components" padding={1} hitboxes={24} manifestUrl="hero-hitboxes.json" />);
    expect(markup).toContain('aria-label="Sprite hitbox manifest"');
    expect(markup).toContain("24 HITBOXES");
    expect(markup).toContain("COMPONENTS");
    expect(markup).toContain("hero-hitboxes.json");
  });

  it("renders a reusable runtime bundle summary", () => {
    const markup = renderToStaticMarkup(<PixelSpriteRuntimeBundle frameCount={8} artifactCount={2} sourceFilename="hero.gif" manifestUrl="hero-runtime.json" />);
    expect(markup).toContain('aria-label="Sprite runtime bundle"');
    expect(markup).toContain("2 ARTIFACTS");
    expect(markup).toContain("hero-runtime.json");
  });

  it("renders a reusable sprite placement anchor summary", () => {
    const markup = renderToStaticMarkup(<PixelSpriteAnchors frameCount={8} anchorTypes={6} baselineDrift={2} manifestUrl="hero-anchors.json" />);
    expect(markup).toContain('aria-label="Sprite anchors manifest"');
    expect(markup).toContain("6 ANCHOR TYPES");
    expect(markup).toContain("hero-anchors.json");
  });

  it("renders compact library integrity metrics and bounded violations", () => {
    const markup = renderToStaticMarkup(<PixelLibraryAudit totalItems={339} totalCategories={24} totalPresets={12} totalFolders={339} readmePaths={339} previewPaths={338} spritePaths={339} valid={false} violations={["preset:coastal references missing item", "item:bad has unsafe readme path"]} />);
    expect(markup).toContain('aria-label="Asset library audit"');
    expect(markup).toContain("339</strong> ASSETS");
    expect(markup).toContain("REVIEW REQUIRED");
    expect(markup).toContain("missing item");
  });

  it("renders compact category navigation without loading asset details", () => {
    const markup = renderToStaticMarkup(<PixelLibrarySummary totalItems={339} totalCategories={24} totalPresets={12} categories={[{ id: "flora", title: "Flora", itemCount: 42, examples: ["oak", "pine"] }]} presets={[{ id: "grove", title: "Living grove", category: "flora", itemCount: 8 }]} />);
    expect(markup).toContain('aria-label="Asset library summary"');
    expect(markup).toContain("LOW-TOKEN NAVIGATION");
    expect(markup).toContain("Living grove (8)");
    expect(markup).toContain("oak · pine");
  });

  it("renders ordered scene layers with deterministic guarantees", () => {
    const markup = renderToStaticMarkup(<PixelScenePlan libraryVersion="catalog-scene-v1" layers={[{ id: "scene-knight", assetId: "knight", title: "Knight", role: "background", order: 0 }, { id: "scene-rain", assetId: "rain", title: "Rain", role: "effect", order: 1 }]} />);
    expect(markup).toContain('aria-label="Asset scene plan"');
    expect(markup).toContain("2 LAYERS");
    expect(markup).toContain("EFFECT · rain");
    expect(markup).toContain("SOURCE PRESERVED");
  });

  it("renders a composed scene preview with navigable placements", () => {
    const markup = renderToStaticMarkup(<PixelSceneComposition src="scene.png" manifestUrl="scene.json" width={64} height={48} layers={[{ assetId: "oak", title: "Oak", role: "background", order: 0, x: 4, y: 8, width: 32, height: 24 }]} />);
    expect(markup).toContain('aria-label="Asset scene composition"');
    expect(markup).toContain("SCENE COMPOSITION");
    expect(markup).toContain("OPEN MANIFEST");
    expect(markup).toContain("4,8");
    expect(markup).toContain("DETERMINISTIC");
  });

  it("renders animated scene metadata and a frame manifest link", () => {
    const markup = renderToStaticMarkup(<PixelSceneAnimation src="scene.gif" manifestUrl="scene.json" width={64} height={48} frames={8} delayMs={90} layers={[{ assetId: "rain", title: "Rain", role: "effect", order: 0, x: 4, y: 4, width: 56, height: 40 }]} />);
    expect(markup).toContain('aria-label="Asset scene animation"');
    expect(markup).toContain("8 FRAMES");
    expect(markup).toContain("OPEN FRAME MANIFEST");
    expect(markup).toContain("EFFECT · rain");
  });

  it("renders a compact multi-asset variant pack manifest", () => {
    const markup = renderToStaticMarkup(<PixelLibraryVariantPack manifestUrl="library.json" frames={6} seed={9} assets={[{ assetId: "oak", title: "Oak", outputPrefix: "out/oak", variants: ["rain", "walk"] }]} />);
    expect(markup).toContain('aria-label="Library variant pack"');
    expect(markup).toContain("1 ASSETS");
    expect(markup).toContain("rain · walk");
    expect(markup).toContain("OPEN MANIFEST");
  });

  it("renders missing and empty manifest artifacts with integrity metadata", () => {
    const markup = renderToStaticMarkup(<PixelManifestAudit manifest="out/scene.json" valid={false} missingArtifacts={1} emptyArtifacts={1} artifacts={[{ filename: "out/scene.png", status: "ok", sizeBytes: 12, format: "png", sha256: "abcdef1234567890" }, { filename: "out/missing.gif", status: "missing", sizeBytes: 0, format: "gif", sha256: null }]} />);
    expect(markup).toContain("MANIFEST INTEGRITY");
    expect(markup).toContain("MISSING");
    expect(markup).toContain("out/missing.gif");
  });

  it("renders explainable scene recommendations and covered effects", () => {
    const markup = renderToStaticMarkup(<PixelSceneRecommendations libraryVersion="catalog-v1" suggestedItemIds={["ocean", "palm"]} coveredKinds={["scene", "sprite"]} coveredTags={["water", "tropical"]} coveredVariants={["water_reflection", "rain"]} recommendations={[{ assetId: "ocean", title: "Ocean Waves", category: "coast", kind: "scene", score: 21, reasons: ["prompt:water", "variant:water_reflection"], tags: ["water"], variants: ["water_reflection"] }]} />);
    expect(markup).toContain("SCENE RECOMMENDATIONS");
    expect(markup).toContain("Ocean Waves");
    expect(markup).toContain("water_reflection");
  });
});
