type useInfor = [string, number, boolean];
function printUserInfor(user: useInfor): void {
    const [name, age, isActive] = user;
    console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}`);
}
printUserInfor(['Alice', 30, true]);

enum Color {
    Red,   // Mặc định gán giá trị 0
    Green, // Mặc định gán giá trị 1
    Blue   // Mặc định gán giá trị 2
}

function getColorName(color: Color): string {
    switch (color) {
        case Color.Red:
            return 'Red';
        case Color.Green:
            return 'Green';
        case Color.Blue:
            return 'Blue';
        default:
            return 'Unknown color';
    }
}
console.log("--- Enum Color ---");
console.log(getColorName(Color.Red));  