import { error } from "console";

// store/login.js
export default {
    state: {
      email: '',
      password: '',
      error: null,
    },
    mutations: {
      setEmail(state, email) {
        state.email = email;
      },
      setPassword(state, password) {
        state.password = password;
      },
      setError(state, error) {
        state.error = error;
      },
    },
    actions: {
      async handleLogin({ commit, state }) {
        commit('setError', null); // Limpiar cualquier error previo
        const url = '/login.json'; // Ruta al archivo JSON
  
        try {
          const response = await fetch(url); // Hacer la solicitud fetch
  
          if (!response.ok) {
            throw new Error('Error al cargar datos'); // Si la respuesta no es correcta
          }
  
          const data = await response.json(); // Parsear la respuesta como JSON
  
          // Validar las credenciales (puedes modificar este bloque según tus necesidades)
          if (data.username !== state.email || data.id !== state.password) {
            throw new Error('Credenciales inválidas');
          }
  
          // Si las credenciales son correctas, puedes guardar un token o cualquier dato relevante
          localStorage.setItem('authToken', data.token);
  
          // Limpiar el error si es correcto
          commit('setError', '');
          // Redirigir a dashboard
          this.$router.push('/dashboard');
        } catch (error) {
          // Capturar cualquier error y mostrarlo
          commit('setError', error.message); // Guardar el mensaje de error 
        }
      },
    },
    getters: {
      error: state => state.error,
      email: state => state.email,
      password: state => state.password,
    },
  };
  