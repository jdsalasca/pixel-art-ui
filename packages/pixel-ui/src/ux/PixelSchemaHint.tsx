import type { HTMLAttributes } from "react";

export interface PixelSchemaHintProps extends HTMLAttributes<HTMLDetailsElement> {
  schema?: Record<string, unknown>;
}

interface SchemaProperty {
  type?: string;
  description?: string;
}

function isProperty(value: unknown): value is SchemaProperty {
  return typeof value === "object" && value !== null;
}

export function PixelSchemaHint({ schema, className = "", ...props }: PixelSchemaHintProps) {
  const properties = schema?.properties;
  const entries = properties && typeof properties === "object" ? Object.entries(properties).filter(([, value]) => isProperty(value)) : [];
  const required = new Set(Array.isArray(schema?.required) ? schema.required.filter((value): value is string => typeof value === "string") : []);
  if (entries.length === 0) return null;
  return <details className={`pixel-schema-hint ${className}`.trim()} {...props}>
    <summary>ARGUMENT CONTRACT · {entries.length} FIELDS</summary>
    <ul>{entries.map(([name, value]) => <li key={name}><code>{name}</code><span>{value.type ?? "value"}{required.has(name) ? " · required" : " · optional"}</span>{value.description ? <small>{value.description}</small> : null}</li>)}</ul>
  </details>;
}
