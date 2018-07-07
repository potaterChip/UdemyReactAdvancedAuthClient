import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxThunk  from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome'
import Signup from "./components/auth/Signup";
import Feature from './components/Feature';

import reducers from './reducers/index';
import SignOut from "./components/auth/SignOut";
import SignIn from "./components/auth/SignIn";

const store = createStore(
    reducers,
    { auth: { authenticated: localStorage.getItem('token') }},
    composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/feature" component={Feature} />
                <Route path="/signout" component={SignOut} />
                <Route path="/signin" component={SignIn} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);