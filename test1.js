console.log('OK')

if (1 === 2) {
  require('./does-not-exist.js')
  require('./my_lib.js')
}
