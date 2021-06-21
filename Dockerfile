FROM node:14 AS builder

RUN npm install -g serve # A simple webserver

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
