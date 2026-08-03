import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelLogViewer({ entries, emptyLabel = "NO OPERATIONS YET", maxEntries = 100, className = "", ...props }) {
    const limit = Number.isFinite(maxEntries) ? Math.max(0, Math.floor(maxEntries)) : 100;
    const visibleEntries = limit === 0 ? [] : entries.slice(-limit);
    const omittedCount = entries.length - visibleEntries.length;
    return _jsxs("div", { className: pixelClassNames("pixel-log-viewer", className), ...props, children: [visibleEntries.length === 0 ? _jsx("p", { className: "pixel-log-viewer__empty", children: emptyLabel }) : _jsx("ol", { "aria-live": "polite", "aria-label": "Operation log", children: visibleEntries.map((entry) => _jsxs("li", { className: `pixel-log-viewer__entry pixel-log-viewer__entry--${entry.status}`, children: [_jsx("time", { dateTime: entry.timestamp, children: entry.timestamp }), _jsx("strong", { children: entry.title }), entry.detail ? _jsx("span", { children: entry.detail }) : null] }, entry.id)) }), omittedCount > 0 ? _jsxs("p", { className: "pixel-log-viewer__omitted", children: [omittedCount, " older event", omittedCount === 1 ? "" : "s", " omitted"] }) : null] });
}
