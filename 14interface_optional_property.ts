interface Teacher {
    name:string;
    age:number;
    phone?:string;
}

let teacher: Teacher = { name: 'John', age: 30, phone: '123456789' }; // phone optional bisa di isi dan gak