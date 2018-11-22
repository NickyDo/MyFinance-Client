import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css';
import Homepage from './containers/Homepage'
import configureStore from './redux/store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
