function getData(value: any){
    return value;
}

const data1 = getData(176677)
console.log(data1) // kalau type nya any gak bisa pake fungsi dari type data tersebut karena bingung

// ===============

function getData2<T>(value: T): T {
    return value;
}

const data2 = getData2<string>('asdasd')
console.log(data2.length)

const data3 = getData2<number>(123);
console.log(data3.toFixed(2))