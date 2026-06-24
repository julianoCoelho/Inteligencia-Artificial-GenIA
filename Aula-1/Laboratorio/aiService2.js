/**
 * Este Laboratório com exemplos práticos vistos na aula 1
 * - Atividades desenvolvidas em aula para fixar os conceitos
 * - Consumindo uma API com NodeJs e JavaScript - GROGAPI
 * - Atividade LAB 1 
 * 
 * NOTA: Na Groq, usamos modelos reais e gratuitos como o "llama3-8b-8192" ou "mixtral-8x7b-32768".
 *  
 * Lab 1 — "Quem Está Respondendo?"

A Regra:

A user message nunca muda:

- Explica o que é uma API.

O Grupo vai rodar essa mesma pergunta quatro vezes, trocando apenas o system prompt.

---
As Quatro Rodadas

|     | System Prompt                                                                                   |
| --- | ----------------------------------------------------------------------------------------------- |
| 1   | Vazio                                                                                           |
| 2   | "Você é um professor explicando para uma criança de 10 anos."                                   |
| 4   | "Você é um desenvolvedor sênior respondendo para um colega de trabalho. Seja direto e técnico." |
| 5   | O grupo escreve o próprio                                                                       |

A Entrega

Após as quatro rodadas, o aluno responde por escrito em 3 frases:

1. O que mudou nas respostas?
2. O que no system prompt causou essa mudança?
3. O que o grupo colocou no prompt e por quê?

Resultdo Arquivo: Lab-1.md

Utilizei o arquivo aiService2.js, como o model: openai/gpt-oss-20b


 * */

// Importações 
import 'dotenv/config'; 
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

async function askAI(userMessage, systemPrompt) {
  try {
    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-20b",
      temperature: 0.7,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Erro na API da OpenAI", error);
  }
}

// Exercicio Lab 1 - aula 1 
const userMessage = "Explica o que é uma API.";

const rodadas = [
  { id: 1, prompt: "" }, 
  { id: 2, prompt: "Você é um professor explicando para uma criança de 10 anos." },
  { id: 3, prompt: "Você é um desenvolvedor sênior respondendo para um colega de trabalho. Seja direto e técnico." },
  { id: 4, prompt: "Você é um nerd do século XX. Responda usando gírias." } 
];

// Execução das 4 rodadas consecutivas
console.log("------------| Resultado LAB - 1 |------------------");

for (const rodada of rodadas) {
  console.log(`\n--------------------------------------------------`);
  console.log(`RODADA #${rodada.id}`);
  console.log(`System Prompt: "${rodada.prompt || '(vazio)'}"`);
  console.log(`--------------------------------------------------`);
  
  const resposta = await askAI(userMessage, rodada.prompt);
  console.log(resposta);
}