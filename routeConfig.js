/**
 * Created by Arthur WANG on 14/10/27.
 * @desc 该文件用来配置网页应用的路由映射
 */
define([], function () {
    return {
        defaultRoutePath: '/',
        routes: {
            '/about': {
                templateUrl: 'views/about.html',
                dependencies: ['views/about'],
                controller: 'aboutCtrl'
            },
            '/contact': {
                templateUrl: 'views/contact.html',
                dependencies: ['views/contact'],
                controller: 'contactCtrl'
            }
        }
    };
});