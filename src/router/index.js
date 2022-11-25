import { createRouter, createWebHistory } from 'vue-router';

//Importamos los componentes para crear las rutas
import ForoList from '../components/pages/ForoList';
import ForoItem from '../components/pages/ForoItem';
import NotFound from '../components/pages/NotFound';
import AddForo from '../components/pages/AddForo';

const routes = [
    {
        path: '/',
        component: ForoList
    },
    {
        path: '/add-forum',
        component: AddForo
    },
    {
        path: '/foro/:id',
        component: ForoItem
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;