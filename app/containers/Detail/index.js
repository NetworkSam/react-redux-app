import React, { Component } from 'react'
import HeaderComponent from '../../components/HeadereComponent/index.js'
import Info from './subpage/info.js'
//通过路由渲染的组件都会在this.props上增加很多属性,例如history,match...

export default class Detail extends Component {
    render(){
        console.log(this.props);
        return (
            <div>
                { /*头部*/ }
                <HeaderComponent history={this.props.history} title="商户详情"/>
                { /*商户信息*/ }
                <Info id={this.props.match.params.id} />
                { /*购买和收藏*/ }

                { /*评论*/}
                Detail
            </div>
        )
    }
}