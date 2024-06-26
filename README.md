# Aplicativo de Clima

Uma aplicação simples de previsão do tempo construída com Vite e React que busca e exibe informações meteorológicas atuais para qualquer cidade usando a API do OpenWeatherMap.

## Funcionalidades

- **Busca por Localização:** Insira o nome de uma cidade para buscar os dados meteorológicos.
- **Exibição de Dados:**
  - Nome da cidade
  - Tipo de clima (ex: "Claro", "Chuva")
  - Temperatura em °C
  - Umidade
  - Velocidade do vento
- **Exibição da Data Atual:** Mostra a data atual formatada com o dia da semana e mês.

## Primeiros Passos

### Pré-requisitos

- Node.js e npm instalados na sua máquina.

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seuusuario/weather-app.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd weather-app
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

### Executando a Aplicação

1. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
2. Abra seu navegador e vá para `http://localhost:3000` para visualizar a aplicação.

## Uso

1. Insira o nome de uma cidade na barra de pesquisa.
2. Pressione "Enter" ou clique no ícone de pesquisa para buscar os dados meteorológicos.
3. Veja as informações meteorológicas exibidas na tela.

## Visão Geral do Código

### Componentes

- **Weather:** O componente principal que lida com a busca e exibição do clima.

### Funções

- **handlerInput:** Atualiza o estado com a entrada do usuário para o nome da cidade.
- **search:** Faz uma chamada assíncrona à API do OpenWeatherMap e atualiza o estado com os dados meteorológicos obtidos.
- **handleKeyDown:** Permite a busca quando a tecla "Enter" é pressionada.

### Gerenciamento de Estado

- **useState:** Gerencia os estados `data` (dados do clima) e `location` (nome da cidade).

## API

Esta aplicação usa a API do OpenWeatherMap. Você precisará de uma chave de API para buscar os dados meteorológicos.

1. Obtenha sua chave de API no [OpenWeatherMap](https://openweathermap.org/api).
2. Substitua a variável `api_key` no componente `Weather` pela sua chave de API.

```javascript
const api_key = "sua_chave_de_api_aqui";
```

## Ícones

- Ícones são do FontAwesome e representam localização, pesquisa, umidade e velocidade do vento.


## Acessar o Projeto Online

Você pode acessar o projeto online através do seguinte link: [Weather App Online](https://weatherapp1v.netlify.app/)


## Contribuindo

Sinta-se à vontade para fazer um fork deste projeto, fazer melhorias e enviar pull requests. Qualquer contribuição é muito apreciada.

---