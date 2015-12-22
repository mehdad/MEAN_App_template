var mainApplicationModuleName = 'tempate_app';
var mainApplicationModue = angular.module(mainApplicationModuleName , []);

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainApplicationModuleName]);
});