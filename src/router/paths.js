
const paths = [
    {
        path: '*',
        redirect: '/404',
    },
    {
        path: '/404',
        component: () => import('@/views/error/404'),
    }
];

export default paths;