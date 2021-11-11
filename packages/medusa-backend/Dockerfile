
FROM node:16.13.0

WORKDIR /app/backend

COPY . .

EXPOSE 9000
RUN apt-get update && apt-get install -f -y postgresql-client

CMD yarn start
