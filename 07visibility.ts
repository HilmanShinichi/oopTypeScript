// public
// protected 
// private

class Hewan8 {
    public nama: string // bisa di panggil dari class lain
    private kaki: number // hanya bisa di pake di dalam kelas sendiiri
    protected mamalia: boolean // bisa di pake dari kelas turunan nya

    constructor(nama: string, kaki:number, mamalia:boolean){
        this.nama = nama
        this.kaki = kaki
        this.mamalia = mamalia
    }

    berjalan() {

    }
}

class Katak8 extends Hewan8{
        private umurTelur: number = 4;
        private umurKecebong: number = 7
        private umurKatak: number = 5

        getUmur():void {
            console.log(this.umurTelur + this.umurKecebong + this.umurKatak)
            console.log(`${this.nama} ${this.mamalia}`)
        }
}

const katak = new Katak8("Katak", 5, true)
katak.getUmur()