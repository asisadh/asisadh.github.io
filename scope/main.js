String.prototype.filter = function (bannedWord) {
    let originalString = this;
    if (bannedWord.length === 0) {
        return originalString;
    }
    return originalString.replace(bannedWord + " ", "");
};
console.log("Exercise 1");
console.log("console.log('This house is not nice!'.filter('not'))");
console.log("This house is not nice!".filter('not'));
console.log("");

Array.prototype.bubbleSort = function () {
    let array = this;
    if (array.length <= 0) {
        return array;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log("Exercise 2");
console.log("[6,4,0, 3,-2,1].bubbleSort()");
console.log([6, 4, 0, 3, -2, 1].bubbleSort());
console.log("");

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

class Teacher extends Person {
    constructor(name) {
        super(name);
    }
    teach(subject) {
        console.log(super.name + " is now teaching " + subject);
    }
}

console.log("Exercise 3");
let teacher = new Teacher("Alex");
teacher.teach("Mathematics");

function createPerson(name) {
    let person = Object.create();
    person.name = name;
    return person;
}

function createTeacher(name) {
    let teacher = Object.create(teacherMethods);
    teacher.name = name;
    return teacher;
}

const teacherMethods = {
    teach: function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
};

let teacher2 = createTeacher("John");
teacher2.teach("Science");
console.log("");

class Person2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    greeting() {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
    }

    salute() {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}

class Student extends Person2 {
    constructor(name, age, major) {
        super(name, age);
        this._major = major;
    }

    get major() {
        this._major;
    }

    greeting() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this._major}.`);
    }
}

class Professor extends Person2 {
    constructor(name, age, department) {
        super(name, age);
        this._department = department;
    }

    get department() {
        this._department;
    }

    greeting() {
        console.log(`Good day, my name is ${this.name} and I am in the ${this._department} department.`);
    }
}

console.log("Exercise 4");
var professor = new Professor("Alex", "30", "Science and Technology");
professor.greeting();
professor.salute();

var student = new Student("John", "22", "Engineering");
student.greeting();
student.salute();

const PersonFC = function (name, age) {
    this.name = name;
    this.age = age;
}

PersonFC.prototype.greeting = function () {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
}

PersonFC.prototype.salute = function () {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

const ProfessorFC = function (name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}
ProfessorFC.prototype = Object.create(PersonFC.prototype);

ProfessorFC.prototype.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this._department} department.`);
}

const StudentFC = function (name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

StudentFC.prototype = Object.create(PersonFC.prototype);
StudentFC.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this._major}.`);
}