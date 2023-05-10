FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

COPY . .

EXPOSE 3000

ENV REACT_APP_BASE_URL=https://localhost:3001/api

CMD ["npm", "start"]
