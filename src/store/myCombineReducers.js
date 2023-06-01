/**
 * 返回合并后的reducer
 * 每次dispatch派发都是把reducer执行
 * state 公共状态
 * action 派发行为对象
 * @return {*}
 */
const myCombineReducers = (reducers) => {
    //reducers是一个对象
    let reducerKeys = Reflect.ownKeys(reducers);
    console.log(reducerKeys);
    return function reducer(state = {}, action) {
        //把reducers中的每一项进行循环
        let nextState = {};
        reducerKeys.forEach((key) => {
            //每个模块的reducer
            let reducer = reducers[key];
            console.log(state[key]);
            nextState[key] = reducer(state[key], action);
        });
        return nextState;
    };
};
export default myCombineReducers;
