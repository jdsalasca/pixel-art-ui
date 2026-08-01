import { describe, expect, it } from "vitest";
import { PixelNotice, PixelProgress } from "../src/components.js";

describe("pixel-ui primitives", () => {
  it("clamps progress values so visual state cannot overflow", () => {
    const result = PixelProgress({ value: 140, label: "JOB" });
    expect(result.props.children[1].props.children.props.style.width).toBe("100%");
    expect(result.props.children[1].props["aria-valuenow"]).toBe(100);
  });

  it("exposes accessible semantics for operational feedback", () => {
    const result = PixelNotice({ tone: "danger", title: "GATEWAY", children: "No se pudo iniciar" });
    expect(result.props.role).toBe("alert");
    expect(result.props["aria-live"]).toBe("assertive");
    expect(result.props.className).toContain("pixel-notice--danger");
  });
});
