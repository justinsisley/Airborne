define([
    'app',

    'modules/footer/views/footerView'
],function(
    App,

    FooterView
) {
    return {
        show: function() {
            var footerView = new FooterView();
            
            App.appLayout.footerRegion.show(footerView);

            App.vent.trigger('footerController:show');
        }
    };
});