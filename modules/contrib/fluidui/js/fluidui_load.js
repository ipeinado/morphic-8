(function ($, Drupal) {
    Drupal.behaviors.fluid = {
        attach: function (context, settings) {
            if (!($(".fl-prefsEditor-separatedPanel-iframe").length)){
                var modulePath = drupalSettings.modulePath;

                modulePath = "/" + modulePath;

                fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
                    tocTemplate: modulePath + "/infusion/src/components/tableOfContents/html/TableOfContents.html",
                    terms: {
                        templatePrefix: modulePath + "/infusion/src/framework/preferences/html",
                        messagePrefix: modulePath + "/infusion/src/framework/preferences/messages"
                    }
                });
            }
        }
    }
})(jQuery, Drupal);
