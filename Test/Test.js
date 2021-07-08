const loginPage = require('../page_objects/LoginPage');
const page = require('../page_objects/Page');

beforeAll( function () {
    page.openUrl();
});

describe('Test', function () {
    it('login', function () {
        loginPage.loginflow();
    
    })
})