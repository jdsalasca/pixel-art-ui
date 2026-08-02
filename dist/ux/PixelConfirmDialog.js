import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { PixelButton } from "./PixelButton.js";
export function PixelConfirmDialog({ open, title, children, confirmLabel = "CONFIRM", onConfirm, onCancel }) { const titleId = useId(); if (!open)
    return null; return _jsx("div", { className: "pixel-dialog-backdrop", children: _jsxs("section", { className: "pixel-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": titleId, children: [_jsx("h2", { id: titleId, children: title }), _jsx("div", { children: children }), _jsxs("footer", { children: [_jsx(PixelButton, { tone: "neutral", onClick: onCancel, children: "CANCEL" }), _jsx(PixelButton, { tone: "danger", onClick: onConfirm, children: confirmLabel })] })] }) }); }
