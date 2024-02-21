FROM node

WORKDIR /app

COPY pack*.json ./

RUN npm install

COPY . .

CMD ["npm","start"]