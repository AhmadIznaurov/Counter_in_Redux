import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";



const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'increment':
            return state + 3
        case 'decrement':
            return state > 1 ? state -2 : 0
        case 'reset':
            return  0
        default:
            return state;
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>

);
