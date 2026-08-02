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
});
