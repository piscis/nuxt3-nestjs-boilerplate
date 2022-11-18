<script lang="ts" setup>
useHead({
  title: "Hello, World!",
  titleTemplate: "%s - Nuxt3 Boilerplate",
});

const config = useRuntimeConfig();

const {
  data: serverNumber,
  pending,
  refresh,
} = await useFetch("/api/randomNumber", {
  baseURL: config.public.apiBase,
});

const fetchRandomNumber = async () => {
  refresh();
};
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <main class="flex grow items-center justify-center">
      <div class="text-center">
        <Icon name="logos:nuxt-icon" class="mb-5" size="80"></Icon>
        <h1 class="font-display mb-2 flex items-center text-5xl">
          <b class="text-primary p-4 pt-2">Hello, World!</b>
        </h1>
        <p>Can you see me?</p>
        <p>
          Number:
          <span v-if="pending">Loading ...</span>
          <span else>{{ serverNumber }}</span>
        </p>
        <a
          href="#"
          class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
          @click.prevent="fetchRandomNumber"
        >
          Fetch a number
        </a>
      </div>
    </main>
  </div>
</template>
