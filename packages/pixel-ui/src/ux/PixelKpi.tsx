import type { ReactNode } from "react";
export interface PixelKpiProps { label: string; value: ReactNode; detail?: ReactNode; tone?: "cyan" | "amber" | "pink" | "danger"; }
export function PixelKpi({ label, value, detail, tone = "cyan" }: PixelKpiProps) { return <article className={`pixel-kpi pixel-kpi--${tone}`}><span>{label}</span><strong>{value}</strong>{detail ? <small>{detail}</small> : null}</article>; }
