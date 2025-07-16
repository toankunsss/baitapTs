interface config {
    url: string;
    timeout?: number;
}

function initializeConfig(config: config): Required<config> {

    return {
        url: config.url,
        timeout: config.timeout ?? 5000 
    };
}

console.log("--- Initialize Config ---");
const config = initializeConfig({ url: 'https://example.com' });
console.log(config);

const test: readonly string[] = ['apple', 'banana', 'cherry'];
console.log("--- Readonly Array ---");
console.log(test);
test.push('date'); // Error: Property 'push' does not exist on type 'readonly string[]'.