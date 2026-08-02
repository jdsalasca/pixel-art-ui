export interface PixelProgressStep {
    id: string;
    label: string;
    state: "complete" | "current" | "pending" | "error";
}
export interface PixelProgressStepsProps {
    steps: PixelProgressStep[];
}
export declare function PixelProgressSteps({ steps }: PixelProgressStepsProps): import("react").JSX.Element;
//# sourceMappingURL=PixelProgressSteps.d.ts.map