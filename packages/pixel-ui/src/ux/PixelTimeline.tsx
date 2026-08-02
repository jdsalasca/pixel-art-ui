import type { HTMLAttributes, ReactNode } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export type PixelTimelineState = "complete" | "current" | "pending" | "error";
export interface PixelTimelineItem { id: string; label: string; detail?: ReactNode; state?: PixelTimelineState; }
export interface PixelTimelineProps extends Omit<HTMLAttributes<HTMLOListElement>, "onSelect"> { items: readonly PixelTimelineItem[]; activeId?: string; onSelect?(id: string): void; }

export function PixelTimeline({ items, activeId, onSelect, className = "", ...props }: PixelTimelineProps) {
  return <ol className={pixelClassNames("pixel-timeline", className)} {...props}>{items.map((item) => {
    const active = item.id === activeId || item.state === "current";
    const state = item.state ?? "pending";
    return <li key={item.id} className={pixelClassNames("pixel-timeline__item", `pixel-timeline__item--${state}`, active && "is-active")}>
      <button type="button" className="pixel-timeline__button" aria-current={active ? "step" : undefined} disabled={!onSelect} onClick={() => onSelect?.(item.id)}>
        <span className="pixel-timeline__marker" aria-hidden="true" />
        <strong>{item.label}</strong>
        {item.detail ? <small>{item.detail}</small> : null}
      </button>
    </li>;
  })}</ol>;
}
