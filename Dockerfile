FROM node:alpine

EXPOSE 8000

COPY . /app/
WORKDIR /app/

RUN npm ci && npm run buildProd

CMD node server.js