"use strict";
function decode_unicode(code: string) {
    return unescape(code.replaceAll("\\", "%"));
}
export { decode_unicode };