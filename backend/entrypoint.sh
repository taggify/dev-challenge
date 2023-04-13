#!/bin/bash
npm install
npx prisma generate
exec nodemon -L --exec "jsdoc -c jsdoc.json" --ignore "public" --watch "src/**" --ext "js,prisma" --watch app.js &
exec nodemon -L --inspect=0.0.0.0:9229 --ignore "public" --watch "src/**" --ext "js,prisma" --watch server.js
