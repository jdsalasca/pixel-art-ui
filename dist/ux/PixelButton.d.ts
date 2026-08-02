import type { ButtonHTMLAttributes } from "react";
import type { PixelTone } from "../model/PixelTone.js";
export interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    tone?: PixelTone;
}
export declare function PixelButton({ tone, className, ...props }: PixelButtonProps): import("react").JSX.Element;
//# sourceMappingURL=PixelButton.d.ts.map