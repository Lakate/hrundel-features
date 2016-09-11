require('./main.css');

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import Content from '../components/content';
import {boardApp} from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(boardApp);

function render() {
    ReactDom.render(
    <Content store={store} />,
        document.getElementById('root')
    );
}

render();

store.subscribe(render);
// store.subscribe(() => {
//     console.log(store.getState());
//     render();
// });
