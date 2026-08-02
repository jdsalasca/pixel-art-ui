import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelNotice({ tone = "neutral", title, className = "", children, role, ...props }) {
    const semanticRole = role ?? (tone === "danger" ? "alert" : "status");
    return _jsxs("div", { className: pixelClassNames("pixel-notice", `pixel-notice--${tone}`, className), role: semanticRole, "aria-live": tone === "danger" ? "assertive" : "polite", ...props, children: [title ? _jsx("strong", { className: "pixel-notice__title", children: title }) : null, _jsx("div", { className: "pixel-notice__body", children: children })] });
}
