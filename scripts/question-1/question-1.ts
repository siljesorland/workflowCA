interface Person {
	school?: string;
	firstName: string;
	lastName: string;
	age: number;
	isAdmin?: boolean;
}

function newUser({ firstName, lastName, age, isAdmin = false, school = 'Noroff' }: Person): Person {
	return {
		firstName,
		lastName,
		age,
		isAdmin,
		school
	};
}

const ola = {
	school: 'Noroff',
	firstName: 'Ola',
	lastName: 'Nordmann',
	age: 18,
	isAdmin: false
};

function newAdmin(person: Person) {
	return `${person.school} ${person.firstName} ${person.lastName} ${person.age} Is Admin: ${person.isAdmin}`;
}

const kari = {
	firstName: 'Kari',
	lastName: 'Nordmann',
	age: 36
};

console.log(newUser(ola));
console.log(newAdmin(kari));
