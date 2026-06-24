/**
 * Este Laboratório com exemplos práticos vistos na aula 1
 * - Atividades desenvolvidas em aula para fixar os conceitos
 * - Consumindo uma API com NodeJs e JavaScript - GROGAPI
 * 
 * NOTA: Na Groq, usamos modelos reais e gratuitos como o "llama3-8b-8192" ou "mixtral-8x7b-32768".
 *  
 * */

// Importações 
import 'dotenv/config'; 
import OpenAI from "openai";

// Inicializando Cliente Apontando Servidor Groq
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

async function askAI(userMessage, systemPrompt = "Você é um assistente útil") {
  try {
    const response = await client.chat.completions.create({
      // /model: "openai/gpt-oss-20b",
      model: "llama-3.1-8b-instant",
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
// Executando o teste passando uma pergunta
const resposta = await askAI("Explique o que é uma API em uma frase.");
console.log("\n--- Resposta da Inteligência Artificial ---");
console.log(resposta);
console.log("-------------------------------------------\n");