import * as Types from '../actionTypes/userInfo.js';
let initState = {}

export function userInfo(state = initState, action = {}) {
    //将传入的的state更新成最新的状态
    switch (action.type){
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}

