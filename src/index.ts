"use strict";
//@ts-ignore
import hieroglyphy from "./hieroglyphy.js";
//@ts-ignore
import JSFuck from "./jsfuck.js";
export function jsfuckString(input: string): string {
    return JSFuck.encode(input, false);
}
export function jsfuckScript(input: string): string {
    return JSFuck.encode(input, true);
}
export function hieroglyphyString(input: string) : string{
    return hieroglyphy.hieroglyphyString(input);
}
export function hieroglyphyScript(input: string): string {
    return hieroglyphy.hieroglyphyScript(input);
}
export { decode } from "./decode.js";
