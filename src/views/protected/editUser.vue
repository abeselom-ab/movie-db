<template>
  
    <div class="w-full h-screen flex items-center justify-center bg-gray-800">
      <div class="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
        <form @submit.prevent="updateUser" >
          <label class="font-light text-4xl mb-4">Up<span class="font-bold">date</span></label>
          <input v-model="user.username" type="text" class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Username"/>
          <input v-model="user.email" type="text" class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Email"/>
          <input v-model="user.role" type="text" class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Role"/>
          <input @change="handleFileChange" type="file" class="block w-full focus:ring-blue-600 text-lg text-gray-900 border border-gray-300 rounded-lg mb-4 h-12
          cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600
           dark:placeholder-gray-400" placeholder="ProfilePicture"/>
          <input v-model="user.password"  type="password" class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Password"/>
          
              <button type="submit" class="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold
               hover:bg-blue-700 transition mb-4">
                Update
              </button>
           </form>
      </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default{
      data(){
          return{
             user:{
                  username:"",
                  email:"",
                  role:"",
                  profilePicture:"", 
                  password:""
              }
          }
      },
      async created(){
        let response=await axios.get(`http://localhost:3000/user/${this.$route.params.id}`);
            if(response.data && response.data[0]){
                this.user = response.data[0]
                console.log(this.user)
            }
      },
      methods: {
        handleFileChange(e){
        this.user.profilePicture= e.target.files[0];
        },   
          async updateUser(){
            try {
            let response= await axios.put(`http://localhost:3000/user/updateUser/${this.user._id}`,this.user,{headers:{'Content-type':'multipart/form-data'}});
             this.$router.push('/admin/users');
             console.log("User updated successfully"+response);
            
            } catch (error) {
              console.log(error.message);
            }
    
          }
  }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>