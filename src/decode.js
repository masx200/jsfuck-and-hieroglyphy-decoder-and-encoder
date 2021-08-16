import { getpostfixandprefix } from "./getpostfixandprefix.js";
import { isMatching } from "./isMatching.js";
import { patternCreator } from "./patternCreator.js";
import { transformstring } from "./transformstring.js";
("use strict");
export function decode(code) {
    const inputcode = code.trim();
    if (inputcode.length === 0) {
        throw new Error("输入不能为空");
    }

    for (let { prefix, postfix } of getpostfixandprefix()) {
        let result = isMatching(inputcode, patternCreator(prefix, postfix));
        if (result) {
            try {
                // setoutput(result);
                // console.log("匹配成功");
                return transformstring(result);
            } catch (e) {
                // throw e;
                // console.log("匹配错误")
            }
            // setoutput(result);
            //     console.log(transformstring(inputcode))
            // mytext = transformstring(inputcode)
            // document.querySelector('#code2').value = mytext
        }
    }
    try {
        return transformstring(inputcode);
        // result = mytext;
        // setoutput(result);
        // document.querySelector("#code2").value = mytext;
        // console.log(transformstring(inputcode));
        // console.log("匹配成功");
    } catch (e) {
        throw e;
        // console.log("匹配错误");
        // alert("匹配失败");
    }
}
