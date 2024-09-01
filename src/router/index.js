import { createRouter, createWebHistory } from "vue-router"
import ProtectedIndex from "../views/protected/Index.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/abimovies",
			meta: {
				requireAuth:true,
			
			}
		},
		{
			path: "/abimovies",
            name:"abimovies",
			component: () => import('../views/abiMovies.vue')
		},
		{
			path: "/recentmovies",
            name:"recentmovies",
			component: () => import('../views/userView.vue')
		},
		{
			path: "/test",
            name:"test",
			component: () => import('../views/test.vue')
		},
		{
			path: "/movies/:id",
			name: "movies",
			component: () => import('../views/movieDetail.vue')
		},
		{
			path: "/register",
			name: "register",
			component: () => import("../views/free/Register.vue"),
		},
		{
			path: "/login",
			name: "Login",
			component: () => import("../views/free/Login.vue"),
		},
		{
			path: "/admin",
			component: ProtectedIndex,
			meta: {
				requireAuth: true,
				name: "protected-index",
			},
			children: [
				{
					path: "dashboard", // will make this default entry using the name
					name: "AdminDashboard",
					component: () => import("../views/protected/ShowMovies.vue"),
				},
				{
					path: "profile",
					name: "Profile",
					component: () => import("../views/protected/Profile.vue"),
				},
				{
					path: "users",
					name: "users",
					component: () => import("../views/protected/Users.vue"),
				},
				{
					path: "edituser/:id",
					name: "edituser",
					component: () => import("../views/protected/editUser.vue"),
				},
				{
					path: "addmovie", // will make this default entry using the name
					name: "addmovie",
					component: () => import("../views/Admin/AddMovie.vue"),
				},
				{
					path: "editmovie/:id", // will make this default entry using the name
					name: "editmovie",
					component: () => import("../views/Admin/editMovie.vue"),
				},

			],
		},
		{
			path: "/home",
			name: "Home",
			component: () => import("../views/free/HomeView.vue"),
		},
		{
			path: "/about",
			name: "About",
			component: () => import("../views/free/AboutView.vue"),
		},
	],
	
});
router.beforeEach(async (to, from,next) => {
	// if (
	//   // make sure the user is authenticated
	//   !isAuthenticated &&
	//   // ❗️ Avoid an infinite redirect
	//   to.name !== 'Login'
	// ) {
	//   // redirect the user to the login page
	//   return { name: 'Login' }
	// }
	next();
  })

export default router
