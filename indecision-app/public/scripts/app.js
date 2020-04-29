'use strict';

var visibility = false;

var app = {
  title: 'Visibility Toggle',
  caption: 'Hey, here are some details'
};

var toggleVisibilty = function toggleVisibilty() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var visible = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibilty },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'p',
      null,
      app.caption
    )
  );
  ReactDOM.render(visible, document.getElementById('app'));
};

render();
