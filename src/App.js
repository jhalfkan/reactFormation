import React, { Component } from 'react';
import NewsSources from './components/NewsSources';
import NewsList from './components/NewsList';

class App extends Component {
  render() {
    const apiKey = '9668f23847a440f4b4d4fcf773547862';
    
    return (
      <div className="App">
        <header>
            <h1>React News App</h1>
            <NewsSources language={'en'} apiKey={apiKey} />
        </header>
        <main>
          <NewsList source={'le-monde'} apiKey={apiKey} />
        </main>

        <footer>©Cepegra.be</footer>
      </div>
    );
  }
}

export default App;
