FROM node:lts-alpine

# Install the application's dependencies into the node_modules's cache directory.
RUN mkdir /server
VOLUME [ "/server" ]
WORKDIR /server
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install -g nodemon

EXPOSE 3000
