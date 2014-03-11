define([
    'marionette',

    'modules/dashboard/templates/dashboard',
    'ratchet'
], function(
    Marionette
) {
    return Marionette.ItemView.extend({
        template: 'dashboard/dashboard',

        className: 'content'
    });
});