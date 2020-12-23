let numAry = [0];
for(let i =0; i<5; i++)
 {let name1 = window.prompt('숫자를 입력하세요.');}
// let name2 = window.prompt('숫자를 입력하세요.');

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

diffSum(name1, name2); //입력받은 두수사이의 합: 15~25

function diffSum(a, b) {
    let n1 = parseInt(a);
    let n2 = parseInt(b);
    if(15<n1+n2 &&n1+n2<25) {
        console.log(n1+n2);
    }
}





