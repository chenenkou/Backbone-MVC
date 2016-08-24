var App = App || {};
App.View = App.View || {};

App.View.Index = Backbone.View.extend({
    template: _.template('\
        <div class="jumbotron">\
            <h1>Theme example</h1>\
            <p>This is a template showcasing the optional theme stylesheet included in Bootstrap</p>\
        </div>\
    '),
    render: function() {
        this.$el.html(this.template());

        return this;
    }
});
