<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useColorMode } from '@vueuse/core'
import { useSiteData } from "~/composables/useSiteData"

const {
  site,
  navigation
} = useSiteData()

const colorMode = useColorMode()
const logoSrc = ref('/images/logo-navigation-light.svg')

onMounted(() => {
  logoSrc.value = colorMode.value === 'dark' ? '/images/logo-navigation-dark.svg' : '/images/logo-navigation-light.svg'
})
const showMenu = ref(false)
const toggleNav = () => (showMenu.value = !showMenu.value)
</script>

<template>
  <nav class="bg-purple-500 border-gray-200 dark:bg-purple-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/#home" external class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg :src="logoSrc" class="h-8" alt="metaData.title" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-secondary-400 font-ghost-kid">{{ site.title }}</span>
      </NuxtLink>
      <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-200 rounded-lg md:hidden hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-slate-200 dark:hover:bg-purple-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul class="flex flex-col font-medium p-4 mt-4 bg-purple-500 rtl:space-x-reverse md:flex-row md:mt-0 dark:bg-purple-900 dark:border-gray-700">
          <li>
            <NuxtLink to="/#home" class="block py-2 px-3 text-white bg-purple-700 dark:bg-purple-900 rounded" aria-current="page">Home</NuxtLink>
          </li>
          <li>
            <button id="adoptNavbarLink" data-dropdown-toggle="adoptDropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-slate-100 rounded hover:bg-purple-900 dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-purple-700">Adopt
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="adoptDropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-purple-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-slate-800 dark:text-slate-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <NuxtLink to="/adopt/dog" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Dogs to Adopt</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/adopt/cat" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Cats to Adopt</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/adopt/policy" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Adoption Policy</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/adopt/success" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Success Stories</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button id="donateNavbarLink" data-dropdown-toggle="donateDropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-slate-100 rounded hover:bg-purple-900 dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-purple-700">Donate
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="donateDropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-purple-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-slate-300 dark:text-slate-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <NuxtLink to="/donate/now" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Donate Now</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/donate/gifts" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Gifts</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/donate/fundraising" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Fundraising</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/donate/memorial" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Memorial</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/volunteer" class="block px-4 py-2 hover:bg-purple-900 dark:hover:bg-purple-600 dark:hover:text-white">Volunteer</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink to="/foster" class="block py-2 px-3 text-slate-100 rounded hover:bg-purple-900  dark:text-white dark:hover:bg-purple-700 dark:hover:text-white">Foster</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events" class="block py-2 px-3 text-slate-100 rounded hover:bg-purple-900 dark:text-white  dark:hover:bg-purple-700 dark:hover:text-white">Events</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dark-mode .logo-img {
  content: url('/images/ogo-navigation-dark.svg');
}
</style>
