import type { InputHTMLAttributes } from "react";
import { useId } from "react";

export interface PixelFieldProps extends InputHTMLAttributes<HTMLInputElement> { label: string; }

export function PixelField({ label, id, className = "", ...props }: PixelFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return <label className={`pixel-field ${className}`.trim()} htmlFor={fieldId}><span className="pixel-field__label">{label}</span><input id={fieldId} {...props} /></label>;
}
