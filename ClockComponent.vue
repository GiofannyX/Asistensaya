<script setup lang="ts">
//import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
<div class="mx-auto py-10 mt-20 text-center bg-slate-900 rounded" onLoad="waktu()">
    <div id="jam-digital" class="flex text-white justify-center">
        <div class="px-3 py-8 mx-2 font-bold text-4xl border rounded-lg" id="hours"><p id="jam"> </p></div>
        <div class="px-3 py-8 mx-2 font-bold text-4xl border rounded-lg" id="minute"><p id="menit"></p></div>
        <div class="px-3 py-8 mx-2 font-bold text-4xl border rounded-lg" id="second"><p id="detik"></p></div>
    </div>
</div>
</template>


