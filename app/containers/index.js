import React, { Component } from 'react'
import RouterMap from '../routes/index.js'
import { connect } from 'react-redux'
//绑定actionCreators
import { bindActionCreators } from 'redux'
//获取所有actionCreator组成的对象
import * as Actions from '../actions/userInfo.js'
import { getStorage, setStorage } from '../local/index.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            done: false
        }
    }
    componentDidMount(){
        //先去本地查找 是否存储过localStorage cityName
        //1、 没有cityName 赋值一个默认值 杭州
        //2、 将当前的城市存储在redux
       let city =  getStorage('cityName');
       if(!city){
           city = "HANGZHOU"
       }
       //页面加载后 设置一个城市默认值
       this.props.userAction.update({
           cityName: city
       });
        this.setState({
            done: true
        })
        console.log(this.props.userAction)
    }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>: <div>loading</div>}
            </div>
        )
    }
}

export default connect(
    state=>{      // mapStateToProps
        return {}
    },
    dispatch=>{   // mapDispatchToProps
        return {
            userAction: bindActionCreators(Actions, dispatch)
        }
    }
)(App)