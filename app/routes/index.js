import React, { Component } from 'react'
//路由两种类型  hashRouter BrowserRouter
import {
    HashRouter as Router, //提供一个路由容器
    Route, //单条路由
    Switch //只匹配一次
} from 'react-router-dom'
import Home from '../containers/Home/index.js'
import Detail from '../containers/Detail/index.js'

export default class RouterMap extends Component {
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/* Route加上exact属性时 只有为/的时候才匹配路由 */}
                        <Route exact path='/'  component={Home}/>
                        <Route path='/detail/:id' component={ Detail }/>
                    </Switch>
                </Router>
            </div>
        )
    }
}