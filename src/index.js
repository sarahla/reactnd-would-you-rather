import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import WebFont from 'webfontloader';

WebFont.load({
   google: {
     families: ['Nunito:400,400i,900', 'sans-serif']
   }
});

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

