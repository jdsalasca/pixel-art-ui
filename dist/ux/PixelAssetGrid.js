import { jsx as _jsx } from "react/jsx-runtime";
import { PixelAssetCard } from "./PixelAssetCard.js";
export function PixelAssetGrid({ items, emptyLabel = "NO ASSETS", onSelect }) {
    if (items.length === 0)
        return _jsx("p", { className: "pixel-asset-grid__empty", role: "status", children: emptyLabel });
    return _jsx("div", { className: "pixel-asset-grid", role: "list", "aria-label": "Asset library", children: items.map((item) => _jsx("div", { role: "listitem", children: _jsx(PixelAssetCard, { name: item.name, preview: item.preview, detail: item.detail, status: item.status, onSelect: onSelect ? () => onSelect(item.id) : undefined }) }, item.id)) });
}
