'use strict';

/**
 * 考点: 集合方法 forEach 用法
 */
function get_union(collection_a, collection_b) {
  let result = collection_a;

  collection_b.forEach(item => {
    if(!collection_a.includes(item))
      result.push(item);
  });

  return result;
}

module.exports = get_union;
// console.log(get_union([10, 27, 28, 19, 5],[5, 78, 28, 19, 23]));
