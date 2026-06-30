import { SiteLayout } from "@/layouts/SiteLayout";
import { Container } from "@/ui/Container";
import { Section } from "@/ui/Section";
import { Button } from "@/ui/Button";

const metrics = [
  ["70+", "Countries"],
  ["200+", "Partners"],
  ["50+", "Ventures"],
  ["10M+", "Global Consumers"]
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section id="home" className="orbital-bg relative min-h-screen overflow-hidden pt-32">
        <Container className="grid min-h-[760px] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-iyeon-orange">
              K-Industry Operating System
            </p>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.96] tracking-[-0.06em] text-iyeon-ink md:text-7xl lg:text-8xl">
              Connecting Korean Potential to <span className="text-iyeon-orange">Global Reality</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-iyeon-muted">
              이연은 대한민국의 우수한 산업과 혁신 기술을 글로벌 시장과 연결하여 새로운 가치를 창출하는 Enterprise Platform OS입니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#about">About IYEON</Button>
              <Button href="#platform" variant="outline">Our Platform</Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-20 top-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-iyeon-amber via-iyeon-orange to-iyeon-red opacity-20 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/80 bg-white/45 p-8 shadow-glass backdrop-blur-2xl">
              <div className="aspect-square rounded-[2rem] bg-iyeon-navy p-8 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.32em] text-iyeon-amber">IYEON OS</div>
                <div className="mt-24 text-4xl font-black leading-tight">AI-Powered Venture Builder</div>
                <p className="mt-6 text-sm leading-7 text-white/60">Data · Brand · Network · Capital · Global Market</p>
              </div>
            </div>
          </div>
        </Container>
        <Container className="relative -mt-28 pb-16">
          <div className="grid rounded-[1.75rem] bg-iyeon-navy p-6 text-white shadow-glass md:grid-cols-4">
            {metrics.map(([num, label]) => (
              <div key={label} className="border-white/10 p-6 md:border-r last:border-r-0">
                <div className="text-3xl font-black">{num}</div>
                <div className="mt-2 text-sm text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section id="about" className="bg-white">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-iyeon-orange">Foundation v3.0.0</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">IYEON Enterprise Platform OS</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-iyeon-muted">
            이 버전은 프로젝트 구조, 디자인 시스템, Header, Footer, Navigation을 포함한 Foundation 단계입니다.
          </p>
        </Container>
      </Section>
    </SiteLayout>
  );
}
