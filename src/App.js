import React, { Component } from 'react';
import NewsSources from './components/NewsSources';
import NewsList from './components/NewsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <h1>React News App</h1>
            <NewsSources />
        </header>
        <main>
          <NewsList />
        </main>

        <footer>©Cepegra.be</footer>
      </div>
    );
  }
}

export default App;
