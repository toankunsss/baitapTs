"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = validateForm;
function validateForm(schema, data) {
    for (const key in schema) {
        if (!(key in data)) {
            throw new Error(`Missing required field: ${key}`);
        }
        if (typeof data[key] !== schema[key]) {
            throw new Error(`Field ${key} should be of type ${schema[key]}`);
        }
    }
    return data;
}
