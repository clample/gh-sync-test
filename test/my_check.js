const myLib = require('../my_lib')

require('left-pad')

console.log('MADE CHANGES 4')
if (myLib) {
  console.log('IT still WORKS - even nested! ', myLib)
} else {
  throw new Error('It doesnt work')
}

