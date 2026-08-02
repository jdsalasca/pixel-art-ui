import { readFile } from "node:fs/promises";
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
    expect(styles).toContain('@use "./styles/components"');
    expect(styles).not.toContain("@extend");
  });

  it("defines a typed class-name contract instead of duplicating string joins", async () => {
    const source = await readFile(new URL("../src/model/pixelClassNames.ts", import.meta.url), "utf8");
    const button = await readFile(new URL("../src/ux/PixelButton.tsx", import.meta.url), "utf8");
    expect(source).toContain("export interface PixelClassNameProps");
    expect(source).toContain("export function pixelClassNames");
    expect(button).toContain("ButtonHTMLAttributes<HTMLButtonElement>");
    expect(button).toContain("pixelClassNames(");
  });
});
