import React from 'react';

class App extends React.Component {

  state = {
    results: ''
  }

  BASE_URL = 'https://swapi.co/api/'

  getData = (search) => {
    fetch(`${this.BASE_URL}${search}`)
    .then(res => res.json())
    .then(data =>
      this.setState({
        results: data
      }))
  }

  render() {
  return (
    <body>
      <header>
        <h1>Star Wars Search App!</h1>
      </header>
      <main className='App'>
        <p>Enter your query here! The knowledge of the Star Wars Universe awaits!</p>
        <form className="search" onSubmit={e => this.getData(e.target.value)}>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" name="search" placeholder="e.g. Wookie"></input>
          <button type="submit" id="submit">Find</button>
        </form>
        <div className="Results">
          <h2>Here is what our droids found</h2>
          <ul>
            {this.state.results.map(result => {
              return (
                <li>
                  {result}
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </body>
  )
  }
}

export default App;