FROM node:14-alpine

RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make bash
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app
COPY . .
RUN yarn install

EXPOSE 9030
CMD [ "yarn", "start" ]
