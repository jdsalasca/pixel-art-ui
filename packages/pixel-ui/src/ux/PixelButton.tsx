import type { ButtonProps } from "../model/buttonContracts.js";
import { pixelClassNames, type PixelToneProps } from "../model/pixelClassNames.js";

export interface PixelButtonProps extends ButtonProps, PixelToneProps {}

export function PixelButton({ tone = "cyan", className = "", ...props }: PixelButtonProps) {
  return <button className={pixelClassNames("pixel-button", `pixel-button--${tone}`, className)} {...props} />;
}
