# Nuxt3 / NestJS Boilerplate

A Nuxt3 / NestJS Boilerplate starter boilerplate with a lot of useful features.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

**Demo:** https://nuxt3-nestjs.pirsig.net/  
**NestJS:** API Dummy Endpoint: https://nuxt3-nestjs.pirsig.net/api/randomNumber/

## Features

- [x] [Nuxt](https://v3.nuxtjs.org)
- [x] [Vue](https://vuejs.org)
- [x] [VueUse](https://vueuse.org/guide/#nuxt)
- [x] [Tailwind CSS](https://tailwindcss.nuxtjs.org)
- [x] [nuxt-icon](https://github.com/nuxt-modules/icon)
- [x] [nuxt-security](https://github.com/Baroshem/nuxt-security)

- [x] Setup ESLint and Prettier to check and format code as recommended by Vue, Nuxt and Tailwind CSS
- [x] Setup [Husky](https://typicode.github.io/husky/) with [lint-staged](https://github.com/okonet/lint-staged)

- [x] HTTP Basic access authentication for develop, staging or stage environments (server/middleware/basicAuth.ts)
- [x] Github Action for testing PR's

## Setup

To enable Husky after you have created Git repository, install Husky using this command:
```shell
pnpm dlx husky install
```

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

## Testing

```bash
pnpm test:watch
```

## Lint

```bash
pnpm lint:fix
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
