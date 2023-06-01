import _isPlainObject from '@/utils/isPlainObject';
/**
 * 模拟实现redux基本功能
 * @param {*} reducer
 * @returns
 */
export const createStore = (reducer) => {
    if (typeof reducer !== 'function') throw new TypeError('Expected the root reducer to be a function');
    let state; //存放公共状态
    let listeners = []; //事件池
    //获取公共状态
    const getState = () => {
        //返回公共状态
        return state;
    };
    //向事件池添加通知组件更新的方法
    const subscribe = (listener) => {
        if (typeof listener !== 'function') throw new Error('Expected the listener to be a function');
        //把传入的让组件更新的方法加入事件池；做去重处理
        if (!listeners.includes(listener)) {
            listeners.push(listener);
        }
        //返回一个从事件池中移除的方法的函数
        const unsubscribe = () => {
            let index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
        return unsubscribe;
    };
    //派发任务通知reducer执行
    const dispatch = (action) => {
        if (!_isPlainObject(action)) throw new TypeError('Actions must be plain objects');
        if (typeof action.type === 'undefined') throw new TypeError('Actions may not have an undefined type property');
        //把reducer执行,接收返回结果，修改替换公共状态
        state = reducer(state, action);
        // 当状态更改，把事件池中的方法执行
        listeners.forEach((listener) => {
            listener();
        });
        return action;
    };
    var randomString = function randomString() {
        return Math.random().toString(36).substring(7).split('').join('.');
    };
    var ActionTypes = {
        INIT: '@@myRedux/INIT' + randomString()
    };
    console.log(ActionTypes.INIT);
    //redux内部会默认进行一次dispatch派发，目的：给公共容器中的状态赋值初始值
    dispatch({
        // type:Symbol()
        type: ActionTypes.INIT
    });
    //返回创建的store对象
    return {
        getState,
        subscribe,
        dispatch
    };
};
