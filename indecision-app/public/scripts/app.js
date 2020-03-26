'use strict';

console.log('app.js is running');

// JSX - JavaScript XML. Provided by React

var app = {
  title: 'Indecision App',
  subtitle: 'App is being made',
  options: ['One', 'Two']
};

function getOptions(option) {
  if (option.length > 0) {
    return React.createElement(
      'p',
      null,
      'Here are your options: ',
      option
    );
  } else {
    return 'No Options';
  }
}
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  getOptions(app.options)
);

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
