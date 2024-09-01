<template>
    <div class="card">
        <div class="card-header">           
            <router-link :to="{ name: 'register' }" class="btn btn-primary float-right"> Add User</router-link>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Userame</th>
                    <th>Email</th>
                    <th>Role</th>
                    <!-- <th>Profile Picture</th> -->
                    <th>Password</th>
                   
                  </tr>
                </thead>
                <tbody v-for="user in users" :key="user._id">
                    <tr v-if="userHasFile">
                        <td>{{ user.username  }}</td>
                        <td>{{ user.email  }}</td>
                        <td>{{ user.role }}</td>
						<!-- <td>{{ user.profilePicture  }}</td>  -->
                        <td>{{ user.password }}</td>
                        
                        <td>
                            <button @click="editUser(user)" class="btn btn-success">
                                Edit
                            </button>
                            <span  @click="deleteUser(user._id)" class="btn btn-danger ">
                              <i class="fas fa-trash-alt"></i> Delete
                            </span>
                        </td>         
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';

export default{
    name:'users',
	data(){
		return{
			users:[],
            userHasFile: false
		}	
	},
    mounted(){
     this.getUsers();
    },
	methods:{
        
        async getUsers(){
            try {
                let response= await axios.get('http://localhost:3000/user/getUsers');

                this.users=response.data;
                this.userHasFile=true;
                console.log("users: ", response.data); 

            } catch (error) {
                console.log(error);
            }
        
        },
        async deleteUser(id){

            try {
                let response= await axios.delete('http://localhost:3000/user/deleteUser/'+id);
                this.getUsers();
                console.log(response);
            } catch (error) {
                
            }
        },
        async editUser(user){
			this.$router.push('/admin/edituser/'+user._id);
		},

	}

}
</script>

<style lang="scss" scoped>

</style>