import type { CSSProperties, HTMLAttributes } from "react";

export interface PixelCompareProps extends HTMLAttributes<HTMLDivElement> {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  position?: number;
  onPositionChange?: (position: number) => void;
}

function boundedPosition(value: number): number {
  if (!Number.isFinite(value)) return 50;
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function PixelCompare({ before, after, beforeAlt = "Original asset", afterAlt = "Enhanced asset", position = 50, onPositionChange, className = "", ...props }: PixelCompareProps) {
  const bounded = boundedPosition(position);
  const style = { "--pixel-compare-position": `${bounded}%` } as CSSProperties;
  return <div className={`pixel-compare ${className}`.trim()} style={style} {...props}>
    <img className="pixel-compare__image" src={before} alt={beforeAlt} />
    <div className="pixel-compare__after" aria-hidden="true"><img className="pixel-compare__image" src={after} alt={afterAlt} /></div>
    <div className="pixel-compare__labels" aria-hidden="true"><span>ORIGINAL</span><span>OUTPUT</span></div>
    <input className="pixel-compare__range" type="range" min={0} max={100} value={bounded} aria-valuemin={0} aria-valuemax={100} aria-valuenow={bounded} aria-label="Compare original and output" onChange={(event) => onPositionChange?.(Number(event.target.value))} />
  </div>;
}
