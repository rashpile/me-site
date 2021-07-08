FROM node:14-alpine3.13 as builder

RUN apk update && apk add --no-cache make git python3 autoconf g++ libc6-compat libjpeg-turbo-dev libpng-dev nasm libtool automake

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN ["npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html

