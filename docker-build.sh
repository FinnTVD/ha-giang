git pull
docker build --tag nextjs-image .
docker build --tag nginx-image ./nginx
docker-compose up -d