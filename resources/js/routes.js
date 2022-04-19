
const Layout = () => import('./layouts/default.vue');
const Dashboard = () => import('./pages/dashboard.vue');
const usuarios = () => import('./pages/users.vue');

const Registro = () => import('./pages/registro/formulario.vue');
const Nasignado = () => import('./pages/registro/nasignado.vue');

const Ingreso = () => import('./pages/ingreso/Index.vue');
const Bloqueado = () => import('./pages/ingreso/bloqueado.vue');

const asignacion = () => import('./pages/asignacion/index.vue');
const reservado = () => import('./pages/asignacion/reservado.vue');
const facturado = () => import('./pages/asignacion/facturado.vue');
const emplazado = () => import('./pages/asignacion/emplazado.vue');

const NotFound = () => import('./pages/errors/404.vue');
const Login = () => import('./pages/auth/login.vue');
const Register = () => import('./pages/auth/register.vue');
const Perfil = () => import('./pages/settings/perfil.vue');
const Configuracion = () => import('./pages/settings/configuracion.vue');

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
                    axios.get('api/getSession/' + token).then((res) => {
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
                { path: '/configuracion', component: Configuracion, name: 'configuracion'},
                { path: '/no-asignado', component: Nasignado, name: 'noasignado'}, 
                { path: '/asignacion', component: asignacion, name: 'asignacion'}, 
                { path: '/reservado', component: reservado, name: 'reservado'}, 
                { path: '/emplazado', component: emplazado, name: 'emplazado'}, 
                { path: '/facturado', component: facturado, name: 'facturado' },
                { path: '/bloqueado', component: Bloqueado, name: 'bloqueado'},
            ]
        },
    ]
}