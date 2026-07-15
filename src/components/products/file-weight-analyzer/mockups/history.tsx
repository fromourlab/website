import { History, TrendingDown } from "lucide-react";
import { PluginWindow } from "./plugin-window";

const bars = [
  { date: "Jun 16", height: "h-[88%]" },
  { date: "Jun 23", height: "h-[76%]" },
  { date: "Jun 30", height: "h-[70%]" },
  { date: "Jul 7", height: "h-[55%]" },
  { date: "Jul 14", height: "h-[38%]" },
];

export function HistoryMockup({ className }: { className?: string }) {
  return (
    <PluginWindow
      icon={History}
      title="Scan history"
      tag="Last 30 days"
      className={className}
    >
      <div className="flex items-center justify-between text-xs text-muted">
        <span>File size over time</span>
        <span className="font-medium text-foreground/80">
          Marketing-Site.fig
        </span>
      </div>

      <div className="mt-5 flex h-24 items-end gap-3">
        {bars.map((bar, index) => (
          <div key={bar.date} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-24 w-full items-end">
              <div
                className={`w-full rounded-md ${bar.height} ${
                  index === bars.length - 1 ? "bg-accent" : "bg-white/15"
                }`}
              />
            </div>
            <span className="text-[10px] text-muted">{bar.date}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
        <TrendingDown size={16} className="shrink-0 text-accent" />
        <p className="text-sm text-foreground/90">
          <span className="font-semibold text-accent">57% lighter</span> than
          your first scan
        </p>
      </div>
    </PluginWindow>
  );
}
