import type { ReactNode } from "react";
export interface PixelEmptyStateProps { title: string; children?: ReactNode; action?: ReactNode; }
export function PixelEmptyState({ title, children, action }: PixelEmptyStateProps) { return <section className="pixel-empty-state" role="status"><strong>{title}</strong>{children ? <p>{children}</p> : null}{action}</section>; }
