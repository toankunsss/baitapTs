"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchJson = fetchJson;
async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok)
        throw new Error('Network error');
    const json = await res.json();
    return json;
}
