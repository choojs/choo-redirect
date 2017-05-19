var redirect = require('.')
var html = require('choo/html')
var choo = require('choo')

var app = choo()

app.route('/', redirect('/welcome'))
app.route('/welcome', welcomeView)

app.mount('body')

function welcomeView () {
  return html`
    <body>
      <div>welcome!</div>
      <a href="/">Test</a>
    </body>
  `
}
