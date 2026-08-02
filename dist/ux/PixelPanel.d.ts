import type { HTMLAttributes, PropsWithChildren } from "react";
import type { PixelTone } from "../model/PixelTone.js";
export interface PixelPanelProps extends HTMLAttributes<HTMLElement> {
    title?: string;
    accent?: PixelTone;
}
export declare function PixelPanel({ title, accent, className, children, ...props }: PropsWithChildren<PixelPanelProps>): import("react").JSX.Element;
//# sourceMappingURL=PixelPanel.d.ts.map