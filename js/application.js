/**
 * Created by Acer on 20-Dec-14.
 */
window.App = Ember.Application.create();

App.Router.map(function () {
    this.resource('calculator',{ path : '/' });
});