import { access, readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

describe("pixel-ui motion contract", () => {
  it("provides a reduced-motion fallback for animated primitives", async () => {
    const styles = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
    expect(styles).toContain("prefers-reduced-motion: reduce");
  });

  it("keeps CSS as an explicit consumer import so SSR can load the JS entry", async () => {
    const entry = await readFile(new URL("../src/index.ts", import.meta.url), "utf8");
    expect(entry).not.toContain('import "./styles.css"');
  });

  it("keeps the style entry modular and free of inheritance directives", async () => {
    const styles = await readFile(new URL("../src/styles.scss", import.meta.url), "utf8");
    expect(styles).toContain('@use "./styles/tokens"');
    expect(styles).toContain('@use "./styles/foundation"');
    expect(styles).toContain('@use "./styles/controls"');
    expect(styles).toContain('@use "./styles/feedback"');
    expect(styles).toContain('@use "./styles/components"');
    expect(styles).not.toContain("@extend");
    const controls = await readFile(new URL("../src/styles/_controls.scss", import.meta.url), "utf8");
    const components = await readFile(new URL("../src/styles/_components.scss", import.meta.url), "utf8");
    expect(controls).toContain(".pixel-button {");
    expect(controls).toContain(".pixel-field");
    expect(components).toContain(".pixel-panel {");
    expect(components).toContain(".pixel-badge {");
    expect(components).not.toContain("@extend");
  });

  it("keeps each visual primitive owned by one SCSS module", async () => {
    const controls = await readFile(new URL("../src/styles/_controls.scss", import.meta.url), "utf8");
    const components = await readFile(new URL("../src/styles/_components.scss", import.meta.url), "utf8");
    expect(controls.match(/\.pixel-button \{/g)?.length).toBe(1);
    expect(controls.match(/\.pixel-field, \.pixel-select, \.pixel-textarea \{/g)?.length).toBe(1);
    expect(components.match(/\.pixel-panel \{/g)?.length).toBe(1);
    expect(components.match(/\.pixel-timeline \{/g)?.length).toBe(1);
    expect(components.match(/\.pixel-artifact-strip \{/g)?.length).toBe(1);
    expect(components.match(/\.pixel-operation-summary \{/g)?.length).toBe(1);
    expect(components).not.toContain(".pixel-button {");
    expect(components).not.toContain(".pixel-field, .pixel-select, .pixel-textarea {");
    const workflow = await readFile(new URL("../src/styles/_workflow.scss", import.meta.url), "utf8");
    expect(workflow).toContain(".pixel-silhouette-controls {");
    expect(workflow).toContain(".pixel-wind-sway-controls {");
  });

  it("compiles the SCSS source once instead of layering legacy CSS over it", async () => {
    const script = await readFile(new URL("../../../scripts/copy-styles.mjs", import.meta.url), "utf8");
    expect(script).toContain('compile("packages/pixel-ui/src/styles.scss"');
    expect(script).not.toContain("readFileSync");
    expect(script).not.toContain("legacyStyles");
  });

  it("defines a typed class-name contract instead of duplicating string joins", async () => {
    const source = await readFile(new URL("../src/model/pixelClassNames.ts", import.meta.url), "utf8");
    const button = await readFile(new URL("../src/ux/PixelButton.tsx", import.meta.url), "utf8");
    expect(source).toContain("export interface PixelClassNameProps");
    expect(source).toContain("export function pixelClassNames");
    expect(button).toContain("ButtonHTMLAttributes<HTMLButtonElement>");
    expect(button).toContain("pixelClassNames(");
  });

  it("ships the declared dist entrypoints for Git and npm consumers", async () => {
    const packageJson = JSON.parse(await readFile(new URL("../../../package.json", import.meta.url), "utf8")) as { main?: string; types?: string; files?: string[] };
    expect(packageJson.main).toBe("./dist/index.js");
    expect(packageJson.types).toBe("./dist/index.d.ts");
    expect(packageJson.files).toContain("dist");
    await access(new URL("../../../dist/index.js", import.meta.url));
    await access(new URL("../../../dist/index.d.ts", import.meta.url));
  });
});
