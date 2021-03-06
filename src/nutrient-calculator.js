/**
 * @since 0.0.1
 * @copyright 2015 State of Victoria.

 * @author State of Victoria
 * @version 1.0.0
 */

'use strict';

/**
 * nutrientCalculator
 * @module nutrientCalculator
 */
angular.module('farmbuild.nutrientCalculator', ['farmbuild.core','farmbuild.farmdata'])
	.factory('nutrientCalculator',
  function (milkSold,
            cowsPurchased, cowsCulled, cows,
            foragesPurchased, fertilizersPurchased, concentratesPurchased,
            legumes,
            nutrientCalculatorSession,
            farmdata,
            validations,
            nutrientAggregator,nutrientBalance,nutrientEfficiency,
            feedBalance, milkProduction, stockingRate,
            googleAnalyticsCalculator,
            $log) {
		var nutrientCalculator = {farmdata:farmdata},
			_isPositiveNumber = validations.isPositiveNumber,
			_isDefined = validations.isDefined;

    // Provide a shortcut for modules
    nutrientCalculator.milkSold = milkSold;
    nutrientCalculator.cowsPurchased = cowsPurchased;
    nutrientCalculator.cowsCulled = cowsCulled;
    nutrientCalculator.foragesPurchased = foragesPurchased;
    nutrientCalculator.fertilizersPurchased = fertilizersPurchased;
    nutrientCalculator.concentratesPurchased = concentratesPurchased;
    nutrientCalculator.legumes = legumes;
    nutrientCalculator.aggregator = nutrientAggregator;
    nutrientCalculator.balance = nutrientBalance;
    nutrientCalculator.efficiency = nutrientEfficiency;
    nutrientCalculator.version = '0.1.0';
    nutrientCalculator.ga = googleAnalyticsCalculator;
    nutrientCalculator.session = nutrientCalculatorSession;

		$log.info('Welcome to Farm Dairy Nutrient Calculator... ' +
      'this should only be initialised once! why we see twice in the example?');
    function createDefault() {
      return {
        summary: {
          milkingAreaInHa: 0,
          averageCowWeightInKg: 0,
          numberOfMilkingCows: 0,
          numberOfMilkingDays: 365
        },
        milkSold: milkSold.createDefault(),
        cowsCulled: cows.createDefault(),
        cowsPurchased: cows.createDefault(),
        fertilizersPurchased: fertilizersPurchased.createDefault(),
        foragesPurchased: foragesPurchased.createDefault(),
        legumes: {
          dryMatterConsumedPerHaInKg: 0
        },
        concentratesPurchased: concentratesPurchased.createDefault(),
        balance:{},
        efficiency:{},
        stockingRate:{},
        milkProduction:{},
        feedBalance:{}
      };
    }

    /**
     * Finds the farmData from the session.
     * @method find
     * @returns {object} the farmData stored in session, undefined if the farmData is found in session
     * @public
     * @static
     */
    nutrientCalculator.find = function () {
      return nutrientCalculatorSession.find();
    }

		/**
		 * Loads the farmData into the session.
     * If the farmData has no nutrientCalculator section, then append one
		 * @method load
		 * @param {!object} farmData -
		 * @returns {object} the farmData stored in session, undefined if the farmData is invalid
		 * @public
		 * @static
		 */
		nutrientCalculator.load = function (farmData) {
      var loaded = farmdata.load(farmData);

			if (!_isDefined(loaded)) {
				return undefined;
			}

			if (!loaded.hasOwnProperty('nutrientCalculator')) {
        loaded.nutrientCalculator = createDefault();
        loaded = farmdata.update(loaded);
			}

			return loaded;
		};

    /**
     * Calculates balance and updates the farmData
     * @method calculate
     * @param {!Object} farmData
     * @returns {Object} the farmData calculated
     * @public
     * @static
     */
    nutrientCalculator.calculate = function (farmData) {
      var nutrientValues = nutrientAggregator.calculate(farmData),
        milkingArea = farmData.nutrientCalculator.summary.milkingAreaInHa;

      farmData.nutrientCalculator.balance = nutrientBalance.calculate(nutrientValues, milkingArea);
      farmData.nutrientCalculator.efficiency = nutrientEfficiency.calculate(nutrientValues);
      farmData.nutrientCalculator.feedBalance = feedBalance.calculate(farmData.nutrientCalculator);
      farmData.nutrientCalculator.milkProduction = milkProduction.calculate(farmData.nutrientCalculator);

      farmData.nutrientCalculator.stockingRate = stockingRate.calculate(farmData.nutrientCalculator, farmData.area);

      return farmdata.update(farmData);
    };

    /**
     * Saves and exports the farmData.json with a file name: farmdata-NAME_OF_FILE-yyyyMMddHHmmss.json
     * It creates <a> element with 'download' attribute, the data is attached to href
     * and invoke click() function so the user gets the file save dialogue or something equivalent.
     * @method export
     * @param {object} document
     * @param {object} farmData
     */
    nutrientCalculator.export = nutrientCalculatorSession.export;

		if (typeof window.farmbuild === 'undefined') {
			window.farmbuild = {
				nutrientcalculator: nutrientCalculator
			};
		} else {
			window.farmbuild.nutrientcalculator = nutrientCalculator;
		}

		return nutrientCalculator;
	});