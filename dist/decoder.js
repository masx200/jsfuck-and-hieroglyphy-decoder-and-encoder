parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        l5K6: [
            function (require, module, exports) {
                (onload = function onload() {
                    var replacedPrefix,
                        replacedPostfix,
                        result,
                        prefix,
                        postfix,
                        mytext;
                    function $(e) {
                        return document.getElementById(e);
                    }
                    function patternCreator(e, o) {
                        return (
                            (replacedPrefix = e.replace(
                                /[\[\]\(\)\+\!]/g,
                                "\\$&"
                            )),
                            (replacedPostfix = o.replace(
                                /[\[\]\(\)\+\!]/g,
                                "\\$&"
                            )),
                            replacedPrefix + "(.*)" + replacedPostfix
                        );
                    }
                    function isMatching(e, o) {
                        var t = e.match(new RegExp(o));
                        return t ? t[1] : null;
                    }
                    function setDecoded(decodedCode) {
                        var code2 = document.querySelector("#code2");
                        (code2.value = eval(decodedCode)),
                            console.log(eval(decodedCode));
                    }
                    function decode() {
                        var code = document.querySelector("#code");
                        if (0 !== code.value.length) {
                            var prefix =
                                    "[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]](",
                                postfix = ")()";
                            if (
                                ((result = isMatching(
                                    code.value,
                                    patternCreator(prefix, postfix)
                                )),
                                result)
                            )
                                try {
                                    return (
                                        setDecoded(result),
                                        void console.log("匹配成功")
                                    );
                                } catch (_unused) {}
                            if (
                                ((prefix =
                                    "[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]("),
                                (postfix = ")()"),
                                (result = isMatching(
                                    code.value,
                                    patternCreator(prefix, postfix)
                                )),
                                result)
                            )
                                try {
                                    return (
                                        setDecoded(result),
                                        void console.log("匹配成功")
                                    );
                                } catch (_unused2) {}
                            if (
                                ((prefix =
                                    "[][" +
                                    hieroglyphy.hieroglyphyString("sort") +
                                    "][" +
                                    hieroglyphy.hieroglyphyString(
                                        "constructor"
                                    ) +
                                    "]("),
                                (postfix = ")()"),
                                (result = isMatching(
                                    code.value,
                                    patternCreator(prefix, postfix)
                                )),
                                result)
                            )
                                try {
                                    return (
                                        setDecoded(result),
                                        void console.log("匹配成功")
                                    );
                                } catch (_unused3) {}
                            if (
                                ((prefix =
                                    "[][" +
                                    JSFuck.encode("filter") +
                                    "][" +
                                    JSFuck.encode("constructor") +
                                    "]("),
                                (postfix = ")()"),
                                (result = isMatching(
                                    code.value,
                                    patternCreator(prefix, postfix)
                                )),
                                result)
                            )
                                try {
                                    return (
                                        setDecoded(result),
                                        void console.log("匹配成功")
                                    );
                                } catch (_unused4) {}
                            try {
                                return (
                                    (mytext = eval(code.value)),
                                    (document.querySelector("#code2").value =
                                        mytext),
                                    console.log(eval(code.value)),
                                    void console.log("匹配成功")
                                );
                            } catch (_unused5) {
                                console.log("匹配错误"), alert("匹配失败");
                            }
                        } else alert("输入框不能为空");
                    }
                    ($("run").onclick = function () {
                        eval($("code2").value);
                    }),
                        (document.getElementById("decode").onclick = decode);
                })();
            },
            {},
        ],
    },
    {},
    ["l5K6"],
    null
);
//# sourceMappingURL=/decoder.js.map
