FROM node:10-alpine3.10

WORKDIR /app/frontend

COPY package*.json .

RUN npm i

RUN npm audit fix

COPY . .

EXPOSE 3000

CMD ["npm" "start"]

