import type { HTMLAttributes } from "react";
export interface PixelContactSheetProps extends HTMLAttributes<HTMLElement> {
    src: string;
    assets: number;
    columns: number;
    rows: number;
    cellWidth: number;
    cellHeight: number;
    manifestUrl?: string;
}
export declare function PixelContactSheet({ src, assets, columns, rows, cellWidth, cellHeight, manifestUrl, className, ...props }: PixelContactSheetProps): import("react").JSX.Element;
//# sourceMappingURL=PixelContactSheet.d.ts.map