/**
 * Created by Acer on 21-Dec-14.
 */
/**
 * Created by Acer on 21-Dec-14.
 */
var buttonsData = App.ButtonsDataModel.create();

App.CalculatorView = Ember.View.extend({
    templateName : 'calculator',
    numberButtons : buttonsData.numberButton,
    operatorButtons : buttonsData.operatorButton,
    textboxId : "textbox",
    textboxValue : 0
})
