<script>
import { time } from 'console';
import {ref, computed} from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const specialties = ref([]); //Llenado de lista con datos API
        const specialty = ref('');
        const doctor = ref('');
        const date = ref('');
        const time = ref('');

        const availableDoctors = computed(() =>{
            const selectedSpecialty = specialties.value.find(spec => spec.id === specialty.value);
            return selectedSpecialty?.doctors || [];
        });
        const scheduleAppointment = () => {
            alert (`Cita agendada con éxito para el ${date.value} a las ${time.value}`);
        };
        return { specialties, specialty, doctor, date, time, availableDoctors, scheduleAppointment};
    },
};
</script>

<template>
    <Nav/>
    <section class="contenedor formulario-agendar">
        <div class=" contenedor__titulo text-center mb-4">
            <div class="schedule"></div>
            <h2 class="contenedor__titulo--texto"> Agendar Cita </h2>
            <p class="contenedor__descripcion">Complete el formulario para agendar su cita </p>
        </div>

        <div class="contenedor__tarjeta card shadow-sm border-0 p-4">
    <router-link to="./AppointmentHistoryView.vue"/>
        <div class="history">
    
        <form @submit.prevent="scheduleAppointment">
            <select v-model="specialty" required>
                <option disabled value="">Selecciona una especialidad</option>
                <option v-for="spec in specialties" :key="spec.id" :value="spec.id">{{ spec.name }}</option>
            </select>
            <select v-model="doctor" required>
                <option disabled value=""></option>
                <option v-for="doc in availableDoctors" :key="doc.id" :value="doc.id">{{ doc.name }}</option>
            </select>
            <input v-model="date" type="date" required/>
            <input v-model="time" type="time" required/>
            <button type="submit">Agendar</button>
        </form>
    </div>
    </div>
    </section>
</template>

<style>
.schedule-view{
    max-width: 600px;
    margin: auto;
    padding: 20px;
}
</style>