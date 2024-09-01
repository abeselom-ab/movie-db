<template>
<div class="w-full h-screen flex items-center justify-center bg-gray-200">
  
  <div  class="bg-gray-200 w-250 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
    
  <h3 class="text-center ">Add Movie</h3>
    <form @submit.prevent="addMovie">
          <div class="">
            <label for="">Movie Name</label>
            <input required type="text" v-model="data.movieName" class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" />
          </div>
          <div class="">
            <label for="">Movie Genre</label>
            <input required v-model="data.movieGenre" type="text" class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" />
          </div>
          <div class="">
            <label for="">Date Released</label>
            <input required
              v-model="data.dateReleased"
              type="date"
              class="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
            />
          </div>
          <div class="">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"             
              >Movie Description</label
            >
            <textarea required
              v-model="data.movieDescription"
              id="message"
              rows="2"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div class="">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Movie Poster</label
            >
            <input required
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
             name="image"
              type="file" 
              accept="image/*"
              @change="handleFileChange"
            />
          </div>
          <div class="">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Video</label
            >
            <input required
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              accept="video/*"
              @change="handleVideoChange"
              type="file"
            />
          </div>
          <div class="text-center mt-2">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Save
            </button>
          </div>
      </form>
  </div>

</div>
</template>

<script>
import axios from "axios";
//const axios=require("axios");
export default {
  data() {
    return {
      data: {
        movieName: "",
        movieGenre: "",
        dateReleased: "",
        movieDescription: "",
        coverPhoto: "",
        video: "",
      },
      
    };
  },
  methods: {
    handleFileChange(e) {
      const file=e.target.files[0];
      this.data.coverPhoto = file;
      // console.log("Chosen photo: ", this.data.coverPhoto);
    },
    handleVideoChange(e) {
      const file1=e.target.files[0];
      this.data.video = file1;
      // console.log("Chosen photo: ", this.data.video);
    },
    async addMovie() {
   
      try {
        console.log(this.data);
        let response = await axios.post("http://localhost:3000/movie/add", this.data,{headers:{'Content-type':'multipart/form-data'}});
          console.log("Movie added successfully " + response);
        this.$router.push("/admin/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
