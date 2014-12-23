
var dataModel = App.DataModel.create();

App.CalculatorController = Ember.ObjectController.extend({
    actions :{
        append : function(value){
            var input = String(dataModel.get('input'));
            if(input == 0 )
            {
                input = value;
            }
            else
            {
                input += value;
            }
            dataModel.set('input',input);
        },
        compute : function(value){
            var operand,inputText,input = dataModel.get('input'),result = dataModel.get('result'),operator = dataModel.get('operator'), length = input.length;
            if(value === "C"){
                input = 0;
                result = 0;
            }
            else if(value === "B"){
                input =  textbox.value;
                inputText = input.toString();
                length = inputText.length;
                inputText = inputText.substring(0, length - 1);
                input = Number(inputText);
                if(input === 0 ) {
                    result = 0;
                }
            }
            else {
                length = input.length;
                if(value === "1/x") {
                    result = input;
                    result = 1 / result;
                    input = 0;
                    operator = "";
                }
                else if(result === 0 ) {
                    result = Number(input);
                    operator = value;
                }
                else
                {
                    operand = Number(input);
                    switch (operator) {
                        case '+':result += operand;
                            break;
                        case '-':result -= operand;
                            break;
                        case '*':result *= operand;
                            break;
                        case '/':result /= operand;
                            break;
                    }
                    operator = value;
                }
                if(operator !== "")
                    input = 0;
            }
            dataModel.set('input',input);
            dataModel.set('result',result);
            dataModel.set('operator',operator);
        }
    }
})
