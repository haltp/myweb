// let numAry = [0];
// for(let i =0; i<5; i++) {
//     let name1 = window.prompt('숫자를 입력하세요.');



// }


// checkGrade(name1); //100:A, 90:B, 80:C, 그외D

// function checkGrade(a) {
//     if (a == 100) {
//         console.log('A');
//     } else if (a >= 90) {
//         console.log('B');
//     } else if (a >= 80) {
//         console.log('C');
//     } else {
//         console.log('D');
//     }
// }

// let name1 = window.prompt('숫자를 입력하세요.');
// let name2 = window.prompt('숫자를 입력하세요.');
// diffSum(name1, name2); //입력받은 두수사이의 합: 15~25

// function diffSum(a, b) {
//     let sum = 0;
//     let n1 = parseInt(a);
//     let n2 = parseInt(b);
//     for (let i = n1; i<= n2; i++) {
//             sum += i;
//             console.log(sum);      
//     }
// }


// let friend1 = {}
// friend1.name = 'Hong';
// friend1.age = 22;

// let friend2 = {
//     name: 'Hwang',
//     age: 20,
// }

// let friends = [friend1, friend2];
// for (friend of friends) {
//     for (field in friend) {
//         console.log(friend[field])
//     }
// }

let friends = []; //array
for (let i = 0; i < 2; i++) {
    let friend1 = window.prompt('이름을 입력하세요.');
    let friend2 = window.prompt('나이를 입력하세요.');
    let friend3 = window.prompt('취미를 입력하세요.');
    let friend = {}; //object
    friend.name = friend1;
    friend.age = friend2;
    friend.hobby = friend3;
    friends[i] = friend;
}
document.write('<table border="1">');
document.write('<tr><th>이름</th><th>나이</th><th>취미</th></tr>');
for (fri of friends) {
    document.write('<tr>');
    for (f in fri) {
        document.write('<td>' + fri[f] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');
