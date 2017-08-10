import React from 'react'
import { render } from 'react-dom'
import App from './containers/index.js'
import './assets/index.less'
import { Provider } from 'react-redux'
import { configureStore } from './store/index.js'

let store = configureStore({
    userInfo: {
        cityName: 'SHANGHAI'
    }
});

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.querySelector("#app")
)