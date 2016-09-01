var App = App || {};

_.extend(App, {
    inited: false,

    init: function() {
        if (this.inited)
            return true;
        this.inited = true;
        var view = new App.View.Init();
        $("#app").html(view.render().$el);
        console.log("App Init...");
    },

    run: function() {
        new App.Router();
        Backbone.history.start();
    }
});

$(function() {
    App.run();
});
