import React, { Component } from 'react'
import './list.less'
import { getList } from '../../../fetch/home/index.js'
import  ListComponent  from '../../../components/ListComponent/index.js'
import LoadMore from '../../../components/LoadMore/index.js'

export default class List extends Component {
    constructor(){
        super()

        this.state = {
            data: [],
            hasMore: true,
            pageNum: 0,
        }
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0))
    }

    //需要在当前写一个加载更多的的函数，传递给loadMore， 当点击按钮 出发传递的函数
    loadMore(){

    }
    //处理成功后的数据
    processData(result){
        result.then((req)=>req.json()).then(({hasMore,data})=>{
            setTimeout(()=>{
                this.setState({
                    hasMore,
                    data
                })
            },1000)
        });
    }

    render(){
        return (
            <div>
                {
                    //将数据传递给ListComponent
                    this.state.data.length?<ListComponent data={this.state.data} />:<div>loading</div>
                }
                <LoadMore hasMore={ this.state.hasMore }/>
            </div>
        )
    }
}