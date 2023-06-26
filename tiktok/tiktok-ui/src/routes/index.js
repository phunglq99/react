import { lazy } from "react";
import { HeaderOnly } from "~/components/Layout";

const Home = lazy(() => import('~/pages/Home'));
const Following = lazy(() => import('~/pages/Following'));
const Profile = lazy(() => import('~/pages/Profile'));
const Upload = lazy(() => import('~/pages/Upload'));
const Search = lazy(() => import('~/pages/Search'));

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]

const pricateRoutes = [

]

export { publicRoutes, pricateRoutes }