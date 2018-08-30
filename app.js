const app = angular.module('app', [])
app.directive('hello', function () {
    return {
        restrict: 'E',
        transclude: {
            'name1': 'name1',
            'name2': 'name2'
        },
        template: '<div>Hello, ' +
            '<span ng-transclude="name1" class="bg-yellow"></span>' +
            ' and ' +
            '<span ng-transclude="name2" class="bg-green"></span>' +
            '!</div>'
    }
})