import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import OrdersPage from '@/views/OrdersPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import AddProduct from '@/views/AddProduct.vue'
import store from '@/store'

const routes = [
    {path: '/',component: HomePage},
    {path: '/home',component: HomePage},
    {path: '/login',component: LoginPage},
    {path: '/register',component: RegisterPage},
    {path: '/about' ,component: AboutPage},
    {path: '/orders' ,component: OrdersPage},
    {path: '/product' ,component: ProductPage},
    {path: '/Addproduct' ,component: AddProduct},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')