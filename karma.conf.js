module.exports = function(config){
  config.set({

    basePath : '',

    files : [
      'bower_components/farmbuild-core/dist/farmbuild-core.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/farmbuild-farmdata/dist/farmbuild-farmdata.js',
      'src/nutrient-calculator.js',
      'src/references.conf.src.js',
      'src/cows-purchased/index.src.js',
      'src/cows-culled/index.src.js',
      'src/validations/index.src.js',
      'src/milk-sold/index.src.js',
      'src/forage-purchased/index.src.js',
      'src/index.js',
      //'src/forage-purchased/index.spec.js',
      'src/*.js',
      'src/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
