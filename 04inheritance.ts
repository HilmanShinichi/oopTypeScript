class Hewan5 {
 
  constructor(public nama: string, public kaki: number, public mamalia: boolean){}

  bernfas(){
    console.log(`${this.nama} sedang bernafas`)
  }
}

class Burung4 extends Hewan5 {
    warna: string = 'merah'
}


const burung4 = new Burung4('burung', 2, true)
burung4.warna = 'hitam'
console.log(burung4)