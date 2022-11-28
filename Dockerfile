FROM node:16
RUN npm install -g pnpm

# Setup
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . . 

# Runtime
ARG NUXT_HOST=${NUXT_HOST}
ENV NUXT_HOST=${NUXT_HOST}

ARG NUXT_PORT=${NUXT_PORT}
ENV NUXT_PORT=${NUXT_PORT}

ARG NUXT_AUTH_ENABLED=${NUXT_AUTH_ENABLED}
ENV NUXT_AUTH_ENABLED=${NUXT_AUTH_ENABLED}

# Dependencies
RUN pnpm install --shamefully-hoist
RUN pnpm build

ARG NODE_ENV=${NODE_ENV}
ENV NODE_ENV=${NODE_ENV}

EXPOSE ${NUXT_PORT}

ENTRYPOINT ["node", ".output/server/index.mjs"]