<template>
    <section class="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10 md:py-20 items-center">
        <div class="col-span-12 md:col-span-6 p-5">
            <img :src="map" alt="">
        </div>
        <div class="col-span-12 md:col-span-6 p-5">
            <h6 class="text-green-600">TRACKING POST</h6>
            <h3 class="md:text-4xl text-2xl my-2 font-bold">Advanced Viewer Tracker for Consistent Posting</h3>
            <p class="text-gray-600 text-lg mb-5">Our viewer tracker feature helps you monitor your audience's behavior and
                preferences, schedule posts for consistent delivery, and optimize posting times for maximum impact</p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Monitor your audience's behavior and preferences
            </p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Schedule posts in advance for consistent delivery
            </p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Optimize posting times for your audience
            </p>
            <button class="bg-green-600 text-white hover:bg-green-700 px-5 py-2 rounded-lg mt-3">Try 30-Days Trial</button>
        </div>
    </section>

    <section class="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10 md:py-20 items-center">
        <div class="col-span-12 md:col-span-6 p-5 md:hidden">
            <img :src="analytics" alt="">
        </div>
        <div class="col-span-12 md:col-span-6 p-5">
            <h6 class="text-green-600">PERSONALIZED INSIGHT</h6>
            <h3 class="md:text-4xl text-2xl my-2 font-bold">Personalized Insights for Targeted Content</h3>
            <p class="text-gray-600 text-lg mb-5">Gain personalized insights into your audience's demographics, interests, and behavior to create targeted content that resonates with them.</p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Boost engagement with targeted content
            </p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Personalize messages for engagement
            </p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Identify demographics, interests, behavior
            </p>
            <button class="bg-green-600 text-white hover:bg-green-700 px-5 py-2 rounded-lg mt-3">Try 30-Days Trial</button>
        </div>
        <div class="col-span-12 md:col-span-6 p-5 hidden md:flex">
            <img :src="analytics" alt="">
        </div>
    </section>

    <section class="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10 md:py-20 items-center">
        <div class="col-span-12 md:col-span-6 p-5">
            <img :src="count" alt="">
        </div>
        <div class="col-span-12 md:col-span-6 p-5">
            <h6 class="text-green-600">PERFORMANCE METRICS</h6>
            <h3 class="md:text-4xl text-2xl my-2 font-bold">Track Performance with Engagement Metrics</h3>
            <p class="text-gray-600 text-lg mb-5">Track, measure, and optimize engagement metrics. Analyze audience behavior and boost engagement with data-driven insights for improved social media performance.</p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Track engagement metrics for each post
            </p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Analyze audience behavior and preferences
            </p>
            <p class="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 p-1 rounded-xl text-green-600 bg-green-100 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Boost engagement with data-driven insights
            </p>
            <button class="bg-green-600 text-white hover:bg-green-700 px-5 py-2 rounded-lg mt-3">Try 30-Days Trial</button>
        </div>
    </section>
</template>

<script setup>
import map from '../../assets/images/map.svg'
import analytics from '../../assets/images/analytics.png'
import count from '../../assets/images/count.png'
</script>