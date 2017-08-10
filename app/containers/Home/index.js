import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader/index.js'
import Slider from '../../components/Slider/index.js'
import Ad from '../../containers/Home/subpage/ad.js'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
                Home
            </div>
        )
    }
}

//取出redux中的城市传递给HomeHeader组件
export default connect(
    state=>{           //mapStateToProps
        return {
            userInfo: state.userInfo
        }
    },
    dispatch=>{       //mapDispatchToProps
        return {}
    }
)(Home)
