import type { HTMLAttributes, PropsWithChildren } from "react";
import { pixelClassNames, type PixelToneProps } from "../model/pixelClassNames.js";

export interface PixelNoticeProps extends HTMLAttributes<HTMLDivElement>, PixelToneProps {
  title?: string;
}

export function PixelNotice({ tone = "neutral", title, className = "", children, role, ...props }: PropsWithChildren<PixelNoticeProps>) {
  const semanticRole = role ?? (tone === "danger" ? "alert" : "status");
  return <div className={pixelClassNames("pixel-notice", `pixel-notice--${tone}`, className)} role={semanticRole} aria-live={tone === "danger" ? "assertive" : "polite"} {...props}>
    {title ? <strong className="pixel-notice__title">{title}</strong> : null}
    <div className="pixel-notice__body">{children}</div>
  </div>;
}
