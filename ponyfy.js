$.fn.ponyfy = function ipsum()
{
	$(this).each( function()
	{
		var $elem = $(this);
		var number = typeof $elem.attr('data-ipsumnumber') !== 'undefined' ? $elem.attr('data-ipsumnumber') : 1;
		var start = typeof $elem.attr('data-ipsumstart') !== 'undefined' ? $elem.attr('data-ipsumstart') : 1;
		var type = typeof $elem.attr('data-ipsumstart') !== 'undefined' ? $elem.attr('data-ipsumstart') : 'pony-and-filler';

		$.getJSON('https://ponyipsum.com/api/?callback=?',
		{ 
			'type': type,
			'start-with-lorem': start, 
			'paras': number
		},
		function( ponyGoodness )
		{
			if ( ponyGoodness && ponyGoodness.length > 0 )
			{
				$elem.html('');
				for ( var it = 0; it < ponyGoodness.length; it++ )
				{
					$elem.append('<p>' + ponyGoodness[ it ] + '</p>');
				}
			}
		});
	});
}