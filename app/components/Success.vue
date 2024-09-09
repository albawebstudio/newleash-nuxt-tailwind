<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSuccessData } from "~/composables/useSuccessData";
import { useKeenSlider } from 'keen-slider/vue' // import from 'keen-slider/vue.es' to get an ES module

const { success } = useSuccessData();
const [container, slider] = useKeenSlider({
  loop: true,
  slides: {
    origin: 'center',
    perView: 1.25,
    spacing: 16,
  },
  breakpoints: {
    '(min-width: 1024px)': {
      slides: {
        origin: 'auto',
        perView: 1.5,
        spacing: 32,
      },
    },
  },
})
</script>

<template>
  <section id="success" class="text-gray-900 bg-gray-50 dark:text-gray-200 dark:bg-gray-900">
    <div class="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ success.title }}</h2>

          <p v-for="content in success.content" class="mt-4 text-gray-700 dark:text-gray-200" v-html="content"></p>

          <div class="hidden lg:mt-8 lg:flex lg:gap-4">
            <button
                v-if="slider"
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                class="rounded-full border border-fuchsia-600 p-3 text-fuchsia-600 transition hover:bg-fuchsia-600 hover:text-white"
                @click="slider.prev"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 rtl:rotate-180"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
                v-if="slider"
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                class="rounded-full border border-fuchsia-600 p-3 text-fuchsia-600 transition hover:bg-fuchsia-600 hover:text-white"
                @click="slider.next"
            >
              <svg
                  class="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="-mx-6 lg:col-span-2 lg:mx-0">
          <div ref="container" class="keen-slider">

            <div v-for="story in success.stories" class="keen-slider__slide rounded-xl">
              <blockquote
                  class="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div class="flex gap-0.5 text-green-500">

                  </div>

                  <div class="mt-4">
                    <p class="text-2xl font-bold text-primary-600 sm:text-3xl">{{ story.title }}</p>

                    <p v-for="content in story.content" class="mt-4 leading-relaxed text-gray-700" v-html="content"></p>
                  </div>
                </div>

                <div class="flex items-center gap-5">
                  <NuxtImg :src="story.image.src" :alt="story.image.alt" class="rounded-full object-cover" />
                  <div class="grid gap-1">
                    <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {{ story.title }}
                    </footer>
                  </div>
                </div>
              </blockquote>
            </div>

          </div>
        </div>
      </div>

      <div class="mt-8 flex justify-center gap-4 lg:hidden">
        <button
            ref="keenSliderPrevious"
            aria-label="Previous slide"
            id="keen-slider-previous"
            class="rounded-full border border-fuchsia-600 p-4 text-fuchsia-600 transition hover:bg-fuchsia-600 hover:text-white"
        >
          <svg
              class="size-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </button>

        <button
            ref="keenSliderNext"
            aria-label="Next slide"
            id="keen-slider-next"
            class="rounded-full border border-fuchsia-600 p-4 text-fuchsia-600 transition hover:bg-fuchsia-600 hover:text-white"
        >
          <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('keen-slider/keen-slider.css');
</style>
