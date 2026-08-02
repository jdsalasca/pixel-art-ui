import type { InputHTMLAttributes, ReactNode } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";
export interface PixelCommandBarProps extends InputHTMLAttributes<HTMLInputElement> { value: string; onValueChange(value: string): void; action?: ReactNode; }
export function PixelCommandBar({ value, onValueChange, action, className = "", ...props }: PixelCommandBarProps) { return <div className={pixelClassNames("pixel-command-bar", className)}><input {...props} value={value} onChange={(event) => onValueChange(event.target.value)} aria-label={props["aria-label"] ?? "Command search"} />{action}</div>; }
