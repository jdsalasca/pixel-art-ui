import type { TextareaHTMLAttributes } from "react";
import { useId } from "react";

export interface PixelTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function PixelTextarea({ label, id, className = "", ...props }: PixelTextareaProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return <label className={`pixel-textarea ${className}`.trim()} htmlFor={fieldId}><span className="pixel-textarea__label">{label}</span><textarea id={fieldId} {...props} /></label>;
}
