# Connective

Um sistema CRM (Customer Relationship Management) moderno e intuitivo para gerenciamento de clientes e relacionamentos comerciais.

## 📋 Sobre o Projeto

Connective é uma solução completa de CRM que oferece uma interface visual e interativa para gerenciar todo o ciclo de relacionamento com clientes. O sistema conta com funcionalidades essenciais para organização e acompanhamento de leads e clientes.

## ✨ Funcionalidades

- **Quadro Kanban** - Visualização e organização de leads/clientes em estágios do funil de vendas
- **Gráficos e Dashboard** - Análise visual de métricas e performance
- **Tabela de Clientes** - Cadastro e gerenciamento completo de informações de clientes
- **Interface Responsiva** - Design adaptável para diferentes dispositivos
- **Tema Dark/Light** - Alternância entre modos claro e escuro

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Next.js 15](https://nextjs.org/)** - Framework React com Turbopack
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e não-estilizados
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript
- **[Recharts](https://recharts.org/)** - Biblioteca de gráficos para React
- **[dnd-kit](https://dndkit.com/)** - Drag and drop toolkit
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[Motion](https://motion.dev/)** - Biblioteca de animações

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/connective.git
```

2. Acesse a pasta do projeto:

```bash
cd connective/web
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

4. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_API_URL=http://localhost:3333
```

## 🎮 Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

### Modo Produção

```bash
# Build
npm run build
# ou
yarn build

# Start
npm start
# ou
yarn start
```

## 📁 Estrutura do Projeto

```
web/
├── app/
│   ├── (auth)/          # Rotas de autenticação
│   ├── dashboard/       # Área logada
│   ├── pricing/         # Página de preços
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página inicial
├── components/
│   ├── cards/           # Componentes de cards
│   ├── chart/           # Componentes de gráficos
│   ├── dialog/          # Modais e diálogos
│   ├── form/            # Componentes de formulário
│   ├── header/          # Cabeçalho
│   ├── nav/             # Navegação
│   ├── sidebar/         # Barra lateral
│   ├── table/           # Tabelas
│   └── ui/              # Componentes base
├── data/                # Dados estáticos
├── hooks/               # Custom hooks
├── lib/                 # Utilitários e configurações
├── public/              # Arquivos públicos
├── store/               # Gerenciamento de estado
├── types/               # Definições TypeScript
└── utils/               # Funções auxiliares
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Victor Pinheiro Mello

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!

