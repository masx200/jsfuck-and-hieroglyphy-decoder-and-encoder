(() => {
    $("input").value =
        "console.log('{你好吗zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM}')";

    function $(id) {
        return document.getElementById(id);
    }

    function encode() {
        var output = JSFuck.encode($("input").value, $("eval").checked);
        $("output").value = output;
        $("stats").innerHTML = output.length + " chars";
    }

    $("encode").onclick = encode;
    $("eval").onchange = encode;

    // window.onload = () => { encode() };

    $("run").onclick = function () {
        value = eval($("output").value);

        if (!$("eval").checked) {
            alert('"' + value + '"');
        }
        return false;
    };
})();
