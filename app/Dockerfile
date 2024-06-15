FROM node:20

WORKDIR /usr/app

COPY . .

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

RUN if [ "$NODE_ENV" != "production" ]; then npm install -g @nestjs/cli; fi

RUN npm install
RUN npm run build

EXPOSE 3000

CMD if [ "$NODE_ENV" = "production" ]; then \
        npm run start:prod; \
    else \
        npm run start:dev; \
    fi
