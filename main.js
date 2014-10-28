/**
 * Created by Arthur WANG on 14/10/27.
 */
require.config({
    baseUrl: '/demo',
    paths: {
        'routeConfig': 'routeConfig',
        'jquery': 'bower_components/jquery/dist/jquery',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap',
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'echarts': 'bower_components/echarts/build/echarts',
        'echarts/chart/bar': 'bower_components/echarts/build/echarts',
        'echarts/chart/line': 'bower_components/echarts/build/echarts'
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