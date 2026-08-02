import { PixelField } from "./PixelField.js";

export interface PixelPaddingValue { top: number; right: number; bottom: number; left: number; }
export interface PixelPaddingControlProps { label?: string; value: PixelPaddingValue; onChange(value: PixelPaddingValue): void; min?: number; max?: number; disabled?: boolean; }

type Side = keyof PixelPaddingValue;

export function PixelPaddingControl({ label = "Padding", value, onChange, min = 0, max = 512, disabled = false }: PixelPaddingControlProps) {
  function update(side: Side, rawValue: string): void {
    const parsed = Number(rawValue);
    const next = Number.isFinite(parsed) ? Math.max(min, Math.min(max, Math.round(parsed))) : min;
    onChange({ ...value, [side]: next });
  }

  return <fieldset className="pixel-padding-control" aria-label={label} disabled={disabled}>
    <legend className="pixel-padding-control__label">{label}</legend>
    <div className="pixel-padding-control__grid">
      <PixelField label="TOP" type="number" min={min} max={max} value={value.top} onChange={(event) => update("top", event.target.value)} disabled={disabled} />
      <PixelField label="RIGHT" type="number" min={min} max={max} value={value.right} onChange={(event) => update("right", event.target.value)} disabled={disabled} />
      <PixelField label="BOTTOM" type="number" min={min} max={max} value={value.bottom} onChange={(event) => update("bottom", event.target.value)} disabled={disabled} />
      <PixelField label="LEFT" type="number" min={min} max={max} value={value.left} onChange={(event) => update("left", event.target.value)} disabled={disabled} />
    </div>
  </fieldset>;
}

