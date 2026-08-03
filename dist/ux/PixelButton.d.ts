import type { ButtonProps } from "../model/buttonContracts.js";
import { type PixelToneProps } from "../model/pixelClassNames.js";
export interface PixelButtonProps extends ButtonProps, PixelToneProps {
}
export declare function PixelButton({ tone, className, ...props }: PixelButtonProps): import("react").JSX.Element;
//# sourceMappingURL=PixelButton.d.ts.map