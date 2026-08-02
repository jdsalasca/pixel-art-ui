import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
function boundedPosition(value) {
    if (!Number.isFinite(value))
        return 50;
    return Math.max(0, Math.min(100, Math.round(value)));
}
export function PixelCompare({ before, after, beforeAlt = "Original asset", afterAlt = "Enhanced asset", position = 50, onPositionChange, className = "", ...props }) {
    const bounded = boundedPosition(position);
    const style = { "--pixel-compare-position": `${bounded}%` };
    return _jsxs("div", { className: pixelClassNames("pixel-compare", className), style: style, ...props, children: [_jsx("img", { className: "pixel-compare__image", src: before, alt: beforeAlt }), _jsx("div", { className: "pixel-compare__after", "aria-hidden": "true", children: _jsx("img", { className: "pixel-compare__image", src: after, alt: afterAlt }) }), _jsxs("div", { className: "pixel-compare__labels", "aria-hidden": "true", children: [_jsx("span", { children: "ORIGINAL" }), _jsx("span", { children: "OUTPUT" })] }), _jsx("input", { className: "pixel-compare__range", type: "range", min: 0, max: 100, value: bounded, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": bounded, "aria-label": "Compare original and output", onChange: (event) => onPositionChange?.(Number(event.target.value)) })] });
}
