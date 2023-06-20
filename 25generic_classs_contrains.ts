interface Product {
    sell(): void;
}

class CardProduct implements Product {
    sell() {
        console.log('Jual mobil');
    }
}

class MotorProduct implements Product {
    sell() {
        console.log('Jual motor');
    }
}

function sellProducts<T extends Product>(products: T[]):void {
   products.forEach(product => product.sell());
}

const car = new CardProduct();
const motor = new MotorProduct();

sellProducts([car, motor]);