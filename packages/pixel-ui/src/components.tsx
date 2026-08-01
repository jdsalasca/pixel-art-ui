import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { useId } from "react";

export type PixelTone = "cyan" | "amber" | "pink" | "danger" | "neutral";

export interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: PixelTone;
}

export function PixelButton({ tone = "cyan", className = "", ...props }: PixelButtonProps) {
  return <button className={`pixel-button pixel-button--${tone} ${className}`.trim()} {...props} />;
}

export interface PixelPanelProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  accent?: PixelTone;
}

export function PixelPanel({ title, accent = "cyan", className = "", children, ...props }: PropsWithChildren<PixelPanelProps>) {
  return (
    <section className={`pixel-panel pixel-panel--${accent} ${className}`.trim()} {...props}>
      {title ? <h2 className="pixel-panel__title">{title}</h2> : null}
      {children}
    </section>
  );
}

export interface PixelBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: PixelTone;
}

export function PixelBadge({ tone = "neutral", className = "", ...props }: PixelBadgeProps) {
  return <span className={`pixel-badge pixel-badge--${tone} ${className}`.trim()} {...props} />;
}

export interface PixelProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
}

export function PixelProgress({ value, label, className = "", ...props }: PixelProgressProps) {
  const bounded = Math.max(0, Math.min(100, value));
  return (
    <div className={`pixel-progress ${className}`.trim()} {...props}>
      {label ? <div className="pixel-progress__label"><span>{label}</span><span>{bounded}%</span></div> : null}
      <div className="pixel-progress__track"><div className="pixel-progress__fill" style={{ width: `${bounded}%` }} /></div>
    </div>
  );
}

export interface PixelFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function PixelField({ label, id, className = "", ...props }: PixelFieldProps) {
  const generatedId = useId();
  return (
    <label className={`pixel-field ${className}`.trim()} htmlFor={id ?? generatedId}>
      <span className="pixel-field__label">{label}</span>
      <input id={id ?? generatedId} {...props} />
    </label>
  );
}

export interface PixelToolCardProps {
  name: string;
  description: string;
  status?: ReactNode;
  onRun?: () => void;
}

export function PixelToolCard({ name, description, status, onRun }: PixelToolCardProps) {
  return (
    <article className="pixel-tool-card">
      <div><h3>{name}</h3><p>{description}</p></div>
      <div className="pixel-tool-card__actions">{status}{onRun ? <PixelButton onClick={onRun}>RUN</PixelButton> : null}</div>
    </article>
  );
}

export interface PixelDropzoneProps extends HTMLAttributes<HTMLLabelElement> {
  accept?: string;
  onFiles?: (files: File[]) => void;
}

export function PixelDropzone({ accept = ".png,.gif,.webp,.aseprite", onFiles, className = "", children, ...props }: PropsWithChildren<PixelDropzoneProps>) {
  return (
    <label className={`pixel-dropzone ${className}`.trim()} {...props}>
      <input type="file" accept={accept} multiple hidden onChange={(event) => onFiles?.([...event.target.files ?? []])} />
      {children ?? <><strong>DROP ASSET</strong><span>PNG · GIF · WEBP · ASEPRITE</span></>}
    </label>
  );
}
