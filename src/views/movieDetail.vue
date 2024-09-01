<template>
    <userNav/> 
    <main  class="container-md pb-3 mt-6">
      <div v-for="movie in movies" :key="movie._id" class="row justify-content-center flex">
          <div v-if="movieHasFile" class="card border-0 mb-3 shadow flex">
          <div id="mid" data-mid="1630855942" data-mode="movie" class="card-header p-0">
              <div id="content-embed" style="display: none;"></div>
              <video width="720" height="620" controls preload="auto">
                  <source :src="'http://localhost:3000/videos/'+movie.video" type="video/mp4">
              </video>
        
                
          </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-lg-2 d-none d-lg-block">
                <img :src="'http://localhost:3000/images/'+movie.coverPhoto" alt="Movie Cover" class="lazy img-fluid entered loaded"  data-ll-status="loaded">
              <div class="d-grid gap-2 mt-2">
                <button class="btn btn-primary" @click="download" type="button">Download</button>
              </div>
            </div>
            <div class="col-12 col-lg-7 border-sm-end">
              <div class="row">
                <div class="col-12 col-md-8">
                  <p class="mb-1">
                    <strong>Movie Name:</strong>                      
                    {{movie.movieName}}                  
                </p>
                  <p class="mb-1">
                    <strong>Genre: </strong>                      
                    {{movie.movieGenre}}                 
                </p>
                  <p class="mb-1">
                    <strong>Movie Description: </strong>   
                    {{movie.movieDescription}}
                    </p>
                    <p class="mb-1">
                    <strong>Date Released:</strong> 
                    {{ movie.dateReleased }}
                  </p>
                </div>
              </div>
            </div>

          </div>
        
        </div>
        <div class="card-footer border-0 tags">
        </div>
        
         </div>       
      </div>
    </main>
<userFooter/>
</template>

<script >
import userFooter from './userFooter.vue';
import userNav from './userNav.vue';
import axios from 'axios';
export default{
   components: {
    userNav,
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
              let response=await axios.get(`http://localhost:3000/movie/${this.$route.params.id}`);
              console.log(response);
                 this.movieHasFile=true
                this.movies=response.data;
                console.log("Movies: ", response.data);
            } catch (error) {
                console.log(error);
            }
          
        },
  async download(){
    this.$router.push('/login');
  

  }
    
}

}
</script>
