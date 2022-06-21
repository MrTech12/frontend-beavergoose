# Stage 1
FROM node:18.4.0 as build-step
RUN npm cache clean --force

WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY . .
RUN npm run build:prod


# Stage 2
FROM nginx:1.22
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist/frontend-beavergoose /usr/share/nginx/html
EXPOSE 80