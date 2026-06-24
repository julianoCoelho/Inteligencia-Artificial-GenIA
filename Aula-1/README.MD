
# Laboratório Prático 01 - Introdução à Inteligência Artificial com Groq e Node.js

Este repositório contém o código inicial e o guia de configuração para o primeiro laboratório prático da disciplina de Inteligência Artificial na Residência de Software TIC. O objetivo é realizar a integração com os Modelos de Linguagem de Grande Porte (LLMs) através da API da Groq utilizando JavaScript puro.

## 🚀 Guia de Configuração do Ambiente (Passo a Passo)

Siga as etapas abaixo para preparar o ambiente na sua máquina e executar o projeto.

### Passo 1: Obtenção da Chave de API da Groq (Groq API Key)
A Groq permite o acesso de altíssima velocidade a modelos open-source de IA.
1. Acesse o **Groq Console**: [console.groq.com](https://console.groq.com/).
2. Crie ou acesse sua conta (recomenda-se utilizar o vínculo com o GitHub ou Google).
3. No menu lateral esquerdo, clique em **API Keys**.
4. Clique no botão **"Create API Key"**.
5. Atribua um nome identificador para a chave (Ex: `Residencia-IA`) e confirme.
6. **Copie a chave gerada imediatamente** (ela possui o prefixo `gsk_`) e guarde-a em um local seguro. *Nota: Por questões de segurança, ela não será exibida novamente após o fechamento da janela.*

### Passo 2: Instalação do Node.js
O ambiente de execução Node.js é necessário para rodar o código JavaScript no computador.
1. Acesse o site oficial: [nodejs.org](https://nodejs.org/).
2. Baixe e instale a versão **LTS** (Long Term Support), que garante maior estabilidade.
3. Prossiga com o instalador avançando nas etapas padrão (*Next > Next > Finish*).
4. Para homologar a instalação, abra o terminal do seu sistema operacional e execute:
```bash
node -v
```

Se o retorno indicar a versão instalada (Ex: `v20.x.x`), o ambiente está pronto.

### Passo 3: Configuração do Projeto no VS Code

1. Crie uma pasta em seu diretório de preferência chamada `laboratorio-ia`.
2. Abra o editor **VS Code**.
3. Vá no menu superior em **File > Open Folder** (Arquivo > Abrir Pasta) e selecione a pasta criada.
4. Abra o terminal integrado do VS Code utilizando o menu **Terminal > New Terminal** ou o atalho correspondente (`Ctrl + '`).

### Passo 4: Inicialização do Projeto e Configuração de Módulos

Para habilitar o suporte nativo à sintaxe moderna do JavaScript (`import/export`), configuraremos o projeto como ES Modules.

1. No terminal integrado do VS Code, inicialize o gerenciador de pacotes rodando:

```bash
npm init -y
```
   
2. Um arquivo chamado `package.json` será criado na raiz. Abra-o e adicione a propriedade `"type": "module",` logo abaixo da linha `"main"`. O arquivo resultante deve seguir a estrutura abaixo:
   
   ```json
  {
   "name": "laboratorio-ia",
   "version": "1.0.0",
   "main": "index.js",
   "type": "module",
   "dependencies": {}
   }
   ```

   Nota: Utilizei o nome aiService.js no ligar de index.js
   
3. Salve as alterações do arquivo (`Ctrl + S`).
### Passo 5: Instalação das Dependências

Instalaremos o SDK oficial da OpenAI (utilizado pela Groq por compatibilidade de rotas) e a biblioteca `dotenv` para gerenciar variáveis de ambiente de forma segura.

1. No terminal do VS Code, execute o comando de instalação:
   
   ```bash
   npm install openai dotenv
   ```
   
2. Aguarde o término do download. Uma pasta chamada `node_modules` e o arquivo `package-lock.json` serão gerados automaticamente.

### Passo 6: Configuração das Variáveis de Ambiente (`.env`)

Para evitar a exposição de credenciais confidenciais no código-fonte ou no histórico do Git:

1. Na raiz do projeto, crie um arquivo chamado exatamente **`.env`** (com o ponto inicial e sem extensão).
2. Adicione a seguinte variável inserindo a chave gerada anteriormente no Passo 1:
   
   ```Snippet de código
  GROQ_API_KEY=gsk_AQUI_VAI_A_SUA_CHAVE_COMPLETA
   ```

1. Salve o arquivo.

_(Nota: Lembre-se de adicionar o arquivo `.env` ao seu `.gitignore` antes de subir o projeto para o GitHub para que sua chave privada não fique pública!)_

````
### 💡 Dica extra de Professor:
Como você vai colocar isso no GitHub, vale muito a pena criar também um arquivo chamado `.gitignore` na raiz do projeto e escrever apenas isto dentro dele:
```text
node_modules/
.env
````
