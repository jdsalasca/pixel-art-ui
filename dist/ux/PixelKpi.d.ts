import type { ReactNode } from "react";
export interface PixelKpiProps {
    label: string;
    value: ReactNode;
    detail?: ReactNode;
    tone?: "cyan" | "amber" | "pink" | "danger";
}
export declare function PixelKpi({ label, value, detail, tone }: PixelKpiProps): import("react").JSX.Element;
//# sourceMappingURL=PixelKpi.d.ts.map