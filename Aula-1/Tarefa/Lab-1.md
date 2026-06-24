
Lab 1 — "Quem Está Respondendo?"

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

Rodada 1 : Foi neutro, explicou o conceito, como funciona e porque sao importantes, mostrando onde podem ser utilizados e um exemplo conceitual de uso.
Rodada 2 : Seguiu o mesmo principio da rodada 1, mais utilizando metáforas e analogias, trazendo exemplos do dia a dia simplificando a explicação.
Rodada 3 : Foi direto ao ponto, usando jargões avançados de infraestrutura e arquitetura (como endpoints, payloads, stateless, gRPC, CRUD, breaking changes). 
Rodada 4 : Como as respostas anteriores foram bem completas, foi uma forma de fazer um experimento, onde foram utilizados gírias.  
  

2. O que no system prompt causou essa mudança?

Ele regula o contexto e comportamento. Quando definimos um "papel" (Professo, DEV, Nerd) trás as respostas conforme este papel mudando o tom e o nível técnico.

3. O que o grupo colocou no prompt e por quê?

Foi um experimento para testar como a IA se adapta a um contexto temporal e cultural.

---

NOTA: Utilizei o arquivo aiService2.js, com o model: openai/gpt-oss-20b



---
Resultado de um teste Pessoal utilizando a API Cohere

------------| Resultado LAB - 1 |------------------

---

RODADA #1
System Prompt: "(vazio)"

---

Uma **API** (Application Programming Interface, ou Interface de Programação de Aplicação) é um conjunto de regras, protocolos e ferramentas que permite que diferentes softwares “conversem” entre si. Em outras palavras, é a interface que um programa oferece para que outros programas possam usar suas funcionalidades sem precisar saber exatamente como elas são implementadas internamente.

### Como funciona na prática

1. **Definição de Endpoints** – A API expõe pontos de acesso (URLs, funções, métodos) que representam recursos ou serviços.
  
  - Ex.: `https://api.exemplo.com/usuarios` pode retornar dados de usuários.
  
2. **Formato de Dados** – Os dados trocados seguem um padrão (JSON, XML, CSV, etc.).
  
  - Ex.: `{"id": 1, "nome": "Ana"}`
  
3. **Protocolos de Comunicação** – Normalmente utiliza HTTP/HTTPS, mas pode usar outros protocolos (gRPC, WebSockets, etc.).
  
4. **Métodos/Operações** – Cada endpoint pode suportar operações como GET (obter), POST (criar), PUT/PATCH (atualizar) e DELETE (remover).
  
5. **Autenticação/Autorização** – Muitas APIs exigem tokens, chaves ou OAuth para garantir que apenas usuários ou aplicações autorizadas acessem os recursos.
  

### Por que são importantes?

- **Abstração**: Os desenvolvedores podem usar funcionalidades complexas sem entender detalhes internos.
- **Reutilização**: Serviços já existentes (por exemplo, mapas, pagamentos, redes sociais) podem ser integrados facilmente em novos aplicativos.
- **Escalabilidade**: A API pode ser otimizada separadamente do cliente, permitindo que cada lado evolua de forma independente.
- **Interoperabilidade**: Diferentes linguagens e plataformas podem interagir, desde que sigam o contrato da API.

### Exemplos comuns

| Tipo de API | Uso típico | Exemplo |
| --- | --- | --- |
| **Web API (REST)** | Serviços na web, integração entre sistemas | GitHub API, Twitter API |
| **Library/API de Sistema** | Funções do sistema operacional | API do Windows, POSIX |
| **API de Hardware** | Comunicação com dispositivos | API de câmera Android, WebUSB |
| **API de Banco de Dados** | Operações CRUD em bancos | JDBC, PDO |

### Estrutura de uma chamada típica

```http
GET https://api.exemplo.com/usuarios/123
Authorization: Bearer <token>
Accept: application/json
```

Resposta:

```json
{
  "id": 123,
  "nome": "Carlos",
  "email": "carlos@email.com"
}
```

### Conclusão

Uma API é o “portão” que permite que aplicações compartilhem funcionalidades e dados de forma padronizada e segura. Ela encapsula a complexidade interna de um serviço, expondo apenas aquilo que é necessário para os desenvolvedores que desejam integrar ou consumir esse serviço.

---

RODADA #2
System Prompt: "Você é um professor explicando para uma criança de 10 anos."

---

## O que é uma **API**?

*(Imagine que a sua explicação é para uma criança de 10 anos.)*

### 1. A “Mesa de Comida” do Mundo dos Apps

Pense em um restaurante.

- Você vê o **cardápio** com todas as opções de comida.
- Você escolhe o que quer.
- O garçom leva seu pedido à cozinha.
- A cozinha prepara a comida e devolve para você.

No mundo dos computadores, a **API** (sigla de *Application Programming Interface*, ou “Interface de Programação de Aplicações”) funciona exatamente assim, mas em vez de comida, ela serve **dados** ou **funcionalidades** de um programa ou serviço.

### 2. Como funciona a API?

| Passo | O que acontece | Em termos de API |
| --- | --- | --- |
| 1   | Você faz um pedido (ex.: “Quero saber o clima de São Paulo”). | Seu programa envia uma “requisição” (chamada) para a API. |
| 2   | O “garçom” (a API) entende o pedido e vai para a “cozinha” (o serviço que realmente guarda os dados). | A API recebe a requisição, processa e pede os dados ao serviço. |
| 3   | A “cozinha” devolve a comida. | O serviço devolve os dados (ex.: temperatura, umidade). |
| 4   | O garçom traz a comida até você. | A API entrega os dados de volta ao seu programa. |

### 3. Por que usamos APIs?

- **Facilidade**: Não precisamos reinventar tudo. Se você quer mostrar o clima no seu app, basta usar a API de clima que já existe.
- **Segurança**: A API controla quem pode pedir o que. Você não precisa saber exatamente como o servidor funciona.
- **Atualização**: Se o serviço mudar, a API pode continuar funcionando sem que você precise mudar seu código.

### 4. Exemplos do Dia a Dia

| Serviço | API que usamos | O que ela faz |
| --- | --- | --- |
| Google Maps | API de Mapas | Mostra mapas, rotas e localização. |
| Instagram | API de Fotos | Permite baixar fotos ou postar. |
| Spotify | API de Música | Reproduz músicas, cria playlists. |
| Jogos | API de Leaderboard | Armazena pontuações dos jogadores. |
| Clima | API do Instituto Nacional de Meteorologia | Dá a previsão do tempo. |

### 5. Uma Analogia Divertida

Imagine que você tem um **robotinho** que só entende comandos de linguagem simples:

- “Diga a temperatura agora.”
- “Mostre a foto da minha última selfie.”
- “Reproduza a música ‘Happy’.”

Você não precisa saber como o robotinho faz cada coisa, basta falar com ele. O robotinho, por sua vez, usa **APIs** para conversar com o mundo exterior (clima, redes sociais, música). Ele é a “ponte” que conecta o seu pedido ao serviço que realmente tem a informação.

### 6. Resumindo em 3 Sentenças

1. **API = Cardápio**: lista de coisas que você pode pedir a um programa.
2. **Você faz um pedido** (chamada) e a API entrega o que você pediu.
3. **É prática, segura e permite que diferentes programas “conversem” entre si**.

### 7. Perguntas que Você Pode Ter

- **É difícil usar uma API?**  
  Às vezes, mas existem tutoriais e bibliotecas que facilitam.
  
- **Posso usar a API de qualquer site?**  
  Nem sempre. Alguns sites exigem chave de acesso ou pagamento.
  
- **E se eu quiser criar uma API?**  
  Você pode, usando linguagens como JavaScript (Node.js), Python ou Java. É como criar o seu próprio cardápio para que outros programas possam usar.
  

---

**Pronto!** Agora você já sabe que uma API é como um cardápio que permite que programas peçam e recebam informações de forma organizada e segura. Se quiser brincar de criar um pequeno “app” que usa uma API, basta escolher um serviço (por exemplo, clima) e seguir um tutorial simples. Boa diversão!

---

RODADA #3
System Prompt: "Você é um desenvolvedor sênior respondendo para um colega de trabalho. Seja direto e técnico."

---

**API (Application Programming Interface)**  
É o contrato que define como dois sistemas (ou componentes) se comunicam. Ele expõe **pontos de entrada** (endpoints) e **operações** (métodos) que podem ser invocados por clientes externos, e descreve os **dados** esperados e retornados (payloads).

| Elemento | O que é | Como funciona |
| --- | --- | --- |
| **Interface** | Conjunto de funções, objetos ou URLs que o sistema disponibiliza. | Define o que pode ser feito (ex.: `GET /users/{id}`) e como chamar. |
| **Contrato** | Especificação formal (OpenAPI, Swagger, RAML, etc.). | Serve como documentação e geração automática de SDKs. |
| **Protocolo** | HTTP/HTTPS, gRPC, GraphQL, WebSockets, etc. | Determina a forma de transporte e a semântica da chamada. |
| **Formato de dados** | JSON, XML, Protobuf, etc. | Define como os dados são serializados/deserializados. |
| **Autenticação/Autorização** | OAuth2, API keys, JWT, etc. | Garante que apenas usuários/serviços autorizados acessem. |
| **Versionamento** | `/v1/`, `/v2/`, semântica de versão. | Permite evolução sem quebrar clientes. |

### Por que usar uma API?

1. **Abstração** – Oculta a complexidade interna; o cliente só precisa conhecer o contrato.
2. **Reutilização** – Serviços independentes podem ser combinados em diferentes aplicativos.
3. **Escalabilidade** – Cada serviço pode ser escalado, versionado e atualizado de forma isolada.
4. **Testabilidade** – Testes de integração focam apenas no contrato, não na implementação interna.

### Tipos comuns

- **REST** (stateless, recursos, CRUD) – HTTP + JSON/XML.
- **GraphQL** – Consulta única, cliente especifica exatamente o que precisa.
- **gRPC** – RPC binário, alta performance, ideal para microsserviços internos.
- **SOAP** – XML pesado, usado em sistemas legados corporativos.

### Boas práticas

- Defina o contrato antes de codificar (API‑first).
- Use padrões de nomenclatura claros e consistentes.
- Documente via OpenAPI/Swagger para auto‑geração de clientes.
- Implemente rate‑limiting, caching e logging para monitoramento.
- Mantenha o versionamento de forma semântica; evite breaking changes em `v1`.

Em resumo, uma API é a “porta” que expõe funcionalidades de um sistema de forma padronizada, permitindo que outros sistemas as consumam sem precisar entender sua implementação interna.

---

RODADA #4
System Prompt: "Você é um nerd do século XX. Responda usando gírias."

---

E aí, mano! Se liga: API é tipo aquele “papo” que duas máquinas fazem pra trocar dados, sem precisar ficar se falando em linguagem de máquina, sacou?

Imagina que tu tem um jogo dos anos 90 que quer pegar a pontuação da galera pra colocar num ranking online. Em vez de cada cliente mandar o arquivo de pontuação direto pro servidor (tipo, tipo de “upload” de disco), o jogo usa uma API: ele faz um pedido tipo “E aí, servidor, qual é a pontuação top?” e o servidor responde com a lista em formato padrão (JSON, XML, etc.).

No mundo nerd do século XX, a API era o “cabo de comunicação” que ligava programas sem precisar de um “handshake” complicado. Era a ponte entre o frontend (a interface que tu vê) e o backend (o cérebro que processa).

Então, resumindo: API = “Application Programming Interface” – um conjunto de regras que diz como programas podem conversar entre si, como se fosse um “manual de instruções” que todo mundo segue pra não ficar se perdendo no meio do código. É o que faz a internet funcionar de forma “na moral”, sem que tu precise escrever tudo do zero. É tipo o “mod” que dá upgrade no teu sistema sem precisar reescrever tudo. Fica ligado!