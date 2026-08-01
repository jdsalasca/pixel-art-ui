import type { HTMLAttributes, PropsWithChildren } from "react";
import type { PixelTone } from "../model/PixelTone.js";

export interface PixelPanelProps extends HTMLAttributes<HTMLElement> { title?: string; accent?: PixelTone; }

export function PixelPanel({ title, accent = "cyan", className = "", children, ...props }: PropsWithChildren<PixelPanelProps>) {
  return <section className={`pixel-panel pixel-panel--${accent} ${className}`.trim()} {...props}>{title ? <h2 className="pixel-panel__title">{title}</h2> : null}{children}</section>;
}
