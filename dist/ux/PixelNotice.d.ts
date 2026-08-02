import type { HTMLAttributes, PropsWithChildren } from "react";
import type { PixelTone } from "../model/PixelTone.js";
export interface PixelNoticeProps extends HTMLAttributes<HTMLDivElement> {
    tone?: PixelTone;
    title?: string;
}
export declare function PixelNotice({ tone, title, className, children, role, ...props }: PropsWithChildren<PixelNoticeProps>): import("react").JSX.Element;
//# sourceMappingURL=PixelNotice.d.ts.map