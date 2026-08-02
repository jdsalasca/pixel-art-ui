import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelLogViewer({ entries, emptyLabel = "NO OPERATIONS YET", className = "", ...props }) {
    return _jsx("div", { className: pixelClassNames("pixel-log-viewer", className), ...props, children: entries.length === 0 ? _jsx("p", { className: "pixel-log-viewer__empty", children: emptyLabel }) : _jsx("ol", { "aria-live": "polite", "aria-label": "Operation log", children: entries.map((entry) => _jsxs("li", { className: `pixel-log-viewer__entry pixel-log-viewer__entry--${entry.status}`, children: [_jsx("time", { dateTime: entry.timestamp, children: entry.timestamp }), _jsx("strong", { children: entry.title }), entry.detail ? _jsx("span", { children: entry.detail }) : null] }, entry.id)) }) });
}
