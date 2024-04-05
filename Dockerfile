# Використовуємо базовий образ з Node.js для будування React програми
FROM node:latest as build

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо файли залежностей та package.json
COPY package.json .
COPY package-lock.json .

# Встановлюємо залежності
RUN npm install

# Копіюємо усі файли вашої React програми в контейнер
COPY . .

# Будуємо React програму
RUN npm run build

# Запускаємо веб-сервер для React програми на порті 80
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
