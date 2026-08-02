import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelPaletteSwatch { color: string; count?: number; }
export interface PixelPaletteStripProps extends HTMLAttributes<HTMLElement> { label?: string; colors: readonly PixelPaletteSwatch[]; }

export function PixelPaletteStrip({ label = "Palette", colors, className = "", ...props }: PixelPaletteStripProps) {
  return <section className={pixelClassNames("pixel-palette-strip", className)} aria-label={label} {...props}>
    <h2 className="pixel-palette-strip__label">{label}</h2>
    {colors.length === 0 ? <p className="pixel-palette-strip__empty">NO COLORS</p> : <div className="pixel-palette-strip__swatches" role="list">{colors.map((swatch) => <span key={`${swatch.color}-${swatch.count ?? ""}`} role="listitem" className="pixel-palette-strip__swatch" style={{ backgroundColor: swatch.color }} aria-label={`${swatch.color}${swatch.count === undefined ? "" : ` · ${swatch.count} pixels`}`} title={swatch.count === undefined ? swatch.color : `${swatch.color} · ${swatch.count} pixels`} />)}</div>}
  </section>;
}
