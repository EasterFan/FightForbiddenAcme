'use strict';

/**
 * 考点: 集合方法 includes + filter
 */
function get_intersection(collection_a, collection_b) {
  let result = collection_b.filter(item => collection_a.includes(item));
  return result;
}

module.exports = get_intersection;
