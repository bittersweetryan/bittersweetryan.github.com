window.app = (  function( window, $, snack ){
	"use strict";

	var parseData = function( data ) {

		var json     = snack.parseJSON( data ),
			key      = null,
			ele      = null,
			val      = null;

		for( key in json ){

			val = json[ key ];
			ele = $( '[data-content=' + key + ']' )[ 0 ];

			//standard keys just populate the section
			if( !snack.isArray( val ) ){

				if( ele ) ele.innerHTML = val;
			}
			else if( snack.isArray( val ) ){
				var frag = '';

				snack.each( val , function( item, index ){
					var template = $( '#' + key + '-template' )[ 0 ];

					//template found, key is a string
					if( template && typeof item === 'string' ){

						frag = frag + template.innerHTML.replace('${' + key + '}', item );
					}
					else if( template && typeof item === 'object' ){

						var cur = template.innerHTML;

						for( var innerKey in item ){
							cur = cur.replace('${' + innerKey + '}', item[ innerKey ] );
						}

						frag = frag + cur;
					}
				});

				ele.innerHTML = frag;
			}
			else if( typeof val === 'object'){

			}
		}
	};

	return {
		loadData : function( ) {
			var opts = {
				method : 'get',
				url : 'resume.json'
			};

			snack.request( opts, function( err, response ) {
				if( err ){
					return;
				}
				else{
					parseData( response );
				}
			} );
		}
	};

}( window, window.Sizzle, window.snack ) );