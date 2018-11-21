import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../helpers/history';
import { alertActions } from '../redux/actions/alertAction';
import { PrivateRoute } from './PrivateRoute';
import HomePage from '../containers/Homepage';
import LoginPage from '../containers/LoginPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen(() => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message
              && <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
              <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App
