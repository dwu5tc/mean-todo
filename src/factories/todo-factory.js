import angular from 'angular';

const todoFactory = angular.module('app.todoFactory', [])

// ???
.factory('todoFactory', () => {
	function createTask($scope, params) {
		return true;
	}

	return {
		createTask
	}
});

export default todoFactory;