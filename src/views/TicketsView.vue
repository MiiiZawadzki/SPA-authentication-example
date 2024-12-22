<script setup>
import NavBar from '@/components/NavBar.vue';
import TicketCard from '@/components/TicketCard.vue'

import { reactive, onMounted } from 'vue';
import axios from 'axios';

const state = reactive({
    tickets: {}
});

onMounted(async () => {
  try {
    const response = await axios.get(`/api/tickets`);
    state.tickets = response.data.tickets

  } catch (error) {
    console.error('Error fetching tickets', error);
  }
});
</script>

<template>
    <div class="app-container flex flex-col">
        <NavBar />
        <div>
            <h1 class="text-7xl font-thin mx-10 mt-20">Tickets</h1>
            <div class="m-10 flex flex-col gap-5">
                <TicketCard v-for="ticket in state.tickets" :key="ticket.id" :ticket="ticket" />
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