const myLib = require('../my_lib')

console.log('MADE CHANGES 3')lasdfkfj
if (myLib) {
  console.log('IT still WORKS - even nested! ', myLib)
} else {
  throw new Error('It doesnt work')
}
