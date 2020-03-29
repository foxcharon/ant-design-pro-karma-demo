module.exports = [
    {path: '/', redirect: '/login'},
    {
        path: '/',
        component: '../layouts/BlankLayout',
        routes: [
            { path: '/login', component: './User/Login' },
            { path: '/register', component: './User/Login'}
        ],
    },
    {
      component: './404',
    },
  ];