var App = App || {};
App.View = App.View || {};

App.View.List = Backbone.View.extend({
    initialize: function() {},
    template: _.template('\
        <div class="row">\
            <div class="col-sm-12">\
                <ul class="list-group">\
                    <% _.each(list, function(item) { %>\
                        <li class="list-group-item"><a href="#detail/<%= item.id %>"><%= item.title %></a></li>\
                    <% }) %>\
                </ul>\
            </div>\
        </div>\
    '),
    render: function() {
        this.$el.html(this.template({list: this.collection.toJSON()}));

        return this;
    }
});
