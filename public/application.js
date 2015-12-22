var mainApplicationModuleName = 'tempate_app';
var mainApplicationModue = angular.module(mainApplicationModuleName , ['ngRoute','example']);

mainApplicationModue.config(['$locationProvider',
	function($locationProvider){
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainApplicationModuleName]);
});