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
    expect(styles).toContain('@use "./styles/buttons"');
    expect(styles).toContain('@use "./styles/forms"');
    expect(styles).toContain('@use "./styles/navigation"');
    expect(styles).toContain('@use "./styles/feedback"');
    expect(styles).toContain('@use "./styles/components"');
    expect(styles).not.toContain("@extend");
    const buttons = await readFile(new URL("../src/styles/_buttons.scss", import.meta.url), "utf8");
    const forms = await readFile(new URL("../src/styles/_forms.scss", import.meta.url), "utf8");
    const navigation = await readFile(new URL("../src/styles/_navigation.scss", import.meta.url), "utf8");
    const components = await readFile(new URL("../src/styles/_components.scss", import.meta.url), "utf8");
    expect(buttons).toContain(".pixel-button {");
    expect(forms).toContain(".pixel-field");
    expect(navigation).toContain(".pixel-tabs {");
    expect(navigation).toContain("&__button");
    expect(navigation).not.toContain("__list button");
    expect(components).toContain(".pixel-panel {");
    expect(components).toContain(".pixel-badge {");
    expect(components).not.toContain("@extend");
  });

  it("keeps each visual primitive owned by one SCSS module", async () => {
    const buttons = await readFile(new URL("../src/styles/_buttons.scss", import.meta.url), "utf8");
    const forms = await readFile(new URL("../src/styles/_forms.scss", import.meta.url), "utf8");
    const navigation = await readFile(new URL("../src/styles/_navigation.scss", import.meta.url), "utf8");
    const components = await readFile(new URL("../src/styles/_components.scss", import.meta.url), "utf8");
    const feedback = await readFile(new URL("../src/styles/_feedback.scss", import.meta.url), "utf8");
    expect(buttons.match(/\.pixel-button \{/g)?.length).toBe(1);
    expect(forms.match(/\.pixel-field, \.pixel-select, \.pixel-textarea \{/g)?.length).toBe(1);
    expect(components.match(/\.pixel-panel \{/g)?.length).toBe(1);
    expect(components.match(/\.pixel-timeline \{/g)?.length).toBe(1);
    expect(components.match(/\.pixel-artifact-strip \{/g)?.length).toBe(1);
    expect(components.match(/\.pixel-operation-summary \{/g)?.length).toBe(1);
    expect(components).not.toContain(".pixel-button {");
    expect(components).not.toContain(".pixel-field, .pixel-select, .pixel-textarea {");
    expect(feedback).toContain(".pixel-log-viewer__omitted");
    const workflow = await readFile(new URL("../src/styles/_workflow.scss", import.meta.url), "utf8");
    expect(workflow).toContain(".pixel-silhouette-controls {");
    expect(workflow).toContain(".pixel-wind-sway-controls {");
    expect(workflow).toContain(".pixel-fog-controls {");
    expect(workflow).toContain(".pixel-snow-controls {");
    expect(workflow).toContain(".pixel-smoke-controls {");
    expect(workflow).toContain(".pixel-fire-controls {");
    expect(workflow).toContain(".pixel-lightning-controls {");
    expect(workflow).toContain(".pixel-wave-controls {");
    expect(workflow).toContain(".pixel-effect-stack-preview {");
    expect(workflow).not.toContain("@extend");
  });

  it("compiles the SCSS source once instead of layering legacy CSS over it", async () => {
    const script = await readFile(new URL("../../../scripts/copy-styles.mjs", import.meta.url), "utf8");
    expect(script).toContain('compile("packages/pixel-ui/src/styles.scss"');
    expect(script).not.toContain("readFileSync");
    expect(script).not.toContain("legacyStyles");
  });

  it("defines a typed class-name contract instead of duplicating string joins", async () => {
    const source = await readFile(new URL("../src/model/pixelClassNames.ts", import.meta.url), "utf8");
    const buttonContract = await readFile(new URL("../src/model/buttonContracts.ts", import.meta.url), "utf8");
    const button = await readFile(new URL("../src/ux/PixelButton.tsx", import.meta.url), "utf8");
    expect(source).toContain("export interface PixelClassNameProps");
    expect(source).toContain("export function pixelClassNames");
    expect(button).toContain("ButtonProps");
    expect(buttonContract).toContain("export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>");
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
