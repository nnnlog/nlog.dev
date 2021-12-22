import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
	state: {
		next: false,
		prev: false,
		info: {},
	},
	mutations: {
		loadData(state) {
			axios.get("https://api.nlog.dev/").then(({data}) => state.info = data);
		},
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
		info(state) {
			return state.info;
		},
	}
})
