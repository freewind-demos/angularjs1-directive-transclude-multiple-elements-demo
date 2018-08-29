const app = angular.module('app', [])
app.directive('hello', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div>Hello, <span ng-transclude class="transclude"></span>!</div>'
    }
})