# choo-redirect [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Redirect a view to another view.

## Usage
```js
var redirect = require('choo-redirect')
var mount = require('choo/mount')
var html = require('choo/html')
var choo = require('choo')

var app = choo()
app.router([
  ['/', redirect('/welcome')],
  ['/welcome', welcomeView]
])

mount('body', app.start)

function welcomeView () {
  return html`
    <body>
      <div>welcome!</div>
    </body>
  `
}
```

## API
### view = redirect(route, rootSelector?)
Create a new view that redirects to a `route`. Can take an optional second
argument for the root selector which is used as the entry point of the
application. Defaults to `document.body`.

## Installation
```sh
$ npm install choo-redirect
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/choo-redirect.svg?style=flat-square
[3]: https://npmjs.org/package/choo-redirect
[4]: https://img.shields.io/travis/yoshuawuyts/choo-redirect/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/choo-redirect
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/choo-redirect/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/choo-redirect
[8]: http://img.shields.io/npm/dm/choo-redirect.svg?style=flat-square
[9]: https://npmjs.org/package/choo-redirect
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
