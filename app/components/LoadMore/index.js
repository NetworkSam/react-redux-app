import React, { Component } from 'react'
import { throttle } from '../../local/index.js'
import './index.less'
export default class LoadMore extends Component {
    constructor(){
        super()
    }
    loadMore(){
        if( this.props.isLoading ) {
            return void 0
        }
        this.props.loadMore()
    }

    componentDidMount(){
        // 绑定滚动事件

        this.fn = ()=>{
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{
                console.log('scroll');
                if(this.props.isLoading){
                    return void 0
                }
                //判断按钮距离屏幕顶端的高度和可视化的高度
                let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;
                console.log(screen, top);
                console.log(this.refs.more);
                if(screen > top ){

                    console.log('你已经滚到底部了');
                }
            },100)
        }

        window.addEventListener('scroll', this.fn , false)
    }

    componentWillUnmount(){
        // 移除滚动事件
        window.removeEventListener('scroll', this.fn)
    }

    render(){
        return (
            <div className="has-more">
                { this.props.hasMore?<div ref="more" onClick={ this.loadMore.bind(this) } >加载更多</div>:<div>我是有底线</div>}
            </div>
        )
    }
}