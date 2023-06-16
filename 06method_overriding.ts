class Hewan7 {
    nama: string = '';
  
  
    bernafas(){
      console.log(`${this.nama} sedang bernafas`)
    }
  }

  class Katak3 extends Hewan7{
    bernafas() {
        console.log('males nafas')
    }
  }

  const katak3 = new Katak3()
  katak3.bernafas()
  