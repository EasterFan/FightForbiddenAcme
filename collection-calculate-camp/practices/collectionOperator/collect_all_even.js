'use strict';

/**
 * 考点: filter 函数过滤数组
 */
function collect_all_even(collection) {
  // filter 方法里传入的 item => item % 2 === 0 是一个函数, 这个函数接收数组元素,并返回所有偶数,
  // filter方法留下了偶数, 过滤了数组中其它元素
  return collection.filter(item => item % 2 === 0);
}

module.exports = collect_all_even;
// var collection_a = [1, 2, 3, 4, 5];
