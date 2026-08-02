import type { TextareaHTMLAttributes } from "react";
import { useId } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function PixelTextarea({ label, id, className = "", ...props }: PixelTextareaProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return <label className={pixelClassNames("pixel-textarea", className)} htmlFor={fieldId}><span className="pixel-textarea__label">{label}</span><textarea id={fieldId} {...props} /></label>;
}
