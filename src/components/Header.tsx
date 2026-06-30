import Image from "next/image";
import { navigationItems } from "@/constants/navigation";
import { Button } from "@/ui/Button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="IYEON Home">
          <Image src="/images/logo.jpg" alt="IYEON" width={160} height={50} priority className="h-10 w-auto object-contain" />
        </a>
        <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.08em] text-iyeon-ink lg:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-iyeon-orange">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="text-xs font-medium text-iyeon-muted">KOR | ENG</span>
          <Button href="#investor" variant="outline" className="px-5 py-2.5 text-xs">
            Investor Portal
          </Button>
        </div>
        <a href="#contact" className="rounded-full bg-iyeon-orange px-4 py-2 text-xs font-bold text-white lg:hidden">
          Contact
        </a>
      </div>
    </header>
  );
}
