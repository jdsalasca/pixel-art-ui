import { describe, expect, it } from "vitest";
import { PixelProgress } from "../src/components.js";

describe("pixel-ui primitives", () => {
  it("clamps progress values so visual state cannot overflow", () => {
    const result = PixelProgress({ value: 140, label: "JOB" });
    expect(result.props.children[1].props.children.props.style.width).toBe("100%");
  });
});
