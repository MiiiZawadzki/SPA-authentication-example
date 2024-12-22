<script setup>
defineProps({
	statistics: Object
})
</script>

<template>
	<div class="flex flex-col border rounded-xl bg-white mx-10 w-full">
		<p class="text-md font-light p-2">Statistics</p>
		<div class="flex flex-col p-5">
			<p class="px-2 text-xl">New Tickets: {{ statistics.new }}</p>
			<small class="px-2">Tickets with <i>New</i> status, that was assigned to you</small>
			<p class="px-2 mt-2 text-xl">Open Tickets: {{ statistics.open }}</p>
			<small class="px-2">Tickets with <i>Open</i> status, that was assigned to you</small>
		</div>
		<div class="w-full flex justify-center">
			<RouterLink to="/tickets" class="border rounded p-2 flex justify-center items-center m-4 hover:bg-neutral-200">
				All Tickets &rarr;
			</RouterLink>
		</div>
	</div>
</template>
