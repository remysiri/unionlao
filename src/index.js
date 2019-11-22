import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './utils/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route path="/:locale(fr|la)" component={ App } />
                <Redirect to="/fr" />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
