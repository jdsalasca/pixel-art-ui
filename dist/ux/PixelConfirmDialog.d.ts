import type { ReactNode } from "react";
export interface PixelConfirmDialogProps {
    open: boolean;
    title: string;
    children: ReactNode;
    confirmLabel?: string;
    onConfirm(): void;
    onCancel(): void;
}
export declare function PixelConfirmDialog({ open, title, children, confirmLabel, onConfirm, onCancel }: PixelConfirmDialogProps): import("react").JSX.Element | null;
//# sourceMappingURL=PixelConfirmDialog.d.ts.map