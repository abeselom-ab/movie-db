<template>
    <!-- 
        This page requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```

     -->
    <main class="grid min-h-full place-items-center bg-white px-f py-24 sm:py-32 lg:px-8">
        <div class="text-center">
            <p class="text-base font-semibold text-indigo-600">404</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
            <div class="mt-10 tlex items-center justify-center gap-x-6">
                <router-link to=""
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go
                    back home</router-link>
                <router-link to="" class="text-sm font-semibold text-gray-900">Contact support <span
                        aria-hidden="true">&rarr;</span></router-link>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>