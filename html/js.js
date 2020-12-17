var name = document.getElementById('show').innerHTML;
console.log(name);
document.getElementById('show').innerHTML = "World";

var divTag = document.createElement("div");
divTag.innerHTML = "Nice"; //<div>Nice</div>

document.getElementById('show').append(divTag);

var ulTag = document.createElement("li");
var ulTag1 = document.createElement("li");
ulTag.innerHTML = "Apple";
ulTag1.innerHTML = "Orange";

document.getElementById('fruit').append(ulTag);
document.getElementById('fruit').append(ulTag1);
//////////////////////////////
var grade = 0;
for (var i = 1; i <= 100; i++) {
    grade =grade+i;
    console.log(grade);
}