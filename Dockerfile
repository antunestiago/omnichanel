FROM node:16-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN npm ci --only=development

COPY . .

RUN npm install --save sqlite3

RUN npm run build

