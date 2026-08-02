import type { HTMLAttributes, PropsWithChildren } from "react";
import type { PixelTone } from "../model/PixelTone.js";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelPanelProps extends HTMLAttributes<HTMLElement> { title?: string; accent?: PixelTone; }

export function PixelPanel({ title, accent = "cyan", className = "", children, ...props }: PropsWithChildren<PixelPanelProps>) {
  return <section className={pixelClassNames("pixel-panel", `pixel-panel--${accent}`, className)} {...props}>{title ? <h2 className="pixel-panel__title">{title}</h2> : null}{children}</section>;
}
