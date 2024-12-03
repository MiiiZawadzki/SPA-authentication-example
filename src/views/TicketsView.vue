<script setup>
import NavBar from '@/components/NavBar.vue';
import TicketCard from '@/components/TicketCard.vue'
</script>

<template>
    <div class="app-container flex flex-col">
        <NavBar />
        <div>
            <h1 class="text-7xl font-thin mx-10 mt-20">Tickets</h1>
            <div class="m-10 flex flex-col gap-5">
                <TicketCard />
                <TicketCard />
                <TicketCard />
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