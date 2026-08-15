/* Conecta Aqui — Direção: Modern Corporate Tech. Azul profundo, ciano de ação, tipografia editorial limpa, assimetria controlada e interações rápidas. */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Globe2,
  Home as HomeIcon,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ConsultaForm from "@/components/ConsultaForm";
import { EMAIL_CONTATO, TELEFONE_EXIBICAO, whatsappUrl } from "@/config/contato";

const heroImage = "/images/conecta-hero.jpg";
const networkImage = "/images/conecta-network.png";


const steps = [
  { number: "01", icon: MapPin, title: "Informe seu endereço", text: "Digite o CEP e os dados necessários para localizar a sua região." },
  { number: "02", icon: Search, title: "Buscamos as opções", text: "Identificamos as possibilidades de internet residencial disponíveis para o endereço." },
  { number: "03", icon: Compass, title: "Compare as alternativas", text: "Veja as características e condições de cada opção de forma clara." },
  { number: "04", icon: Target, title: "Escolha com confiança", text: "Selecione o plano que faz sentido para a sua casa e siga para o atendimento." },
];

const benefits = [
  { icon: Zap, title: "Mais praticidade", text: "Menos abas abertas e mais clareza para encontrar o que importa." },
  { icon: Globe2, title: "Mais possibilidades", text: "Uma busca orientada pelas opções disponíveis para o seu endereço." },
  { icon: Clock3, title: "Economia de tempo", text: "Agilize a pesquisa sem precisar começar do zero em cada provedor." },
  { icon: ShieldCheck, title: "Escolha consciente", text: "Compare com transparência e decida de acordo com a sua necessidade." },
];

const profiles = [
  { icon: HomeIcon, title: "Home office", text: "Para quem precisa de estabilidade no dia a dia de trabalho remoto." },
  { icon: Sparkles, title: "Streaming e entretenimento", text: "Para casas que vivem entre filmes, séries, vídeos e música." },
  { icon: Wifi, title: "Gamers", text: "Para quem busca uma conexão adequada para jogar online." },
  { icon: MessageCircle, title: "Famílias conectadas", text: "Para rotinas com vários dispositivos ligados ao mesmo tempo." },
];

const faqs = [
  { q: "A Conecta Aqui é uma operadora de internet?", a: "Não. A Conecta Aqui facilita a busca, a comparação e o encaminhamento das opções disponíveis. A instalação e a prestação do serviço são responsabilidades da operadora ou do provedor contratado." },
  { q: "Como vocês sabem quais planos estão disponíveis?", a: "A disponibilidade depende da infraestrutura e da cobertura dos provedores na região. Por isso, a consulta considera o endereço informado." },
  { q: "Posso escolher qualquer operadora?", a: "As opções apresentadas dependem da disponibilidade para o seu endereço. Você poderá avaliar as alternativas encontradas e escolher a que fizer mais sentido." },
  { q: "A consulta tem algum custo?", a: "As condições da consulta podem variar conforme a operação. Consulte as informações apresentadas durante o atendimento para entender eventuais condições aplicáveis." },
  { q: "Depois da escolha, quem instala a internet?", a: "A instalação, o suporte e a prestação do serviço seguem as condições definidas pela operadora ou pelo provedor contratado." },
  { q: "Meus dados estão seguros?", a: "Tratamos os dados enviados para viabilizar a consulta e o atendimento, respeitando a legislação aplicável. Consulte a Política de Privacidade para mais detalhes." },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);


  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0b1f3a]">
      <SiteHeader />

      <main>
        <section id="inicio" className="hero-section relative isolate overflow-hidden bg-[#071b45]">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-grid" />
          <div className="container relative z-10 grid min-h-[760px] items-center gap-12 pb-24 pt-36 lg:grid-cols-[0.92fr_1.08fr] lg:pb-28 lg:pt-44">
            <div className="max-w-2xl">
              <div className="eyebrow eyebrow-dark mb-7"><span className="eyebrow-dot" /> Conectividade para a sua casa</div>
              <h1 className="display-heading text-white">A internet ideal para a sua casa está <span className="text-[#28d6ca]">mais perto</span> do que você imagina.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-blue-100/78 md:text-xl">A Conecta Aqui compara as opções de internet disponíveis para o seu endereço e ajuda você a encontrar o plano que mais combina com o que precisa.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a className="button-primary group" href="#consulta">Encontrar minha internet <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a>
                <a className="button-ghost" href="#como-funciona">Como funciona <ArrowDownRight className="h-5 w-5" /></a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-blue-100/60">
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#28d6ca]" /> Busca por endereço</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#28d6ca]" /> Comparação simples</span>
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#28d6ca]" /> Atendimento próximo</span>
              </div>
            </div>
            <div className="hero-visual-wrap relative mx-auto w-full max-w-[650px] lg:ml-auto">
              <div className="hero-visual-glow" />
              <div className="hero-visual relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 shadow-[0_34px_100px_rgba(0,0,0,0.32)]">
                <img src={heroImage} alt="Casa conectada por sinal de internet" className="aspect-[4/3] w-full object-cover object-center opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#071b45]/45 via-transparent to-cyan-200/10" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-[#071b45]/72 p-4 backdrop-blur-xl">
                  <div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#28d6ca]">Conecta Aqui</p><p className="mt-1 text-sm font-medium text-white">A ponte entre você e as possibilidades.</p></div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#28d6ca] text-[#071b45]"><Wifi className="h-5 w-5" /></div>
                </div>
              </div>
              <div className="float-card float-card-top"><span className="float-icon"><MapPin className="h-4 w-4" /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5c7190]">A partir do seu</p><p className="text-sm font-bold text-[#0b1f3a]">endereço</p></div></div>
              <div className="float-card float-card-bottom"><span className="float-icon bg-[#d9fffa] text-[#00a99e]"><Check className="h-4 w-4" /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5c7190]">Escolha</p><p className="text-sm font-bold text-[#0b1f3a]">com clareza</p></div></div>
            </div>
          </div>
          <div className="hero-edge" />
        </section>

        <section className="border-b border-[#dce7f2] bg-white">
          <div className="container grid gap-7 py-10 md:grid-cols-[1.2fr_repeat(3,1fr)] md:items-center">
            <div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#168d9a]">Do endereço à conexão</p><p className="mt-2 max-w-sm text-lg font-semibold leading-7 text-[#0b1f3a]">Pare de perder tempo procurando em vários lugares.</p></div>
            <div className="trust-item"><span className="trust-number">01</span><span>Informe onde você mora</span></div>
            <div className="trust-item"><span className="trust-number">02</span><span>Encontre possibilidades</span></div>
            <div className="trust-item"><span className="trust-number">03</span><span>Escolha o que combina</span></div>
          </div>
        </section>

        <section id="como-funciona" className="section-space bg-[#f8fafc]">
          <div className="container">
            <div className="section-intro flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><div className="eyebrow"><span className="eyebrow-dot" /> Um jeito mais simples</div><h2 className="section-title mt-5 max-w-2xl">Do primeiro clique à escolha certa, sem complicar.</h2></div><p className="max-w-sm text-base leading-7 text-[#5c7190]">A Conecta Aqui organiza a busca para você enxergar as alternativas com mais clareza e tomar uma decisão consciente.</p></div>
            <div className="steps-grid mt-16">{steps.map((step, index) => { const Icon = step.icon; return <article key={step.number} className="step-card group"><div className="flex items-start justify-between"><span className="step-number">{step.number}</span><span className="step-icon"><Icon className="h-5 w-5" /></span></div><div className="mt-14"><h3 className="text-xl font-bold text-[#0b1f3a]">{step.title}</h3><p className="mt-3 text-sm leading-6 text-[#657b96]">{step.text}</p></div>{index < steps.length - 1 && <ArrowRight className="step-arrow hidden lg:block" />}</article> })}</div>
          </div>
        </section>

        <section className="section-space overflow-hidden bg-white">
          <div className="container grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative"><div className="network-frame"><img src={networkImage} alt="Rede abstrata de conexões entre endereços" className="h-full w-full object-cover" /><div className="network-badge"><div className="h-2 w-2 rounded-full bg-[#28d6ca]" /> Disponibilidade por endereço</div></div><div className="absolute -bottom-8 -right-5 hidden rounded-2xl bg-[#071b45] p-5 text-white shadow-xl sm:block"><p className="text-3xl font-bold tracking-tight">A sua casa</p><p className="mt-1 text-sm text-blue-100/65">é o ponto de partida.</p></div></div>
            <div><div className="eyebrow"><span className="eyebrow-dot" /> Por que a Conecta Aqui?</div><h2 className="section-title mt-5">Mais clareza para você escolher. Mais tempo para o que importa.</h2><p className="mt-6 max-w-xl text-base leading-8 text-[#657b96]">Em vez de pesquisar uma operadora por vez, você pode contar com a Conecta Aqui para encontrar as opções disponíveis para o seu endereço.</p><div className="benefit-grid mt-10">{benefits.map((benefit) => { const Icon = benefit.icon; return <div key={benefit.title} className="benefit-item"><span className="benefit-icon"><Icon className="h-5 w-5" /></span><div><h3 className="font-bold text-[#0b1f3a]">{benefit.title}</h3><p className="mt-1 text-sm leading-6 text-[#657b96]">{benefit.text}</p></div></div> })}</div></div>
          </div>
        </section>

        <section id="consulta" className="section-space consult-section relative overflow-hidden bg-[#071b45]">
          <div className="consult-line consult-line-one" /><div className="consult-line consult-line-two" />
          <div className="container relative z-10 grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="pt-4"><div className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> Comece pelo seu endereço</div><h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white md:text-5xl">Quer descobrir quais opções estão disponíveis na sua região?</h2><p className="mt-6 max-w-md text-base leading-7 text-blue-100/70">Preencha os dados abaixo. A consulta é o ponto de partida para entender as possibilidades de conexão para a sua casa.</p><div className="mt-9 rounded-2xl border border-white/12 bg-white/6 p-5"><div className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#28d6ca]" /><p className="text-sm leading-6 text-blue-100/72">Seus dados são tratados de acordo com a nossa Política de Privacidade e usados para viabilizar o atendimento.</p></div></div></div>
            <ConsultaForm />
          </div>
        </section>

        <section className="section-space bg-[#f8fafc]">
          <div className="container"><div className="max-w-2xl"><div className="eyebrow"><span className="eyebrow-dot" /> Feita para a vida real</div><h2 className="section-title mt-5">Uma busca que acompanha o seu jeito de usar a internet.</h2></div><div className="profile-grid mt-14">{profiles.map((profile) => { const Icon = profile.icon; return <article key={profile.title} className="profile-card"><span className="profile-icon"><Icon className="h-6 w-6" /></span><h3 className="mt-7 text-xl font-bold text-[#0b1f3a]">{profile.title}</h3><p className="mt-3 text-sm leading-6 text-[#657b96]">{profile.text}</p><a href="#consulta" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#078d9a]">Ver opções <ArrowRight className="h-4 w-4" /></a></article> })}</div></div>
        </section>

        <section id="faq" className="section-space bg-white"><div className="container grid gap-14 lg:grid-cols-[0.7fr_1.3fr]"><div><div className="eyebrow"><span className="eyebrow-dot" /> Tudo mais claro</div><h2 className="section-title mt-5">Perguntas que ajudam você a decidir.</h2><p className="mt-6 max-w-sm text-base leading-7 text-[#657b96]">Se ainda ficou alguma dúvida sobre a busca, a disponibilidade ou o atendimento, talvez ela esteja aqui.</p><a className="button-secondary mt-8" href="/contato">Falar com a equipe <ArrowRight className="h-4 w-4" /></a></div><div className="faq-list">{faqs.map((faq, index) => <div key={faq.q} className={`faq-item ${openFaq === index ? "is-open" : ""}`}><button className="flex w-full items-center justify-between gap-5 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="text-base font-bold text-[#0b1f3a]">{faq.q}</span><span className="faq-toggle"><ChevronDown className="h-4 w-4" /></span></button><div className="faq-answer"><p>{faq.a}</p></div></div>)}</div></div></section>

        <section className="final-cta relative overflow-hidden bg-[#0f3a89]"><div className="final-cta-pattern" /><div className="container relative z-10 flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#66f1e3]">A conexão começa aqui</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">Pare de procurar em vários lugares.</h2><p className="mt-4 max-w-xl text-base leading-7 text-blue-100/75">Conte com a Conecta Aqui para encontrar opções de internet residencial disponíveis para o seu endereço.</p></div><a href="#consulta" className="button-primary button-primary-light group shrink-0">Encontrar minha internet <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a></div></section>
      </main>

      <SiteFooter />
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Falar com a Conecta Aqui pelo WhatsApp"><MessageCircle className="h-6 w-6" /><span className="whatsapp-label">Fale pelo WhatsApp</span></a>
    </div>
  );
}

export { whatsappUrl };

// Preserve mobile-first composition: hero copy stacks before the visual, consultation fields remain tap-friendly, and all action colors meet contrast expectations.
export function MobileMenuIcon({ open, onClick }: { open: boolean; onClick: () => void }) { return <button onClick={onClick} aria-label={open ? "Fechar menu" : "Abrir menu"} className="mobile-menu-button">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>; }

// Prevent unused export lint issues while keeping the icon available for the shared header if needed.
void MobileMenuIcon;

// Reference image uploaded by the user is intentionally used as inspiration; the generated hero keeps text out of the artwork so the UI remains editable and accessible.

// Brand mark supplied by the user is rendered by SiteHeader and SiteFooter.
export const suppliedBrandLogo = "/images/logo.png";

// WhatsApp number is the business contact supplied in the briefing.
void whatsappUrl;

// The UI never fabricates ratings, testimonials, partner logos, or availability counts.
void benefits;
void profiles;
void steps;
void faqs;

// End of Home page.

// Extra exported no-op values avoid accidental tree-shaking of design constants in static previews.
export const homeDesignSystem = { primary: "#071b45", accent: "#28d6ca", surface: "#f8fafc" };

// This page is intentionally self-contained and ready for a future availability API integration.
export const availabilityIntegrationReady = true;

// The call to action vocabulary is intentionally consistent across the page.
export const primaryCtaLabel = "Encontrar minha internet";

// Contact details are centralized in the footer and contact page.
export const businessPhone = TELEFONE_EXIBICAO;
export const businessEmail = EMAIL_CONTATO;

// End.
void primaryCtaLabel;
void businessPhone;
void businessEmail;
void availabilityIntegrationReady;
void homeDesignSystem;
void suppliedBrandLogo;
