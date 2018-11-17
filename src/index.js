import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Homepage from './components/Homepage'

class App extends React.PureComponent {
  render() {
    return (
      <div id="page">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Homepage
                  {...props}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
