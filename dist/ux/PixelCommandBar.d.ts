import type { InputHTMLAttributes, ReactNode } from "react";
export interface PixelCommandBarProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onValueChange(value: string): void;
    action?: ReactNode;
}
export declare function PixelCommandBar({ value, onValueChange, action, className, ...props }: PixelCommandBarProps): import("react").JSX.Element;
//# sourceMappingURL=PixelCommandBar.d.ts.map