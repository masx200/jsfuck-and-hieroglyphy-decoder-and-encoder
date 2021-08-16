"use strict";
import JSFuck from "./jsfuck.js";
!(() => {
    $("input").value =
        "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')";

    function $(id) {
        return document.getElementById(id);
    }

    function encode() {
        var output = JSFuck.encode($("input").value, false);
        /* $("eval").checked */
        $("output").value = output;
        $("stats").innerHTML = output.length + " chars";
    }
    function encodescript() {
        var output = JSFuck.encode($("input").value, true);
        /* $("eval").checked */
        $("output").value = output;
        $("stats").innerHTML = output.length + " chars";
    }
    $("encodescript").onclick = encodescript;
    $("encode").onclick = encode;
    // $("eval").onchange = encode;

    // window.onload = () => { encode() };

    $("run").onclick = function () {
        /* value = */
        new Function($("output").value)();

        // if (!$("eval").checked) {
        //     alert('"' + value + '"');
        // }
        // return false;
    };
})();
