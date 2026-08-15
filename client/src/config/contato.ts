/**
 * Dados de contato da Conecta Aqui.
 *
 * Este é o ÚNICO lugar onde o número de WhatsApp fica escrito.
 * Para trocar o número no site inteiro, altere apenas aqui.
 */

/** Número do WhatsApp somente com dígitos, no formato internacional (55 + DDD + número). */
export const WHATSAPP_NUMERO = "5521923681687";

/** Mesmo número, formatado para exibição na tela. */
export const WHATSAPP_EXIBICAO = "(21) 92368-1687";

/** Telefone de voz — linha diferente do WhatsApp. */
export const TELEFONE_LINK = "+5521964037791";
export const TELEFONE_EXIBICAO = "(21) 96403-7791";

export const EMAIL_CONTATO = "contato@conectaaqui.com.br";

/**
 * Monta um link wa.me com a mensagem já preenchida.
 */
export function montarLinkWhatsapp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/** Link padrão usado pelos botões flutuantes e cards de contato. */
export const whatsappUrl = montarLinkWhatsapp(
  "Olá! Gostaria de saber quais opções de internet estão disponíveis para o meu endereço.",
);

/**
 * Monta a mensagem da consulta de disponibilidade com os dados da ficha,
 * para que o atendimento receba tudo já preenchido.
 */
export function montarMensagemConsulta(dados: Record<string, string>): string {
  const linhas = [
    "*Nova consulta de disponibilidade — Conecta Aqui*",
    "",
    `*Nome:* ${dados.nome || "-"}`,
    `*WhatsApp:* ${dados.whatsapp || "-"}`,
    "",
    `*CEP:* ${dados.cep || "-"}`,
    `*Endereço:* ${dados.rua || "-"}, ${dados.numero || "-"}`,
    dados.complemento ? `*Complemento:* ${dados.complemento}` : null,
    `*Bairro:* ${dados.bairro || "-"}`,
    `*Cidade/UF:* ${dados.cidade || "-"} / ${dados.estado || "-"}`,
  ];

  return linhas.filter(Boolean).join("\n");
}

/**
 * Monta a mensagem do formulário da página de Contato.
 */
export function montarMensagemContato(dados: {
  nome: string;
  email: string;
  mensagem: string;
}): string {
  return [
    "*Mensagem pelo site — Conecta Aqui*",
    "",
    `*Nome:* ${dados.nome || "-"}`,
    "",
    `*Mensagem:* ${dados.mensagem || "-"}`,
  ].join("\n");
}
