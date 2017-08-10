import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader/index.js'

export default class Home extends Component {
    render(){
        return (
            <div>
                <HomeHeader cityName="Beijing"/>
                Home
            </div>
        )
    }
}