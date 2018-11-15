(function ($, Drupal, drupalSettings) {
	'use strict';

	Drupal.behaviors.homepage = {
		attach: function(context, settings) {
			$('.block-content--type-homepage-link', context).once('.block-content--type-homepage-link').each(function() {
				var h3 = $(this).find('h3'),
					h3_text = $(h3).text().trim(),
					link = $(this).find('a'),
					link_text = $(link).text(),
					default_text = 'Learn more',
					hidden_text = link_text.split(/Learn more/)[1];

				console.log(link_text);
				console.log(hidden_text);

				if (hidden_text && hidden_text.length == 0) {
					$(link).html(default_text);
				} else {
					$(link).html(default_text + '<span class="visually-hidden">' + hidden_text + '</span>');
				}

				var url = $(link).attr('href');
				$(this).click(function(e) {
					window.location.href = url;
				});
			});
		}
	};
})(jQuery, Drupal, drupalSettings);

