import type { HTMLAttributes } from "react";

export interface PixelProgressProps extends HTMLAttributes<HTMLDivElement> { value: number; label?: string; }

export function PixelProgress({ value, label, className = "", ...props }: PixelProgressProps) {
  const bounded = Math.max(0, Math.min(100, value));
  return <div className={`pixel-progress ${className}`.trim()} {...props}><div className="pixel-progress__label">{label ? <span>{label}</span> : <span className="sr-only">Progress</span>}<span>{bounded}%</span></div><div className="pixel-progress__track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={bounded} aria-label={label ?? "Progress"}><div className="pixel-progress__fill" style={{ width: `${bounded}%` }} /></div></div>;
}
