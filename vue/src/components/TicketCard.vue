<script setup>

const props = defineProps({
	ticket: Object
})
</script>

<template>
	<div class="border border-neutral-300 rounded-xl bg-white p-5 flex flex-col md:flex-row justify-between shadow-lg">
		<div class="w-full">
			<div>
				<div class="flex flex-col md:flex-row justify-between items-start md:items-center m-1">
					<h3 class="text-xl">{{ ticket.name }}</h3>
					<div :class="[ ticket.status === 'NEW' ? 'bg-green-100' : 'bg-yellow-100' , 'bg-green-100 p-1 rounded-lg']"><small>{{ ticket.status }}</small></div>
				</div>
				<hr class="my-1">
				<p class="text-neutral-800 m-1">
					{{ ticket.description }}
				</p>
			</div>
		</div>
	</div>
</template>
