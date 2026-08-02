import type { ReactNode } from "react";
import { useId } from "react";
import { PixelButton } from "./PixelButton.js";
export interface PixelConfirmDialogProps { open: boolean; title: string; children: ReactNode; confirmLabel?: string; onConfirm(): void; onCancel(): void; }
export function PixelConfirmDialog({ open, title, children, confirmLabel = "CONFIRM", onConfirm, onCancel }: PixelConfirmDialogProps) { const titleId = useId(); if (!open) return null; return <div className="pixel-dialog-backdrop"><section className="pixel-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}><h2 id={titleId}>{title}</h2><div>{children}</div><footer><PixelButton tone="neutral" onClick={onCancel}>CANCEL</PixelButton><PixelButton tone="danger" onClick={onConfirm}>{confirmLabel}</PixelButton></footer></section></div>; }
