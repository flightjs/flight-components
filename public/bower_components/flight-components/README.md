# flight-components

[![Build Status](https://secure.travis-ci.org/rogeliog/flight-components.png)](http://travis-ci.org/rogeliog/flight-components)

A [Flight](https://github.com/flightjs/flight) component to get a list of all the registered Flight components

## Installation

```bash
bower install --save flight-components
```

## Example

### Attach it to an element

```javascript

define(function (require) {

  var flightComponents = require('flight-components/lib/flight-components');

  return initialize;

  function initialize() {
    flightComponents.attachTo('#selector', {
      except: ['flight-mocha', 'flight-jasmine'] // Manually exclude components
    });
  };
});

```

### Interact with it

```javascript
define(function (require) {

  var defineComponent = require('flight/lib/component');

  return defineComponent(myComponent);

  function myComponent() {
    .
    .

    this.handleError = function(ev, data) {
      console.log('ERROR');
    };

    this.displayComponents = function(ev, data) {
      //data is an array of components
    };

    this.after('initialize', function () {
      this.trigger('needs-flight-components');

      this.on('flight-components-served', this.displayComponents);

      this.on('flight-components-error', this.handleError);
    });
  };
});
```

Each component has the following properties: name, description, owner, website, forks, stars, created and updated.

## Development

Development of this component requires [Bower](http://bower.io), and preferably
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
