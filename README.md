# Entendendo o TypeScript

Uma aplicação web full-stack desenvolvida em TypeScript com Express.js, demonstrando conceitos fundamentais de TypeScript em um ambiente prático.

## 📋 Descrição

Este projeto é uma aplicação web simples que combina:
- **Backend**: Servidor Express.js escrito em TypeScript
- **Frontend**: Interface HTML/CSS/JavaScript que consome uma API REST
- **Demonstração prática**: Integração entre frontend e backend usando TypeScript

## 🚀 Funcionalidades

- Servidor Express.js configurado com TypeScript
- API REST com endpoint `/api/mensagem`
- Frontend que consome a API dinamicamente
- Configuração completa de desenvolvimento com hot-reload
- Build de produção otimizado

## 🛠️ Tecnologias Utilizadas

### Backend
- **TypeScript** - Linguagem principal
- **Express.js** - Framework web
- **Node.js** - Runtime JavaScript

### Frontend
- **HTML5** - Estrutura da página
- **CSS3** - Estilização
- **JavaScript** - Interatividade e consumo da API

### Ferramentas de Desenvolvimento
- **ts-node-dev** - Hot-reload durante desenvolvimento
- **TypeScript Compiler** - Compilação para JavaScript

## 📁 Estrutura do Projeto

```
├── package.json          # Dependências e scripts do projeto
├── tsconfig.json          # Configuração do TypeScript
├── README.md             # Documentação do projeto
├── src/
│   └── server.ts         # Servidor Express principal
├── public/               # Arquivos estáticos do frontend
│   ├── index.html        # Página principal
│   ├── Script.js         # Script do cliente
│   └── styly.css         # Estilos CSS
└── dist/                 # Arquivos compilados (gerado automaticamente)
```

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Entendendo-o-TypeScript
```

2. Instale as dependências:
```bash
npm install
```

## 🎯 Como Executar

### Modo Desenvolvimento
```bash
npm run dev
```
- Inicia o servidor em modo desenvolvimento
- Hot-reload automático ao modificar arquivos
- Servidor disponível em `http://localhost:3000`

### Build para Produção
```bash
npm run build
npm start
```
- Compila o TypeScript para JavaScript
- Executa a versão otimizada da aplicação

## 🔍 Endpoints da API

### GET /api/mensagem
Retorna uma mensagem de saudação do servidor.

**Resposta:**
```json
{
  "msg": "ola do servidor do TypeScrips"
}
```

## 📝 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot-reload
- `npm run build` - Compila TypeScript para JavaScript
- `npm start` - Executa a aplicação compilada
- `npm test` - Placeholder para testes (ainda não implementado)

## 🔧 Configuração do TypeScript

O projeto utiliza as seguintes configurações TypeScript (`tsconfig.json`):

- **Target**: ES6
- **Module**: CommonJS
- **Strict Mode**: Habilitado
- **Source Directory**: `src/`
- **Output Directory**: `dist/`

## 🌐 Como Funciona

1. O servidor Express é iniciado na porta 3000
2. Arquivos estáticos são servidos da pasta `public/`
3. A página `index.html` é carregada automaticamente
4. O script `Script.js` faz uma requisição para `/api/mensagem`
5. A resposta é exibida dinamicamente na página

## 📚 Conceitos de TypeScript Demonstrados

- **Tipagem Estática**: Tipos definidos para variáveis e funções
- **Módulos ES6**: Import/export de dependências
- **Compilação**: Transformação de TypeScript para JavaScript
- **Configuração**: Setup completo do ambiente TypeScript

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença ISC.

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório do projeto.

---

### 💡 Dica
Este projeto é ideal para quem está começando a aprender TypeScript e quer ver na prática como integrar frontend e backend usando essa tecnologia.