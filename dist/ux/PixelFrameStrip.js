import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
function boundedIndex(value, length) {
    if (length === 0 || !Number.isFinite(value))
        return 0;
    return Math.max(0, Math.min(length - 1, Math.round(value)));
}
export function PixelFrameStrip({ frames, selectedIndex = 0, onSelectedIndexChange, className = "", ...props }) {
    const selected = boundedIndex(selectedIndex, frames.length);
    return _jsx("div", { className: pixelClassNames("pixel-frame-strip", className), ...props, children: frames.length === 0 ? _jsx("p", { className: "pixel-frame-strip__empty", children: "NO FRAMES" }) : frames.map((frame, index) => (_jsxs("button", { className: pixelClassNames("pixel-frame-strip__item", index === selected && "is-selected"), type: "button", "aria-label": frame.label ?? `Frame ${index + 1}`, "aria-pressed": index === selected, onClick: () => onSelectedIndexChange?.(index), children: [_jsx("img", { src: frame.src, alt: frame.alt ?? frame.label ?? `Frame ${index + 1}` }), _jsx("span", { children: frame.label ?? `FRAME ${index + 1}` }), frame.durationMs !== undefined ? _jsxs("small", { children: [frame.durationMs, "ms"] }) : null] }, `${frame.src}-${index}`))) });
}
