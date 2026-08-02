import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function PixelEmptyState({ title, children, action }) { return _jsxs("section", { className: "pixel-empty-state", role: "status", children: [_jsx("strong", { children: title }), children ? _jsx("p", { children: children }) : null, action] }); }
