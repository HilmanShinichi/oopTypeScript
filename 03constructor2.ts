class Hewan4 {
    nama: string
    kaki:number
    mamalia:boolean

    constructor(nama: string, kaki: number, mamalia: boolean){
        this.nama = nama
        this.kaki = kaki
        this.mamalia = true
    }
}

const burung = new Hewan4("burung", 2, true)
console.log(burung)

// Bisa pake cara di bawah ini lebih simpel
class Hewan41 {
    constructor(public nama: string, public kaki: number, public mamalia: boolean){}
}

const burung2 = new Hewan41("burung dara", 2, true)
console.log(burung2)
