import { siteConfig } from "@/constants/site";
import { Container } from "@/ui/Container";

const footerGroups = [
  { title: "Platform", links: ["Operating System", "Venture Builder", "AI Intelligence", "Global Network"] },
  { title: "Business", links: ["K-Beauty", "K-Food", "Healthcare", "Cheongdo Project"] },
  { title: "Resources", links: ["Newsroom", "Investor", "Partner", "Contact"] }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-iyeon-navy py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="text-3xl font-black tracking-tight">IYEON</div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
              The Operating System for Global Korean Innovation.
            </p>
            <p className="mt-8 text-sm text-white/50">{siteConfig.email}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/55">
                  {group.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <span>© 2026 IYEON Co., Ltd. All Rights Reserved.</span>
          <span>Built for IYEON Enterprise Platform OS v3.0.0</span>
        </div>
      </Container>
    </footer>
  );
}
