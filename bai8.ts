function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

function getMaybeValue(): string | null | undefined {
    return Math.random() > 0.5 ? "Actual Value" : null;
}

const strLength: string | null | undefined  = getMaybeValue();
let safeLength: number = strLength!.length;

let toan = '19';
const so: number = 1;

const sum: number = Number(toan) + so; 