
//合并所有reducer 导出去让store使用

import { combineReducers } from 'redux'

import {
    userInfo
} from './userInfo.js'

export default combineReducers({
    userInfo
})