
const Dashboard = () => import('./components/Dashboard.vue');
const Registro = () => import('./components/Registro.vue');
const Layout = () => import('./components/Layout.vue');
const NotFound = () => import('./components/NotFound.vue');

export default{
    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        /* {
            path: '/',
            component: Home,
            name: "Home"
        }, */
        
        /* {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        }, */
        {
             path: '/layout',
            component: Layout,
            name: 'Layout',
           /*  beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch((error) => {
                    console.log(error);
                    return next({ name: 'Login'})
                })
            }, */
            children: [
               {
                    path: "/dashboard",
                    name: "Dashboard",
                    component: Dashboard,
                },
                {
                    path: "/registro",
                    name: "Rgistro",
                    component: Registro,
                }
            ],
        },
    ]
}