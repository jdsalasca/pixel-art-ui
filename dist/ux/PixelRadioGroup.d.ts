export interface PixelRadioOption {
    value: string;
    label: string;
}
export interface PixelRadioGroupProps {
    label: string;
    options: PixelRadioOption[];
    value: string;
    onChange(value: string): void;
    disabled?: boolean;
}
export declare function PixelRadioGroup({ label, options, value, onChange, disabled }: PixelRadioGroupProps): import("react").JSX.Element;
//# sourceMappingURL=PixelRadioGroup.d.ts.map