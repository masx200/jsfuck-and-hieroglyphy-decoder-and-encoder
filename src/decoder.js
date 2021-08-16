"use strict";
import { decode } from "./decode";
$("run").onclick = function () {
    new Function($("code2").value)();
};
function $(id) {
    return document.getElementById(id);
}
document.getElementById("decode").onclick = decodehandler;
function setoutput(decodedCode) {
    var code2 = document.querySelector("#code2");

    code2.value = decodedCode;
    // console.log(transformstring(decodedCode));
}
// window.decode=decode
function decodehandler() {
    var code = document.querySelector("#code");
    try {
        setoutput(decode(code.value));
    } catch (error) {
        alert('解码失败')
        throw error;
    }
}
// })();
