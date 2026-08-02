import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelAnimationSheetProps extends HTMLAttributes<HTMLElement> {
  src?: string;
  frames: number;
  columns: number;
  rows: number;
  width: number;
  height: number;
  cellWidth: number;
  cellHeight: number;
  padding: number;
  manifestUrl?: string;
}

export function PixelAnimationSheet({ src, frames, columns, rows, width, height, cellWidth, cellHeight, padding, manifestUrl, className = "", ...props }: PixelAnimationSheetProps) {
  return <section className={pixelClassNames("pixel-animation-sheet", className)} aria-label="Animation sheet preview" {...props}>
    <header className="pixel-animation-sheet__heading"><h2>ANIMATION SHEET</h2><span>{frames} FRAMES</span></header>
    {src ? <img className="pixel-animation-sheet__image" src={src} alt="Animation sheet preview" /> : null}
    <dl className="pixel-animation-sheet__meta"><div><dt>GRID</dt><dd>{columns} × {rows}</dd></div><div><dt>SHEET</dt><dd>{width} × {height}</dd></div><div><dt>CELL</dt><dd>{cellWidth} × {cellHeight}</dd></div><div><dt>PADDING</dt><dd>{padding}px</dd></div>{manifestUrl ? <div><dt>MANIFEST</dt><dd><a href={manifestUrl}>OPEN JSON</a></dd></div> : null}</dl>
  </section>;
}
