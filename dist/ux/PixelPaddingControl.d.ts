export interface PixelPaddingValue {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface PixelPaddingControlProps {
    label?: string;
    value: PixelPaddingValue;
    onChange(value: PixelPaddingValue): void;
    min?: number;
    max?: number;
    disabled?: boolean;
}
export declare function PixelPaddingControl({ label, value, onChange, min, max, disabled }: PixelPaddingControlProps): import("react").JSX.Element;
//# sourceMappingURL=PixelPaddingControl.d.ts.map