// public
// protected 
// private

class Hewan8 {
    public nama: string
    private kaki: number
    protected mamalia: boolean

    constructor(nama: string, kaki:number, mamalia:boolean){
        this.nama = nama
        this.kaki = kaki
        this.mamalia = mamalia
    }

    berjalan() {

    }
}

class Katak8 extends Hewan8{

}