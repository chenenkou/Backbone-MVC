var App = App || {};
App.Controller = App.Controller || {};

App.Controller.Article = {
    list : function() {
        App.init();

        if (!App.Instance.listView) {
            var collection = new App.Collection.Article();
            collection.fetch();
            App.Instance.listView = new App.View.List({collection: collection});
            App.Instance.listView.render();

            console.log('Article/list render');
        } else {
            App.Instance.listView.delegateEvents();
        }

        $("#container").html(App.Instance.listView.el);
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

        if (!App.Instance.detailView) {
            var model = new App.Model.Article(data);
            App.Instance.detailView = new App.View.Detail({model: model});
            App.Instance.detailView.render();

            console.log('Article/detail render');
        } else {
            App.Instance.detailView.model.set(data);
            App.Instance.detailView.delegateEvents();
        }

        $("#container").html(App.Instance.detailView.el);
    }
};