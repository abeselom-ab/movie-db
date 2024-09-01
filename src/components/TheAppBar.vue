<template>
	<nav class="bg-gray h-16 w-full">
		<header class="flex justify-between items-center py-4 px-6 border-b-4 border-primary">
			<div class="flex items-center">
				<button @click="toggleSidebar" class="text-gray-500 focus:outline-none /*lg:hidden*/">
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
				</button>
				<div class=" ml-5 flex space-x-1 items-center bg-gray-100">
					<div class=" bg-gray-100 p-2">
						<svg class="h-5 w-5 text-gray-500 mr-0" viewBox="0 0 24 24" fill="none">
							<path
								d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>

					<input class="w-32 sm:w-64 p-2 pl-10 pr-4 focus:border-indigo-600 bg-blueGray"
						style="outline-color: #00aeff" type="text" placeholder="Search" />
				</div>
			</div>
			<div class="flex items-center">
				
				<div class="cursor-pointer pr-2 font-bold text-primary" @mouseenter="dropdownOpen = !dropdownOpen"
					@click="dropdownOpen = !dropdownOpen">
					Abeselom
				</div>
				<!-- <div class="cursor-pointer pr-2 font-bold text-textDark" @click="dropdownOpen = !dropdownOpen">{{ user.firstName }} </div> -->
				<div class="relative">
					<button @mouseenter="dropdownOpen = !dropdownOpen" @click="dropdownOpen = !dropdownOpen"
						class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none cursor-pointer">
						<img class="h-full w-full object-cover" src="../assets/images/abi.jpg" alt="Your avatar" />
					</button>

					<div v-show="dropdownOpen" @click="dropdownOpen = false" class="fixed inset-0 h-full w-full z-10"></div>
					<!-- TODO Create routes -->
					<div
					v-show="dropdownOpen" @mouseleave="dropdownOpen = false"
					class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20"
				>
					<router-link
						:to="{name: 'Profile'}"
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:font-semibold hover:text-white"
						>Profile</router-link
					>
					
					<router-link
						:to="{name: 'Login'}"
						@click="logout"
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-500 hover:font-semibold hover:text-white"
						>Log out</router-link
					>
				</div>
				</div>
			</div>
		</header>


	</nav>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const dropdownOpen = ref(false)
const emit = defineEmits(["toggle-sidebar"])

const toggleSidebar = () => {
	emit("toggle-sidebar")
}

const logout = () => {
	localStorage.removeItem("token")
	localStorage.removeItem("user")
}
</script>

<style scoped></style>