
var numbers = [];
function getNum() {
    var number = Number(getEle('inputNum').value);
    numbers.push(number);
    getEle('txtArrayNum').innerHTML = numbers;
}

//1. Tính tổng số dương
function calcSum() {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            total += numbers[i];
        }
    }
    getEle('txtSum').innerHTML = total;
}

//2. Đếm số dương
function countSum() {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    getEle('txtCount').innerHTML = count;
}

//3. Tìm số nhỏ nhất
function findMin() {
    var min = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    getEle('txtMin').innerHTML = min;
}

//4. Tìm số dương nhỏ nhất

function findMinPos() {
    var positive = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positive.push(numbers[i]);
        }

    }
    if (positive.length > 0) {
        var minPosIn = positive[0];
        for (var i = 1; i < positive.length; i++) {
            if (positive[i] < minPosIn) {
                minPosIn = positive[i];
            }
            getEle('txtMinPos').innerHTML = minPosIn;
        }
    } else {
        getEle('txtMinPos').innerHTML = "không tìm thấy số dương";
    }
}

//5. Tìm số chẵn cuối cùng
function findLastEven() {
    var lastEven = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            lastEven = numbers[i];
        }
        getEle('txtLastEven').innerHTML = lastEven;
    }

}


//6. Đổi chỗ 
function changePosition() {
    index1 = getEle('inputIndex1').value;
    index2 = getEle('inputIndex2').value;

    function change(a, b) {
        var i = numbers[a];
        numbers[a] = numbers[b];
        numbers[b] = i;
    }
    change(index1, index2);
    getEle('txtChangePos').innerHTML = "Mảng sau khi đổi " + numbers;
}

//7. Sắp xếp tăng dần
function sortIncrease() {
    var result = numbers.sort(function (a, b) {
        return a - b;
    });
    getEle('txtIncrease').innerHTML = result;
}

//8. Tìm số nguyên tố đầu tiên
function checkPrime(number) {
    if (number < 2){
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            return false;
        } 
    }
    return true;
}
function findFirstPrime() {
    for (var i = 0; i < numbers.length; i++) {
        var firstPrime = 0;
        if (checkPrime(numbers[i])) {
            firstPrime = numbers[i];
            break
        } 
    }
    firstPrime === 0? getEle("txtPrime").innerHTML = "Không có số nguyên tố trong mảng" : getEle("txtPrime").innerHTML = firstPrime;
}

//9. Đếm số nguyên
var newNums = [];
function getNewNum (){
    var newNum = Number(getEle('inputNewNum').value);  
    newNums.push(newNum);
    getEle('txtNewNum').innerHTML = newNums;
}
function countInt(){
    var count = 0;
    for (var  i = 0; i < newNums.length; i++)
    if (Number.isInteger(newNums[i])){
        count++;
    } 
    getEle('txtcountInt').innerHTML = "Số nguyên " + count;
}

//10. So sánh số lượng số âm và dương
function compareNum(){
    for (var pos = 0, neg = 0, i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            pos++;
        } else {numbers[i] < 0 && neg++ }
    }
    if (pos < neg){
        getEle('txtCompare').innerHTML = "Số dương < Số âm ";
    } else if (pos > neg){
        getEle('txtCompare').innerHTML = "Số dương > Số âm ";
    } else {
        getEle('txtCompare').innerHTML = "Số dương = Số âm ";
    }
}


function getEle(id) {
    return document.getElementById(id);
}