import type { HTMLAttributes } from "react";
import type { PixelTone } from "../model/PixelTone.js";

export interface PixelBadgeProps extends HTMLAttributes<HTMLSpanElement> { tone?: PixelTone; }

export function PixelBadge({ tone = "neutral", className = "", ...props }: PixelBadgeProps) {
  return <span className={`pixel-badge pixel-badge--${tone} ${className}`.trim()} {...props} />;
}
