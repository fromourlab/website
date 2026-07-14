import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variants: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-accent text-black hover:brightness-110 shadow-[0_0_0_1px_rgba(215,255,63,0.4),0_8px_30px_-8px_rgba(215,255,63,0.5)]",
  secondary:
    "bg-white/5 text-foreground border border-white/10 hover:bg-white/10 hover:border-white/20",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-white/5",
};

const sizes: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonBaseProps &
  (
    | ({ href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "className"
      >)
    | ({ href?: undefined } & Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "className"
      >)
  )) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
