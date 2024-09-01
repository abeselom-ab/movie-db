<template>
    <h2>Movies</h2>
    <div class="card" style="width: 18rem;">
        <div>
             <img src="catagory.imageUrl" class="card-img-top" alt="...">
        </div>
   
    <div class="card-body">
        <h5 class="card-title">{{catagory.movieName}}</h5>
        <p class="card-text">{{ catagory.description }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
</template>

<script>
export default {
    name:MovieCatagory,
    props:['catagory'],
    methods:{}
}
</script>

<style lang="scss" scoped>

</style>