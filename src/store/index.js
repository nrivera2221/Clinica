import { createStore } from "vuex";
import axios from "axios";
import Login from "@/components/Login.vue";

const store = createStore({
    state:{
        user:null,
        token:null,
        appointments: [],
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token){
            state.token = token;
        },
        setAppointments (state,appointments) {
        state.appointments = appointments;
    },
        
},
actions: {
    async Login({ commit }, { username, password }) {
        const response = await axios.post('http://BASE_URL/api/v1/clinic/users/login', {
            username,
            password,
        });
        commit('setUser', response.data);
        commit('setToken', response.data.token);
    },
    async fetchAppointments({ state, commit}) {
        const response = await axios.get('http://BASE_URL/api/v1/clinic/secure/dashboard', {
            headers: { Authorization: `Bearer ${state.token}`},
        });
        commit('setAppointments', response.data.appointments);
    },
},
});
export default store;