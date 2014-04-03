var rezumeApp = angular.module('rezumeApp', [
	'ngRoute', 
	'rezumeControllers',
	'rezumeFilters',
	'rezumeServices'
	]);
	
rezumeApp.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/jobs', {
					templateUrl: 'partials/job-list.html',
					controller: JobListCtrl }).
				when('/jobs/:jobId', {
					templateUrl: 'partials/job-detail.html',
					controller: JobDetailCtrl}).
				otherwise({
					redirectTo: '/jobs'
				});
		}]);


