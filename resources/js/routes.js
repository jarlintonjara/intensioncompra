
const Home = () => import('./components/Home.vue');
const Login = () => import('./components/Login.vue');
const Register = () => import('./components/Register.vue');
const Dashboard = () => import('./components/Dashboard.vue');
const NotFound = () => import('./components/NotFound.vue');

const MostrarEstacionamiento = () => import('./components/estacionamiento/Mostrar.vue');
//const CrearEstacionamiento = () => import('./components/estacionamiento/Crear.vue');
//const EditarEstacionamiento = () => import('./components/estacionamiento/Editar.vue');

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
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
            beforeEnter: (to, form, next) =>{
               axios.get('/api/athenticated').then(()=>{
                   next()
               }).catch((error) => {
                   console.log(error);
                   return next({ name: 'Login'})
               })
            }
        },
        {
            path: '/estacionamiento',
            component: MostrarEstacionamiento,
            name: 'estacionamiento'
        },
    ]
}