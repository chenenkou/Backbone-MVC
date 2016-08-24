var App = App || {};
App.Collection = App.Collection || {};

App.Collection.Article = Backbone.Collection.extend({
    model: App.Model.Article,
    fetch: function() {
        this.add(App.data);
    }
});