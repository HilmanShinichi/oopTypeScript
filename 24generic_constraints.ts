//function generics24<T>(arg: T): T {
    // console.log(arg.lenth); // gak bisa pake function length karena type nya abstrack
    // return arg;
// }

interface Length {
    length:number
}

function generics24<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const generics24a = generics24('assds')
console.log(generics24a)

const generics24b = generics24({length: 123, value: 200})