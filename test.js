'use strict';

const deduplicateArray = require('./index');

(function () {
  console.log("\nCase 1: String with no options\n");

  const arr = ["a", "a", "b", "c", "d", "a", "d"];
  const result = {
    sourceArray: arr,
    expected: ["a", "b", "c", "d"],
    actual: deduplicateArray(arr)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 2: String with no options\n");

  const arr = ["A", "a", "b", "c", "d", "a", "d"];
  const result = {
    sourceArray: arr,
    expected: ["A", "a", "b", "c", "d"],
    actual: deduplicateArray(arr)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 3: Number with no options\n");

  const arr = ["10", 10, "b", "c", "d", "a", "d"];
  const result = {
    sourceArray: arr,
    expected: ["10", 10, "b", "c", "d", "a"],
    actual: deduplicateArray(arr)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 4: Number with non-strict type\n");

  const arr = ["10", 10, "b", "c", "d", "a", "d"];
  const opts = { strictType: false };
  const result = {
    sourceArray: arr,
    opts,
    expected: ["10", "b", "c", "d", "a"],
    actual: deduplicateArray(arr, opts)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 5: object with no option\n");

  const arr = [{ name: "arun" }, { name: "Arun" }, { name: "John" }, { name: "arun" }];

  const result = {
    sourceArray: arr,
    expected: [{ name: "arun" }, { name: "Arun" }, { name: "John" }],
    actual: deduplicateArray(arr)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 6: object with option\n");

  const arr = [{ name: "arun" }, { name: "Arun" }, { name: "John" }, { name: "arun" }];
  const opts = { caseSensitive: false };
  const result = {
    sourceArray: arr,
    opts,
    expected: [{ name: "arun" }, { name: "John" }],
    actual: deduplicateArray(arr, opts)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 7: array with no option\n");

  const arr = [["arun", "John"], ["Arun", "john"], ["arun", "John"]];

  const result = {
    sourceArray: arr,
    expected: [["arun", "John"], ["Arun", "john"]],
    actual: deduplicateArray(arr)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 8: array with option\n");

  const arr = [["arun", "John"], ["Arun", "john"], ["arun", "John"]];
  const opts = { caseSensitive: false };
  const result = {
    sourceArray: arr,
    opts,
    expected: [["arun", "John"]],
    actual: deduplicateArray(arr, opts)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 9: array with option\n");

  const arr = [["arun", "10"], ["Arun", 10], ["arun", 10]];
  const opts = { caseSensitive: false };
  const result = {
    sourceArray: arr,
    opts,
    expected: [["arun", "10"], ["Arun", 10]],
    actual: deduplicateArray(arr, opts)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 10: array with option\n");

  const arr = [["arun", "10"], ["Arun", 10], ["arun", 10]];
  const opts = { caseSensitive: false, strictType: false };
  const result = {
    sourceArray: arr,
    opts,
    expected: [["arun", "10"]],
    actual: deduplicateArray(arr, opts)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 11: boolean with no option\n");

  const arr = [true, true, false, true, false];
  const result = {
    sourceArray: arr,
    expected: [true, false],
    actual: deduplicateArray(arr)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 12: null with no option\n");

  const arr = [null, true, false, null, false];
  const result = {
    sourceArray: arr,
    expected: [null, true, false],
    actual: deduplicateArray(arr)
  };

  console.log(result);

})();

(function () {
  console.log("\nCase 13: undefined with no option\n");

  const arr = [null, true, false, undefined, null, false, undefined];
  const result = {
    sourceArray: arr,
    expected: [null, true, false, undefined],
    actual: deduplicateArray(arr)
  };

  console.log(result);

})();