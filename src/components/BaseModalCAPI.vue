<!-- ModalComponent.vue -->

<template>
	<div
		v-if="show"
		class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
	>
		<div class="bg-white px-8 py-5 rounded shadow-md">
			<button
				@click="$emit('close')"
				class="absolute top-4 right-4 text-white hover:text-gray-700 font-bold text-2xl"
			>
				&times;
			</button>
			<slot name="header">default header</slot>
			<slot name="body">default body</slot>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		show: Boolean,
	});
</script>

<style scoped>
	/* Add your custom styles or TailwindCSS classes here */
</style>
