import * as Types from '../actionTypes/userInfo.js';

//actionCreator 是一个函数

export function update(data) {
    //修改动作
    return {
        type: Types.UPDATE_CITY,
        data
    }
}