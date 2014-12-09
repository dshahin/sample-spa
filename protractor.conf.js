exports.config = {
	specs: ['./test/e2e/**/*.spec.js'],
	baseUrl : 'http://localhost:8000',
	seleniumServerJar : '/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',
    chromedriver : '/usr/local/lib/node_modules/protractor/selenium/chromedriver'
};
