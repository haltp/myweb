    let person = {}; //=new Object();
    person.name = 'Hong';
    person.age = 10;

    person = {
        name: "Hwang",
        age: 15
    }
    console.log(person);

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    person = new Person('Park', 20);
    console.log(person);

    let persons = [];

    persons.push(person);
    persons.push(new Person('Choi', 21));
    persons.push(new Person('Kim', 23));
    persons.push(new Person('Lee', 24));

    let names = persons.map(function (a, b, c) {
        console.log(a, b, c);
        let member = {};
        member.id = a.name +'-'+b;
        member.age = a.age;
        return member;
    });

    let over21 = persons.filter(function (a, b, c) {
        return a.age >21;
    }).map(function(a, b, c){
        return a.name;
    });
    console.log(over21);


    names.forEach(function (a, b, c) {
        document.write('<h1>'+a.id+'/'+a.age+'</h1>');
    });
    console.log(names);