import React, { Component } from "react";
import NewsSources from "./components/NewsSources";
import NewsList from "./components/NewsList";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Settings from "./components/Settings";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSource: "",
      currentLanguage: "en"
    };
  }

  render() {
    const apiKey = "9668f23847a440f4b4d4fcf773547862";

    return (
      <div className="App">
        <Router basename="/">
          <div>
            <header>
              <h1>
                <span className="firstLetter">R</span>eact News App
              </h1>
              <NewsSources
                language={this.state.currentLanguage}
                apiKey={apiKey}
                onChange={this.changeSource}
              />
              <Menu />
            </header>
            <main>
            <Switch>
              <Route exact path="/" render = { () => <NewsList source={this.state.currentSource} apiKey={apiKey} /> }/>
              <Route exact path="/settings" render = { () => <Settings apiKey={apiKey} language={this.state.currentLanguage} onChange={this.changeSettings} /> } />
            </Switch>
              
            </main>

            <footer>
              ©<span className="firstLetter">J</span>okzin production
            </footer>
          </div>
        </Router>
      </div>
    );
  }

  changeSource = newsource => {
    this.setState({
      currentSource: newsource
    });
  };

  changeSettings = language => {
    this.setState({
      currentLanguage: language
    });
  };
}

export default App;
