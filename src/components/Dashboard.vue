<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup(){
        const store = useStore();
        const user = computed(() => store.state.user);
        return { user };
    },
};
</script>


<template>
    <div class="dashboard">
<h1>Bienvenido, {{ user?.name }}</h1>
<p>Tu próxima cita: {{ user?.nextAppointment.date }} a las {{ user?.nextAppointment?.time }} con {{ user?.nextAppointment?.doctor }}</p>
   <router-link to="/schedule">Agendar una cita</router-link>
   <router-link to="/history">Ver historial</router-link>
   </div>
</template>

<style>
</style>