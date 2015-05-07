/**
 * @since 0.0.1
 * @copyright 2015 Spatial Vision, Inc. http://spatialvision.com.au
 * @license The MIT License
 * @author Spatial Vision
 * @version 0.1.0
 */

'use strict';

/**
 * nutrientCalculator/foragesPurchased singleton
 * @module nutrientCalculator/foragesPurchased
 */
angular.module('farmbuild.nutrientCalculator')

	.factory('foragesPurchased', function (validations, forageTypes, forageValidator, $log) {

		var foragesPurchased = {},
			_isDefined = validations.isDefined,
			_forages = [],
      validator = forageValidator;

		function _create(type, weight, isDry) {
			return {type: type, weight: weight, isDry: isDry};
		};


		/**
		 * Adds a forage to foragesPurchased collection
		 * @method add
		 * @param {!object} type - Type of this forage.
		 * @param {!number} weight
		 * @param {!boolean} isDry - Whether it is dry (true/false)
		 * @returns {object} nutrient data of foragesPurchased purchased
		 * @public
		 * @static
		 */
		function _add(type, weight, isDry) {
			var forage = _create(type, weight, isDry);
			_forages.push(forage);
			return foragesPurchased;
		};


    /**
     * Returns true if the arguments are valid, false otherwise
     * @method validate
     * @param {!type} type - name of new type, can only contain alphanumeric values with space or underscore but no other special characters
     * @param {!number} weight - value must be > 0
     * @param {!boolean} isDry -true if the fertilizer is dry, false if it's wet
     * @returns {!boolean}
     * @public
     * @static
     */
    function validate(type, weight, isDry) {
      var fertilizer = _create(type, weight, isDry);
      return validator.validate(fertilizer);
    };

		/**
		 * Calculates total nutrient imported on to the farm in foragesPurchased
		 * @method calculate
		 * @param {!array} foragesPurchased - Array of purchased foragesPurchased, each item contains details of the forage {type, weight, isDry}
		 * @returns {object} nutrient data of foragesPurchased purchased
		 * @public
		 * @static
		 */
		function _calculate(forages) {
			$log.info('calculating foragesPurchased nutrient ...', forages);

			var totalWeight = 0,
				totalDMWeight = 0,
				nitrogenInKg = 0,
				phosphorusInKg = 0,
				potassiumInKg = 0,
				sulphurInKg = 0,
				meInMJ = 0,
				incomings = [],
				i = 0;

			if (!forages || forages.length === 0) {
				return undefined;
			}

			for (i; i < forages.length; i++) {
				var weight = 0,
					dmWeight = 0,
					forage = forages[i],
					type = forage.type;

				if (!validator.validate(forage)) {
					return undefined;
				}

				weight = forage.weight;
				dmWeight = weight;
				if (!forage.isDry) {
					dmWeight = (weight * forage.type.dryMatterPercentage) / 100;
				}
				totalWeight += weight;
				totalDMWeight += dmWeight;
				nitrogenInKg += (type.nitrogenPercentage * dmWeight) / 100;
				phosphorusInKg += (type.phosphorusPercentage * dmWeight) / 100;
				potassiumInKg += (type.potassiumPercentage * dmWeight) / 100;
				sulphurInKg += (type.sulphurPercentage * dmWeight) / 100;
				meInMJ += (type.metabolisableEnergyInMJPerKg * dmWeight);
				incomings.push({
					type: forage.type,
					weight: forage.weight,
					isDry: forage.isDry
				});

			}

			return {
				forages: incomings,
				weight: totalWeight,
				dryMatterWeight: totalDMWeight,
				nitrogenInKg: nitrogenInKg,
				nitrogenPercentage: (nitrogenInKg / totalDMWeight) * 100,
				phosphorusInKg: phosphorusInKg,
				phosphorusPercentage: (phosphorusInKg / totalDMWeight) * 100,
				potassiumInKg: potassiumInKg,
				potassiumPercentage: (potassiumInKg / totalDMWeight) * 100,
				sulphurInKg: sulphurInKg,
				sulphurPercentage: (sulphurInKg / totalDMWeight) * 100,
				metabolisableEnergyInMJ: meInMJ,
				metabolisableEnergyInMJPerKg: parseFloat(type.metabolisableEnergyInMJPerKg)
			};

		};

		function _isEmpty() {
			return _forages.length === 0;
		};

		function _count() {
			return _forages.length;
		};

		/**
		 * Returns foragesPurchased collection as an array
		 * @method toArray
		 * @returns {Array} foragesPurchased
		 * @public
		 * @static
		 */
		function _toArray() {
			return _forages;
		};


		/**
		 * Returns the forage at specified index
		 * @method at
		 * @returns {object} forage
		 * @public
		 * @static
		 */
		function _at(index) {
			return _forages[index];
		};


		/**
		 * Removes the forage at specified index
		 * @method removeAt
		 * @returns {object} foragesPurchased collection
		 * @public
		 * @static
		 */
		function _removeIndex(index) {
			$log.info('removing forage at index ' + index);
			if (!_isDefined(index) || index < 0 || index > _forages.length - 1) {
				return foragesPurchased;
			}
			_forages.splice(index, 1);

			return foragesPurchased;
		};


		function _remove(forage) {
			$log.info('removing forage ', forage);

			if (!_isDefined(forage)) {
				return foragesPurchased;
			}

			angular.forEach(_forages, function (item, index) {
				if (angular.equals(item, forage)) {
					_removeIndex(index);
				}
			});

			return foragesPurchased;
		};

		function _first() {
			return _forages[0];
		};

		function _last() {
			$log.info('getting last forage ...');
			var length = _count();
			return _forages[length - 1];
		};

		foragesPurchased = {
			add: _add,
			at: _at,
			size: _count,
			toArray: _toArray,
			removeAt: _removeIndex,
			remove: _remove,
			first: _first,
			last: _last,
			isEmpty: _isEmpty,
			calculate: _calculate,

			load: function (forages) {
				_forages = forages;
			},

			/**
			 * types Forage types collection api
			 * @property {object} Types - forage types collection
			 * @public
			 * @static
			 */
			types: forageTypes,
      validate: validate,
      validateAll: validator.validateAll

		};

		return foragesPurchased;
	});