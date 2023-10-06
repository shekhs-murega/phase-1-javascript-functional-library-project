// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
      result.push(callback(item));
    });
    return result;
  }
  
  // myReduce function
  function myReduce(collection, callback, acc) {
    let accumulator = acc !== undefined ? acc : myFirst(collection);
    let i = 0;
    myEach(collection, (item) => {
      if (i === 0 && acc === undefined) {
        accumulator = item;
        i++;
      } else {
        accumulator = callback(accumulator, item);
      }
    });
    return accumulator;
  }
  
  // myFind function
  function myFind(collection, predicate) {
    let result;
    myEach(collection, (item) => {
      if (result === undefined && predicate(item)) {
        result = item;
        return false; // Stop the iteration
      }
    });
    return result;
  }
  
  
  // myFilter function
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  // myKeys function
  function myKeys(object) {
    const keys = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  // myValues function
  function myValues(object) {
    const values = [];
    myEach(object, (item) => {
      values.push(item);
    });
    return values;
  }
  
  // mySize function
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : myKeys(collection).length;
  }
  
  // myFirst function
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // myLast function
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    myKeys,
    myValues,
    mySize,
    myFirst,
    myLast,
  };
  