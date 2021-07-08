//const { connect } = require('http2');
const env = require('node-env-file');
env('.env');
exports.config = {
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        chromeOptions: {
             
            prefs: {
                'profile.managed_default_content_settings.notifications': 1,
            }
        }
    },
    specs: [
       
        '../Test/Test.js'
               
],

    // Set the Url where browser will start.
    baseUrl: process.env.URL,

    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        realtimeFailure: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 1200000
    },

    onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    
        browser.ignoreSynchronization = true
        setTimeout(function() {
            browser.driver.executeScript(function() {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                }
            }).then(function(result) {
                browser.driver.manage().window().setSize(result.width, result.height)
            })
        })
    }
};





var winHandles=browser.getAllWindowHandles();
      winHandles.then(function(handles) 
      {
        
          var parentWindow=handles[0];
          var popUpWindow=handles[1];
          browser.switchTo().window(popUpWindow);
          actions.enterText(this.userNameField, "tgarcia@itexico.com");
          actions.clickToElement(this.nextButton);
          actions.enterText(this.passwordField, "teogar810316");
          actions.clickToElement(this.nextButton);
          browser.sleep(10000);
          browser.switchTo().window(parentWindow);
          console.log("Going back to the parent window " + "Logged to Real Synch");
      })