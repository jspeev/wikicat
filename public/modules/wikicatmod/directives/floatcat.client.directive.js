'use strict';

angular.module('wikicatmod').directive('floatcat', [
	function() {
		return {
			
			scope:{id:'@id',name:'@name',imgURL:'@imgurl',articlesummary:'@summary'},
			templateUrl: 'modules/wikicatmod/views/floatcat.client.view.html',
			restrict: 'E',
			controller: function ($scope,Summary) {
				
				$scope.Summary = Summary;
				
				$scope.catClick = function(){
					//UPDATE SUMMARY TEXT
					$scope.Summary.stMainText = $scope.articlesummary;
				}
			}
		};
	}
]);