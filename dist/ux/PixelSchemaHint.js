import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { pixelClassNames } from "../model/pixelClassNames.js";
function isProperty(value) {
    return typeof value === "object" && value !== null;
}
export function PixelSchemaHint({ schema, className = "", ...props }) {
    const properties = schema?.properties;
    const entries = properties && typeof properties === "object" ? Object.entries(properties).filter(([, value]) => isProperty(value)) : [];
    const required = new Set(Array.isArray(schema?.required) ? schema.required.filter((value) => typeof value === "string") : []);
    if (entries.length === 0)
        return null;
    return _jsxs("details", { className: pixelClassNames("pixel-schema-hint", className), ...props, children: [_jsxs("summary", { children: ["ARGUMENT CONTRACT \u00B7 ", entries.length, " FIELDS"] }), _jsx("ul", { children: entries.map(([name, value]) => _jsxs("li", { children: [_jsx("code", { children: name }), _jsxs("span", { children: [value.type ?? "value", required.has(name) ? " · required" : " · optional"] }), value.description ? _jsx("small", { children: value.description }) : null] }, name)) })] });
}
