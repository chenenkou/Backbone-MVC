var App = App || {};

App.Router = Backbone.Router.extend({
    routes: {
        "": App.Controller.Index.index,
        "list": App.Controller.Article.list,
        "detail/:id": App.Controller.Article.detail,
        "*actions" : App.Controller.Index.defaultRoute
    }
});
