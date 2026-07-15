import { Minus, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function PluginWindow({
  icon: Icon,
  title,
  tag = "Figma Plugin",
  status,
  className,
  bodyClassName,
  children,
}: {
  icon: LucideIcon;
  title: string;
  tag?: string;
  status?: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-60" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-surface/80 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
              <Icon size={13} strokeWidth={2} />
            </span>
            <span className="truncate text-sm font-medium text-foreground">
              {title}
            </span>
            <span className="hidden shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted sm:inline-flex">
              {tag}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            {status ? (
              <span className="hidden items-center gap-1.5 text-[11px] text-muted sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {status}
              </span>
            ) : null}
            <Minus size={13} className="text-muted/60" />
            <X size={13} className="text-muted/60" />
          </div>
        </div>

        <div className={cn("flex-1 p-5 sm:p-6", bodyClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}
