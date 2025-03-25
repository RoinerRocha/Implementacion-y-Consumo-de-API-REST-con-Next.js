# Dockerfile
FROM node:18-alpine

# Carpeta de trabajo
WORKDIR /app

# Copia dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]
