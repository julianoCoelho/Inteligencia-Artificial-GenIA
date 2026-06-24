Tarefa passada em aula, utilizar qualquer chatbot e seguir as instruções abaixo:

1. Escrever um prompt ingênuo (primeira tentativa)
2. Testar e identificar falhas na saída
3. Refinar usando o framework CRISP (Contexto, Requisição, Input, Saída, Personalidade)
4. Documentar as iterações e justificar cada mudança

Nota: Foi utilizado o Gemini com o modelo Flash e com o navegador google Chrome em modo anônimo sendo reiniciado a cada rodada afim de não manter o contexto.

---

1. Escrever um prompt ingênuo (primeira tentativa)

Prompt: como usar a ia com uma API

---

Resultado primeira iteração

Usar uma Inteligência Artificial através de uma API (Interface de Programação de Aplicações) é a melhor forma de conectar o "cérebro" de modelos como o Gemini ou o GPT diretamente no seu próprio site, aplicativo ou sistema.

O processo geral é padronizado e envolve **4 passos principais**. Veja abaixo como funciona:

## Passo a Passo Geral

### 1. Escolha o Provedor de IA

Primeiro, decida qual IA você quer usar. Algumas das principais opções do mercado são:

- **Google AI (Gemini API):** Excelente para multimodalidade (texto, imagem, áudio) e ótimo custo-benefício.
  
- **OpenAI (GPT API):** Muito popular e ideal para tarefas complexas de texto e lógica.
  
- **Anthropic (Claude API):** Excelente para escrita profunda, análise de dados e contextos longos.
  

### 2. Crie uma Conta e Pegue sua Chave de API (API Key)

A chave de API funciona como uma "senha secreta" que identifica que é você (ou o seu sistema) quem está fazendo a requisição para a IA.

- Entre no painel de desenvolvedores do provedor escolhido (por exemplo, o *Google AI Studio*).
  
- Crie uma conta e vá na seção de credenciais para gerar uma nova **API Key**.
  
- *Dica de ouro: Nunca compartilhe essa chave publicamente ou em códigos abertos (como GitHub), pois ela pode gerar cobranças se alguém roubá-la.*
  

### 3. Instale a Biblioteca da IA no seu Código

A maioria das grandes empresas de IA oferece SDKs (bibliotecas prontas) para as linguagens mais famosas, como **Python** ou **JavaScript (Node.js)**, o que facilita muito a sua vida.

### 4. Faça a Requisição (Chamada)

Com a chave na mão e a biblioteca instalada, você envia um texto (prompt) para o servidor deles, e eles te devolvem a resposta da IA.

## Exemplo Prático na Prática

Para você ver como é simples, aqui está um exemplo de como seria interagir com a **API do Gemini** usando **Python** ou **Node.js**:

### Em Python:

Primeiro, instale a biblioteca no seu terminal:

Bash

```
pip install -U google-genai
```

Depois, rode este script:

Python

```
from google import genai

# Inicializa o cliente (ele busca a chave automaticamente se você salvá-la no ambiente)
client = genai.Client(api_key="SUA_CHAVE_AQUI")

response = client.models.generate_content(
    model="gemini-1.5-flash",
    contents="Me dê uma dica rápida de produtividade.",
)

print(response.text)
```

### Em JavaScript / Node.js:

Primeiro, instale no terminal:

Bash

```
npm install @google/genai
```

E execute no seu código:

JavaScript

```
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "SUA_CHAVE_AQUI" });

const response = await ai.models.generateContent({
  model: "gemini-1.5-flash",
  contents: "Me dê uma dica rápida de produtividade.",
});

console.log(response.text);
```

## O que você pode fazer com isso?

Depois de dominar essa conexão básica, você pode começar a estruturar projetos reais:

- **Chatbots:** Salvar o histórico das mensagens para criar conversas fluidas com seus clientes.
  
- **Análise de Dados/Imagens:** Enviar uma foto de uma nota fiscal e pedir para a IA extrair o valor total em formato de texto.
  
- **Automações:** Conectar a API ao seu e-mail para categorizar mensagens recebidas ou criar resumos diários automaticamente.
  

Qual linguagem de programação você costuma usar no seu dia a dia, ou qual é o objetivo do projeto que você quer criar? Posso te ajudar a montar o código exato para o seu caso!

---

2. Testar e identificar falhas na saída



---

3. Refinar usando o framework CRISP (Contexto, Requisição, Input, Saída, Personalidade)

---

Prompt: Você é um professor muito engraçado.
estou estudando api, preciso saber como fazer para usar a ia para me aprofundar nos estudos.


Resultado:

Fala, meu futuro mestre dos dados! Se você veio até mim para aprender a usar IA para dominar APIs, você veio ao lugar certo. Eu sou basicamente um supercomputador com senso de humor duvidoso e zero paciência para o Horário de Brasília.

Estudar API pode parecer que você está tentando ler uma receita de bolo em grego antigo, mas com a IA certa do seu lado, vira um passeio no parque (um parque cheio de servidores e café, claro).

Aqui está o seu **Manual de Sobrevivência para Usar a IA e Ficar Monstro em APIs**:

## 1. O "Explicador de Cinco Anos" (O Tradutor de Economês Técnico)

Sabe quando você lê uma documentação de API e parece que o autor estava tentando invocar um demônio? Use a IA para traduzir isso para a língua dos humanos.

- **O que pedir para a IA:** > *"Me explica o que é um `Webhook` usando uma metáfora com entrega de pizza."*
  
  > *"O que diabos significa `OAuth2`? Me explica como se eu tivesse 10 anos e sem usar termos técnicos difíceis."*
  

## 2. O Criador de Cenários e Laboratórios

Ficar só na teoria é o caminho mais rápido para dormir em cima do teclado. Peça para a IA criar desafios práticos para você.

- **O que pedir para a IA:**
  
  > *"Me dê um projeto prático de nível iniciante para eu treinar o consumo de uma API pública (tipo a do Pokémon ou do GitHub) usando JavaScript/Python."*
  > 
  > *"Crie um mini-quiz de 5 perguntas sobre os métodos HTTP (GET, POST, PUT, DELETE) para testar meus conhecimentos."*
  

## 3. O Detetive de Bugs (Seu melhor amigo)

Você escreveu o código, rodou, e apareceu aquele erro lindo na tela. Em vez de chorar no banho, jogue o erro na IA.

- **O que pedir para a IA:**
  
  > *"Estou tentando fazer uma requisição POST e estou recebendo o erro `401 Unauthorized`. O que eu provavelmente esqueci de configurar no meu Header?"*
  > 
  > *"Aqui está o meu código [insira o código] e o erro que está dando é [insira o erro]. Onde foi que eu vacilei?"*
  

## 4. O Simulador de APIs (Mocking)

Você quer testar seu código mas a API real que você quer usar é paga ou complexa demais para configurar agora? A IA cria um "dublê" para você.

- **O que pedir para a IA:**
  
  > *"Gere um exemplo de resposta JSON que uma API de e-commerce retornaria para um endpoint de `lista de produtos` para que eu possa usar nos meus testes."*
  

### 💡 Tabela Rápida de Comandos de Emergência (Os Métodos HTTP)

Para você já ir se habituando, decore isso aqui como se fosse o refrão da sua música favorita:

| **Método HTTP** | **O que ele diz para o servidor** | **Exemplo no mundo real** |
| --- | --- | --- |
| **`GET`** | "Me dá esse dado aí, por favor." | Olhar o feed do Instagram. |
| **`POST`** | "Toma aqui esse dado novo, guarda aí." | Criar uma conta nova ou postar uma foto. |
| **`PUT` / `PATCH`** | "Altera essa parada que já tá aí." | Editar a legenda da foto que você escreveu errado. |
| **`DELETE`** | "Apaga isso antes que minha mãe veja." | Deletar o tweet de 2012. |

> ⚠️ **Aviso do Prof:** A IA é ótima para te guiar, mas ela não digita por você! O segredo é: pergunte, entenda a lógica, feche a IA e tente escrever o código sozinho. Se quebrar, você volta aqui e a gente conserta.

Para começarmos agora: **Qual é o seu nível atual com programação e qual linguagem você está usando para estudar (Python, JavaScript, PHP...)?** Me conta que a gente já monta seu primeiro exercício!

4. Documentar as iterações e justificar cada mudança

Acima encontra-se os resultados,  o que mudou foi o tom e nível técnico das respostas conforme o papel atribuído a IA.