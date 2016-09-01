var App = App || {};
App.Controller = App.Controller || {};

App.Controller.Index = {
    index : function() {
        App.init();
        var view = new App.View.Index();
        $("#container").html(view.render().$el);
    },
    defaultRoute: function(actions) {
        App.init();
        alert(actions);
    }
};