import { createStore } from 'vuex'

export default createStore({
    mutations: {
        initialiseStore() {
            console.log('initialising store...')
        },
    },
})
