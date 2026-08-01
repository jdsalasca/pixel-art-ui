import type { HTMLAttributes, PropsWithChildren } from "react";

export interface PixelDropzoneProps extends HTMLAttributes<HTMLLabelElement> { accept?: string; onFiles?: (files: File[]) => void; }

export function PixelDropzone({ accept = ".png,.gif,.webp,.aseprite", onFiles, className = "", children, ...props }: PropsWithChildren<PixelDropzoneProps>) {
  return <label className={`pixel-dropzone ${className}`.trim()} {...props}><input type="file" accept={accept} multiple hidden onChange={(event) => onFiles?.([...event.target.files ?? []])} />{children ?? <><strong>DROP ASSET</strong><span>PNG · GIF · WEBP · ASEPRITE</span></>}</label>;
}
