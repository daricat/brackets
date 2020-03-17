module.exports = function check(str, bracketsConfig) {
  let array = str.split('');
  let parentheses = ['(', ')'];
  let braces = ['{', '}'];
  let square_brackets = ['[', ']'];
  let straight_brackets = ['|'];

  let reg = /[0-9]/.test(array[0]);

  if (reg == true) {
    if ((array.length % 2) != 0) {
      return false;
    } else {
      for (let j = 0; j < array.length; j++) {
        switch (array[j]) {
          case '0':
            if (array[j + 1] == '0') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '1':
            if (array[j + 1] == '2') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '2':
            if (array[j + 1] == '2') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '3':
            if (array[j + 1] == '4') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '4':
            if (array[j + 1] == '4') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '5':
            if (array[j + 1] == '6') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '6':
            if (array[j + 1] == '6') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '7':
            if (array[j + 1] == '7') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '8':
            if (array[j + 1] == '8') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
          case '9':
            if (array[j + 1] == '9') {
              array.splice(j, 2);
              j -= 2;
            }
            break;
        }
      }

      if (array.length == 0) {
        return true;
      }
    }
  } else {
    if ((array.length % 2) != 0) {
      console.log(false);
    } else {
      for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
          case parentheses[0]:
            if (array[i + 1] == parentheses[1]) {
              array.splice(i, 2);
              i -= 2;
            }
            break;
          case braces[0]:
            if (array[i + 1] == braces[1]) {
              array.splice(i, 2);
              i -= 2;
            }
            break;
          case square_brackets[0]:
            if (array[i + 1] == square_brackets[1]) {
              array.splice(i, 2);
              i -= 2;
            }
            break;
          case straight_brackets[0]:
            if (array[i + 1] == straight_brackets[0]) {
              array.splice(i, 2);
              i -= 2;
            }
            break;
        }
      }
    }
  }

  if (array.length == 0) {
    return true;
  } else {
    return false;
  }
}