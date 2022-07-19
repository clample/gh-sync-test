const myLib = require('../my_lib')

if (myLib) {
  console.log('IT still WORKS - even nested! ', myLib)
} else {
  throw new Error('It doesnt work')
}
