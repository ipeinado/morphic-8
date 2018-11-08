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

      $('.collapsible-title', context).once('.collapsible-title').each(function() {
        $(this).click(function() {
          var id = $(this).attr('aria-controls');
          var region = $('#' + id);
          if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', 'true');
            $(region).slideDown('fast');
            $(region).focus();
          } else {
            // region is expanded
            $(this).attr('aria-expanded', 'false');
            $(region).slideUp('fast');
          }
        });
      });

      $('.search-block-form', context).once('.search-block-form').each(function() {
        var input = $(this).find('.form-search'),
          that = this,
          block_width = $(this).css('width');

        $(input).focus(function() {
          $(that).css('width', '60%');
        });

        $(input).blur(function() {
          $(that).css('width', block_width);
        });
      });
		}
	};

})(jQuery, Drupal, drupalSettings);