"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./api/client");
const formValidator_1 = require("./validation/formValidator");
// Example REST client usage
async function fetchUserExample() {
    try {
        const user = await (0, client_1.fetchJson)('https://67dc40ade00db03c40676ed4.mockapi.io/user');
        console.log('Fetched user:', user);
    }
    catch (error) {
        console.error('Error fetching user:', error);
    }
}
// Example form validation usage
function validateUserExample() {
    const userSchema = {
        id: 'number',
        name: 'string',
    };
    try {
        // Valid case
        const validUser = (0, formValidator_1.validateForm)(userSchema, { id: 1, name: 'Alice' });
        console.log('Valid user:', validUser);
    }
    catch (error) {
        console.error('Validation error:', error);
    }
}
// Run examples
fetchUserExample();
validateUserExample();
