import type { HTMLAttributes, ReactNode } from "react";
import { pixelClassNames } from "../model/pixelClassNames.js";
export interface PixelTab { id: string; label: string; content: ReactNode; }
export interface PixelTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> { tabs: PixelTab[]; activeId?: string; onChange?(id: string): void; }
export function PixelTabs({ tabs, activeId = tabs[0]?.id, onChange, className = "", ...props }: PixelTabsProps) { const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0]; return <div className={pixelClassNames("pixel-tabs", className)} {...props}><div className="pixel-tabs__list" role="tablist">{tabs.map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={tab.id === active?.id} className={tab.id === active?.id ? "is-active" : ""} onClick={() => onChange?.(tab.id)}>{tab.label}</button>)}</div><div role="tabpanel" className="pixel-tabs__panel">{active?.content}</div></div>; }
