import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelFrameItem {
  src: string;
  alt?: string;
  label?: string;
  durationMs?: number;
}

export interface PixelFrameStripProps extends HTMLAttributes<HTMLDivElement> {
  frames: readonly PixelFrameItem[];
  selectedIndex?: number;
  onSelectedIndexChange?: (index: number) => void;
}

function boundedIndex(value: number, length: number): number {
  if (length === 0 || !Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(length - 1, Math.round(value)));
}

export function PixelFrameStrip({ frames, selectedIndex = 0, onSelectedIndexChange, className = "", ...props }: PixelFrameStripProps) {
  const selected = boundedIndex(selectedIndex, frames.length);
  return <div className={pixelClassNames("pixel-frame-strip", className)} {...props}>
    {frames.length === 0 ? <p className="pixel-frame-strip__empty">NO FRAMES</p> : frames.map((frame, index) => (
      <button className={pixelClassNames("pixel-frame-strip__item", index === selected && "is-selected")} type="button" key={`${frame.src}-${index}`} aria-label={frame.label ?? `Frame ${index + 1}`} aria-pressed={index === selected} onClick={() => onSelectedIndexChange?.(index)}>
        <img src={frame.src} alt={frame.alt ?? frame.label ?? `Frame ${index + 1}`} />
        <span>{frame.label ?? `FRAME ${index + 1}`}</span>
        {frame.durationMs !== undefined ? <small>{frame.durationMs}ms</small> : null}
      </button>
    ))}
  </div>;
}
