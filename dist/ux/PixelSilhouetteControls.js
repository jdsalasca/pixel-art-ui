import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelSilhouetteControls({ color, opacity, disabled = false, onColorChange, onOpacityChange, className = "", ...props }) {
    const safeOpacity = Math.max(0, Math.min(1, Number.isFinite(opacity) ? opacity : 1));
    return _jsxs("div", { className: pixelClassNames("pixel-silhouette-controls", className), "aria-label": "Sprite silhouette controls", ...props, children: [_jsxs("label", { className: "pixel-silhouette-controls__color", children: [_jsx("span", { children: "SILHOUETTE COLOR" }), _jsx("input", { type: "color", value: color, disabled: disabled, onChange: (event) => onColorChange(event.target.value) })] }), _jsxs("label", { children: [_jsxs("span", { children: ["OPACITY \u00B7 ", safeOpacity] }), _jsx("input", { type: "range", min: 0, max: 1, step: 0.05, value: safeOpacity, disabled: disabled, onChange: (event) => onOpacityChange(Number(event.target.value)) })] })] });
}
