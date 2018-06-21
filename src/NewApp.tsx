import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import history from './redux/generateHistory';
import { Switch, Route } from 'react-router-dom';
import App from './App'

const store = configureStore();

export default class NewApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
			  		<Route exact path='/' component={App}/>
					</Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

