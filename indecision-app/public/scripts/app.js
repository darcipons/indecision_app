'use strict';

console.log('app.js is running');

// JSX - JavaScript XML. Provided by React

var app = {
  title: 'Indecision App',
  subtitle: 'App is being made',
  options: []
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

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var render = function render() {
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
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    getOptions(app.options),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
render();
