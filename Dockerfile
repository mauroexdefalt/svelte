FROM node:14 AS build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn 
COPY . ./
RUN yarn build

FROM nginx:1.23-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf