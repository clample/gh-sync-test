const myLib = require('./my_other_lib2')


if (myLib) {
  console.log('IT STILL WORKS! ', myLib)
} else {
  throw new Error('It doesnt work')
}
