import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createBrowserHistory from 'history/createBrowserHistory';
import {BrowserRouter,Route} from 'react-router-dom';

import reducers from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

const history=createBrowserHistory();


const store=createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
            <MuiThemeProvider>
                <BrowserRouter history={history}>
                    <div>
                        <Route exact path={'/'} component={App} />
                        <Route path={'/signin'} component={SignIn} />
                        <Route path={'/signout'} component={SignOut} />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);