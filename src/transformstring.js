"use strict";
// var JSFuck;
// !(() => {
export function transformstring(code) {
    return String(Function("return " + code)());
}
