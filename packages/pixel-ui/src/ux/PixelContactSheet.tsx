import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelContactSheetProps extends HTMLAttributes<HTMLElement> {
  src: string;
  assets: number;
  columns: number;
  rows: number;
  cellWidth: number;
  cellHeight: number;
  manifestUrl?: string;
}

export function PixelContactSheet({ src, assets, columns, rows, cellWidth, cellHeight, manifestUrl, className = "", ...props }: PixelContactSheetProps) {
  return <section className={pixelClassNames("pixel-contact-sheet", className)} aria-label="Contact sheet preview" {...props}>
    <div className="pixel-contact-sheet__heading"><h2>CONTACT SHEET</h2><span>{assets} ASSETS</span></div>
    <img src={src} alt="Generated contact sheet" className="pixel-contact-sheet__image" />
    <dl className="pixel-contact-sheet__meta"><div><dt>GRID</dt><dd>{columns} × {rows}</dd></div><div><dt>CELL</dt><dd>{cellWidth} × {cellHeight}</dd></div>{manifestUrl ? <div><dt>MANIFEST</dt><dd><a href={manifestUrl}>OPEN JSON</a></dd></div> : null}</dl>
  </section>;
}
