<template>
  <div class="bg-[#134440] pt-10 md:pt-20">
    <section class="w-11/12 mx-auto text-white">
      <h2 class="text-2xl font-bold md:text-5xl text-center">Supercharge your social</h2>
      <h2 class="text-2xl font-bold md:text-5xl text-center">media growth today.</h2>
      <p class="text-lg text-center md:w-7/12 mx-auto my-5">Transform your social media game. Elevate your online presence, increase followers, and maximize
        engagement with our advanced platform. Start supercharging your growth today</p>
      <div class="flex md:flex-row flex-col items-center justify-center mb-8 md:mb-16">
        <button class="bg-gray-50 text-[#134440] border md:mr-3 mb-3 md:mb-0 border-gray-50 px-6 font-semibold rounded-lg py-2">Try 30-Days Trial</button>
        <button class="px-6 font-semibold rounded-lg border border-gray-50 py-2">Schedule a Call</button>
      </div>
      <div>
        <img class="rounded-t-xl" :src="hero1" alt="">
      </div>
    </section>
  </div>
</template>

<script setup>
import hero1 from '../../assets/images/hero1.png'
</script>