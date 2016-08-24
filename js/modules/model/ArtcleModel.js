var App = App || {};
App.Model = App.Model || {};

App.Model.Article = Backbone.Model.extend({
    defaults: {
        id: '',
        'title': '',
        'content': ''
    }
});