/**
 * @since 0.0.1
 * @copyright 2015 State of Victoria.

 * @author State of Victoria
 * @version 1.0.0
 */

'use strict';

/**
 * nutrientCalculator/cowsCulled singleton
 * @module nutrientCalculator/cowsCulled
 */
angular.module('farmbuild.nutrientCalculator')
	
	.factory('cowsCulled',
  function (validations,
            cowTypeDefaults,
            cowValidator,
            cowTypes,
            cows,
            nutrientCalculatorSession) {
		
		var cowsCulled = {},
			_isPositiveNumber = validations.isPositiveNumber,
			_isAlphanumeric = validations.isAlphanumeric,
			_types = angular.copy(cowTypeDefaults),
      _cows = [],
      validator = cowValidator;

    cowsCulled.validateNew = cows.validateNew;
		/**
		 * Calculates total nutrient exported from the farm in cows culled
		 * @method calculate
		 * @param {!array} cows - Array of culled cows, each item contains details of the cow {type{name, weight}, numberOfCows}
		 * @returns {object} nutrient data of cows culled
		 * @public
		 * @static
		 */
		cowsCulled.calculate = function (cows) {
			var numberOfCows = 0,
				weight = 0,
				nitrogenInKg = 0,
				phosphorusInKg = 0,
				potassiumInKg = 0,
				sulphurInKg = 0,
				nitrogenPercentage = 2.8,
				phosphorusPercentage = 0.72,
				potassiumPercentage = 0.2,
				sulphurPercentage = 0.8,
				incomings = [],
				i = 0;
			
			if (!cows || cows.length === 0) {
				return undefined;
			}
			
			for (i; i < cows.length; i++) {
				var cowWeight,
					cowCount,
					cow = cows[i];
				
				if (!cow.name || !cow.weight) {
					return undefined;
				}
				
				cowWeight = cow.weight;
				cowCount = cow.numberOfCows;
				
				if (!_isPositiveNumber(cowCount)) {
					return undefined;
				}
				
				weight += cowWeight * cowCount;
				numberOfCows += cowCount;
				nitrogenInKg += (nitrogenPercentage * cowWeight * cowCount) / 100;
				phosphorusInKg += (phosphorusPercentage * cowWeight * cowCount) / 100;
				potassiumInKg += (potassiumPercentage * cowWeight * cowCount) / 100;
				sulphurInKg += (sulphurPercentage * cowWeight * cowCount) / 100;
				incomings.push({
					name: cow.name,
					numberOfCows: cowCount,
					weight: cow.weight
				});
			}

      var result =  {
				cows: incomings,
				numberOfCows: numberOfCows,
				weight: weight,
				nitrogenInKg: nitrogenInKg,
				phosphorusInKg: phosphorusInKg,
				potassiumInKg: potassiumInKg,
				sulphurInKg: sulphurInKg
			};

      result.types = _types;

      nutrientCalculatorSession.saveSection('cowsCulled', result);

      return result;

		};
		
		/**
		 * Adds a new cow type for nutrient calculation
		 * @method addType
		 * @param {!string} name - name of new type, can only contain alphanumeric values with space or underscore but no other special characters
		 * @param {!number} weight - average weight of this type in Kg, value must be > 0
		 * @returns {object} cowsCulled - useful for chaining multiple add()
		 * @public
		 * @static
		 */
		cowsCulled.addType = function (name, weight) {
			if (!_isPositiveNumber(weight)) {
				return undefined;
			}
			
			if (!name || !_isAlphanumeric(name)) {
				return undefined;
			}
			
			weight = parseFloat(weight);
			
			_types.push({
				name: name,
				weight: weight
			});
			
			return cowsCulled;
		};
		
		/**
		 * Remove cow(s) with this name from cow types, if there is duplicate in naming all of them would be removed
		 * @method removeTypeByName
		 * @param {!String} name - name of the type you want to remove.
		 * @returns {Object} cowsCulled - useful for chaining functions
		 * @public
		 * @static
		 */
		cowsCulled.removeTypeByName = function (name) {
			
			if (!name) {
				return undefined;
			}
			
			angular.forEach(_types, function(type, i){
				if(type.name === name){
					_types.splice(i, 1);
				}
			});
			
			return _types;
		};
		
		/**
		 * Remove this cow from cow types
		 * @method removeTypeByIndex
		 * @param {!Number} index - index (starts from 0) of the type you want to remove in types Array
		 * @returns {Object} cowsCulled - useful for chaining functions
		 * @public
		 * @static
		 */
		cowsCulled.removeTypeByIndex = function (index) {
			
			if (!index || index < 0 || index > _types.length-1) {
				return undefined;
			}
			
			_types.splice(index, 1);
			
			return _types;
		};
		
		
		/**
		 * Returns current cow types
		 * @method types
		 * @returns {object} Types - cow types array
		 * @public
		 * @static
		 */
		cowsCulled.types = function () {
			return _types;
		};

    cowsCulled.validateType = function (type) {
      return cowTypes.validate(type);
    };


    /**
     * Returns current cows
     * @method cows
     * @returns {object} Cows - cows array
     * @public
     * @static
     */
    cowsCulled.cows = function () {
      return _cows;
    };

    /**
     * Loads the fertilizers in cowsCulledSection.fertilizers
     * @method load
     * @param cowsCulledSection
     * @returns {object} cowsPurchased
     * @public
     * @static
     */
    cowsCulled.load = function(cowsCulledSection) {
      if(!validator.validateAll(cowsCulledSection.cows)) {
        return undefined
      }
      _cows = cowsCulledSection.cows;
      _types = cowsCulledSection.types;

      return cowsCulled;
    }
		return cowsCulled;
		
	});
