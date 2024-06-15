FROM node:20

WORKDIR /usr/app

COPY . .

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

RUN if [ "$NODE_ENV" = "production" ]; then npm install ; fi
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

RUN if [ "$NODE_ENV" != "production" ]; then npm install -g @nestjs/cli; fi
RUN if [ "$NODE_ENV" != "production" ]; then npm install; fi

EXPOSE 3000

CMD if [ "$NODE_ENV" = "production" ]; then \
        npm run start:prod; \
    else \
        npm run start:dev; \
    fi
