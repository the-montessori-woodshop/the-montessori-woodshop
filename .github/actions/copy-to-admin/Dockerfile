FROM alpine:latest

RUN apk add --no-cache git

COPY entrypoint.sh /entrypoint.sh

RUN ["chmod", "+x", "/usr/src/app/entrypoint.sh"]

ENTRYPOINT ["/entrypoint.sh"]