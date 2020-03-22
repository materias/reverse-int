module.exports = function reverse (n) {
  let nn = n.toString();
    var str = "";
    for (let i = nn.length-1; i >= 0; i--) {
      str += nn[i];
    }
    return parseInt(str);
}
