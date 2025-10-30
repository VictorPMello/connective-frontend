FROM node:20-alpine

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do projeto
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar o Next.js em desenvolvimento
CMD ["npm", "run", "dev"]
