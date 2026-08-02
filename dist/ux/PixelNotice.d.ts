import type { HTMLAttributes, PropsWithChildren } from "react";
import { type PixelToneProps } from "../model/pixelClassNames.js";
export interface PixelNoticeProps extends HTMLAttributes<HTMLDivElement>, PixelToneProps {
    title?: string;
}
export declare function PixelNotice({ tone, title, className, children, role, ...props }: PropsWithChildren<PixelNoticeProps>): import("react").JSX.Element;
//# sourceMappingURL=PixelNotice.d.ts.map