import React, { Component } from "react";
import NewsSources from "./components/NewsSources";
import NewsList from "./components/NewsList";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSource: ""
    };
  }

  Section1 = () =><section>Section 1</section>
  Section2 = () =><section>Section 2</section>
  Section3 = () =><section>Section 3</section>

  render() {
    const apiKey = "9668f23847a440f4b4d4fcf773547862";

    return (
      <div className="App">

        <Router basename="/">
          <div>
            <ul>
              <li><Link to='/'>Section 1</Link></li>
              <li><Link to='/1'>Section 2</Link></li>
              <li><Link to='/2'>Section 3</Link></li>
            </ul>
            <Switch>
                <Route exact path='/' component={this.Section1} />
                <Route exact path='/1' component={this.Section2} />
                <Route exact path='/2' component={this.Section3} />
            </Switch>
          </div>
        </Router>

        <header>
          <h1>
            <span className="firstLetter">R</span>
            eact News App
          </h1>
          <NewsSources
            language={"en"}
            apiKey={apiKey}
            onChange={this.changeSource}
          />
        </header>
        <main>
          <NewsList source={this.state.currentSource} apiKey={apiKey} />
        </main>

        <footer>
          ©<span className="firstLetter">C</span>
          epegra.be
        </footer>
      </div>
    );
  }

  changeSource = newsource => {
    this.setState({
      currentSource: newsource
    });
  };
}

export default App;
