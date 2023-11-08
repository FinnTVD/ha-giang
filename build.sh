#!/bin/bash

git pull

yarn

yarn build

pm2 reload hagiang

sudo systemctl reload nginx
