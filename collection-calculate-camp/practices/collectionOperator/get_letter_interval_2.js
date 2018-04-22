'use strict';

/**
 * 考点: Unicode编码转组合字符
 * 坑点: 第一阶段(< 26)从 1 计 a, 第二阶段(> 26)从 0 计 a
 */
function get_letter_interval_2(number_a, number_b) {
  let result = [];
  for(let begin = Math.min(number_a,number_b);begin <= Math.max(number_a,number_b);begin++)
  {
    result.push(get_letter(begin));
  }
  return number_a > number_b ? result.reverse() : result;
}

/**
 * 根据编码返回字符
 */
function get_letter(number) {
  let result = [];

  if(number % 26 === 0){
    // 从 0 开始计 a
    result.push('z');
    // 组合字符
    number > 26 ? result.unshift(String.fromCharCode(number / 26 + 95)) : null;
  }else {
    // 从 1 开始计 a
    result.push(String.fromCharCode((number % 26) + 96));
    // 组合字符
    number > 26 ? result.unshift(String.fromCharCode(number / 26 + 96)) : null;
  }
  return result.join('');
}

module.exports = get_letter_interval_2;
// console.log(get_letter_interval_2(20,53));
