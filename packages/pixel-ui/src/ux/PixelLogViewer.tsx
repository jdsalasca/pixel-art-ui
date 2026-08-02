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
}

export function PixelLogViewer({ entries, emptyLabel = "NO OPERATIONS YET", className = "", ...props }: PixelLogViewerProps) {
  return <div className={pixelClassNames("pixel-log-viewer", className)} {...props}>
    {entries.length === 0 ? <p className="pixel-log-viewer__empty">{emptyLabel}</p> : <ol aria-live="polite" aria-label="Operation log">
      {entries.map((entry) => <li key={entry.id} className={`pixel-log-viewer__entry pixel-log-viewer__entry--${entry.status}`}>
        <time dateTime={entry.timestamp}>{entry.timestamp}</time>
        <strong>{entry.title}</strong>
        {entry.detail ? <span>{entry.detail}</span> : null}
      </li>)}
    </ol>}
  </div>;
}
