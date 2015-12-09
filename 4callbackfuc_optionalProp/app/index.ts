/// <reference path='../typings/lodash.d.ts'/>


interface Person {
    firstname: string;
    lastname: string;
    age? : number
}

function manyPerson(person: Person): { firstname: string; lastname: string; age: number } {
	

	var newMiya = { firstname: "Huang", lastname: "Miya",age: 12 }
	var newPerson = { firstname: "Person", lastname: "sb", age: 2000 }
	var num: number;

	if ( person.age ) {
		newMiya.age = person.age;
	}


	var people: Array<Person>;
	people = new Array<Person>();


	people.push(newMiya);
	
	for (let i = 0; i != 6 ; i++ ) {
		people.push(newPerson);
	}

	var findMiya = <any>_.find(people, (onePerson) => {
		return onePerson.age < 150;
	});

	return findMiya;

}

var miya: Person = { firstname: "Miya", lastname: "Miya" }

var person: Person = manyPerson(miya);

var buildHTML = "firstname : " + person.firstname + "<br>"
	+ "lastname : " + person.lastname + "<br>"
	+ "age : " + person.age + "<br>";

document.body.innerHTML = buildHTML;
