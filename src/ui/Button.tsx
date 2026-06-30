import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-iyeon-orange text-white shadow-glow hover:bg-[#e84310]",
    secondary: "bg-iyeon-navy text-white hover:bg-black",
    outline: "border border-iyeon-line bg-white/70 text-iyeon-ink hover:border-iyeon-orange"
  };

  return (
    <a
      className={cn(
        "inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}
