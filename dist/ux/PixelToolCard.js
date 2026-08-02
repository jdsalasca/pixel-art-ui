import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PixelButton } from "./PixelButton.js";
export function PixelToolCard({ name, description, status, onRun }) {
    return _jsxs("article", { className: "pixel-tool-card", children: [_jsxs("div", { children: [_jsx("h3", { children: name }), _jsx("p", { children: description })] }), _jsxs("div", { className: "pixel-tool-card__actions", children: [status, onRun ? _jsx(PixelButton, { onClick: onRun, children: "RUN" }) : null] })] });
}
