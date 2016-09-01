var App = App || {};
App.Controller = App.Controller || {};

App.Controller.Article = {
    list : function() {
        App.init();
        var collection = new App.Collection.Article();
        collection.fetch();
        var view = new App.View.List({collection: collection});
        $("#container").html(view.render().$el);
    },
    detail: function(id) {
        App.init();
        var data = {};
        for (var i in App.data) {
            var item = App.data[i];
            if (item.id == id) {
                data = item;
                break;
            }
        }
        var model = new App.Model.Article(data);
        var view = new App.View.Detail({model: model});
        $("#container").html(view.render().$el);
    }
};