import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { XIcon, GithubIcon } from "@/components/icons/social";

const productLinks = [
  { href: "/products/file-weight-analyzer", label: "File Weight Analyzer" },
  { href: "/#products", label: "Plugin Organizer" },
  { href: "/#products", label: "Coming Soon" },
];

const companyLinks = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: XIcon },
  { href: "https://github.com", label: "GitHub", icon: GithubIcon },
  { href: "mailto:hello@fromourlab.com", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-black">
                <span className="text-sm font-bold">*</span>
              </span>
              FromOurLab
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Built by designers. Made for designers. Professional tools that
              help designers build better products.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/20 hover:text-foreground"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h3 className="text-sm font-medium text-foreground">
                Products
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground">Company</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} FromOurLab. All rights reserved.</p>
          <p>Made with care, from our lab to yours.</p>
        </div>
      </Container>
    </footer>
  );
}
