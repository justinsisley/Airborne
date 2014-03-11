define([
    'marionette',

    'modules/footer/templates/footer'
], function(
    Marionette
) {
    return Marionette.ItemView.extend({
        template: 'footer/footer'
    });
});