'use strict';

angular.module('farmbuild.nutrientCalculator.examples.milkSold', ['farmbuild.nutrientCalculator'])

	.run(function($rootScope){
		$rootScope.appVersion = farmbuild.examples.nutrientcalculator.version;
		$rootScope.decimalPrecision = farmbuild.examples.nutrientcalculator.decimalPrecision;
	})

	.controller('MilkSoldCtrl', function ($scope, MilkSold, NutrientCalculator) {

		NutrientCalculator.googleAnalytic.username = 'SpatialVision';

		$scope.calculateByPercent = function (milkSoldPerYearInLitre, milkProteinPercentage, milkFatPercentage) {
			$scope.result = MilkSold.calculateByPercent(milkSoldPerYearInLitre, milkProteinPercentage, milkFatPercentage);
			if ($scope.result) {
				$scope.fatInKg = $scope.result.fatInKg;
				$scope.proteinInKg = $scope.result.proteinInKg;
				$scope.noResult = false;
			} else {
				$scope.noResult = true;
			}
		};

		$scope.calculateByKg = function (milkSoldPerYearInLitre, milkProteinInKg, milkFatInKg) {
			$scope.result = MilkSold.calculateByKg(milkSoldPerYearInLitre, milkProteinInKg, milkFatInKg);
			if ($scope.result) {
				$scope.fatPercentage = $scope.result.fatPercentage;
				$scope.proteinPercentage = $scope.result.proteinPercentage;
				$scope.noResult = false;
			} else {
				$scope.noResult = true;
			}
		};

	});
