let ulTag = document.createElement('ul');
ulTag.innerHTML = 'Apple'
ulTag.id = 'fruits';
let liTag = document.createElement('li');
liTag.innerHTML = 'Banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'orange';

ulTag.append(liTag);
ulTag.append(liTag1);

document.getElementById('show').append(ulTag);


function input_fruit() {
let fruit = document.getElementById('fruit').value;
let liTag2 = document.createElement('li');
liTag2.innerHTML = fruit;
console.log(fruit);
document.getElementById('fruits').append(liTag2);
}

console.log(ulTag);