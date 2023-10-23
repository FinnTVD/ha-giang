#!/bin/bash

git pull

yarn build

pm2 reload hagiang

sudo systemctl reload nginx
