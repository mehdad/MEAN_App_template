var mainApplicationModuleName = 'tempate_app';
var mainApplicationModue = angular.module(mainApplicationModuleName , ['ngRoute','users','example']);

mainApplicationModue.config(['$locationProvider',
	function($locationProvider){
		$locationProvider.hashPrefix('!');
	}
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function(){
	angular.bootstrap(document, [mainApplicationModuleName]);
});