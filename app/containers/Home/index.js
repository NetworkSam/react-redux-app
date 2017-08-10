import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader/index.js'
import Slider from '../../components/Slider/index.js'
export default class Home extends Component {
    render(){
        return (
            <div>
                <HomeHeader cityName="Beijing"/>
                <Slider/>
                Home
            </div>
        )
    }
}