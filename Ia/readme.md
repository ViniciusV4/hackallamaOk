# Documentação do Projeto
## Descrição:
Este projeto é uma aplicação Node.js que utiliza o framework Express para criar um servidor web. Ele recebe requisições POST na rota /ia, envia uma solicitação para uma API local que gera respostas usando o modelo de inteligência artificial Llama 3, e retorna a resposta gerada ao cliente.

### Pré-requisitos
1. Node.js instalado em sua máquina. Você pode baixar e instalar a partir do site oficial. [download](https://nodejs.org/en/download/prebuilt-installer/current)
2. Llama 3 instalado em seu computador. Siga as instruções de instalação no site oficial. [download](https://ollama.com/download/windows)

## Instalação
1. Clone o repositório:
2. Instale as dependências:
'''
npm i express axios
'''

### Configuração
1. Certifique-se de ter instalado corretamente o llama3:
    - Instale o modelo llama via terminal com seguinte comando:
    '''
    ollama run llama3
    '''
2. Inicie o servidor.
'''
node index.js
'''

### Como usar
1. Adicione a url (http://localhost:3000/ia) no cabeçalho do seu postman;
2. Método: POST;
3. Body:
    {
    "text": "Seu texto aqui"
    }


## Estrutura do Projeto
- **index.js:** Arquivo principal que configura e inicia o servidor Express.
- **package.json:** Arquivo de configuração do npm que lista as dependências do projeto.

## Conclusão
Seguindo os passos acima, você deve ser capaz de configurar e rodar o projeto em sua máquina local. Se encontrar algum problema, verifique se todas as dependências estão instaladas corretamente e se o serviço do Llama 3 está ativo.