import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PixelBadge } from "./PixelBadge.js";
export function PixelOperationSummary({ label, operation, artifactCount, deterministic = false, sourcePreserved = false, tone = "cyan" }) {
    const countLabel = `${artifactCount} ARTIFACT${artifactCount === 1 ? "" : "S"}`;
    return _jsxs("section", { className: "pixel-operation-summary", "aria-label": label, children: [_jsxs("div", { className: "pixel-operation-summary__heading", children: [_jsx("h2", { children: label }), _jsx(PixelBadge, { tone: tone, children: countLabel })] }), _jsx("code", { children: operation }), _jsxs("div", { className: "pixel-operation-summary__guarantees", children: [_jsx(PixelBadge, { tone: deterministic ? "cyan" : "amber", children: deterministic ? "DETERMINISTIC" : "REVIEW REQUIRED" }), _jsx(PixelBadge, { tone: sourcePreserved ? "cyan" : "amber", children: sourcePreserved ? "SOURCE PRESERVED" : "SOURCE CHECK" })] })] });
}
