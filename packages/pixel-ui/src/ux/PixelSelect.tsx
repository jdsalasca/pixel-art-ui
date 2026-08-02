import type { SelectHTMLAttributes } from "react";
import { useId } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export function PixelSelect({ label, id, className = "", children, ...props }: PixelSelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  return <label className={pixelClassNames("pixel-select", className)} htmlFor={selectId}><span className="pixel-select__label">{label}</span><select id={selectId} {...props}>{children}</select></label>;
}
