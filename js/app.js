var App = App || {};

App.run = function() {
    new App.Router();
    Backbone.history.start();
};

$(function() {
    App.run();
});
