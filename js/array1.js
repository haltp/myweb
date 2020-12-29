let fruits = ['Apple', 'Banana'];
fruits[2] = 'Melon';
fruits[fruits.length] = 'Orange';
fruits[fruits.length] = 'Mango';
fruits[2] = 'new Melon';
delete fruits[2]; //undifine 생긴다

// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

fruits = []; //새로 선언
fruits.push('Apple'); //젤 뒤에 추가
fruits.push('Banana');
fruits.unshift('Orange'); //젤 앞에 추가
fruits.unshift('Melon');

// fruits.pop(); //젤 뒤에 하나 제거
// fruits.shift(); //젤 앞에 하나 제거

//Melon Orange Apple Banana 순서에서
fruits.splice(1, 0, 'New Orange', 'New Apple'); //(위치부터, 삭제할 갯수, 다른값 추가), undifine이 생기지 않는다
console.log(fruits);


for(fruit of fruits) {
    console.log(fruit);
}

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name: 'Apple',
    price: 2000,
    weight: 50
}

fruit['name']; //name based; furit.name;
fruits[0]; // index based



