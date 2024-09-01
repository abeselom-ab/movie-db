<template>
  <nav
    class="sticky top-0 z-30 block w-full max-w-full px-4 py-2 text-white bg-slate-600 rounded-none 
    shadow-md h-max bg-opacity-80 backdrop-blur-2xl
    backdrop-saturate-200 lg:px-8 lg:py-4 ">
    <div class="flex items-center justify-between text-blue-gray-900 mt-2 mb-3">
      <a href="/" id="xlogo" title="GoMovies"><img 
        src="../assets/images/logo.png" alt="Logo" class="h-12 "> 
        
      </a>
      

      <div class="flex items-center gap-x-1">
        <router-link to="/abimovies" class="hidden px-2 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block no-underline">
            <span>Home</span>
        </router-link>

        <router-link to="/recentmovies" class="hidden px-2 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block no-underline">
            <span>Movies</span>
        </router-link>
        <router-link to="/login" class="hidden px-2 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block no-underline">
            <span>Login</span>
        </router-link>
        <router-link to="/register" class="hidden px-2 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block no-underline">
            <span>Register</span>
        </router-link>
    
      </div>
    
      
    </div>
  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>