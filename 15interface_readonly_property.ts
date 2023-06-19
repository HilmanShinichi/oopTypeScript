interface Student {
    readonly name: string;
    readonly age: number;
}

let student: Student = {
    name: 'john',
    age: 20
};

// student.age = 30; // propety tidak bisa di assign ulang karena readonly