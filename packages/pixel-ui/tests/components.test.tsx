import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { PixelCompare, PixelNotice, PixelProgress, PixelQualityGate, PixelSelect } from "../src/components.js";

describe("pixel-ui primitives", () => {
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
});
