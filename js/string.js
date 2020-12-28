let str = 'Please locate where "locate" occurs!';
let strLeng = str.length;

console.log(strLeng); //문자길이

//indexOf, lastIndexOf, search
strLeng1 = str.indexOf('locate', 13); //앞에서 부터 위치계산
str = str.lastIndexOf('occurs'); //뒤에서부터 위치계산

console.log(strLeng1);
console.log(str);

//slice, substring, substr
let fruit = 'Apple, Banana, Kiwi';
let result = fruit.slice(0, 7); //0~7까지

let from = fruit.indexOf('Banana');
result = fruit.substring(from, from+6);//문자위치

result = fruit.substr(from, 6);//문자열크기
console.log(result);

//replace
let newFruit = fruit.replace('Banana', 'Orange');
console.clear();
console.log(newFruit);

//toUpperCase, toLowerCase, concat, trim, padStar, padEnd

console.log('      good  hello    '.trim().toUpperCase());
//trim:좌우공백 잘라줌
//toUpperCase(): 전체 대문자로 바꿔줌
console.log('5'.padStart(4, '0')); //문자열크기4자리 중에 빈자리는 0으로 채운다

let uri = 'http://www.naver.net';
console.log(uri.replace('net','com')); //net을 com으로 바꿈
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')),'.com'));

let fruits = fruit.split(','); //Apple, Banana, kiwi
for(f of fruits) {
    console.log(f.trim());
}