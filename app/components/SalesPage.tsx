import Image from "next/image";
import Link from "next/link";
import heroPortrait from "@/public/magdiel-hero.png";
import authorityPortrait from "@/public/magdiel-autoridade.png";

type HeroVariant = "a1" | "a2" | "a3";

const heroCopy: Record<HeroVariant, { title: string; support: string; cta: string }> = {
  a1: {
    title:
      "Dá pra colocar um número no que aquela contratação, aquele estoque e aquele fiado custaram no ano passado.",
    support:
      "E dá pra fazer a conta antes da próxima. Em duas horas ao vivo, você transforma escolhas que hoje são só sensação em uma conta clara.",
    cta: "Quero calcular minha conta",
  },
  a2: {
    title: "A primeira consequência seduz. A segunda manda a conta.",
    support:
      "Aprenda a enxergar o que a escolha esconde antes de contratar, comprar ou conceder prazo. Uma sessão de trabalho ao vivo, com seus casos na mesa.",
    cta: "Quero enxergar o segundo lance",
  },
  a3: {
    title:
      "Tem quatro linhas que todo dono de negócio deveria ter numa planilha. E eu nunca vi nenhuma delas em planilha nenhuma.",
    support:
      "Salário, rescisão, operação torta e vaga reaberta. Em duas horas, você monta a conta e cria um lugar para parar antes da próxima escolha cara.",
    cta: "Quero montar as quatro linhas",
  },
};

const outcomes = [
  ["01", "Do dinheiro que sumiu", "Para uma conta com quatro linhas e um número no fim."],
  ["02", "Do azar sem explicação", "Para separar o que foi mercado do que foi escolha sua."],
  ["03", "Do impulso na assinatura", "Para ter um lugar onde parar antes de contratar ou comprar."],
  ["04", "Do erro que se repete", "Para reconhecer o padrão antes de ele custar outra vez."],
];

const discoveries = [
  "As quatro linhas do custo de uma contratação errada e por que quase ninguém soma as duas últimas.",
  "Como calcular o que o dinheiro parado em estoque deixou de fazer enquanto ficou na prateleira.",
  "Onde o fiado vira custo mesmo quando o cliente paga: na diferença entre os dois prazos.",
  "Por que a escolha cara quase sempre parece boa no papel nos minutos antes de fechar.",
  "O protocolo de três movimentos para a próxima assinatura, contratação ou compra.",
];

const program = [
  ["20 min", "Onde o dinheiro vaza", "Você identifica quais escolhas caras aconteceram no seu negócio."],
  ["25 min", "A conta da contratação", "Salário, rescisão, operação torta e vaga reaberta, montados ao vivo."],
  ["25 min", "A conta do estoque e do prazo", "Dinheiro parado, prazo concedido e prazo recebido entram na conta."],
  ["20 min", "Por que você escolheu assim", "Você enxerga como a primeira consequência convence antes de cobrar."],
  ["20 min", "O protocolo na prática", "Os três movimentos são aplicados a uma escolha real da sala."],
  ["10 min", "A sua conta do ano", "Você fecha a soma das linhas e sai da aula com um número."],
];

const faq = [
  [
    "Isso é mais uma mentoria dessas?",
    "Não. Não existe promessa de faturamento, lote que sobe amanhã ou resultado inventado. É uma aula de duas horas com uma conta no fim, sem depender de uma compra adicional.",
  ],
  [
    "Nunca ouvi falar do Magdiel. Por que eu deveria confiar?",
    "Esta é a primeira turma e não há aluno para mostrar. O que existe hoje são 12 anos de empresa, estudo sobre decisão e uma garantia de 15 dias sem pergunta. Por isso o risco fica com o Magdiel.",
  ],
  [
    "O que xadrez e psicanálise têm a ver com meu negócio?",
    "O xadrez ajuda a estudar escolhas sob pressão. A psicanálise ajuda a entender por que a primeira consequência seduz. Eles explicam a experiência de quem já contratou errado, encalhou estoque e vendeu fiado.",
  ],
  [
    "Isso funciona na rotina ou é teoria?",
    "Os blocos de contratação, estoque e protocolo usam casos reais de quem está na sala. Você sai com a sua conta montada, não apenas com um conceito para aplicar depois.",
  ],
  [
    "Se é bom, por que custa R$ 97?",
    "Porque é a primeira turma e ainda não existe prova para cobrar mais. O preço é direto, em lote único e sem urgência artificial.",
  ],
  [
    "E se eu não puder estar ao vivo?",
    "O replay fica disponível por 72 horas. Ao vivo, você também pode ter um caso seu analisado nos blocos práticos.",
  ],
  [
    "Preciso levar planilha ou valores exatos?",
    "Não. Basta lembrar de três ou quatro escolhas que deram errado no último ano. Valores aproximados servem para começar a conta.",
  ],
];

function EventSchedule() {
  const date = process.env.NEXT_PUBLIC_EVENT_DATE;
  const time = process.env.NEXT_PUBLIC_EVENT_TIME;

  if (date && time) return <>{date}, às {time}</>;
  if (date) return <>{date}</>;
  return <>Data e horário em definição</>;
}

function CheckoutButton({ compact = false }: { compact?: boolean }) {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;
  const className = compact ? "button button-small" : "button button-wide";

  if (checkoutUrl) {
    return (
      <a className={className} href={checkoutUrl} rel="noreferrer">
        Garantir minha vaga por R$ 97
      </a>
    );
  }

  return (
    <button className={className} type="button" disabled aria-label="Checkout em configuração">
      Checkout em configuração
    </button>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export function SalesPage({ variant }: { variant: HeroVariant }) {
  const hero = heroCopy[variant];

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="#top" aria-label="Ir ao início">
          <span className="brand-mark">MN</span>
          <span>
            <strong>Magdiel Negrão</strong>
            <small>Método Arquitetura da Decisão</small>
          </span>
        </Link>
        <Link className="header-link" href="#inscricao">
          Ver investimento
        </Link>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow light">Aula ao vivo para donos de negócio</p>
            <h1>{hero.title}</h1>
            <p className="hero-support">{hero.support}</p>
            <div className="hero-actions">
              <Link className="button" href="#inscricao">
                {hero.cta}
              </Link>
              <span className="price-note">R$ 97. Lote único.</span>
            </div>
            <p className="schedule"><EventSchedule /></p>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <Image
                src={heroPortrait}
                alt="Magdiel Negrão ao lado de um tabuleiro de xadrez"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 800px) 100vw, 44vw"
              />
            </div>
            <div className="image-caption">
              <span>Magdiel Negrão</span>
              <span>Empresário, psicanalista e professor de xadrez</span>
            </div>
          </div>
        </div>

        <div className="proof-strip container">
          <div><strong>12 anos</strong><span>de empresa</span></div>
          <div><strong>Ao vivo</strong><span>com perguntas</span></div>
          <div><strong>2 horas</strong><span>de trabalho prático</span></div>
          <div><strong>15 dias</strong><span>de garantia</span></div>
        </div>
      </section>

      <section className="outcome section cream">
        <div className="container">
          <SectionHeading
            eyebrow="O que muda depois da aula"
            title="Uma escolha só começa a mudar quando deixa de ser sensação e vira número."
          />
          <div className="outcome-grid">
            {outcomes.map(([number, title, description]) => (
              <article className="outcome-card" key={number}>
                <span className="card-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="discoveries section charcoal">
        <div className="container split-heading">
          <SectionHeading
            eyebrow="O que você vai descobrir"
            title="A conta que não aparece no balanço"
            intro="A contratação sai na folha. O estoque sai como dinheiro parado. O fiado sai como prazo esticado. Nenhum deles recebe o nome de erro, por isso quase ninguém soma."
          />
          <ol className="discovery-list">
            {discoveries.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="investment section" id="investimento">
        <div className="container investment-grid">
          <div>
            <p className="eyebrow">Um lote. Sem pressa artificial.</p>
            <h2>R$ 97</h2>
            <p>À vista ou parcelado, conforme as condições do checkout.</p>
          </div>
          <div className="investment-copy">
            <p>
              Eu podia colocar três lotes aqui e te dar pressa. Não vou. Se o valor de uma aula de duas horas precisa de cronômetro para fazer sentido, o problema não é o seu tempo. É a aula.
            </p>
            <Link className="text-link" href="#inscricao">Ver tudo que está incluído</Link>
          </div>
        </div>
      </section>

      <section className="authority section cream">
        <div className="container authority-grid">
          <div className="authority-image">
            <Image
              src={authorityPortrait}
              alt="Magdiel Negrão analisando uma posição no tabuleiro"
              fill
              placeholder="blur"
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
          <div className="authority-copy">
            <p className="eyebrow">Quem conduz a auditoria</p>
            <h2>Experiência de quem escolhe com dinheiro real na mesa.</h2>
            <p>
              Magdiel Negrão tem 12 anos de empresa. Trabalhou com vendas online, Shopee, Mercado Livre e uma empresa de brindes. Nesse caminho, contratou errado, comprou estoque que encalhou e vendeu fiado para quem não pagou.
            </p>
            <p>
              Em vez de chamar tudo isso de azar, foi estudar o que acontece na cabeça de quem escolhe. No xadrez, encontrou um campo prático para decisões sob pressão. Na psicanálise, uma leitura para entender por que a primeira consequência seduz.
            </p>
            <blockquote>
              “Não sou mentor de faturamento. Eu não vou te ensinar a vender mais. Meu assunto é a escolha que acontece antes da conta chegar.”
            </blockquote>
            <div className="authority-facts">
              <span>Empresário</span><span>Psicanalista</span><span>Professor de xadrez por 12 anos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="method section">
        <div className="container">
          <SectionHeading
            eyebrow="Método Arquitetura da Decisão"
            title="Três movimentos antes de fechar"
            intro="O tabuleiro não entra como metáfora bonita. Ele organiza o processo de parar, ler o cenário e calcular o que vem depois."
          />
          <div className="method-grid">
            <article>
              <span className="piece">P</span>
              <p className="step-label">Movimento 1</p>
              <h3>Pausa Tática</h3>
              <p>Parar antes de fechar, sem entregar a decisão à urgência do momento.</p>
            </article>
            <article>
              <span className="piece">L</span>
              <p className="step-label">Movimento 2</p>
              <h3>Leitura do Tabuleiro</h3>
              <p>Enxergar o que a primeira consequência está escondendo da análise.</p>
            </article>
            <article>
              <span className="piece">S</span>
              <p className="step-label">Movimento 3</p>
              <h3>Segundo Lance</h3>
              <p>Calcular a consequência seguinte antes de contratar, comprar ou conceder prazo.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="principles section charcoal">
        <div className="container">
          <SectionHeading eyebrow="Quatro ideias essenciais" title="Antes da conta, vem a forma de olhar" />
          <div className="principle-grid">
            <article><span>01</span><h3>Faturar mais não conserta escolher mal</h3><p>Uma empresa maior pode apenas repetir o mesmo erro em escala maior.</p></article>
            <article><span>02</span><h3>A primeira consequência seduz</h3><p>O desconto fecha hoje. A margem aparece menor no mês seguinte.</p></article>
            <article><span>03</span><h3>Cuidado sem prazo vira adiamento</h3><p>Dar mais uma chance não é o problema. Não definir quando resolver é.</p></article>
            <article><span>04</span><h3>O que não vira número não melhora</h3><p>Enquanto o erro fica no campo da sensação, ele não se compara nem se evita.</p></article>
          </div>
        </div>
      </section>

      <section className="program section cream">
        <div className="container program-grid">
          <div className="program-intro">
            <p className="eyebrow">Como a aula funciona</p>
            <h2>Duas horas. Seis blocos. Um número no fim.</h2>
            <p>
              A Auditoria é uma sessão de trabalho ao vivo. Você entra com escolhas do último ano e a conta é montada linha por linha na tela.
            </p>
            <div className="schedule-card">
              <span>Encontro ao vivo</span>
              <strong><EventSchedule /></strong>
              <small>Replay disponível por 72 horas</small>
            </div>
          </div>
          <div className="program-list">
            {program.map(([time, title, description], index) => (
              <article key={title}>
                <div className="program-number">{String(index + 1).padStart(2, "0")}</div>
                <div><span>{time}</span><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="included section">
        <div className="container">
          <SectionHeading
            eyebrow="Você leva com você"
            title="Materiais para a próxima decisão"
            intro="Os três materiais entram com a aula, sem custo extra. Eles ficam com você mesmo se usar a garantia."
          />
          <div className="included-grid">
            <article><span>01</span><h3>Planilha da Auditoria</h3><p>Para lançar as escolhas do ano e organizar a conta em um só lugar.</p></article>
            <article><span>02</span><h3>Guia de Bolso da Decisão Cara</h3><p>As perguntas do protocolo reunidas em uma página para consulta rápida.</p></article>
            <article><span>03</span><h3>Checklist do Segundo Lance</h3><p>Um roteiro curto para usar antes de assinar, contratar ou comprar.</p></article>
          </div>
        </div>
      </section>

      <section className="essential section cream">
        <div className="container essential-grid">
          <div className="big-number">04</div>
          <div>
            <p className="eyebrow">Uma linha que falta</p>
            <h2>Todo negócio controla entrada, saída e estoque. Quase nenhum controla o custo de escolher errado.</h2>
            <p>
              Quando essa conta não existe, o custo se espalha por meses e categorias diferentes. No fim, sobra apenas a sensação de que faltou dinheiro. A Auditoria reúne as partes e dá nome ao que aconteceu.
            </p>
            <Link className="button dark" href="#inscricao">Quero montar essa conta</Link>
          </div>
        </div>
      </section>

      <section className="audience section charcoal">
        <div className="container audience-grid">
          <div>
            <p className="eyebrow light">Para quem faz sentido</p>
            <h2>Para quem já colocou uma escolha em operação.</h2>
            <ul className="check-list">
              <li>Dono de loja, e-commerce, marketplace ou empresa de serviços.</li>
              <li>Quem tem ou já teve funcionário e conhece uma conversa adiada.</li>
              <li>Quem compra estoque e já viu mercadoria encalhar por escolha própria.</li>
              <li>Quem vende fiado ou dá desconto para não perder um cliente.</li>
              <li>Quem faturou bem e ainda assim terminou o ano sem entender o caixa.</li>
            </ul>
          </div>
          <div className="not-for-card">
            <p className="eyebrow">Não é para você se</p>
            <h3>Seu negócio ainda não abriu.</h3>
            <p>A aula trabalha com escolhas que já aconteceram.</p>
            <h3>Você procura vendas ou tráfego.</h3>
            <p>Esse não é o assunto da aula e não existe promessa de faturamento.</p>
          </div>
        </div>
      </section>

      <section className="research section">
        <div className="container">
          <SectionHeading
            eyebrow="Painel da pesquisa"
            title="Antes da aula, 22 relatos de donos de negócio foram lidos."
            intro="Não são depoimentos de alunos. São relatos publicados em fórum aberto sobre escolhas caras no negócio. Em 18 deles, a pessoa contou a cena sem usar a palavra decisão."
          />
          <div className="quote-grid">
            <blockquote>“Em dinheiro que gastei: contratar pessoas erradas e demorar para demitir.”</blockquote>
            <blockquote>“A maior cagada que eu fiz empreendendo foi comprar barato demais e em quantidade demais.”</blockquote>
            <blockquote>“No papel, aquilo parecia simplesmente absurdo de bom.”</blockquote>
            <blockquote>“Fiado é uma desgraça até quando o cliente paga.”</blockquote>
          </div>
          <p className="research-note">Pesquisa apresentada como pesquisa. Esta é a primeira turma e ainda não existem depoimentos de alunos.</p>
        </div>
      </section>

      <section className="guarantee section cream">
        <div className="container guarantee-card">
          <div className="seal" aria-label="Garantia de 15 dias">
            <span className="seal-label">garantia</span>
            <strong className="seal-number">15</strong>
            <span className="seal-unit">dias</span>
          </div>
          <div>
            <p className="eyebrow">Garantia sem pergunta</p>
            <h2>Ou você termina com um número calculado, ou o risco fica com o Magdiel.</h2>
            <p>
              Você tem 15 dias contados a partir da aula para pedir o valor de volta. Sem formulário e sem justificativa. A planilha, o guia e o checklist continuam com você.
            </p>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container faq-grid">
          <SectionHeading eyebrow="Dúvidas frequentes" title="Respostas diretas antes de decidir" />
          <div className="faq-list">
            {faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-offer section charcoal" id="inscricao">
        <div className="container offer-card">
          <p className="eyebrow light">Auditoria das Decisões que Custam Dinheiro</p>
          <h2>Duas horas para descobrir quanto custou. Um método para parar antes da próxima.</h2>
          <p className="offer-description">
            Aula ao vivo, Planilha da Auditoria, Guia de Bolso da Decisão Cara e Checklist do Segundo Lance.
          </p>
          <div className="offer-price"><span>Investimento</span><strong>R$ 97</strong><small>Lote único</small></div>
          <CheckoutButton />
          <p className="offer-schedule"><EventSchedule />. Garantia de 15 dias após a aula.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><strong>Magdiel Negrão</strong><span>Método Arquitetura da Decisão</span></div>
          <p>Auditoria das Decisões que Custam Dinheiro</p>
          <Link href="#top">Voltar ao início</Link>
        </div>
      </footer>
    </main>
  );
}
