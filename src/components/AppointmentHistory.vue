<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default{
    setup() {
        const store = useStore();
        const isEditModalOpen = ref(false);
        const editForm = ref ({});

        const futureAppointments = computed(() => store.state.appointment.filter(appt => new Date(appt.date) > new Date ()));
        const pastAppointments = computed(() => store.state.appointments.filter(appt => new Date(appt.date) <= new Date ()));
    
        const cancelAppointment = (id) => {
            alert(`Cita ${id} cancelada`);
        };

        const openEditModal = (appointment) => {
            editForm.value = {...appointment};
            isEditModalOpen.value = true;
        };

        const closeEditModal = () => {
            isEditModalOpen.value = false;
            editForm.value = {};
        };

        const updateAppointment = () => {
            if (new Date(editForm.value.date) <= new Date()) {
                alert('La nueva fecha debe ser posterior a la fecha actual.');
                return;
            }
            alert(`Cita modificada para el ${editForm.value.date} a las ${editForm.value.time}`);
            closeEditModal();
        };

        return {
            futureAppointments,
            pastAppointments,
            isEditModalOpen,
            editForm,
            cancelAppointment,
            openEditModal,
            closeEditModal,
            updateAppointment,
        };
    },
};
</script>

<template>
    <div class="history">
        <h1>Historial de Citas</h1>
        <h2>Citas Futuras</h2>
        <ul>
            <li v-for="appointment in futureAppointments" :key="appointment.id">
                <span>{{ appointment.date }} - {{ appointment.time }} - {{ appointment.specialty }} - {{ appointment.doctor }}</span>
                <button @click="cancelAppointment(appointment.id)">Cancelar</button>
                <button @click="openEditModal(appointment)">Modificar</button>
            </li>
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