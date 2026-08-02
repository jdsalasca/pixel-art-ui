import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { PixelCompare, PixelFrameStrip, PixelLogViewer, PixelNotice, PixelProgress, PixelQualityGate, PixelSchemaHint, PixelSelect, PixelTextarea } from "../src/components.js";

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
});
