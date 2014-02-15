/**
 * Bootstraps the application
 */
define([
    'app',
    'modules/base/routers/baseRouter'
], function(
    App,
    BaseRouter
) {
    // Bootstrap the application
    App.addInitializer(function() {
        // A place to store things
        App.vars = {};

        // Instantiate router(s)
        App.routers = {
            baseRouter : new BaseRouter()
        };

        // Start Backbone.history
        Backbone.history.start({
            root: '/',
            pushState: true
        });

        // Force the initial route
        // since we aren't in a traditional
        // web browser environment.
        Backbone.history.navigate('/', true);
    });

    document.addEventListener('deviceready', function() {
        App.start();
    }, false);

    return App;
});