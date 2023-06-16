class Hewan6 {
  nama: string;
  kaki: number;
  mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }
}

class Katak1 extends Hewan6 {
  beracun: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean, beracun: boolean) {
    super(nama, kaki, mamalia);
    this.beracun = beracun;
  }
}

const katak1 = new Katak1("katak", 2, false, true);
console.log(katak1)
