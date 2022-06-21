# Stage 1
FROM node:18.2.0-alpine3.15 as build-step
WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY . .
RUN npm run build:prod


# Stage 2
FROM nginx:1.22.0-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist /usr/share/nginx/html
EXPOSE 80