### 🔍 O que NÃO foi abordado (Lacunas para suas pesquisas diárias)


1. **Programação e Frameworks de IA (Code-first):** O material foca em n8n. Para projetos robustos de software, você precisará pesquisar sobre **LangChain** e **LlamaIndex** (frameworks em Python/TypeScript para criar aplicações com LLMs e RAG via código).
    
2. **Fine-Tuning vs. RAG:** As aulas explicam bem o RAG, mas não entram no conceito de _Fine-Tuning_ (ajuste fino), que é quando você realmente retreina os neurônios de um modelo existente com dados novos. É fundamental saber quando usar um ou outro.
    
3. **Segurança e Riscos de IA Generativa:** Não há menção a **Prompt Injection** (quando um usuário malicioso engana o prompt para expor dados), vazamento de dados em LLMs públicas ou governança (LGPD aplicada à IA).
    
4. **Modelos Open-Source (Locais):** O curso parece pressupor o uso de APIs comerciais (como OpenAI). Vale a pena pesquisar sobre como rodar modelos localmente usando ferramentas como **Ollama** e modelos abertos (Llama 3, Mistral), o que é vital para empresas que não podem enviar dados para a nuvem.
    
5. **Métricas de Avaliação:** Como saber se o seu RAG ou seu Prompt está bom? Pesquise sobre frameworks de avaliação como **Ragas** ou **TruLens** (métricas de fidelidade, relevância do contexto, etc.).