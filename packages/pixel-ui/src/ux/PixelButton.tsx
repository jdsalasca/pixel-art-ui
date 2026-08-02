import type { ButtonHTMLAttributes } from "react";
import type { PixelTone } from "../model/PixelTone.js";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { tone?: PixelTone; }

export function PixelButton({ tone = "cyan", className = "", ...props }: PixelButtonProps) {
  return <button className={pixelClassNames("pixel-button", `pixel-button--${tone}`, className)} {...props} />;
}
