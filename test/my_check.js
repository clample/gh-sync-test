const myLib = require('../my_lib')

// require('left-pad')
// require('./abc123')
// require('./a-very-long-dependency-that-is-named-this-file')

// Test

console.log('MADE CHANGES 4')
if (myLib) {
  console.log('IT still WORKS - even nested! ', myLib)
} else {
  throw new Error('It doesnt work')
}

