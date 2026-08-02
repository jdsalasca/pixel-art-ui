import type { ReactNode } from "react";
import { PixelButton } from "./PixelButton.js";

export interface PixelToolCardProps { name: string; description: string; status?: ReactNode; onRun?: () => void; }

export function PixelToolCard({ name, description, status, onRun }: PixelToolCardProps) {
  return <article className="pixel-tool-card"><div><h3>{name}</h3><p>{description}</p></div><div className="pixel-tool-card__actions">{status}{onRun ? <PixelButton onClick={onRun}>RUN</PixelButton> : null}</div></article>;
}
