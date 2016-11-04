var App = App || {};

_.extend(App, {
    initialized: false,

    init: function() {
        if (this.initialized)
            return true;
        this.initialized = true;

        var view = new App.View.Init();
        $("#app").html(view.render().el);

        console.log("App Init...");
    },

    run: function() {
        new App.Router();
        Backbone.history.start();
    },
    // 实例对象
    Instance: {}
});

$(function() {
    App.run();
});
