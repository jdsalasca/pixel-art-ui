import type { ButtonHTMLAttributes } from "react";
import { pixelClassNames, type PixelToneProps } from "../model/pixelClassNames.js";

export interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PixelToneProps {}

export function PixelButton({ tone = "cyan", className = "", ...props }: PixelButtonProps) {
  return <button className={pixelClassNames("pixel-button", `pixel-button--${tone}`, className)} {...props} />;
}
