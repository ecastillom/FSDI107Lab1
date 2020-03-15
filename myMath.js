module.exports = {

    sayHello: function (text) {
        console.log("Hello there!" + text);
    },

    Suma: function (num1, num2) {
        return num1 + num2;
    },

    Greater: function (num1, num2) {
        if (num1 > num2) {
            return num1;
        }

        else {
            return num2;
        }

    },

    Less: function (num1, num2) {
        if (num1 < num2) {
            return num1;
        }

        else {
            return num2;
        }

    },

    isEven: function(num){
        var res = num % 2;

        if(res === 0){
            return true;
        }

        return false;
        
    },


};