import {createRouter, createWebHashHistory} from 'vue-router';
import Main from '../views/Main.vue';
import Intro from "@/views/Intro";
import Performance from '../views/Performance.vue';
import Redirect from "@/views/Redirect";
import Project from "@/views/Project";

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main
	},
	{
		path: '/1',
		name: 'Home',
		component: Main
	},
	{
		path: '/2',
		name: 'Intro',
		component: Intro
	},
	{
		path: '/3',
		name: 'Performance',
		component: Performance
	},
	{
		path: '/4',
		name: 'Project',
		component: Project
	},
	{
		path: '/:catchAll(.*)',
        component: Redirect
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
