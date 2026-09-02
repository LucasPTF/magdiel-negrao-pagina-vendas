import Link from "next/link";

function Schedule() {
  const date = process.env.NEXT_PUBLIC_EVENT_DATE;
  const time = process.env.NEXT_PUBLIC_EVENT_TIME;

  if (date && time) return <>{date}, às {time}</>;
  if (date) return <>{date}</>;
  return <>A data e o horário serão informados por e-mail</>;
}

export default function ThankYouPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-mark" aria-hidden="true">MN</div>
      <section className="thanks-card">
        <p className="eyebrow light">Seu próximo passo</p>
        <h1>Inscrição concluída? Agora confira o e-mail usado na compra.</h1>
        <p className="thanks-lead">
          A confirmação do pagamento e as próximas instruções serão enviadas para esse endereço. A Planilha da Auditoria também chegará por lá.
        </p>
        <div className="thanks-steps">
          <article><span>01</span><h2>Procure a confirmação</h2><p>Verifique a caixa de entrada, as abas de promoções e a pasta de spam.</p></article>
          <article><span>02</span><h2>Abra a planilha</h2><p>Anote três ou quatro escolhas do último ano que você gostaria de transformar em conta.</p></article>
          <article><span>03</span><h2>Reserve o encontro</h2><p><Schedule />. O link de acesso será enviado no mesmo e-mail.</p></article>
        </div>
        <div className="thanks-note">
          <strong>Se a confirmação ainda não apareceu</strong>
          <p>O pagamento pode estar em processamento. Aguarde a confirmação e volte a verificar o e-mail informado na compra.</p>
        </div>
        <Link className="text-link thanks-link" href="/a1">Voltar para a página</Link>
      </section>
    </main>
  );
}
