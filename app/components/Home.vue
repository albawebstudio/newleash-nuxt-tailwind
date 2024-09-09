<script setup lang="ts">
import { useSiteData } from "~/composables/useSiteData"
import { useColorMode } from "@vueuse/core"

const { site } = useSiteData()
const colorMode = useColorMode()
const logoSrc = ref('/images/logo-no-text-dark.svg')

onMounted(() => {
  logoSrc.value = colorMode.value === 'dark' ? '/images/logo-no-text-dark.svg' : '/images/logo-no-text-light.svg'
})
</script>

<template>
  <section id="home" class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-ghost-kid text-secondary-500 tracking-tight leading-none md:text-5xl xl:text-6xl">{{ site.title }}</h1>
        <p class="max-w-2xl mb-6 font-desyrel text-gray-500 lg:mb-8 md:text-xl lg:text-2xl dark:text-gray-400">{{ site.tagLine }}</p>
        <NuxtLink to="/donate/now" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-secondary-500 hover:bg-secondary-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Donate
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </NuxtLink>
        <NuxtLink to="/adopt" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-primary-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-primary-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Adopt
        </NuxtLink>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <NuxtImg :src="logoSrc" :alt="site.title"/>
<!--        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">-->
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
