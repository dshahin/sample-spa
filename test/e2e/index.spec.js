browser.ignoreSynchronization = true;
describe("health", function(){
	//var ptor = protractor.getInstance();

	describe("index", function(){
		it("should display the correct title", function(){
			browser.get('/');
			expect( browser.getTitle() ).toBe('Hey Now!');
		});

		// it("it should login", function(){
		// 	var username = element(by.id('username')),
		// 		password = element(by.id('password')),
		// 		loginButton = element(by.id('Login')),
		// 		currentUrl;

		// 	browser.getCurrentUrl().then(function(url){
		// 		currentUrl = url;
		// 	}).then(function(){
		// 		username.sendKeys(process.env.SFDC_USERNAME);
		// 		password.sendKeys(process.env.SFDC_PASSWORD);
		// 		loginButton.click().then(function(){
		// 			browser.wait(function() {
		// 	            return browser.getCurrentUrl().then(function (url) {
		// 	                return url !== currentUrl;
		// 	            });
		// 	        },10000);
		// 		});
		// 	});
		// });
	});
});
