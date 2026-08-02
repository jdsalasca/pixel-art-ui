import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function PixelAssetCard({ name, preview, detail, status, onSelect }) { return _jsxs("article", { className: "pixel-asset-card", onClick: onSelect, onKeyDown: (event) => { if (onSelect && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        onSelect();
    } }, tabIndex: onSelect ? 0 : undefined, role: onSelect ? "button" : undefined, children: [preview ? _jsx("img", { src: preview, alt: "" }) : _jsx("div", { className: "pixel-asset-card__placeholder", "aria-hidden": "true", children: "\u25C7" }), _jsxs("div", { children: [_jsx("h3", { children: name }), detail ? _jsx("p", { children: detail }) : null] }), status] }); }
