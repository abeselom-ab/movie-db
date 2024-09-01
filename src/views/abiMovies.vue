<template>
  <userNav />
  <main class="container-xxxl index-page">
    <div
      class="d-flex flex-column min-vh-70 justify-content-center align-items-center"
    >
      <div class="input-group mb-5 w-50 mt-20">
        <input
          id="search-index"
          v-model="searchInput"
          name="search-index"
          class="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-primary px-3" @click="search">
          <svg
            class="h-5 w-5 text-gray-500 mr-0"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <h3 style="text-align: center">
          Watch Latest Movies and TV Shows in our Movie Database 
        </h3>
      <div class="container align-content-start text-start mt-2">
        <h3 style="text-align: center">
        </h3>
        <div v-if="!data.length">
            
            <center>
              <p>
                <img
                  src="../assets/images/movie.jpg"
                  alt=""
                  width="824"
                  height="471"
                />
              </p>
            </center>
        </div>
        <div v-else>
            <div v-for="movie in data" :key="movie._id" class="md:max-w-xs  m-auto rounded overflow-hidden shadow-lg mb-3">
                <div >
                        <img class="sm:h-1/2 w-full object-cover" :src="'http://localhost:3000/images/'+movie.coverPhoto" alt="Movie Cover">
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

      </div>
    </div>
  </main>
  <div class="h-80">
    <h2 class="items-center mx-10 py-2 px-4">Discover, Explore, and Enjoy Your Favorite Movies</h2>
    <h3 class="items-center mx-10 py-0 px-4">Features</h3>
    <p class="items-center mx-10 py-0 px-4">
            1. Extensive Movie Database <br>
            Explore a vast collection of movies spanning various genres, years, and languages. <br>
            Our comprehensive database ensures that you can find information on both classic masterpieces and the latest releases.
            <br>
            2. User-Friendly Interface<br>
            Enjoy a sleek and intuitive user interface that makes navigation a breeze. 
            Whether you're searching for a specific movie, exploring recommendations.
            <br>
            3. Personalized Recommendations<br>
            It help you discover new favorites! Our recommendation engine analyzes your 
            <br>
            4. Watchlist and Favorites<br>
            Keep track of movies you want to watch and mark your all-time favorites.
    </p>
  </div>

  <userFooter />
</template>

<script>
import userNav from "./userNav.vue";
import userFooter from "./userFooter.vue";
import axios from "axios";
export default {
  components: {
    userNav,
    userFooter,
  },

  data() {
    return {
      searchInput: "",
      data:[],
    };
  },
  methods: {
    async search() {
        console.log("This is ",this.searchInput);
      let response = await axios.post(
        "http://localhost:3000/movies/search",
        {searchInput:this.searchInput}
      );
      console.log('response',response.data);
      this.data=response.data;
    },
    async detail(movie){
      this.$router.push('/movies/'+movie._id);
    }
  },
};
</script>

<style scoped>
.logo {
  content: url(../assets/images/logo1.JPG);
}
</style>
