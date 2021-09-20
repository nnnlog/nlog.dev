import {createStore} from 'vuex'

export default createStore({
	state: {
		next: false,
		prev: false,
	},
	mutations: {
		next(state, next) {
			state.next = next;
		},
		prev(state, prev) {
			state.prev = prev;
		},
	},
	actions: {
		next({commit}, next) {
			commit('next', next);
		},
		prev({commit}, prev) {
			commit('prev', prev);
		},
	},
	getters: {
		next(state) {
			return state.next;
		},
		prev(state) {
			return state.prev;
		},
	}
})
