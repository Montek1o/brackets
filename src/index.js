module.exports = function check(str, bracketsConfig) {
  let strSecond = '';
  while (strSecond != str) {
    strSecond = str;
    bracketsConfig.forEach(item => {
      return str = str.replaceAll(item.join(''), '');
    });
  }
  return str == '';
}
