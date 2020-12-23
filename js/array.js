let friend1 = {
    name: '송다희',
    age: 20,
    hobby: '코딩',
    grade: 'A'
}
let friend2 = {
    name: '이나경',
    age: 22,
    hobby: '자바',
    grade: 'B'
}
let friend3 = {
    name: '이혜빈',
    age: 25,
    hobby: '오라클',
    grade: 'A'
}

let friends = [friend1, friend2, friend3];

document.write('<table border="1">');
document.write('<tr><th>이름</th><th>나이</th><th>취미</th></tr>');
for (end of friends) {
    document.write('<tr>');
    document.write('<td>' + end.name + '</td>');
    document.write('<td>' + end.age + '</td>');
    document.write('<td>' + end.hobby + '</td>');
    document.write('</tr>');
}
document.write('</table>');

document.write('=====교수님=====');
document.write('<table border="1"><tr>');
for(fri in friend1) {
    document.write('<th>'+fri+'</th>');
}
document.write('</tr>');

for (end of friends) {
    document.write('<tr>');
    for(fri in end) {
        document.write('<td>' + end[fri] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');



let numbers = [3, 4, 8, 6, 12, 83, 5, 1];
let sum = numbers[0];

for (num of numbers) {
    if (sum > num) {
        sum = num;

    }
}
console.log("가장 작은 수: " + sum);