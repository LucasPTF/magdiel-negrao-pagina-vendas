# Auditoria das Decisões que Custam Dinheiro

Página de vendas desenvolvida para Magdiel Negrão e para a primeira turma da aula ao vivo Auditoria das Decisões que Custam Dinheiro.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- CSS responsivo

## Rotas

- `/a1`
- `/a2`
- `/a3`
- `/obrigado`

As três páginas de vendas usam os mesmos componentes, conteúdo, oferta e identidade visual. Somente a comunicação da hero muda entre as rotas.

## Configuração

Copie `.env.example` para `.env.local` e preencha as variáveis quando as informações forem fornecidas:

```text
NEXT_PUBLIC_CHECKOUT_URL=
NEXT_PUBLIC_EVENT_DATE=
NEXT_PUBLIC_EVENT_TIME=
```

Sem checkout configurado, o botão final permanece desativado. Sem data e horário, a página informa que os detalhes estão em definição.

## Execução local

```bash
pnpm install
pnpm dev
```

## Build de produção

```bash
pnpm build
pnpm start
```
