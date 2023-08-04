import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state > 1 ? state -2 : 0
        case 'reset':
            return  0
        default:
            return state;
    }
}



const preloadedState = JSON.parse(localStorage.getItem('counter')) // The JSON parsing method helps to get the key using localStorage to find the required key
console.log(preloadedState) // This log process only shows the result of compiling

const store = createStore(reducer, preloadedState ? preloadedState : initialState) // This condition returns preloadedState else 0

store.subscribe(() =>  {                 // We use subscribe to call a localstorage in it
    localStorage.setItem('counter', store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Provider store={store}>
            <App />
        </Provider>

);
