module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map((element) => element.join(""));
  bracketsConfig.forEach((element) => {
    while (str.includes(element)) {
        str = str.replace(element, '');
    }
  });
  str.length === 0 ? true : false;
}  