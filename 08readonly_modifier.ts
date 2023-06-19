class Person {
    readonly gender: string = "male";
}

const person = new Person();
//person.gender = "female"; // error karena gender readonly

