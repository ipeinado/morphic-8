(function ($, Drupal, drupalSettings) {

	'use strict';

	Drupal.behaviors.morphic = {
		attach: function(context, settings) {
			$(window, context).once('window').each(function() {
        $(this).scroll(function() {
          var x = $(this).scrollTop(), 
              navbar = $('.navbar.navbar-default');
          if (x > 100) {
            navbar.addClass('minified');
          } else {
            navbar.removeClass('minified');
          }
        });
      });
		}
	};

})(jQuery, Drupal, drupalSettings);