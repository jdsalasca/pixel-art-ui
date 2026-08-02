import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { normalizeProgressValue } from "../model/normalizeProgressValue.js";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelProgress({ value, label, className = "", ...props }) {
    const bounded = normalizeProgressValue(value);
    return _jsxs("div", { className: pixelClassNames("pixel-progress", className), ...props, children: [_jsxs("div", { className: "pixel-progress__label", children: [label ? _jsx("span", { children: label }) : _jsx("span", { className: "sr-only", children: "Progress" }), _jsxs("span", { children: [bounded, "%"] })] }), _jsx("div", { className: "pixel-progress__track", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": bounded, "aria-label": label ?? "Progress", children: _jsx("div", { className: "pixel-progress__fill", style: { width: `${bounded}%` } }) })] });
}
