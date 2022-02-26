const Estacionamiento = () => import('./components/Estacionamiento.vue');

const Mostrar = () => import('./components/estacionamiento/Mostrar.vue');
const Crear = () => import('./components/estacionamiento/Crear.vue');
const Editar = () => import('./components/estacionamiento/Editar.vue');

export const routes = [
    {
        name: 'estacionamiento',
        path: 'estacionamiento',
        component: Estacionamiento
    }
];