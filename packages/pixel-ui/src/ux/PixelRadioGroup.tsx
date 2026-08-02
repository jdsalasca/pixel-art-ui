import type { ChangeEvent } from "react";
export interface PixelRadioOption { value: string; label: string; }
export interface PixelRadioGroupProps { label: string; options: PixelRadioOption[]; value: string; onChange(value: string): void; disabled?: boolean; }
export function PixelRadioGroup({ label, options, value, onChange, disabled = false }: PixelRadioGroupProps) { return <fieldset className="pixel-radio-group"><legend>{label}</legend>{options.map((option) => <label key={option.value}><input type="radio" name={label} value={option.value} checked={value === option.value} disabled={disabled} onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)} />{option.label}</label>)}</fieldset>; }
