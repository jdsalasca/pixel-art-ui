import { jsx as _jsx } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelButton({ tone = "cyan", className = "", ...props }) {
    return _jsx("button", { className: pixelClassNames("pixel-button", `pixel-button--${tone}`, className), ...props });
}
