# JSfuck-and-hieroglyphy-Decoder-and-ENCODER

JSfuck and hieroglyphy Decoder and ENCODER

JSFuck 是一种基于 JavaScript 原子部分的深奥教育编程风格。它只使用六个不同的字符来编写和执行代码

hieroglyphy 是一个工具和 javascript 库，用于将字符串，数字和脚本转换为 的等效序列！在浏览器中运行的字符

<code>
    ()+[]!
</code>
    和
<code>
()[]{}+!
</code>

[类型声明](src/index.ts)

# 使用方法

```js
import {
    jsfuckString,
    jsfuckScript,
    hieroglyphyString,
    hieroglyphyScript,
    decode,
} from "@masx200/jsfuck-and-hieroglyphy-decoder-and-encoder";
```

四种编码方法:

`jsfuckString`,
`jsfuckScript`,
`hieroglyphyString`,
`hieroglyphyScript`,

一种解码方法:

`decode`

# 在线演示

https://js-fuck-and-hieroglyphy-decoder-and-encoder.vercel.app

# 优化了 jsfuck 的代码执行流程,修复了加载 jsfuck 导致网页卡顿的问题

Loading jsfuck causes problems with webpages ，May cause the page to be stuck for 5 seconds

Execute the following initialization code when the first load is made, causing problems with webpages.

Modified to execute these initialization code after calling jsfuck's encode method

把原本的第一次加载就执行以下初始化代码,导致网页卡顿的问题

```javascript
fillMissingDigits();
fillMissingChars();
replaceMap();
replaceStrings();
```

修改成在调用 jsfuck 的 encode 方法之后再执行这些初始化代码

```javascript
var haveinit = 0;
function encode(input, wrapWithEval) {
    if (haveinit === 0) {
        fillMissingDigits();
        fillMissingChars();
        replaceMap();
        replaceStrings();
        haveinit = 1;
    }

    //.....................................
}
```

# 改进编码和解码算法

基于 jsfuck 和 hieroglyphy，并且改进了 jsfuck 对中文字的编码方式，

缩小编码之后的体积，借鉴于 hieroglyphy，把中文字转换成 Unicode 编码

,并且改进了解码的算法，可以同时解码两种编码生成的 script 和 string

改进了 hieroglyphy 中对于花括号的编码方式，缩小体积，借鉴于 jsfuck

例如把"你的男的女的男的女的哦洗涤剂嗯嗯额"转换成"\u4f60\u7684\u7537\u7684\u5973\u7684\u7537\u7684\u5973\u7684\u54e6\u6d17\u6da4\u5242\u55ef\u55ef\u989d"

Improved coding and decoding algorithms

Based on jsfuck and hieroglyphy, and improved the way jsfuck encodes Chinese characters,

Reduce the volume after encoding, learn from hieroglyphy, convert Chinese characters into Unicode encoding

And improved the decoding algorithm, which can simultaneously decode the script and string generated by the two encodings.

Improved the coding of curly braces in hieroglyphy, reducing the size, drawing on jsfuck

# 浏览器兼容性

建议在最新超高版本 chrome 或者 Firefox 或者 safari 浏览器中运行

或者用 webpack 或者 parcel bundler,babel 转换代码,可以在老旧浏览器中运行

# 感谢

<a href="https://github.com/aemkei/jsfuck/blob/master/jsfuck.js">https://github.com/aemkei/jsfuck/blob/master/jsfuck.js
</a>
<br>
<a href="https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js">https://github.com/alcuadrado/hieroglyphy/blob/master/hieroglyphy.js</a>
