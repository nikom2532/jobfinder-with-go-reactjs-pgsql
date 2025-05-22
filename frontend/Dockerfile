# Stage 1: Build stage (สำหรับ development และ build production assets)
#FROM node:20-alpine 
FROM node:20-alpine AS development

# ตั้งค่า Working Directory ภายใน container
WORKDIR /app

# Copy package.json และ package-lock.json (หรือ yarn.lock)
COPY package*.json ./
#COPY package-lock.json ./

# ติดตั้ง dependencies
RUN npm install

# Copy โค้ดทั้งหมดของโปรเจกต์
COPY . .

# Port ที่ Vite development server จะรัน
EXPOSE 5173

# Command สำหรับรัน development server
#CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev", "--", "--host"]

# Stage 2: Production stage (สำหรับ serve static files ที่ build แล้ว)
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Stage 3: Serve stage (ใช้ Nginx serve static files)
FROM nginx:1.27-alpine AS production

# Copy build output จาก 'build' stage ไปยัง Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration (ถ้ามี)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port ที่ Nginx จะรัน
EXPOSE 80

# Command สำหรับรัน Nginx
CMD ["nginx", "-g", "daemon off;"]