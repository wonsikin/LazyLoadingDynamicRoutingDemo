/**
 * Created by Arthur WANG on 14/10/27.
 */
require.config({
    baseUrl: '/demo',
    paths: {
        'routeConfig': 'routeConfig',
        'jquery': 'vendor/jquery/dist/jquery',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'angular': 'vendor/angular/angular',
        'angular-route': 'vendor/angular-route/angular-route',
        'echarts': 'vendor/echarts/build/echarts',
        'echarts/chart/bar': 'vendor/echarts/build/echarts',
        'echarts/chart/line': 'vendor/echarts/build/echarts'
    },
    shim: {
        'app': {
            deps: ['angular','angular-route']
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    },

    deps: ['app']
});