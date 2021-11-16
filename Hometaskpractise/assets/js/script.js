let iselementinArray = (value) => {
    const arr = [23, 43, 76, 86, "Jamal"];
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return true;
        }
    }
    return false;
}
console.log(iselementinArray("Jamal"));

function iselementofarrayisodd() {
    const arrOdd = [23, 43, 76, 86, 42, 66, 80, 99];
    let newArr = [];
    console.log("Odd number's array");
    for (let i = 0; i < arrOdd.length; i++) {
        if (arrOdd[i] % 2 == 0) {
            newArr.push(arrOdd[i]);
        }
    }
    console.log(newArr);
}
iselementofarrayisodd();

function Calculator(opr, num1, num2) {
    if (opr == "+") {
        return num1 + num2;
    } else if (opr == "-") {
        return num1 - num2;
    } else if (opr == "*") {
        return num1 * num2;
    } else if (opr == "/") {
        return num1 / num2;
    } else {
        return "Please try valid operation"
    }
}
console.log(Calculator("+", 5, 7));