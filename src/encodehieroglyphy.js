(() => {
    var hieroglyphy;
    if (typeof require === "function") {
        hieroglyphy = require("./hieroglyphy");
    } else {
        hieroglyphy = self.hieroglyphy;
    }
    // var lastclick;

    $("run").onclick = function () {
        /* var value = */
        new Function($("output").value)();

        // if (lastclick === "encodestring") {
        //     // alert('"' + value + '"');
        // } else {
        // }
        // return false;
    };
    $("encodescript").onclick = encodescript;
    $("encodestring").onclick = encodestring;
    // window.onload = () => { encodescript() };
    $("input").value =
        "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')";

    function $(id) {
        return document.getElementById(id);
    }
    function encodescript() {
        // lastclick = "encodescript";
        var output = hieroglyphy.hieroglyphyScript($("input").value);
        $("output").value = output;
        $("stats").innerHTML = output.length + " chars";
    }
    function encodestring() {
        // lastclick = "encodestring";
        var output = hieroglyphy.hieroglyphyString($("input").value);
        $("output").value = output;
        $("stats").innerHTML = output.length + " chars";
    }
})();
