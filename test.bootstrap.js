global.Remarkable = require("remarkable");

// These lines initializes a vietral environment for react to use.
// Copied from https://github.com/lelandrichardson/enzyme-example-mocha/blob/master/test/.setup.js
var jsdom = require("jsdom").jsdom;
var exposedProperties = ["window", "navigator", "document"];

global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
// End of environment initializing.
