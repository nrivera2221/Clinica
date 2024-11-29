<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import login from '@/store/login';
import Login from '@/components/Login.vue';

</script>

<template>
    <section class= "container contenedor__login">
<div class="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div class=" text-center mt-5 contenedor__login-titulo">
    <h1>Clinica Digital-Login</h1>
</div>
        <form @submit.prevent="handleLogin">
            <input v-model="username" type="email" placeholder="Correo electrónico" required/>
            <input v-model="password" type="password" placeholder="Contraseña" required/>
            <button type="submit">Ingresar</button>
            <router-link to="./HomeView.vue">Home</router-link>
            <router-link to="./DashboardView.vue">Página Principal</router-link>
        </form>
    </div>
    </section>
</template>

<style lang="sass" scoped>
.contenedor__login{
    background-color: #f0f4f8 
    min-height: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
    padding: 20px
}
h1{
    color:darkblue
    font-size:2.5rem
    font-weight: bold
    text-align: center
    margin-bottom: 10px
}
.login-view{
    max-width: 400px
    margin: auto
    padding: 20px
    text-align: center
}
.login {
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
}
.login__form {
  width: 300px
  padding: 20px
  border: 1px solid #ccc
  border-radius: 5px
}
.login__error {
  color: red
  margin-top: 10px
}

</style>