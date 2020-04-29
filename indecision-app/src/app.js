console.log('app.js is running');

// JSX - JavaScript XML. Provided by React

const app = {
  title: 'Indecision App',
  subtitle: 'App is being made',
  options: []
}

function getOptions(option) {
  if (option.length > 0) {
    return <p>Here are your options: {option}</p>
  } else {
    return 'No Options'
  }
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button onClick={removeAll}>Remove All</button>
      {getOptions(app.options)}
      <p>{app.options.length}</p>
  
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app');
render()
