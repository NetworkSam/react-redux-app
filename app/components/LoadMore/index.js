import React, { Component } from 'react'
import './index.less'
export default class LoadMore extends Component {
    render(){
        return (
            <div className="has-more">
                { this.props.hasMore?<div>加载更多</div>:<div>我是有底线</div>}
            </div>
        )
    }
}