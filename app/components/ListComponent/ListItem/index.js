import React, { Component } from 'react'
import './index.less'

export default class ListItem extends Component {
    render(){
        let { img, title, subTitle, distance, price, number, id } = this.props.data

        return (
            <div className="list-item">
                <img src={ img } alt=""/>
                <div className="list-item-content">
                    <h3>{ title }</h3>
                    <p>{ subTitle }</p>
                    <div>
                        <strong>{ price }</strong>
                       <span> 已售卖{ number }</span>
                    </div>
                    <span className="distance">{ distance }m</span>
                </div>
            </div>
        )
    }
}