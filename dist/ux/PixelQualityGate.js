import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelQualityGate({ valid, violations = [], label = "QUALITY GATE", className = "", ...props }) {
    const tone = valid ? "valid" : "invalid";
    return _jsxs("div", { className: pixelClassNames("pixel-quality-gate", `pixel-quality-gate--${tone}`, className), role: valid ? "status" : "alert", "aria-live": valid ? "polite" : "assertive", ...props, children: [_jsxs("div", { className: "pixel-quality-gate__summary", children: [_jsx("strong", { children: label }), _jsx("span", { children: valid ? "PASS" : `${violations.length} ALERT${violations.length === 1 ? "" : "S"}` })] }), violations.length ? _jsx("ul", { className: "pixel-quality-gate__violations", children: violations.map((violation, index) => _jsx("li", { children: violation }, `${violation}-${index}`)) }) : null] });
}
