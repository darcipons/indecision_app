let visibility = false 

const app = {
  title: 'Visibility Toggle',
  caption: 'Hey, here are some details'
}

const toggleVisibilty = () => {
  visibility = !visibility
  render()
}

const render = () => {
  const visible = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibilty}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (<p>{app.caption}</p>)}
    </div>
  ) 
  ReactDOM.render(visible, document.getElementById('app'))
}

render()

