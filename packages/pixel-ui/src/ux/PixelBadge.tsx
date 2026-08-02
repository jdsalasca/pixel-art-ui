import type { HTMLAttributes } from "react";
import { pixelClassNames, type PixelToneProps } from "../model/pixelClassNames.js";

export interface PixelBadgeProps extends HTMLAttributes<HTMLSpanElement>, PixelToneProps {}

export function PixelBadge({ tone = "neutral", className = "", ...props }: PixelBadgeProps) {
  return <span className={pixelClassNames("pixel-badge", `pixel-badge--${tone}`, className)} {...props} />;
}
