'use strict';

const arrayHasValue = require('array-has-value');

/**
 * 
 * @param {array} sourceArray | required |
 * @param {object} opts | optional | controls the uniqueness of the array based on the value of caseSensitive and strictType
 * @returns {array} deduplicated array
 * 
 */
const deduplicateArray = (sourceArray, opts) => {

  if (!sourceArray) {
    throw new Error('sourceArray is missing.')
  }
  if (!Array.isArray(sourceArray)) {
    throw new Error('sourceArray must be an array.');
  }

  let deduplicatedArray = [];
  for (let item of sourceArray) {
    const isPresent = opts ? arrayHasValue(deduplicatedArray, item, opts) : arrayHasValue(deduplicatedArray, item);
    if (!isPresent) {
      deduplicatedArray.push(item);
    }
  }
  return deduplicatedArray;
}

module.exports = deduplicateArray;