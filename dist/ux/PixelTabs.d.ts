import type { ReactNode } from "react";
export interface PixelTab {
    id: string;
    label: string;
    content: ReactNode;
}
export interface PixelTabsProps {
    tabs: PixelTab[];
    activeId?: string;
    onChange?(id: string): void;
}
export declare function PixelTabs({ tabs, activeId, onChange }: PixelTabsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelTabs.d.ts.map