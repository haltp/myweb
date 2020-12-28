//990101-1234567
//990102-2345678
//000201-3456789
//000202-4567890

function getGender(num) {
    let from = num.replace('-','').substring(6,7);
    if (from == 1||from == 3) {
        return '남자';
    }else if (from == 2||from == 4) {
        return '여자';
    } else {
        return '잘못입력';
    }
}
   
let result;
let numbers = '990101-3234567';
numbers += ' 990102-2345678';
numbers += ' 000201-3456789';
numbers += ' 000202-4567890';
numbers += ' 0003011567890';

let numAry = numbers.split(' ');
for (num of numAry) {  
    result = getGender(num);
    console.log('결과: '+result);
}

