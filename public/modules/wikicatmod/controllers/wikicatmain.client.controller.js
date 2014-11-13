'use strict';

angular.module('wikicatmod').controller('WikicatmainController', ['$scope','$http', 'Summary',
	function($scope,$http,Summary) {
		 
		 $scope.Summary = Summary;
		 
	    $http.get('/cat/breeds')
	    	.success(function(data){
	    		
	    		$scope.aryCatBreed = data;
	    		$scope.floatingCats = [];
	    		
		    	var iCatNum = -1;
		    	var iCatBreedNum = -1;
		    	var timerNextCat = setInterval(function () {getNextCat();}, 1000);
		    	
				function getNextCat() {
				    
				    iCatNum ++;
				    iCatBreedNum ++;
				    
				    //START ALL OVER AGAIN IF END IS REACHED
				    if(iCatBreedNum === $scope.aryCatBreed.length-1)
				    	iCatBreedNum = 0;
				    ////////////////////////////////////////
				    
				    $http.get('/cat/search/'+$scope.aryCatBreed[iCatBreedNum])
				    	.success(function(data){
				    		data.num = iCatNum;
				    		$scope.floatingCats.push(data);
				    	})
				    	.error(function(data){
				    		console.log('Error : '+data);
				    		clearInterval(timerNextCat);
				    	});
				    	
				 }
	    		
	    	})
	    	.error(function(data){
	    		console.log('Error: ' + data);
	    		clearInterval(timerNextCat);
	    	});
	
			
	}
]);