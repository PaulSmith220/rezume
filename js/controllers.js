var rezumeControllers = angular.module('rezumeControllers', []);

// Контроллеры
function WorkerCtrl($scope, Worker, Job){
	Worker.getData().then(function(promise){
		$scope.worker = promise.data;
		$scope.worker.cost = String($scope.worker.cost).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' руб.';
		$scope.worker.age = new Date().getFullYear() - new Date($scope.worker.bDate*1000).getFullYear();
	});
	$scope.jobs = Job.query();

	$scope.showInfo = function(id) {
		location.hash = "#/jobs/" + id;
	}

	$scope.orderProp = '-lifetime.start';
	
}

function JobListCtrl($scope, Job) {

}

function JobDetailCtrl($scope, $routeParams, Job) {
	$scope.work_start = 0;
	$scope.work_end = 0;
	$scope.job = Job.get({
							jobId: $routeParams.jobId},
							function(job) {
								$scope.work_start = job.lifetime.start*1000;
								$scope.work_end = job.lifetime.stop == 0 ? new Date() : job.lifetime.stop*1000;

							}
	);


	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;
	}
}



// Список инъекций для минификации
WorkerCtrl.$inject = ["$scope", "Worker", "Job"];
JobListCtrl.$inject = ['$scope', 'Job'];
JobDetailCtrl.$inject = ['$scope', '$routeParams', 'Job'];

rezumeControllers.controller('JobListCtrl', JobListCtrl);
rezumeControllers.controller('JobDetailCtrl', JobDetailCtrl);