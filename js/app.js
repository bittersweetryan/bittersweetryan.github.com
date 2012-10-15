window.app = (  function( window, s, snack ){

	return { 
		loadData : function( ) {
			var opts = {
				method : 'post',
				url : 'resume.json'
			};

			var data = snack.request( opts, function( err, response ) {
				if( err ){
					return;
				}
				else{
					console.log( response );
				}
			} );
		}
	};

}( window, window.Sizzle, window.snack ) );