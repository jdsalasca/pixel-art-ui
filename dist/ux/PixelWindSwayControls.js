import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
const DIRECTIONS = ["left", "right"];
export function PixelWindSwayControls({ frames, seed, amplitude, direction, disabled = false, onFramesChange, onSeedChange, onAmplitudeChange, onDirectionChange, className = "", ...props }) {
    const safeFrames = Math.max(2, Math.min(24, Number.isInteger(frames) ? frames : 8));
    const safeSeed = Number.isInteger(seed) ? seed : 1;
    const safeAmplitude = Math.max(0, Math.min(8, Number.isFinite(amplitude) ? amplitude : 2));
    const safeDirection = DIRECTIONS.includes(direction) ? direction : "right";
    return _jsxs("div", { className: pixelClassNames("pixel-wind-sway-controls", className), "aria-label": "Wind sway controls", ...props, children: [_jsxs("label", { children: [_jsxs("span", { children: ["FRAMES \u00B7 ", safeFrames] }), _jsx("input", { type: "number", min: 2, max: 24, step: 1, value: safeFrames, disabled: disabled, onChange: (event) => onFramesChange(Number(event.target.value)) })] }), _jsxs("label", { children: [_jsxs("span", { children: ["SEED \u00B7 ", safeSeed] }), _jsx("input", { type: "number", step: 1, value: safeSeed, disabled: disabled, onChange: (event) => onSeedChange(Number(event.target.value)) })] }), _jsxs("label", { children: [_jsxs("span", { children: ["AMPLITUDE \u00B7 ", safeAmplitude] }), _jsx("input", { type: "range", min: 0, max: 8, step: 0.5, value: safeAmplitude, disabled: disabled, onChange: (event) => onAmplitudeChange(Number(event.target.value)) })] }), _jsxs("label", { children: [_jsxs("span", { children: ["DIRECTION \u00B7 ", safeDirection.toUpperCase()] }), _jsx("select", { value: safeDirection, disabled: disabled, onChange: (event) => onDirectionChange(event.target.value), children: DIRECTIONS.map((value) => _jsx("option", { value: value, children: value.toUpperCase() }, value)) })] })] });
}
