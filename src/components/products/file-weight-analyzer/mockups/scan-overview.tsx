import {
  FileWarning,
  FolderOpen,
  Image as ImageIcon,
  Palette,
  SquareStack,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PluginWindow } from "./plugin-window";

const rows = [
  {
    icon: ImageIcon,
    name: "Hero/Illustration-Final.png",
    tag: "Image",
    size: "18.4 MB",
    width: "w-[92%]",
    tone: "bg-accent-2",
  },
  {
    icon: SquareStack,
    name: "Components/Button-Set",
    tag: "Component",
    size: "9.1 MB",
    width: "w-[45%]",
    tone: "bg-accent",
  },
  {
    icon: FolderOpen,
    name: "Archive/Old-Explorations",
    tag: "Unused frame",
    size: "6.2 MB",
    width: "w-[31%]",
    tone: "bg-accent",
  },
  {
    icon: Palette,
    name: "Styles/Color-Tokens",
    tag: "Style",
    size: "3.6 MB",
    width: "w-[18%]",
    tone: "bg-accent-2",
  },
];

export function ScanOverviewMockup({ className }: { className?: string }) {
  return (
    <PluginWindow
      icon={FileWarning}
      title="File Weight Analyzer"
      status="Scanning"
      className={className}
    >
      <div className="flex items-center justify-between text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <FolderOpen size={13} />
          Marketing-Site.fig
        </span>
        <span>79%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div className="h-full w-[79%] rounded-full bg-accent" />
      </div>

      <div className="mt-5 flex flex-col divide-y divide-white/5">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center gap-3 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/70">
              <row.icon size={14} strokeWidth={1.75} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm text-foreground/90">
                  {row.name}
                </p>
                <p className="shrink-0 text-sm font-medium text-foreground/70">
                  {row.size}
                </p>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className={cn("h-full rounded-full", row.tone, row.width)}
                  />
                </div>
                <span className="shrink-0 text-[10px] uppercase tracking-wide text-muted">
                  {row.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-muted">
            Potential savings
          </p>
          <p className="text-lg font-semibold text-accent">
            32.1 MB
            <span className="ml-1 text-xs font-normal text-muted">(58%)</span>
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-black">
          Optimize file
        </span>
      </div>
    </PluginWindow>
  );
}
