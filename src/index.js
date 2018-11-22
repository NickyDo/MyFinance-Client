import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css';
import Homepage from './containers/Homepage'
import configureStore from './redux/store';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

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
