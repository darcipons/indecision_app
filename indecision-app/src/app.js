console.log('app.js is running');

// JSX - JavaScript XML. Provided by React

const app = {
  title: 'Indecision App',
  subtitle: 'App is being made',
  options: ['One', 'Two']
}

function getOptions(option) {
  if (option.length > 0) {
    return <p>Here are your options: {option}</p>
  } else {
    return 'No Options'
  }
}
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {getOptions(app.options)}
  </div>
);

let count = 0
const addOne = () => {
  console.log('addOne')
}

const minusOne = () => {
  console.log('minusOne')
}

const reset = () => {
  console.log('reset')
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
