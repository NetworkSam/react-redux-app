import React, { Component } from 'react'
import RouterMap from '../routes/index.js'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            done: false
        }
    }

    componentDidMount(){
        // setTimeout( ()=> {
            this.setState({
                done: true
            })
        // },2000)
    }

    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>: <div>loading</div>}
            </div>
        )
    }
}
