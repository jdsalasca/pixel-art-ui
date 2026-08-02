import type { ReactNode } from "react";
import type { PixelTone } from "../model/PixelTone.js";
export interface PixelToastProps {
    tone?: PixelTone;
    title: string;
    children: ReactNode;
    onDismiss?: () => void;
}
export declare function PixelToast({ tone, title, children, onDismiss }: PixelToastProps): import("react").JSX.Element;
//# sourceMappingURL=PixelToast.d.ts.map