FROM node:alpine as builder

WORKDIR /app/admin

COPY ./public /app/admin/public

FROM nginx
EXPOSE 80
COPY --from=builder /app/admin/public /usr/share/nginx/html

