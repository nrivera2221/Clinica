<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import AppointmentHistory from '@/components/AppointmentHistory.vue';
import Nav from '@/components/Nav.vue';
import ScheduleAppointment from '@/components/ScheduleAppointment.vue';

</script>

<template>
    <Nav/>
    <section class="contenedor formulario-agendar">
        <div class=" contenedor__titulo text-center mb-4">
            <h2 class="contenedor__titulo--texto"> Agendar Cita </h2>
            <p class="contenedor__descripcion">Complete el formulario para agendar su cita </p>
        </div>

        <div class="contenedor__tarjeta card shadow-sm border-0 p-4"></div>
    <router-link to="./ScheduleAppointmentView.vue"/>
        <div class="history">
        <h1>Historial de Citas</h1>
        <h2>Citas Futuras</h2>
        <ul>
            <li v-for="appointment in futureAppointments" :key="appointment.id">
                <span>{{ appointment.date }} - {{ appointment.time }} - {{ appointment.specialty }} - {{ appointment.doctor }}</span>
                <button @click="cancelAppointment(appointment.id)">Cancelar</button>
                <button @click="openEditModal(appointment)">Modificar</button>
            </li>
            <router-link :to="`./AppointmentHistoryView.vue${appointment.id}`">Modificar</router-link>
        </ul>
        <h2>Citas Pasadas</h2>
        <ul>
            <li v-for="appointment in pastAppointments" :key="appointment.id">
                <span :class="appointment.statusClass">
                    {{ appointment.date }} - {{ appointment.time }} - {{ appointment.specialty }} -{{ appointment.doctor }} - {{ appointment.status }}
                </span>
        </li>
    </ul>
    <div v-if="isEditModalOpen" class="modal">
        <h2>Modificar Cita</h2>
        <form @submit.prevent="updateAppointment">
            <input v-model="editForm.date" type="date" required/>
            <input v-model="editForm.time" type="time" required/>
            <button type="submit">Guardar</button>
            <button @click="closeEditModal">Cancelar</button>
        </form>
    </div>
    </div>
</section>
</template>

<style>
.history ul {
    list-style-type: none;
    padding: 0;
}
.history li {
    margin: 10px 0;
}
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>