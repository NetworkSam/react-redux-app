import React, { Component } from 'react'
import { getInfo } from '../../../fetch/detail/index.js'

export default class Info extends Component {
    componentDidMount(){
        getInfo(this.props.id).then(res=> res.json()).then((data)=>{
            console.log(data);
        })
    }

    render(){
        return (
            <div>
                Info
                id:{ this.props.id }
            </div>
        )
    }
}