
const Home = () => import('./components/Home.vue');
const Login = () => import('./components/Login.vue');
const Register = () => import('./components/Register.vue');
const Dashboard = () => import('./components/Dashboard.vue');
const Layout = () => import('./components/Layout.vue');
const NotFound = () => import('./components/NotFound.vue');
const Rol = () => import('./components/rol/Index.vue');
const Usuario = () => import('./components/usuario/Index.vue');
const Estacionamiento = () => import('./components/estacionamiento/Index.vue');
const Programacion = () => import('./components/programacion/Index.vue');

export default{
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home,
            name: "Home"
        },
        
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/layout',
            component: Layout,
            name: 'Layout',
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch((error) => {
                    console.log(error);
                    return next({ name: 'Login'})
                })
            },
            children: [
               {
                    path: "/dashboard",
                    name: "Dashboard",
                    component: Dashboard,
                },
                {
                    path: '/usuarios',
                    component: Usuario,
                    name: 'usuario'
                },
                {
                    path: '/estacionamiento',
                    component: Estacionamiento,
                    name: 'estacionamiento'
                },
                {
                    path: '/programacion',
                    component: Programacion,
                    name: 'programacion'
                },
                {
                    path: '/rol',
                    component: Rol,
                    name: 'rol'
                },
            ],
        },
    ]
}