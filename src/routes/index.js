//Layout
import {DefaultLayout} from "../componnents/Layout";
import { HeaderOnly } from "../componnents/Layout";

import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from '../pages/Upload'
import Profile from "../pages/Profile"
import Search from "../pages/Search";
const publicRoutes = [
    {path: '/', component:Home},
    {path: '/following', component:Following},
    {path: '/profile', component:Profile},
    {path: '/upload', component:Upload, layout:HeaderOnly},
    {path: '/search', component:Search, layout:null}
];

const privateRoutes = [];

export {publicRoutes, privateRoutes}
