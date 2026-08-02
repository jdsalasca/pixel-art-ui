import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
function boundedOffset(value) { return Math.max(-32, Math.min(32, Number.isInteger(value) ? value : 0)); }
function boundedOpacity(value) { return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0.45)); }
export function PixelShadowControls({ color, offsetX, offsetY, opacity, disabled = false, onColorChange, onOffsetXChange, onOffsetYChange, onOpacityChange, className = "", ...props }) {
    const safeX = boundedOffset(offsetX);
    const safeY = boundedOffset(offsetY);
    const safeOpacity = boundedOpacity(opacity);
    return _jsxs("div", { className: pixelClassNames("pixel-shadow-controls", className), "aria-label": "Sprite shadow controls", ...props, children: [_jsxs("label", { className: "pixel-shadow-controls__color", children: [_jsx("span", { children: "COLOR" }), _jsx("input", { type: "color", value: color, disabled: disabled, onChange: (event) => onColorChange(event.target.value) })] }), _jsxs("label", { children: [_jsxs("span", { children: ["OFFSET X \u00B7 ", safeX] }), _jsx("input", { type: "range", min: -32, max: 32, step: 1, value: safeX, disabled: disabled, onChange: (event) => onOffsetXChange(Number(event.target.value)) })] }), _jsxs("label", { children: [_jsxs("span", { children: ["OFFSET Y \u00B7 ", safeY] }), _jsx("input", { type: "range", min: -32, max: 32, step: 1, value: safeY, disabled: disabled, onChange: (event) => onOffsetYChange(Number(event.target.value)) })] }), _jsxs("label", { children: [_jsxs("span", { children: ["OPACITY \u00B7 ", safeOpacity] }), _jsx("input", { type: "range", min: 0, max: 1, step: 0.05, value: safeOpacity, disabled: disabled, onChange: (event) => onOpacityChange(Number(event.target.value)) })] })] });
}
