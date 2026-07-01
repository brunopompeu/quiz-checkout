# Spec de Prototipagem — Quiz com IA (2 protótipos)
> SPEC 04 — versão expandida
> Documento para uso direto no Claude Code

---

## Visão geral do produto

O quiz com IA tem duas faces:

- **Face do comprador:** conversa que aparece no momento de abandono do checkout, coleta dores e responde com o produto como solução — usando a base de conhecimento que o produtor configurou
- **Face do produtor:** painel onde o produtor alimenta a IA com todas as informações do produto (benefícios, objeções, FAQ, depoimentos) e habilita/configura o quiz

A IA usa a base do produtor como contexto para gerar respostas personalizadas para cada comprador.

---

---

# PROTÓTIPO 1 — Face do Comprador

## Contexto
Modal/overlay que aparece sobre o checkout quando o comprador demonstra intenção de sair.

**Gatilhos (qualquer um):**
- Cursor move em direção ao topo da tela (exit intent)
- Inatividade por 45+ segundos
- Botão Voltar do navegador interceptado

---

## Telas (3 estados em sequência)

### ESTADO 1 — Abertura
Overlay semitransparente claro sobre o checkout. Modal centralizado, fundo branco.

**Elementos:**
- Ícone de chat ou avatar neutro (não foto real)
- Título: *"Espera um segundo..."*
- Subtítulo: *"Antes de sair, posso te fazer uma pergunta rápida? Leva menos de 1 minuto."*
- Botão primário (amarelo #FFBC00, texto azul escuro #0D2772): **"Pode perguntar"**
- Link discreto abaixo: *"Não, quero sair"* (sem botão, só texto em cinza)

---

### ESTADO 2 — Conversa (4 perguntas, uma por vez)
Mesmo modal. Formato de chat — perguntas da IA à esquerda, respostas do comprador à direita.

**Barra de progresso no topo:** ●●○○ (avanço visual a cada pergunta)

**Pergunta 1 — A dor principal**
> *"Me conta: qual é o seu maior desafio com [tema do produto] hoje?"*
- Campo de texto livre
- Placeholder: *"Escreva com suas palavras..."*
- Botão: "Continuar →"

**Pergunta 2 — A tentativa frustrada**
> *"Você já tentou resolver isso antes? O que não funcionou?"*
- Campo de texto livre
- Botão: "Continuar →"

**Pergunta 3 — O sonho**
> *"Se você resolvesse isso nos próximos 90 dias, o que mudaria na sua vida ou no seu negócio?"*
- Campo de texto livre
- Botão: "Continuar →"

**Pergunta 4 — O obstáculo real**
> *"O que tem te impedido de dar esse passo até agora?"*
- Chips clicáveis (múltipla escolha, apenas 1):
  - 💰 "O preço ainda me preocupa"
  - 🤔 "Não sei se funciona pra minha situação"
  - ⏰ "Não tenho certeza se terei tempo"
  - 😔 "Já tentei outros cursos e não tive resultado"
  - ❓ "Tenho uma dúvida específica"
- Se escolher "Tenho uma dúvida específica" → campo de texto abre embaixo
- Botão: "Ver meu resultado →"

**Comportamento visual:**
- Modal fundo branco `#FFFFFF`, borda sutil `#E5E7EB`, sombra leve
- Cada pergunta nova aparece como nova mensagem (animação fade-in)
- Mensagens da IA: balão à esquerda, fundo `#F0F7FF`, borda esquerda azul claro `#00CAF9`, texto `#0D2772`
- Respostas do comprador: balão à direita, fundo `#0D2772`, texto branco `#FFFFFF`
- Barra de progresso: fundo `#E5E7EB`, preenchimento azul claro `#00CAF9`

---

### ESTADO 3 — Resultado personalizado
A IA usa as respostas + a base de conhecimento do produtor para montar a resposta.

**Estrutura:**

**Bloco 1 — Espelho (usa as palavras do comprador):**
> *"Você me disse que [resposta 1], que já tentou [resposta 2], e que quer [resposta 3]. Eu entendo exatamente esse momento."*

**Bloco 2 — Conexão com o produto:**
> *"[Nome do produto] foi criado pra quem está exatamente onde você está. [Trecho da base de conhecimento do produtor conectado à dor relatada]."*

**Bloco 3 — Resposta à objeção (baseada na pergunta 4):**
- Se preço → mostra parcelamento + argumento de ROI
- Se dúvida de resultado → mostra depoimento de perfil similar
- Se tempo → mostra argumento de ritmo próprio / acesso vitalício
- Se tentou antes → mostra o diferencial específico do produto

**Bloco 4 — CTA:**
- Botão grande (amarelo): **"Quero garantir minha vaga agora"**
- Link abaixo: *"Ainda tenho dúvidas"* → abre campo de texto → captura a dúvida mesmo sem converter

**Estado secundário — saiu sem responder:**
Se clicou em "Não, quero sair":
- Mini modal: *"Tudo bem! Deixa seu e-mail e te mando um resumo de tudo que esse curso pode fazer por você."*
- Campo de e-mail + botão "Enviar"

---

## Dados fictícios para o protótipo 1

**Produto:** "Marketing Digital para Pequenos Negócios" — R$297 (12x R$29,70)

**Respostas simuladas:**
- Dor: "Não consigo atrair clientes pelo Instagram sem pagar anúncio"
- Tentativa: "Já tentei postar todo dia por 3 meses, não vi resultado nenhum"
- Sonho: "Ter clientes chegando por conta própria, sem depender de indicação"
- Obstáculo: "Não sei se funciona pra minha situação"

**Resultado gerado:**
> *"Você me disse que não consegue atrair clientes pelo Instagram sem pagar anúncio, que já tentou postar todo dia por 3 meses sem resultado, e que quer ter clientes chegando por conta própria. Isso é mais comum do que parece — e tem um motivo claro pra não ter funcionado.*
>
> *A maioria dos conteúdos sobre Instagram ensina estratégia de criador de conteúdo, não de dono de negócio. Marketing Digital para Pequenos Negócios foi criado exatamente pra quem já tentou o que todo mundo ensina e não viu resultado. Aqui você aprende o que funciona pra negócio local e pequeno, com método, não achismo.*
>
> *Sobre funcionar pra sua situação: mais de 340 alunos com perfil parecido com o seu — negócios com menos de 5 funcionários, sem equipe de marketing — já aplicaram o método. A média de novos contatos orgânicos no primeiro mês é de 18."*

---

---

# PROTÓTIPO 2 — Face do Produtor (Painel de Configuração)

## Contexto
Seção dentro da aba **"Recuperação de vendas"** do painel de edição de produto no MyEduzz (Órbita). O produtor alimenta a base de conhecimento da IA e habilita o quiz.

---

## Estrutura da tela

### Cabeçalho da seção
- Título: **"Quiz com IA — Recuperação Inteligente"**
- Subtítulo: *"Configure o assistente de IA que conversa com compradores que estão saindo sem comprar."*
- Toggle grande: **"Ativar quiz para este produto"** (ativo/inativo)
- Badge de status: "Inativo" (cinza) / "Ativo" (verde)

---

### BLOCO 1 — Configuração do gatilho
*Quando o quiz aparece*

Três opções com checkbox (múltipla seleção):
- ☑ **Exit intent** — quando o cursor se move para fechar a aba
- ☑ **Inatividade** — após ___ segundos sem interação (campo numérico, padrão: 45)
- ☑ **Botão Voltar** — quando o comprador aperta voltar no navegador

---

### BLOCO 2 — Sobre o produto (contexto base)
*O que a IA precisa saber para contextualizar as respostas*

Campos:
- **Para quem é esse produto?** (textarea)
  - Placeholder: *"Ex: empreendedores iniciantes que querem vender online, mas não têm experiência com tráfego pago..."*
- **Para quem NÃO é?** (textarea)
  - Placeholder: *"Ex: não é indicado para quem já fatura acima de R$50k/mês ou para quem busca resultados em menos de 30 dias..."*
- **Qual problema central ele resolve?** (textarea)
  - Placeholder: *"Ex: o comprador não consegue atrair clientes sem depender de indicação ou anúncio caro..."*
- **Qual o principal resultado que o aluno alcança?** (textarea)
  - Placeholder: *"Ex: conseguir os primeiros clientes orgânicos em até 60 dias seguindo o método..."*
- **O que diferencia esse produto dos outros no mercado?** (textarea)
  - Placeholder: *"Ex: é o único com método validado para negócios locais com menos de 5 funcionários, com suporte semanal ao vivo..."*

---

### BLOCO 3 — Objeções e respostas
*O que a IA fala quando o comprador trava em cada obstáculo*

Quatro cards expansíveis (accordion), um por obstáculo:

**💰 Objeção: Preço**
- Campo: *"O que a IA deve responder quando o comprador disser que o preço preocupa?"*
- Placeholder: *"Ex: mostre o parcelamento, calcule o ROI, compare com o custo de não resolver o problema..."*
- Campo adicional: *"Argumento de ROI em uma linha"*
  - Ex: *"Mesmo 1 novo cliente por mês já paga o curso em menos de 60 dias."*

**🤔 Objeção: Dúvida se funciona pra mim**
- Campo: *"O que a IA deve responder?"*
- Placeholder: *"Ex: cite perfis de alunos similares, mencione a garantia, mostre depoimento específico..."*
- Campo: *"Cole aqui um depoimento de aluno com perfil parecido"*

**⏰ Objeção: Falta de tempo**
- Campo: *"O que a IA deve responder?"*
- Placeholder: *"Ex: mencione que as aulas têm X minutos, que o acesso é vitalício, que dá pra estudar no ritmo..."*
- Campo: *"Carga horária real do curso"* (numérico + unidade: horas/minutos por semana)

**😔 Objeção: Já tentei e não funcionou**
- Campo: *"O que a IA deve responder?"*
- Placeholder: *"Ex: diferencie o método do que o comprador tentou antes, mostre por que é diferente..."*
- Campo: *"Principal diferença em relação ao que existe no mercado"* (texto curto)

---

### BLOCO 4 — FAQ do produto
*Perguntas frequentes que a IA usa para responder dúvidas específicas*

Lista dinâmica de perguntas e respostas:
- Botão: **"+ Adicionar pergunta frequente"**
- Cada item: campo "Pergunta" + campo "Resposta" + botão de remover (X)
- Máximo sugerido: 20 perguntas
- Exemplos pré-carregados como placeholder:
  - *"Tem certificado?" → "Sim, o certificado é emitido ao concluir 100% do curso..."*
  - *"Por quanto tempo tenho acesso?" → "O acesso é vitalício, incluindo atualizações..."*
  - *"Tem garantia?" → "Sim, 7 dias de garantia incondicional..."*

---

### BLOCO 5 — Depoimentos de prova social
*A IA usa esses depoimentos para reforçar credibilidade*

Lista dinâmica:
- Botão: **"+ Adicionar depoimento"**
- Cada item:
  - Nome do aluno
  - Cargo/contexto (ex: "Dona de salão de beleza, SP")
  - Depoimento (texto curto, máx 280 caracteres)
  - Resultado específico (ex: "Conseguiu 12 novos clientes no primeiro mês")

---

### BLOCO 6 — Garantia e política
- Campo: *"Prazo da garantia"* (numérico — em dias)
- Campo: *"Como funciona a garantia?"* (textarea curto)
- Campo: *"Como o aluno acessa o produto após comprar?"* (texto curto)

---

### BLOCO 7 — Preview e teste
- Botão: **"Visualizar como o comprador vai ver"** → abre modal de simulação do quiz com as respostas salvas
- Botão: **"Testar com uma situação"** → campo onde o produtor digita uma dor fictícia e vê o que a IA responderia
- Indicador: *"Base de conhecimento: 87% completa"* (barra de progresso — incentiva o produtor a preencher mais)

---

### Rodapé da seção
- Botão primário: **"Salvar configurações"**
- Texto de rodapé: *"Quanto mais informações você fornecer, mais personalizadas e eficazes serão as respostas da IA."*

---

## Identidade visual — Protótipo 1 (Face do Comprador)

**Light mode — coerente com o checkout Sun da Eduzz:**
- Overlay: `rgba(0,0,0,0.35)` sobre o checkout (leve, não esconde o contexto)
- Modal: fundo branco `#FFFFFF`, border-radius 16px, sombra suave
- Título e texto principal: Azul Eduzz `#0D2772`
- Texto secundário: `#6B7280`
- Mensagens da IA: fundo `#F0F7FF`, borda esquerda `#00CAF9`, texto `#0D2772`
- Mensagens do comprador: fundo `#0D2772`, texto `#FFFFFF`
- Chips de objeção: borda `#0D2772`, selecionado fundo `#0D2772` texto branco
- CTA primário: fundo `#FFBC00`, texto `#0D2772`, bold
- Barra de progresso: trilha `#E5E7EB`, preenchimento `#00CAF9`
- Fonte: Syne (Google Fonts)

---

## Identidade visual — Protótipo 2 (Face do Produtor)

**Seguir o padrão do MyEduzz/Órbita (tema claro):**
- Fundo: branco `#FFFFFF`
- Sidebar: Azul Eduzz `#0D2772`
- Aba ativa: Azul Eduzz `#0D2772`
- Botões primários: Azul Eduzz `#0D2772`
- Destaques e badges ativos: Azul Claro `#00CAF9`
- Toggle ativo: Azul Claro `#00CAF9`
- Alertas/dicas: Amarelo `#FFBC00`
- Fonte: Syne (Google Fonts)

```
Você é um designer de produto sênior especializado em plataformas SaaS B2B.

Crie dois protótipos interativos em React + Tailwind, em arquivos ou componentes separados:

---

PROTÓTIPO 1 — Face do Comprador (quiz no checkout)

Modal/overlay com 3 estados em sequência:
1. Abertura (gancho de saída)
2. Conversa (4 perguntas em formato chat, uma por vez com animação)
3. Resultado personalizado (mensagem que usa interpolação das respostas do comprador)

VISUAL — LIGHT MODE, coerente com o checkout Sun da Eduzz:
- Overlay: rgba(0,0,0,0.35) sobre o checkout simulado
- Modal: fundo branco #FFFFFF, border-radius 16px, sombra suave, máx 480px largura
- Título e texto: #0D2772
- Mensagens da IA: balão à esquerda, fundo #F0F7FF, borda esquerda #00CAF9, texto #0D2772
- Respostas do comprador: balão à direita, fundo #0D2772, texto branco
- Chips de objeção: borda #0D2772, selecionado fundo #0D2772 texto branco
- Barra de progresso: trilha #E5E7EB, preenchimento #00CAF9
- CTA: fundo #FFBC00, texto #0D2772 bold
- Produto fictício: "Marketing Digital para Pequenos Negócios" — R$297
- Use os dados fictícios de respostas e o resultado completo incluídos no spec
- Fonte: Syne (Google Fonts)
- Todos os textos em português brasileiro

---

PROTÓTIPO 2 — Face do Produtor (painel de configuração no MyEduzz)

Página de configuração do quiz, tema claro, simulando a aba "Recuperação de vendas" do painel MyEduzz/Órbita da Eduzz.

Estrutura em 7 blocos:
1. Toggle de ativação + status
2. Configuração de gatilho (checkboxes)
3. Sobre o produto (5 textareas)
4. Objeções e respostas (4 cards accordion expansíveis)
5. FAQ dinâmico (lista com adicionar/remover)
6. Depoimentos dinâmicos (lista com adicionar/remover)
7. Garantia + preview/teste + salvar

- Sidebar esquerda com navegação simulada do MyEduzz (azul #0D2772)
- Conteúdo principal em branco com cards separados por bloco
- Toggle de ativação com estado visual claro (ativo/inativo)
- Barra de progresso "Base de conhecimento X% completa"
- Botão "Visualizar como o comprador vê" abre o Protótipo 1 em modal
- Fonte: Syne (Google Fonts)
- Todos os textos em português brasileiro

---

Requisito de conexão entre os dois:
No Protótipo 2, o botão "Visualizar como o comprador vai ver" deve renderizar o Protótipo 1 em modal, usando os dados que estiverem preenchidos nos campos do produtor.
```

---

## O que esses protótipos precisam provar

**Protótipo 1:**
- A conversa flui naturalmente — não parece formulário
- A mensagem de resultado cria identificação imediata
- O comprador que não converte ainda deixa rastro (e-mail ou dúvida)

**Protótipo 2:**
- O produtor consegue configurar sem ajuda técnica
- Quanto mais ele preenche, mais poderosa a IA fica
- A conexão entre base de conhecimento → resposta personalizada é visível e tangível

