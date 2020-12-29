let fruits = ['Apple', 'Banana', 'Mango'];

function sum() {
    let num1 = document.getElementById('num1').value;
    fruits.push(num1);
    console.log(fruits);
}

function minus() {
    let num2 = document.getElementById('num1').value;
    fruits.pop(num2);
    console.log(fruits);
}