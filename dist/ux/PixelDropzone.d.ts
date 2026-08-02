import type { HTMLAttributes, PropsWithChildren } from "react";
export interface PixelDropzoneProps extends HTMLAttributes<HTMLLabelElement> {
    accept?: string;
    onFiles?: (files: File[]) => void;
}
export declare function PixelDropzone({ accept, onFiles, className, children, ...props }: PropsWithChildren<PixelDropzoneProps>): import("react").JSX.Element;
//# sourceMappingURL=PixelDropzone.d.ts.map