interface person {
    name: string;
    age: number;
}

function greet(person: person): string {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

type Point = {
  x: number;
  y: number;
};

interface Point2 {
  x: number;
  y: number;
}

type Point3 = Point & { z: number };
interface Point2 {
    z: number;
}

type point4 = {
    h: number | string;
    k: boolean;
    l: [number, string];
    m: { a: number; b: string };
}