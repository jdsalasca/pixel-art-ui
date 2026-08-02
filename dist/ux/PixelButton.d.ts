import type { ButtonHTMLAttributes } from "react";
import { type PixelToneProps } from "../model/pixelClassNames.js";
export interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PixelToneProps {
}
export declare function PixelButton({ tone, className, ...props }: PixelButtonProps): import("react").JSX.Element;
//# sourceMappingURL=PixelButton.d.ts.map