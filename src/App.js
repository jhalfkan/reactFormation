import React, { Component } from 'react';
import NewsSources from './components/NewsSources';
import NewsList from './components/NewsList';

class App extends Component {
  constructor(){
    super();
    this.state = { 
        currentSource: ''
     }
}

  render() {
    const apiKey = '9668f23847a440f4b4d4fcf773547862';

    return (
      <div className="App">
        <header>
            <h1>React News App</h1>
            <NewsSources language={'en'} apiKey={apiKey} onChange={this.changeSource} />
        </header>
        <main>
          <NewsList source={this.state.currentSource} apiKey={apiKey} />
        </main>

        <footer>©Cepegra.be</footer>
      </div>
    );
  }

  changeSource = (newsource) => {
      console.log('changement de source pour ' + newsource);
      this.setState({
        currentSource: newsource
    })
  }
}

export default App;
