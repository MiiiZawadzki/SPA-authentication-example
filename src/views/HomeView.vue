<script setup>
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue'
import DashboardStatistics from '@/components/DashboardStatistics.vue'
const tickets = ref(0);
</script>

<template>
    <div class="app-container flex flex-col">
        <NavBar />
        <div class="flex justify-center">
            <div class="w-fit">
                <h1 class="text-7xl font-thin text-center mt-20">Hello, username</h1>
                <div class="mt-20 flex justify-center">
                    <DashboardStatistics :tickets="tickets" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-container {
    min-width: 100vw;
    min-height: 100vh;
    background: linear-gradient(0deg, #d3eadc, transparent);
}
</style>