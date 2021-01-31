FROM node:10-alpine as generator
WORKDIR /data
COPY . .
RUN npm install
RUN echo "System dependencies" && \
    apk add --update \
    bash \
    curl \
    git \
    make \
    ca-certificates && \
    echo "MongoDB dependencies" && \
    apk add \
    mongodb-tools && \
    echo "Install migrate util" && \
    wget https://github.com/instoll/alpine-mongoshell/releases/download/0.1.0/migrate && \
    chmod 0755 migrate && \
    mv migrate /usr/bin

FROM mongo:latest
COPY . .
COPY --from=generator ./data/ .
RUN ["chmod", "+x", "init.sh"]
CMD ./init.sh