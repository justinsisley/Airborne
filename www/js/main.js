/**
 * Bootstraps the application
 */
define([
    'app',
    'modules/base/controllers/baseController'
], function(
    App,
    baseController
) {
    // Bootstrap the application
    App.addInitializer(function() {
        // A place to store things
        App.vars = {};

        // Show the dashboard
        baseController.dashboard();
    });

    // Once the device is ready,
    // start the application.
    document.addEventListener('deviceready', function() {
        App.start();
    }, false);

    return App;
});