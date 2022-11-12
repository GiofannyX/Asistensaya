<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<main class="bg-gray-50">
<div class="h-96">
<section class="px-2 pt-2">
<RouterView />
</section>
</div>
  <footer class="bg-white border-t-4 border-gray-200">
    <div class="py-2 px-2 select-none border-b flex justify-between">
    <img alt="Vue logo" class="logo" src="@/assets/1668084594188.png" width="26" height="26"/><p class="font-base">Asistensaya</p>
    </div>
     <p class="text-sm pt-2 px-1 select-none text-neutral-900 border-sky-500">Apa yang dapat Asisten Bantu ?</p>
      <nav class="text-sm select-none pt-2 px-2">
        <RouterLink to="/">
		<div class="text-neutral-600 block py-1 px-2 my-2 bg-gray-200 rounded hover:bg-sky-300 hover:text-white">Home</div>
	</RouterLink>
        <RouterLink to="/clock">
		<div class="text-neutral-600 block py-1 px-2 my-2 bg-gray-200 rounded hover:bg-sky-300 hover:text-white">Lihat Jam Digital</div>
	</RouterLink>
	<RouterLink to="/calender">
		<div class="text-neutral-600 block py-1 px-2 my-2 bg-gray-200 rounded hover:bg-sky-300 hover:text-white">Lihat Kalender Digital</div>
	</RouterLink>
	<RouterLink to="/calculator">
		<div class="text-neutral-600 block py-1 px-2 my-2  bg-gray-200 rounded hover:bg-sky-300 hover:text-white">Buka Kalkulator Digital</div>
	</RouterLink>
	<RouterLink to="/weather">
		<div class="text-neutral-600 block py-1 px-2 my-2 bg-gray-200 rounded hover:bg-sky-300 hover:text-white">Lihat Informasi Cuaca Digital</div>
	</RouterLink>
      </nav>
  </footer>
</main>
</template>
<style scoped>
</style>
