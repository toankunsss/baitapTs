function makePair<T,U>(a: T, b: U ): [T, U] {
    return [a, b];
}

const pair1 = makePair(42, "hello");
// pair1: [number, string]

const pair2 = makePair(true, { name: "Alice" });
// pair2: [boolean, { name: string }]

const pair3 = makePair([1, 2, 3], null);
// pair3: [number[], null]
