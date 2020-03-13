import React from 'react';
import './App.css'

class App extends React.Component {

  state = {
    results: [],
    options: ['people', 'planets', 'films', 'species', 'vehicles', 'starships'],
    searched: false,
    selected:'people',
    search: ''
  }

  getData = () => {
    fetch(`https://swapi.co/api/${this.state.selected}/?search=${this.state.search}`)
    .then(res => res.json())
    .then(data =>
      this.setState({
        results: data.results,
        searched: true
      }))
  }

  setSelected = value => {
    this.setState({
      selected: value
    })
  }

  setSearch = value => this.setState({search:value})

  clearSearch = () => {

  }

  render() {
  return (
    <>
      {/* <img src="https://www.flywallpaper.com/mypics/max/17/171872_star-wars-star-backgrounds.jpg" alt="the starry void of outerspace" /> */}
      <header className="header">
        <h1>Star Wars Search App!</h1>
      </header>
      <main className='App'>
        <p>Our droids are quite old, so you must be specific when you make your query below. Please choose a category before entering your query parameters!</p>
        <p>The knowledge of the Star Wars Universe awaits!</p>
        <form className="search" onSubmit={e => {
          e.preventDefault()
          this.getData()
          }}>
          <label htmlFor='selector'>Please choose a category</label>
          <select required onChange={e => this.setSelected(e.target.value)}>
            {this.state.options.map((option, idx) => {
              return(
                <option value={option} key={idx}>
                  {option}
                </option>
              )})}
          </select>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" name="search" placeholder="e.g. Wookie" onChange={e => {
            this.setSearch(e.target.value)
            }}></input>
          <button type="submit" id="submit">Find</button>
        </form>
        {this.state.searched && <div className="Results">
          <h2>Here is what our droids found</h2>
          <ul>
            {this.state.results.map(result => {
              return (
                <li>
                  {result.name}
                </li>
              )
            })}
          </ul>
        </div>}
      </main>
    </>
  )
  }
}

export default App;