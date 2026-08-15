/* Conecta Aqui — Rodapé institucional: azul profundo, hierarquia editorial e transparência sobre a empresa e os canais oficiais. */
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { EMAIL_CONTATO, TELEFONE_EXIBICAO, TELEFONE_LINK } from "@/config/contato";

const logo = "/images/logo-branca.png";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.4fr_0.8fr_1fr] md:py-20">
        <div><a href="/" className="site-logo site-logo-footer"><img src={logo} alt="Conecta Aqui" className="h-12 w-12 rounded-xl object-cover" /><span><strong>Conecta</strong><small>AQUI</small></span></a><p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/65">Conecta Aqui — facilitando sua busca pela internet ideal.</p></div>
        <div><p className="footer-kicker">Navegue</p><div className="mt-5 flex flex-col gap-3">{[["Início", "/"], ["Sobre nós", "/sobre"], ["Como funciona", "/#como-funciona"], ["Contato", "/contato"], ["Política de Privacidade", "/politica-de-privacidade"], ["Termos de Uso", "/termos-de-uso"]].map(([label, href]) => <a href={href} key={href} className="footer-link">{label} <ArrowUpRight className="h-3.5 w-3.5" /></a>)}</div></div>
        <div><p className="footer-kicker">Conecta Aqui</p><div className="mt-5 space-y-4 text-sm leading-6 text-blue-100/65"><p className="font-semibold text-white">CONECTA AQUI COMERCIO E SERVICOS EM TELECOMUNICACOES LTDA</p><p>CNPJ 62.915.438/0001-57</p><a href={`tel:${TELEFONE_LINK}`} className="contact-line"><Phone className="h-4 w-4" /> {TELEFONE_EXIBICAO}</a><a href={`mailto:${EMAIL_CONTATO}`} className="contact-line"><Mail className="h-4 w-4" /> {EMAIL_CONTATO}</a><p className="contact-line"><MapPin className="h-4 w-4" /> R. Aritiba, 225, Casa 5<br />Realengo, Rio de Janeiro/RJ</p></div></div>
      </div>
      <div className="container flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs text-blue-100/45 sm:flex-row"><p>© 2026 Conecta Aqui. Todos os direitos reservados.</p><p>As opções, valores e condições dependem do endereço e do provedor.</p></div>
    </footer>
  );
}

void logo;
