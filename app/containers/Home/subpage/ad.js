import React, { Component } from 'react'
import { getAd } from  '../../../fetch/home'
import './ad.less'

export default class Ad extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    // componentDidMount(){
    //     getAd().then((res)=>res.json()).then((data)=>{
    //         this.setState({
    //             data: data
    //         })
    //     })
    // }

    render(){
        let data = this.state.data;
        // console.log(data);
        return (
            <div className="ad">
                <h3>超值特惠</h3>
                {
                    data.length?
                        data.map((item, index)=>{
                           return(
                               <a href={item.link} key={index}>
                                   <img src={item.img} alt={item.title}/>
                               </a>
                           )
                        }):"loading"
                }
            </div>
        )
    }

    componentDidMount(){
        getAd().then((res)=>res.json()).then((data)=>{
            this.setState({
                data: data
            })
        })
    }

}