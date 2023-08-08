<template>
    <div class="w--1/12 mx-auto my-10 md:my-20">
        <h5 class="text-xl text-green-500 mb-2 text-center">FREQUENTLY ASKED QUESTION</h5>
        <h2 class="text-2xl font-bold md:text-5xl text-center">Hear It Straight From Our Raving Fans</h2>
        <p class="text-lg text-center md:w-7/12 mx-auto my-5 text-gray-600">Find out why our users can't stop raving about
            our social media booster platform. Read their testimonials and join the journey to success today</p>
        <section>
            <div class="grid grid-cols-12 gap-5 items-center">
                <div class="col-span-12 md:col-span-6 flex justify-center md:justify-end md:p-5">
                    <img class="" :src="man" alt="">
                </div>
                <div class="col-span-12 md:col-span-6 md:w-7/12 md:p-5">
                    <p class="text-gray-600 text-lg mb-6">I have tried various social media management tools, but this
                        platform stands out for its user-friendly interface and data-driven approach. The insights it
                        provides have helped me optimize my content and engage with my audience more effectively. I highly
                        recommend it to anyone looking to take their social media game to the next level!</p>
                    <h3 class="text-xl font-bold">Jean-Jacques Derrida</h3>
                    <p class="mt-1 text-sm text-gray-600 font-bold">CEO Kamarkost</p>
                    <div class="flex items-center md:justify-end justify-center gap-5">
                        <p class="bg-gray-300 w-fit p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>
                        </p>
                        <p class="bg-gray-300 w-fit p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import man from '../../assets/images/man.jpg'
</script>