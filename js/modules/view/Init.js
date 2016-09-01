var App = App || {};
App.View = App.View || {};

App.View.Init = Backbone.View.extend({
    template: _.template('\
        <nav class="navbar navbar-inverse">\
            <div class="container">\
                <div id="navbar" class="navbar-collapse collapse">\
                    <ul class="nav navbar-nav">\
                        <li><a href="#">首页</a></li>\
                        <li><a href="#list">列表</a></li>\
                    </ul>\
                </div>\
            </div>\
        </nav>\
        <div class="container" role="main" id="container"></div>\
    '),
    render: function() {
        this.$el.html(this.template());

        return this;
    }
});