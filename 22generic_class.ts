interface Generics5<T> {
    propA: T,
    method(): T
};

class GenericsClass<T> implements Generics5<T> {
    propA: T;

    constructor(prop: T) {
        this.propA = prop;
    }

    method(): T {
        return this.propA
    }
}

const genericClassA = new GenericsClass<number>(123);
console.log(genericClassA.method());