class Student {
    fullName: string;
    constructor(public firstName, public middleInitial,public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person: Person) {
    return `Hello,${person.firstName} ${person.lastName}`
}

let user = new Student('Ran','','shaw')
// document.body.innerHTML = greeter(user);

let list: number[] = []

enum Color {Red, Green, Blue}
let c= Color[2]

console.log(c)

 