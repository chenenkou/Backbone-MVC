var App = App || {};
App.View = App.View || {};

App.View.Detail = Backbone.View.extend({
    initialize: function() {},
    template: _.template('\
        <div class="page-header">\
            <h1><%= data.title %></h1>\
        </div>\
        <div class="well">\
            <p><%= data.content %></p>\
        </div>\
    '),
    render: function() {
        this.$el.html(this.template({data: this.model.toJSON()}));

        return this;
    }
});
