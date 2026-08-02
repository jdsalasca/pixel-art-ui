import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelDropzone({ accept = ".png,.gif,.webp,.aseprite", onFiles, className = "", children, ...props }) {
    return _jsxs("label", { className: pixelClassNames("pixel-dropzone", className), ...props, children: [_jsx("input", { type: "file", accept: accept, multiple: true, hidden: true, onChange: (event) => onFiles?.([...event.target.files ?? []]) }), children ?? _jsxs(_Fragment, { children: [_jsx("strong", { children: "DROP ASSET" }), _jsx("span", { children: "PNG \u00B7 GIF \u00B7 WEBP \u00B7 ASEPRITE" })] })] });
}
