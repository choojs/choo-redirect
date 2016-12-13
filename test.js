const test = require('tape')
const chooRedirect = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(chooRedirect)
})
