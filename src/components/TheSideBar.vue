<template>
	<div class="h-screen flex">
		<!-- Backdrop -->
		<!-- /Backdrop -->
		<div :class="isOpen1 ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
			class=" bg-gray-700 fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
			style="/*background-color: dark-gray*/">
			<div class="flex items-center justify-center mt-8">
				<div class="flex items-center">
					<img src="../assets/images/film.svg" alt="Movie Icon" />

					<!-- <span class="text-white text-2xl mx-2 font-semibold">eCom</span> -->
					<span class="text-white text-2xl mx-2 font-semibold">Movie DB</span>
				</div>
			</div>
			<nav class="mt-10">
				<!-- <router-link
					class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 "
					v-for="(sbItem, i) in sidebarItems"
					:key="i"
					:to="sbItem.to"
				>
					<div>
						<span><Icon :name="sbItem.icon" :size="12" fill="#8999AA" /></span>
						{{ sbItem.title }}
					</div>
				</router-link> -->
				<!-- TODO Create routes -->
				<router-link class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 rounded-md no-underline"
					:class="[$route.name === 'AdminDashboard' ? activeClass : inactiveClass] "
					:to="{ name: 'AdminDashboard' }">
					<img src="../assets/images/film.svg" alt="Movie Icon" />
					<span class="mx-4">Movies</span>
				</router-link>
				<router-link class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 rounded-md no-underline"
					:class="[$route.name === 'Profile' ? activeClass : inactiveClass]" :to="{ name: 'addmovie' }">
				
					<img src="../assets/images/film.svg" alt="Movie Icon" />

					<span class="mx-4">Add Movie</span>
				</router-link>
				<router-link class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 rounded-md no-underline"
					:class="[$route.name === 'Profile' ? activeClass : inactiveClass]" :to="{ name: 'users' }">
				
					<img src="../assets/images/film.svg" alt="Movie Icon" />

					<span class="mx-4">Users</span>
				</router-link>
				
			</nav>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const isOpen1 = ref(true)
const activeClass = ref("bg-blue-400 bg-opacity-100 text-white border-white");
const inactiveClass = ref("border-gray-700 hover:border-white text-white hover:bg-blue-400 hover:bg-opacity-100 hover:text-white");

</script>

<style scoped></style>