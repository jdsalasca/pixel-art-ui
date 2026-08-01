import type { ButtonHTMLAttributes } from "react";
import type { PixelTone } from "../model/PixelTone.js";

export interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { tone?: PixelTone; }

export function PixelButton({ tone = "cyan", className = "", ...props }: PixelButtonProps) {
  return <button className={`pixel-button pixel-button--${tone} ${className}`.trim()} {...props} />;
}
