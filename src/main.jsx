import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { reducers } from "./slides/index.jsx"
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: reducers
});
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
        </Provider >
)
