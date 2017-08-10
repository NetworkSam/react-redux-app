import React, { Component } from 'react'
//路由两种类型  hashRouter BrowserRouter
import {
    HashRouter as Router, //提供一个路由容器
    Route, //单条路由

} from 'react-router-dom'
import Home from '../containers/Home/index.js'
export default class RouterMap extends Component {
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Route path='/'  component={Home}/>
                    </div>
                </Router>
            </div>
        )
    }
}