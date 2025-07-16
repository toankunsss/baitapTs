// typesAndFunctions.ts

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

console.log("--- Di chuyen ---");
move('up'); // Valid

function getTotalLength(input: string | string[]): number {
    if (typeof input === 'string') {
        return input.length;
    } else {
        return input.reduce((total, str) => total + str.length, 0);
    }
}

console.log("--- Tinh tong do dai chuoi ---");