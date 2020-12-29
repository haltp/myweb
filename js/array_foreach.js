let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

// persons.forEach(myCallBack());

// function myCallBack(a, b, c) {
//     console.log(a, b, c);
// }

persons = [];
let person = {
    name: '이혜빈',
    age: 20,
    score: 90
}

persons.push(person);

let person1 = {};
person1.name = '이나경';
person1.age = 21;
person1.score = 80;
persons.push(person1);

// persons.push('송다희');

console.log(persons);
let tableTag = document.createElement('table');
tableTag.setAttribute('border', '1');

function drawTable() {
    let titles = ['이름', '나이', '점수'];

    let trTag = document.createElement('tr');
    for (title of titles) {
        let tdTag = document.createElement('th');
        tdTag.innerHTML = title;
        trTag.append(tdTag);
    }
    tableTag.append(trTag); //타이틀 생성.

    persons.forEach(myCallFunc);//데이터 생성

    document.getElementById('show').append(tableTag);
}

function myCallFunc(item, idx, ary) {
    let trTag = document.createElement('tr');
    for (field in item) {
        let tdTag = document.createElement('td');
        tdTag.innerHTML = item[field];
        trTag.append(tdTag);
    }
    tableTag.append(trTag);
}

