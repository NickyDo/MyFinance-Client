import React from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource } from 'react-admin';
import Login from './Login';
import Layout  from './Layout';
import customRoutes from './routes';
import Menu from './Menu';
import authProvider from './authProvider';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux'
import './index.css';
// import Homepage from './containers/Homepage'
// import configureStore from './redux/store';

class App extends React.PureComponent {
    state = { dataProvider: null };
    componentWillMount() {
        const dataProvider = 'rest'; // fake data
        this.setState({ dataProvider });
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return (
                <div className="loader-container">
                    <div className="loader">Loading...</div>
                </div>
            );
        }

        return (
          <Admin title="Admin"
                 dataProvider={dataProvider}
                 customRoutes={customRoutes}
                 menu={Menu}
                 authProvider={authProvider}
                 loginPage={Login}
                 appLayout={Layout}>
              <Resource
                  name="Dashboard"
              />
              <Resource
                  name="manageList"
              />
          </Admin>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
