(function ($, Drupal, drupalSettings) {
	'use strict';

	Drupal.behaviors.homepage = {
		attach: function(context, settings) {
			$('.block-content--type-homepage-link', context).once('.block-content--type-homepage-link').each(function() {
				var h3 = $(this).find('h3').text().trim();
				var link = $(this).find('a');
				$(link).attr('title', 'Visit the "' + h3 + '" page');

				var url = $(link).attr('href');
				$(this).click(function(e) {
					window.location.href = url;
				});
			});
		}
	};
})(jQuery, Drupal, drupalSettings);

