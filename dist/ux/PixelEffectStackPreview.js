import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelEffectStackPreview({ items, label = "Effect execution order", className = "", ...props }) {
    return _jsxs("section", { className: pixelClassNames("pixel-effect-stack-preview", className), "aria-label": label, ...props, children: [_jsxs("header", { className: "pixel-effect-stack-preview__heading", children: [_jsx("h2", { children: label }), _jsxs("span", { children: [items.length, " PASSES"] })] }), items.length ? _jsx("ol", { className: "pixel-effect-stack-preview__items", children: items.map((item, index) => _jsxs("li", { children: [_jsx("span", { className: "pixel-effect-stack-preview__index", "aria-hidden": "true", children: index + 1 }), _jsxs("strong", { children: [index + 1, ". ", item.label] })] }, item.id)) }) : _jsx("p", { className: "pixel-effect-stack-preview__empty", children: "NO EFFECTS SELECTED" })] });
}
