let friends = [];
let i = 0;
function input_friend() {
    let namef = document.getElementById('name').value;
    let agef = document.getElementById('age').value;
    let hobbyf = document.getElementById('hobby').value;

    let friend = {};
    friend.name = namef;
    friend.age = agef;
    friend.hobby = hobbyf;
    friends[i++] = friend;

    let trr = document.createElement('tr');
    document.getElementById('trr');
    
    let tdTag = document.createElement('td');
    tdTag.innerHTML = namef;

    let tdTag1 = document.createElement('td');
    tdTag1.innerHTML = agef;

    let tdTag2 = document.createElement('td');
    tdTag2.innerHTML = hobbyf;

    trr.append(tdTag);
    trr.append(tdTag1);
    trr.append(tdTag2);

    document.getElementById('friends').append(trr);
    // trTag.append(tdTag);
    // trTag.append(tdTag1);
    // trTag.append(tdTag2);




//     console.log(namef.value, agef.value, hobbyf.value);
//     document.getElementById('result').value = namef.value+','+agef.value+','+hobbyf.value;
}