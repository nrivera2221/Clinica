<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const username = ref('');
        const password =ref('');

        const handleLogin = async () => {
            try {
                await store.dispatch('login', {username, password});
                router.push('/dashboard');
            } catch (error){
                alert('Credenciales incorrectas.');
            }
        };
        return{ username, password, handleLogin};
    },
};
</script>

<template>
    <div class="login">
        <h1>Clinica Digital-Login</h1>
        <form @submit.prevent="handleLogin">
            <input v-model="username" type="email" placeholder="Correo electrónico" required/>
            <input v-model="password" type="password" placeholder="Contraseña" required/>
            <button type="submit">Ingresar</button>
        </form>
    </div>
</template>

<style>
</style>