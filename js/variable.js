//undefired
let something = 10;
something = 1>2;
something = null;


if(something) {
    console.log("참입니다.")
} else {
    console.log("거짓입니다.")
}

//object
something ={
    name: 'Hong',
    age: 20,
    phone:'010-1111-2222'
}
console.log(something.name);
console.log("============");
for (field in something) {  //필드값은 in
console.log(field, something[field]); //배열은 아니다
}
console.log("============");

let nameAry = ['Hong', 'Park', "Kim", "Lee"];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'Choi';

for(let i=0; i<nameAry.length; i++) {
    console.log('nameAry['+i+']=>'+nameAry[i]);
}
var i =1;
document.write('<table border="1">');
document.write('<tr><th>순번</th><th>이름</th></tr>');
for(str of nameAry) {   //배열은 of
    document.write('<tr>');
    document.write('<td>'+i+++'</td>');
    document.write('<td>'+str+'</td>');
    document.write('</tr>');
}
document.write('</table>');
