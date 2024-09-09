<script setup lang="ts">
import { ref } from 'vue'
import { useAboutData} from "~/composables/useAboutData";
const { about, features } = useAboutData();
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
console.log(`features.value: `, features.value);
const perChunk = 2 // items per chunk
const featuresArr:any[] = features.value.reduce((resultArray:any[], item, index) => {
  const chunkIndex = Math.floor(index/perChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

console.log(`featuresArr: `, featuresArr);
</script>

<template>
  <section id="about" class="bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-700 pt-24 pb-48">
    <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
      <div class="w-2/3 mx-auto mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl text-center tracking-tight font-ghost-kid font-extrabold text-secondary-500 dark:text-primary-600">{{ about.title }}</h2>
        <p v-for="content in about.content" class="text-slate-200 text-center sm:text-xl dark:text-gray-700" v-html="content"></p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <div v-for="feature in about.features">
          <div class="flex mx-auto justify-center items-center text-center mb-4 w-16 h-16 rounded-full bg-secondary-600 dark:bg-fuchsia-600 lg:h-24 lg:w-24">
            <font-awesome-icon :icon="feature.icon!" class="text-3xl text-white" />
          </div>
          <h3 class="mb-2 text-xl text-center font-bold text-white dark:text-gray-900">{{ feature.title }}</h3>
          <p v-for="content in feature.content" class="text-slate-200 dark:text-gray-800 text-center" v-html="content"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
