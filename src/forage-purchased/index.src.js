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

	.factory('foragesPurchased', function (validations, references, $log) {

		var forages = {},
			_isPositiveNumber = validations.isPositiveNumber,
			_isAlphanumeric = validations.isAlphanumeric,
			_isDefined = validations.isDefined,
			_types = angular.copy(references.forageTypes),
			_forages = [];

		function _validate(forage) {
			$log.info('validating forage ...', forage);

			if (!_isDefined(forage.type) || !_isDefined(forage.weight) || !_isDefined(forage.isDry)) {
				return false;
			}
			return _validateType(forage.type);
		};

		function _create(type, weight, isDry) {
			return {type: type, weight:weight, isDry:isDry};
		};

		function _add(type, weight, isDry) {
			var forage = _create(type, weight, isDry);
			_forages.push(forage);
			return forages;
		};


		/**
		 * Calculates total nutrient imported on to the farm in forages
		 * @method calculate
		 * @param {!array} forages - Array of purchased forages, each item contains details of the forage {type, weight, isDry}
		 * @returns {object} nutrient data of forages purchased
		 * @public
		 * @static
		 */
		 function _calculate(forages) {
			$log.info('calculating forages nutrient ...', forages);

			var totalWeight = 0,
				totalDMWeight = 0,
				nitrogenInKg = 0,
				phosphorusInKg = 0,
				potassiumInKg = 0,
				sulphurInKg = 0,
				meInKg = 0,
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

				if (!_validate(forage)) {
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
				meInKg += (type.metabolisableEnergyPercentage * dmWeight) / 100;
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
				metabolisableEnergyInKg: meInKg,
				metabolisableEnergyPercentage: (meInKg / totalDMWeight) * 100
			};

		};

		function _isEmpty(){
			return _forages.length === 0;
		};

		function _count(){
			return _forages.length;
		};

		function _toArray(){
			return _forages;
		};

		function _at(index){
			return _forages[index];
		};

		function _removeIndex(index) {
			$log.info('removing forage type at index ' + index);
			if (!index || index < 0 || index > _forages.length - 1) {
				return undefined;
			}

			_forages.splice(index, 1);

			return _forages;
		};


		function _remove(forage) {
			$log.info('removing forage type ', forage);

			if (!_isDefined(forage)) {
				return undefined;
			}

			angular.forEach(_forages, function (item, index) {
				if (angular.equals(item, forage)) {
					_removeTypeByIndex(index);
				}
			});

			return _forages;
		};

		function _first() {
			return _forages[0];
		};

		function _last() {
			$log.info('getting last forage ...');
			var length = _count();
			return _forages[length - 1];
		};

		forages = {
			add: _add,
			at: _at,
			size: _count,
			toArray: _toArray,
			removeIndex: _removeIndex,
			remove: _remove,
			first: _first,
			last: _last,
			isEmpty: _isEmpty,
			calculate: _calculate
		};



		/*---Forage Types---*/

		function _validateType(forageType) {
			$log.info('validating forageType  ...', forageType);

			return !(!_isAlphanumeric(forageType.name) || !_isPositiveNumber(forageType.metabolisableEnergyPercentage) || !_isPositiveNumber(forageType.dryMatterPercentage) || !_isPositiveNumber(forageType.potassiumPercentage) || !_isPositiveNumber(forageType.phosphorusPercentage) || !_isPositiveNumber(forageType.nitrogenPercentage) || !_isPositiveNumber(forageType.sulphurPercentage));

		}

		function _createType(name, metabolisableEnergyPercentage, dryMatterPercentage, sulphurPercentage, potassiumPercentage, phosphorusPercentage, nitrogenPercentage) {
			return {
				name: name,
				metabolisableEnergyPercentage: metabolisableEnergyPercentage,
				dryMatterPercentage: dryMatterPercentage,
				sulphurPercentage: sulphurPercentage,
				potassiumPercentage: potassiumPercentage,
				phosphorusPercentage: phosphorusPercentage,
				nitrogenPercentage: nitrogenPercentage
			};
		}

		/**
		 * Adds a new forage type for nutrient calculation
		 * @method types.add
		 * @param {!string} name - name of new type, can only contain alphanumeric values with space or underscore but no other special characters
		 * @param {!number} mePercentage - value must be > 0
		 * @param {!number} dryMatterPercentage - value must be > 0
		 * @param {!number} sulphurPercentage - value must be > 0
		 * @param {!number} potassiumPercentage - value must be > 0
		 * @param {!number} phosphorusPercentage - value must be > 0
		 * @param {!number} nitrogenPercentage - value must be > 0
		 * @returns {object} forages - useful for chaining multiple add()
		 * @private
		 * @static
		 */
		function _addType(name, mePercentage, dryMatterPercentage, sulphurPercentage, potassiumPercentage, phosphorusPercentage, nitrogenPercentage, index) {

			var forageType = _createType(name, mePercentage, dryMatterPercentage, sulphurPercentage, potassiumPercentage, phosphorusPercentage, nitrogenPercentage);
			$log.info('adding forage type ...', forageType);

			if (!_validateType(forageType)) {
				return undefined;
			}

			//return xxx.add()

			if (_isDefined(index)) {
				_types.splice(index, 0, forageType)
			} else {
				_types.push(forageType);
			}
			
			return forages.types;
		};

		
		function _getTypeByIndex(index) {
			var forageType;
			$log.info('getting forage type at index: ', index);
			if (!_isDefined(index) || index < 0) {
				return undefined;
			}

			forageType = _types[index];

			return forageType;
		};


		function _getLastType() {
			$log.info('getting last forage type ...');
			var length = _countTypes();
			return _types[length - 1];
		};


		function _getFirstType() {
			$log.info('getting first forage type ...');
			return _types[0];
		};
		
		
		function _countTypes() {
			$log.info('counting forage types ...', _types);
			return _types.length;
		};


		function _typesToArray() {
			$log.info('toArray types ...', _types);
			return _types;
		};


		function _removeTypeByIndex(index) {
			$log.info('removing forage type at index ' + index);
			if (!index || index < 0 || index > _types.length - 1) {
				return undefined;
			}

			_types.splice(index, 1);

			return _types;
		};


		function _removeType(forageType) {
			$log.info('removing forage type ', forageType);

			if (!_isDefined(forageType)) {
				return undefined;
			}

			angular.forEach(_types, function (item, index) {
				if (angular.equals(item, forageType)) {
					_removeTypeByIndex(index);
				}
			});

			return _types;
		};


		function _isTypesEmpty() {
			$log.info('Is forage types empty?', forages.types.size() === 0);
			return forages.types.size() === 0;
		};


		/**
		 * Returns current cow types
		 * @method types
		 * @returns {object} Types - cow types array
		 * @public
		 * @static
		 */
		forages.types = {
			add: _addType,
			at: _getTypeByIndex,
			size: _countTypes,
			toArray: _typesToArray,
			removeIndex: _removeTypeByIndex,
			remove: _removeType,
			first: _getFirstType,
			last: _getLastType,
			isEmpty: _isTypesEmpty
		};

		return forages;
	});