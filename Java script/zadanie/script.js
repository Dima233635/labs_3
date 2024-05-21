    let x = 10;
    let y = 5;

    let operator = "-"; // строка которая хранит символа арифметической операции + - * /

    let res;

    // if (operator === "+") {
    //     res = x + y
    // } else if (operator === "-") {
    //     res = x - y
    // } else if (operator === "*") {
    //     res = x * y
    // } else if (operator === "/") {
    //     res = x / y
    // } else {
    //     console.log("Введено неправильное значение");
    //     res = 0;
    // }

    
    switch(operator) {
        case "+":
            res = x + y;
            break;
        case "-":
            res = x - y;
            break;
        case "*":
            res= x * y;
            break;
        case "/": 
            if (y === 0) {
                res = 0;
            } else {
                res = x / y;
            }

            break;
        
        default: 
            console.log("Не допустимая операция")
    }

    console.log(res)

