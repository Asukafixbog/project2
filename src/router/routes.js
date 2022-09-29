// 引入路由组件
import Home from '@/pages/Home' //此处的@指的就是src文件夹
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
// 路由配置信息
export default [
    {
        path: '/home',
        component:Home,
        // 是否显示footer
        meta:{show:true}
    },
    {
        path: '/search/:keyword?',
        name:'search',
        component:Search,
        meta:{show:true}
    },
    {
        path: '/login',
        component:Login,
        meta:{show:false}
    },
    {
        path: '/register',
        component:Register,
        meta:{show:false}
    },
    {
        path: '/detail/:skuid',
        name:'detail',
        component:Detail,
        meta:{show:true}
    },
    {
        path: '/addcartsuccess',
        name:'AddCartSuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path: '/shopcart',
        component:ShopCart,
        meta:{show:true}
    },
    // 重定向，在项目跑起来的时候，访问/，让它直接定向首页
    {
        path:'*',
        redirect:'/home'
    }
]