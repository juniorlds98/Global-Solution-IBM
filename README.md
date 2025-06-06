# 🚨 Projeto Alerta Rios

O projeto Alerta Rios é uma interface web focada em prever e anunciar alagamentos de acordo com sensores colocados em locais estratégicos de rios. Desenvolvida com Vite + Node.js, foi utilizado também o Bootstrap para componentes específicos e o TailwindCSS para estilizar as páginas web. O front ele permite tanto o controle visual e a gestão de itens como a Quantidade de Sensores, nível da água, clima, status dos sensores principais e muitas coisas mais.
# 🏁 Objetivo

Fornecer uma oportunidade fácil, responsiva e dinâmica para que as pessoas recebam alertas em seu celular e em qualquer plataforma sobre se a sua residência corre risco de alagamento e quando isso pode acontecer.
## Front End
### 🛰️ Tecnologias utilizadas

⚡ Vite - Build Tool moderna para front-end

🧵 TailwindCSS — Utilitários de estilização rápidos e reativos

🎨 Bootstrap — Componentes visuais pré-estilizados

🧠 React — Biblioteca para criação de interfaces

📁 React Router — Navegação entre páginas

### 📁 Estrutura de Diretórios

csharp/Copiar/Editar

```
├── public/                   # Assets públicos
├── src/
│   ├── assets/               # Imagens e ícones
│   ├── components/           # Componentes reutilizáveis (Header, Sidebar, etc.)
│   │   ├── cards/            # Informações reutilizáveis para gráficos de sessões específicas
│   │   ├── errors/           # Mennsagens de erro (Erro 401, 404)
│   ├── pages/                # Páginas principais do sistema
│   ├── App.css               # Estilização em todas as telas
│   ├── App.jsx               # Componente raiz
│   └── main.jsx              # Ponto de entrada Vite
├── index.html                # HTML principal
├── vite.config.js            # Configuração Vite
└── package.json              # Dependências e scripts
```
### 🚱 Funcionalidades do Front-end

🔐 Cadastro administrativo

🔐 Login administrativo com perfil e permissões

🚦 Dashboard com registro de sensores e da API do tempo

🗺️ Mapa para marcação e sinalização de novos pontos

### 🖥️ Responsividade

A interface do Projeto Alerta Rios foi feito para garantir que as pessoas receberiam e conseguiriam entender como está os rios em sua volta, por isso ele foi projetado para ser funcional em todos os tipos de sistema e telas, garantindo uma clareza visual e respeitando regras de Design em tablets, computadores e celular.

### 📌 Resumo da responsividade:

✅ Dashboard, Sensores, Mapa e a Tela de Login totalmente responsivos (mobile-first)

❌ Há página de erro caso entre em funções específicas ou não projetadas





## ESP32
A interface se comunica com o módulo ESP32 para notificações e controle de relatórios com a possibilidade de gereniar e visualizar os sensores mais próximos de sua casa, envia dados a cada 5 segundos para nosso back end que por sua vez guarda os dados se for identificado alguma relevancia.

# 🆘 Esclarecimentos sobre o projeto
Nós não desenvolvemos a página Home por não acreditar que traria algo a mais para o nosso projeto, mas, em compensação caprichamos no desenvolvimento de outras páginas com alguns itens a mais, espero que gostem e supra a expectativa!

# 🚀 Instalação e Execução
1. Clonar o projeto
bash
Copiar
Editar
git clone [git@github.com:juniorlds98/Global-Solution.git]((https://github.com/juniorlds98/Global-Solution-IBM))
cd Global-Solution-IBM
2. Instalar as dependências
bash
Copiar
Editar
npm install
3. Executar o projeto com Vite
bash
Copiar
Editar
npm run dev
Acesse o front-end em:
http://localhost:5173

# 👨‍💻 Grupo
```
Rm: 560753 Caio Martinez Saes
Rm: 559680 José Claudio da Silva Junior
```
