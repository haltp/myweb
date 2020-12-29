let numbers = [34, 55, 22, 10, 100, 6, 7];

numbers.sort(function (a, b) {
        return a-b;
});

// console.log(numbers);
let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);

let sum = 0;
numbers.forEach(function (item, idx, ary) { //3개까지밖에 안된다
    sum += item;
    console.log(item, ary, idx);
    let liTag = document.createElement('li');
    liTag.innerHTML = item;
    ulTag.append(liTag);
});

let liTag = document.createElement('li');
liTag.innerHTML = '합계: ' + sum;
ulTag.append(liTag);