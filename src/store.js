import Vuex from "vuex";
import Vue from "vue";


Vue.use(Vuex);
export const UPDATE_STORE = 'UPDATE_STORE'

export const store = new Vuex.Store({
    state: {
        form: {
            name: "",
            phone: "",
            email: "",
        },
        count: 0
    },
    mutations: {
        updateName (state, name) {
            state.form.name = name
            // eslint-disable-next-line no-console
            console.log(state.form.name)
        },
        updatePhone (state, phone) {
            state.form.phone = phone
            // eslint-disable-next-line no-console
            console.log(state.form.phone, "   ", phone.indexOf('+380'))

        },
        updateEmail (state, email) {
            state.form.email = email
            // eslint-disable-next-line no-console
            console.log(state.form.email)
        },

    }
});



