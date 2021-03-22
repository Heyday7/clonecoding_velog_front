FROM node:10.19.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/
RUN yarn install 

CMD ["yarn", "start"]