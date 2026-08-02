import type { ReactNode } from "react";
import type { PixelTone } from "../model/PixelTone.js";
export interface PixelToastProps { tone?: PixelTone; title: string; children: ReactNode; onDismiss?: () => void; }
export function PixelToast({ tone = "cyan", title, children, onDismiss }: PixelToastProps) { return <div className={`pixel-toast pixel-toast--${tone}`} role="status" aria-live="polite"><strong>{title}</strong><span>{children}</span>{onDismiss ? <button type="button" onClick={onDismiss} aria-label="Dismiss notification">×</button> : null}</div>; }
