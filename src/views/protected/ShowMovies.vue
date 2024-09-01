
 <template>
    <!-- component -->
<div class="flex min-h-screen items-center justify-center bg-white m-0 w-full ">
    <div class="ml-0 mt-0 overflow-scroll px-0">
  <table class="w-full  text-left">
    <thead>
      <tr>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-10">
          <p class="block antialiased font-sans text-sm text-red font-normal leading-none opacity-70">Movie Name</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-10">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Movie Genre</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-10">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Date Released</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-10">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Movie Description</p>
        </th>
        <!-- <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Cover Poster</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Video</p>
        </th> -->
      </tr> 
    </thead>
    <tbody v-for="movie in movies" :key="movie._id">
                    <tr v-if="movieHasFile">
                        <td>{{ movie.movieName  }}</td>
                        <td>{{ movie.movieGenre  }}</td>
                        <td>{{ formattedDate(movie.dateReleased) }}</td>
                        <td v-if="movie.movieDescription.length<20">{{ movie.movieDescription }}</td>
                        <td v-else>{{ movie.movieDescription.substring(0,20) }}...</td>
                        <!-- <td>{{ movie.coverPhoto }}</td>
                        <td v-if="movie.video.length<20">{{ movie.video  }}</td> 
                        <td v-else>{{ movie.video.substring(0,20) }}...</td> -->

                        <td>
                            <button @click="editMovie(movie)" class="btn btn-success">
                                Edit
                            </button>

                            <span  @click="deleteMovie(movie._id)" class="btn btn-danger ">
                              <i class="fas fa-trash-alt"></i> Delete
                            </span>
                       </td>         
                    </tr>
                </tbody>
  </table>
   
</div>

</div>
</template>

<script >
import axios from "axios";
import moment from "moment";
import '@fortawesome/fontawesome-free/css/all.css';
export default{
    name:'movies',
    data(){
        return{
            movieHasFile:false,
            movies:[]
        }
    },
    computed: {},

    mounted(){
        this.getMovies();
    },
    methods:{
        formattedDate(date) {
            return date ? moment(date).format("MMM DD, YYYY"): "";
        },
        async getMovies(){
            try {
                 let response =await axios.get('http://localhost:3000/movies/getAll');
                 this.movieHasFile=true
                this.movies=response.data;
                console.log("Movies: ", response.data);
            } catch (error) {
                console.log(error);
            }
          
        },
        async deleteMovie(id){
            let response = await axios.delete('http://localhost:3000/movie/deletemovie/'+id);
            this.getMovies();
            console.log(response);
        },
        async editMovie(movie){
            this.$router.push('/admin/editmovie/'+movie._id);
        }
    },
}
</script>

<style scoped>

</style> 
