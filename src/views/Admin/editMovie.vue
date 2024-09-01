<template>
    <div class="container">
        <div class="row">
            <div class="text-left ">

                <h2>Edit Movie Detail</h2>  
            </div> 
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
            <form @submit.prevent="updateMovie">
                <div class="form-group">
                    <label for="">Movie Name</label>
                    <input v-model="data.movieName" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Movie Genre</label>
                    <input v-model="data.movieGenre" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Date Released</label>
                    <input v-model="data.dateReleased" type="date" class="form-control">
                </div>
                <div class="form-group">
                    
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Description</label>
                    <textarea v-model="data.movieDescription" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                </div>
                <div class="">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Movie Poster</label
            >
            <input
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
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              accept="video/*"
              @change="handleVideoChange"
              type="file"
            />
          </div>
                <div class="text-center mt-2" >
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Update
                        </button>
                </div>
                
            </form>
            </div>
            <div class="col-3"></div>

        </div>

    </div>


</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default{
    data(){
        return{
         data:{
            movieName:"",
            movieGenre:"",
            dateReleased:"",
            movieDescription:"",
            coverPhoto:"",
            video:""
         }
        }
    },
    async created(){
            let response=await axios.get(`http://localhost:3000/movie/${this.$route.params.id}`);
            if(response.data && response.data[0]){
                this.data = response.data[0]
                this.data.dateReleased = response.data[0].dateReleased ? moment(response.data[0].dateReleased).format("YYYY-MM-DD") : ''
            }

    },
    methods:{
        async updateMovie(){
            console.log(this.data)
            let reponse=await axios.put(`http://localhost:3000/movie/edit/${this.data._id}`,this.data,{headers:{'Content-type':'multipart/form-data'}});
            console.log(reponse.data.message);
            this.$router.push('/admin/dashboard');
        },
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
    }
}
</script>

<style lang="scss" scoped>

</style>