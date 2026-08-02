import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelSelect({ label, id, className = "", children, ...props }) {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    return _jsxs("label", { className: pixelClassNames("pixel-select", className), htmlFor: selectId, children: [_jsx("span", { className: "pixel-select__label", children: label }), _jsx("select", { id: selectId, ...props, children: children })] });
}
