import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {firebaseApp} from './firebase';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createBrowserHistory } from 'history';
import {Router,Route,Switch} from 'react-router-dom';

import reducers from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import {infoUserSignIn} from './actions';


const store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history=createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user.displayName);
        console.log(user.email);
        store.dispatch(infoUserSignIn(user.displayName,user.email));
        history.push('/app');
    } else {
        history.replace('/signin');
        console.log('user вышел');
    }
});

ReactDOM.render(
    <Provider store={store}>
            <MuiThemeProvider>
                <Router history={history}>
                    <Switch>
                        <Route path={'/app'} component={App} />
                        <Route path={'/signin'} component={SignIn} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);


