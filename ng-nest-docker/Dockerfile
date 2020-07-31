FROM node:12

WORKDIR /app

COPY package.json yarn.log ./
RUN yarn install --production

COPY ./dist/ ./

CMD node apps/server/main.js