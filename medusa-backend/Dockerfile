
FROM node:16.13.0

WORKDIR /app/medusa

COPY package.json ./

RUN yarn install --loglevel=error --frozen-lockfile

COPY . .

RUN npm run build &> /dev/null

EXPOSE 9000
RUN apt-get update && apt-get install -f -y postgresql-client

CMD bash check-db.sh