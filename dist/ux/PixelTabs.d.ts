import type { HTMLAttributes, ReactNode } from "react";
export interface PixelTab {
    id: string;
    label: string;
    content: ReactNode;
}
export interface PixelTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    tabs: PixelTab[];
    activeId?: string;
    onChange?(id: string): void;
}
export declare function PixelTabs({ tabs, activeId, onChange, className, ...props }: PixelTabsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelTabs.d.ts.map