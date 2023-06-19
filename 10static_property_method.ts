class Ayam {
    static kaki: number = 2;

    static jalan() {
        console.log(`ayam berjalan dengan ${this.kaki} kaki`)
    }

    getKaki() {
        // console.log(this.kaki) // eror
        console.log(Ayam.kaki)
    }
}

Ayam.jalan()

const ayam2 = new Ayam();
ayam2.getKaki()

// ==================================
const ayam3 = new Ayam();
const ayam4 = new Ayam();

ayam3.getKaki()
ayam4.getKaki()

Ayam.kaki = 3


ayam3.getKaki()
ayam4.getKaki()

