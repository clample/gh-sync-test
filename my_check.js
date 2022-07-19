const myLib = require('./my_lib')

if (myLib) {
  console.log('IT WORKS! ', myLib)
} else {
  throw new Error('It doesnt work')
}
