"use strict";
import hieroglyphy from "./hieroglyphy.js";
import JSFuck from "./jsfuck.js";
export function jsfuckString(input) {
    return JSFuck.encode(input, false);
}
export function jsfuckScript(input) {
    return JSFuck.encode(input, true);
}
export function hieroglyphyString(input) {
    return hieroglyphy.hieroglyphyString(input);
}
export function hieroglyphyScript(input) {
    return hieroglyphy.hieroglyphyScript(input);
}
export { decode } from "./decode.js";
