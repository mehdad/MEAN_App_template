var mainApplicationModuleName = 'tempate_app';
var mainApplicationModue = angular.module(mainApplicationModuleName , ['example']);

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainApplicationModuleName]);
});