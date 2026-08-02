import type { HTMLAttributes, PropsWithChildren } from "react";
import type { PixelTone } from "../model/PixelTone.js";
import { type PixelToneProps } from "../model/pixelClassNames.js";
export interface PixelPanelProps extends HTMLAttributes<HTMLElement>, PixelToneProps {
    title?: string;
    accent?: PixelTone;
}
export declare function PixelPanel({ title, accent, className, children, ...props }: PropsWithChildren<PixelPanelProps>): import("react").JSX.Element;
//# sourceMappingURL=PixelPanel.d.ts.map