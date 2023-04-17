FROM node:lts-alpine AS development

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV PORT 3000

COPY package.json ./

#RUN apk add jq
#RUN jq .version package.json -r > /root/version.txt
#CMD REACT_APP_VERSION=$(cat /root/version.txt) node server.js

RUN yarn install

COPY . ./

CMD ["yarn", "start"]
