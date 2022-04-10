
const Layout = () => import('./layouts/default.vue');
const Dashboard = () => import('./pages/dashboard.vue');
const usuarios = () => import('./pages/users.vue');

const Registro = () => import('./pages/registro/formulario.vue');
const Nasignado = () => import('./pages/registro/no-asignado.vue');
const Sasignado = () => import('./pages/registro/asignado.vue');

const Ingreso = () => import('./pages/ingreso/index.vue');
const Bloqueado = () => import('./pages/ingreso/bloqueado.vue');

const Reservado = () => import('./pages/asignacion/Reservado.vue');
const Asignacion = () => import('./pages/asignacion/Index.vue');
const Facturado = () => import('./pages/asignacion/Facturado.vue');

const NotFound = () => import('./pages/errors/404.vue');
const Login = () => import('./pages/auth/login.vue');
const Register = () => import('./pages/auth/register.vue');
const Perfil = () => import('./pages/settings/perfil.vue');

export default{
    mode: 'history',
    routes: [
        { path: '*', component: NotFound,
            beforeEnter: (to, form, next) => {
                return next({ name: 'Login'})
            },
        },
        { path: '/register', component: Register },
        { path: '/login', component: Login, name: 'Login'},
        { path: '/layout', component: Layout, name: 'Layout',
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
                { path: "/dashboard", component: Dashboard, name: "dashboard"},
                { path: "/usuarios", component: usuarios, name: "usuarios"},
                { path: "/registro", component: Registro,  name: "Rgistro"},
                { path: "/ingreso", component: Ingreso, name: "ingreso"},
                { path: '/perfil', component: Perfil, name: 'perfil'},
                { path: '/no-asignado', component: Nasignado, name: 'noasignado'}, 
                { path: '/asignacion', component: Asignacion, name: 'asignacion'}, 
                { path: '/reservado', component: Reservado, name: 'reservado'}, 
                { path: '/bloqueado', component: Bloqueado, name: 'bloqueado'},
                { path: '/facturado', component: Facturado, name: 'facturado'},
            ]
        },
    ]
}