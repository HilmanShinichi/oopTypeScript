namespace NamespaceExample {
    export class Hewan {
        kaki:number = 4
    }

    export const kucing = new Hewan();
}

const belalang = new NamespaceExample.Hewan();
let kodok2a = NamespaceExample.kucing

console.log(kodok2a.kaki)