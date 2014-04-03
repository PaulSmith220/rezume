var rezumeServices = angular.module('rezumeServices', ['ngResource']);


rezumeServices.factory('Job', function($resource) {
	return $resource('jobs/:jobId.json', {}, {
		query: {
			method:'GET',
			params: { jobId:'jobs' },
			isArray: true
		}
	});
});
/*
rezumeServices.factory('Job', ['$http', function(async){
	return {
		getData: function(jobID){
			jobID = jobID || "jobs";
			var promise = async({method: 'GET', url: 'jobs/'+ jobID + '.json'})
			.success(function(data){
				return data;
			});
			return promise;
		}
	}
}]);
*/
rezumeServices.factory('Worker', ['$http', function(async){
		return {
			getData: function() {
				var promise = async({method: 'GET', url: 'worker/worker.json'})
				.success(function(data, status, headers, config){
					return data;
				})
				.error(function(data, status, headers, config){
					console.log(status);
				});
				return promise;
			}
		}

}]);