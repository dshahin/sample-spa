$(document).ready(function(){

	//this is where your app page logic lives
	Visualforce.remoting.Manager.invokeAction (
		$config.jsr.myFunction,
		'now I am ready',
		function(result,event){
			console.log('mock result:',result);
		 	if(event.status){

				$.myModule({backgroundColor:'lightgreen',selector: '#ready2', message: result.msg });
		 	}
		}
	);

	Visualforce.remoting.Manager.invokeAction (
		$config.jsr.myOtherFunction,
		'and I am ready now too',
		function(result,event){
			console.log('mock result:',result);
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
		doThatThing('foo');
	});

});
