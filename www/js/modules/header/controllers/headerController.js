define([
    'app',

    'modules/header/views/headerView'
],function(
    App,

    HeaderView
) {
    return {
        show: function() {
            var headerView = new HeaderView();
            
            App.appLayout.headerRegion.show(headerView);

            App.vent.trigger('headerController:show');
        }
    };
});