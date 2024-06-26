FROM node:22-alpine as build-stage

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx as production-stage

RUN mkdir /app

COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
