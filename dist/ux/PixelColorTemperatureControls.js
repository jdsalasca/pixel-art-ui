import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelColorTemperatureControls({ temperature, intensity, disabled = false, onTemperatureChange, onIntensityChange, className = "", ...props }) {
    const safeTemperature = Math.max(-1, Math.min(1, Number.isFinite(temperature) ? temperature : 0));
    const safeIntensity = Math.max(0, Math.min(1, Number.isFinite(intensity) ? intensity : 0.7));
    return _jsxs("div", { className: pixelClassNames("pixel-color-temperature-controls", className), "aria-label": "Sprite color temperature controls", ...props, children: [_jsxs("label", { children: [_jsxs("span", { children: ["TEMPERATURE \u00B7 ", safeTemperature] }), _jsx("input", { type: "range", min: -1, max: 1, step: 0.05, value: safeTemperature, disabled: disabled, onChange: (event) => onTemperatureChange(Number(event.target.value)) })] }), _jsxs("label", { children: [_jsxs("span", { children: ["INTENSITY \u00B7 ", safeIntensity] }), _jsx("input", { type: "range", min: 0, max: 1, step: 0.05, value: safeIntensity, disabled: disabled, onChange: (event) => onIntensityChange(Number(event.target.value)) })] })] });
}
