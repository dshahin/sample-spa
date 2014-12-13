$(document).ready(function(){

	//this is where your app page logic lives
	Visualforce.remoting.Manager.invokeAction (
		$config.jsr.myFunction,
		'now I am ready',
		function(result,event){
			//console.log('mock result:',result);
		 	if(event.status){
				$.myModule({backgroundColor:'lightgreen',selector: '#ready2', message: result.msg });
		 	}
		}
	);

	Visualforce.remoting.Manager.invokeAction (
		$config.jsr.myOtherFunction,
		'and I am ready now too',
		function(result,event){
			//console.log('mock result:',result);
		 	if(event.status){

				$.myModule({backgroundColor:'lightblue',selector: '#ready3', message: result.msg});

		 	}
		}
	);

	function doThatThing(msg){
		var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		Visualforce.remoting.Manager.invokeAction (
			$config.jsr.myOtherFunction,
			msg,
			function(result,event){
				console.log('mock result:',result);
			 	if(event.status){
					$.myModule({backgroundColor:randColor,selector: '#ready3', message: randColor + ' ' + result.msg});
			 	}
			}
		);
	}

	$('#do').click(function(){
		doThatThing(' dynamically! ');

	});

	$('#input').on('keyup', function(){
		var $input = $(this),
			val = $input.val();
		$('#ready4').text(val);

	});

});

/*! myModule - v1.0.0 - 2014-11-24
* https://github.com/dshahin/myModule
* Copyright (c) 2014 dan shahin; Licensed MIT */
(function ($) {


  // Static method.
  $.myModule = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.myModule.options, options);
    // Return the name of your plugin plus a punctuation character.
    return ready(options); ;
  };

  // Static method default options.
  $.myModule.options = {
    backgroundColor: 'red',
    selector : '#ready',
    message: 'ready!'
  };

  function ready(options){
  	$(options.selector).html(options.message).css({'background-color' : options.backgroundColor});
  }


}(jQuery));
