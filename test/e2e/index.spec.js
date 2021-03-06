browser.ignoreSynchronization = true;
describe("health", function(){
	//var ptor = protractor.getInstance();
	var r3text;
	describe("index", function(){
		it("should display the correct title", function(){
			browser.get('/');
			expect( browser.getTitle() ).toBe('Hey Now!');
		});

		it("it should be ready", function(){
			var ready = element(by.id('ready')),
				ready2 = element(by.id('ready2')),
				ready3 = element(by.id('ready3')),
				ready4 = element(by.id('ready4')),
				input = element(by.id('input')),
				doButton = element(by.id('do')),
				currentUrl;

			expect(ready.getText()).toBe('I am ready already');
			expect(ready2.getText()).toBe('');
			expect(ready3.getText()).toBe('');

			browser.getCurrentUrl().then(function(url){
				currentUrl = url;
			}).then(function(){

				browser.wait(function() {
		            return ready3.getText().then(function (ready3text) {
		                return ready3text !== '';
		            });
		        },4000).then(function(){
					expect(ready2.getText()).toBe('now I am ready');
					expect(ready3.getText()).toBe('and I am ready now too');
				});

			}).then(function(){
				//make sure text in input is mirrored in #ready4
				var inputText = 'Howdy!'
				input.sendKeys(inputText);
				expect(ready4.getText()).toBe(inputText);

			}).then(function(){
				doButton.click().then(function(){
					browser.wait(function() {
			            return ready3.getText().then(function (ready3text) {
			                return ready3text !== 'and I am ready now too';
			            });
			        },4000).then(function(){

			        	expect(ready3.getText()).toContain('Howdy!');

			        });
				});
			});
		});
	});
});
