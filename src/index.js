module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let brecket = {};
  for(let i = 0; i < bracketsConfig.length; i++){
    brecket[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  arr.push(str.charAt(0));
  for(var j = 1; j < str.length; j++) {
    if(str.charAt(j) === brecket[arr[arr.length - 1]]) {
      arr.pop();
    } else {
      arr.push(str.charAt(j)); 
    }
  }
  if (arr.length > 0) {
      return false;
    }
  return true;
};
