/* Conecta Aqui — Cabeçalho Modern Corporate Tech: navegação enxuta, logo protagonista, menu móvel acessível e CTA ciano. */
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const logo = "/images/logo-branca.png";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container flex h-[78px] items-center justify-between">
        <a href="/" className="site-logo" aria-label="Conecta Aqui — início">
          <img src={logo} alt="Conecta Aqui" className="h-12 w-12 rounded-xl object-cover" />
          <span className="hidden sm:block"><strong>Conecta</strong><small>AQUI</small></span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
        </nav>
        <div className="hidden lg:block"><a href="/#consulta" className="header-cta">Encontrar minha internet <ArrowRight className="h-4 w-4" /></a></div>
        <button className="mobile-menu-button lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      <div className={`mobile-panel lg:hidden ${open ? "is-open" : ""}`}>
        <div className="container flex flex-col gap-2 pb-5 pt-2">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="mobile-nav-link">{item.label}</a>)}
          <a href="/#consulta" onClick={() => setOpen(false)} className="button-primary mt-3 justify-center">Encontrar minha internet <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </header>
  );
}

// Navigation intentionally keeps the conversion action visible without crowding the brand.
void navItems;
