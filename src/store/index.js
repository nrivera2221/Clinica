import { createStore } from "vuex";
import LoginData from '../data/dashboard.json'; // importar datos de archivo JSON
import historialData from '@/data/historico.json'; // importar datos de archivo JSON

const store = createStore({
    state:{
        user:{}, // Datos usuario
        token:{}, //seguridad
        futureAppointments: [], //Citas futuras
        pastAppointments:[], //Citas pasadas
        loading: false, // Carga
        error: null, //Almacena errores
    },
    mutations: {
        //Actualiza datos usuario
        setUserData(state, user) {
            state.user = user;
        },
        //Actualiza contraseña
        setToken(state, token){
            state.token = token;
        },
       //Actualiza citas
        setAppointments (state, { futureAppointments, pastAppointments }) {
            state.futureAppointments = futureAppointments;
            state.pastAppointments = pastAppointments;
        },
        //Establece el error
        setError(state,error) {
            state.error = error;
        },
        //Establece la carga
        setLoading(state, status) {
            state.loading = status;
        }
},
actions: {
    //Obtener datos usuario
    async fetchUserData({ commit }) {
         commit('setLoading', true); //comenzar carga
         try{
            const data = loginData;
//llamado actualizar el estado con los datos del usuario
            commit('setUserData', data.user);
        } catch (error) {
            commit('setError', error.message); //almacenar error
        console.error('Error al cargar datos de usuario ', error);
        } finally {
            commit('setLoading', false); //termina la carga 
        }
        },
        //Obtener citas
        async fetchAppointments({ commit }){
            commit('setLoading', true); //Comenzar carga
            try {
                //Usamos datos importado archivo historico.json
            const data = historialData;
            // Usamos mutación par actualizar citas
            commit('setAppointments', {
                futureAppointments: data.appointments.future,
                pastAppointments: data.appointments.past,
            });
            }catch (error){
                commit ('setError', error.message); // Almacena error
                console.error ('Error al cargar las citas:', error);
            } finally {
                commit ('setLoading', false); // Termina carga
            }
        }
        }
   } )
