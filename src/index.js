module.exports = function reverse(n) {
    if (Number.isNaN(n)) return NaN;
    let s = "";
    let w = Math.abs(n);
    while (w > 0) {
        s += (w % 10).toString();
        w = Math.floor(w / 10);
    }
    return parseInt(s);
};
