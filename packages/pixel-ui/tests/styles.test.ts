import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

describe("pixel-ui motion contract", () => {
  it("provides a reduced-motion fallback for animated primitives", async () => {
    const styles = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
    expect(styles).toContain("prefers-reduced-motion: reduce");
  });
});
