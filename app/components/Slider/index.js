import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import './index.less'

export default class Slider extends Component {
    constructor(){
        super()
        this.state = {
            index: 0
        }
    }
    render(){

        let opts = {
            continuous: true,
            callback:(index)=>{
                //console.log(index);
                this.setState({
                    index
                })
            }
        }

        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-coupons"></i>
                                <span>美食</span>
                            </li>
                        </ul>
                    </div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>

                </ReactSwipe>

                <ul className="dots">
                    <li className={this.state.index == 0? "active": ""}></li>
                    <li className={this.state.index == 1? "active": ""}></li>
                    <li className={this.state.index == 2? "active": ""}></li>
                </ul>

            </div>
        )
    }
}

