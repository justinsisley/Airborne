define([
    'app',
    'marionette',

    'modules/header/templates/header'
], function(
    App,
    Marionette
) {
    return Marionette.ItemView.extend({
        template: 'header/header'
    });
});