function factorial(n:number): number {
    if( n < 0 ) {
        throw new Error("Nhap so khonng duoc lon hon 0");
    }

    if ( n === 0) {
        return 1;
    }

    let result: number = 1;
    for ( let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
} 

console.log("--- Tinh giai thua ---: ", factorial(5)); 

function summary(arr: number[]): number {
    let total: number = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

console.log("--- Tinh tong cac so trong mang ---: ", summary([1, 2, 3, 4, 5]));
