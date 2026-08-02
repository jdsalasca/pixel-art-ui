import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PixelField } from "./PixelField.js";
export function PixelPaddingControl({ label = "Padding", value, onChange, min = 0, max = 512, disabled = false }) {
    function update(side, rawValue) {
        const parsed = Number(rawValue);
        const next = Number.isFinite(parsed) ? Math.max(min, Math.min(max, Math.round(parsed))) : min;
        onChange({ ...value, [side]: next });
    }
    return _jsxs("fieldset", { className: "pixel-padding-control", "aria-label": label, disabled: disabled, children: [_jsx("legend", { className: "pixel-padding-control__label", children: label }), _jsxs("div", { className: "pixel-padding-control__grid", children: [_jsx(PixelField, { label: "TOP", type: "number", min: min, max: max, value: value.top, onChange: (event) => update("top", event.target.value), disabled: disabled }), _jsx(PixelField, { label: "RIGHT", type: "number", min: min, max: max, value: value.right, onChange: (event) => update("right", event.target.value), disabled: disabled }), _jsx(PixelField, { label: "BOTTOM", type: "number", min: min, max: max, value: value.bottom, onChange: (event) => update("bottom", event.target.value), disabled: disabled }), _jsx(PixelField, { label: "LEFT", type: "number", min: min, max: max, value: value.left, onChange: (event) => update("left", event.target.value), disabled: disabled })] })] });
}
