import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export type PixelLogStatus = "started" | "success" | "failure" | "info";

export interface PixelLogEntry {
  id: string;
  timestamp: string;
  title: string;
  status: PixelLogStatus;
  detail?: string;
}

export interface PixelLogViewerProps extends HTMLAttributes<HTMLDivElement> {
  entries: readonly PixelLogEntry[];
  emptyLabel?: string;
  maxEntries?: number;
}

export function PixelLogViewer({ entries, emptyLabel = "NO OPERATIONS YET", maxEntries = 100, className = "", ...props }: PixelLogViewerProps) {
  const limit = Number.isFinite(maxEntries) ? Math.max(0, Math.floor(maxEntries)) : 100;
  const visibleEntries = limit === 0 ? [] : entries.slice(-limit);
  const omittedCount = entries.length - visibleEntries.length;
  return <div className={pixelClassNames("pixel-log-viewer", className)} {...props}>
    {visibleEntries.length === 0 ? <p className="pixel-log-viewer__empty">{emptyLabel}</p> : <ol aria-live="polite" aria-label="Operation log">
      {visibleEntries.map((entry) => <li key={entry.id} className={`pixel-log-viewer__entry pixel-log-viewer__entry--${entry.status}`}>
        <time dateTime={entry.timestamp}>{entry.timestamp}</time>
        <strong>{entry.title}</strong>
        {entry.detail ? <span>{entry.detail}</span> : null}
      </li>)}
    </ol>}
    {omittedCount > 0 ? <p className="pixel-log-viewer__omitted">{omittedCount} older event{omittedCount === 1 ? "" : "s"} omitted</p> : null}
  </div>;
}
