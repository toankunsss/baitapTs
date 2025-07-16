function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Hello, TypeScript!"));

class stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}