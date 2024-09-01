<template>
<div>
    <!-- component -->
<div class="w-full h-screen flex items-center justify-center bg-gray-800">
    <div class="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
        <form enctype="multipart/form-data" @submit.prevent="login">
            
        <label class="font-light text-4xl mb-4">Log<span class="font-bold">in</span></label>
        <div class="flex justify-center items-center mx-auto px-4 py-4 text-red-500 " v-if="error">
            <span>{{ error }}</span>
        </div>
        <input type="email" name="email" v-model="email" class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Email"/>
        <input type="password" name="password" v-model="password" class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Password"/>
        
            <button class="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold
             hover:bg-blue-700 transition mb-4" type="submit">
             Login
            </button>
       
        <a href="/register" class="text-right mb-4">Create Account</a>
        </form>
    </div>
</div>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from "vue";
import axios from 'axios'
import router from '../../router';

const email = ref('')
const password = ref('')
const error = ref()

const login = async () => {
    console.log("hello")
    let credentials = {
        email: email.value,
        password: password.value
    }
    try {
        let response = await axios.post('http://localhost:3000/user/login', credentials)
        let status = response.data.status
        let role = response.data.role
        if(status == 200){
            if(role == "admin") router.push('/admin/dashboard')
            else router.push('/recentmovies')
            console.log("status :" , status);
        }
        else{
            error.value = "Please try again, invalid email or password"
            console.log("status :" , status);
        }
        console.log("Login response: ", response.data.status);  
    } catch (error) {
        console.log("error: ", error);
    }
}
</script>

<style scoped></style>