//GMT:00:00:00 -> 09:00:00
let today = new Date('2020-12-01');
// today.setMonth(0);
console.log(today.getDay());

let t = document.createElement('table');
t.setAttribute('border', '1');
let tr = document.createElement('tr');

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
for (let i = 0; i < days.length; i++) {
    let th = document.createElement('th');
    th.innerHTML = days[i];
    tr.append(th);
}
t.append(tr);

let tr1 = document.createElement('tr');
t.setAttribute('style', 'text-align: center;');

function setCal(yyyy, mm, dd) {
    let today = new Date(yyyy + '-' + mm + '-' + dd);
    let first = today.getDay();
    today = new Date(yyyy, mm, 0);
    console.log(first);
    console.log(today.getDate());

    var row = null;
    row = t.insertRow();
    var cnt = 0;

    for (let i = 1; i <= first; i++) {
        cell = row.insertCell().append("*");
        cnt = cnt + 1;
    }

    for (let i = 1; i <= today.getDate(); i++) {
        let td = document.createElement('td');
        td.innerHTML = i;
        cnt = cnt + 1;
        tr1.append(td);
        if (cnt % 7 == 0) {
            // td.style.backgroundColor='blue';
            td.setAttribute('style', 'background: blue; color: white;');
            t.append(tr1);
            tr1 = document.createElement('tr');
        }
        if (cnt % 7 == 1) {
            td.style.backgroundColor = 'red';
        }
    }
}
setCal('2020', '02', '05');


// function showCal(yyyy, mm) {
// }
// showCal(2019, 5);

t.append(tr1);
document.getElementById('show').append(t);