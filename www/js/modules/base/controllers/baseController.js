/**
 * The base controller works hand-in-hand with the
 * base router to handle routes appropriately. It's
 * basically a switchboard that provides a callback
 * for each route in the base router.
 * The base controller's methods should leverage
 * other module controllers to get the real work
 * done, which, most of the time, means rendering
 * one or more views.
 *
 * This controller also demonstrates a way of
 * changing application "contexts", by allowing
 * you to switch between two different layouts.
 * Mercenary has two layouts by default: the public
 * layout, shown to unauthenticated users, and the
 * app layout, which is for logged in users only.
 */
define([
    'app',

    'modules/base/views/appLayout',

    'modules/header/controllers/headerController',
    'modules/footer/controllers/footerController',

    'modules/dashboard/controllers/dashboardController'
],function(
    App,

    AppLayout,
    
    headerController,
    footerController,
    
    dashboardController
) {
    return {
        dashboard: function() {
            this.showAppLayout();

            dashboardController.show();

            App.vent.trigger('baseController:dashboard');
        },

        showAppLayout: function() {
            // Prevent re-rendering of the
            // app layout if it is
            // currently visible.
            if (App.appLayout) {
                return false;
            }

            // If we've gotten past the above
            // check, we create a new app layout,
            // then set it as a property on App 
            // to make it accessible across the 
            // application's modules.
            App.appLayout = new AppLayout();

            // Add a unique class to the body to allow
            // for fully-independent styling between
            // the public layout and the app layout
            $('body').removeClass('public-layout').addClass('app-layout');

            // Show the app layout in the
            // application's main content region.
            App.mainContentRegion.show(App.appLayout);

            // Show the app header
            headerController.show();

            // Show the app footer
            footerController.show();

            // Once we're sure the previously open
            // layout has been closed, we nullify 
            // the app layout property.
            App.publicLayout = null;

            App.vent.trigger('baseController:showAppLayout');
        }
    };
});