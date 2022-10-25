const myLib = require('../my_lib')

require1('left-pad')
require1('./abc123')
require1('./a-very-long-dependency-that-is-named-this-file')



console.log('MADE CHANGES 4')
if (myLib) {
  console.log('IT still WORKS - even nested! ', myLib)
} else {
  throw new Error('It doesnt work')
}

