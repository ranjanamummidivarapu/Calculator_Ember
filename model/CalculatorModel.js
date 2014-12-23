/**
 * Created by Acer on 21-Dec-14.
 */

App.DataModel = Ember.Object.extend({
    input : 0,
    result : 0,
    operator : "",
    inputChanged : function(){
        textbox.value = this.input;
    }.observes('input'),
    resultChanged : function(){
        textbox.value = this.result;
    }.observes('result')
})

App.ButtonsDataModel = Ember.Object.extend({
    numberButton : [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operatorButton : ["+", "-", "*", "/", "1/x", "=", "C", "B"]
})


