import type { HTMLAttributes } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";

export interface PixelQualityGateProps extends HTMLAttributes<HTMLDivElement> {
  valid: boolean;
  violations?: string[];
  label?: string;
}

export function PixelQualityGate({ valid, violations = [], label = "QUALITY GATE", className = "", ...props }: PixelQualityGateProps) {
  const tone = valid ? "valid" : "invalid";
  return <div className={pixelClassNames("pixel-quality-gate", `pixel-quality-gate--${tone}`, className)} role={valid ? "status" : "alert"} aria-live={valid ? "polite" : "assertive"} {...props}>
    <div className="pixel-quality-gate__summary"><strong>{label}</strong><span>{valid ? "PASS" : `${violations.length} ALERT${violations.length === 1 ? "" : "S"}`}</span></div>
    {violations.length ? <ul className="pixel-quality-gate__violations">{violations.map((violation, index) => <li key={`${violation}-${index}`}>{violation}</li>)}</ul> : null}
  </div>;
}
