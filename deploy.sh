#!/bin/bash

npm run build
scp -r ./dist/* ./package.json ./pm2.config.js root@192.168.1.39:/xxxx