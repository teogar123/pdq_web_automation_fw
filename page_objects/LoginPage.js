const page = require('./Page.js');
const actions = require('../base/Actions.js');

beforeAll( function () {
    page.openUrl();
});


function LoginPage () {
    this.loginButton = element(by.xpath('//*[@id="topNav"]/li[4]/a'));



/**
 * 
 * 
 * @description
 * 
 *  */    

    this.loginflow = () => {
        actions.clickToElement(this.loginButton);

        browser.sleep(5000);
        console.log("Login button clicket");
    }

}

module.exports = new LoginPage();