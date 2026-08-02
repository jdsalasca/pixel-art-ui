import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelCommandBar({ value, onValueChange, action, className = "", ...props }) { return _jsxs("div", { className: pixelClassNames("pixel-command-bar", className), children: [_jsx("input", { ...props, value: value, onChange: (event) => onValueChange(event.target.value), "aria-label": props["aria-label"] ?? "Command search" }), action] }); }
