import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
export function PixelPresetStrip({ label = "Presets", options, selectedId, onSelect, disabled = false }) {
    return _jsxs("section", { className: "pixel-preset-strip", "aria-label": label, children: [_jsx("span", { className: "pixel-preset-strip__label", children: label }), _jsx("div", { className: "pixel-preset-strip__options", role: "listbox", "aria-label": label, children: options.map((option) => _jsx("button", { type: "button", className: pixelClassNames("pixel-preset-strip__option", option.id === selectedId && "is-selected"), role: "option", "aria-selected": option.id === selectedId, title: option.description, disabled: disabled, onClick: () => onSelect(option.id), children: option.title }, option.id)) })] });
}
