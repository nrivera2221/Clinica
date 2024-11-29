

<template>
    <section class="d-flex justify-content-center align-items-center" style="height:100vh;">
    <div class="text-center not-found">
<h1 class="display-1 text-danger">Error 404</h1>
<p class="lead">La página que buscas no existe.</p>
<router-link to="./HomeView.vue">Regresar al inicio</router-link>
    </div>
    </section>
</template>

<style lang="sass" scoped>
.not-found{
    text-align: center
    margin-top: 50px
}
section{
    background-color: #f8f0fa
}
</style>