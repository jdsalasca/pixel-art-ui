import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PixelAssetCard } from "./PixelAssetCard.js";
export function PixelArtifactStrip({ label, items, onSelect }) {
    if (items.length === 0)
        return _jsx("p", { className: "pixel-artifact-strip__empty", role: "status", children: "NO ARTIFACTS" });
    return _jsxs("section", { className: "pixel-artifact-strip", "aria-label": label, children: [_jsx("h2", { children: label }), _jsx("div", { className: "pixel-artifact-strip__items", role: "list", children: items.map((item) => _jsx("div", { role: "listitem", children: _jsx(PixelAssetCard, { ...item, onSelect: onSelect ? () => onSelect(item.id) : undefined }) }, item.id)) })] });
}
