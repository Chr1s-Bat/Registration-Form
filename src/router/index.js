import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudySessionsView from '../views/StudySessionsView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/study-sessions', name: 'StudySessions', component: StudySessionsView },
    { path: '/about', name: 'About', component: AboutView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router