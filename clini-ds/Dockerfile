# Stage 1: Build do Storybook
FROM node:18 AS builder

WORKDIR /app

# Copia apenas arquivos essenciais para instalar dependências primeiro
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copia o restante do código e executa o build do Storybook
COPY . .
RUN npm run build-storybook

# Stage 2: Servidor para rodar o Storybook
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copia os arquivos do Storybook já compilados
COPY --from=builder /app/storybook-static .

# Expor a porta 80 (padrão do Nginx)
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]