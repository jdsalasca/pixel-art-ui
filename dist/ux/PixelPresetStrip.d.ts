export interface PixelPresetOption {
    id: string;
    title: string;
    description?: string;
}
export interface PixelPresetStripProps {
    label?: string;
    options: readonly PixelPresetOption[];
    selectedId?: string;
    onSelect(id: string): void;
    disabled?: boolean;
}
export declare function PixelPresetStrip({ label, options, selectedId, onSelect, disabled }: PixelPresetStripProps): import("react").JSX.Element;
//# sourceMappingURL=PixelPresetStrip.d.ts.map