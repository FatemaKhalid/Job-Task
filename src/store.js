import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        token: '',
        loginErrors: [],
        invalidCredentials: ''
    },
    getters: {
        user: state => state.user,
        token: state => state.token,
        loginErrors: state => state.loginErrors,
        invalidCredentials: state => state.invalidCredentials,
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_LOGIN_ERRORS: (state, loginErrors) => {
            state.loginErrors = loginErrors
        },
        SET_INVALID_CREDENTIALS: (state, invalidCredentials) => {
            state.invalidCredentials = invalidCredentials
        },
    },
    actions: {
        loginUser({ commit, state }, user) {
            axios.post('http://localhost:5000/auth/getToken', user)
            .then(response => {
                commit('SET_TOKEN', response.data.token)
                commit('SET_USER', response.data.user)
                router.push({ name: 'Dashboard' })
            })
            // .catch(error => {
            //     commit('SET_INVALID_CREDENTIALS', '')
            //     commit('SET_LOGIN_ERRORS', [])
            //     console.log(error.response)

            //     if(error.response.data.error) {
            //         commit('SET_INVALID_CREDENTIALS', error.response.data.error)
            //     } else {
            //         const errors = []

            //         for (const key of Object.keys(error.response.data.errors)) {
            //             error.response.data.errors[key].forEach(err =>{
            //                 errors.push(err)
            //             })
            //         }

            //         console.log(errors)

            //         commit('SET_LOGIN_ERRORS', errors)
            //     }
            // });
        },
    }
})