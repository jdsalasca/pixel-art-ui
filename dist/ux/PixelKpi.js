import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function PixelKpi({ label, value, detail, tone = "cyan" }) { return _jsxs("article", { className: `pixel-kpi pixel-kpi--${tone}`, children: [_jsx("span", { children: label }), _jsx("strong", { children: value }), detail ? _jsx("small", { children: detail }) : null] }); }
