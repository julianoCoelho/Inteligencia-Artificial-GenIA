# Inteligência Artificial GenIA 🧠🤖

Este repositório foi criado para centralizar e organizar todos os materiais, exemplos práticos e atividades desenvolvidas ao longo da disciplina de Inteligência Artificial GenIA. 
O conteúdo será atualizado gradualmente conforme o avanço das aulas.

---

## 📅 Cronograma e Conteúdo das Aulas

O curso está estruturado em 4 aulas principais, divididas nas seguintes pastas:

- **📂 Aula-1: Fundamentos de IA e Engenharia de Prompt**
  - **Teoria:** Histórico da IA (Teste de Turing, Conferência de Dartmouth, Perceptron) e anatomia de um prompt eficaz (Papel, Contexto, Tarefa, Formato e Restrições). Técnicas como *Chain of Thought* (Cadeia de Raciocínio).
  - **Prática (Laboratório):** Integração com Modelos de Linguagem (LLMs) via código. Criação de scripts práticos testando variações de *System Prompts* (Personas) e comparação de modelos (`llama-3.1-8b-instant`).
- **📂 Aula-2:** Conteúdo programático, exemplos e atividades da aula 2.
- **📂 Aula-3:** Conteúdo programático, exemplos e atividades da aula 3.
- **📂 Aula-4:** Conteúdo programático, exemplos e atividades da aula 4.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

### Linguagens e Ambientes (Aula 1)

- **Node.js & JavaScript (ES6+):** Ambiente de execução e linguagem para o desenvolvimento dos scripts de integração.
- **Visual Studio Code (VS Code):** Editor de código base para o desenvolvimento do laboratório.

### Bibliotecas e APIs (Aula 1)

- **Groq API:** Infraestrutura de inferência ultra-rápida utilizada para consumir os modelos de LLM.
- **OpenAI SDK (`openai`):** Biblioteca oficial da OpenAI utilizada de forma compatível para realizar as chamadas de Chat Completion na API da Groq.
- **Dotenv (`dotenv`):** Gerenciamento seguro de variáveis de ambiente (armazenamento da `GROQ_API_KEY`).

### Modelos de LLM Testados

- `llama-3.1-8b-instant`

---

## 🚀 Como Executar os Projetos da Aula 1

1. Navegue até a pasta correspondente:

```bash
   cd Aula-1
```

2. Instale as dependências necessárias:
  

```bash
npm install
```

3. Crie um arquivo `.env` na raiz da pasta seguindo o modelo `.env.example` e adicione sua chave:
  

```bash
GROQ_API_KEY=sua_chave_aqui
```

4. Execute o script principal:
  

```bash
node seu-script.js
```

Repositório em constante atualização 🚀
