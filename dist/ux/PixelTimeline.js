import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelTimeline({ items, activeId, onSelect, className = "", ...props }) {
    return _jsx("ol", { className: pixelClassNames("pixel-timeline", className), ...props, children: items.map((item) => {
            const active = item.id === activeId || item.state === "current";
            const state = item.state ?? "pending";
            return _jsx("li", { className: pixelClassNames("pixel-timeline__item", `pixel-timeline__item--${state}`, active && "is-active"), children: _jsxs("button", { type: "button", className: "pixel-timeline__button", "aria-current": active ? "step" : undefined, disabled: !onSelect, onClick: () => onSelect?.(item.id), children: [_jsx("span", { className: "pixel-timeline__marker", "aria-hidden": "true" }), _jsx("strong", { children: item.label }), item.detail ? _jsx("small", { children: item.detail }) : null] }) }, item.id);
        }) });
}
