import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
	state: {
		next: false,
		prev: false,
		info: {
			blog: "169,605", github: 100, cf: 1959, boj: 1129, solved_tier: 21, solved_rat: 2273
		},
	},
	mutations: {
		loadData(state) {
			axios.get("https://api.nlog.dev/").then(res => {
				if (res?.status !== 200) {
					state.info.error = "";
					state.info = JSON.parse(JSON.stringify(Object.assign(state.info, {
						error: "최신 정보를 불러오지 못했어요.\n2022년 2월 2일의 자료를 보여주고 있어요.",
					})));
					console.log(state.info);
				} else {
					state.info = res.data;
				}
			});
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
