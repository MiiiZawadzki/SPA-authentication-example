<script setup>
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();
const isActive = (routePath) => useRoute().path === routePath;
</script>

<template>
	<div class="flex header bg-color justify-between items-start">
		<div class="flex m-4">
			<RouterLink to="/home" :class="[isActive('/home') ? 'font-black' : '', 'flex  items-center px-5 py-2']">
				Home
			</RouterLink>
			<RouterLink to="/tickets"
				:class="[isActive('/tickets') ? 'font-black' : '', 'flex  items-center px-5 py-2']">
				Tickets
			</RouterLink>
		</div>
		<a @click.prevent="authStore.logout()" class="flex items-center px-5 py-2 m-4 border rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
			Logout
		</a>
	</div>
</template>
