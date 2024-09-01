<template>
  <userNav/>
  <carousel class="z-0" /> 
  <div class="grid grid-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="movie in movies" :key="movie._id" class=" ml-5 mr-5 rounded overflow-hidden shadow-lg mb-3">
        <div v-if="movieHasFile">
                 <img class="h-60 w-80 object-cover" :src="'http://localhost:3000/images/'+movie.coverPhoto" alt="Movie Cover">
              <div class="px-6 ">
              <div class="font-bold text-xl ">{{ movie.movieName }}</div>
              
          </div>
          <div class="px-6 pt-2 pb-2 flex justify-end">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="detail(movie)">
              Detail
              </button>
            
          </div> 
        </div>  

      </div>
      
  </div>
<userFooter/>

</template>

<script>
import router from '../router';
import userNav from './userNav.vue'; 
import userFooter from './userFooter.vue';
import carousel from './carousel.vue';
import axios from 'axios';

export default{
   components: {
    userNav,
    carousel,
    userFooter,
  },
data(){
  return { 
    movies:[],
    movieHasFile:false
  }
},

mounted(){
        this.getMovies();
    },
methods:{
  async getMovies(){
    try {
          let response =await axios.get('http://localhost:3000/movies/getMovies');
          this.movieHasFile=true
        this.movies=response.data;
        console.log("Movies: ", response.data);
        } catch (error) {
            console.log(error);
        }
  
    },
        
    async detail(movie){
      this.$router.push('/movies/'+movie._id);
    }

}

}
</script>

