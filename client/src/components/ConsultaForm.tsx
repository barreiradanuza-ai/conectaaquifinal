/* Conecta Aqui — Ficha de consulta: pede o mínimo e completa o endereço pelo CEP. */
import { FormEvent, useState } from "react";
import { ArrowRight, Check, Loader2, TriangleAlert } from "lucide-react";
import { toast } from "sonner";

import { montarLinkWhatsapp, montarMensagemConsulta } from "@/config/contato";

type StatusCep = "vazio" | "buscando" | "encontrado" | "nao-encontrado" | "falhou";

interface Endereco {
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
}

const ENDERECO_VAZIO: Endereco = { rua: "", bairro: "", cidade: "", estado: "" };

/** Deixa o CEP no formato 00000-000 enquanto a pessoa digita. */
function formatarCep(valor: string): string {
  const digitos = valor.replace(/\D/g, "").slice(0, 8);
  return digitos.length > 5 ? `${digitos.slice(0, 5)}-${digitos.slice(5)}` : digitos;
}

/** Deixa o telefone no formato (00) 00000-0000 enquanto a pessoa digita. */
function formatarTelefone(valor: string): string {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function ConsultaForm() {
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState<Endereco>(ENDERECO_VAZIO);
  const [status, setStatus] = useState<StatusCep>("vazio");

  /** Quando a busca falha, a pessoa pode preencher o endereço na mão. */
  const manual = status === "nao-encontrado" || status === "falhou";

  async function buscarCep(valorCep: string) {
    const digitos = valorCep.replace(/\D/g, "");

    if (digitos.length !== 8) {
      setStatus("vazio");
      setEndereco(ENDERECO_VAZIO);
      return;
    }

    setStatus("buscando");

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${digitos}/json/`);
      if (!resposta.ok) throw new Error("Resposta inválida");

      const dados = await resposta.json();

      // A ViaCEP responde 200 com { erro: true } quando o CEP não existe.
      if (dados.erro) {
        setStatus("nao-encontrado");
        setEndereco(ENDERECO_VAZIO);
        return;
      }

      setEndereco({
        rua: dados.logradouro || "",
        bairro: dados.bairro || "",
        cidade: dados.localidade || "",
        estado: dados.uf || "",
      });
      setStatus("encontrado");
    } catch {
      // Sem internet, ViaCEP fora do ar ou bloqueio de rede: libera o preenchimento manual.
      setStatus("falhou");
      setEndereco(ENDERECO_VAZIO);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    toast.success("Consulta iniciada", {
      description: "Estamos abrindo o WhatsApp com os seus dados para dar sequência ao atendimento.",
    });

    window.open(
      montarLinkWhatsapp(montarMensagemConsulta(dados)),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="consult-form rounded-[1.75rem] bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:p-8"
    >
      <div className="mb-8 flex items-center justify-between border-b border-[#e1e8f0] pb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#168d9a]">
            Consulta de disponibilidade
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#0b1f3a]">
            Encontre sua internet
          </h3>
        </div>
        <span className="form-step">1 <span>/</span> 2</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="form-field sm:col-span-2">
          <label htmlFor="nome">Seu nome</label>
          <input id="nome" name="nome" placeholder="Como podemos chamar você?" required />
        </div>

        <div className="form-field">
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            name="cep"
            value={cep}
            onChange={(e) => {
              const valor = formatarCep(e.target.value);
              setCep(valor);
              buscarCep(valor);
            }}
            placeholder="00000-000"
            inputMode="numeric"
            autoComplete="postal-code"
            required
          />
          {status === "buscando" && (
            <span className="cep-aviso"><Loader2 className="h-3.5 w-3.5 animate-spin" /> Buscando endereço...</span>
          )}
          {status === "encontrado" && (
            <span className="cep-aviso cep-aviso-ok"><Check className="h-3.5 w-3.5" /> Endereço encontrado</span>
          )}
          {status === "nao-encontrado" && (
            <span className="cep-aviso cep-aviso-erro"><TriangleAlert className="h-3.5 w-3.5" /> CEP não encontrado. Preencha o endereço abaixo.</span>
          )}
          {status === "falhou" && (
            <span className="cep-aviso cep-aviso-erro"><TriangleAlert className="h-3.5 w-3.5" /> Não conseguimos buscar agora. Preencha o endereço abaixo.</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="numero">Número</label>
          <input id="numero" name="numero" placeholder="Nº" inputMode="numeric" required />
        </div>

        <div className="form-field sm:col-span-2">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input
            id="whatsapp"
            name="whatsapp"
            value={telefone}
            onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
            placeholder="(00) 00000-0000"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>

        {/* Preenchidos pelo CEP. Ficam visíveis para a pessoa conferir, e editáveis se a busca falhar. */}
        <div className="form-field sm:col-span-2">
          <label htmlFor="rua">Rua {!manual && <span>(preenchido pelo CEP)</span>}</label>
          <input
            id="rua"
            name="rua"
            value={endereco.rua}
            onChange={(e) => setEndereco({ ...endereco, rua: e.target.value })}
            placeholder={manual ? "Nome da rua" : "Informe o CEP acima"}
            readOnly={!manual}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="bairro">Bairro {!manual && <span>(preenchido pelo CEP)</span>}</label>
          <input
            id="bairro"
            name="bairro"
            value={endereco.bairro}
            onChange={(e) => setEndereco({ ...endereco, bairro: e.target.value })}
            placeholder={manual ? "Seu bairro" : "Informe o CEP acima"}
            readOnly={!manual}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="complemento">Complemento <span>(opcional)</span></label>
          <input id="complemento" name="complemento" placeholder="Apartamento, bloco..." />
        </div>

        <div className="form-field">
          <label htmlFor="cidade">Cidade {!manual && <span>(preenchido pelo CEP)</span>}</label>
          <input
            id="cidade"
            name="cidade"
            value={endereco.cidade}
            onChange={(e) => setEndereco({ ...endereco, cidade: e.target.value })}
            placeholder={manual ? "Sua cidade" : "Informe o CEP acima"}
            readOnly={!manual}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="estado">Estado {!manual && <span>(preenchido pelo CEP)</span>}</label>
          <input
            id="estado"
            name="estado"
            value={endereco.estado}
            onChange={(e) => setEndereco({ ...endereco, estado: e.target.value.toUpperCase().slice(0, 2) })}
            placeholder={manual ? "Ex.: RJ" : "Informe o CEP acima"}
            readOnly={!manual}
            required
          />
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-[#657b96]">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-[#bed0e1] accent-[#0ea5a8]" />
        <span>
          Li e concordo com a{" "}
          <a href="/politica-de-privacidade" className="font-semibold text-[#078d9a] underline underline-offset-2">Política de Privacidade</a>{" "}
          e os{" "}
          <a href="/termos-de-uso" className="font-semibold text-[#078d9a] underline underline-offset-2">Termos de Uso</a>.
        </span>
      </label>

      <button className="button-form mt-7 w-full" type="submit">
        Consultar opções disponíveis <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  );
}
