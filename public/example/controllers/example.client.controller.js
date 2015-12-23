angular.module('example').controller('ExampleController', ['$scope','Authentication', 
	function($scope, Authentication){
		$scope.name = Authentication.user ? "Name: "+Authentication.user.fullname : 'template Application';
	}
]);