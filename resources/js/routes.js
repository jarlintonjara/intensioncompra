
const Dashboard = () => import('./components/Dashboard.vue');
const Registro = () => import('./components/Registro.vue');
const Layout = () => import('./components/Layout.vue');
const NotFound = () => import('./components/NotFound.vue');
const Login = () => import('./components/Login.vue');
const Register = () => import('./components/Register.vue');
const Perfil = () => import('./components/Perfil.vue');
const noasignado = () => import('./components/registro/noasignado.Vue');

export default{
    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound
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
            beforeEnter: (to, form, next) => {
                const token = localStorage.getItem('access_token');
                if (token) {
                    axios.get('api/getSession/'+ token).then((res)=>{
                        next()
                    }).catch((error) => {
                        return next({ name: 'Login'})
                    })
                } else { 
                    return next({ name: 'Login'})
                }
               
            },
            children: [
               {
                    path: "/dashboard",
                    name: "dashboard",
                    component: Dashboard,
                },
                {
                    path: "/registro",
                    name: "Rgistro",
                    component: Registro,
                },
                {
                    path: '/perfil',
                    component: Perfil,
                    name: 'perfil'
                },
            ],
        },
    ]
}