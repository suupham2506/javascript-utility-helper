// Array

// Chunks an array into n smaller arrays.
const chunk = (arr, n) => {
    const size = Math.ceil(arr.length / n);
    return Array.from({ length: n }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };
  // chunk([1, 2, 3, 4, 5, 6, 7], 4); // [[1, 2], [3, 4], [5, 6], [7]]
  
  // Removes falsy values from an array.
  const compact = (arr) => arr.filter(Boolean);
  // compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
  
  // Creates a new array concatenating array
  const concat = (arr = [], ...values) => arr.concat(values);
  // concat([1], 2, [3], [[4]]); // [1,2, [3], [[4]]]
  
  // Creates a slice of array with n elements dropped from the beginning
  const drop = (arr, n = 1) => arr.slice(n);
  // drop([1, 2, 3]); [2,3]
  
  // Creates a slice of array with n elements dropped from the right
  const dropRight = (arr, n = 1) => arr.slice(0, -n);
  // drop([1, 2, 3]); [1,2]
  
  // Flattens an array up to the specified depth.
  const flatten = (arr, depth = 1) =>
    arr.reduce(
      (a, v) =>
        a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
      []
    );
  // flatten([1, [2], 3, 4]);
  
  // Deep flattens an array.
  const flattenDeep = (arr) =>
    [].concat(...arr.map((v) => (Array.isArray(v) ? flattenDeep(v) : v)));
  // flattenDeep([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]
  
  export default {
    chunk,
    compact,
    concat,
    drop,
    dropRight,
    flatten,
    flattenDeep,
  };
  