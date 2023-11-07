import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'

const routes = [
    {path: '/',component: HomePage},
    {path: '/login',component: LoginPage},
    {path: '/register',component: RegisterPage}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')