import { BarChart3 } from "lucide-react";
import { PluginWindow } from "./plugin-window";

const segments = [
  {
    label: "Images",
    value: "42%",
    size: "20.1 MB",
    tone: "bg-accent-2",
    width: "w-[42%]",
  },
  {
    label: "Components",
    value: "24%",
    size: "11.5 MB",
    tone: "bg-accent",
    width: "w-[24%]",
  },
  {
    label: "Styles",
    value: "14%",
    size: "6.7 MB",
    tone: "bg-white/30",
    width: "w-[14%]",
  },
  {
    label: "Unused frames",
    value: "20%",
    size: "9.6 MB",
    tone: "bg-white/15",
    width: "w-[20%]",
  },
];

export function BreakdownMockup({ className }: { className?: string }) {
  return (
    <PluginWindow
      icon={BarChart3}
      title="Size breakdown"
      tag="By type"
      className={className}
    >
      <div className="flex items-center justify-between text-xs text-muted">
        <span>Total file size</span>
        <span className="font-medium text-foreground/80">47.9 MB</span>
      </div>

      <div className="mt-3 flex h-3 w-full overflow-hidden rounded-full bg-white/5">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className={`h-full ${segment.tone} ${segment.width}`}
          />
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-3">
            <span className={`h-2 w-2 shrink-0 rounded-full ${segment.tone}`} />
            <span className="flex-1 text-sm text-foreground/90">
              {segment.label}
            </span>
            <span className="text-xs text-muted">{segment.value}</span>
            <span className="w-16 shrink-0 text-right text-sm font-medium text-foreground/70">
              {segment.size}
            </span>
          </div>
        ))}
      </div>
    </PluginWindow>
  );
}
