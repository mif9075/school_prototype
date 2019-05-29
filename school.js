let school = new Object();


school.address = "630 Ninth Ave, Ste 901, New York, NY 10036"; 
school.phone = "646-215-2200";
school.hours = "09:30am-09:00pm";
school.website = "Codeimmersives.com";
school.fax = "917-398-9853";

class Member {
    constructor(firstName, lastName, term, position, energy){
        this.firstName = firstName;
        this.lastName = lastName;
        this.term = term;
        this.position = position;
        this.energy = energy;
    }

    break(amount) {
        console.log(`${this.position} ${this.firstName} is on break.`)
        this.energy += amount
    }

    lunch(amount) {
        console.log(`${this.position} ${this.firstName} is eating.`)
        this.energy += amount
    }

    coding(amount) {
        console.log(`${this.position} ${this.firstName} is coding.`)
        this.energy -= amount
    }

}

const miguel = new Member('Miguel', 'Fernandez', 'term2', 'Student', 75);
const yuri = new Member('Yuri', 'Shkoda', 'term2', 'Instructor', 75);
const jimmy = new Member('Jimmy', '', 'term2', 'Student', 75);

miguel.lunch(45);
yuri.coding(60);
jimmy.break(200);

console.log("Jimmy's Energy is:", jimmy.energy);


console.log('School Information:', school);