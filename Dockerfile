FROM node:16
RUN npm install -g pnpm

# Setup
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY .output .output

# Dependncies
RUN pnpm install --shamefully-hoist
RUN pnpm prune --prod

# Runtime
ENV NUXT_HOST "0.0.0.0"
ENV NUXT_PORT 3000
ENV NODE_ENV "production"
ENV NUXT_AUTH_ENABLED "false"

EXPOSE ${NUXT_PORT}

ENTRYPOINT ["node", ".output/server/index.mjs"]