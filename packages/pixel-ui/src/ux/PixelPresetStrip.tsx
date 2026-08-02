import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelPresetOption { id: string; title: string; description?: string; }
export interface PixelPresetStripProps { label?: string; options: readonly PixelPresetOption[]; selectedId?: string; onSelect(id: string): void; disabled?: boolean; }

export function PixelPresetStrip({ label = "Presets", options, selectedId, onSelect, disabled = false }: PixelPresetStripProps) {
  return <section className="pixel-preset-strip" aria-label={label}><span className="pixel-preset-strip__label">{label}</span><div className="pixel-preset-strip__options" role="listbox" aria-label={label}>{options.map((option) => <button key={option.id} type="button" className={pixelClassNames("pixel-preset-strip__option", option.id === selectedId && "is-selected")} role="option" aria-selected={option.id === selectedId} title={option.description} disabled={disabled} onClick={() => onSelect(option.id)}>{option.title}</button>)}</div></section>;
}
