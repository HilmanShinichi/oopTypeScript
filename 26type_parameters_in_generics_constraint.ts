function getProperty <T, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(getProperty(obj, 'a'));
console.log(getProperty(obj, 'b'));

// console.log(getProperty(obj, 'z')); // ini error karena  z tidak ada key nya di obj