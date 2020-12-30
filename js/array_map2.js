let students = [];

for (let i = 1; i <= 5; i++) {
    let std = {};
    std.sno = i;
    std.sname = 'Hong' +i;
    std.sgen = i%2 ==0 ? 'M' : 'F';
    std.score = 80 +i;
    students.push(std);
}

let result = students.some(function(a,b,c){
    return a.score >84;
});

result = students.map(function(a) {
    return a.sname;
}).indexOf('Hong2'); //indexOf 배열의 몇번째 위치에 있습니까?

console.log(result);

