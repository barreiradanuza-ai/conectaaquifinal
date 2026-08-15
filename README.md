# Conecta Aqui — site institucional

Site em React + Vite + TypeScript. Projeto **desacoplado da plataforma Manus** e pronto
para rodar e publicar em qualquer lugar....

---

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera dist/public
npm start        # serve o build (Express, porta 3000)
```

## Como publicar

O site é 100% frontend. Basta publicar a pasta `dist/public`.

- **Vercel** — já tem `vercel.json`. Importe o repositório e publique, sem configurar nada.
- **Netlify** — já tem `netlify.toml`. Idem.
- **Outro servidor** — publique `dist/public` e redirecione todas as rotas para
  `index.html` (necessário porque a navegação é feita no cliente pelo `wouter`).

---

## Como trocar o número de WhatsApp

Tudo está centralizado em **`client/src/config/contato.ts`**. Altere ali e muda no site
inteiro:

```ts
export const WHATSAPP_NUMERO   = "5521923681687";   // 55 + DDD + número, só dígitos
export const WHATSAPP_EXIBICAO = "(21) 92368-1687"; // como aparece na tela
export const TELEFONE_LINK     = "+5521923681687";
export const TELEFONE_EXIBICAO = "(21) 92368-1687";
export const EMAIL_CONTATO     = "contato@conectaaqui.com.br";
```

Número configurado: **+55 21 92368-1687**, aplicado em todos os pontos:

| Onde | O que faz |
|---|---|
| Botão flutuante de WhatsApp (home) | Abre conversa com mensagem inicial |
| Card de WhatsApp (página Contato) | Abre conversa com mensagem inicial |
| Card de telefone (Contato) e rodapé | Link `tel:` |
| **Ficha de consulta (home)** | Abre o WhatsApp com todos os dados preenchidos |
| **Formulário de contato** | Abre o WhatsApp com nome, e-mail e mensagem |

---

## ⚠️ Mudança de comportamento nos formulários — leia

**Antes, os dois formulários do site descartavam os dados.** A ficha de consulta e o
formulário de contato só exibiam uma mensagem de sucesso na tela; nada era enviado a
lugar nenhum e ninguém recebia os dados preenchidos.

Agora ambos montam uma mensagem formatada e abrem o WhatsApp do atendimento.

**Consequências que você precisa conhecer:**

1. **O envio depende do usuário.** O site abre o WhatsApp com o texto pronto, mas quem
   aperta "enviar" é a pessoa. Se ela desistir nessa hora, você não recebe nada — e não
   fica registro nenhum.
2. **Bloqueador de pop-up.** O envio usa `window.open`. Como parte de um clique do
   usuário, normalmente passa, mas alguns navegadores podem bloquear.
3. **Não há banco de dados.** Nenhum lead fica armazenado. Se você precisar de histórico,
   isso exige um backend (ou um serviço tipo Formspree / Google Forms / CRM). Posso
   ajudar a montar se quiser.

---

## Imagens

Ficam em `client/public/images/` e são referenciadas por `/images/...`:

| Arquivo | Uso |
|---|---|
| `logo-simbolo.png` | Cabeçalho e rodapé (só a casa + Wi-Fi, fundo transparente) |
| `logo.png` | Logo completa "Conecta Aqui", fundo transparente |
| `conecta-hero.jpg` | Imagem do topo da home |
| `conecta-network.png` | Mapa do Brasil, recolorido na paleta da marca |

O cabeçalho e o rodapé usam só o símbolo porque a logo é exibida em 48×48 px, tamanho em
que o texto ficaria ilegível — e o nome da marca já aparece escrito ao lado. Para usar a
logo completa, troque em `SiteHeader.tsx` (linha 5) e `SiteFooter.tsx` (linha 4):

```ts
const logo = "/images/logo.png";
```

---

## O que foi removido da Manus

Tudo que dependia da plataforma saiu, e nada disso era usado pelo site:

- `vite-plugin-manus-runtime`, `@builder.io/vite-plugin-jsx-loc` e os plugins internos
  de debug e storage no `vite.config.ts`
- `client/public/__manus__/` (coletor de logs)
- `Map.tsx` (Google Maps via proxy da Manus) e `@types/google.maps`
- `ManusDialog.tsx` e `const.ts` (login OAuth da Manus)
- Script de analytics no `index.html`
- `template.json` e o patch do `wouter` (instrumentação da Manus)
- `pnpm-lock.yaml` — **removido porque as dependências mudaram**; o `npm install` vai
  gerar um `package-lock.json` novo

As imagens, que antes vinham do storage da Manus, agora ficam dentro do projeto.

---

## ⚠️ Nada disso foi testado

O ambiente onde essas alterações foram feitas não tem acesso à internet, então não foi
possível rodar `npm install`, `npm run build` nem abrir o site. As mudanças foram
conferidas por leitura do código, mas **não foram executadas**.

**Antes de publicar, rode `npm install && npm run build` e teste o site localmente** —
principalmente os dois formulários, para confirmar que o WhatsApp abre com os dados certos.

---

## Publicando este repositório no GitHub

Se o repositório já existe e você quer substituir o conteúdo antigo:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

# apaga o conteúdo antigo, preservando a pasta .git
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# copie todo o conteúdo deste projeto para dentro desta pasta, e então:
git add -A
git status                     # confira o que será enviado
git commit -m "Substitui projeto pelo site Conecta Aqui"
git push origin main           # ou 'master', conforme seu branch
```

Se for um repositório novo:

```bash
git init
git add -A
git commit -m "Site Conecta Aqui"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

O `.gitignore` já ignora `node_modules/` e `dist/` — não envie essas pastas.

### Depois do push

Na Vercel ou Netlify, importe o repositório. As configurações de build já estão em
`vercel.json` e `netlify.toml`, então não é preciso ajustar nada.
