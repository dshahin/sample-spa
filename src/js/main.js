$(document).ready(function(){
	//test comment
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
		Visualforce.remoting.Manager.invokeAction (
			$config.jsr.myOtherFunction,
			msg,
			function(result,event){
				console.log('mock result:',result);
			 	if(event.status){

					$.myModule({backgroundColor:'lightblue',selector: '#ready3', message: result.msg});

			 	}
			}
		);
	}

	$('#do').click(function(){
		doThatThing('foo');
	});

});
