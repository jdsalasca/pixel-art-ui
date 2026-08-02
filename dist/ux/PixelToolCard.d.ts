import type { ReactNode } from "react";
export interface PixelToolCardProps {
    name: string;
    description: string;
    status?: ReactNode;
    onRun?: () => void;
}
export declare function PixelToolCard({ name, description, status, onRun }: PixelToolCardProps): import("react").JSX.Element;
//# sourceMappingURL=PixelToolCard.d.ts.map