function bai1() {
    let numberArr = [0, 11, 4, 19, 3, 34, 55, 3, 6, 14];
    let outPut = [];
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] >= 10) {
            outPut.push(numberArr[i])
        }
    }

    alert("Your number array: " + numberArr);
    alert("Numbers that are greater or equal to 10: " + outPut.join(","));
}

function bai2() {
    let numberArr = [0, 11, 4, 19, 3, 34, 55, 3, 6, 14];
    let max = numberArr[0];
    let index = 0;
    for (let i = 1; i < numberArr.length; i++) {
        if (numberArr[i] > max) {
            max = numberArr[i];
            index = i;
        }
    }
    alert("Your number array: " + numberArr);
    alert("Highest value element is: " + max + " at position: " + (index));
}

function bai3() {
    let numberArr = [0, 11, 4, 19, 3, 34, 55, 3, 6, 14];
    let max = numberArr[0];
    let sum = 0;
    let index = 0;
    for (let i = 1; i < numberArr.length; i++) {
        if (numberArr[i] > max) {
            max = numberArr[i];
            index = i;
        }
        sum += numberArr[i];
    }
    alert("Your number array: " + numberArr);
    alert("Highest value element is: " + max + " at position: " + (index));
    alert("Average: " + (sum / numberArr.length));
}

function bai4() {
    let numberArr = [];
    let inputElement;
    for (let i = 0; i < 10; i++) {
        inputElement = prompt("Enter value of Element " + i)
        numberArr.push(inputElement);
    }
    alert("Your number array: " + numberArr.join(","));
    alert("Number array after reversing: " + (numberArr.reverse()).join(","));
}

function bai5() {
    let inputString = prompt("Enter you string: ");
    let arr = inputString.split(" ");
    let outPut = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) < 0) {
            outPut.push(arr[i]);
            count += 1;
        }
    }
    alert("Amount of Negative Number: " + count)
    alert("Negative in your String: " + outPut.join(","))
}

function bai6() {
    let numberArr = [];
    let inputElement;
    for (let i = 0; i < 10; i++) {
        inputElement = prompt("Enter value of Element " + i)
        numberArr.push(inputElement);
    }
    alert("Your number array: " + numberArr.join(","));

    let findNumber = prompt("Enter number you want to find: ");
    if (numberArr.indexOf(findNumber) !== -1) {
        alert(findNumber + " is in the array");
    } else {
        alert(findNumber + " is not in array");
    }
}

function bai7() {
    let numberArr = [];
    let inputElement;
    for (let i = 0; i < 10; i++) {
        inputElement = prompt("Enter value of Element " + i)
        numberArr.push(inputElement);
    }
    alert("Your number array: " + numberArr.join(","));

    let findNumber = prompt("Enter number you want to find: ");
    if (numberArr.indexOf(findNumber) !== -1) {
        numberArr.pop(numberArr.indexOf(findNumber));
        alert("Your new number array: " + numberArr);
    } else{
        alert(findNumber + "  is not in the array");
    }
}

function bai8() {
    let numberArr = [];
    let inputElement;
    for (let i = 0; i < 10; i++) {
        inputElement = prompt("Enter value of Element " + i)
        numberArr.push(inputElement);
    }
    alert("Your number array: " + numberArr.join(","));

    let newArr = numberArr.sort();
    alert("Your new number array: " + newArr.reverse());
}

function bai9() {
    let numberArr1 = [];
    let numberArr2 = [];
    let inputElement1;
    let inputElement2;
    let newArr = [];
    for (let i = 0; i < 10; i++) {
        inputElement1 = prompt("Enter value of Array 1 Element " + i)
        numberArr1.push(inputElement1);
    }

    for (let j = 0; j < 10; j++) {
        inputElement2 = prompt("Enter value of Array 2 Element " + j)
        numberArr2.push(inputElement2);
    }

    alert("Your number array 1: " + numberArr1.join(","));
    alert("Your number array 2: " + numberArr2.join(","));
    newArr = numberArr1.concat(numberArr2);
    alert("Your new number array: " + newArr);
}