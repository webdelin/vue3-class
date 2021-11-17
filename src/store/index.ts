import {createLogger, createStore, Store} from "vuex";
import {InjectionKey} from 'vue'

const plugins = []

if (process.env.NODE_ENV === "development") {
    plugins.push(createLogger())
}

export interface State {
    isOpen: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
    plugins,
    state: {
        isOpen: false,
    },
    mutations: {
        onOpen(state) {
            console.log('Mutation')
            state.isOpen = !state.isOpen
        }
    },
    getters: {
        isOpen(state) {
            return state.isOpen
        }
    },
    actions: {},
    modules: {}
})