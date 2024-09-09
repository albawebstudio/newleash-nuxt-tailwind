<script setup lang="ts">
import { useMissionData } from "~/composables/useMissionData";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const { mission } = useMissionData();
</script>

<template>
  <section id="mission" class="text-white bg-gray-900 dark:text-gray-900 dark:bg-gray-300 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="sm:text-5xl text-2xl font-ghost-kid font-medium title-font text-center text-primary mb-12">{{ mission.title }}</h1>
      <p v-for="content in mission.content" class="w-full sm:w-2/3 mx-auto mb-20 text-center font-light" v-html="content"></p>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div v-for="feature in mission.missionFeatures" :key="mission.title" class="p-4 md:w-1/3 flex">
          <div class="flex-grow pl-6">
            <div class="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-fuchsia-600 text-white dark:bg-gray-800 mb-4">
              <font-awesome-icon :icon="['fas', feature.icon]" class="text-2xl" />
            </div>
            <h2 class="text-secondary-500 font-desyrel text-3xl title-font font-medium mb-2">{{ feature.title }}</h2>
            <p v-for="content in feature.content" class="leading-relaxed font-light text-base" v-html="content"></p>
            <NuxtLink :to="feature.cta!.href" class="mt-3 inline-flex items-center text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">{{ feature.cta!.label }}
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
