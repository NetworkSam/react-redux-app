import { createStore } from 'redux'

import reducer from '../reducers/index.js'

export function configureStore(initState) {
    return createStore(
        reducer,
        initState,
        window.devToolsExtension?window.devToolsExtension(): undefined
    );
}
//安装redux dev-tools
