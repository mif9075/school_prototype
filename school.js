let school = new Object();
let members = [];

//No constructor for school
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

const miguel = new Member('Miguel', 'Fernandez', 'term2', 'Student', 50);
const yuri = new Member('Yuri', 'Shkoda', 'term2', 'Instructor', 50);
const jimmy = new Member('Jimmy', '', 'term2', 'Student', 50);
const darth = new Member('Darth', 'Vader', 'term2', 'spy', 50);

members.push(miguel);
members.push(yuri);
members.push(jimmy);


Show all members in array of objects(Students and Instructor of school)

    console.log("Members:", members);


Show Energy Levels - Before and After

    console.log("Miguel's Energy is:", miguel.energy);
    console.log("Yuri's Energfy is:", yuri.energy);
    console.log("Jimmy's Energy is:", jimmy.energy);

    miguel.lunch(45);
    yuri.coding(60);
    jimmy.break(100);

    console.log("Miguel's Energy is:", miguel.energy);
    console.log("Yuri's Energy is:", yuri.energy);
    console.log("Jimmy's Energy is:", jimmy.energy);

Display school object/Information

    console.log('School Information:', school);