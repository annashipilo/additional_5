module.exports = function check(str, bracketsConfig) {


  var stack = [];
  var stack2 = [];

  for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < bracketsConfig.length; j++) {
          var stri = str[i];
          if (bracketsConfig[j][0] !== bracketsConfig[j][1]) {
              if (str[i] === bracketsConfig[j][0]) {
                  stack.push(str[i]);
              } else if (str[i] === bracketsConfig[j][1]) {
                  if (stack.length == 0) {
                      return false;
                  } else if (stack[stack.length - 1] === bracketsConfig[j][0]) {
                      stack.pop();
                  }
              }
          } else if (str[i] === bracketsConfig[j][0]) {
              if (str[i] == stack2[stack2.length - 1]) {
                  stack2.pop();
              } else {
                  stack2.push(str[i]);
              }

          }
      }
  }
  console.log(stack2);
  console.log(stack);
  if (stack.length === 0 && stack2.length === 0) {
      return true;
  } else {
      return false;
  }
}
