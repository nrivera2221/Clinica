<script>
import { time } from 'console';
import {ref, computed} from 'vue';
import { useStore } from 'vuex';
import agenda from '@/data/agenda.json' // Ruta creada del archivo JSON con datos de agenda

export default {
    setup() {
        const store = useStore();
        const specialties = ref([agenda]); //Llenado de lista con datos API
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
    <div class="schedule">
        <h1>Agendar Cita</h1>
        <form @submit.prevent="scheduleAppointment">
            <select v-model="specialty" required>
                <option disabled value="">Selecciona una especialidad</option>
                <option v-for="spec in specialties" :key="spec.id" :value="spec.id">{{ spec.name }}</option>
            </select>
            <select v-model="doctor" required>
                <option disabled value=""></option>
                <option v-for="doc in availableDoctors" :key="doc.id" :value="doc.id">{{ doc.name }}</option>
            </select>
            <input v-model="date" type="date" required for="hora" class="form-label"/>
            <input v-model="time" type="time" required class="form-control" id="hora"/>
            <button type="submit" class="btn btn-primary">Agendar</button>
        </form>
    </div>
</template>

<style>
</style>