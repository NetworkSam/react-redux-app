import React from 'react'
import { render } from 'react-dom'
import App from './containers/index.js'
import './assets/index.less'

render(
    <App/> ,
    document.querySelector("#app")
)