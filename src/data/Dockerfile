FROM node:10-alpine as generator
WORKDIR /data
COPY . .
RUN npm install

FROM mongo:latest

COPY . .
COPY --from=generator ./data/ .
RUN ["chmod", "+x", "init.sh"]
CMD ./init.sh