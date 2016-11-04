var App = App || {};
App.Controller = App.Controller || {};

App.Controller.Index = {
    index : function() {
        App.init();

        if (!App.Instance.indexView) {
            App.Instance.indexView = new App.View.Index();
            App.Instance.indexView.render();

            console.log('Index render');
        } else {
            App.Instance.indexView.delegateEvents();
        }

        $("#container").html(App.Instance.indexView.el);
    },
    defaultRoute: function(actions) {
        App.init();
        alert(actions);
    }
};