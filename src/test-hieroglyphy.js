var sum = 0;
for (var i = 0; i < 128; i++) {
    var c = String.fromCharCode(i);
    var out = hieroglyphy.hieroglyphyScript(c);
    sum += out.length;
    console.log(i, c, out.length);
}
console.log(sum, sum / 128);
