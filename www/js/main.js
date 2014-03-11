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

    // If we're on a mobile device, assume
    // the PhoneGap library is available,
    // and that the "deviceready" event will
    // fire. Otherwise, we're probably in a
    // desktop browser during development,
    // so we just start the app.
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        document.addEventListener('deviceready', function() {
            App.start();
        }, false);
    } else {
        App.start();
    }
    
    return App;
});