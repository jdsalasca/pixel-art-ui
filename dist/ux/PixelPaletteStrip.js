import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelPaletteStrip({ label = "Palette", colors, className = "", ...props }) {
    return _jsxs("section", { className: pixelClassNames("pixel-palette-strip", className), "aria-label": label, ...props, children: [_jsx("h2", { className: "pixel-palette-strip__label", children: label }), colors.length === 0 ? _jsx("p", { className: "pixel-palette-strip__empty", children: "NO COLORS" }) : _jsx("div", { className: "pixel-palette-strip__swatches", role: "list", children: colors.map((swatch) => _jsx("span", { role: "listitem", className: "pixel-palette-strip__swatch", style: { backgroundColor: swatch.color }, "aria-label": `${swatch.color}${swatch.count === undefined ? "" : ` · ${swatch.count} pixels`}`, title: swatch.count === undefined ? swatch.color : `${swatch.color} · ${swatch.count} pixels` }, `${swatch.color}-${swatch.count ?? ""}`)) })] });
}
