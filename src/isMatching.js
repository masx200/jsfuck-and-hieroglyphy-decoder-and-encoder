"use strict";
export function isMatching(string, pattern) {
    var result = string.match(new RegExp(pattern));
    if (result) return result[1];

    return null;
}
