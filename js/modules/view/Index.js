var App = App || {};
App.View = App.View || {};

App.View.Index = Backbone.View.extend({
    initialize: function() {},
    template: _.template('\
        <div class="jumbotron">\
            <h1>BackBone-MVC</h1>\
        </div>\
    '),
    render: function() {
        this.$el.html(this.template());

        return this;
    }
});
