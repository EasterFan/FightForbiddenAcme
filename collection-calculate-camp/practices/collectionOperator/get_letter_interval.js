'use strict';

/**
 * 考点: 将 Unicode 编码转为字符 --> String.fromCharCode()
 */
function get_letter_interval(number_a, number_b) {
  let result = [];
  for(let begin = Math.min(number_a,number_b);begin <= Math.max(number_a,number_b);begin++){
    // 'a' 的编码是 97, number_a , number_b 的值最小为 1, 这里加96, 是为了输入最小值时,从 a 开始
    result.push(String.fromCharCode(begin + 96));
  }
  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_letter_interval;

/*
unicode 编码表: https://unicode-table.com/cn/#control-character
*/
