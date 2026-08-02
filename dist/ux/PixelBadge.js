import { jsx as _jsx } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelBadge({ tone = "neutral", className = "", ...props }) {
    return _jsx("span", { className: pixelClassNames("pixel-badge", `pixel-badge--${tone}`, className), ...props });
}
