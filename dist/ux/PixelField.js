import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelField({ label, id, className = "", ...props }) {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    return _jsxs("label", { className: pixelClassNames("pixel-field", className), htmlFor: fieldId, children: [_jsx("span", { className: "pixel-field__label", children: label }), _jsx("input", { id: fieldId, ...props })] });
}
