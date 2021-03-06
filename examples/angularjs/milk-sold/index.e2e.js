'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Farm web nutrient calculator', function() {

  describe('milk-sold', function() {

    beforeEach(function() {
      browser.get('angularjs/milk-sold/index.html');
    });

    it('should render sample when user navigates to angularjs/milk-sold/index.html', function() {
      expect(element.all(by.css('body h3')).first().getText()).
        toContain('Milk Sold');
    });

    it('should render sample when user navigates to angularjs/milk-sold/index.html', function() {
      expect(element(by.model('totalPerYearInLitre')).sendKeys('10000').getAttribute('value')).
        toBe('10000');
      expect(element(by.model('proteinPercentage')).sendKeys('10').getAttribute('value')).
        toBe('10');
      expect(element(by.model('fatPercentage')).sendKeys('90').getAttribute('value')).
        toBe('90');
      element(by.buttonText('Calculate by percentage')).click().then(function(){
        expect(element.all(by.css('summary .form-group')).first().getText()).
          toMatch('10,000.00');
      });
    });

  });

});
