'use strict';

/**
 * nutrientCalculator/legumeCalculator singleton
 * @module nutrientCalculator/legumeCalculator
 */
angular.module('farmbuild.nutrientCalculator')

	.factory('legumeCalculator', function (utilisationFactors, $log) {
		var legumeCalculator;

		function _milkEnergyInMJ(milkSoldPerYearInLitre, fatPercentage, proteinPercentage) {
			var milkEnergyPerLitreInMJ = 1.694 * (0.386 * fatPercentage * 100 + 0.205 * (5.8 + proteinPercentage * 100) - 0.236),
				totalMilkEnergyInMJ = milkEnergyPerLitreInMJ * milkSoldPerYearInLitre,
				milkEnergyNotSoldInMJ = totalMilkEnergyInMJ * 0.04;
			return {
				perLitre: milkEnergyPerLitreInMJ,
				total: totalMilkEnergyInMJ,
				notSold: milkEnergyNotSoldInMJ
			}
		}

		function _importedEnergyConsumedInMJ(totalForageMetabolisableEnergyInMJ, totalConcentrateMetabolisableEnergyInMJ) {
			return (totalForageMetabolisableEnergyInMJ * (100 - 12.7)) / 100 + (totalConcentrateMetabolisableEnergyInMJ * (100 - 5)) / 100;
		}

		function _cattleEnergyUsedInMJ(totalMilkEnergyInMJ, milkEnergyNotSoldInMJ, numberOfMilkingCows, numberOfMilkingDays, liveWeightInKg) {
			return totalMilkEnergyInMJ + milkEnergyNotSoldInMJ + (numberOfMilkingCows * numberOfMilkingDays * liveWeightInKg);
		}

		function _dryMatterConsumedInKg(cattleEnergyUsedInMJ, importedEnergyConsumedInMJ, milkingAreaInHa) {
			return (cattleEnergyUsedInMJ - importedEnergyConsumedInMJ) / (milkingAreaInHa * 10.5);

		}

		function _dryMatterGrownInKg(dryMatterConsumedInKg, utilisationFactor) {
			return (dryMatterConsumedInKg * 100) / utilisationFactor;

		}

		function _averageNitrogenAppliedInKg(totalNitrogenFromFertiliserInKg, milkingAreaInHa) {
			return totalNitrogenFromFertiliserInKg / milkingAreaInHa;

		}

		function _totalLegumeInKg(dryMatterConsumedInKg, legumePercentage, utilisationFactor) {
			return (dryMatterConsumedInKg / legumePercentage) / utilisationFactor;

		}

		function _availableNitrogenFromLegumesInKg(totalLegumeInKg, averageNitrogenAppliedInKg) {
			return totalLegumeInKg * (0.0358 - 3.59e-5 * averageNitrogenAppliedInKg);

		}

		function _availableNitrogenToPastureInKg(totalLegumeInKg, averageNitrogenAppliedInKg) {
			return averageNitrogenAppliedInKg + totalLegumeInKg * (0.0358 - 3.59e-5 * averageNitrogenAppliedInKg);

		}

		legumeCalculator = {
			milkEnergy: _milkEnergyInMJ,
			importedEnergyConsumed: _importedEnergyConsumedInMJ,
			cattleEnergyUsed: _cattleEnergyUsedInMJ,
			dryMatterConsumed: _dryMatterConsumedInKg,
			dryMatterGrown: _dryMatterGrownInKg,
			averageNitrogenApplied: _averageNitrogenAppliedInKg,
			totalLegume: _totalLegumeInKg,
			availableNitrogenFromLegumes: _availableNitrogenFromLegumesInKg,
			availableNitrogenToPasture: _availableNitrogenToPastureInKg
		}

		return legumeCalculator;
	});