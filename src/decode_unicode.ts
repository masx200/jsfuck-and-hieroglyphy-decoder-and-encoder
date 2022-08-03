"use strict";
function decode_unicode(code: string) {
    return unescape(code.replaceAll("\\u", "%u"));
}
export { decode_unicode };