import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelPanel({ title, accent = "cyan", className = "", children, ...props }) {
    return _jsxs("section", { className: pixelClassNames("pixel-panel", `pixel-panel--${accent}`, className), ...props, children: [title ? _jsx("h2", { className: "pixel-panel__title", children: title }) : null, children] });
}
