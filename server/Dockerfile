FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]

ENV NODE_ENV=production
RUN chown -R node /usr/src/app
USER node
