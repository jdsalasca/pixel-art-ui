export interface PixelCheckboxOption {
    value: string;
    label: string;
}
export interface PixelCheckboxGroupProps {
    label: string;
    options: PixelCheckboxOption[];
    values: string[];
    onChange(values: string[]): void;
    disabled?: boolean;
}
export declare function PixelCheckboxGroup({ label, options, values, onChange, disabled }: PixelCheckboxGroupProps): import("react").JSX.Element;
//# sourceMappingURL=PixelCheckboxGroup.d.ts.map