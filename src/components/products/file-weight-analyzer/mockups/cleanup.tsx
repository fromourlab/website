import { Check, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PluginWindow } from "./plugin-window";

const items = [
  { name: "Archive/Old-Explorations", size: "6.2 MB", checked: true },
  { name: "Illustration-draft-v2.png", size: "9.8 MB", checked: true },
  { name: "Icons/Duplicate-Set-3", size: "1.1 MB", checked: false },
  { name: "Styles/Unused-Gradient", size: "0.8 MB", checked: true },
];

export function CleanupMockup({ className }: { className?: string }) {
  return (
    <PluginWindow
      icon={Wand2}
      title="Cleanup"
      tag="Review changes"
      className={className}
    >
      <p className="text-xs text-muted">
        Select what to remove. Nothing is deleted until you confirm.
      </p>

      <div className="mt-4 flex flex-col divide-y divide-white/5">
        {items.map((item) => (
          <div key={item.name} className="flex items-center gap-3 py-3">
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                item.checked
                  ? "border-accent bg-accent text-black"
                  : "border-white/15",
              )}
            >
              {item.checked ? <Check size={12} strokeWidth={3} /> : null}
            </span>
            <span className="flex-1 truncate text-sm text-foreground/90">
              {item.name}
            </span>
            <span className="shrink-0 text-sm text-muted">{item.size}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3">
        <p className="text-sm font-medium text-foreground">
          Clean up 3 items
        </p>
        <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-black">
          Saves 16.8 MB
        </span>
      </div>
    </PluginWindow>
  );
}
