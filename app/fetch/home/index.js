import { get } from '../index.js'
export function getAd() {
    return get('/api/ad')
}

export function getList(city, page) {
    return get('/api/list/`${city}`/`${page}`');
}