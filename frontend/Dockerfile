FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .
 
RUN npm ci

ENV REACT_APP_BACKEND_URL=/api

ENV CI=true

RUN npm run build

# serve

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html