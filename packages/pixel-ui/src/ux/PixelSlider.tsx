import type { InputHTMLAttributes } from "react";
import { useId } from "react";
export interface PixelSliderProps extends InputHTMLAttributes<HTMLInputElement> { label: string; }
export function PixelSlider({ label, id, className = "", ...props }: PixelSliderProps) { const generatedId = useId(); const fieldId = id ?? generatedId; return <label className={`pixel-slider ${className}`.trim()} htmlFor={fieldId}><span className="pixel-slider__label">{label}</span><input id={fieldId} type="range" {...props} /></label>; }
