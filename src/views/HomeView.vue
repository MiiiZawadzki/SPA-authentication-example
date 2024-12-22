<script setup>
import { reactive, onMounted } from 'vue';
import NavBar from '@/components/NavBar.vue'
import DashboardStatistics from '@/components/DashboardStatistics.vue'
import { useAuthStore } from '@/stores/auth.store';
import axios from 'axios';

const state = reactive({
    statistics: {
        new: 0,
        open: 0
    }
});

const authStore = useAuthStore();

onMounted(async () => {
    try {
        const response = await axios.get(`/api/home`);
        state.statistics.new = response.data.new;
        state.statistics.open = response.data.open;

    } catch (error) {
        console.error('Error fetching statistics', error);
    }
});
</script>

<template>
    <div class="app-container flex flex-col">
        <NavBar />
        <div class="flex justify-center">
            <div class="w-fit">
                <h1 class="text-7xl font-thin text-center mt-20">Hello, {{ authStore.user.name }}</h1>
                <div class="mt-20 flex justify-center">
                    <DashboardStatistics :statistics="state.statistics" />
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