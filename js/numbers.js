let x = 10;
let y = '5'; //NaN : not a number 연산불가

let result = x / y; //곱하기 나누기는 문자를 자동 숫자로 인식한다
// result = x / 0; //Infinity 무한값
console.log(result);

function sum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1) + parseInt(num2));
}