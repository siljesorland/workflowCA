function newUser(person) {
    return `${person.school} ${person.firstName} ${person.lastName} ${person.age}`;
}
let Ola = {
    school: 'Noroff',
    firstName: 'Ola',
    lastName: 'Nordmann',
    age: 18,
    isAdmin: false
};
function newAdmin(person) {
    return `${person.school} ${person.firstName} ${person.lastName} ${person.age} Is Admin: ${person.isAdmin}`;
}
let Kari = {
    school: 'Noroff',
    firstName: 'Kari',
    lastName: 'Nordmann',
    age: 36,
    isAdmin: true
};
console.log(newUser(Ola));
console.log(newAdmin(Kari));
