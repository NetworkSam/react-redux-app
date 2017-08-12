//实现本地存储

export function getStorage(key) {
    return localStorage.getItem(key);
}

export function setStorage(key, value) {
    localStorage.setItem(key, value);
}

export const throttle = (fn, delay)=>{
    var sw = true,time = -1;
    return ()=>{
        var args = Array.prototype.slice(arguments,0);
        var ret = fn.call(this, args);
        sw = false;
        setTimeout(()=>{
            fn();
            sw = true;
        },delay);
        return ret;
    }
}

