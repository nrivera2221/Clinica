// src/store/historial.js

const state = {
    futurasCitas: [],
    pasadasCitas: [],
  };
  
  const mutations = {
    setHistorial(state, historial) {
      state.futurasCitas = historial.futurasCitas;
      state.pasadasCitas = historial.pasadasCitas;
    },
  };
  
  const actions = {
    async fetchHistorial({ commit }) {
      try {
        // Usar fetch para obtener el archivo JSON
        const response = await fetch("/assets/data/historico.json");
  
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        // Convertir la respuesta en JSON
        const data = await response.json();
  
        // Mapear los datos a la estructura que necesitas
        const historial = {
          futurasCitas: data.appointments.future.map((item) => ({
            fecha: item.date,
            hora: item.time,
            consulta: item.specialty,
            doctor: item.doctor,
          })),
          pasadasCitas: data.appointments.past.map((item) => ({
            fecha: item.date,
            hora: item.time,
            consulta: item.specialty,
            doctor: item.doctor,
            estado: item.status, // Agregar estado en las citas pasadas
          })),
        };
  
        // Guardar en el estado
        commit("setHistorial", historial); // Guardar tanto futuras como pasadas
      } catch (error) {
        console.error("Error al obtener el historial:", error);
      }
    },
  };
  
  const getters = {
    getAllHistorial(state) {
      return {
        future: state.futurasCitas,
        past: state.pasadasCitas,
      };
    },
  };
  
  // Exportar el módulo completo
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  